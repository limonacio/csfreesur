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
      [-50.45, -73.0], [-50.4, -72.95], [-50.33, -72.86], [-50.3, -72.8], [-50.32, -72.65], [-50.3, -72.5], [-50.31, -72.35], [-50.325, -72.27],
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
      [-50.36, -72.42], [-50.34, -72.3], [-50.338, -72.265], [-50.31, -72.15], [-50.29, -72.05],
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
export const RECORRIDOS: Record<string, { ruta?: Punto[]; zona?: Punto[] }> = {
  'perito-moreno': {
    ruta: [CALAFATE, [-50.34, -72.3], [-50.36, -72.42], [-50.38, -72.55], [-50.4, -72.72], [-50.43, -72.88], [-50.46, -72.98], [-50.47, -73.03]],
  },
  'el-chalten': {
    ruta: [CALAFATE, [-50.31, -72.15], [-50.29, -72.05], [-50.3, -71.8], [-50.2, -71.86], [-50.0, -71.92], [-49.8, -72.0], [-49.68, -72.15], [-49.57, -72.33], [-49.47, -72.58], [-49.39, -72.78], [-49.33, -72.89]],
  },
  aeropuerto: { ruta: [CALAFATE, [-50.31, -72.15], [-50.29, -72.07], [-50.28, -72.053]] },
  'punta-bandera': { ruta: [CALAFATE, [-50.34, -72.3], [-50.36, -72.42], [-50.38, -72.55], [-50.34, -72.67], [-50.3, -72.79]] },
  'lago-roca': { ruta: [CALAFATE, [-50.34, -72.3], [-50.36, -72.42], [-50.38, -72.55], [-50.45, -72.6], [-50.52, -72.7], [-50.565, -72.785]] },
  'city-tour': { zona: [[-50.32, -72.3], [-50.35, -72.23]] },
  'cueva-gualicho': { ruta: [CALAFATE, [-50.33, -72.24], [-50.318, -72.215]] },
  esperanza: {
    ruta: [CALAFATE, [-50.31, -72.15], [-50.29, -72.05], [-50.3, -71.8], [-50.45, -71.6], [-50.6, -71.4], [-50.85, -71.05], [-51.03, -70.75]],
  },
  'rio-gallegos': {
    ruta: [CALAFATE, [-50.31, -72.15], [-50.29, -72.05], [-50.3, -71.8], [-50.45, -71.6], [-50.6, -71.4], [-50.85, -71.05], [-51.03, -70.75], [-51.25, -70.2], [-51.45, -69.7], [-51.62, -69.22]],
  },
  'rio-turbio': {
    ruta: [CALAFATE, [-50.31, -72.15], [-50.29, -72.05], [-50.3, -71.8], [-50.45, -71.6], [-50.6, -71.4], [-50.8, -71.55], [-51.06, -71.78], [-51.3, -72.05], [-51.53, -72.3]],
  },
  'galpon-glaciar': { ruta: [CALAFATE, [-50.34, -72.3], [-50.355, -72.4], [-50.36, -72.43]] },
  'nibepo-aike': { ruta: [CALAFATE, [-50.34, -72.3], [-50.36, -72.42], [-50.38, -72.55], [-50.45, -72.6], [-50.52, -72.7]] },
  'otras-estancias': { zona: [[-50.36, -72.43], [-50.52, -72.7], [-50.3, -72.0]] },
};
