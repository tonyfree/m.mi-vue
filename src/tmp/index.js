import MiLogin from './MiLogin.vue'
import MiHome from './MiHome.vue'
import MiCategory from './MiCategory.vue'
import MiCart from './MiCart.vue'
import MiUser from './MiUser.vue'

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
  },
  {
    path: '/category',
    name: 'category',
    component: MiCategory
  },
  {
    path: '/cart',
    name: 'cart',
    component: MiCart
  },
  {
    path: '/user',
    name: 'user',
    component: MiUser
  }
]
