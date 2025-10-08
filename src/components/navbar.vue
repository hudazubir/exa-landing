<template>
  <nav class="bg-white px-8 py-4">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center gap-2">
        <img :src="logo" alt="Logo" class="w-135 h-10 object-contain" />
      </div>

      <!-- Navigation Links -->
      <div class="flex items-center gap-8">
        <router-link to="/" class="text-gray-700 hover:text-gray-900">Home</router-link>
        <a href="#" class="text-gray-700 hover:text-gray-900">Discover</a>
        <a href="#" class="text-gray-700 hover:text-gray-900">Portfolio</a>
        <a href="#" class="text-gray-700 hover:text-gray-900">Service</a>
        <a href="#" class="text-gray-700 hover:text-gray-900">Client</a>
        <button class="text-blue-500 hover:text-blue-600 flex items-center gap-1">
          <span>→</span>
          <span>Login</span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import logo from '@/assets/logo.png'
</script>

