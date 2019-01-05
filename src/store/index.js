import Vue from 'vue'
import Vuex from 'vuex'
import configuration from './modules/configuration'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    hello: 'Hello World!'
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
