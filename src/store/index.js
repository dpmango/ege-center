import Vue from "vue"
import Vuex from "vuex"

import auth from "./auth"
import order from "./order"
import meta from "./meta"
import ui from "./ui"

Vue.use(Vuex)

export default new Vuex.Store({
  actions: {
    async init({ dispatch, commit }, { token, uuid }) {
      commit("auth/setToken", token, { root: true })
      commit("auth/setUuid", uuid, { root: true })
      dispatch("ui/init")
      dispatch("meta/init")
    },
  },
  modules: {
    auth: auth,
    order: order,
    meta: meta,
    ui: ui,
  },
})
