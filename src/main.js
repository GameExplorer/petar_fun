import { createApp } from 'vue'
import '@/style.css'
import App from '@/App.vue'
import router from '@/plugins/router.js'

import { inject } from '@vercel/analytics';

inject();

createApp(App).use(router).mount('#app')
