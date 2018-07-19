import fetch from '@/api/fetch.js'

class Address {
  list () {
    return fetch('addressList')
  }
}

export default Address