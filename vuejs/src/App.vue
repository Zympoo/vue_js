<script setup>
import { ref } from "vue"
import TaskCard from "./components/TaskCard.vue"
import BoardColumn from "./components/BoardColumn.vue"

const columns = ref([
  {
    id: "todo",
    title: "To Do",
    tasks: [
      {
        id: 1,
        title: "Nieuwe cursusstructuur uitwerken",
        description: "Modules herzien en oefeningen toevoegen."
      },
      {
        id: 2,
        title: "Design voor dashboard maken",
        description: "Wireframes en kleurenpalet bepalen."
      }
    ]
  },
  {
    id: "doing",
    title: "Doing",
    tasks: [
      {
        id: 3,
        title: "API koppeling testen",
        description: "Controleer foutafhandeling en timeouts."
      }
    ]
  },
  {
    id: "done",
    title: "Done",
    tasks: [
      {
        id: 4,
        title: "Vite project opgezet",
        description: "Basisconfiguratie met Vue en Tailwind."
      },
      {
        id: 5,
        title: "Component structuur bepaald",
        description: ""
      },
      {
        id: 6,
        title: "Tailwind integratie getest",
        description: ""
      }
    ]
  }
])

const nextTaskId = ref(columns.value.length + 1)

function handleAddTaskToColumn(payload) {
  const { columnId, title, description } = payload
  const column = columns.value.find(col => col.id === columnId)
  if (!column) {
    return
  }
  column.tasks.push({
    id: nextTaskId.value++,
    title,
    description
  })
}

function handleMoveTask(payload) {
  const { taskId, fromColumnId } = payload

  const fromColumnIndex = columns.value.findIndex(col => col.id === fromColumnId)
  if (fromColumnIndex === -1) {
    return
  }

  const fromColumn = columns.value[fromColumnIndex]
  const taskIndex = fromColumn.tasks.findIndex(task => task.id === taskId)
  if (taskIndex === -1) {
    return
  }

  const [task] = fromColumn.tasks.splice(taskIndex, 1)

  const toColumnIndex = fromColumnIndex + 1
  if (toColumnIndex >= columns.value.length) {
    fromColumn.tasks.splice(taskIndex, 0, task)
    return
  }

  const toColumn = columns.value[toColumnIndex]
  toColumn.tasks.push(task)
}

function handleMoveTaskBack(payload) {
  const { taskId, fromColumnId } = payload

  const fromColumnIndex = columns.value.findIndex(col => col.id === fromColumnId)
  if (fromColumnIndex === -1) {
    return
  }

  const fromColumn = columns.value[fromColumnIndex]
  const taskIndex = fromColumn.tasks.findIndex(task => task.id === taskId)
  if (taskIndex === -1) {
    return
  }

  const [task] = fromColumn.tasks.splice(taskIndex, 1)

  const toColumnIndex = fromColumnIndex - 1
  if (toColumnIndex < 0) {
    fromColumn.tasks.splice(taskIndex, 0, task)
    return
  }

  const toColumn = columns.value[toColumnIndex]
  toColumn.tasks.push(task)
}

function handleDeleteTask(payload) {
  const { taskId, fromColumnId } = payload
  const column = columns.value.find(col => col.id === fromColumnId)
  if (!column) {
    return
  }
  const taskIndex = column.tasks.findIndex(task => task.id === taskId)
  if (taskIndex === -1) {
    return
  }
  column.tasks.splice(taskIndex, 1)
}

</script>
<template>
  <main class="min-h-screen bg-gray-900 text-white px-6 py-8">
    <header class="mb-6 space-y-4">
      <div>
        <h1 class="text-2xl font-bold">
          Mijn kanban board (dynamische versie)
        </h1>
        <p class="text-gray-400 text-sm mt-1">
          De kolommen en kaarten worden gegenereerd op basis van JavaScript
          data met v-for.
        </p>
      </div>
    </header>
    <section class="flex gap-6 overflow-x-auto pb-4">
      <BoardColumn
          v-for="(column, columnIndex) in columns"
          :key="column.id"
          :id="column.id"
          :title="column.title"
          :count="column.tasks.length"
          @add-task="handleAddTaskToColumn"
      >
        <TaskCard
            v-for="task in column.tasks"
            :key="task.id"
            :id="task.id"
            :columnId="column.id"
            :title="task.title"
            :description="task.description"
            :isLastColumn="columnIndex === columns.length - 1"
            :isFirstColumn="columnIndex === 0"
            @move-task="handleMoveTask"
            @move-task-back="handleMoveTaskBack"
            @delete-task="handleDeleteTask"
        />
      </BoardColumn>
    </section>
  </main>
</template>