import { ref } from 'vue'

// Definindo a estrutura que uma banda deve ter para o TypeScript não reclamar
export interface Banda {
  id?: number
  nome: string
  genero: string
  anoFormacao: number | string
  emAtividade: boolean
}

export const itens = ref<Banda[]>([
  { id: 1, nome: 'Iron Maiden', genero: 'Rock', anoFormacao: 1975, emAtividade: false },
  { id: 2, nome: 'The Prodigy', genero: 'Eletrônica', anoFormacao: 1990, emAtividade: true }
])

export function salvar(item: Banda) {
  if (item.id) {
    const i = itens.value.findIndex(x => x.id === item.id)
    if (i !== -1) {
      itens.value[i] = { ...item }
    }
  } else {
    itens.value.push({ ...item, id: Date.now() })
  }
}

export function excluir(id: number) {
  itens.value = itens.value.filter(x => x.id !== id)
}