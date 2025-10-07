<template>
  <div
    class="bg-white text-slate-900 p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
    @click="$emit('click')" >
    <h2 class="text-2xl font-semibold mb-2">{{ title }}</h2>
    <p class="text-sm text-gray-600">{{ description }}</p>
  </div>
</template>

<script setup>
  defineProps({
    title: String,
    description: String
  })
</script>
