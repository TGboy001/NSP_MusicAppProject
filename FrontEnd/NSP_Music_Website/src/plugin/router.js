/**
 * Vue Router路由文件
 */

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('')
    }
    // {
    //   path: '/editor',
    //   name: 'editor',
    //   component: () => import('../views/textEditor/textEditor.vue')
    // }
  ]
})

export default router
