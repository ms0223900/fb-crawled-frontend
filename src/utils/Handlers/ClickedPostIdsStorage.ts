class ClickedPostIdsStorage {
  private LSKey = 'clicked-post-ids'
  private maxClickedPostIdsLength = 1000
  clickedPostIds = this.getClickedPostIds()

  initCheckPostClicked (postId: string): boolean {
    return this.clickedPostIds.includes(postId);
  }

  getClickedPostIds (): string[] {
    const dataFromLS = localStorage.getItem(this.LSKey);
    const res = dataFromLS ? JSON.parse(dataFromLS) : [];
    return res;
  }

  private checkAndTrimClickedPostIds () {
    if (this.clickedPostIds.length > this.maxClickedPostIdsLength) {
      this.clickedPostIds = this.clickedPostIds.slice(1, this.clickedPostIds.length);
    }
  }

  update (postId: string, cb?: (id: string) => any): void {
    if (!this.clickedPostIds.includes(postId)) {
      this.clickedPostIds.push(postId);
      this.checkAndTrimClickedPostIds();
      localStorage.setItem(this.LSKey, JSON.stringify(
        this.clickedPostIds
      ));
      cb && cb(postId);
    }
  }
}

export const clickedPostsHandlers = new ClickedPostIdsStorage();

export default ClickedPostIdsStorage;
