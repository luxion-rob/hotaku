import { RouteRecordRaw, createWebHistory, createRouter } from 'vue-router'

const routes: Array<RouteRecordRaw> = [

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
