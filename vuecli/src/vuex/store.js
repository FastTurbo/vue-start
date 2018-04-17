import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  count:1
}
const mutations = {
  add(state, n = 1){
    state.count += n
  },
  reduce(state, n = 1){
    state.count -= n
  }
}

export default new Vuex.Store({
  state,
  mutations
})
