import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import { key, store } from './store'

const app = createApp(App)

app.use(router)
app.use(store, key)

app.mount('#app')
