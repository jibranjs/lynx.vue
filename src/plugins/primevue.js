import PrimeVue from 'primevue/config'

// Import only the components you want globally
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Dialog from 'primevue/dialog'
import Card from 'primevue/card'

export default {
  install(app) {
    // Initialize PrimeVue without any theme
    app.use(PrimeVue)

    // Register components globally
    app.component('Button', Button)
    app.component('InputText', InputText)
    app.component('Dialog', Dialog)
    app.component('Card', Card)
  }
}
