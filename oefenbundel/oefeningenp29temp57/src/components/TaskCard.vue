<script setup>
import CardFooter from "./CardFooter.vue"
import TaskTitle from "./TaskTitle.vue"

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ""
  },
  assignee: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  priority: {
    type: String,
    default: ""
  },
  done: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <article
      class="rounded-lg p-4 shadow-md border border-gray-700"
      :class="props.done ? 'bg-gray-900' : 'bg-gray-800'"
  >
    <div class="flex items-start justify-between">
      <TaskTitle
          :title="props.title"
          :has-description="!!props.description"
      />

      <span
          v-if="props.priority"
          class="ml-2 rounded-full px-2 py-0.5 text-[10px] font-medium border"
          :class="
          props.priority === 'hoog'
            ? 'bg-red-500/20 border-red-400/70 text-red-100'
            : props.priority === 'middel'
              ? 'bg-yellow-500/20 border-yellow-400/70 text-yellow-100'
              : 'bg-gray-600/70 border-gray-500/70 text-gray-100'
        "
      >
        {{ props.priority }}
      </span>
    </div>

    <p
        v-if="props.description"
        class="text-xs text-gray-300 mt-1 leading-relaxed"
    >
      {{ props.description }}
    </p>

    <slot />

    <CardFooter :role="props.role" :assignee="props.assignee" />
  </article>
</template>
