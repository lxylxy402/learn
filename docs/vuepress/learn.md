---
title: vuepress 初接触
author: 浊清
date: '2021-12-12'
---

### 参考地址
[冴羽的个人博客](https://github.com/mqyqingfeng/Blog/issues/235)

### 注意事项
+ <html color=red>不能设置index.md,否则子目录出不来</html>

### config.js 热更新
+ "dev": "vuepress dev docs" 更改为 "dev": "vuepress dev docs --temp .temp"
+ 设置完以后，新增插件记得删除.temp后在重新启动，防止缓存影响
