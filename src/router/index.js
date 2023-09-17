import { createRouter, createWebHistory } from 'vue-router';
import FeedView from '@/views/FeedView.vue';
import LoginView from '@/views/LoginView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/feed',
      name: 'feed',
      component: FeedView,
      beforeEnter: (to, from, next) => {
        const isAuthenticated = localStorage.getItem('authenticated') === 'true';
        if (!isAuthenticated) {
          next('/');
        } else {
          next();
        }
      },
    },
    {
      path: '/',
      name: 'login',
      component: LoginView,
    },
  ],
});

export default router;
