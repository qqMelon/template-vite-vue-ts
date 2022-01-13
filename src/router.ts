import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: { name: 'home' }
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/about/about.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
