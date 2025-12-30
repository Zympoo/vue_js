<script setup>
useHead({
    title: "Oefening 'Zoekfunctie' | Nuxt Starter"
})

import { storeToRefs } from 'pinia'
import { useSearchStore } from '~/stores/searchStore'

const searchStore = useSearchStore()
const { items, filter, filteredItems } = storeToRefs(searchStore)
</script>
<template>
    <div class="max-w-md mx-auto mt-10 p-4 bg-white rounded-xl shadow">
        <!-- Zoekbalk -->
        <input @input="searchStore.filterItems()" v-model="filter" type="text" placeholder="Zoek item..."
            class="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500" />

        <!-- Lijst -->
        <ul class="divide-y divide-gray-200">
            <li v-if="filteredItems.length === 0" v-for="item in items" :key="item.id" class="py-3 flex justify-between items-center">
                <span class="font-medium">{{ item.naam }}</span>
            </li>
            <li v-else v-for="filteredItem in filteredItems" :key="filteredItem.id" class="py-3 flex justify-between items-center">
                <span class="font-medium">{{ filteredItem.naam }}</span>
            </li>
        </ul>
    </div>
</template>
