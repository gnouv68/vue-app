import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Performance_Marketing from '@/views/Performance_Marketing'
import Services from '@/components/Services'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/performance-marketing',
    name: 'performance-marketing',
    component: Performance_Marketing
  },
  {
    path: '/services',
    name: 'services',
    component: Services
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
