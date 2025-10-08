<template>
  <div class="min-h-screen bg-gray-50">
    <navbar />

    <!--begin::Hero Section-->
    <section class="text-center py-20 px-4 relative overflow-hidden">
      <h1 class="text-6xl md:text-7xl font-bold text-red-500 mb-6">Exa DoMS</h1>
      <p class="max-w-4xl mx-auto text-gray-600 leading-relaxed text-lg">
        Exa Document Management System (Exa DoMS) is a software designed to organize, store manage, and track digital documents
        and paper-based information captured digitally. It helps organizations streamlines workflows,
        improve accessibility, ensure security, and maintain compliance with regulations.
      </p>
    </section>
    <!--end::Hero Section-->

    <!--begin::core module-->
    <section class="py-16 bg-white px-6 md:px-20 text-center">
      <h2 class="text-4xl font-bold mb-12 text-red-400" style="color: red;">Core Modules</h2>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Document Storage & Organization -->
        <div class="p-6 bg-blue-50 rounded-xl shadow-sm hover:shadow-lg transition">
          <div class="text-green-600 text-3xl mb-4">🎫</div>
          <h3 class="text-xl font-semibold mb-2">Document Storage & Organization</h3>
          <p class="text-gray-600 text-sm">
            Centralized repository for storing digital documents. Support for organizingfiles into folders, categories,
            or tags. Metadata tagging for easier search and categorization
          </p>
        </div>

        <!-- Notification System -->
        <div class="p-6 bg-blue-50 rounded-xl shadow-sm hover:shadow-lg transition">
          <div class="text-blue-600 text-3xl mb-4">🔔</div>
          <h3 class="text-xl font-semibold mb-2">Document Retrievel</h3>
          <p class="text-gray-600 text-sm">
            Advanced search capabilities using metadata, file content, or filters. Quick preview of docements
            without downloading them.
          </p>
        </div>

        <!-- Dashboard -->
        <div class="p-6 bg-blue-50 rounded-xl shadow-sm hover:shadow-lg transition">
          <div class="text-red-600 text-3xl mb-4">📊</div>
          <h3 class="text-xl font-semibold mb-2">Access Control</h3>
          <p class="text-gray-600 text-sm">
            Role-based permissions to ensure sensitive documents are only accessible to authorized personnel.
            Audit trails to track who accessed or modified a document.
          </p>
        </div>

        <!-- Version Contro -->
        <div class="p-6 bg-blue-50 rounded-xl shadow-sm hover:shadow-lg transition">
          <div class="text-yellow-500 text-3xl mb-4">📈</div>
          <h3 class="text-xl font-semibold mb-2">Version Control</h3>
          <p class="text-gray-600 text-sm">
            Maintain multiple versions of a document with clear version history. Ability to restore previous versions if needed.
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
    <!--end::core module-->

    <!--begin::image of Exa DoMS-->
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
    <!--end::image of Exa DoMS-->
  </div>
</template>

<script setup>
  import Navbar from '@/components/navbar.vue'
</script>
