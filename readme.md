<<<<<<< HEAD
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
+ MiHome.vue组件(列表渲染、列表过渡)
+ 响应式原理
+ iscroll、nprogress
=======
### API封装优化
+ 创建api文件夹, api统一放到index.js
+ 封装fetch
+ 创建mock文件夹, 本地备份mock数据
+ 当rap接口异常时调用本地mock数据
```
# js安全整数是53位
Number.MAX_SAFE_INTEGER = 9007199254740991 = 2^53 - 1

cnpm i mockjs -S
```

### MiHome.vue组件
+ 生命周期: [生命周期钩子](https://cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90)、[生命周期图示](https://cn.vuejs.org/v2/guide/instance.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%9B%BE%E7%A4%BA)
+ [响应式原理](https://cn.vuejs.org/v2/guide/reactivity.html)
+ 列表渲染(v-for、key)
+ 列表过渡(transition-group)
+ swiper、nprogress
```
cnpm i swiper -S
cnpm i nprogress -S
```

### 业务场景
+ 顶部导航栏(异步数据动态渲染、左右滑动、点击选择-焦点状态)
+ 内容区(首次异步数据、过渡效果)
+ 进度条(内容区首次加载数据时)
>>>>>>> lesson04
