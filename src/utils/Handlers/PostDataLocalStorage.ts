import { QueriedPosts } from '../api/queryPostsByFirebase';

class PostDataLocalStorage {
  private LSKey = 'fb-crawled-post-data'
  private wholeDayTime = 86400 * 1000
  private timeRangeForUpdatingData = this.wholeDayTime * 0.6

  dataFromLS = this.getDataFromLS()
  shouldDonwloadData = this.checkShouldDonwloadData()

  private getDataFromLS (): QueriedPosts | undefined {
    const data = localStorage.getItem(this.LSKey);
    return data ? JSON.parse(data) : undefined;
  }

  private getTimeFromPostData (postData: QueriedPosts | undefined): number {
    if (!postData) {
      return 0;
    }
    return new Date(postData.creationTime).getTime();
  }

  private checkShouldDonwloadData (): boolean {
    const timeNow = new Date().getTime();
    const dataTime = this.getTimeFromPostData(
      this.dataFromLS
    );

    if (timeNow - dataTime > this.timeRangeForUpdatingData) {
      return true;
    }
    return false;
  }

  updateDataToLS (queriedPosts: QueriedPosts): void {
    localStorage.setItem(this.LSKey, JSON.stringify(queriedPosts));
  }
}

export default PostDataLocalStorage;
