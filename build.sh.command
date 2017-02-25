#!/bin/sh

# webpack-to-do-list
#
# To make this file runnable:
#     $ chmod +x build.sh.command

projectHome=$(cd $(dirname $0); pwd)

setup() {
   cd $projectHome
   pwd
   echo
   echo "npm:"
   which npm || echo "Need to install npm: https://nodejs.org"
   npm --version
   echo
   npm update
   echo
   }

build() {
   cd $projectHome
   echo "webpack.config.js:"
   npm run build
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
setup
build
