import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MapView from '../views/MapView.vue'
import ListView from '../views/ListView.vue'
import ReportView from '../views/ReportView.vue'
import LinkageView from '../views/LinkageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/report',
      name: 'report',
      component: ReportView
    },
    {
      path: '/linkage',
      name: 'linkage',
      component: LinkageView
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/map',
      name: 'map',
      component: MapView
    },
    {
      path: '/list',
      name: 'list',
      component: ListView
    }
  ]
})

export default router
