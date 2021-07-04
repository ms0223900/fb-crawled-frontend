import { PostsFilteringOptions, SinglePost } from '../types';

const PostDataHandlers = {
  filterByConditions: (posts: SinglePost[], filteringCondition: PostsFilteringOptions): SinglePost[] => {
    let res = [...posts];
    if (filteringCondition.isFilteringHaveLinks) {
      res = res.filter(r => r.metaOptions.haveLinks);
    }
    if (filteringCondition.isFilteringToday) {
      res = res.filter(r => r.metaOptions.isToday);
    }
    return res;
  }
};

export default PostDataHandlers;
