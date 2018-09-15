import fetch from '@/api/fetch.js'

class Order {
  static checkout () {
    return fetch('orderCheckout')
  }

  static list (data) {
    return fetch('orderList', data)
  }
}

export default Order