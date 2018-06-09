import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import './assets/css/reset.css'
import './assets/fonts/iconfont.css'
import fetch from './api/fetch.js'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)
Vue.prototype.$fetch = fetch
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
