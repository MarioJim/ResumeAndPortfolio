#!/bin/sh

DEST="mariojim.github.io"

if [ ! -d "data/lib" ]; then
    echo " ✔ Compling data module"
    sh ./buildData.sh > /dev/null
fi
echo " ✔ Preparing..."
cd portfolio
echo " ✔ Compiling to a webpage"
yarn build >> /dev/null
cd ../../"$DEST"
rm -r *
echo " ✔ Moving files to $DEST"
mv ../ResumeAndPortfolio/portfolio/build/* .
rmdir ../ResumeAndPortfolio/portfolio/build
git restore LICENSE README.md
echo " ✔ Status of webpage:"
git status
