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
  // }
}