import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './assets/tailwind.css'
import './assets/custom.css'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'



const app = createApp(App)

// 3. Use Toast plugin with custom options
app.use(Toast, {
  position: 'top-center',
  timeout: 4000,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  hideProgressBar: true,
  transition: 'Vue-Toastification__bounce',
  maxToasts: 5
})

// 4. Mount app
app.mount('#app')