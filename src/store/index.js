import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
  state: {
    likeJokes: [], //отмеченные like,
  },
  plugins: [createPersistedState()],
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
