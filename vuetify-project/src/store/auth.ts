import { defineStore } from 'pinia'
import { ref } from 'vue'
import { onAuthStateChanged, signOut, User } from 'firebase/auth'
import { auth } from '../plugins/firebase'

export const useAuthStore = defineStore('auth', () => {
  // Estado do usuário (pode ser o objeto do User ou null)
  const usuario = ref<User | null>(null)
  const carregando = ref(true)

  // Monitora o Firebase e atualiza o estado do Pinia automaticamente
  onAuthStateChanged(auth, (user) => {
    usuario.value = user
    carregando.value = false
  })

  // Ação de Logout centralizada no Pinia
  async function fazerLogout() {
    try {
      await signOut(auth)
      usuario.value = null
    } catch (error) {
      console.error('Erro ao fazer logout pelo Pinia:', error)
    }
  }

  return {
    usuario,
    carregando,
    fazerLogout
  }
})