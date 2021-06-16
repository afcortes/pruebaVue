import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    data: null
  },
  mutations: {
    getCharacters(state, payload) {
      state.data = payload
    }
  },
  actions: {
    async getCharactersAction({ commit }) {
      const response = await axios.get('https://rickandmortyapi.com/api/character')
      commit('getCharacters', response.data.results)
    }
  },
  modules: {
  },
  getters: {
    getData: state => state.data
  }
})
