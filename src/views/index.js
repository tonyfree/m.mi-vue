// import MiHome from './MiHome.vue'
const MiHome = () => import(/* webpackChunkName: "home" */ './MiHome.vue')
const MiLogin = () => import(/* webpackChunkName: "login" */ './MiLogin.vue')
const MiCategory = () => import(/* webpackChunkName: "category" */ './MiCategory.vue')
const MiCart = () => import(/* webpackChunkName: "cart" */ './MiCart.vue')
const MiUser = () => import(/* webpackChunkName: "user" */ './MiUser.vue')
const MiList = () => import(/* webpackChunkName: "list" */ './MiList.vue')
const MiDetail = () => import(/* webpackChunkName: "detail" */ './MiDetail.vue')
const MiSetting = () => import(/* webpackChunkName: "setting" */ './MiSetting.vue')
const MiAddressList = () => import(/* webpackChunkName: "addressList" */ './MiAddressList.vue')
const MiAddressEdit = () => import(/* webpackChunkName: "addressEdit" */ './MiAddressEdit.vue')
const OrderCheckout = () => import(/* webpackChunkName: "orderCheckout" */ './OrderCheckout.vue')
const OrderList = () => import(/* webpackChunkName: "orderList" */ './OrderList.vue')
const OrderView = () => import(/* webpackChunkName: "orderView" */ './OrderView.vue')

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
  },
  {
    path: '/order/checkout',
    name: 'orderCheckout',
    component: OrderCheckout,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/order/list',
    name: 'orderList',
    component: OrderList,
    meta: {
      // requiresAuth: true
    }
  },
  {
    path: '/order/view/:id',
    name: 'orderView',
    component: OrderView
  },
]
