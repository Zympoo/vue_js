<script setup>
import {ref} from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  count: {
    type: Number,
    default: 0
  },
  id: {
    type: String,
    required: true
  }
})
const emit = defineEmits(["add-task"])

const showForm = ref(false)
const newTitle = ref("")
const newDescription = ref("")

function toggleForm() {
  showForm.value = !showForm.value
}

function handleSubmit() {
  const title = newTitle.value.trim()
  const description = newDescription.value

  if (!title) {
    return
  }

  emit("add-task", {
    columnId: props.id,
    title,
    description
  })

  newTitle.value = "";
  newDescription.value = "";
  showForm.value = false
}
</script>
<template>
  <section class="w-80 flex-shrink-0 bg-gray-800 rounded-xl p-4 border border-gray-700">
    <header class="flex items-center justify-between mb-3">
      <h2 class="text-sm font-semibold uppercase tracking-wide text-gray200">
        {{ props.title }}
      </h2>
      <span class="inline-flex items-center justify-center rounded-full bg-gray-700 px-2 py-0.5 text-xs text-gray-100">
        {{ props.count }}
      </span>
    </header>
    <div class="space-y-3">
      <slot/>
    </div>
    <button
        class="mt-4 w-full rounded-lg bg-gray-700 py-1.5 text-xs font-medium text-gray-200 hover:bg-gray-600"
        v-if="!showForm" @click="toggleForm"
    >
      + Kaart toevoegen
    </button>
    <form
        v-else
        class="bg-gray-900 border border-gray-700 rounded-lg p-3 flex flex-col gap-2"
        @submit.prevent="handleSubmit"
    >
      <input
          type="text"
          class="rounded bg-gray-800 border border-gray-700 px-2 py-1 text-xs
                 focus:outline-none focus:ring-2 focus:ring-blue-600"
          v-model="newTitle"
          placeholder="Titel van de taak"
      />
      <textarea
          rows="2"
          class="rounded bg-gray-800 border border-gray-700 px-2 py-1 text-xs
                 focus:outline-none focus:ring-2 focus:ring-blue-600"
          v-model="newDescription"
          placeholder="Beschrijving (optioneel)"
      ></textarea>
      <div class="flex justify-end gap-2 mt-1">
        <button
            type="button"
            class="px-2 py-1 text-xs rounded bg-gray-700 hover:bg-gray-600"
            @click="toggleForm"
        >
          Annuleren
        </button>
        <button
            type="submit"
            class="px-2 py-1 text-xs rounded bg-blue-600 hover:bg-blue-500
                   disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="newTitle.trim().length === 0"
        >
          Toevoegen
        </button>
      </div>
    </form>
  </section>
</template>