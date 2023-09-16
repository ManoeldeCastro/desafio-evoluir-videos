import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(router)
const isAuthenticated = localStorage.getItem('authenticated') === 'true';

app.config.globalProperties.authenticated = isAuthenticated;

if (isAuthenticated) {
  router.push('/feed');
}
app.mount('#app')