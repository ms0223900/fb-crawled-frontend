import { State } from '@/store';
import useToggle from '@/utils/hooks/useToggle';
import { computed } from 'vue';
import { useStore } from 'vuex';

const usePostItem = () => {
  const store = useStore<State>();
  const toggleState = useToggle();
  const isHideClickedLink = computed(() => store.state.isHideClickedLink);

  const shouldHideClickedPost = computed(() => (
    isHideClickedLink.value && !toggleState.toggle.value
  ));

  return ({
    shouldHideClickedPost,
    ...toggleState
  });
};

export default usePostItem;
