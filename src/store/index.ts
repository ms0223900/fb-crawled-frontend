import { createStore } from 'vuex';

export interface State {
  isHideClickedLink: boolean
}

export default createStore<State>({
  state: {
    isHideClickedLink: true
  },
  mutations: {
    toggleHideClickedLink (state) {
      state.isHideClickedLink = !state.isHideClickedLink;
    }
  },
  actions: {
    handleToggleHideClickedLink (ctx) {
      ctx.commit('toggleHideClickedLink');
    }
  },
  modules: {}
});
