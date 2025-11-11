import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import SingleCategory from './components/Homepage/SingleCategory.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/category',
    name: 'category',
    component: SingleCategory
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

