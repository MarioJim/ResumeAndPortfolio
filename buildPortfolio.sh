#!/bin/zsh

cp -r data portfolio/src/
cd portfolio
yarn build
rm -r src/data
cd ../../mariojim.github.io
rm -r *
mv ../ResumeAndPortfolio/portfolio/build/* .
rmdir ../ResumeAndPortfolio/portfolio/build
git restore LICENSE README.md
git status
