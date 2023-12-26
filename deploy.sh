#!/bin/bash

export NVM_DIR=$HOME/.nvm;
. $NVM_DIR/nvm.sh;

cd nextjs-blog
git pull origin master
nvm use v20
yarn install &&
yarn build &&
pm2 restart npm