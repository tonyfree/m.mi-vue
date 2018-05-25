const host = 'http://rap2api.taobao.org/app/mock/13801xx'

const url = {
  login: '/api/login',
  getCode: '/api/getCode'
}

Object.keys(url).forEach(key => {
  url[key] = host + url[key]
})

export default url