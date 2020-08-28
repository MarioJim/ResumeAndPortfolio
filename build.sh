#!/bin/bash

# Usage: ./$(basename $0) [options]
# Script to compile my portfolio and resume

echo " ✔ Installing and symlinking dependecies"
yarn install
echo " ✔ Compiling data module"
yarn workspace data build
echo " ✔ Compiling resume"
yarn workspace resume build
echo " ✔ Building portfolio"
yarn workspace portfolio build
