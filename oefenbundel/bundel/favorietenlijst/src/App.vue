<script setup>
import { useFavoritesStore } from './stores/favoritesStore'
import { storeToRefs } from 'pinia'

const favoritesStore = useFavoritesStore()
const { articles, favorites } = storeToRefs(favoritesStore)
</script>

<template>
  <main class="p-6 space-y-8">

    <!-- Artikelenlijst -->
    <section>
      <h2 class="text-xl font-bold mb-4">Alle Artikelen</h2>
      <div class="space-y-4">
        <div v-for="article in articles" :key="article.id" class="p-4 border rounded flex justify-between items-center">
          <div>
            <h3 class="font-semibold">{{ article.title }}</h3>
            <p class="text-gray-600">{{ article.beschrijving }}</p>
          </div>
          <button :class="article.favorite ? 'text-yellow-500' : 'text-black'" class="font-bold text-xl cursor-pointer" 
                  @click="favoritesStore.toggleFavorite(article.id, article.title, article.beschrijving)"
          >
                  ★ Favoriet
          </button>
        </div>
      </div>
    </section>

    <!-- Favorietenlijst -->
    <section>
      <h2 class="text-xl font-bold mb-4">Mijn Favorieten</h2>
      <div class="space-y-4">
        <div v-for="favorite in favorites" :key="favorite.id" class="p-4 border rounded bg-yellow-50">
          <div>
            <h3 class="font-semibold">{{ favorite.title }}</h3>
            <p class="text-gray-600">{{ favorite.beschrijving }}</p>
          </div>
        </div>
      </div>
    </section>

  </main>
</template>
