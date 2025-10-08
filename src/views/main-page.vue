<template>
  <div class="min-h-screen bg-gray-50">
    <navbar />

    <!-- Hero Section -->
    <section class="bg-slate-700 px-6 sm:px-8 py-12 sm:py-16">
      <div class="max-w-7xl mx-auto text-center md:text-left">
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6">
          Our Product
        </h1>
        <p class="text-white text-sm sm:text-base max-w-4xl leading-relaxed mx-auto md:mx-0">
          Empowering businesses with innovative software solutions, we offer a comprehensive range of platforms tailored to streamline operations and enhance efficiency. From HR and payroll systems to inventory, e-commerce, and social media app solutions, we deliver cutting-edge technology to meet diverse business needs. Simplify management, improve productivity, and achieve success with our all-in-one software solutions
        </p>

        <!-- Products Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <div
            v-for="(product, index) in products"
            :key="index"
            class="bg-white rounded-lg p-6 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group hover:bg-slate-200"
            @click="goTo(product.link)"
          >
            <h3
              class="text-xl sm:text-2xl font-semibold text-gray-400 mb-3 group-hover:text-slate-700 transition-colors"
            >
              {{ product.name }}
            </h3>
            <div class="w-full h-px bg-gray-300 mb-4"></div>
            <p
              class="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition-colors"
            >
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
    desc: 'A payroll system is a digital tool that helps organizations manage employee payments and financial records.'
  },
  {
    name: 'Exa Leave',
    link: '/leave',
    desc: 'A leave system is a digital tool that helps organizations manage employee time off and absences.'
  },
  {
    name: 'Exa Attendance',
    link: '/attendance',
    desc: 'An attendance system is a digital tool that tracks when people arrive and leave a workplace or school.'
  },
  {
    name: 'Exa Claim',
    link: '/claim',
    desc: 'A claim system is a digital tool that helps people submit and track requests for compensation or support.'
  },
  {
    name: 'Exa Clinic',
    link: '/clinic',
    desc: 'A Clinic Management System is a digital tool that helps medical facilities run smoothly.'
  },
  {
    name: 'Exa Store',
    link: '/store',
    desc: 'An inventory system is a digital tool that helps businesses track and manage their product stock'
  },
  {
    name: 'Exa Pos',
    link: '/pos',
    desc: 'A Point of Sale (POS) system is a digital tool that helps businesses process sales transactions, and manage customer payments.'
  },
  {
    name: 'Exa Shop',
    link: '/shop',
    desc: 'An e-commerce system is a digital platform that helps businesses sell products and services online.'
  },
  {
    name: 'Exa Recruitment',
    link: '/recruitment',
    desc: 'A recruitment system is designed to streamline and manage the hiring process, from advertising job vacancies to selecting the best candidates.'
  },
]

function goTo(link) {
  router.push(link)
}
</script>

<style scoped>
</style>
