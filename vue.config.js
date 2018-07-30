const fs = require('fs')

module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        // data: `@import "@/variables.scss";`
        data: fs.readFileSync('src/assets/css/variables.styl', 'utf-8')
      }
    }
  }
}