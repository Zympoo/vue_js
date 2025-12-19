<script setup>
import { ref } from 'vue';

  const tasks = ref([
    {
      id : 1,
      title: "Buy groceries",
      done: true
    },
    {
      id : 2,
      title: "Walk the dog",
      done: false
    },
    {
      id : 3,
      title: "Read a book",
      done: false
    }
  ])
</script>
<template>
  <main class="bg-gray-100 min-h-screen flex items-center justify-center">
    <div class="w-96 bg-white rounded-lg shadow border border-gray-300">
      <!-- Header -->
      <header class="flex items-center justify-between px-4 py-3 border-b rounded-t-lg border-gray-300 bg-gray-100">
        <h2 class="font-semibold text-gray-800">Todo Lite</h2>
        <button class="text-gray-800 rotate-90 text-lg">
          &#x22EE;
        </button>
      </header>

      <!-- Todo items -->
      <ul class="divide-y divide-gray-300 overflow-y-auto h-[250px]">
        <li v-for="task in tasks" :key="task.id" class="flex items-center justify-between px-4 py-3">
          <label class="flex items-center gap-3">
            <input type="checkbox" v-model="task.done" class="h-4 w-4 rounded border-gray-300">
            <span class="text-gray-800">{{ task.title }}</span>
          </label>
          <button class="px-3 py-1 text-sm border border-gray-300 rounded shadow hover:bg-gray-100">
            Verwijder
          </button>
        </li>
      </ul>

      <!-- Footer -->
      <footer class="px-4 py-3 border-t border-gray-300 text-sm text-gray-600">
        {{ tasks.length }} taken totaal
      </footer>
    </div>
  </main>
</template>