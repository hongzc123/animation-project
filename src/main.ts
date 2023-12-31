import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import useUserStore from './store/user'
import './assets/style/index.scss'

import "element-plus/theme-chalk/dark/css-vars.css"

const app = createApp(App)
app.use(router)
app.use(store)
app.config.globalProperties.$user = useUserStore()
app.mount('#app')
