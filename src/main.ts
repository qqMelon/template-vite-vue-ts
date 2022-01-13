import { createApp } from 'vue'
import App from '@/app/app.vue'
import { store } from '@/store'
import router from '@/router'

// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
// all global SCSS to import (...)
import '@/styles/_imports.scss';


createApp(App).use(store).use(router).mount('#app')
