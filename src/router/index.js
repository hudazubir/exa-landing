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
import Claim from '../views/claim.vue'
import Clinic from '../views/clinic.vue'
import Store from '../views/store.vue'
import Pos from '../views/pos.vue'
import Shop from '../views/shop.vue'
import Recruitment from '../views/recruitment.vue'

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
    { path: '/claim', name: 'claim', component: Claim },
    { path: '/clinic', name: 'clinic', component: Clinic },
    { path: '/store', name: 'store', component: Store },
    { path: '/pos', name: 'pos', component: Pos },
    { path: '/shop', name: 'shop', component: Shop },
    { path: '/recruitment', name: 'recruitment', component: Recruitment },
  ],
})

export default router
