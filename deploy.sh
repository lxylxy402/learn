#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<lxylxy402>.github.io/<REPO>
git push -f 1229212274@qq.com:lxylxy402/learn.git master:gh-pages

cd -