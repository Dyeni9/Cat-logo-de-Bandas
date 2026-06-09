import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../store/auth'

import Home from '../pages/Home.vue'
import Lista from '../pages/Lista.vue'
import Cadastro from '../pages/Cadastro.vue'
import Sobre from '../pages/Sobre.vue'
import Login from '../pages/Login.vue'

const routes = [
  { path: '/login', name: 'Login', component: Login, meta: { requerAutenticacao: false } },
  { path: '/', name: 'Home', component: Home, meta: { requerAutenticacao: true } },
  { path: '/lista', name: 'Lista', component: Lista, meta: { requerAutenticacao: true } },
  { path: '/cadastro/:id?', name: 'Cadastro', component: Cadastro, props: true, meta: { requerAutenticacao: true } },
  { path: '/sobre', name: 'Sobre', component: Sobre, meta: { requerAutenticacao: true } }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Guarda de rota baseada no estado global do Pinia
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  const requerAuth = to.matched.some(record => record.meta.requerAutenticacao)

  if (requerAuth && !authStore.usuario) {
    next('/login')
  } else if (to.path === '/login' && authStore.usuario) {
    next('/')
  } else {
    next()
  }
})

export default router