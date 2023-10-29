// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/masters',
    component: () => import('@/views/Masters.vue'),
    children: [
      {
        path: "/company",
        component: () => import('@/views/masters/company.vue')
      }
    ]
  },
  {
    path: '/thirds',
    component: () => import('@/views/Thirds.vue'),
  },
  {
    path: '/items',
    component: () => import('@/views/Items.vue'),
  },
  {
    path: '/inventary',
    component: () => import('@/views/Inventary.vue'),
  },
  {
    path: '/config',
    component: () => import('@/views/Config.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
