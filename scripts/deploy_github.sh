#!/usr/bin/env bash

yarn build &&

cd build &&

git init &&
git add . &&
git commit -m "deploy" &&
git remote add origin git@github.com:yichang8421/BitByBiter-website.git &&
git push -u origin master -f

cd -

# deploy_github.sh 写完以后记得添加可执行权限：chmod +x scripts/deploy_github.sh（Windows系统可不执行此句）