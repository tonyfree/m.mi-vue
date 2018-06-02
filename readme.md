### API封装优化
+ 创建api文件夹, api统一放到index.js
+ 封装fetch
+ 创建mock文件夹, 本地备份mock数据
+ 当rap接口异常时调用本地mock数据
```
cnpm i mockjs -S
```

### MiHome.vue组件
+ 列表渲染(v-for、key)
+ 列表过渡(transition-group)
+ 响应式原理
+ iscroll、nprogress
```
cnpm i iscorll -S
cnpm i nprogress -S
```

### 业务场景
+ 顶部导航栏(异步数据动态渲染、左右滑动、点击选择-焦点状态)
+ 内容区(首次异步数据、过渡效果)
+ 进度条(内容区首次加载数据时)