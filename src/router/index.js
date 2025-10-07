import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/main-page.vue'
import Helpdesk from '../views/helpdesk.vue'
import DoMS from '../views/DoMS.vue'
import Social from '../views/Social.vue'
import TrainingMS from '../views/training-ms.vue'
import Apply from '../views/apply.vue'
import Appointment from '../views/appointment.vue'
import Payroll from '../views/payroll.vue'
import Leave from '../views/leave.vue'
import Attendance from '../views/attendance.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'main-page', component: MainPage },
    { path: '/helpdesk', name: 'Helpdesk', component: Helpdesk },
    { path: '/doms', name: 'DoMS', component: DoMS },
    { path: '/social', name: 'Social', component: Social },
    { path: '/trainingms', name: 'training-ms', component: TrainingMS },
    { path: '/apply', name: 'apply', component: Apply },
    { path: '/appointment', name: 'appointment', component: Appointment },
    { path: '/payroll', name: 'payroll', component: Payroll },
    { path: '/leave', name: 'leave', component: Leave },
    { path: '/attendance', name: 'attendance', component: Attendance },
  ],
})

export default router
