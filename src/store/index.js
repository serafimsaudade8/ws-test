import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false
  },
  getters: {
    loadingState (state) {
      return state.loading
    }
  },
  actions: {
    setGlobalLoading ({ commit }, payload) {
      commit('updateLoadingState', payload)
    }
  },
  mutations: {
    updateLoadingState (state, payload) {
      Vue.set(state, 'loading', payload)
    }
  },
  modules: {
  }
})
