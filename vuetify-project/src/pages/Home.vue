<template>
  <div class="text-center my-8">
    <h1 class="text-h2 font-weight-bold mb-4 text-primary">RockBio </h1>
    <p class="text-subtitle-1 text-medium-emphasis mb-8">
      Explore, catalogue e organize suas bandas de rock e música eletrônica favoritas.
    </p>

    <EstatisticasBox :total="totalBandas" :ativas="bandasAtivas" class="mb-8" />

    <div class="d-flex justify-center g-4">
      <v-btn color="primary" size="large" to="/lista" class="mr-4">Ver Catálogo</v-btn>
      <v-btn color="secondary" size="large" to="/cadastro">+ Nova Banda</v-btn>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { itens } from '../store/itens';
import EstatisticasBox from '../components/EstatisticasBox.vue';

const totalBandas = computed(() => itens.value.length);
const bandasAtivas = computed(() => itens.value.filter(b => b.emAtividade).length);
</script>