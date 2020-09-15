import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: null,
    playLists: [],
    playing: false,
    item: null,
    token:
      "BQDIuvYuYRaUtd-zTfJ_JVkcjOXtBJsOBrRz78UtWuRPIVURYp3NIShJBn6bGrmnS_7GYeexeI1UNP0ysRudwf5WeRrVSgvs5jXKFQCIpkC5v1L0lOe2pw-HhZeKCco5mCGCXcoS5YH_eL2HohgNkd8oKLnvg1l8",
  },
  mutations: {
    setUser(state, user) {
      // mutate state
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    },
  },
  getters: {
    getUser(state) {
      return state.user;
    },
  },
});
