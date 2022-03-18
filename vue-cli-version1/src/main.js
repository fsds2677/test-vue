import { createApp } from 'vue'
import App from './App.vue'
import filters from './filters'

createApp(App).config.globalProperties.$filters = filters
createApp(App).mount('#app')
