import { createRouter, createWebHistory } from 'vue-router'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../plugins/firebase'

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

// Função auxiliar para checar o estado atual do usuário no Firebase
const obterUsuarioAtual = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        unsubscribe();
        resolve(user);
      },
      reject
    );
  });
};

// Guarda de Rota: Bloqueia acessos não autorizados
router.beforeEach(async (to, from, next) => {
  const requerAuth = to.matched.some(record => record.meta.requerAutenticacao);
  const usuarioLogado = await obterUsuarioAtual();

  if (requerAuth && !usuarioLogado) {
    next('/login');
  } else if (to.path === '/login' && usuarioLogado) {
    next('/');
  } else {
    next();
  }
});

export default router;