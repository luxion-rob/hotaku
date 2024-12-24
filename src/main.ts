import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import router from '@/router'
import App from '@/App.vue'

const app = createApp(App)

app.use(router)
app.use(PrimeVue)
router.isReady().then(() => app.mount('#app'))
