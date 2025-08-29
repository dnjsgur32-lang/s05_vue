import { createWebHistory, createRouter } from 'vue-router'

import AboutView from './pages/AboutView.vue'
import HomeView from './pages/HomeView.vue'
import StudyView from './pages/StudyView.vue'
import Ex_B2 from './pages/Ex_B2.vue'
import Ex_A1 from './pages/Ex_A1.vue'
import Ex_WebDesign from './pages/Ex_WebDesign.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/study', name: 'study', component: StudyView },
  {
    path: '/wd',
    component: Ex_WebDesign,
    children: [
      { path: '', redirect: '/wd/a1' },   // ✅ 기본 자식
      { path: 'a1', name: '쇼핑몰', component: Ex_A1 },
      { path: 'b2', name: '김치이야기', component: Ex_B2 }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('./pages/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior () {
    return { top: 0 }
  }
})

export default router
