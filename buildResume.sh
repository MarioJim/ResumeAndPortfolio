#!/bin/sh

DEST="mariojim.github.io"

./buildData.sh
cd resume
if [ ! -d "node_modules" ]; then
    echo " ✔ Installing resume dependencies"
    yarn install >> /dev/null
fi
if [ "$(file -b node_modules/data)" != "symbolic link to ../../data" ]; then
    echo " ✔ Linking dependency to local data package"
    rm -r node_modules/data
    ln -s ../../data node_modules/data
fi
if [ -d "build" ]; then
    echo " ✔ Cleaning up build folder"
    rm -r build
fi
mkdir -p build/sections
echo " ✔ Compiling data to LaTeX"
yarn build >> /dev/null
cp -r static/* build
cd build
echo " ✔ Compiling LaTeX to pdf"
xelatex resume.tex >> /dev/null
cd ..
echo " ✔ Copying resume.pdf to portfolio"
cp build/resume.pdf ../portfolio/public/resume.pdf
if [ ! -d "../../"$DEST"" ];  then
    echo " ✔ Cloning server repository"
    pushd ../../
    git clone https://github.com/MarioJim/mariojim.github.io.git >> /dev/null
    popd
fi
echo " ✔ Copying resume.pdf to webpage"
cp build/resume.pdf ../../mariojim.github.io/resume.pdf
echo " ✔ Cleaning up"
rm -r build
