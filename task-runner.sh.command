#!/bin/bash

# webpack-to-do-app
#
# To make this file runnable:
#     $ chmod +x build.sh.command

banner="webpack-to-do-app"
projectHome=$(cd $(dirname $0); pwd)

setupTools() {
   cd $projectHome
   echo
   echo $banner
   echo $(echo $banner | sed s/./=/g)
   pwd
   test -d .git || { echo "Project must be in a git repository."; exit; }
   git pull --ff-only
   echo
   echo "Node.js:"
   which node || { echo "Need to install Node.js: https://nodejs.org"; exit; }
   node --version
   npm install --no-fund
   npm update --no-fund
   npm outdated
   echo
   }

buildProject() {
   cd $projectHome
   echo "webpack.config.js:"
   npm test
   echo
   echo "Build output folder:"
   cd docs
   pwd
   ls -o
   echo
   }

setupTools
buildProject
sleep 2
open $projectHome/docs/index.html
