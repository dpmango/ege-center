import { getApiService } from "@/api/external"
import { getSettingsService } from "@/api/meta"

const state = () => ({
  opened: false,
})

const getters = {
  // geoApiCity(state) {
  //   return state.geolocation.city
  // },
}

const mutations = {
  setOpened(state, payload) {
    state.opened = payload
  },
}

const actions = {
  async init({ commit, dispatch }) {
    dispatch("getUserApi")
  },
  async getUserApi({ commit, dispatch }, request) {
    const [err, result] = await getApiService(request)

    if (err) throw err

    commit("setGeoApi", result)

    return result
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
