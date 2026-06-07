<template>
  <v-card class="mb-4" variant="tonal" border>
    <v-card-item>
      <v-card-title class="d-flex justify-space-between align-center">
        <span> {{ banda.nome }}</span>
        <v-chip :color="banda.emAtividade ? 'success' : 'error'" size="small">
          {{ banda.emAtividade ? 'Em Atividade' : 'Hiato' }}
        </v-chip>
      </v-card-title>
      <v-card-subtitle>{{ banda.genero }} — Formada em {{ banda.anoFormacao }}</v-card-subtitle>
    </v-card-item>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="warning" variant="text" @click="$emit('editar', banda.id)">Editar</v-btn>
      <v-btn color="error" variant="text" @click="$emit('excluir', banda.id)">Excluir</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
defineProps({
  banda: Object
});
defineEmits(['editar', 'excluir']);
</script>