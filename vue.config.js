const path = require('path')

module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        import: [
          path.join(__dirname, "src/assets/css/variables.styl")
        ]
      },
      // sass: {
      //   data: `@import "@/assets/css/variables.scss";`
      // }
    }
  },
  // devServer: {
  //   proxy: {
  //     '/': {
  //       target: 'http://10.10.100.191:8080',
  //       changeOrigin: true
  //     }
  //   }
  // },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      return {
        optimization: {
          splitChunks: {
            // minChunks: 3,
            cacheGroups: {
              vendor: {   // 抽离第三方插件
                test: /node_modules/,   // 指定是node_modules下的第三方包
                chunks: 'initial',
                name: 'vendor',  // 打包后的文件名，任意命名    
                // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
                priority: 10
              },
              utils: { // 抽离自己写的公共代码，utils这个名字可以随意起
                chunks: 'initial',
                name: 'common',  // 任意命名
                minSize: 0    // 只要超出0字节就生成一个新包
              }
            }
          }
        }
      }
    } else {
      // 为开发环境修改配置...
    }
  }
}