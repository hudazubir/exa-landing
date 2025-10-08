<!-- <template>
  <nav class="bg-white px-8 py-4 relative">
    <div class="max-w-7xl mx-auto flex items-center justify-between relative">

      <div class="flex items-center gap-2">
        <img :src="logo" alt="Logo" class="h-9 object-contain" />
      </div>

      <div class="absolute left-1/2 -translate-x-1/2 flex items-center gap-8">
        <router-link to="/" class="text-gray-700 hover:text-gray-900">Home</router-link>
        <a href="#" class="text-gray-700 hover:text-gray-900">Discover</a>
        <a href="#" class="text-gray-700 hover:text-gray-900">Portfolio</a>
        <a href="#" class="text-gray-700 hover:text-gray-900">Service</a>
        <a href="#" class="text-gray-700 hover:text-gray-900">Client</a>
      </div>

      <div class="flex items-center">
        <button class="bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600 transition flex items-center gap-2">
          <span>→</span>
          <span>Login</span>
        </button>
      </div>


    </div>
  </nav>
</template>

<script setup>
  import logo from '@/assets/logo.png'
</script> -->


<template>
  <nav class="bg-white px-6 py-4 shadow-sm">
    <div class="max-w-7xl mx-auto flex items-center justify-between relative">
      <!-- Logo -->
      <div class="flex items-center gap-2">
        <img :src="logo" alt="Logo" class="h-9 object-contain" />
      </div>

      <!-- Nav links (desktop) -->
      <div class="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
        <router-link to="/" class="text-gray-700 hover:text-gray-900">Home</router-link>
        <a href="#" class="text-gray-700 hover:text-gray-900">Discover</a>
        <a href="#" class="text-gray-700 hover:text-gray-900">Portfolio</a>
        <a href="#" class="text-gray-700 hover:text-gray-900">Service</a>
        <a href="#" class="text-gray-700 hover:text-gray-900">Client</a>
      </div>

      <!-- Login (desktop) -->
      <div class="hidden md:flex items-center">
        <button
          class="bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600 transition flex items-center gap-2"
        >
          <span>→</span>
          <span>Login</span>
        </button>
      </div>

      <!-- Hamburger button (mobile) -->
      <button
        @click="toggleMenu"
        class="md:hidden text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
      >
        <svg
          v-if="!isOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="isOpen"
      class="md:hidden mt-3 bg-gray-50 border-t border-gray-200 py-2 rounded-lg shadow-sm"
    >
      <div class="flex flex-col space-y-2 text-center">
        <router-link to="/" class="text-gray-700 hover:text-gray-900">Home</router-link>
        <a href="#" class="text-gray-700 hover:text-gray-900">Discover</a>
        <a href="#" class="text-gray-700 hover:text-gray-900">Portfolio</a>
        <a href="#" class="text-gray-700 hover:text-gray-900">Service</a>
        <a href="#" class="text-gray-700 hover:text-gray-900">Client</a>
        <button
          class="mt-2 bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600 transition mx-auto flex items-center gap-2"
        >
          <span>→</span>
          <span>Login</span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import logo from '@/assets/logo.png'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>
