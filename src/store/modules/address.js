import Address from '@/api/address.js'

export default {
  namespaced: true,
  state: {
    list: []
  },
  getters: {
    default (state) {
      return state.list.find(item => {
        return item.is_default
      })
    }
  },
  mutations: {
    setList (state, list) {
      state.list = list
    }
  },
  actions: {
    getList ({commit}, callback) {
      Address.list().then(res => {
        commit('setList', res.data)
        callback && callback()
      })
    }
  }
}