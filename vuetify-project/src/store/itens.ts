import { ref } from 'vue';

export const itens = ref([
  { id: 1, nome: 'Daft Punk', genero: 'Eletrônica', anoFormacao: 1993, emAtividade: false },
  { id: 2, nome: 'The Prodigy', genero: 'Eletrônica', anoFormacao: 1990, emAtividade: true }
]);

export function salvar(item) {
  if (item.id) {
    const i = itens.value.findIndex(x => x.id === item.id);
    if (i !== -1) {
      itens.value[i] = { ...item };
    }
  } else {
    itens.value.push({ ...item, id: Date.now() });
  }
}

export function excluir(id) {
  itens.value = itens.value.filter(x => x.id !== id);
}