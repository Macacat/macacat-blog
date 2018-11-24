import Vue from 'vue'
import Vuex from 'vuex'
import configuration from './modules/configuration'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  modules: {
    configuration
  },
  mutations: {
    addCountByOne (state) {
      state.count++
    }
  }
})

export default store
