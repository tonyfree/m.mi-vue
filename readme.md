### [适配方案viewport](https://www.w3cplus.com/mobile/vw-layout-in-vue.html)
+ 前身：[lib-flexible](https://github.com/amfe/lib-flexible)
+ 安装插件
```
cnpm i cssnano cssnano-preset-advanced postcss-aspect-ratio-mini postcss-cssnext postcss-import postcss-px-to-viewport postcss-url postcss-viewport-units postcss-write-svg -D
```
+ 配置postcss
```
"postcss": {
    "plugins": {
      "postcss-import": {},
      "postcss-url": {},
      "postcss-aspect-ratio-mini": {},
      "postcss-write-svg": {
        "utf8": false
      },
      "postcss-cssnext": {},
      "postcss-px-to-viewport": {
        "viewportWidth": 375,
        "viewportHeight": 667,
        "unitPrecision": 3,
        "viewportUnit": "vw",
        "selectorBlackList": [
          ".ignore",
          ".hairlines"
        ],
        "minPixelValue": 1,
        "mediaQuery": false
      },
      "postcss-viewport-units": {},
      "cssnano": {
        "preset": "advanced",
        "autoprefixer": false,
        "postcss-zindex": false
      }
    }
  },
```
+ 添加buggyfill
```
  <script src="//g.alicdn.com/fdilab/lib3rd/viewport-units-buggyfill/0.6.2/??viewport-units-buggyfill.hacks.min.js,viewport-units-buggyfill.min.js"></script>
  <script>
    window.onload = function () {
      window.viewportUnitsBuggyfill.init({
        hacks: window.viewportUnitsBuggyfillHacks
      })
    }
  </script> 
```

+ 案例(需在微信中打开)：http://sus.test.qi-cloud.com/#/