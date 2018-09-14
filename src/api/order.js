import fetch from '@/api/fetch.js'

class Order {
  static checkout () {
    return fetch('orderCheckout')
  }
}

export default Order