import { useUserStore } from '~/stores/userStore'

export default defineNuxtRouteMiddleware((to) => {
  const userStore = useUserStore()

  if (!userStore.isLoggedIn && to.path !== '/login') {
    return navigateTo('/login')
  }
})