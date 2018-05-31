> 课堂源码：https://github.com/tonyfree/m.mi

### 样式处理
+ 替换public/favicon.ico
+ 引入模块：[normalize.css](https://github.com/necolas/normalize.css)
+ 在assets下创建css文件夹，创建reset.css
+ 在assets下创建images文件夹，把logo.png移入
+ 在assets下创建fonts文件夹，引入[iconfont](http://www.iconfont.cn/)
（字体图标的三种使用方式）

### 路由处理
+ 删除App.vue的nav
+ views下创建index.js，把路由的routes配置放在index.js中
+ 创建tmp文件夹，存放样式组件(不含逻辑处理)
+ 在tmp下创建MiLogin.vue组件

### MiLogin.vue组件
+ 结构、样式、图片
+ reset.css初始化样式优化、字体图标处理
+ Vue实例
+ 模板语法：插值({{}})、指令(v-bind)、缩写( : @)
+ 计算属性
+ Class和Style绑定
+ 条件渲染(v-if、v-show)
+ 事件处理(v-on)
+ 表单输入绑定(v-model)
+ axios、RAP2
+ 优化：函数节流、数据加密、scripts-serve

### 风格指南
+ 单文件组件的文件名是单词大写开头 (PascalCase)
+ 单文件组件的顶级元素的顺序
+ 实例的选项的顺序(data、computed、methods)
+ 元素特性的顺序(条件渲染、普通的绑定或未绑定的特性、事件)

### 业务场景
+ 登录方式的切换
+ 密码是否可见的切换
+ 获取验证码
+ 登录提交(校验)

## 作业
1. 密码不可见切换图标颜色
2. 校验：手机号码合法性校验，非空校验
3. 登录函数节流，局部加载的形式