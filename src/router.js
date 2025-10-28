import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import FetchCategories from './components/Homepage/FetchCategories.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/categories',
    name: 'categories',
    component: FetchCategories
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

