import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/template',
      name: 'template',
      component: () => import('../views/TemplateView.vue')
    },
    {
      path: '/reactivity',
      name: 'reactivity',
      component: () => import('../views/ReactivityView.vue')
    },
    {
      path: '/computed',
      name: 'computed',
      component: () => import('../views/ComputedView.vue')
    },
    {
      path: '/binding',
      name: 'binding',
      component: () => import('../views/BindingView.vue')
    },
    {
      path: '/conditional',
      name: 'conditional',
      component: () => import('../views/CrView.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('../views/ListView.vue')
    },
    {
      path: '/event',
      name: 'event',
      component: () => import('../views/EventView.vue')
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('../views/FormView.vue')
    },
    {
      path: '/life',
      name: 'life',
      component: () => import('../views/LifeView.vue')
    },
    {
      path: '/watchers',
      name: 'watchers',
      component: () => import('../views/WatchersView.vue')
    },
    {
      path: '/refs',
      name: 'refs',
      component: () => import('../views/RefsView.vue')
    },
    {
      path: '/comp',
      name: 'comp',
      component: () => import('../views/CompView.vue')
    },
  ]
})

export default router
