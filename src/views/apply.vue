<template>
  <div class="min-h-screen bg-gradient-to-b from-white to-yellow-50">
     <navbar />

    <!-- Hero Section -->
    <section class="text-center py-20 px-4 relative overflow-hidden">
      <h1 class="text-6xl md:text-7xl font-bold text-yellow-600 mb-6">Exa Apply</h1>
      <p class="max-w-4xl mx-auto text-gray-600 leading-relaxed text-lg">
        Exa Application Management System (Exa Apply) is a software solution designed to handle, track, and manage various types
        of applications, such as job applications, program admissions, project submissions, or service requests. It streamlines the submission,
        review, approval, and tracking processes, providing a centralized platform for managing applications efficiently.
      </p>
    </section>

    <!-- Core Modules -->
    <section class="py-16 bg-white px-6 md:px-20 text-center">
      <h2 class="text-4xl font-bold text-yellow-600 mb-12">Core Modules</h2>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- -->
        <div class="p-6 bg-yellow-50 rounded-xl shadow-sm hover:shadow-lg transition">
          <div class="text-green-600 text-3xl mb-4">🎫</div>
          <h3 class="text-xl font-semibold mb-2">User Registration and Authentication</h3>
          <p class="text-gray-600 text-sm">
            Secure login and registration for applicants and administrators.
            Role-based access control for applicants, reviewers, and admins.
          </p>
        </div>

        <!-- Notification System -->
        <div class="p-6 bg-yellow-50 rounded-xl shadow-sm hover:shadow-lg transition">
          <div class="text-yellow-600 text-3xl mb-4">🔔</div>
          <h3 class="text-xl font-semibold mb-2">Application Form Creation</h3>
          <p class="text-gray-600 text-sm">
            Customizable forms with fields for text, dropdowns, checkboxes, etc.
            Conditional logic to show/hide fields based on user input.
            File upload capabilities for supporting documents (e.g., resumes, certificates).
          </p>
        </div>

        <!-- Dashboard -->
        <div class="p-6 bg-yellow-50 rounded-xl shadow-sm hover:shadow-lg transition">
          <div class="text-red-600 text-3xl mb-4">📊</div>
          <h3 class="text-xl font-semibold mb-2">Application Submission</h3>
          <p class="text-gray-600 text-sm">
            User-friendly interface for submitting applications.
            Draft saving options for incomplete applications.
            Real-time validation to ensure required fields are filled out.
          </p>
        </div>

        <!-- Report & Analytics -->
        <div class="p-6 bg-yellow-50 rounded-xl shadow-sm hover:shadow-lg transition">
          <div class="text-yellow-500 text-3xl mb-4">📈</div>
          <h3 class="text-xl font-semibold mb-2">Application Tracking</h3>
          <p class="text-gray-600 text-sm">
            Status updates (e.g., Pending, Under Review, Approved, Rejected).
            Notifications (email or SMS) for status changes or required actions.
            Dashboard for users to view their application history.
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
