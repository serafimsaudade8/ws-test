import Vue from 'vue'
import VueRouter from 'vue-router'
import MissionsListView from '../views/MissionsListView.vue'
import SingleMissionView from '../views/SingleMissionView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MissionsListView',
    component: MissionsListView
  },
  {
    path: '/mission/:missionId',
    name: 'SingleMissionView',
    component: SingleMissionView
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
