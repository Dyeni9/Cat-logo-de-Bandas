// Importações oficiais do SDK do Firebase necessárias para o projeto
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Configuração oficial do seu projeto "catalago-de-bandas"
const firebaseConfig = {
  apiKey: "AIzaSyDyF5hDQKGpIoTbGO43g6c9m-rcgtXThdk",
  authDomain: "catalago-de-bandas.firebaseapp.com",
  projectId: "catalago-de-bandas",
  storageBucket: "catalago-de-bandas.firebasestorage.app",
  messagingSenderId: "582123374904",
  appId: "1:582123374904:web:aefcf0e5d6d2b8caf719cd",
  measurementId: "G-5V1MYYZZH6"
};

// Inicializa o aplicativo Firebase
const app = initializeApp(firebaseConfig);

// Exporta as variáveis de autenticação que o App.vue e o Login.vue estavam procurando!
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();