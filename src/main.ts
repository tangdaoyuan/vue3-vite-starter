import type { Plugin } from 'vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia() as Plugin)
app.use(router as Plugin)

app.mount('#app')
