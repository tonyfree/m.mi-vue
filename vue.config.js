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
            cacheGroups: {
              vue: {
                test (chunks) {
                  return chunks.resource && chunks.resource.includes('node_modules') && chunks.resource.includes('vue')
                }, 
                chunks: 'initial',
                name: 'vue',
                priority: 10
              },
              vendor: {
                test (chunks) {
                  return chunks.resource && chunks.resource.includes('node_modules') && !chunks.resource.includes('vue')
                }, 
                chunks: 'initial',
                name: 'vendor',    
                priority: 8
              },
              commons: {
                chunks: 'initial',
                name: 'commons',
                minSize: 0
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