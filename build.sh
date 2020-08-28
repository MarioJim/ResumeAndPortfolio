#!/bin/bash

# Script to compile my portfolio and resume
# Mario Jiménez <mario.emilio.j@gmail.com>

echo " ✔ Installing and symlinking dependecies"
yarn install
echo " ✔ Compiling data module"
yarn workspace data build
echo " ✔ Compiling resume"
yarn workspace resume build
echo " ✔ Building portfolio"
yarn workspace portfolio build
echo " ✔ Moving resume"
yarn workspace resume move
