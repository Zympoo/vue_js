<script setup>
import { useRoute } from '#app'
import { usePostsStore } from '~/stores/postsStore'
import { storeToRefs } from 'pinia'

const route = useRoute()
const postsStore = usePostsStore()
const { posts } = storeToRefs(postsStore)

const postId = route.params.id
const post = posts.value.find(p => p.id === postId)

useHead({
  title: post ? `${post.title} | Posts` : 'Post niet gevonden'
})
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold mb-4">
      {{ post ? post.title : 'Post niet gevonden' }}
    </h1>

    <div v-if="post" class="border rounded p-4 max-w-md">
      <h2 class="text-xl font-semibold">
        {{ post.title }}
      </h2>
      <p class="text-slate-600">
        {{ post.content }}
      </p>
    </div>

    <p v-else class="text-red-600">
      De opgegeven post bestaat niet.
    </p>
  </div>
</template>
