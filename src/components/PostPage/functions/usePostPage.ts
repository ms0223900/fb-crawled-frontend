import queryPostsByFirebase, { QueriedPosts } from '@/utils/api/queryPostsByFirebase';
import useToggle from '@/utils/hooks/useToggle';
import { computed, reactive } from 'vue';
import PostDataHandlers from './PostDataHandlers';

export interface PostPageState {
  loading: boolean
  queriedPosts: QueriedPosts | undefined
}

const usePostPage = () => {
  const {
    toggle: isFilteringTodayToggle
  } = useToggle(true);
  const {
    toggle: isFilteringHaveLinksToggle
  } = useToggle(true);

  const state: PostPageState = reactive({
    loading: false,
    queriedPosts: undefined
  });

  const handleQueryPosts = async () => {
    state.loading = true;
    const posts = await queryPostsByFirebase();
    // console.log(posts);
    const handledPosts = posts ? ({
      ...posts,
      allFetchedFeeds: posts.allFetchedFeeds.map(f => ({ ...f, posts: f.allExtractedStories }))
    }) : undefined;
    // console.log(handledPosts);
    state.queriedPosts = handledPosts;
    state.loading = false;
  };

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
    handleQueryPosts
  });
};

export default usePostPage;
