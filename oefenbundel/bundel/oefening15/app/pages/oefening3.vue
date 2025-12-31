<script setup>
useHead({
    title: "Oefening 'Sorteerfunctie' | Nuxt Starter"
})

import { storeToRefs } from 'pinia'
import { useSortStore } from '~/stores/sortStore'

const sortStore = useSortStore()
const { items, sort, sortedItems } = storeToRefs(sortStore)
</script>
<template>
    <div class="max-w-md mx-auto mt-10 p-4 bg-white rounded-xl shadow">
        <!-- Zoekbalk -->
        <select @change="sortStore.sortItems" v-model="sort" class="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg bg-white text-gray-700
         focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500
         cursor-pointer">
            <option value="" disabled selected>Selecteer sorteeroptie</option>
            <option value="alfa">A – Z</option>
            <option value="reverse_alfa">Z – A</option>
        </select>

        <!-- Lijst -->
        <ul class="divide-y divide-gray-200">
            <li v-if="sortedItems.length === 0" v-for="item in items" :key="item.id"
                class="py-3 flex justify-between items-center">
                <span class="font-medium">{{ item.naam }}</span>
            </li>
            <li v-else v-for="sortedItem in sortedItems" :key="sortedItem.id"
                class="py-3 flex justify-between items-center">
                <span class="font-medium">{{ sortedItem.naam }}</span>
            </li>
        </ul>
    </div>
</template>