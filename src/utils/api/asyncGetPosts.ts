import PostDataLocalStorage from '../Handlers/PostDataLocalStorage';
import queryPostsByFirebase from './queryPostsByFirebase';

const postDataLocalStorage = new PostDataLocalStorage();

const asyncGetPosts = async () => {
  if (postDataLocalStorage.shouldDonwloadData) {
    const queried = await queryPostsByFirebase();
    queried && postDataLocalStorage.updateDataToLS(queried);
    return queried;
  } else {
    return postDataLocalStorage.dataFromLS;
  }
};

export default asyncGetPosts;
