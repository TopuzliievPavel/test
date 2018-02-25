import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/layout/pages/mainPage/MainPage.vue'
import ComingSoon from '@/layout/pages/comingSoon/ComingSoon.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', name: 'MainPage', component: MainPage},
    {path: '/coming-soon', name: 'ComingSoon', component: ComingSoon}
  ]
})
