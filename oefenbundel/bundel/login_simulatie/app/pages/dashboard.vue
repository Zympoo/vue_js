<script setup>
import { useRouter } from '#app'
import { useUserStore } from '~/stores/userStore'

const router = useRouter()
const store = useUserStore()

// redirect als niet ingelogd
if (!store.isLoggedIn) {
  router.push('/login')
}
</script>

<template>
  <div class="max-w-md mx-auto mt-20 p-6 border rounded shadow">
    <h1 class="text-2xl font-bold mb-4">Dashboard</h1>
    <p>Welkom, {{ store.user }}!</p>
    <button
      @click="store.logout(); router.push('/login')"
      class="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
    >
      Logout
    </button>
  </div>
</template>