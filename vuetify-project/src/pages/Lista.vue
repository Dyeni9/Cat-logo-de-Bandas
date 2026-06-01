<template>
  <div>
    <div class="d-flex justify-space-between align-center my-6">
      <h2 class="text-h4 font-weight-black">Bandas no Catálogo</h2>
      <v-btn color="primary" prepend-icon="mdi-plus" to="/cadastro">Nova Banda</v-btn>
    </div>

    <!-- Tratamento para lista vazia (RF8) -->
    <v-card v-if="itens.length === 0" class="pa-8 text-center" variant="outlined">
      <p class="text-h6 text-medium-emphasis mb-4">Nenhuma banda cadastrada por enquanto.</p>
      <v-btn color="secondary" to="/cadastro">Cadastrar a Primeira</v-btn>
    </v-card>

    <!-- v-data-table baseada na dica dada em aula pelo professor -->
    <v-data-table
      v-else
      :headers="headers"
      :items="itens"
      class="elevation-1 bg-surface"
    >
      <template v-slot:item.emAtividade="{ value }">
        <v-chip :color="value ? 'success' : 'error'" size="small">
          {{ value ? 'Ativa' : 'Não' }}
        </v-chip>
      </template>

      <template v-slot:item.acoes="{ item }">
        <v-btn icon="mdi-pencil" size="small" variant="text" color="warning" @click="editarBanda(item.id)"></v-btn>
        <v-btn icon="mdi-delete" size="small" variant="text" color="error" @click="abrirConfirmacao(item.id)"></v-btn>
      </template>
    </v-data-table>

    <!-- Janela de confirmação para exclusão (RF5) -->
    <v-dialog v-model="dialogExcluir" max-width="400px">
      <v-card>
        <v-card-title class="text-h6">Remover banda?</v-card-title>
        <v-card-text>Tem certeza que deseja apagar essa banda? Os dados em memória serão deletados.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="medium-emphasis" variant="text" @click="dialogExcluir = false">Cancelar</v-btn>
          <v-btn color="error" variant="elevated" @click="confirmarExclusao">Excluir</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { itens, excluir } from '../store/itens';

const router = useRouter();
const dialogExcluir = ref(false);
const idSelecionado = ref(null);

const headers = [
  { title: 'Nome da Banda', key: 'nome' },
  { title: 'Gênero Musical', key: 'genero' },
  { title: 'Ano de Formação', key: 'anoFormacao' },
  { title: 'Em Atividade', key: 'emAtividade' },
  { title: 'Ações', key: 'acoes', sortable: false }
];

function editarBanda(id) {
  router.push(`/cadastro/${id}`);
}

function abrirConfirmacao(id) {
  idSelecionado.value = id;
  dialogExcluir.value = true;
}

function confirmarExclusao() {
  excluir(idSelecionado.value);
  dialogExcluir.value = false;
  idSelecionado.value = null;
}
</script>