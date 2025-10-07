<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navbar -->
    <nav class="bg-white px-8 py-4">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center gap-2">
          <div class="w-10 h-10 bg-red-600 rounded flex items-center justify-center">
            <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 4h7l2 2h7v2h-7l-2-2H4V4z"/>
              <path d="M4 8h16v12H4V8z"/>
            </svg>
          </div>
          <span class="text-xl font-bold text-red-600">exa software</span>
        </div>

        <!-- Navigation Links -->
        <div class="flex items-center gap-8">
          <a href="#" class="text-gray-700 hover:text-gray-900">Home</a>
          <a href="#" class="text-gray-700 hover:text-gray-900">Discover</a>
          <a href="#" class="text-gray-700 hover:text-gray-900">Portfolio</a>
          <a href="#" class="text-gray-700 hover:text-gray-900">Service</a>
          <a href="#" class="text-gray-700 hover:text-gray-900">Client</a>
          <button class="text-blue-500 hover:text-blue-600 flex items-center gap-1">
            <span>→</span>
            <span>Login</span>
          </button>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="bg-slate-700 px-8 py-16">
      <div class="max-w-7xl mx-auto">
        <h1 class="text-7xl font-light text-white mb-8">Our Product</h1>
        <p class="text-white text-sm max-w-4xl leading-relaxed">
          Empowering businesses with innovative software solutions, we offer a comprehensive range of platforms tailored to streamline operations and enhance efficiency. From HR and payroll systems to inventory, e-commerce, and social media app solutions, we deliver cutting-edge technology to meet diverse business needs. Simplify management, improve productivity, and achieve success with our all-in-one software solutions
        </p>

        <!-- Products Grid -->
        <div class="grid grid-cols-3 gap-6 mt-12">
          <div
            v-for="(product, index) in products"
            :key="index"
            class="bg-white rounded-lg p-6 hover:shadow-xl transition-shadow cursor-pointer"
            @click="goTo(product.link)"
          >
            <h3 class="text-2xl font-semibold text-gray-400 mb-3">
              {{ product.name }}
            </h3>
            <div class="w-full h-px bg-gray-300 mb-4"></div>
            <p class="text-gray-600 text-sm leading-relaxed">
              {{ product.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const products = [
  {
    name: 'Exa Helpdesk',
    link: '/helpdesk',
    desc: 'A help desk system is a digital platform that helps organizations manage customer support requests'
  },
  {
    name: 'Exa DoMS',
    link: '/doms',
    desc: 'An archive system is a digital tool that helps organizations store, organize, and preserve important documents and records.'
  },
  {
    name: 'Exa Social',
    link: '/social',
    desc: 'A social media system is an online platform that lets people create personal profiles and connect with others digitally.'
  },
  {
    name: 'Exa TrainingMS',
    link: '/trainingms',
    desc: 'A Training Management System (TMS) is a digital platform that simplifies how organizations handle their training programs from start to finish.'
  },
  {
    name: 'Exa Apply',
    link: '/apply',
    desc: 'An appointment system is a digital tool that helps people book and manage scheduled meetings or services.'
  },
  {
    name: 'Exa Appoinment',
    link: '/appointment',
    desc: 'An appointment system is a digital tool that helps people book and manage scheduled meetings or services.'
  },
  {
    name: 'Exa Payroll',
    link: '/payroll',
    desc: 'A payroll system is a digital tool that helps'
  },
  {
    name: 'Exa Leave',
    link: '/leave',
    desc: 'A leave system is a digital tool that helps'
  },
  {
    name: 'Exa Attendance',
    link: '/attendance',
    desc: 'An attendance system is a digital tool that tracks'
  },
]

function goTo(link) {
  router.push(link)
}
</script>

<style scoped>
</style>
