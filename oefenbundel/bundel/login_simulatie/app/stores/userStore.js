import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,          // slaat de username op
    isLoggedIn: false,   // login status
  }),
  actions: {
    login(username) {
      this.user = username
      this.isLoggedIn = true
    },
    logout() {
      this.user = null
      this.isLoggedIn = false
    }
  }
})