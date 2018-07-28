import Vue from 'vue'
import Vuex from 'vuex'
import fetch from '@/api/fetch.js'
import address from './modules/address.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    viewLoading: false,
    transitionName: 'page-left',
    userInfo: null
  },
  getters: {
    isLogin: state => {
      return !!state.userInfo
      // return false
    }
  },
  mutations: {
    setViewLoading (state, value) {
      state.viewLoading = value
    },
    setTransitionName (state, value) {
      state.transitionName = value
    },
    setUserInfo (state, value) {
      state.userInfo = value
    }
  },
  actions: {
    getUserInfo ({commit}) {
      fetch('userInfo').then(res => {
        commit('setUserInfo', res.data.user)
      })
    }
  },
  modules: {
    address
  }
})
