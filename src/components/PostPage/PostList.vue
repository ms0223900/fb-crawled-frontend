<template>
  <div class="post-list-wrapper" v-if="shouldShowPosts" >
    <h2>{{ postListData.profileName }}</h2>
    <EmptyMessage
      v-if="!shouldShowPosts"
      message="無符合條件貼文"
    />
    <div v-else class="item-wrapper">
      <PostItem
        v-for="(post, i) in postListData.posts"
        :key="i"
        :singlePostData="post"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue, setup } from 'vue-class-component';
import { PostListData } from './types';
import PostItem from '@/components/PostPage/PostItem.vue';
import { computed, watch } from '@vue/runtime-core';
import EmptyMessage from '../common/EmptyMessage.vue';

@Options({
  name: 'PostList',
  props: {
    postListData: {
      profileName: String,
      posts: Array
    }
  },
  components: {
    PostItem,
    EmptyMessage
  }
  // watch() {
  //   'postListDat'
  // }
})

export default class PostList extends Vue {
  postListData!: PostListData

  get shouldShowPosts () {
    return this.postListData.posts.length > 0;
  }

  created () {
    this.$watch('postListData', (newVal: any, oldVal: any) => {
      console.log(newVal);
    });
  }
}
</script>

<style scoped>
  .post-list-wrapper {
    padding: 8px;
    padding-top: 16px;
  }
  .item-wrapper {
    display: flex;
    flex-wrap: wrap;
  }
  h2 {
    /* text-align: left; */
  }
</style>
