<script setup>
const links = [
  { to: '/oefening1', label: 'Taal switch' },
  { to: '/oefening2', label: 'Zoekfunctie' }
]
</script>
<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <header class="bg-slate-800 text-white">
      <nav class="container mx-auto px-4 py-4 flex justify-between">
        <NuxtLink
          to="/oefening1"
          class="hover:text-slate-300"
          active-class="text-amber-400 font-semibold"
        >
          Taal switch
        </NuxtLink>
        <NuxtLink
          to="/oefening2"
          class="hover:text-slate-300"
          active-class="text-amber-400 font-semibold"
        >
          Zoekfunctie
        </NuxtLink>
      </nav>
    </header>

    <!-- Page content -->
    <main class="flex-1 container mx-auto px-4 py-8">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-slate-100 text-slate-600 text-center py-4 text-sm">
      © 2025 – Oefening 15
    </footer>
  </div>
</template>
