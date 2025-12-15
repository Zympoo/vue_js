<script setup>
import TaskCard from "./components/TaskCard.vue"
import BoardColumn from "./components/BoardColumn.vue"
</script>
<template>
  <main class="min-h-screen bg-gray-900 text-white px-6 py-8">
    <header class="mb-6">
      <h1 class="text-2xl font-bold">
        Mijn kanban board (statische versie)
      </h1>
      <p class="text-gray-400 text-sm mt-1">
        In deze versie staan alle kaarten nog vast in de code. Later maken we
        dit dynamisch.
      </p>
    </header>
    <section class="flex gap-6 overflow-x-auto pb-4">
      <!-- Kolom 1: originele volgorde -->
      <BoardColumn title="Taken (origineel)" :count="3" color="blue">
        <TaskCard
            title="Nieuwe cursusstructuur uitwerken"
            description="Modules herzien en oefeningen toevoegen."
            assignee="Tom Vanhoutte"
            role="Full stack developer"
            priority="hoog"
        />
        <TaskCard
            title="Design voor dashboard maken"
            description="Wireframes en kleurenpalet bepalen."
            assignee="Sarah Janssens"
            role="UI designer"
            priority="middel"
        />
        <TaskCard
            title="Component structuur bepaald"
            assignee="Noah Martens"
            role="Software architect"
            priority="middel"
            :done="true"
        />
      </BoardColumn>
      <!-- Kolom 2: gesorteerd op functie -->
      <BoardColumn title="Taken (op functie)" :count="3" color="green">
        <!-- eerst developer -->
        <TaskCard
            title="Nieuwe cursusstructuur uitwerken"
            description="Modules herzien en oefeningen toevoegen."
            assignee="Tom Vanhoutte"
            role="Full stack developer"
            priority="hoog"
        />
        <!-- dan architect -->
        <TaskCard
            title="Component structuur bepaald"
            assignee="Noah Martens"
            role="Software architect"
            priority="middel"
            :done="true"
        />
        <!-- dan designer -->
        <TaskCard
            title="Design voor dashboard maken"
            description="Wireframes en kleurenpalet bepalen."
            assignee="Sarah Janssens"
            role="UI designer"
            priority="middel"
        />
      </BoardColumn>
    </section>
  </main>
</template>