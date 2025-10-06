import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

app.mixin({
  mounted() {
    AOS.init({
      duration: 1500,
      easing: 'ease-in-out',
    })
  },
  updated() {
    AOS.refresh()
  }
})

app.mount('#app')