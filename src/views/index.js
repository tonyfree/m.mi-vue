// import Home from './Home.vue'
import About from './About.vue'
import MiLogin from './MiLogin.vue'
import MiHome from './MiHome.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: MiHome
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
