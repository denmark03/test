import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Contact from '../views/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/about/:id',
      name: 'contact',
      component: Contact,
      props: true
    },
    {
    path: '/more',
    name: 'more',
    component: () => import('../views/More.vue')
    },  {
      path: '/more/:id',
      name: 'Moreabout',
      component: () => import('../views/MoreAbout.vue'),
      props: true
      },
      {
      path: '/main-container',
      name: 'main-container',
      component: () => import('../views/Anime.vue')
      }
      
  ]
})

export default router
