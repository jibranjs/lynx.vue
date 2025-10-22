import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import businessView from './views/business.vue'
import serviceView from './views/services.vue'
import helpView from './views/help.vue'
import AboutView from './views/AboutView.vue'
import bookonlineView from './views/bookonline.vue'
import callView from './views/call.vue'
import joinusView from './views/joinus.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/business',
    name:'business',
    component: businessView
  },
  {
    path:'/services',
    name:'services',
    component: serviceView
  },
    {
    path:'/help',
    name:'help',
    component: helpView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
   {
    path: '/bookonline',
    name: 'bookonline',
    component: bookonlineView
  },
     {
    path: '/call',
    name: 'call',
    component: callView
  },
       {
    path: '/joinus',
    name: 'joinus',
    component: joinusView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

