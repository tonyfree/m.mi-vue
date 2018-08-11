### api
+ url跟线上统一
+ restful

### 底部导航购物车数量
+ API Service
+ vuex module
+ App组件初始化数据、Footer组件展示、SKU和Cart组件更新数据

### 未实现功能
+ 首页：回到顶部、tab内容
+ 搜索路由
+ 商品详情页：分享、优惠券
+ 商品评论路由
+ 结算路由
+ 个人中心

### css预处理stylus
+ 安装插件
```
yarn add stylus,stylus-loader -D
```
+ 可以省略花括号、冒号、分号，可以嵌套
+ 全局变量（混合、方法）处理
+ 配置vue.config.js

### 联调阶段
+ webpack devServe:proxy
+ nginx:proxy(本地映射域名)

### 打包部署：
+ chunk name
+ 不再使用本地mock
+ 把vue相关的模块单独打包

### 支持https的接口管理平台
+ [eolinker](https://www.eolinker.com)
+ [easyapi](https://www.easyapi.com/)
+ [doclever](http://doclever.cn)

### 作业
+ [Vue CLI文档](https://cli.vuejs.org/zh/guide/)