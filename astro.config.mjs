// @ts-check
import { defineConfig } from 'astro/config';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // Dominio TEMPORAL gratuito de Vercel. Cuando compres el dominio real, cambialo acá.
  // Si al crear el proyecto en Vercel el nombre "csfreesur" ya está tomado, poné el que te asigne.
  site: 'https://csfreesur.vercel.app',

  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'pt'],
    routing: {
      // Español queda en "/", inglés en "/en/" y portugués en "/pt/"
      prefixDefaultLocale: false,
    },
  },
});
