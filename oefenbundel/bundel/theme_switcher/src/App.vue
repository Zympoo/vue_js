<script setup>
import { useThemeStore } from './stores/themeStore'
import { storeToRefs } from 'pinia'

const themeStore = useThemeStore()
const { theme } = storeToRefs(themeStore)
</script>

<template>
  <body class="h-screen flex items-center justify-center" :class="theme === 'dark' ? 'bg-gray-900' : 'bg-white'">
    <button class="border-2 rounded cursor-pointer p-2" :class="theme === 'dark' ? 'text-white' : 'text-black'" @click="themeStore.toggleTheme">
      Theme switch
    </button>
  </body>
</template>
