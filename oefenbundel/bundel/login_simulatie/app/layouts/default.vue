<script setup>
import { useUserStore } from '~/stores/userStore'
import { useRouter } from '#app'

const store = useUserStore()
const router = useRouter()

const handleLogout = () => {
  store.logout()
  router.push('/login')
}
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header alleen zichtbaar als ingelogd -->
    <header v-if="store.isLoggedIn" class="bg-slate-800 text-white">
      <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
        <div class="flex gap-4">
          <NuxtLink to="/" class="hover:text-slate-300">Home</NuxtLink>
          <NuxtLink to="/dashboard" class="hover:text-slate-300">Dashboard</NuxtLink>
        </div>
        <div class="flex gap-4 items-center">
          <span>Welkom, {{ store.user }}</span>
          <button
            @click="handleLogout"
            class="bg-red-600 px-3 py-1 rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </nav>
    </header>

    <!-- Page content -->
    <main class="flex-1 container mx-auto px-4 py-8">
      <NuxtPage />
    </main>

    <!-- Footer altijd zichtbaar -->
    <footer class="bg-slate-100 text-slate-600 text-center py-4 text-sm">
      © 2025 – Mijn Nuxt App
    </footer>
  </div>
</template>