// @ts-check
import { defineConfig } from 'astro/config';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // Dominio TEMPORAL gratuito de Vercel. Cuando compres el dominio real, cambialo acá.
  // Dirección pública del sitio (la usan og:image, canonical y schema.org).
  // Tiene que coincidir con el nombre del proyecto en Vercel.
  site: 'https://intycaren.vercel.app',

  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'pt'],
    routing: {
      // Español queda en "/", inglés en "/en/" y portugués en "/pt/"
      prefixDefaultLocale: false,
    },
  },
});
