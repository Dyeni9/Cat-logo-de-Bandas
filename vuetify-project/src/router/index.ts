import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Lista from '../pages/Lista.vue'
import Cadastro from '../pages/Cadastro.vue'
import Sobre from '../pages/Sobre.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/lista', name: 'Lista', component: Lista },
  { path: '/cadastro/:id?', name: 'Cadastro', component: Cadastro, props: true },
  { path: '/sobre', name: 'Sobre', component: Sobre }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router