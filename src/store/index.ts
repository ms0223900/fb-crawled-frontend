import { clickedPostsHandlers } from '@/utils/Handlers/ClickedPostIdsStorage';
import { createStore } from 'vuex';

export interface State {
  isHideClickedLink: boolean
  clickedPostIds: string[]
}

export interface UpdateClickedPostsPayload {
  postId: string
}

export default createStore<State>({
  state: {
    isHideClickedLink: true,
    clickedPostIds: clickedPostsHandlers.clickedPostIds
  },
  mutations: {
    toggleHideClickedLink (state) {
      state.isHideClickedLink = !state.isHideClickedLink;
    },
    updateClickedPosts (state, payload: UpdateClickedPostsPayload) {
      clickedPostsHandlers.update(payload.postId);
      state.clickedPostIds = clickedPostsHandlers.clickedPostIds;
    }
  },
  actions: {
    handleToggleHideClickedLink (ctx) {
      ctx.commit('toggleHideClickedLink');
    },
    handleUpdateClickedPosts (ctx, payload: UpdateClickedPostsPayload) {
      ctx.commit('updateClickedPosts', payload);
    }
  },
  modules: {}
});
