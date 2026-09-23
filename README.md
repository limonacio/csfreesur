# CS Free Sur Traslados — sitio web

Sitio de remis privado desde El Calafate. Está hecho con **Astro**, es un sitio estático y viene en 3 idiomas (ES / EN / PT). Las reservas se hacen por WhatsApp.

---

## 1. Verlo en tu compu (localhost)

**Requisito:** Node.js 22.12 o más nuevo. Para ver qué versión tenés, abrí una terminal y corré:

```bash
node -v
```

Si no lo tenés o la versión es vieja, instalá la versión **LTS** desde https://nodejs.org.

Después, abrí esta carpeta en VS Code y en la terminal (`Ctrl + ñ` o *Terminal → New Terminal*) corré:

```bash
npm install     # solo la primera vez: descarga las dependencias en node_modules/
npm run dev     # levanta el servidor de desarrollo
```

Abrí **http://localhost:4321** en el navegador.

- Inglés: http://localhost:4321/en/
- Portugués: http://localhost:4321/pt/

Mientras `npm run dev` esté corriendo, cada vez que guardes un archivo el navegador se actualiza solo. Para frenar el servidor: `Ctrl + C`.

### Otros comandos

| Comando           | Qué hace                                                       |
| ----------------- | -------------------------------------------------------------- |
| `npm run dev`     | Servidor de desarrollo con recarga automática                  |
| `npm run build`   | Genera el sitio final en `dist/` (lo que se sube al hosting)   |
| `npm run preview` | Sirve la carpeta `dist/` para probar el build final            |
| `npm run check`   | Revisa errores de tipos (TypeScript) en todo el proyecto       |

---

## 2. Cómo está organizado

```
src/
├─ config/site.ts        ← DATOS DEL NEGOCIO (WhatsApp, email, Instagram, capacidad)
├─ data/destinos.ts      ← Catálogo de destinos (nombre en 3 idiomas, categoría, km)
├─ i18n/ui.ts            ← Todos los textos del sitio en ES / EN / PT
├─ lib/whatsapp.ts       ← Arma los links de WhatsApp con el mensaje precargado
├─ styles/global.css     ← Design tokens (colores, fuentes, medidas) + utilidades
├─ layouts/Base.astro    ← <head>: SEO, hreflang, Open Graph, schema.org
├─ components/
│  ├─ Home.astro         ← Arma la página juntando todos los bloques
│  ├─ Header.astro       ← Logo, menú, selector de idioma, menú mobile
│  ├─ Hero.astro         ← Título + cotizador rápido que abre WhatsApp
│  ├─ TrustStrip.astro   ← Los 4 diferenciales
│  ├─ Destinos.astro     ← 3 destacados + lista con filtros por categoría
│  ├─ Vehiculo.astro     ← La Chevrolet Spin
│  ├─ Pasos.astro        ← Cómo reservar (3 pasos)
│  ├─ FAQ.astro          ← Preguntas frecuentes (acordeón sin JS)
│  ├─ CtaFinal.astro     ← Llamado final a WhatsApp
│  ├─ Footer.astro
│  ├─ WhatsAppFlotante.astro
│  ├─ Icon.astro         ← Íconos SVG
│  └─ Ilustracion.astro  ← Dibujos que ocupan el lugar de las fotos por ahora
└─ pages/
   ├─ index.astro        ← /      (español)
   ├─ en/index.astro     ← /en/   (inglés)
   └─ pt/index.astro     ← /pt/   (portugués)
```

### Las 4 ideas del proyecto (lo que haría un senior)

1. **Una sola fuente de verdad.** El número de WhatsApp se escribe una sola vez, en `config/site.ts`. Nunca se copia y pega en diez lugares distintos.
2. **Datos separados de la presentación.** Para agregar un destino se edita `data/destinos.ts`, sin tocar HTML. Si mañana la lista viene de **Limonario** por API, los componentes no cambian.
3. **Los textos no van en el HTML.** Todos viven en `i18n/ui.ts`. El diccionario en español define la estructura, y TypeScript avisa si en inglés o portugués falta alguna clave.
4. **Tokens de diseño.** Los componentes usan `var(--accent)` y no `#0F5B73`. Para cambiar la paleta alcanza con tocar `global.css`.

### ¿Por qué Astro?

Astro genera **HTML estático**, así que el sitio carga muy rápido y Google lo lee sin problemas. JavaScript se usa solo donde hace falta: el menú mobile, los filtros y el cotizador. Además, el soporte para varios idiomas viene incluido (ver `astro.config.mjs`).

---

## 3. Pendientes (TODO) antes de publicar

- [ ] **WhatsApp real** en `src/config/site.ts`: `whatsapp` y `whatsappDisplay`
- [ ] **Email, Instagram** en `src/config/site.ts`
- [ ] **Capacidad real** de la Spin (`vehicle.passengers`): define cuántas opciones tiene el selector de pasajeros
- [ ] **Dominio** en `astro.config.mjs` (`site`): se usa para SEO
- [ ] **Distancias:** verificar los km aproximados en `src/data/destinos.ts`
- [ ] **Textos a confirmar** en `src/i18n/ui.ts`:
  - "Habilitada y con seguro de pasajeros" y "Butacas infantiles a pedido"
  - Respuestas de las FAQ: tiempo de espera, documentación para Chile, formas de pago
- [ ] **Fotos reales:** guardarlas en `src/assets/` y reemplazar `<Ilustracion>` por `<Image>` de `astro:assets`
- [ ] **Imagen para compartir** (og:image, 1200×630) para que el link se vea bien en WhatsApp

## 4. Próximos pasos posibles

- Publicarlo gratis en **Netlify**, **Vercel** o **Cloudflare Pages**: se conecta el repo de GitHub y cada `git push` publica solo.
- Integrar **Limonario** para reservas online.
- Hacer páginas individuales por destino (`/perito-moreno`, `/el-chalten`), que ayudan mucho a aparecer en Google.
