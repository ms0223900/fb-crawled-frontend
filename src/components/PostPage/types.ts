export interface PostsFilteringOptions {
  isFilteringToday: boolean
  isFilteringHaveLinks: boolean
}

export interface SinglePost {
  postLink: {
    name: string,
    link: string
  },
  links: {
    name: string,
    links: null | string[]
  },
  creationTime: {
    name: string,
    timeLocaleStr: string
  },
  storyMessageText: string,
  feedback: {
    reactionCount: number,
    shareCount: number
  }
  metaOptions: {
    isToday: boolean
    haveLinks: boolean
  }
}

export interface PostListData {
  profileName: string
  posts: SinglePost[]
}
