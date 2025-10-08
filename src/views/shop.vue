<template>
  <div class="min-h-screen bg-gradient-to-b from-white to-teal-50">
     <navbar />

    <!-- Hero Section -->
    <section class="text-center py-20 px-4 relative overflow-hidden">
      <h1 class="text-6xl md:text-7xl font-bold text-teal-600 mb-6">Exa Shop</h1>
      <p class="max-w-4xl mx-auto text-teal-600 leading-relaxed text-lg">
        Exa E-commerce System (Exa Shop) is an online platform or solution that allows businesses to buy and sell goods or services via the internet. E-commerce systems involve the integration of various components, such as product management, order processing,
        payment gateways, inventory management, and customer support. They are crucial for businesses in various industries to reach global audiences and streamline operations.
      </p>
    </section>

    <!-- Core Modules -->
    <section class="py-16 bg-white px-6 md:px-20 text-center">
      <h2 class="text-4xl font-bold text-teal-600 text-t mb-12">Core Modules</h2>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Ticket Management -->
        <div class="p-6 bg-teal-50 rounded-xl shadow-sm hover:shadow-lg transition">
          <div class="text-green-600 text-3xl mb-4">🎫</div>
          <h3 class="text-xl font-semibold mb-2">Ticket Management</h3>
          <p class="text-teal-600 text-sm">
            Users can report issues or make requests. Each issue is generated as a ticket with a unique ID. Tickets can be
            categorized by priority, type of issue, or department.
          </p>
        </div>

        <!-- Notification System -->
        <div class="p-6 bg-teal-50 rounded-xl shadow-sm hover:shadow-lg transition">
          <div class="text-teal-600 text-3xl mb-4">🔔</div>
          <h3 class="text-xl font-semibold mb-2">Notification System</h3>
          <p class="text-teal-600 text-sm">
            Automated notifications to users and support teams about ticket status (e.g., open, in progress, resolved, or
            closed).
          </p>
        </div>

        <!-- Dashboard -->
        <div class="p-6 bg-teal-50 rounded-xl shadow-sm hover:shadow-lg transition">
          <div class="text-red-600 text-3xl mb-4">📊</div>
          <h3 class="text-xl font-semibold mb-2">Dashboard</h3>
          <p class="text-teal-600 text-sm">
            An overview of active tickets, resolution statistics, and workload distribution across the team.
          </p>
        </div>

        <!-- Report & Analytics -->
        <div class="p-6 bg-teal-50 rounded-xl shadow-sm hover:shadow-lg transition">
          <div class="text-yellow-500 text-3xl mb-4">📈</div>
          <h3 class="text-xl font-semibold mb-2">Report & Analytics</h3>
          <p class="text-teal-600 text-sm">
            Performance metrics such as response time, resolution time, number of tickets resolved, or the most common
            issues.
          </p>
        </div>
      </div>

      <!-- CTA Buttons -->
      <div class="mt-12 flex justify-center space-x-4">
        <button
          class="px-6 py-3 bg-white border border-teal-500 text-teal-500 rounded-full font-semibold hover:bg-teal-50 transition">
          → Start Free Trial
        </button>
        <button class="px-6 py-3 bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-700 transition">
          → Make a Deal
        </button>
      </div>
    </section>

    <!-- Screenshot Section -->
    <section class="py-20 bg-gradient-to-b from-teal-50 to-white px-6 md:px-20 text-center">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <div class="bg-teal-100 py-2 px-4 text-left text-xs text-teal-400">Portal Pengurusan Sumber Manusia CIDB</div>
          <div class="h-64 bg-teal-200 flex items-center justify-center text-teal-500">[ Screenshot 1 ]</div>
        </div>

        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <div class="bg-teal-100 py-2 px-4 text-left text-xs text-teal-400">Portal Pengurusan Sumber Manusia CIDB</div>
          <div class="h-64 bg-teal-200 flex items-center justify-center text-teal-500">[ Screenshot 2 ]</div>
        </div>

        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <div class="bg-teal-100 py-2 px-4 text-left text-xs text-teal-400">Portal Pengurusan Sumber Manusia CIDB</div>
          <div class="h-64 bg-teal-200 flex items-center justify-center text-teal-500">[ Screenshot 3 ]</div>
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
