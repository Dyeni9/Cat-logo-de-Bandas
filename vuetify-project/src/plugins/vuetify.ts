import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        colors: {
          primary: '#8A2BE2',    // Roxo Rock
          secondary: '#00FFFF',  // Cyan Neon
          background: '#121212', // Fundo escuro
          surface: '#1E1E1E'     // Superfície dos cards
        }
      }
    }
  }
});