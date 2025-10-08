<template>
  <div class="min-h-screen bg-gradient-to-b from-white to-blue-50">
    <navbar />

    <section class="text-center py-20 px-4 relative overflow-hidden">
      <h1 class="text-6xl md:text-7xl font-bold text-purple-600 mb-6">Exa Clinic</h1>
      <p class="max-w-4xl mx-auto text-gray-600 leading-relaxed text-lg">
        Exa Clinic Registration System (Exa Clinic) is a digital platform that automates the registration and appointment booking process for patients visiting a clinic. It enhances the overall patient experience
        by streamlining the patient intake process, reducing waiting times, and improving clinic operations.
      </p>
    </section>
    <!--begin::core modules-->
    <section class="text-center py-16 bg-white px-6 md:px-20">
      <h2 class="text-purple-500 font-bold text-4xl mb-12">Core Modules</h2>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!--begin::Patient Registration-->
        <div class="p-6 bg-purple-50 rounded-xl shadow-sm hover:shadow-lg transition">
          <div class="text-3xl mb-4"><i class="bi bi-people text-4xl text-purple-800"></i></div>
          <h3 class="text-xl font-semibold mb-2">Patient Registration</h3>
          <p class="text-gray-600 text-sm">
            Create, organize, and update training courses. Manage course details such as objectivees, content, duration, and prerequisites.
            Assign instructor to courses.
          </p>
        </div>
        <!--end::Patient Registration-->

        <!--begin::Appointment Scheduling-->
        <div class="p-6 bg-purple-50 rounded-xl shadow-sm hover:shadow-lg transition">
          <div class="text-3xl mb-4"><i class="bi bi-collection-play-fill text-4xl text-purple-800"></i></div>
            <h3 class="text-xl font-semibold mb-2">Appointment Scheduling</h3>
            <p class="text-gray-600 text-sm">
              Schedule training sessions (online or in-person). Allow employees or learnes to self-register for courses. Set capacity limits and manage waiting lists.
            </p>
        </div>
        <!--end::Appointment Scheduling-->

        <!--begin::Queue Management-->
        <div class="p-6 bg-purple-50 rounded-xl shadow-sm hover:shadow-lg transition">
          <div class="text-3xl mb-4"><i class="bi bi-chat-dots text-4xl text-purple-800"></i></div>
            <h3 class="text-xl font-semibold mb-2">Queue Management</h3>
            <p class="text-gray-600 text-sm">
              Maintain learner profiles with personal information, training history, and progress. Track certifications and renewal dates.
            </p>
        </div>
        <!--end::Queue Management-->

        <!--begin::Patient Profile Management-->
        <div class="p-6 bg-purple-50 rounded-xl shadow-sm hover:shadow-lg transition">
          <div class="text-3xl mb-4"><i class="bi bi-bell text-4xl text-purple-800"></i></div>
            <h3 class="text-xl font-semibold mb-2">Patient Profile Management</h3>
            <p class="text-gray-600 text-sm">
              Create quizzes, tests, or assignments to evaluate learning outcomes. Issue certificates upon course completion.
              Track certifications and notify learners about expirations or renewals.
            </p>
        </div>
        <!--end::Patient Profile Management-->
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
    <!--end::core modules-->
  </div>
</template>

<script setup>
  import Navbar from '@/components/navbar.vue'
</script>
