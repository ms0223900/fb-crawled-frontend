import { State } from '@/store';
import ClickedPostIdsStorage, { clickedPostsHandlers } from '@/utils/Handlers/ClickedPostIdsStorage';
import useToggle from '@/utils/hooks/useToggle';
import { computed } from 'vue';
import { useStore } from 'vuex';

export interface UsePostItemOptions {
  postId: string
}

const usePostItem = ({
  postId
}: UsePostItemOptions) => {
  const store = useStore<State>();
  const toggleState = useToggle();
  // const clickedPostIds = computed(() => store.state.clickedPostIds);
  const initIsPostClicked = computed(() => (
    clickedPostsHandlers.initCheckPostClicked(postId)
  ));
  const isHideClickedLink = computed(() => store.state.isHideClickedLink);

  const shouldHideClickedPost = computed(() => (
    isHideClickedLink.value && (initIsPostClicked.value || !toggleState.toggle.value)
  ));

  const handleClickPostItem = (postId: string) => {
    toggleState.handleToggle();
    store.dispatch('handleUpdateClickedPosts', { postId });
  };

  return ({
    shouldHideClickedPost,
    handleClickPostItem,
    ...toggleState
  });
};

export default usePostItem;
