### 底部导航组件
+ 静态数据渲染(v-for)
+ 焦点状态切换
+ 从MiHome.vue迁移到App.vue

### 路由
+ 单页面应用：[小米商城](https://m.mi.com/)、[网易云音乐](https://music.163.com/)、[饿了么](https://www.ele.me)、[vue-router文档](https://router.vuejs.org)
+ 创建组件：MiCategory、MiCart、MiUser
+ [起步指南](https://router.vuejs.org/zh/guide/#html)
```html
# template
<template>
  <div id="app">
    <p>
      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <router-link to="/foo">Go to Foo</router-link>
      <router-link to="/bar">Go to Bar</router-link>
    </p>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>
```
```javascript
# script
// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router) 

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
import Foo from '@/components/Foo.vue'
import Bar from '@/components/Bar.vue'

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router
}).$mount('#app')

// 现在，应用已经启动了！
```
+ 通过navigation配置来实现路由跳转(重定向)
+ 焦点状态的处理：active-class
+ 路由对象：$route
+ 过渡动效
+ 路由元信息
+ 路由懒加载


### 作业
+ 首页顶部到用户中心的路由跳转
+ [vue-router文档](https://router.vuejs.org/zh/)
+ [vue-router:examples](https://github.com/vuejs/vue-router/tree/dev/examples)