const state = {
  messages: []
}
const getters = {
  messages(state) {
    return state.messages
  }
}
const actions = {
  addMessage({commit}, message) {
    commit('addMessage', message)
  }
}
const mutations = {
  addMessage(state, message) {
    state.messages.push(message)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}