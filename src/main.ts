import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
//import '@meforma/vue-toaster'
import Toaster from '@meforma/vue-toaster';

createApp(App).use(router).use(Toaster).mount('#app')
