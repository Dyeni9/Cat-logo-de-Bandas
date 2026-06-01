<template>
  <v-row>
    <v-col cols="12" sm="6">
      <v-card color="surface" variant="outlined" class="pa-4 text-center">
        <v-card-item>
          <div class="text-h6 font-weight-medium text-white mb-2">Total de Bandas</div>
        </v-card-item>
        <h2 class="text-h3 font-weight-bold text-primary">{{ total }}</h2>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6">
      <v-card color="surface" variant="outlined" class="pa-4 text-center">
        <v-card-item>
          <div class="text-h6 font-weight-medium text-white mb-2">Em Atividade</div>
        </v-card-item>
        <h2 class="text-h3 font-weight-bold text-secondary">{{ ativas }}</h2>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
defineProps({
  total: Number,
  ativas: Number
});
</script>