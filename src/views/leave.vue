<template>
  <div class="min-h-screen bg-gradient-to-b from-white to-blue-50">
     <navbar />

    <!-- Hero Section -->
    <section class="text-center py-20 px-4 relative overflow-hidden">
      <h1 class="text-6xl md:text-7xl font-bold text-blue-600 mb-6">Exa Leave</h1>
      <p class="max-w-4xl mx-auto text-gray-600 leading-relaxed text-lg">
        Exa Leave Management System (Exa Leave) is a tool that simplifies the process of managing employee leave requests, approvals, balances, and policies.
        It ensures transparency, compliance with company policies, and efficiency in tracking leave data while reducing manual paperwork.
      </p>
    </section>

    <!-- Core Modules -->
    <section class="py-16 bg-white px-6 md:px-20 text-center">
      <h2 class="text-4xl font-bold text-blue-600 mb-12">Core Modules</h2>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Employee Profile Management -->
        <div class="p-6 bg-blue-50 rounded-xl shadow-sm hover:shadow-lg transition">
          <div class="text-green-600 text-3xl mb-4">🎫</div>
          <h3 class="text-xl font-semibold mb-2">Employee Profile Management</h3>
          <p class="text-gray-600 text-sm">
            Maintain employee details such as job role, department, and leave eligibility.
            Track leave balances and history.
            Set custom leave policies based on employee categories (e.g., full-time, part-time, contractors).
          </p>
        </div>

        <!-- Leave Application -->
        <div class="p-6 bg-blue-50 rounded-xl shadow-sm hover:shadow-lg transition">
          <div class="text-yellow-500 text-3xl mb-4">📈</div>
          <h3 class="text-xl font-semibold mb-2">Leave Application</h3>
          <p class="text-gray-600 text-sm">
            Allow employees to apply for different types of leave (e.g., annual, sick, maternity, casual).
            Attach documents for specific leave types (e.g., medical certificates for sick leave).
            Check leave balances before applying.
          </p>
        </div>

        <!-- Leave Approval Workflow -->
        <div class="p-6 bg-blue-50 rounded-xl shadow-sm hover:shadow-lg transition">
          <div class="text-blue-600 text-3xl mb-4">🔔</div>
          <h3 class="text-xl font-semibold mb-2">Leave Approval Workflow</h3>
          <p class="text-gray-600 text-sm">
            Multi-level approval processes (e.g., manager → HR → admin).
            Notifications for pending requests, approvals, or rejections.
            Customizable workflows for specific departments or roles.
          </p>
        </div>

        <!-- Dashboard -->
        <div class="p-6 bg-blue-50 rounded-xl shadow-sm hover:shadow-lg transition">
          <div class="text-red-600 text-3xl mb-4">📊</div>
          <h3 class="text-xl font-semibold mb-2">Leave Balance and Entitlement Tracking</h3>
          <p class="text-gray-600 text-sm">
            Real-time leave balance updates for employees.
            Pro-rate leave entitlements based on joining date or employment terms.
            Carry-forward policies for unused leave.
          </p>
        </div>


      </div>

      <!-- CTA Buttons -->
      <div class="mt-12 flex justify-center space-x-4">
        <button
          class="px-6 py-3 bg-white border border-blue-500 text-blue-500 rounded-full font-semibold hover:bg-blue-50 transition">
          → Start Free Trial
        </button>
        <button class="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition">
          → Make a Deal
        </button>
      </div>
    </section>

    <!-- Screenshot Section -->
    <section class="py-20 bg-gradient-to-b from-blue-50 to-white px-6 md:px-20 text-center">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <div class="bg-gray-100 py-2 px-4 text-left text-xs text-gray-400">Portal Pengurusan Sumber Manusia CIDB</div>
          <div class="h-64 bg-gray-200 flex items-center justify-center text-gray-500">[ Screenshot 1 ]</div>
        </div>

        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <div class="bg-gray-100 py-2 px-4 text-left text-xs text-gray-400">Portal Pengurusan Sumber Manusia CIDB</div>
          <div class="h-64 bg-gray-200 flex items-center justify-center text-gray-500">[ Screenshot 2 ]</div>
        </div>

        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <div class="bg-gray-100 py-2 px-4 text-left text-xs text-gray-400">Portal Pengurusan Sumber Manusia CIDB</div>
          <div class="h-64 bg-gray-200 flex items-center justify-center text-gray-500">[ Screenshot 3 ]</div>
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
