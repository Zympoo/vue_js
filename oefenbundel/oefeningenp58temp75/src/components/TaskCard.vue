<script setup>
import CardFooter from "./CardFooter.vue"
import TaskTitle from "./TaskTitle.vue"

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  id: {
    type: Number,
    required: true
  },
  columnId: {
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
  },
  important: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits([
    "toggle-important",
    "duplicate-task",
    "move-up",
    "move-down",
    "delete-task"
])

function handleToggleImportant(){
  emit("toggle-important", {
    taskId: props.id,
    fromColumnId: props.columnId
  })
}

function handleDuplicateTask(){
  emit("duplicate-task", {
    taskId: props.id,
    fromColumnId: props.columnId
  })
}

function handleMoveUp(){
  emit("move-up", {
    taskId: props.id,
    fromColumnId: props.columnId
  })
}

function handleMoveDown(){
  emit("move-down", {
    taskId: props.id,
    fromColumnId: props.columnId
  })
}

function handleDeleteTask(){
  emit("delete-task", {
    taskId: props.id,
    fromColumnId: props.columnId
  })
}
</script>

<template>
  <article
      class="rounded-lg p-4 shadow-md border border-gray-700 bg-slate-800"
  >
    <header class="flex items-start justify-between">
      <button
          type="button"
          class="text-[11px] px-2 py-1 rounded-full border border-slate-600 bg-slate-950 hover:bg-slate-800"
          :class="important ? 'text-yellow-300' : 'text-slate-300'"
          @click="handleToggleImportant"
      >
        {{ important ? "★ Belangrijk" : "☆ Markeer belangrijk" }}
      </button>

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
    </header>

    <div class="mt-2">
      <TaskTitle
          :title="props.title"
          :has-description="!!props.description"
      />

      <p
          v-if="props.description"
          class="text-xs text-gray-300 mt-1 leading-relaxed"
      >
        {{ props.description }}
      </p>
    </div>

    <slot />

    <footer class="mt-1 flex flex-wrap gap-2 items-center">
      <CardFooter :role="props.role" :assignee="props.assignee" />
    </footer>

    <div class="mt-2 flex justify-between items-center">
      <div class="flex gap-1">
        <button
            type="button"
            class="text-[11px] px-2 py-1 rounded-md bg-slate-700 hover:bg-slate-600 text-slate-100"
            @click="handleMoveUp"
        >
          ↑
        </button>
        <button
            type="button"
            class="text-[11px] px-2 py-1 rounded-md bg-slate-700 hover:bg-slate-600 text-slate-100"
            @click="handleMoveDown"
        >
          ↓
        </button>
      </div>

      <div class="flex gap-2">
        <button
            type="button"
            class="text-[11px] px-3 py-1 rounded-md bg-slate-700 hover:bg-slate-600 text-slate-100"
            @click="handleDuplicateTask"
        >
          Dupliceren
        </button>

        <button
            type="button"
            class="text-[11px] px-3 py-1 rounded-md bg-red-700 hover:bg-red-600 text-slate-50"
            @click="handleDeleteTask"
        >
          Verwijderen
        </button>
      </div>
    </div>
  </article>
</template>
