import { MutationTree, ActionTree } from 'vuex'

export const state = () => ({
  user: {
    firstName: '',
    lastName: ''
  }
})

type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  SET_USER(state, payload) {
    state.user = payload.user
  }
}

export const actions: ActionTree<RootState, RootState> = {
  nuxtServerInit({ commit }, { req }) {
    console.log('sdasdassdasdasdasdasdas')
    if (req.user) {
      commit('SET_USER', { user: req.user })
    }
  }
}
