<template>
  <div class="post-item-wrapper col-4">
    <div class="post-item">
      <div>
        <!-- <h3>{{ singlePostData.creationTime.name }}</h3> -->
        <p>{{ singlePostData.creationTime.timeLocaleStr }}</p>
      </div>
      <div>
        <a :href="singlePostData.postLink.link" target="_blank">
          {{ singlePostData.postLink.name }}
        </a>
      </div>
      <div v-if="singlePostData.links.links">
        <h3>{{ singlePostData.links.name }}</h3>
        <div>
          <div >
            <a
              :key="key"
              v-for="(l, key) in singlePostData.links.links"
              :href="l"
              target="_blank"
            >{{ l }}</a>
          </div>
        </div>
      </div>
      <hr />
      <div class="story-message-wrapper">
        <p>{{ singlePostData.storyMessageText.text }}</p>
      </div>
      <hr />
      <div>
        <p>{{ feedbackText }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, ComputedRef } from '@vue/runtime-core';
import { Options, Vue } from 'vue-class-component';
import { SinglePost } from '../PostPage/types';

@Options({
  props: {
    singlePostData: Object
  }
})

export default class PostItem extends Vue {
  singlePostData!: SinglePost

  feedbackText = computed(() => {
    const {
      reactionCount, shareCount
    } = this.singlePostData.feedback;
    return (
      `按讚數: ${reactionCount}, 分享數: ${shareCount}`
    );
  })
}
</script>

<style scoped>
  a {
    display: block;
    padding-bottom: 4px;
  }
  * {
    word-break: break-all;
    white-space: pre-wrap;
    text-align: left;
  }
  .post-item-wrapper {
    width: 33%;
    box-sizing: border-box;
    padding: 4px;
  }
  .post-item-wrapper > div {
    padding-bottom: 8px;
  }
  .post-item {
    padding: 8px;
    border-radius: 4px;
    box-shadow: 0px 0px 6px #ddd;
  }
  .story-message-wrapper {
    height: 300px;
    overflow: auto;
  }
</style>
