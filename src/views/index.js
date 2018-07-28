const MiLogin = () => import('./MiLogin.vue')
const MiHome = () => import('./MiHome.vue')
const MiCategory = () => import('./MiCategory.vue')
const MiCart = () => import('./MiCart.vue')
const MiUser = () => import('./MiUser.vue')
const MiList = () => import('./MiList.vue')
const MiDetail = () => import('./MiDetail.vue')
const MiSetting = () => import('./MiSetting.vue')
const MiAddressList = () => import('./MiAddressList.vue')
const MiAddressEdit = () => import('./MiAddressEdit.vue')

export default [
  {
    path: '/',
    redirect: 'home'
  },
  {
    path: '/home',
    name: 'home',
    component: MiHome,
    meta: {
      index: 1
    }
  },
  {
    path: '/login',
    name: 'login',
    component: MiLogin
  },
  {
    path: '/category',
    name: 'category',
    component: MiCategory,
    meta: {
      index: 2
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: MiCart,
    meta: {
      index: 3
    }
  },
  {
    path: '/user',
    name: 'user',
    component: MiUser,
    meta: {
      index: 4
    }
  },
  {
    path: '/commodity/list/:id',
    name: 'list',
    component: MiList
  },
  {
    path: '/commodity/detail/:id',
    name: 'detail',
    component: MiDetail
  },
  {
    path: '/user/set',
    name: 'set',
    component: MiSetting,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/address/list',
    name: 'addressList',
    component: MiAddressList,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/address/edit',
    name: 'addressEdit',
    component: MiAddressEdit,
    meta: {
      requiresAuth: true
    }
  }
]
