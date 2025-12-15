<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  hasDescription: {
    type: Boolean,
    required: true
  }
})
</script>

<template>
  <h3
      class="font-semibold text-white"
      :class="props.hasDescription ? 'text-sm' : 'text-base'"
  >
    {{ props.title.length > 25 ? props.title.slice(0, 25) + "..." : props.title }}
  </h3>
</template>
