/**
 * Geometría del mapa ilustrado de la zona (ver Mapa.astro).
 *
 * IMPORTANTE: es un mapa ESQUEMÁTICO. Las coordenadas son aproximadas y
 * están dibujadas a mano (no salen de un servicio de ruteo). Sirven para que
 * el turista entienda "para qué lado queda" cada destino, no para navegar.
 * Si la dueña ve algo corrido, se corrige acá y listo.
 *
 * Formato de cada punto: [latitud, longitud] (como en Google Maps).
 */

export type Punto = [number, number];

// ——— Proyección ———
// Pasamos lat/long a coordenadas del SVG. A esta latitud un grado de
// longitud mide ~64% de un grado de latitud (coseno de 50,5°), así que lo
// achicamos para que el mapa no quede estirado.
const LAT0 = -49.15; // borde norte
const LON0 = -73.45; // borde oeste
const K = 100; // unidades del SVG por grado de latitud
const COS = Math.cos((50.5 * Math.PI) / 180);

export function proyectar([lat, lon]: Punto): [number, number] {
  return [+((lon - LON0) * COS * K).toFixed(2), +((LAT0 - lat) * K).toFixed(2)];
}

// ——— Agua y hielo ———
export const LAGOS: { nombre: string; label: Punto; contorno: Punto[] }[] = [
  {
    nombre: 'Lago Argentino',
    label: [-50.17, -72.45],
    contorno: [
      [-50.17, -71.93], [-50.08, -72.1], [-50.03, -72.35], [-50.05, -72.6], [-50.1, -72.8],
      [-50.02, -72.95], [-49.86, -73.1], [-49.8, -73.2], [-49.85, -73.26], [-50.05, -73.11],
      // Canal de los Témpanos hasta el frente del glaciar
      [-50.2, -73.02], [-50.32, -73.08], [-50.42, -73.1], [-50.46, -73.075], [-50.5, -73.06],
      // Brazo Rico (al sur de la Península de Magallanes)
      [-50.53, -73.0], [-50.55, -72.9], [-50.55, -72.83], [-50.52, -72.84], [-50.5, -72.94],
      [-50.48, -73.0], [-50.475, -73.025],
      // Costa norte de la península, de vuelta hacia el este
      [-50.45, -73.0], [-50.4, -72.95], [-50.33, -72.86], [-50.3, -72.8], [-50.32, -72.65], [-50.3, -72.5], [-50.31, -72.35],
      // Bahía Redonda (frente al pueblo): más detalle, se ve al hacer zoom en la ciudad
      [-50.315, -72.32], [-50.323, -72.3], [-50.33, -72.285], [-50.331, -72.27], [-50.328, -72.255],
      [-50.322, -72.24], [-50.315, -72.225], [-50.31, -72.205], [-50.305, -72.18],
      [-50.29, -72.15], [-50.24, -72.0],
    ],
  },
  {
    nombre: 'Lago Viedma',
    label: [-49.66, -72.55],
    contorno: [
      [-49.84, -72.05], [-49.7, -72.25], [-49.6, -72.45], [-49.5, -72.65], [-49.42, -72.85],
      [-49.38, -73.03], [-49.43, -73.14], [-49.5, -73.05], [-49.56, -72.9], [-49.66, -72.68],
      [-49.77, -72.42], [-49.86, -72.18],
    ],
  },
  {
    nombre: 'Lago Roca',
    label: [-50.69, -72.89],
    contorno: [
      [-50.57, -72.78], [-50.56, -72.86], [-50.58, -72.96], [-50.63, -72.99], [-50.65, -72.9],
      [-50.61, -72.8],
    ],
  },
];

/** Río Santa Cruz: sale del Lago Argentino hacia el Atlántico */
export const RIO: Punto[] = [
  [-50.17, -71.93], [-50.14, -71.6], [-50.17, -71.25], [-50.12, -70.9], [-50.16, -70.4],
  [-50.11, -69.9], [-50.14, -69.3], [-50.1, -68.9],
];

/** Campo de Hielo Patagónico Sur (franja oeste, borde irregular) */
export const HIELO: Punto[] = [
  [-49.0, -73.6], [-49.0, -73.12], [-49.2, -73.18], [-49.32, -73.1], [-49.45, -73.22],
  [-49.62, -73.3], [-49.75, -73.26], [-49.92, -73.34], [-50.05, -73.24], [-50.2, -73.28],
  [-50.35, -73.2], [-50.47, -73.24], [-50.62, -73.2], [-50.78, -73.3], [-50.95, -73.28],
  [-51.1, -73.4], [-51.25, -73.6],
];

