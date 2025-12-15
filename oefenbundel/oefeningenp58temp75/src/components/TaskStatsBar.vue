<script setup>
import { computed } from 'vue'

const props = defineProps({
  columns: {
    type: Array,
    required: true,
  }
})

function getTotalTasks() {
  return props.columns.reduce((total, column) => { return total + (column.tasks?.length || 0) }, 0)
}

</script>
<template>
  <section class="rounded-lg bg-slate-900 p-4 shadow-md border border-slate-800 mb-4 space-y-2">
    <h2>Overzicht van taken</h2>
    <p class="text-sm text-gray-300">
      Totaal aantal taken:
      <span class="text-white">{{ getTotalTasks() }}</span>
    </p>

    <div class="flex gap-6">
      <div v-for="(column, columnIndex) in columns"
           :key="columnIndex"
           :title="column.title">
        <span class="uppercase inline-flex items-center justify-between rounded-full border border-slate-800
                   bg-gray-900 px-3 py-1 text-xs text-gray-100">
        {{ column.title }} ({{ column.tasks.length }})
      </span>
      </div>
    </div>
  </section>
</template>