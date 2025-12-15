<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: "role"
  },
  rounded: {
    type: Boolean,
    default: true
  },
  showInitial: {
    type: Boolean,
    default: false
  }
})
</script>
<template>
  <span
      class="inline-flex items-center px-2.5 py-1 text-[11px] font-medium border"
      :class="[props.rounded ? 'rounded-full' : 'rounded-md',
              props.type === 'role'
                ? 'bg-emerald-500/15 border-emerald-400/60 text-emerald-100'
                : 'bg-indigo-500/15 border-indigo-400/60 text-indigo-100'
        ]"
  >
    <span v-if="showInitial" class="inline-flex items-center justify-center w-4 h-4 rounded-full mx-1 bg-black/30 text-[9px]">
      {{ props.label[0] }}
    </span>
    {{ props.label }}
  </span>
</template>