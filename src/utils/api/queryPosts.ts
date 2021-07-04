import { SinglePost } from '@/components/PostPage/types';
import feedsJson from '@/static/2021-7-3-21_19_47.json';

export interface QueriedPosts {
  creationTime: string
  allFetchedFeeds: {
    profileName: string
    allExtractedStories: SinglePost[]
  }[]
}

const queryPosts = (): Promise<QueriedPosts> | undefined => {
  // const url = 'static/2021-7-3-21_19_47.json';
  try {
    // return fetch(url)
    //   .then(res => res)
    //   .then(res => res.json());
    return Promise.resolve(feedsJson as any);
  } catch (error) {
    return undefined;
  }
};

export default queryPosts;
