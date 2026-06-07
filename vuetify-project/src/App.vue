<template>
  <v-app>
    <!-- A barra superior só aparece se o usuário estiver logado -->
    <v-app-bar v-if="usuario" color="primary" elevation="2">
      <v-app-bar-title class="font-weight-bold">🎵 RockBio - Catálogo de Bandas</v-app-bar-title>
      <v-spacer></v-spacer>
      
      <v-btn to="/" variant="text" class="text-white">Home</v-btn>
      <v-btn to="/lista" variant="text" class="text-white">Bandas</v-btn>
      <v-btn to="/sobre" variant="text" class="text-white">Sobre</v-btn>
      
      <!-- Detalhes do Usuário Google -->
      <v-avatar size="32" class="ml-4 mr-2" v-if="usuario.photoURL">
        <v-img :src="usuario.photoURL" alt="Foto de Perfil"></v-img>
      </v-avatar>
      
      <!-- Botão de Sair corrigido com cor contrastante branca explícita -->
      <v-btn icon @click="fazerLogout" title="Sair do Sistema" class="text-white">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container class="mt-4">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './plugins/firebase';
import { useRouter } from 'vue-router';

const usuario = ref(null);
const router = useRouter();

onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    usuario.value = user;
  });
});

async function fazerLogout() {
  try {
    await signOut(auth);
    router.push('/login');
  } catch (error) {
    console.error("Erro ao fazer logout:", error);
  }
}
</script>