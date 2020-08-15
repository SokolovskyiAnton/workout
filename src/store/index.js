import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      weeks: JSON.parse(localStorage.getItem('weeks') || '[]')
  },
  mutations: {
      createWeak(state, weeks) {
          state.weeks.push(weeks)
          localStorage.setItem('weeks', JSON.stringify(state.weeks))
      }
  },
  actions: {
      createWeak({commit}, weeks) {
          commit('createWeak', weeks)
      }
  },
  getters: {
      weeks: s => s.weeks
  }
})