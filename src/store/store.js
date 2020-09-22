import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: null,
    playLists: [],
    playing: false,
    item: null,
    token: null,
    recent_playlists: null,
  },
  mutations: {
    setUser(state, user) {
      // mutate state
      console.log("setting user"), user;
      state.user = user;
    },
    setToken(state, token) {
      console.log("setting token", token);
      state.token = token;
    },
    setPlaylists(state, playlists) {
      console.log("setting playlists", playlists);
      state.playLists = playlists;
    },
    setRecent(state, response) {
      console.log("setting recent", response);
      state.recent_playlists = response;
    },
  },
  getters: {
    getUser: (state) => {
      console.log("getting user", state);
      return state.user;
    },
    getPlaylists: (state) => {
      console.log("getting playlists", state);
      console.log(state.playLists.items);
      return state.playLists.items;
    },
  },
});
