import { createApp } from 'vue'
import App from '@/app/app.vue'
<<<<<<< HEAD
import { store } from '@/store'
=======
import router from '@/router'

>>>>>>> core-router
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
// all global SCSS to import (...)
import '@/styles/_imports.scss';


<<<<<<< HEAD
createApp(App).use(store).mount('#app')
=======
createApp(App).use(router).mount('#app')
>>>>>>> core-router
