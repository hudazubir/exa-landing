<template>
<div class="min-h-screen bg-gradient-to-r from-green-200 via-green-50 to-white">
    <navbar />

    <section class="text-center py-20 px-4 relative overflow-hidden">
      <h1 class="text-6xl md:text-7xl font-bold text-green-600 mb-6">Exa Social</h1>
      <p class="max-w-4xl mx-auto text-gray-600 leading-relaxed text-lg">
        Exa Social Media App System (Exa Social) is designed to facilitate communication, content sharing, and interaction amoung users.
        It typically involves a combination of features for networking, media sharing, and community engagement.
        Below is an over view of its key components, features, and development considerations.
      </p>
    </section>
    <!--begin::core modules-->
    <section class="text-center py-16 px-6 md:px-20">
      <h2 class="text-green-500 font-bold text-4xl mb-12">Core Modules</h2>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!--begin::user profiles-->
        <div class="p-6 bg-green-50 rounded-xl shadow-sm hover:shadow-lg transition">
          <div class="text-3xl mb-4"><i class="bi bi-person-fill text-4xl text-green-800"></i></div>
          <h3 class="text-xl font-semibold mb-2">User Profiles</h3>
          <p class="text-gray-600 text-sm">
            Personalized user profiles with display pictures, bios, and activity timelines. Ability to customize privacy
            setting (public/private profile)
          </p>
        </div>
        <!--end::user profiles-->

        <!--begin::content sharing-->
        <div class="p-6 bg-green-50 rounded-xl shadow-sm hover:shadow-lg transition">
          <div class="text-3xl mb-4"><i class="bi bi-collection-play-fill text-4xl text-green-800"></i></div>
            <h3 class="text-xl font-semibold mb-2">Content Sharing</h3>
            <p class="text-gray-600 text-sm">
              Posts: Text, images, videos, or links
            </p>
        </div>
        <!--end::content sharing-->

        <!--begin::interaction features-->
        <div class="p-6 bg-green-50 rounded-xl shadow-sm hover:shadow-lg transition">
          <div class="text-3xl mb-4"><i class="bi bi-chat-dots-fill text-4xl text-green-800"></i></div>
            <h3 class="text-xl font-semibold mb-2">Interaction Features</h3>
            <p class="text-gray-600 text-sm">Likes, Comments and Shares: Engage with posts and boost visibility.
            Reactions/Emojis: Express emotions or opinions on posts.
            Direct Messaging (DM): Private one-to-one or group conversations.</p>
        </div>
        <!--end::interaction features-->

        <!--begin::notification-->
        <div class="p-6 bg-green-50 rounded-xl shadow-sm hover:shadow-lg transition">
          <div class="text-3xl mb-4"><i class="bi bi-bell-fill text-4xl text-yellow-500"></i></div>
            <h3 class="text-xl font-semibold mb-2">Notification</h3>
            <p class="text-gray-600 text-sm">Alerts for likes, comments, followers, messages, and tagged posts. Customizable notification settings for each type of alert.</p>
        </div>
        <!--end::notification-->
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
    <section class="py-20 bg-gradient-to-b from-green-50 to-white px-6 md:px-20 text-center">
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
