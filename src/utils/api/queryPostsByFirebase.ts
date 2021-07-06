import { SinglePost } from '@/components/PostPage/types';
import firebase from 'firebase';
import QueriedPostsHandlers from './api-functions/QueriedPostsHandlers';

export interface QueriedPosts {
  creationTime: string
  allFetchedFeeds: {
    profileName: string
    allExtractedStories: SinglePost[]
  }[]
}

const API_KEY = process.env.FIREBASE_API_KEY;

// Set the configuration for your app
// TODO: Replace with your project's config object
const config = {
  apiKey: API_KEY,
  authDomain: 'fb-crawled.firebaseapp.com',
  databaseURL: 'https://fb-crawled-default-rtdb.firebaseio.com',
  storageBucket: 'fb-crawled.appspot.com'
};
firebase.initializeApp(config);

// Get a reference to the database service
const database = firebase.database();
const dbRef = database.ref();

const queryPostsByFirebase = (): Promise<QueriedPosts | undefined> => {
  // const url = 'static/2021-7-3-21_19_47.json';
  try {
    return dbRef.child('crawled-data').get().then(snapshot => {
      if (snapshot.exists()) {
        const res = snapshot.val();
        const fixedRes = QueriedPostsHandlers.fixDataFromDatabase(res);
        console.log(fixedRes);
        return fixedRes;
      } else {
        console.log('No data available');
        return undefined;
      }
    });
    // return fetch(url)
    //   .then(res => res)
    //   .then(res => res.json());
    // return Promise.resolve(feedsJson as any);
  } catch (error) {
    return Promise.resolve(undefined);
  }
};

export default queryPostsByFirebase;
