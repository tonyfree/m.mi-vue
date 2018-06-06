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
+ [swiper](https://github.com/nolimits4web/swiper)、[nprogress](https://github.com/rstacruz/nprogress)
```
cnpm i swiper -S
cnpm i nprogress -S
```

### 业务场景
+ 顶部导航栏(异步数据动态渲染、左右滑动、点击选择-焦点状态)
+ 内容区(首次异步数据、过渡效果)
+ 进度条(内容区首次加载数据时)

### 作业
+ 还有什么方法可以解决js动态生成dom节点无法获取作用域样式问题
+ 用过渡实现登录页电话号码区号的动画效果
+ 离开登录页时，注销定时器
+ 预习vue-router
+ 扩展：tab切换时焦点居中显示(基于swiper、[iscroll](https://github.com/cubiq/iscroll)、[vant](https://www.youzanyun.com/zanui/vant#/zh-CN/tab))