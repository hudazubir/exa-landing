<template>
  <div class="min-h-screen bg-gradient-to-b from-white to-yellow-50">
     <navbar />

    <!-- Hero Section -->
    <section class="text-center py-20 px-4 relative overflow-hidden">
      <h1 class="text-6xl md:text-7xl font-bold text-yellow-600 mb-6">Exa Store</h1>
      <p class="max-w-4xl mx-auto text-yellow-600 leading-relaxed text-lg">
        Exa Inventory System (Exa Store) is a software solution that helps businesses manage the tracking, control, and organization of their inventory. It ensures
        that stock levels are maintained, and inventory movements (such as purchases, sales, returns, and transfers) are recorded accurately.
      </p>
    </section>

    <!-- Core Modules -->
    <section class="py-16 bg-white px-6 md:px-20 text-center">
      <h2 class="text-4xl font-bold text-yellow-600 mb-12">Core Modules</h2>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Product Management -->
        <div class="p-6 bg-yellow-50 rounded-xl shadow-sm hover:shadow-lg transition">
          <div class="text-green-600 text-3xl mb-4">🎫</div>
          <h3 class="text-xl font-semibold mb-2">Product Management</h3>
          <p class="text-yellow-600 text-sm">
            Users can report issues or make requests. Each issue is generated as a ticket with a unique ID. Tickets can be
            categorized by priority, type of issue, or department.
          </p>
        </div>

        <!-- Stock Level Management -->
        <div class="p-6 bg-yellow-50 rounded-xl shadow-sm hover:shadow-lg transition">
          <div class="text-yellow-600 text-3xl mb-4">🔔</div>
          <h3 class="text-xl font-semibold mb-2">Stock Level Management</h3>
          <p class="text-yellow-600 text-sm">
            Automated notifications to users and support teams about ticket status (e.g., open, in progress, resolved, or
            closed).
          </p>
        </div>

        <!-- Order Management -->
        <div class="p-6 bg-yellow-50 rounded-xl shadow-sm hover:shadow-lg transition">
          <div class="text-red-600 text-3xl mb-4">📊</div>
          <h3 class="text-xl font-semibold mb-2">Order Management</h3>
          <p class="text-yellow-600 text-sm">
            An overview of active tickets, resolution statistics, and workload distribution across the team.
          </p>
        </div>

        <!-- Inventory Movement Tracking -->
        <div class="p-6 bg-yellow-50 rounded-xl shadow-sm hover:shadow-lg transition">
          <div class="text-yellow-500 text-3xl mb-4">📈</div>
          <h3 class="text-xl font-semibold mb-2">Inventory Movement Tracking</h3>
          <p class="text-yellow-600 text-sm">
            Performance metrics such as response time, resolution time, number of tickets resolved, or the most common
            issues.
          </p>
        </div>
      </div>

      <!-- CTA Buttons -->
      <div class="mt-12 flex justify-center space-x-4">
        <button
          class="px-6 py-3 bg-white border border-yellow-500 text-yellow-500 rounded-full font-semibold hover:bg-yellow-50 transition">
          → Start Free Trial
        </button>
        <button class="px-6 py-3 bg-yellow-600 text-white rounded-full font-semibold hover:bg-yellow-700 transition">
          → Make a Deal
        </button>
      </div>
    </section>

    <!-- Screenshot Section -->
    <section class="py-20 bg-gradient-to-b from-yellow-50 to-white px-6 md:px-20 text-center">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <div class="bg-yellow-100 py-2 px-4 text-left text-xs text-yellow-400">Portal Pengurusan Sumber Manusia CIDB</div>
          <div class="h-64 bg-yellow-200 flex items-center justify-center text-yellow-500">[ Screenshot 1 ]</div>
        </div>

        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <div class="bg-yellow-100 py-2 px-4 text-left text-xs text-yellow-400">Portal Pengurusan Sumber Manusia CIDB</div>
          <div class="h-64 bg-yellow-200 flex items-center justify-center text-yellow-500">[ Screenshot 2 ]</div>
        </div>

        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <div class="bg-yellow-100 py-2 px-4 text-left text-xs text-yellow-400">Portal Pengurusan Sumber Manusia CIDB</div>
          <div class="h-64 bg-yellow-200 flex items-center justify-center text-yellow-500">[ Screenshot 3 ]</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
  import Navbar from '@/components/navbar.vue'
</script>

<style scoped>
h1 {
  line-height: 1.2;
}
</style>
