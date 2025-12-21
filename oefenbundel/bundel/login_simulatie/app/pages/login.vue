<script setup>
import { ref } from 'vue'
import { useRouter } from '#app'
import { useUserStore } from '~/stores/userStore'

const router = useRouter()
const store = useUserStore()
const username = ref('')

const handleLogin = () => {
  if (username.value.trim()) {
    store.login(username.value)
    router.push('/dashboard')
  } else {
    alert('Vul een gebruikersnaam in!')
  }
}
</script>

<template>
  <div class="max-w-md mx-auto mt-20 p-6 border rounded shadow">
    <h1 class="text-2xl font-bold mb-4">Login</h1>
    <input
      v-model="username"
      placeholder="Gebruikersnaam"
      class="border p-2 w-full mb-4 rounded"
    />
    <button
      @click="handleLogin"
      class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
      Login
    </button>
  </div>
</template>