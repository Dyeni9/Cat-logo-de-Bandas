<template>
  <v-app>
    <v-app-bar color="primary" elevation="2">
      <v-app-bar-title> RockBio - Catálogo de Bandas</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn to="/" variant="text">Home</v-btn>
      <v-btn to="/lista" variant="text">Bandas</v-btn>
      <v-btn to="/sobre" variant="text">Sobre</v-btn>
    </v-app-bar>

    <v-main>
      <v-container class="mt-4">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
// Layout base estrutural
</script>