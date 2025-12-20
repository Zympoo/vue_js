<script setup>
import { computed, ref } from 'vue';

const inputName = ref("")
const inputEmail = ref("")

const checkEmail = computed(() => inputEmail.value.includes("@"))
</script>
<template>
  <main class="bg-gray-100 min-h-screen flex items-center justify-center">
    <div class="w-96 bg-white rounded-lg shadow border">
      <!-- Header -->
      <div class="px-4 py-3 border-b font-semibold text-gray-800">
        Contactformulier
      </div>

      <!-- Form -->
      <form class="px-4 py-4 space-y-4">
        <!-- Naam -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Naam
          </label>
          <input type="text" v-model="inputName" 
            class="w-full px-3 py-2 border rounded"
            :class="!inputName ? 'border-red-400 rounded focus:outline-none focus:ring-1 focus:ring-red-400' : ''" 
          />
          <p v-if="!inputName" class="mt-1 text-sm text-red-500">
            Naam is verplicht.
          </p>
        </div>

        <!-- Email -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            E-mail
          </label>
          <input type="email" v-model="inputEmail"
            class="w-full px-3 py-2 border rounded"
            :class="!checkEmail ? 'border-red-400 rounded focus:outline-none focus:ring-1 focus:ring-red-400' : ''" µ
          />
          <p v-if="!checkEmail" class="mt-1 text-sm text-red-500">
            Ongeldige e-mail.
          </p>
        </div>

        <!-- Bericht -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Bericht
          </label>
          <textarea rows="3"
            class="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-400"></textarea>
        </div>

        <!-- Button -->
        <div>
          <button :disabled="!inputName || !checkEmail" type="submit" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Verstuur
          </button>
        </div>
      </form>
    </div>
  </main>
</template>