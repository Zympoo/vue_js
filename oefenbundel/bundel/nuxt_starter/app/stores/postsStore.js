import { defineStore } from 'pinia'

export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: [
      { id: '1', title: 'Eerste post', content: 'Inhoud van de eerste post.' },
      { id: '2', title: 'Tweede post', content: 'Inhoud van de tweede post.' },
      { id: '3', title: 'Derde post', content: 'Inhoud van de derde post.' },
    ],
  }),
})