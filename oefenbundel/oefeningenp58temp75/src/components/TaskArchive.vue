<script setup>
const props = defineProps({
  tasks: {
    type: Array,
    required: true,
  }
})
</script>
<template>
  <section
      class="mb-4 bg-slate-900 border border-slate-800 rounded-xl p-4 text-xs"
  >
    <h2 class="text-sm font-semibold mb-2">
      Archief (verwijderde taken)
    </h2>

    <p v-if="props.tasks.length === 0" class="text-slate-400">
      Nog geen verwijderde taken.
    </p>

    <ul v-else class="space-y-1 max-h-32 overflow-y-auto">
      <li
          v-for="task in props.tasks"
          :key="task.id + '-' + task.fromColumnTitle"
          class="text-slate-200"
      >
        <span class="font-semibold">{{ task.title }}</span>
        <span class="text-slate-400">
          (oorspronkelijk in {{ task.fromColumnTitle }})
        </span>
      </li>
    </ul>
  </section>
</template>