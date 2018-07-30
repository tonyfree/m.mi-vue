import Vue from 'vue'
import Vuex from 'vuex'
import fetch from '@/api/fetch.js'
import address from './modules/address.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    viewLoading: false,
    transitionName: 'page-left',
    userInfo: null,
    cartCount: 0
  },
  getters: {
    isLogin: state => {
      return !!state.userInfo
      // return false
    }
  },
  mutations: {
    setViewLoading (state, isLoading) {
      state.viewLoading = isLoading
    },
    setTransitionName (state, name) {
      state.transitionName = name
    },
    setUserInfo (state, info) {
      state.userInfo = info
    },
    setCartCount (state, count) {
      state.cartCount = count
    }
  },
  actions: {
    getUserInfo ({commit}) {
      fetch('userInfo').then(res => {
        commit('setUserInfo', res.data.user)
      })
    },
    getCartCount ({commit}) {
      fetch('')
    }
  },
  modules: {
    address
  }
})
