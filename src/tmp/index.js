import MiLogin from './MiLogin.vue'
import MiHome from './MiHome.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: MiHome
  },
  {
    path: '/login',
    name: 'login',
    component: MiLogin
  }
]
