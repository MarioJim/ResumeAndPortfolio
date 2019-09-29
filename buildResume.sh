#!/bin/sh

if [ ! -d "data/lib" ]; then
    echo " ✔ Compling data module"
    sh ./buildData.sh > /dev/null
fi
echo " ✔ Preparing..."
cd resume
if [ -d "build" ]; then
    rm -r build
fi
mkdir -p build/sections
echo " ✔ Compiling data to LaTeX"
yarn ts-node src/index.ts >> /dev/null
cp -r static/* build
cd build
echo " ✔ Compiling LaTeX to pdf"
xelatex resume.tex > /dev/null
echo " ✔ Copying resume.pdf to portfolio and webpage"
cp resume.pdf ../../portfolio/public/resume.pdf
cp resume.pdf ../../../mariojim.github.io/resume.pdf
echo " ✔ Cleaning up"
cd ..
rm -r build
