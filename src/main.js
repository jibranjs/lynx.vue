import { createApp } from 'vue'
import './assets/css/main.css'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura';
// Other components
import { Icon } from '@iconify/vue'
const app = createApp(App)

app.component('Icon', Icon)

app.use(router)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
// app.component(Carousel)

// Mount app
app.mount('#app')
