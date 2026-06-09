import { createApp } from 'vue'
import App from './App.vue'

// Importando o Pinia
import { createPinia } from 'pinia'

import vuetify from './plugins/vuetify'
import router from './router/index'

const app = createApp(App)
const pinia = createPinia()

// Ativando o Pinia no ecossistema do projeto
app.use(pinia)
app.use(vuetify)
app.use(router)

app.mount('#app')