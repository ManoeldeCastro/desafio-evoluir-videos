import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import FeedView from '../views/FeedView.vue'
import authMiddleware from './authMiddleware.js';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/feed',
      name: 'feed',
      component: FeedView,
      beforeEnter: authMiddleware, 
    }
  ]
})

export default router
