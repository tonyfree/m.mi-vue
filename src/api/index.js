const host = 'http://rap2api.taobao.org/app/mock/13801'

const url = {
  login: '/api/login',
  logout: '/api/logout',
  userInfo: 'api/userInfo',
  getCode: '/api/getCode',
  navList: '/api/navList',
  homePage: '/api/homePage',
  category: '/api/category',
  commodity: '/api/commodityList',
  forRecommend: '/api/forRecommend',
  productView: '/api/productView',
  recommend: '/api/recommend',
  cartIndex: '/cart/index',
  cartSelect: '/cart/selcart',
  cartEdit: '/cart/edit',
  cartAdd: '/cart/add',
  cartDelete: '/cart/del',
  cartSelService: '/cart/selService'
}

Object.keys(url).forEach(key => {
  url[key] = host + url[key]
})

export default url
