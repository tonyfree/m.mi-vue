> 2018.09.16 线上商城详情页已升级改版，待实现(todo)

### 页面结构和数据结构分析
+ 页面结构：轮播、头部描述、地址和sku选择、用户评价、概述和参数、为你推荐、路由跳转
+ 数据结构

### 轮播
+ [循环](http://idangero.us/swiper/api/#parameters)、[分页(样式加载)](http://idangero.us/swiper/api/#pagination)、[懒加载](http://idangero.us/swiper/api/#lazy)
+ detory问题

### 数据渲染
+ 头部描述、促销
+ 评价组件
+ 概述和参数(数据结构优化)
+ 为你推荐(重构猜你喜欢组件)

### 路由处理
+ 首页、购物车、后退
+ [mixin](https://cn.vuejs.org/v2/guide/mixins.html)

### SKU组件
+ 显示隐藏：过渡
+ 数据渲染和结构优化
+ 组件化：父子组件通信：[props down](https://cn.vuejs.org/v2/guide/components.html#%E9%80%9A%E8%BF%87-Prop-%E5%90%91%E5%AD%90%E7%BB%84%E4%BB%B6%E4%BC%A0%E9%80%92%E6%95%B0%E6%8D%AE)， [events up](https://cn.vuejs.org/v2/guide/components.html#%E9%80%9A%E8%BF%87%E4%BA%8B%E4%BB%B6%E5%90%91%E7%88%B6%E7%BA%A7%E7%BB%84%E4%BB%B6%E5%8F%91%E9%80%81%E6%B6%88%E6%81%AF)

### 作业
+ sdk：购买数量--已选数据跟随变化，增加、减少按钮的样式，数量的大小限制
+ sdk：服务保障--三层循环(参考：[多服务项目](https://m.mi.com/commodity/detail/7799)、[多服务列表](https://m.mi.com/commodity/detail/10000099)、[多条款](https://m.mi.com/commodity/detail/6701))、选中服务(样式、唯一性)