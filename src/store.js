import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    viewLoading: false,
    transitionName: 'page-left'
  },
  mutations: {
    setViewLoading (state, value) {
      state.viewLoading = value
    },
    setTransitionName (state, value) {
      state.transitionName = value
    }
  },
  actions: {

  }
})
