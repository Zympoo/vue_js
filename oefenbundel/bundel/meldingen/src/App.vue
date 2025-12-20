<script setup>
import { ref } from 'vue';
import Notifications from './components/Notifications.vue';

import { useNotificationsStore } from './stores/notificationStore'
const notificationsStore = useNotificationsStore()

const notificationMessage = ref("")
</script>
<template>
  <main class="p-6 space-y-8">
    <div class="w-96 bg-white rounded-lg shadow border p-4 space-y-3">
    <label class="block text-sm font-medium text-gray-700">
      Nieuwe melding
    </label>

    <input
      type="text" v-model="notificationMessage"
      placeholder="Typ een melding..."
      class="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
    />

    <button
      class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer" @click="notificationsStore.addNotification(notificationMessage)"
    >
      Toon melding
    </button>
  </div>
    
    <div class="fixed top-4 left-1/2 -translate-x-1/2 w-96 space-y-2">

      <!-- Notification -->
      <Notifications />

    </div>
  </main>
</template>
