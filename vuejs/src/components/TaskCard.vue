<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ""
  },
  id: {
    type: Number,
    required: true
  },
  columnId: {
    type: String,
    required: true
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
const emit = defineEmits(["move-task", "move-task-back", "delete-task"]);

function handleMoveToNextColumn(){
  if(props.isLastColumn){
    return;
  }

  emit("move-task", {
    taskId: props.id,
    fromColumnId: props.columnId,
  })
}

function handleMoveToPreviousColumn(){
  if(props.isFirstColumn){
    return;
  }

  emit("move-task-back", {
    taskId: props.id,
    fromColumnId: props.columnId,
  })
}

function handleDeleteTask(){
  emit("delete-task", {
    taskId: props.id,
    fromColumnId: props.columnId,
  })
}
</script>
<template>
  <article class="rounded-lg bg-gray-800 p-4 shadow-md border border-gray700">
    <h3 class="font-semibold text-sm text-white">
      {{ props.title }}
    </h3>
    <p v-if="props.description" class="text-xs text-gray-300 mt-1 leading-relaxed">
      {{ props.description }}
    </p>
    <div class="mt-3 flex justify-between items-center gap-2">
      <div class="flex gap-1">
        <button
            v-if="!props.isFirstColumn"
            type="button"
            class="text-[11px] px-2 py-1 rounded bg-gray-700 hover:bg-gray-600
                   text-gray-100"
            @click="handleMoveToPreviousColumn"
        >
          Vorige kolom
        </button>
        <button
            v-if="!props.isLastColumn"
            type="button"
            class="text-[11px] px-2 py-1 rounded bg-gray-700 hover:bg-gray-600
                   text-gray-100"
            @click="handleMoveToNextColumn"
        >
          Volgende kolom
        </button>
      </div>
      <button
          type="button"
          class="text-[11px] px-2 py-1 rounded bg-red-700 hover:bg-red-600
                 text-gray-100"
          @click="handleDeleteTask"
      >
        Verwijderen
      </button>
    </div>
  </article>
</template>