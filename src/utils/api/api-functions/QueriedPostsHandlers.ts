import { QueriedPosts } from '../queryPostsByFirebase';

const QueriedPostsHandlers = {
  fixDataFromDatabase (queried: QueriedPosts): QueriedPosts {
    return ({
      ...queried,
      allFetchedFeeds: queried.allFetchedFeeds.map(
        feed => ({
          ...feed,
          allExtractedStories: feed.allExtractedStories ? feed.allExtractedStories : []
        })
      )
    });
  }
};

export default QueriedPostsHandlers;
