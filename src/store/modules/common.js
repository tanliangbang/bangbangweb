import * as types from '../mutation-types'
// initial state
// shape: [{ id, quantity }]
const state = {
  userInfo: null
}

const mutations = {
  [types.SET_USERINFO] (state, userInfo) {
    state.userInfo = userInfo
  }
}

const actions = {
  setUserInfo: ({ commit }, userInfo) => commit(types.SET_USERINFO, userInfo)
}

const getters = {
}

export default {
  state,
  getters,
  actions,
  mutations
}
