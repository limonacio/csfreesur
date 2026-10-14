/**
 * Geometría del mapa ilustrado de la zona (ver Mapa.astro).
 *
 * IMPORTANTE: es un mapa ESQUEMÁTICO. Las coordenadas son aproximadas y
 * están dibujadas a mano (no salen de un servicio de ruteo). Sirven para que
 * el turista entienda "para qué lado queda" cada destino, no para navegar.
 * Si la dueña ve algo corrido, se corrige acá y listo.
 *
 * El oeste (RP11 al glaciar, Península de Magallanes, Brazo Rico, Lago Roca,
 * RP15) se calcó de una captura satelital de Google Maps que pasó el cliente.
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
      // Canal de los Témpanos (costa oeste) hasta el frente del glaciar
      [-50.2, -73.1], [-50.3, -73.09], [-50.42, -73.1], [-50.47, -73.06], [-50.49, -73.045],
      // Brazo Rico, costa sur (hacia el este)
      [-50.498, -73.016], [-50.507, -72.948], [-50.511, -72.905],
      // Brazo Sur (baja hacia el sur; Nibepo Aike está en su costa este)
      [-50.53, -72.905], [-50.58, -72.9], [-50.63, -72.89], [-50.63, -72.868], [-50.575, -72.866], [-50.515, -72.873],
      // Brazo Rico, costa sur (sigue al este) y punta este
      [-50.504, -72.852], [-50.479, -72.791], [-50.442, -72.75], [-50.429, -72.743],
      // Brazo Rico, costa norte (la RP11 va pegada a esta costa) hasta la punta
      // de la península frente al glaciar (las pasarelas)
      [-50.447, -72.772], [-50.466, -72.806], [-50.48, -72.86], [-50.49, -72.93], [-50.488, -72.97],
      [-50.479, -73.015], [-50.474, -73.04],
      // Canal, costa este (oeste de la Península de Magallanes), hacia el norte
      [-50.46, -73.047], [-50.35, -73.042],
      // Costa norte de la península hasta Puerto Bandera
      [-50.309, -72.962], [-50.291, -72.893], [-50.277, -72.839], [-50.293, -72.788], [-50.263, -72.77],
      // Costa sur del Lago Argentino, de Punta Bandera hacia El Calafate
      [-50.27, -72.75], [-50.275, -72.702], [-50.275, -72.634], [-50.3, -72.613], [-50.311, -72.566],
      [-50.307, -72.497], [-50.311, -72.429], [-50.316, -72.361],
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
    label: [-50.548, -72.768],
    contorno: [
      [-50.553, -72.852], [-50.53, -72.825], [-50.511, -72.791], [-50.518, -72.786], [-50.541, -72.815],
      [-50.558, -72.845],
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
  [[-50.468, -73.075], [-50.492, -73.05], [-50.53, -73.12], [-50.51, -73.22], [-50.45, -73.22], [-50.44, -73.13]],
  // Upsala (Brazo Norte)
  [[-49.8, -73.2], [-49.85, -73.26], [-49.8, -73.3], [-49.72, -73.28]],
  // Viedma (oeste del Lago Viedma)
  [[-49.38, -73.03], [-49.43, -73.14], [-49.4, -73.2], [-49.34, -73.12]],
];

// ——— Rutas que se reutilizan (una sola fuente de verdad) ———
export const CALAFATE: Punto = [-50.338, -72.265];

/** RP11 de El Calafate al glaciar: sale al oeste por la costa del lago, pasa
 *  por Estancia Alice (El Galpón del Glaciar), dobla al sur por el este de la
 *  Península de Magallanes y bordea el Brazo Rico hasta las pasarelas */
const RP11_GLACIAR: Punto[] = [
  CALAFATE, [-50.339, -72.285], [-50.3395, -72.31], [-50.333, -72.36], [-50.327, -72.402], [-50.337, -72.456],
  [-50.344, -72.518], [-50.323, -72.566], [-50.319, -72.634], [-50.33, -72.673], [-50.346, -72.73],
  [-50.357, -72.757], [-50.378, -72.751], [-50.399, -72.74], [-50.429, -72.757], [-50.451, -72.777],
  [-50.47, -72.811], [-50.483, -72.863], [-50.493, -72.934], [-50.491, -72.971], [-50.482, -73.016],
  [-50.47, -73.033],
];
/** Hasta dónde comparten camino Punta Bandera y el glaciar (índice en RP11_GLACIAR) */
const DESVIO_BANDERA = 10; // [-50.346, -72.73]
const ESTANCIA_ALICE = 6; // [-50.344, -72.518]

/** RP15: sale del pueblo hacia el suroeste, pasa por Colonia Francisco P. Moreno
 *  y llega al Lago Roca */
const RP15: Punto[] = [
  CALAFATE, [-50.345, -72.272], [-50.364, -72.292], [-50.406, -72.456], [-50.417, -72.525],
  [-50.465, -72.607], [-50.488, -72.702], [-50.508, -72.782],
];

// ——— Rutas (de fondo, en gris) ———
export const RUTAS: { nombre: string; label?: Punto; puntos: Punto[] }[] = [
  { nombre: 'RP11', label: [-50.312, -72.6], puntos: RP11_GLACIAR },
  // RP11 hacia el este (aeropuerto y cruce con la RN40)
  { nombre: 'RP11 ', puntos: [CALAFATE, [-50.333, -72.225], [-50.32, -72.19], [-50.31, -72.15], [-50.29, -72.05], [-50.3, -71.8]] },
  { nombre: 'RP15', label: [-50.43, -72.53], puntos: RP15 },
  // RP60: une la RP11 con la RP15 (Colonia Francisco P. Moreno)
  { nombre: 'RP60', puntos: [[-50.399, -72.74], [-50.43, -72.68], [-50.465, -72.607]] },
  // Acceso a Puerto Bandera
  { nombre: 'Punta Bandera', puntos: [[-50.346, -72.73], [-50.318, -72.77], [-50.297, -72.786]] },
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
  'perito-moreno': { ruta: RP11_GLACIAR },
  'el-chalten': {
    ruta: [CALAFATE, [-50.333, -72.225], [-50.32, -72.19], [-50.31, -72.15], [-50.29, -72.05], [-50.3, -71.8], [-50.2, -71.86], [-50.0, -71.92], [-49.8, -72.0], [-49.68, -72.15], [-49.57, -72.33], [-49.47, -72.58], [-49.39, -72.78], [-49.33, -72.89]],
  },
  aeropuerto: { ruta: [CALAFATE, [-50.333, -72.225], [-50.32, -72.19], [-50.31, -72.15], [-50.29, -72.07], [-50.28, -72.053]] },
  'punta-bandera': { ruta: [...RP11_GLACIAR.slice(0, DESVIO_BANDERA + 1), [-50.318, -72.77], [-50.297, -72.786]] },
  'lago-roca': { ruta: RP15 },
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
  // El Galpón del Glaciar está en la Estancia Alice, sobre la RP11
  'galpon-glaciar': { ruta: RP11_GLACIAR.slice(0, ESTANCIA_ALICE + 1) },
  // Nibepo Aike: por la RP15 y al sur, sobre la costa del Brazo Sur
  'nibepo-aike': { ruta: [...RP15, [-50.535, -72.78], [-50.565, -72.82], [-50.571, -72.862]] },
  'otras-estancias': { zona: [[-50.344, -72.518], [-50.571, -72.862], [-50.3, -72.0]] },
};
