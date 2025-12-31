<script setup>
    import { useNotificationsStore } from '~/stores/notificationStore'
    import { storeToRefs } from 'pinia'

    const notificationsStore = useNotificationsStore()
    const { notifications } = storeToRefs(notificationsStore)
</script>
<template>
    <div v-for="notification in notifications" :key="notification.id" class="flex items-center justify-between bg-white border shadow rounded px-4 py-3">
        <span class="text-gray-800">
          {{ notification.msg }}
        </span>

        <button class="text-gray-400 hover:text-gray-600 cursor-pointer" @click="notificationsStore.closeNotification(notification.id)">
          ✕
        </button>
    </div>
</template>