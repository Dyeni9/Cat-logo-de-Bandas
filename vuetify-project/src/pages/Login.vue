<template>
  <v-container class="fill-height d-flex align-center justify-center">
    <!-- Card customizado com uma borda sutil na cor do tema -->
    <v-card class="pa-8 text-center mx-auto bg-surface" max-width="450" variant="outlined" style="border-color: var(--v-theme-primary) !important;">
      
      <!-- Ícone de Guitarra estilizado na cor roxa/azul primária do site -->
      <v-icon size="80" color="primary" class="mb-4">mdi-guitar-electric</v-icon>
      
      <v-card-title class="text-h4 font-weight-black justify-center mb-2 text-white">
        RockBio 🎵
      </v-card-title>
      
      <v-card-text class="text-subtitle-1 text-medium-emphasis mb-6">
        Explore, catalogue e organize suas bandas de rock e música eletrônica favoritas. Conecte-se com sua conta Google para começar.
      </v-card-text>

      <!-- Botão de Login com Google robusto e legível -->
      <v-btn
        color="primary"
        variant="elevated"
        size="large"
        block
        prepend-icon="mdi-google"
        class="font-weight-bold text-white"
        @click="fazerLogin"
      >
        Entrar com o Google
      </v-btn>
    </v-card>
  </v-container>
</template>

<script setup>
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '@/plugins/firebase';
import { useRouter } from 'vue-router';

const router = useRouter();

async function fazerLogin() {
  try {
    await signInWithPopup(auth, googleProvider);
    router.push('/');
  } catch (error) {
    console.error("Erro ao autenticar com o Google:", error);
  }
}
</script>