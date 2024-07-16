// 引入全局样式
import './assets/main.css'
// 引入路由和网络请求器
import {axios, router} from './plugin'

import { createApp } from 'vue'
import App from './App.vue'

// 创建 Vue 实例
const app = createApp(App)

// 配置 Vue app
app.use(router)
app.config.globalProperties.$axios = axios

// 挂载 Vue
app.mount('#app')
