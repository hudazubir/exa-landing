<template>
  <div class="min-h-screen bg-gray-50">
    <navbar />

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
            @click="goTo(product.link)" >
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
import navbar from '@/components/navbar.vue'
import logo from '@/assets/logo.png'
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
