<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <header class="bg-slate-800 text-white">
      <nav class="container mx-auto px-4 py-4 flex gap-6">
        <NuxtLink
          to="/"
          class="hover:text-slate-300"
          active-class="text-amber-400 font-semibold"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="hover:text-slate-300"
          active-class="text-amber-400 font-semibold"
        >
          About
        </NuxtLink>
      </nav>
    </header>

    <!-- Page content -->
    <main class="flex-1 container mx-auto px-4 py-8">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-slate-100 text-slate-600 text-center py-4 text-sm">
      © 2025 – Mijn Nuxt App
    </footer>
  </div>
</template>
