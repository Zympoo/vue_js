<script setup>
import { ref } from 'vue';

const whichTitle = ref (1)
</script>
<template>
  <main class="bg-gray-100 min-h-screen flex items-center justify-center">
    <div class="w-96 bg-white rounded-lg shadow border">
      
      <!-- Header -->
      <div class="px-4 py-3 border-b font-semibold text-gray-800">
        Accordion
      </div>

      <!-- Accordion item -->
      <div class="border-b">
        <h2 class="w-full text-left px-4 py-3 text-gray-700 cursor-pointer" @click="whichTitle = 1">
          Titel 1
        </h2>
        <p v-if="whichTitle === 1" class="px-4 pb-4 text-gray-600">
          Inhoud van accordion item 1.
        </p>
      </div>

      <!-- Accordion item -->
      <div class="border-b">
        <h2 class="w-full text-left px-4 py-3 text-gray-700 cursor-pointer" @click="whichTitle = 2">
          Titel 2
        </h2>
        <p v-if="whichTitle === 2" class="px-4 pb-4 text-gray-600">
          Inhoud van accordion item 2.
        </p>
      </div>

      <!-- Accordion item -->
      <div>
        <h2 class="w-full text-left px-4 py-3 text-gray-700 cursor-pointer" @click="whichTitle = 3">
          Titel 3
        </h2>
        <p v-if="whichTitle === 3" class="px-4 pb-4 text-gray-600">
          Inhoud van accordion item 3.
        </p>
      </div>
    </div>
  </main>
</template>