<script setup>
const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  columnId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ""
  },
  isFirstColumn: {
    type: Boolean,
    default: false
  },
  isLastColumn: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(["move-task", "move-task-back", "delete-task"])

function handleMoveToNextColumn() {
  if (props.isLastColumn) {
    return
  }
  emit("move-task", {
    taskId: props.id,
    fromColumnId: props.columnId
  })
}

function handleMoveToPreviousColumn() {
  if (props.isFirstColumn) {
    return
  }
  emit("move-task-back", {
    taskId: props.id,
    fromColumnId: props.columnId
  })
}

function handleDeleteTask() {
  emit("delete-task", {
    taskId: props.id,
    fromColumnId: props.columnId
  })
}
</script>
<template>
  <article class="rounded-xl bg-slate-800/90 p-3 border border-slate-700">
    <h3 class="text-sm font-semibold text-slate-50">
      {{ title }}
    </h3>
    <p
        v-if="description"
        class="mt-1 text-[11px] leading-relaxed text-slate-200"
    >
      {{ description }}
    </p>
    <div class="mt-3 flex items-center justify-between gap-2">
      <div class="flex gap-1">
        <button
            v-if="!isFirstColumn"
            class="rounded-md bg-slate-700 px-2 py-1 text-[11px] text-slate-100 hover:bg-slate-600"
            type="button"
            @click="handleMoveToPreviousColumn"
        >
          Vorige
        </button>
        <button
            v-if="!isLastColumn"
            class="rounded-md bg-slate-700 px-2 py-1 text-[11px] text-slate-100 hover:bg-slate-600"
            type="button"
            @click="handleMoveToNextColumn"
        >
          Volgende
        </button>
      </div>
      <button
          class="rounded-md bg-red-600 px-2 py-1 text-[11px] font-medium text-slate-50 hover:bg-red-500"
          type="button"
          @click="handleDeleteTask"
      >
        Verwijderen
      </button>
    </div>
  </article>
</template>