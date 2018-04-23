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
const getters = {
  count(state){
    return state.count += 100;
  }
}
const actions = {
  addAction(context){
    setTimeout(()=>{
      context.commit('add',10)
    },2000);

  },
  reduceAction({commit}){
    commit('reduce',10)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
