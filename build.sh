#!/bin/sh

COPY_FILES=false
QUIET=false # 0 (quiet), 1 (normal), 2 (verbose)

print_help() {
    cat <<HELP
Usage: ./$(basename $0) [options]
Script to compile and publish my portfolio and resume

    -c, --copy          Copy files into the website repository
    -C, --only-copy     Only copy the files to the website repo
    -q, --quiet         Quiet (only progress)
    -h, --help          Show help (this)

HELP
    exit 0
}

parse() {
    while [[ "$1" == -* ]]; do
        case "$1" in
            -c|--copy) COPY_FILES=true;;
            -C|--only-copy) copyToRepo; exit 0;;
            -q|--quiet) QUIET=true;;
            -h|--help) print_help;;
            *) echo "Unrecognized "$1" argument passed"; print_help;;
        esac
        shift
    done
}

checkDependencies() {
    echo " ✔ Checking dependencies"
    [ -x "$(command -v xelatex)" ] || {
        echo "xelatex not installed, run 'yay -S texlive-bin'"
        exit 1
    }
}

log() {
    [ "$QUIET" = true ] &&"$@" &>/dev/null || "$@"
}

cloneRepo() {
    echo " ✔ Cloning server repository"
    pushd .. > /dev/null
    log git clone git@github.com:MarioJim/mariojim.github.io.git
    popd > /dev/null
}

copyToRepo() {
    [ ! -d "../mariojim.github.io" ] && cloneRepo
    echo " ✔ Emptying mariojim.github.io"
    rm -rf ../mariojim.github.io/*
    echo " ✔ Moving files to mariojim.github.io"
    mv portfolio/public/* ../mariojim.github.io
    rmdir portfolio/public
    echo " ✔ Status of webpage:"
    pushd ../mariojim.github.io > /dev/null
    log git restore LICENSE README.md
    git status
    popd > /dev/null
}

parse "$@"
checkDependencies
echo " ✔ Installing and symlinking dependecies"
log yarn install
echo " ✔ Compiling data module"
log yarn workspace data build
echo " ✔ Compiling resume"
log yarn workspace resume build
echo " ✔ Building portfolio"
log yarn workspace portfolio build
$COPY_FILES && copyToRepo || exit 0