/** Lenguas de glaciar que llegan al lago (la del Perito Moreno se ve al hacer zoom) */
export const GLACIARES: Punto[][] = [
  // Perito Moreno: su frente toca el canal y el Brazo Rico
  [[-50.455, -73.08], [-50.5, -73.062], [-50.52, -73.14], [-50.5, -73.22], [-50.45, -73.22], [-50.44, -73.14]],
  // Upsala (Brazo Norte)
  [[-49.8, -73.2], [-49.85, -73.26], [-49.8, -73.3], [-49.72, -73.28]],
  // Viedma (oeste del Lago Viedma)
  [[-49.38, -73.03], [-49.43, -73.14], [-49.4, -73.2], [-49.34, -73.12]],
];

// ——— Rutas (de fondo, en gris) ———
export const RUTAS: { nombre: string; label?: Punto; puntos: Punto[] }[] = [
  {
    nombre: 'RP11',
    label: [-50.39, -72.66],
    puntos: [
      [-50.47, -73.03], [-50.46, -72.98], [-50.43, -72.88], [-50.4, -72.72], [-50.38, -72.55],
      [-50.36, -72.42], [-50.34, -72.3], [-50.338, -72.265], [-50.333, -72.225], [-50.32, -72.19], [-50.31, -72.15], [-50.29, -72.05],
      [-50.3, -71.8],
    ],
  },
  { nombre: 'RP15', label: [-50.45, -72.66], puntos: [[-50.38, -72.55], [-50.45, -72.6], [-50.52, -72.7], [-50.565, -72.785]] },
  { nombre: 'Punta Bandera', puntos: [[-50.38, -72.55], [-50.34, -72.67], [-50.3, -72.79]] },
  {
    nombre: 'RN40',
    label: [-50.0, -71.88],
    puntos: [[-50.3, -71.8], [-50.2, -71.86], [-50.0, -71.92], [-49.8, -72.0]],
  },
  {
    nombre: 'RP23',
    label: [-49.55, -72.42],
    puntos: [[-49.8, -72.0], [-49.68, -72.15], [-49.57, -72.33], [-49.47, -72.58], [-49.39, -72.78], [-49.33, -72.89]],
  },
  {
    nombre: 'RN40 ',
    label: [-50.72, -71.25],
    puntos: [[-50.3, -71.8], [-50.45, -71.6], [-50.6, -71.4], [-50.85, -71.05], [-51.03, -70.75]],
  },
  {
    nombre: 'RN5',
    label: [-51.36, -69.95],
    puntos: [[-51.03, -70.75], [-51.25, -70.2], [-51.45, -69.7], [-51.62, -69.22]],
  },
  {
    nombre: 'RN40  ',
    label: [-51.18, -71.95],
    puntos: [[-50.6, -71.4], [-50.8, -71.55], [-51.06, -71.78], [-51.3, -72.05], [-51.53, -72.3]],
  },
];

// ——— Pueblos de referencia (siempre con nombre) ———
export const CALAFATE: Punto = [-50.338, -72.265];
export const PUEBLOS: { nombre: string; p: Punto }[] = [
  { nombre: 'El Chaltén', p: [-49.33, -72.89] },
  { nombre: 'Esperanza', p: [-51.03, -70.75] },
  { nombre: 'Río Gallegos', p: [-51.62, -69.22] },
  { nombre: 'Río Turbio', p: [-51.53, -72.3] },
];

/**
 * Recorrido de cada destino, SIEMPRE desde El Calafate.
 * La clave es el `id` de destinos.ts.
 *  - ruta: los puntos del camino (el último es el destino)
 *  - zona: solo para "a medida" (sin un único recorrido): puntos a encuadrar
 */
// ——— Detalle del pueblo (solo se ve con mucho zoom: City Tour y Punta Walichu) ———
export const CALLES: { puntos: Punto[]; ripio?: boolean }[] = [
  // Av. del Libertador (la calle principal), sigue como RP11 hacia el este
  { puntos: [[-50.3395, -72.31], [-50.339, -72.285], [-50.338, -72.265], [-50.336, -72.245], [-50.333, -72.225]] },
  // Costanera: pegada a la orilla de la Bahía Redonda (la misma costa del lago,
  // corrida ~150 m hacia tierra)
  {
    puntos: [[-50.3165, -72.32], [-50.3245, -72.3], [-50.3315, -72.285], [-50.3325, -72.27], [-50.3295, -72.255], [-50.3235, -72.24], [-50.3165, -72.225]],
  },
  // Calles que bajan del centro a la costanera
  { puntos: [[-50.339, -72.285], [-50.3315, -72.285]] },
  { puntos: [[-50.3375, -72.268], [-50.3324, -72.268]] },
  { puntos: [[-50.334, -72.237], [-50.3235, -72.24]] },
  // Accesos a las dos puntas de la costanera (oeste y este)
  { puntos: [[-50.3395, -72.31], [-50.32, -72.316], [-50.3165, -72.32]] },
  { puntos: [[-50.3165, -72.225], [-50.333, -72.225]] },
  // Camino de ripio desde la RP11 hasta la entrada de Punta Walichu
  { puntos: [[-50.322, -72.195], [-50.316, -72.193], [-50.311, -72.19]], ripio: true },
];
export const ETIQUETAS_CERCA: { nombre: string; p: Punto; tipo?: 'agua' }[] = [
  { nombre: 'Bahía Redonda', p: [-50.322, -72.275], tipo: 'agua' },
  { nombre: 'Costanera', p: [-50.328, -72.2925] },
  { nombre: 'Av. del Libertador', p: [-50.3405, -72.255] },
  { nombre: 'RP11', p: [-50.3285, -72.207] },
];
/** Cruce de la RP11 con el camino a Punta Walichu */
export const CRUCE_WALICHU: Punto = [-50.322, -72.195];

