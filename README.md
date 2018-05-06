# m.mi
Refactor the mi mall with vue, vue-router, vex, etc.

## lesson01 -- 脚手架[vue-cli](https://github.com/vuejs/vue-cli)
```
cnpm install -g @vue/cli

# 3.0以前安装
cnpm install -g vue-cli

# 查看版本
vue --version
```
+ 至2018.05.06最新版本为：v3.0.0-beta.9，本课程使用此版本
+ 目前还是beta版，官方建议不要在生产中使用
+ 3.0版默认采用零配置(基于webpack)
+ 创建项目：选择Router、Vuex、Linter (Eslint + Standard config)
```
vue create m.mi

# 3.0以前创建项目
vue init webpack m.mi

# 3.0使用init命令需安装
cnpm i -g @vue/cli-init
```
