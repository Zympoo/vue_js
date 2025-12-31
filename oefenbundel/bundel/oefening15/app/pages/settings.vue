<script setup>
useHead({
    title: "Oefening 'Instellingenpagina' | Nuxt Starter"
})

import { useSettingsStore } from '~/stores/settingsStore'
import Notifications from '~/components/Notifications.vue'
import { ref } from 'vue'

const settingsStore = useSettingsStore()

const username = ref("")
const email = ref("")
const text_size = ref("small")
const emailnotifications = ref(false)
const pushnotifications = ref(false)

</script>
<template>
    <div class="max-w-2xl mx-auto p-6 space-y-8 rounded bg-gray-50">
        <!-- Account -->
        <section class="bg-white rounded-xl shadow p-6 space-y-4">
            <h2 class="text-lg font-semibold text-slate-700">Account</h2>

            <div class="flex items-center justify-between">
                <span class="text-slate-600">Gebruikersnaam <span class="text-red-500">*</span></span>
                <input v-model="username" type="text" placeholder="jouwnaam"
                    class="px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-slate-500 focus:outline-none" />
            </div>

            <div class="flex items-center justify-between">
                <span class="text-slate-600">E-mailadres <span class="text-red-500">*</span></span>
                <input v-model="email" type="email" placeholder="email@voorbeeld.nl"
                    class="px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-slate-500 focus:outline-none" />
            </div>
        </section>

        <!-- Weergave -->
        <section class="bg-white rounded-xl shadow p-6 space-y-4">
            <h2 class="text-lg font-semibold text-slate-700">Weergave</h2>

            <div class="flex items-center justify-between">
                <span class="text-slate-600">Tekstgrootte</span>
                <select v-model="text_size"
                    class="px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-slate-500 focus:outline-none">
                    <option value="small">Klein</option>
                    <option value="normal">Normaal</option>
                    <option value="large">Groot</option>
                </select>
            </div>
        </section>

        <!-- Notificaties -->
        <section class="bg-white rounded-xl shadow p-6 space-y-4">
            <h2 class="text-lg font-semibold text-slate-700">Notificaties</h2>

            <div class="flex items-center justify-between">
                <span class="text-slate-600">E-mail meldingen</span>
                <input v-model="emailnotifications" type="checkbox" class="w-5 h-5 accent-slate-600 cursor-pointer" />
            </div>

            <div class="flex items-center justify-between">
                <span class="text-slate-600">Push notificaties</span>
                <input v-model="pushnotifications" type="checkbox" class="w-5 h-5 accent-slate-600 cursor-pointer" />
            </div>
        </section>

        <!-- Acties -->
        <section class="bg-white rounded-xl shadow p-6 space-y-4">
            <button
                @click="settingsStore.submitChanges(username, email, text_size, emailnotifications, pushnotifications)"
                class="w-full py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition">
                Instellingen opslaan
            </button>
        </section>
    </div>

    <div class="fixed top-4 left-1/2 -translate-x-1/2 w-96 space-y-2">

        <!-- Notification -->
        <Notifications />

    </div>
</template>