import fetch from '@/api/fetch.js'

class Cart {
  static count () {
    return fetch('cartCount')
  }
}

export default Cart
