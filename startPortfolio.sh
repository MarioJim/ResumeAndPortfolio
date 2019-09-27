#!/bin/zsh

set -e
function cleanup {
    rm -r src/data
}
trap cleanup SIGINT SIGTERM

cp -r data portfolio/src/
cd portfolio
yarn start
