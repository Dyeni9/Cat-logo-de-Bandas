<template>
  <v-card class="mx-auto my-8 pa-6" max-width="600" variant="outlined">
    <v-card-title class="text-h5 font-weight-bold mb-4">
      {{ id ? ' Alterar Dados da Banda' : ' Adicionar Nova Banda' }}
    </v-card-title>

    <v-form @submit.prevent="salvarDados">
      <v-text-field v-model="form.nome" label="Nome da Banda" required class="mb-2"></v-text-field>

      <v-select
        v-model="form.genero"
        :items="['Rock', 'Pop', 'Metal', 'Eletrônica', 'Psytrance', 'Indie']"
        label="Gênero"
        required
        class="mb-2"
      ></v-select>

      <v-text-field
        v-model.number="form.anoFormacao"
        label="Ano de Fundação"
        type="number"
        required
        class="mb-2"
      ></v-text-field>

      <v-switch
        v-model="form.emAtividade"
        label="Banda atualmente em atividade"
        color="secondary"
        class="mb-4"
      ></v-switch>

      <div class="d-flex justify-end g-2">
        <v-btn color="medium-emphasis" variant="text" to="/lista" class="mr-2">Voltar</v-btn>
        <v-btn color="primary" type="submit">Salvar Registro</v-btn>
      </div>
    </v-form>
  </v-card>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { itens, salvar } from '../store/itens';

const props = defineProps({
  id: String
});

const router = useRouter();
const form = ref({
  nome: '',
  genero: '',
  anoFormacao: new Date().getFullYear(),
  emAtividade: true
});

onMounted(() => {
  if (props.id) {
    const bandaExistente = itens.value.find(b => b.id === Number(props.id));
    if (bandaExistente) {
      form.value = { ...bandaExistente };
    }
  }
});

function salvarDados() {
  salvar(form.value);
  router.push('/lista'); 
}
</script>