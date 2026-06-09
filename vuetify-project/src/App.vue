<template>
  <v-app>
    <v-app-bar v-if="authStore.usuario" color="primary" elevation="2">
      <v-app-bar-title class="font-weight-bold">🎵 RockBio - Catálogo de Bandas</v-app-bar-title>
      <v-spacer></v-spacer>
      
      <v-btn to="/" variant="text" class="text-white">Home</v-btn>
      <v-btn to="/lista" variant="text" class="text-white">Bandas</v-btn>
      <v-btn to="/sobre" variant="text" class="text-white">Sobre</v-btn>
      
      <v-avatar size="32" class="ml-4 mr-2" v-if="authStore.usuario.photoURL">
        <v-img :src="authStore.usuario.photoURL" alt="Foto de Perfil"></v-img>
      </v-avatar>
      
      <v-btn icon @click="desconectar" title="Sair do Sistema" class="text-white">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container class="mt-4">
        <router-view v-if="!authStore.carregando" />
        <v-container v-else class="fill-height d-flex align-center justify-center">
          <v-progress-circular indeterminate color="primary"></v-progress-circular>
        </v-container>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { useAuthStore } from './store/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

async function desconectar() {
  await authStore.fazerLogout()
  router.push('/login')
}
</script>