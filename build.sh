#!/bin/sh

PORTFOLIO=false
RESUME=false
SHOW_STATUS=false
# 0 = quiet, 1 = normal, 2 = verbose
VERBOSITY=1

log() {
    if ((VERBOSITY == 0))
    then
        "$@" &>/dev/null
    elif ((VERBOSITY == 1))
    then
        "$@" 1>/dev/null
    else
        "$@"
    fi
}

print_help() {
    cat <<HELP
Usage: $(basename $0) [OPTION]
Script to compile and build my portfolio and/or my resume.

    -p, --portfolio     Build my portfolio
    -r, --resume        Build my resume
    -s, --status        Show 'git status' on the website repository
    -v, --verbose       Verbose (stdout and stderr)
    -q, --quiet         Quiet (only progress)
    -h, --help          Show help (this)

HELP
}

parse() {
    if (( $# == 0 )); then
        echo "No arguments passed."
        print_help
        exit 0
    fi
    while [[ "$1" == -* ]]; do
        case "$1" in
            -p|--portfolio) PORTFOLIO=true;;
            -r|--resume) RESUME=true;;
            -s|--status) SHOW_STATUS=true;;
            -v|--verbose) VERBOSITY=2;;
            -q|--quiet) VERBOSITY=0;;
            -h|--help)
                print_help
                exit 0
                ;;
            *)
                echo "Unrecognized "$1" argument passed."
                print_help
                exit 1
                ;;
        esac
        shift
    done
}

installDependencies() {
    if [ ! -d "node_modules" ]; then
        echo " ✔ Installing $1 dependencies"
        log yarn install
    fi
}

buildData() {
    pushd data > /dev/null
    installDependencies "data"
    if [ -d "lib" ]; then
        echo " ✔ Cleaning up data folder"
        rm -r lib
    fi
    echo " ✔ Compiling data to JavaScript"
    log yarn build
    popd > /dev/null
}

checkSymlink2Data() {
    if [ ! -L "node_modules/data" ]; then
        echo " ✔ Linking dependency to local data package"
        rm -r node_modules/data
        ln -s ../../data node_modules/data
    fi
}

checkDestGitRepo() {
    if [ ! -d "../../mariojim.github.io" ]; then
        echo " ✔ Cloning server repository"
        pushd ../../ > /dev/null
        log git clone https://github.com/MarioJim/mariojim.github.io.git
        popd > /dev/null
    fi
}

printWebsiteRepoStatus() {
    echo " ✔ Status of webpage:"
    pushd ../mariojim.github.io > /dev/null
    git restore LICENSE README.md
    git status
    popd > /dev/null
}

buildResume() {
    pushd resume > /dev/null
    installDependencies "resume"
    checkSymlink2Data
    if [ -d "build" ]; then
        echo " ✔ Cleaning up build folder"
        rm -r build
    fi
    mkdir -p build/sections
    echo " ✔ Compiling data to LaTeX"
    log yarn build
    cp -r static/* build
    echo " ✔ Compiling LaTeX to pdf"
    pushd build > /dev/null
    log xelatex resume.tex
    popd > /dev/null
    echo " ✔ Copying resume.pdf to portfolio"
    cp build/resume.pdf ../portfolio/public/resume.pdf
    checkDestGitRepo
    if ! $PORTFOLIO; then
        echo " ✔ Copying resume.pdf to webpage"
        cp build/resume.pdf ../../mariojim.github.io/resume.pdf
    fi
    echo " ✔ Cleaning up resume folder"
    rm -r build
    popd > /dev/null
}

buildPortfolio() {
    pushd portfolio > /dev/null
    installDependencies "portfolio"
    checkSymlink2Data
    echo " ✔ Compiling to a webpage"
    log yarn build
    checkDestGitRepo
    echo " ✔ Clearing mariojim.github.io"
    rm -r ../../mariojim.github.io/*
    echo " ✔ Moving files to mariojim.github.io"
    mv build/* ../../mariojim.github.io
    rmdir build
    pushd ../../mariojim.github.io > /dev/null
    log git restore LICENSE README.md
    log git add .
    popd > /dev/null
    popd > /dev/null
}

main() {
    parse "$@"
    if $PORTFOLIO || $RESUME; then
        buildData
    fi
    if $RESUME; then
        buildResume
    fi
    if $PORTFOLIO; then
        buildPortfolio
    fi
    if $SHOW_STATUS; then
        printWebsiteRepoStatus
    fi
}

main "$@"
