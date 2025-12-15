<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  count: {
    type: Number,
    default: 0
  },
  color: {
    type: String,
    default: "gray"
  }
})
</script>
<template>
  <section class="w-80 flex-shrink-0 bg-gray-800 rounded-xl p-4 border border-gray-700">
    <header class="flex items-center justify-between mb-3">
      <h2 class="text-sm font-semibold uppercase tracking-wide text-gray200">
        {{ props.title }}
      </h2>
      <span class="inline-flex items-center justify-center rounded-full px-2 py-0.5 text-xs text-gray-100"
            :class="props.color === 'blue' ? 'bg-blue-600' : props.color === 'green' ? 'bg-green-600' :  props.color === 'purple' ? 'bg-purple-600' : 'bg-gray-700' ">
        {{ props.count }}
      </span>
    </header>
    <div class="space-y-3">
      <slot />
    </div>
    <button
        class="mt-4 w-full rounded-lg bg-gray-700 py-1.5 text-xs font-medium text-gray-200 hover:bg-gray-600"
    >
      + Kaart toevoegen
    </button>
  </section>
</template>