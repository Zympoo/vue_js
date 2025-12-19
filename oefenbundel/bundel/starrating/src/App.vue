<script setup>
import { ref } from 'vue';
import StarRating from './components/StarRating.vue';

const rating = ref(3)

function handleSetRating(payload){
  rating.value = payload;
  return rating
}
</script>
<template>
  <main class="bg-gray-100 min-h-screen flex items-center justify-center">
     <div class="w-80 bg-white rounded-lg shadow border">
      <!-- Header -->
      <div class="px-4 py-3 border-b">
        <h2 class="font-semibold text-gray-800">Star Rating</h2>
      </div>

    <StarRating
      :rating="rating"
      @set-rating="handleSetRating"
    />
    </div>
  </main>
</template>