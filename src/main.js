import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'https://task-2-fastapi.onrender.com/'  // FastAPI backend

createApp(App).use(store).use(router).mount('#app')
