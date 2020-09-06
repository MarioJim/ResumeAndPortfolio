#!/bin/bash

# Script to compile my portfolio and resume
# Mario Jiménez <mario.emilio.j@gmail.com>

echo " ✔ Installing and symlinking dependecies"
yarn install
echo " ✔ Compiling data module"
yarn workspace data build
echo " ✔ Generating languages widget"
yarn workspace languages-widget build
echo " ✔ Compiling resume"
yarn workspace resume build
echo " ✔ Building portfolio"
yarn workspace portfolio build
echo " ✔ Moving widget and resume"
yarn workspace languages-widget move
yarn workspace resume move
