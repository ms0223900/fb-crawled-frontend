import queryPostsByFirebase, { QueriedPosts } from '@/utils/api/queryPostsByFirebase';
import queryPosts from '@/utils/api/queryPosts';
import useToggle from '@/utils/hooks/useToggle';
import { computed, reactive } from 'vue';
import PostDataHandlers from './PostDataHandlers';
import { useStore } from 'vuex';
import { State } from '@/store';
import asyncGetPosts from '@/utils/api/asyncGetPosts';

export interface PostPageState {
  loading: boolean
  queriedPosts: QueriedPosts | undefined
}

const usePostPage = () => {
  const store = useStore<State>();
  const {
    toggle: isFilteringTodayToggle
  } = useToggle(true);
  const {
    toggle: isFilteringHaveLinksToggle
  } = useToggle(true);
  const isHideClickedLinkToggle = computed(() => store.state.isHideClickedLink);

  const state: PostPageState = reactive({
    loading: false,
    queriedPosts: undefined
  });

  const handleQueryPosts = async () => {
    state.loading = true;
    const posts = await asyncGetPosts();
    // for testing
    // const posts = await queryPosts();

    const handledPosts = posts ? ({
      ...posts,
      allFetchedFeeds: posts.allFetchedFeeds.map(f =>
        ({ ...f, posts: f.allExtractedStories })
      )
    }) : undefined;
    // console.log(handledPosts);
    state.queriedPosts = handledPosts;
    state.loading = false;
  };

  const handleToggleHideClickedLink = () => store.dispatch('handleToggleHideClickedLink');

  const createdAt = computed(() => {
    return state.queriedPosts ? (
      new Date(state.queriedPosts.creationTime).toLocaleString()
    ) : '';
  });
  const allFetchedFeeds = computed(() => {
    return state.queriedPosts ? (
      state.queriedPosts.allFetchedFeeds.map(feeds => ({
        ...feeds,
        posts: feeds.allExtractedStories ? PostDataHandlers.filterByConditions(
          feeds.allExtractedStories, {
            isFilteringToday: isFilteringTodayToggle.value,
            isFilteringHaveLinks: isFilteringHaveLinksToggle.value
          }
        ) : []
      }))
    ) : [];
  });
  console.log(allFetchedFeeds);

  return ({
    state,
    createdAt,
    allFetchedFeeds,
    isFilteringTodayToggle,
    isFilteringHaveLinksToggle,
    isHideClickedLinkToggle,
    handleQueryPosts,
    handleToggleHideClickedLink
  });
};

export default usePostPage;
