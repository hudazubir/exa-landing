<template>
  <div class="min-h-screen bg-gradient-to-b from-white to-blue-50">
    <navbar />

    <section class="text-center py-20 px-4 relative overflow-hidden">
      <h1 class="text-6xl md:text-7xl font-bold text-green-600 mb-6">Exa Claim</h1>
      <p class="max-w-4xl mx-auto text-gray-600 leading-relaxed text-lg">
        Exa Claim System (Exa Claim) is a software solution used to manage, track, and process claims in various industries, such as insurance, healthcare, employee benefits, and more. The system streamlines the entire claims process, from
        submission and approval to settlement and reporting, ensuring accuracy, efficiency, and transparency.
      </p>
    </section>
    <!--begin::core modules-->
    <section class="text-center py-16 bg-white px-6 md:px-20">
      <h2 class="text-green-500 font-bold text-4xl mb-12">Core Modules</h2>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!--begin::user profiles-->
        <div class="p-6 bg-green-50 rounded-xl shadow-sm hover:shadow-lg transition">
          <div class="text-3xl mb-4"><i class="bi bi-people text-4xl text-green-800"></i></div>
          <h3 class="text-xl font-semibold mb-2">Claim Submission</h3>
          <p class="text-gray-600 text-sm">
            Online Forms: Allow claimants to submit claims via web forms or mobile apps.
Document Upload: Enable users to attach necessary documents, such as receipts, medical reports, or policy information.
          </p>
        </div>
        <!--end::Claim Submission-->

        <!--begin::Claim Review and Approval-->
        <div class="p-6 bg-green-50 rounded-xl shadow-sm hover:shadow-lg transition">
          <div class="text-3xl mb-4"><i class="bi bi-collection-play-fill text-4xl text-green-800"></i></div>
            <h3 class="text-xl font-semibold mb-2">Claim Review and Approval</h3>
            <p class="text-gray-600 text-sm">
              PAutomated Review: Automatically validate claim details (e.g., claim amount, eligibility).
              Manual Review: Claims can be escalated for manual review by claims adjusters or managers.
              Approval Workflow: Multi-level approval for claim validation and authorization.
              Notifications: Notify claimants about the status of their claims (e.g., received, under review, approved, or denied).
            </p>
        </div>
        <!--end::Claim Review and Approval-->

        <!--begin::Claim Status Tracking-->
        <div class="p-6 bg-green-50 rounded-xl shadow-sm hover:shadow-lg transition">
          <div class="text-3xl mb-4"><i class="bi bi-chat-dots text-4xl text-green-800"></i></div>
            <h3 class="text-xl font-semibold mb-2">Claim Status Tracking</h3>
            <p class="text-gray-600 text-sm">
            Real-Time Updates: Allow claimants to track the status of their claims in real-time.
            Audit Trail: Maintain a comprehensive log of all actions taken on a claim for audit and transparency.
            Notifications: Alert claimants and relevant parties about key milestones in the claims process (e.g., claim approval, payment).</p>
        </div>
        <!--end::Claim Status Tracking-->

        <!--begin::notification-->
        <div class="p-6 bg-green-50 rounded-xl shadow-sm hover:shadow-lg transition">
          <div class="text-3xl mb-4"><i class="bi bi-bell text-4xl text-green-800"></i></div>
            <h3 class="text-xl font-semibold mb-2">Claims History and Analytics</h3>
            <p class="text-gray-600 text-sm">
              History Access: Keep a record of past claims and their outcomes.
              Reporting: Generate claims reports for analysis, audits, and compliance purposes.
              Analytics: Track trends in claims data (e.g., frequency, amounts, approval rates) for decision-making.
            </p>
        </div>
        <!--end::Claims History and Analytics-->
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
