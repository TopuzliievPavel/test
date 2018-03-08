import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/layout/pages/main-page/main-page.vue'
import ComingSoon from '@/layout/pages/coming-soon/coming-soon.vue'
import VrList from '@/layout/pages/virtual-room-list/vr-list.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', name: 'MainPage', component: MainPage},
    {path: '/vr-list', name: 'VrList', component: VrList},
    {path: '*', name: 'ComingSoon', component: ComingSoon}
  ]
})

