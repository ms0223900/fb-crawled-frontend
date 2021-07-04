<template>
  <div class="postpage-wrapper">
    <h1>Fb爬文列表</h1>
    <div v-if="postPageState.state.queriedPosts">
      <p>{{ `資料更新時間: ${postPageState.createdAt}` }}</p>
      <div class="checkbox-wrapper">
        <Checkbox
          labelName="過濾今天貼文"
          v-model="postPageState.isFilteringTodayToggle"
        />
        <Checkbox
          labelName="過濾貼文內有連結"
          v-model="postPageState.isFilteringHaveLinksToggle"
        />
      </div>
      <hr />
      <h3 v-if="postPageState.state.loading">Loading...</h3>
      <div>
        <PostList
          v-for="(postListData, i) in postPageState.allFetchedFeeds"
          :key="i"
          :postListData="postListData"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, setup, Vue } from 'vue-class-component';
import usePostPage from '@/components/PostPage/functions/usePostPage';
import { PostListData } from '@/components/PostPage/types';
import PostList from '@/components/PostPage/PostList.vue';
import { watch } from '@vue/runtime-core';
import Checkbox from '@/components/common/Checkbox.vue';
import useToggle from '@/utils/hooks/useToggle';

@Options({
  name: 'PostPage',
  components: {
    PostList,
    Checkbox
  }
})

export default class PostPage extends Vue {
  postListData!: PostListData
  postPageState = setup(() => usePostPage())
  // toggleState = setup(() => useToggle(true))

  created () {
    this.postPageState.handleQueryPosts();
    // this.$watch('postPageState', (newVal: any, oldVal: any) => {
    //   console.log(newVal);
    // });
    // console.log(this.postPageState);
  }
}
</script>

<style>
  .postpage-wrapper {
    max-width: 1440px;
    margin: auto;
  }
  .checkbox-wrapper {
    padding: 8px;
  }
</style>
