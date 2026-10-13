/**
 * Datos del negocio: única fuente de verdad.
 *
 * Tip de senior: todo dato que se repite en varias partes del sitio (teléfono,
 * email, redes) vive en UN solo lugar. Si mañana cambia el número de WhatsApp,
 * se toca esta línea y listo.
 */
export const SITE = {
  /**
   * false = le pedimos a Google que NO indexe el sitio todavía (versión de prueba
   * con datos de contacto de ejemplo). Pasalo a true cuando esté todo real.
   */
  indexable: false,

  /**
   * Logo de noche: entre estas horas se muestra logo-noche.png, el resto del
   * día logo-dia.png. Se usa la hora de El Calafate (no la del visitante), así
   * todo el mundo ve el mismo logo en el mismo momento.
   */
  logo: {
    timeZone: 'America/Argentina/Rio_Gallegos',
    nightStart: '22:00',
    nightEnd: '06:00',
  },

  /**
   * Viajes a Chile (Cancha Carrera, Puerto Natales, Punta Arenas).
   * false = se ocultan del sitio hasta tener el permiso especial para cruzar
   * con pasajeros. Los datos NO se borran: para volver a mostrarlos, poné true.
   */
  chile: false,

  name: 'CS Free Sur',
  fullName: 'CS Free Sur Traslados',
  city: 'El Calafate',
  region: 'Santa Cruz, Patagonia Argentina',

  // Formato internacional SIN "+", espacios ni guiones:
  // 549 + código de área sin 0 (2902) + número sin 15
  whatsapp: '5492902403558',
  // Cómo se muestra el número en pantalla
  whatsappDisplay: '+54 9 2902 40-3558',

  email: 'contacto@csfreesur.com.ar', // TODO
  instagram: 'https://www.instagram.com/csfreesurtraslados/',
  instagramHandle: '@csfreesurtraslados',

  vehicle: {
    model: 'Chevrolet Spin',
    // TODO: confirmar capacidad real (la Spin de 7 plazas lleva 6 pasajeros + chofer)
    passengers: 6,
  },
} as const;
