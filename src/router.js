import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import contactView from './views/contact.vue'
import blogView from './views/blog.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
   {
    path: '/blog',
    name: 'blog',
    component: blogView
  },
   {
    path: '/contact',
    name: 'contact',
    component: contactView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

