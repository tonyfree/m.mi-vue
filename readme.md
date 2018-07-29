# m.mi
Refactor the mi mall with vue, vue-router, vex, etc.

### [lesson01--项目创建](https://github.com/tonyfree/m.mi/tree/lesson01)
+ vue-cli和vue-loader版本说明
+ 单vue文件组件：顶级元素、预处理器、CSS作用域

### [lesson02--适配方案viewport](https://github.com/tonyfree/m.mi/tree/lesson02)
+ 安装安插、配置postcss
+ 添加兼容性处理：buggyfill

### [lesson03--登录](https://github.com/tonyfree/m.mi/tree/lesson03)
+ 样式处理(normalize.css、reset.css、字体图标)
+ 路由处理
+ MiLogin.vue组件(Vue实例、模板语法、计算属性、Class和Style绑定、条件渲染和事件处理)
+ axios、接口管理平台RAP2
+ 优化：函数节流、数据加密、scripts-serve

### [lesson04--首页](https://github.com/tonyfree/m.mi/tree/lesson04)
+ API封装优化(rap的url和fetch封装)
+ Mock数据本地备份
+ 生命周期、响应式原理
+ MiHome.vue组件(列表渲染、列表过渡)
+ swiper、nprogress

### [lesson05--底部导航](https://github.com/tonyfree/m.mi/tree/lesson05)
+ 单页面应用：[小米商城](https://m.mi.com/)、[网易云音乐](https://music.163.com/)、[饿了么](https://www.ele.me)、[vue-router文档](https://router.vuejs.org/zh/)
+ [起步指南](https://router.vuejs.org/zh/guide/#html)
+ 重定向、焦点状态(active-class)、路由对象($route)、过渡动效、路由元信息、路由懒加载

### [lesson06--分类](https://github.com/tonyfree/m.mi/tree/lesson06)
+ 数据结构优化
+ 组件通信(props down、全局bus)
+ loading状态优化
+ 部分交互处理
+ 图片懒加载

### [lesson07--商品列表](https://github.com/tonyfree/m.mi/tree/lesson07)
+ 商品列表组件和猜你喜欢组件
+ 路由：[路由数据获取](https://router.vuejs.org/zh/guide/advanced/data-fetching.html)、[导航守卫--beforeRouteEnter](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html)、[导航守卫--beforEach](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html)、[动态路由匹配](https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html)
+ HTML文本([v-html](https://cn.vuejs.org/v2/guide/syntax.html#%E5%8E%9F%E5%A7%8B-HTML)、[防xss攻击](https://github.com/cure53/DOMPurify))
+ 过渡：[JavaScript钩子--after-leave](https://cn.vuejs.org/v2/guide/transitions.html#JavaScript-%E9%92%A9%E5%AD%90)

### [lesson08--商品详情](https://github.com/tonyfree/m.mi/tree/lesson08)
+ 图片轮播(Swiper)
+ mixin混入
+ 组件：用户评价、为你推荐(重构猜你喜欢)、SKU组件
+ 父子组件通信

### [lesson09--购物车上](https://github.com/tonyfree/m.mi/tree/lesson09)
+ 加载状态组件：MiSkeleton.vue
+ 用Vuex管理加载状态viewLoading和过渡效果transitionName
+ 页面结构、数据结构和API接口分析
+ 数据结构修改和渲染

### [lesson10--购物车下](https://github.com/tonyfree/m.mi/tree/lesson10)
+ 购物车操作：选择商品、修改数量、选择服务、删除商品
+ MiPop组件：在组件上使用v-model、通过插槽分发内容

### [lesson11--个人中心](https://github.com/tonyfree/m.mi/tree/lesson11)
+ 混入处理：底部组件和标题组件
+ 状态管理：用户信息
+ 路由处理：登录权限

### [lesson12--地址管理上](https://github.com/tonyfree/m.mi/tree/lesson12)
+ 地址操作：列表展示、新增编辑、删除、选择省市区
+ MiDialog组件：组件调用、插件调用、函数调用

### [lesson13--地址管理下](https://github.com/tonyfree/m.mi/tree/lesson13)
+ API的Service封装
+ vuex之Module
+ MiDetail组件中地址管理
