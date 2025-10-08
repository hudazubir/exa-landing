<template>
  <div class="min-h-screen bg-gradient-to-b from-white to-red-50">
     <navbar />

    <!-- Hero Section -->
    <section class="text-center py-20 px-4 relative overflow-hidden">
      <h1 class="text-6xl md:text-7xl font-bold text-red-600 mb-6">Exa Attendance</h1>
      <p class="max-w-4xl mx-auto text-gray-600 leading-relaxed text-lg">
        Exa Attendance System (Exa Attendance) is a solution designed to track and manage employee, student, or participant attendance in an organized and automated manner. It streamlines processes
        like recording presence, monitoring absences, and generating reports, reducing administrative overhead and ensuring accurate data.
      </p>
    </section>

    <!-- Core Modules -->
    <section class="py-16 bg-white px-6 md:px-20 text-center">
      <h2 class="text-4xl font-bold text-red-600 mb-12">Core Modules</h2>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Attendance Recording -->
        <div class="p-6 bg-red-50 rounded-xl shadow-sm hover:shadow-lg transition">
          <div class="text-green-600 text-3xl mb-4">🎫</div>
          <h3 class="text-xl font-semibold mb-2">Attendance Recording</h3>
          <p class="text-gray-600 text-sm">
            Manual Input: Admins or managers can log attendance.
            Automated Capture: Use biometric devices, RFID cards, QR codes, or mobile apps to record attendance.
            Geolocation: For remote employees, capture attendance with GPS tracking.
          </p>
        </div>

        <!-- Time Tracking -->
        <div class="p-6 bg-red-50 rounded-xl shadow-sm hover:shadow-lg transition">
          <div class="text-red-600 text-3xl mb-4">🔔</div>
          <h3 class="text-xl font-semibold mb-2">Time Tracking</h3>
          <p class="text-gray-600 text-sm">
            Record check-in and check-out times.
            Track total hours worked, overtime, and breaks.
            Monitor late arrivals and early departures.
          </p>
        </div>

        <!-- Leave Integration -->
        <div class="p-6 bg-red-50 rounded-xl shadow-sm hover:shadow-lg transition">
          <div class="text-red-600 text-3xl mb-4">📊</div>
          <h3 class="text-xl font-semibold mb-2">Leave Integration</h3>
          <p class="text-gray-600 text-sm">
            Sync leave requests with attendance records.
            Mark approved leaves as excused absences.
            Track unapproved or unauthorized absences.
          </p>
        </div>

        <!-- Notifications and Alerts -->
        <div class="p-6 bg-red-50 rounded-xl shadow-sm hover:shadow-lg transition">
          <div class="text-yellow-500 text-3xl mb-4">📈</div>
          <h3 class="text-xl font-semibold mb-2">Notifications and Alerts</h3>
          <p class="text-gray-600 text-sm">
            Notify employees about attendance irregularities.
            Alert managers for missed check-ins or unapproved absences.
          </p>
        </div>
      </div>

      <!-- CTA Buttons -->
      <div class="mt-12 flex justify-center space-x-4">
        <button
          class="px-6 py-3 bg-white border border-red-500 text-red-500 rounded-full font-semibold hover:bg-red-50 transition">
          → Start Free Trial
        </button>
        <button class="px-6 py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition">
          → Make a Deal
        </button>
      </div>
    </section>

    <!-- Screenshot Section -->
    <section class="py-20 bg-gradient-to-b from-red-50 to-white px-6 md:px-20 text-center">
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
