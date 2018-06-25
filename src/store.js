import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    viewLoading: false
  },
  mutations: {
    setViewLoading (state, value) {
      state.viewLoading = value
    }
  },
  actions: {

  }
})
