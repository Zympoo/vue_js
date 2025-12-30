<script setup>
useHead({
  title: "Oefening 'Taal switch' | Nuxt Starter"
})

import { useLanguageSwitchStore } from '~/stores/languageSwitchStore'

const languageSwitchStore = useLanguageSwitchStore()
</script>
<template>
  <div>
    <h1 class="text-3xl font-bold mb-4">{{ languageSwitchStore.taal === "nederlands" ? "Taal switch" : "Language switch" }}</h1>
    <div class="inline-flex items-center gap-2">
      <label for="switch-component-on" class="text-slate-600 text-sm cursor-pointer">Nederlands</label>

      <div class="relative inline-block w-11 h-5">
        <input type="checkbox" :checked="languageSwitchStore.enabled" @change="languageSwitchStore.toggleSwitch"
          class="peer appearance-none w-11 h-5 bg-gray-100 rounded-full checked:bg-gray-600 cursor-pointer transition-colors duration-300" />
        <label for="switch-component-indigo"
          class="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-gray-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-gray-600 cursor-pointer">
        </label>
      </div>

      <label for="switch-component-on" class="text-slate-600 text-sm cursor-pointer">English</label>
    </div>
  </div>
</template>
