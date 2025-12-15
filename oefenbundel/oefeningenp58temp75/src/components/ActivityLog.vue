<script setup>
const props = defineProps({
  entries: {
    type: Array,
    required: true,
  }
})
</script>
<template>
<section class="rounded-lg bg-slate-900 p-4 shadow-md border border-gray-800 mb-4 space-y-2">
  <h2 class="mb-4">Activiteit</h2>
  <p class="text-sm text-gray-400" v-if="props.entries.length === 0">Nog geen activiteiten</p>

  <div class="text-sm text-gray-300" v-else v-for="(entry, entryIndex) in entries"
       :key="entryIndex">
    <p> {{ entry }} </p>
  </div>
</section>
</template>