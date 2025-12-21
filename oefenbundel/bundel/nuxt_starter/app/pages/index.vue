<script setup>
  useHead({
    title: "Homepagina | Nuxt Starter"
})

import { usePostsStore } from '/stores/postsStore'
import { storeToRefs } from 'pinia'

const postsStore = usePostsStore()
const { posts } = storeToRefs(postsStore)
</script>
<template>
  <div>
    <h1 class="text-3xl font-bold mb-4">Producten</h1>

    <ul class="space-y-2">
      <li v-for="post in posts" :key="post.id">
        <NuxtLink :to="`/posts/${post.id}`" class="text-blue-600 underline">
          {{ post.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>