export const RECORRIDOS: Record<string, { ruta?: Punto[]; zona?: Punto[]; pin?: Punto }> = {
  'perito-moreno': {
    ruta: [CALAFATE, [-50.34, -72.3], [-50.36, -72.42], [-50.38, -72.55], [-50.4, -72.72], [-50.43, -72.88], [-50.46, -72.98], [-50.47, -73.03]],
  },
  'el-chalten': {
    ruta: [CALAFATE, [-50.333, -72.225], [-50.32, -72.19], [-50.31, -72.15], [-50.29, -72.05], [-50.3, -71.8], [-50.2, -71.86], [-50.0, -71.92], [-49.8, -72.0], [-49.68, -72.15], [-49.57, -72.33], [-49.47, -72.58], [-49.39, -72.78], [-49.33, -72.89]],
  },
  aeropuerto: { ruta: [CALAFATE, [-50.333, -72.225], [-50.32, -72.19], [-50.31, -72.15], [-50.29, -72.07], [-50.28, -72.053]] },
  'punta-bandera': { ruta: [CALAFATE, [-50.34, -72.3], [-50.36, -72.42], [-50.38, -72.55], [-50.34, -72.67], [-50.3, -72.79]] },
  'lago-roca': { ruta: [CALAFATE, [-50.34, -72.3], [-50.36, -72.42], [-50.38, -72.55], [-50.45, -72.6], [-50.52, -72.7], [-50.565, -72.785]] },
  // Vuelta completa: Libertador hacia el oeste → la costanera ENTERA, de punta
  // a punta (oeste → este) → de vuelta al centro por Libertador
  'city-tour': {
    ruta: [
      CALAFATE, [-50.3385, -72.275], [-50.339, -72.285], [-50.3395, -72.31], [-50.32, -72.316],
      [-50.3165, -72.32], [-50.3245, -72.3], [-50.3315, -72.285], [-50.3325, -72.27], [-50.3295, -72.255],
      [-50.3235, -72.24], [-50.3165, -72.225], [-50.333, -72.225], [-50.336, -72.245], CALAFATE,
    ],
    pin: [-50.3245, -72.3], // en la costanera, del lado oeste: así su nombre no pisa el de El Calafate
  },
  // Por la RP11 hacia el este y el camino de ripio hasta la entrada
  'punta-walichu': {
    ruta: [CALAFATE, [-50.336, -72.245], [-50.333, -72.225], [-50.322, -72.195], [-50.316, -72.193], [-50.311, -72.19]],
  },
  esperanza: {
    ruta: [CALAFATE, [-50.333, -72.225], [-50.32, -72.19], [-50.31, -72.15], [-50.29, -72.05], [-50.3, -71.8], [-50.45, -71.6], [-50.6, -71.4], [-50.85, -71.05], [-51.03, -70.75]],
  },
  'rio-gallegos': {
    ruta: [CALAFATE, [-50.333, -72.225], [-50.32, -72.19], [-50.31, -72.15], [-50.29, -72.05], [-50.3, -71.8], [-50.45, -71.6], [-50.6, -71.4], [-50.85, -71.05], [-51.03, -70.75], [-51.25, -70.2], [-51.45, -69.7], [-51.62, -69.22]],
  },
  'rio-turbio': {
    ruta: [CALAFATE, [-50.333, -72.225], [-50.32, -72.19], [-50.31, -72.15], [-50.29, -72.05], [-50.3, -71.8], [-50.45, -71.6], [-50.6, -71.4], [-50.8, -71.55], [-51.06, -71.78], [-51.3, -72.05], [-51.53, -72.3]],
  },
  'galpon-glaciar': { ruta: [CALAFATE, [-50.34, -72.3], [-50.355, -72.4], [-50.36, -72.43]] },
  'nibepo-aike': { ruta: [CALAFATE, [-50.34, -72.3], [-50.36, -72.42], [-50.38, -72.55], [-50.45, -72.6], [-50.52, -72.7]] },
  'otras-estancias': { zona: [[-50.36, -72.43], [-50.52, -72.7], [-50.3, -72.0]] },
};
