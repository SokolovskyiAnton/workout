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
      },
      updateWeek(state, {id, firstWeek, secondWeek, thirdWeek, fourthWeek, timeWeek}) {
          const weeks = state.weeks.concat();

          const idx = weeks.findIndex(t => t.id === id)

          const week = weeks[idx]

          weeks[idx] = {...week, firstWeek, secondWeek, thirdWeek, fourthWeek, timeWeek}

          state.weeks = weeks

          localStorage.setItem('weeks', JSON.stringify(state.weeks))
      }
  },
  actions: {
      createWeak({commit}, weeks) {
          commit('createWeak', weeks)
      },
      updateWeek({commit}, weeks) {
        commit('updateWeek', weeks)
      }
  },
  getters: {
      weeks: s => s.weeks,
      weeksById: s => id => s.weeks.find(t => t.id === id)
  }
})