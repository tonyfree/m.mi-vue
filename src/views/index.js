import Home from './Home.vue'
import About from './About.vue'
import MiLogin from './MiLogin.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/login',
    name: 'login',
    component: MiLogin
  }
]
