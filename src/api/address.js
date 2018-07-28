import fetch from '@/api/fetch.js'

class Address {
  static list () {
    return fetch('addressList')
  }

  static add (data) {
    return fetch('addressAdd', data)
  }

  static save (data) {
    return fetch('addressSave', data)
  }

  static view (id) {
    return fetch('addressView', {
      address_id: id
    })
  }

  static delete (id) {
    return fetch('addressDel', {
      address_id: id
    })
  }

  static all () {
    return fetch('addressAll')
  }

  static region (id) {
    return fetch('addressRegion', {
      parent: id
    })
  }
}

export default Address
