#!/bin/sh

DEST="mariojim.github.io"

./buildData.sh
cd portfolio
if [ ! -d "node_modules" ]; then
    echo " ✔ Installing portfolio dependencies"
    yarn install >> /dev/null
fi
if [ "$(file -b node_modules/data)" != "symbolic link to ../../data" ]; then
    echo " ✔ Linking dependency to local data package"
    rm -r node_modules/data
    ln -s ../../data node_modules/data
fi
echo " ✔ Compiling to a webpage"
yarn build >> /dev/null
if [ ! -d "../../"$DEST"" ];  then
    echo " ✔ Cloning server repository"
    pushd ../../
    git clone https://github.com/MarioJim/mariojim.github.io.git >> /dev/null
    popd
fi
echo " ✔ Clearing "$DEST""
rm -r ../../"$DEST"/*
echo " ✔ Moving files to "$DEST""
mv build/* ../../"$DEST"
rmdir build
echo " ✔ Status of webpage:"
cd ../../"$DEST"
git restore LICENSE README.md
git status
