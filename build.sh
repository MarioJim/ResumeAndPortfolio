#!/bin/sh

COPY_FILES=false
SHOW_STATUS=false
VERBOSITY=1 # 0 = quiet, 1 = normal, 2 = verbose

log() {
    if ((VERBOSITY == 0)); then
        "$@" &>/dev/null
    elif ((VERBOSITY == 1)); then
        "$@" 1>/dev/null
    else
        "$@"
    fi
}

print_help() {
    cat <<HELP
Usage: ./$(basename $0) [options]
Script to compile and build my portfolio and my resume.

    -c, --copy          Copy files into the website repository          
    -s, --status        Show 'git status' on the website repository
    -v, --verbose       Verbose (stdout and stderr)
    -q, --quiet         Quiet (only progress)
    -h, --help          Show help (this)

HELP
}

parse() {
    while [[ "$1" == -* ]]; do
        case "$1" in
            -c|--copy) COPY_FILES=true;;
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

checkDependencies() {
    echo " ✔ Checking dependencies"
    if [ $(which lerna > /dev/null 2>&1) ]; then
        echo "lerna not installed, run 'sudo npm i lerna -g'"
        exit 1
    fi
    if [ $(which xelatex > /dev/null 2>&1) ]; then
        echo "xelatex not installed, add package 'texlive'"
        exit 1
    fi
}

copyToRepo() {
    if [ ! -d "../mariojim.github.io" ]; then
        echo " ✔ Cloning server repository"
        pushd ../ > /dev/null
        log git clone https://github.com/MarioJim/mariojim.github.io.git
        popd > /dev/null
    fi
    echo " ✔ Clearing mariojim.github.io"
    rm -r ../mariojim.github.io/*
    echo " ✔ Moving files to mariojim.github.io"
    mv portfolio/public/* ../mariojim.github.io
    rmdir portfolio/public
    pushd ../mariojim.github.io > /dev/null
    log git restore LICENSE README.md
    log git add .
    popd > /dev/null
}

printWebsiteRepoStatus() {
    echo " ✔ Status of webpage:"
    pushd ../mariojim.github.io > /dev/null
    git restore LICENSE README.md
    git status
    popd > /dev/null
}

main() {
    parse "$@"
    checkDependencies
    echo " ✔ Installing and symlinking dependecies"
    log lerna bootstrap
    echo " ✔ Building and compiling, please wait"
    log lerna run build
    if $COPY_FILES; then
        copyToRepo
    fi
    if $SHOW_STATUS; then
        printWebsiteRepoStatus
    fi
}

main "$@"
