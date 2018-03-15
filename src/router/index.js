import Vue from 'vue'
import Router from 'vue-router'

// export const MainPage = () => import(/* webpackChunkName: 'page-main' */ '@/layout/pages/main-page/main-page.vue');
// export const ComingSoon = () => import(/* webpackChunkName: 'page-coming-soon' */ '@/layout/pages/coming-soon/coming-soon.vue');
// export const VrList = () => import(/* webpackChunkName: 'page-vr-list' */ '@/layout/pages/virtual-room-list/vr-list.vue');

import MainPage from '@/layout/pages/main-page/main-page.vue'
import ComingSoon from '@/layout/pages/coming-soon/coming-soon.vue'
import VrList from '@/layout/pages/virtual-room-list/vr-list.vue'
import RegUser from '@/layout/pages/registration/reg-user.vue'
import UserProfile from '@/layout/pages/user-profile/user-profile.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', name: 'MainPage', component: MainPage},
    {path: '/vr-list', name: 'VrList', component: VrList},
    {path: '/registration', name: 'RegUser', component: RegUser},
    {path: '/user-profile', name: 'UserProfile', component: UserProfile},
    {path: '/coming-soon', name: 'ComingSoon', component: ComingSoon},
    {path: '*', redirect: '/coming-soon'}
  ]
})
