#!/bin/sh

cd data
if [ ! -d "node_modules" ]; then
    echo " ✔ Installing data dependencies"
    yarn install >> /dev/null
fi
if [ -d "lib" ]; then
    echo " ✔ Cleaning up data folder"
    rm -r lib
fi
echo " ✔ Compiling data to JavaScript"
yarn build >> /dev/null
cd ..
