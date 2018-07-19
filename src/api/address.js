import fetch from '@/api/fetch.js'

class Address {
  static list () {
    return fetch('addressList')
  }
}

export default Address