#!/bin/sh

# dnajs-webpack-to-do-app
#
# To make this file runnable:
#     $ chmod +x build.sh.command

projectHome=$(cd $(dirname $0); pwd)

info() {
   cd $projectHome
   pwd
   echo
   echo "Node.js:"
   which node || { echo "Need to install Node.js: https://nodejs.org"; exit; }
   node --version
   test -d node_modules || npm install
   npm update
   npm outdated
   echo
   }

build() {
   cd $projectHome
   echo "webpack.config.js:"
   npm test
   echo
   echo "Dist folder:"
   cd dist
   ls -l
   sleep 2
   open index.html
   echo
   }

echo
echo "Build"
echo "====="
info
build
