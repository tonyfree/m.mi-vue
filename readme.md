### 分类和首页的数据加载优化
+ 路由切换时无loading状态: [路由数据获取](https://router.vuejs.org/zh/guide/advanced/data-fetching.html)、[导航守卫--beforeRouteEnter](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html)
+ MiHome.vue加载加载状态处理
+ NProgress全局化: [导航守卫--beforEach](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html)

### 商品列表
+ 数据结构和渲染: [动态路由匹配](https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html)
+ HTML文本([v-html](https://cn.vuejs.org/v2/guide/syntax.html#%E5%8E%9F%E5%A7%8B-HTML)、[防xss攻击](https://github.com/cure53/DOMPurify))
```
cnpm install dompurify -S
yarn add dompurify -S
```
+ 底部导航组件to的优化(name)

### 猜你喜欢
+ 数据结构和渲染

### 路由切换过渡优化
+ 默认'page-left',刷新时为''
+ 底部导航切换时根据路由信息判断
+ 顶部搜索组件后退时，通过全局bus设置为'page'
+ 过渡完成后还原：[过渡JavaScript钩子--after-leave](https://cn.vuejs.org/v2/guide/transitions.html#JavaScript-%E9%92%A9%E5%AD%90)