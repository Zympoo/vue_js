<script setup>
import { ref } from "vue"

const props = defineProps({
  id: {
    type: String,
    required: true
  },
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

const emit = defineEmits(["add-task"])

const showForm = ref(false)
const newTitle = ref("")

function handleSubmit() {
  if (!newTitle.value.trim()) {
    return
  }

  emit("add-task", {
    columnId: props.id,
    title: newTitle.value.trim()
  })

  newTitle.value = ""
  showForm.value = false
}
</script>

<template>
  <section
      class="w-80 flex-shrink-0 bg-gray-800 rounded-xl p-4 border border-gray-700"
  >
    <header class="flex items-center justify-between mb-3">
      <h2 class="text-sm font-semibold uppercase tracking-wide text-gray-200">
        {{ props.title }}
      </h2>

      <span
          class="inline-flex items-center justify-center rounded-full px-2 py-0.5 text-xs text-gray-100"
          :class="
          props.color === 'blue'
            ? 'bg-blue-600'
            : props.color === 'green'
            ? 'bg-green-600'
            : props.color === 'purple'
            ? 'bg-purple-600'
            : 'bg-gray-700'
        "
      >
        {{ props.count }}
      </span>
    </header>

    <div class="space-y-3">
      <slot />
    </div>

    <button
        class="mt-4 w-full rounded-lg bg-gray-700 py-1.5 text-xs font-medium text-gray-200 hover:bg-gray-600"
        @click="showForm = !showForm"
    >
      + Kaart toevoegen
    </button>

    <form
        v-if="showForm"
        class="mt-3 space-y-2 border border-gray-700 rounded-lg p-3 bg-gray-900/60"
        @submit.prevent="handleSubmit"
    >
      <input
          v-model="newTitle"
          type="text"
          class="w-full rounded-md bg-gray-800 border border-gray-700 px-2 py-1 text-xs"
          placeholder="Titel van de nieuwe taak"
      />
      <div class="flex justify-end gap-2">
        <button
            type="button"
            class="px-2 py-1 text-[11px] rounded-md border border-gray-600 text-gray-200 hover:bg-gray-700"
            @click="showForm = false"
        >
          Annuleren
        </button>
        <button
            type="submit"
            class="px-3 py-1 text-[11px] rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed"
            :disabled="newTitle.trim().length === 0"
        >
          Opslaan
        </button>
      </div>
    </form>
  </section>
</template>
