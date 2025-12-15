<script setup>
import { ref } from "vue"
import TaskCard from "./components/TaskCard.vue"
import BoardColumn from "./components/BoardColumn.vue"

const columns = ref([
  {
    id: "original",
    title: "Taken (origineel)",
    color: "blue",
    tasks: [
      {
        id: 1,
        title: "Nieuwe cursusstructuur uitwerken",
        description: "Modules herzien en oefeningen toevoegen.",
        assignee: "Tom Vanhoutte",
        role: "Full stack developer",
        priority: "hoog",
        done: false
      }
    ]
  },
  {
    id: "byRole",
    title: "Taken (op functie)",
    color: "green",
    tasks: [
      {
        id: 4,
        title: "Nieuwe cursusstructuur uitwerken",
        description: "Modules herzien en oefeningen toevoegen.",
        assignee: "Tom Vanhoutte",
        role: "Full stack developer",
        priority: "hoog",
        done: false
      },
      {
        id: 5,
        title: "Component structuur bepalen",
        description: "Structuur van de componentenboom uitwerken.",
        assignee: "Noah Martens",
        role: "Software architect",
        priority: "middel",
        done: false
      }
    ]
  },
  {
    id: "backlog",
    title: "Backlog",
    color: "purple",
    tasks: [
      {
        id: 7,
        title: "Nieuwe animaties uitwerken",
        description: "Ideeën verzamelen voor micro-interacties.",
        assignee: "Emma Vermeersch",
        role: "Frontend developer",
        priority: "laag",
        done: false
      }
    ]
  }
])

const newTaskTitle = ref("")
const newTaskDescription = ref("")
const newTaskColumnId = ref("original")

const nextTaskId = ref(100)

function handleAddTask() {
  const column = columns.value.find(c => c.id === newTaskColumnId.value)
  if (!column) return

  column.tasks.push({
    id: nextTaskId.value++,
    title: newTaskTitle.value,
    description: newTaskDescription.value,
    assignee: "Onbekend",
    role: "Onbekend",
    priority: "",
    done: false
  })

  newTaskTitle.value = ""
  newTaskDescription.value = ""
}

function handleAddTaskToColumn(payload) {
  const column = columns.value.find(c => c.id === payload.columnId)
  if (!column) return

  column.tasks.push({
    id: nextTaskId.value++,
    title: payload.title,
    description: "",
    assignee: "Onbekend",
    role: "Onbekend",
    priority: "",
    done: false
  })
}
</script>

<template>
  <main class="min-h-screen bg-slate-950 text-slate-100 px-6 py-8">
    <header class="mb-6">
      <h1 class="text-2xl font-bold">
        Mijn kanban board (statische versie)
      </h1>
      <p class="text-slate-400 text-sm mt-1">
        In deze versie staan alle kaarten nog vast in de code. Later maken we dit
        dynamisch.
      </p>
    </header>

    <!-- Centraal formulier (optie voor studenten) -->
    <section class="mb-6 bg-slate-900 border border-slate-800 rounded-xl p-4">
      <h2 class="text-sm font-semibold mb-3">
        Nieuwe taak toevoegen
      </h2>

      <form class="space-y-3" @submit.prevent="handleAddTask">
        <div class="space-y-1">
          <label class="block text-xs font-medium text-slate-300">
            Titel
          </label>
          <input
              v-model="newTaskTitle"
              type="text"
              class="w-full rounded-md bg-slate-800 border border-slate-700 px-3 py-1.5 text-sm"
          />
        </div>

        <div class="space-y-1">
          <label class="block text-xs font-medium text-slate-300">
            Beschrijving
          </label>
          <textarea
              v-model="newTaskDescription"
              rows="3"
              class="w-full rounded-md bg-slate-800 border border-slate-700 px-3 py-1.5 text-sm"
          ></textarea>
        </div>

        <div class="space-y-1">
          <label class="block text-xs font-medium text-slate-300">
            Kolom
          </label>
          <select
              v-model="newTaskColumnId"
              class="w-full rounded-md bg-slate-800 border border-slate-700 px-3 py-1.5 text-sm"
          >
            <option
                v-for="column in columns"
                :key="column.id"
                :value="column.id"
            >
              {{ column.title }}
            </option>
          </select>
        </div>

        <button
            type="submit"
            class="mt-2 inline-flex items-center rounded-md bg-blue-600 px-4 py-1.5 text-xs font-semibold hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed"
            :disabled="newTaskTitle.trim().length === 0"
        >
          Taak toevoegen (centraal)
        </button>
      </form>
    </section>

    <section class="grid gap-6 md:grid-cols-3">
      <BoardColumn
          v-for="column in columns"
          :key="column.id"
          :id="column.id"
          :title="column.title"
          :count="column.tasks.length"
          :color="column.color"
          @add-task="handleAddTaskToColumn"
      >
        <TaskCard
            v-for="task in column.tasks"
            :key="task.id"
            :title="task.title"
            :description="task.description"
            :assignee="task.assignee"
            :role="task.role"
            :priority="task.priority"
            :done="task.done"
        />
      </BoardColumn>
    </section>
  </main>
</template>
