import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ant from './utils/antd'
import 'ant-design-vue/dist/antd.css'

createApp(App).use(store).use(router).use(ant).mount('#app')
