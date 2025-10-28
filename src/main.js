import { createApp } from 'vue'
import './assets/css/main.css'
import App from './App.vue'
import router from './router'



// Other components
import { Icon } from '@iconify/vue'
const app = createApp(App)

app.component('Icon', Icon)

app.use(router)

// Mount app
app.mount('#app')
