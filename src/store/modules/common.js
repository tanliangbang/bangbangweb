import * as types from '../mutation-types'
// initial state
// shape: [{ id, quantity }]
const state = {
  currIndex: 1
}

const mutations = {
  [types.CHANGE_HEADER] (state, currIndex) {
    state.currIndex = currIndex
  }
}

const actions = {
  changeHeader: ({ commit }, currIndex) => commit(types.CHANGE_HEADER, currIndex)
}

const getters = {
}

export default {
  state,
  getters,
  actions,
  mutations
}
