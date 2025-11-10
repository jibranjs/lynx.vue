import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import BusinessView from '../src/views/BusinessView.vue'
import ServicesView from './views/ServicesView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/business',
    name: 'business',
    component: BusinessView
  },
    {
    path: '/services',
    name: 'services',
    component: ServicesView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

