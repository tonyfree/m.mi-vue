import Address from '@/api/address.js'

export default {
  namespaced: true,
  state: {
    list: 'list'
  },
  mutations: {
    setList (state, list) {
      state.list = list
    }
  },
  actions: {
    getList ({commit}) {
      Address.list().then(res => {
        commit('setList', res.data)
      })
    }
  }
}
