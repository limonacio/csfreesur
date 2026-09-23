import type { Lang } from '../i18n/ui';

/**
 * Catálogo de destinos.
 *
 * Separar los DATOS de la PRESENTACIÓN (los componentes .astro) permite:
 *  - agregar un destino sin tocar HTML ni CSS
 *  - más adelante traer esta lista desde Limonario (API) sin rediseñar nada
 *
 * Distancias: aproximadas desde El Calafate. TODO: verificarlas.
 */

export type Categoria = 'excursion' | 'traslado' | 'estancia' | 'chile';

type Texto = Record<Lang, string>;

export interface Destino {
  id: string;
  nombre: Texto;
  categoria: Categoria;
  /** km aproximados; null = se muestra "Consultá" (o el texto de `distanciaTexto`) */
  km: number | null;
  distanciaTexto?: Texto;
  /** Solo los destacados llevan descripción e ilustración grande */
  destacado?: {
    descripcion: Texto;
    ilustracion: 'glaciar' | 'chalten' | 'aeropuerto';
  };
}

export const DESTINOS: Destino[] = [
  // ——— Destacados ———
  {
    id: 'perito-moreno',
    nombre: { es: 'Glaciar Perito Moreno', en: 'Perito Moreno Glacier', pt: 'Geleira Perito Moreno' },
    categoria: 'excursion',
    km: 80,
    destacado: {
      ilustracion: 'glaciar',
      descripcion: {
        es: 'Ida, espera mientras recorrés las pasarelas y regreso. Se puede combinar con Punta Bandera.',
        en: 'Round trip with waiting time while you walk the boardwalks. Can be combined with Punta Bandera.',
        pt: 'Ida, espera enquanto você percorre as passarelas e volta. Pode combinar com Punta Bandera.',
      },
    },
  },
  {
    id: 'el-chalten',
    nombre: { es: 'El Chaltén', en: 'El Chaltén', pt: 'El Chaltén' },
    categoria: 'excursion',
    km: 215,
    destacado: {
      ilustracion: 'chalten',
      descripcion: {
        es: 'Traslado simple o día completo para hacer trekking. También directo desde el aeropuerto.',
        en: 'One-way transfer or full day for trekking. Also direct from the airport.',
        pt: 'Transfer simples ou dia inteiro para trekking. Também direto do aeroporto.',
      },
    },
  },
  {
    id: 'aeropuerto',
    nombre: { es: 'Aeropuerto El Calafate', en: 'El Calafate Airport', pt: 'Aeroporto El Calafate' },
    categoria: 'traslado',
    km: 20,
    destacado: {
      ilustracion: 'aeropuerto',
      descripcion: {
        es: 'Te esperamos con cartel a la llegada, aunque el vuelo se demore.',
        en: 'We meet you with a name sign on arrival, even if your flight is delayed.',
        pt: 'Esperamos você com placa na chegada, mesmo se o voo atrasar.',
      },
    },
  },

  // ——— Excursiones ———
  { id: 'punta-bandera', nombre: { es: 'Puerto Punta Bandera', en: 'Punta Bandera Port', pt: 'Porto Punta Bandera' }, categoria: 'excursion', km: 45 },
  { id: 'lago-roca', nombre: { es: 'Lago Roca', en: 'Lake Roca', pt: 'Lago Roca' }, categoria: 'excursion', km: 50 },
  {
    id: 'city-tour',
    nombre: { es: 'City Tour', en: 'City Tour', pt: 'City Tour' },
    categoria: 'excursion',
    km: null,
    distanciaTexto: { es: 'En la ciudad', en: 'In town', pt: 'Na cidade' },
  },
  {
    id: 'cueva-gualicho',
    nombre: { es: 'Cueva del Gualicho', en: 'Gualicho Cave', pt: 'Caverna do Gualicho' },
    categoria: 'excursion',
    km: null,
    distanciaTexto: { es: 'Cerca del centro', en: 'Near town', pt: 'Perto do centro' },
  },

  // ——— Traslados ———
  {
    id: 'esperanza',
    nombre: { es: 'Esperanza', en: 'Esperanza', pt: 'Esperanza' },
    categoria: 'traslado',
    km: null,
    distanciaTexto: { es: 'Ruta 40', en: 'Route 40', pt: 'Rota 40' },
  },
  { id: 'rio-gallegos', nombre: { es: 'Río Gallegos', en: 'Río Gallegos', pt: 'Río Gallegos' }, categoria: 'traslado', km: 310 },
  { id: 'rio-turbio', nombre: { es: 'Río Turbio', en: 'Río Turbio', pt: 'Río Turbio' }, categoria: 'traslado', km: null },

  // ——— Estancias ———
  { id: 'galpon-glaciar', nombre: { es: 'El Galpón del Glaciar', en: 'El Galpón del Glaciar', pt: 'El Galpón del Glaciar' }, categoria: 'estancia', km: null },
  { id: 'nibepo-aike', nombre: { es: 'Nibepo Aike', en: 'Nibepo Aike', pt: 'Nibepo Aike' }, categoria: 'estancia', km: null },
  {
    id: 'otras-estancias',
    nombre: { es: 'Otras estancias', en: 'Other estancias', pt: 'Outras estâncias' },
    categoria: 'estancia',
    km: null,
    distanciaTexto: { es: 'A medida', en: 'Custom', pt: 'Sob medida' },
  },

  // ——— Chile ———
  {
    id: 'cancha-carrera',
    nombre: { es: 'Cancha Carrera', en: 'Cancha Carrera', pt: 'Cancha Carrera' },
    categoria: 'chile',
    km: null,
    distanciaTexto: { es: 'Paso fronterizo', en: 'Border crossing', pt: 'Passagem de fronteira' },
  },
  { id: 'puerto-natales', nombre: { es: 'Puerto Natales', en: 'Puerto Natales', pt: 'Puerto Natales' }, categoria: 'chile', km: 360 },
  { id: 'punta-arenas', nombre: { es: 'Punta Arenas', en: 'Punta Arenas', pt: 'Punta Arenas' }, categoria: 'chile', km: null },
];
