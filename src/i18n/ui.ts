/**
 * Textos de la interfaz en los 3 idiomas.
 *
 * Patrón: el diccionario en español define la "forma" (el tipo `Dict`) y los
 * otros idiomas están obligados a cumplirla. Si te olvidás de traducir una
 * clave en inglés o portugués, TypeScript te marca el error antes de publicar.
 */

export const LANGS = ['es', 'en', 'pt'] as const;
export type Lang = (typeof LANGS)[number];

export const LANG_LABEL: Record<Lang, string> = { es: 'ES', en: 'EN', pt: 'PT' };
export const LANG_NAME: Record<Lang, string> = { es: 'Español', en: 'English', pt: 'Português' };
/** Para <html lang> y og:locale */
export const LANG_LOCALE: Record<Lang, string> = { es: 'es_AR', en: 'en_US', pt: 'pt_BR' };

const es = {
  meta: {
    title: 'CS Free Sur Traslados | Remis privado en El Calafate',
    description:
      'Traslados privados desde El Calafate en Chevrolet Spin nueva: aeropuerto, Glaciar Perito Moreno, El Chaltén, estancias y Río Gallegos.',
    // Versión que se usa cuando SITE.chile = true
    descriptionChile:
      'Traslados privados desde El Calafate en Chevrolet Spin nueva: aeropuerto, Glaciar Perito Moreno, El Chaltén, estancias, Río Gallegos y Chile (Puerto Natales, Punta Arenas).',
  },
  nav: {
    destinos: 'Destinos',
    vehiculo: 'La camioneta',
    faq: 'Preguntas',
    cta: 'Reservar',
    menu: 'Abrir menú',
    cerrar: 'Cerrar menú',
    idioma: 'Idioma',
    tema: 'Tema',
    modoOscuro: 'Modo oscuro',
    preferencias: 'Idioma y tema',
  },
  hero: {
    badge: 'Remis privado desde El Calafate',
    title: 'Tu traslado por la Patagonia, puerta a puerta.',
    subtitle:
      'Aeropuerto, Glaciar Perito Moreno, El Chaltén, estancias y más, en una Chevrolet Spin nueva. Salís a tu hora y parás donde quieras.',
    subtitleChile:
      'Aeropuerto, Glaciar Perito Moreno, El Chaltén, estancias y Chile en una Chevrolet Spin nueva. Salís a tu hora y parás donde quieras.',
    photoAlt: 'La Chevrolet Spin de CS Free Sur frente al Glaciar Perito Moreno',
    vehicleTitle: 'Chevrolet Spin 0 km',
    vehicleText: (n: number) => `Hasta ${n} pasajeros con equipaje`,
  },
  quote: {
    destino: 'Destino',
    fecha: 'Fecha',
    pasajeros: 'Pasajeros',
    boton: 'Consultar',
    nota: 'Te respondemos por WhatsApp con precio y horario.',
    otro: 'Otro destino',
    mensaje: (destino: string, fecha: string, pax: string) =>
      `Hola! Quiero consultar un traslado a ${destino}` +
      (fecha ? ` para el ${fecha}` : '') +
      ` (${pax} pasajeros). ¿Me pasan precio y disponibilidad?`,
  },
  trust: [
    { title: 'Puerta a puerta', text: 'Te buscamos en tu hotel o en el aeropuerto.' },
    { title: 'A tu ritmo', text: 'Paradas para fotos, sin horarios de excursión grupal.' },
    { title: 'Chofer local', text: 'Conoce las rutas, el clima y los tiempos de la zona.' },
    { title: 'Cruces a Chile', text: 'Puerto Natales y Punta Arenas por Cancha Carrera.', soloChile: true },
    { title: 'Reservás por WhatsApp', text: 'Un mensaje y coordinamos fecha, horario y punto de encuentro.', sinChile: true },
  ],
  destinos: {
    eyebrow: 'Destinos',
    title: 'Adónde te llevamos',
    intro: 'Salidas desde El Calafate. Si tu destino no está en la lista, consultanos igual.',
    consultar: 'Consultar',
    consulta: 'Consultá',
    todos: 'Todos',
    cat: { excursion: 'Excursión', traslado: 'Traslado', estancia: 'Estancia', chile: 'Chile' },
    catPlural: { excursion: 'Excursiones', traslado: 'Traslados', estancia: 'Estancias', chile: 'Chile' },
    otroTitulo: '¿Otro destino?',
    otroTexto: 'Consultanos',
    mensaje: (d: string) => `Hola! Quiero consultar un traslado a ${d}. ¿Me pasan precio y disponibilidad?`,
    mensajeOtro: 'Hola! Quiero consultar por un traslado a otro destino.',
  },
  mapa: {
    alt: 'Mapa ilustrativo de la zona de El Calafate con los recorridos a cada destino',
    ayuda: 'Tocá un destino para ver el recorrido desde El Calafate.',
    desde: 'Desde El Calafate',
    verRecorrido: 'Ver recorrido',
    verTodo: 'Ver todo el mapa',
    consultar: 'Consultar por WhatsApp',
    aviso: 'Mapa ilustrativo: los recorridos y las distancias son aproximados.',
  },
  vehiculo: {
    eyebrow: 'La camioneta',
    title: 'Chevrolet Spin nueva, lista para el ripio y el viento.',
    photoAlt: 'Chevrolet Spin, el modelo de nuestra camioneta',
    cerrar: 'Cerrar',
    cta: 'Consultar por WhatsApp',
    mensaje: 'Hola! Quiero consultar por un traslado en la Chevrolet Spin.',
    features: (n: number) => [
      `Hasta ${n} pasajeros`,
      'Baúl amplio para valijas',
      'Aire acondicionado y calefacción',
      'Habilitada y con seguro de pasajeros',
      'Butacas infantiles a pedido',
      'Paradas para fotos cuando quieras',
    ],
  },
  faq: {
    title: 'Preguntas frecuentes',
    items: [
      {
        q: '¿La entrada al Parque Nacional está incluida?',
        a: 'No. La entrada al Parque Nacional Los Glaciares se paga aparte, en el acceso al parque.',
      },
      {
        q: '¿Me esperan mientras hago la excursión?',
        a: 'Sí. En las excursiones de ida y vuelta el chofer te espera y te trae de regreso. Coordinamos el tiempo de espera al reservar.',
      },
      {
        chile: true,
        q: '¿Qué documentación necesito para cruzar a Chile?',
        a: 'Documento o pasaporte vigente, según tu nacionalidad. Al reservar te confirmamos los requisitos actualizados del paso fronterizo.',
      },
      {
        q: '¿Con cuánta anticipación conviene reservar?',
        a: 'Cuanto antes, mejor, sobre todo en temporada alta (de octubre a abril). Igual escribinos aunque sea para el mismo día.',
      },
      {
        q: '¿Cómo se paga?',
        a: 'Te contamos las formas de pago disponibles cuando confirmamos el viaje.',
      },
    ],
  },
  cta: {
    title: '¿Llegás a El Calafate?',
    text: 'Escribinos y coordinamos tu traslado.',
    mensaje: 'Hola! Quiero consultar por un traslado.',
  },
  footer: {
    rights: 'Todos los derechos reservados.',
  },
  float: 'Escribir por WhatsApp',
  arriba: 'Volver arriba',
  approx: '≈',
};

export type Dict = typeof es;

const en: Dict = {
  meta: {
    title: 'CS Free Sur Transfers | Private driver in El Calafate',
    description:
      'Private transfers from El Calafate in a brand-new Chevrolet Spin: airport, Perito Moreno Glacier, El Chaltén, estancias and Río Gallegos.',
    descriptionChile:
      'Private transfers from El Calafate in a brand-new Chevrolet Spin: airport, Perito Moreno Glacier, El Chaltén, estancias, Río Gallegos and Chile (Puerto Natales, Punta Arenas).',
  },
  nav: {
    destinos: 'Destinations',
    vehiculo: 'The vehicle',
    faq: 'FAQ',
    cta: 'Book',
    menu: 'Open menu',
    cerrar: 'Close menu',
    idioma: 'Language',
    tema: 'Theme',
    modoOscuro: 'Dark mode',
    preferencias: 'Language and theme',
  },
  hero: {
    badge: 'Private driver from El Calafate',
    title: 'Your ride across Patagonia, door to door.',
    subtitle:
      'Airport, Perito Moreno Glacier, El Chaltén, estancias and more, in a brand-new Chevrolet Spin. Leave when you want, stop wherever you like.',
    subtitleChile:
      'Airport, Perito Moreno Glacier, El Chaltén, estancias and Chile in a brand-new Chevrolet Spin. Leave when you want, stop wherever you like.',
    photoAlt: 'The CS Free Sur Chevrolet Spin in front of the Perito Moreno Glacier',
    vehicleTitle: 'Brand-new Chevrolet Spin',
    vehicleText: (n: number) => `Up to ${n} passengers with luggage`,
  },
  quote: {
    destino: 'Destination',
    fecha: 'Date',
    pasajeros: 'Passengers',
    boton: 'Get a quote',
    nota: 'We reply on WhatsApp with price and pickup time.',
    otro: 'Other destination',
    mensaje: (destino: string, fecha: string, pax: string) =>
      `Hi! I'd like a quote for a transfer to ${destino}` +
      (fecha ? ` on ${fecha}` : '') +
      ` (${pax} passengers). Could you send me price and availability?`,
  },
  trust: [
    { title: 'Door to door', text: 'Pickup at your hotel or at the airport.' },
    { title: 'At your pace', text: 'Photo stops, no group-tour schedules.' },
    { title: 'Local driver', text: 'Knows the roads, the weather and local timing.' },
    { title: 'Trips to Chile', text: 'Puerto Natales and Punta Arenas via Cancha Carrera.', soloChile: true },
    { title: 'Book on WhatsApp', text: 'One message and we arrange date, time and pickup point.', sinChile: true },
  ],
  destinos: {
    eyebrow: 'Destinations',
    title: 'Where we take you',
    intro: "Departures from El Calafate. If your destination isn't listed, just ask.",
    consultar: 'Ask',
    consulta: 'Ask us',
    todos: 'All',
    cat: { excursion: 'Excursion', traslado: 'Transfer', estancia: 'Estancia', chile: 'Chile' },
    catPlural: { excursion: 'Excursions', traslado: 'Transfers', estancia: 'Estancias', chile: 'Chile' },
    otroTitulo: 'Somewhere else?',
    otroTexto: 'Ask us',
    mensaje: (d: string) => `Hi! I'd like a quote for a transfer to ${d}. Could you send me price and availability?`,
    mensajeOtro: "Hi! I'd like a quote for a transfer to another destination.",
  },
  mapa: {
    alt: 'Illustrated map of the El Calafate area with the route to each destination',
    ayuda: 'Tap a destination to see the route from El Calafate.',
    desde: 'From El Calafate',
    verRecorrido: 'See route',
    verTodo: 'See full map',
    consultar: 'Ask on WhatsApp',
    aviso: 'Illustrative map: routes and distances are approximate.',
  },
  vehiculo: {
    eyebrow: 'The vehicle',
    title: 'A new Chevrolet Spin, ready for gravel roads and wind.',
    photoAlt: 'Chevrolet Spin, the model of our vehicle',
    cerrar: 'Close',
    cta: 'Ask on WhatsApp',
    mensaje: "Hi! I'd like to ask about a transfer in the Chevrolet Spin.",
    features: (n: number) => [
      `Up to ${n} passengers`,
      'Large trunk for suitcases',
      'Air conditioning and heating',
      'Licensed and passenger-insured',
      'Child seats on request',
      'Photo stops whenever you want',
    ],
  },
  faq: {
    title: 'Frequently asked questions',
    items: [
      {
        q: 'Is the National Park entrance fee included?',
        a: 'No. The Los Glaciares National Park fee is paid separately at the park entrance.',
      },
      {
        q: 'Do you wait while I do the excursion?',
        a: 'Yes. On round trips the driver waits and brings you back. We agree on waiting time when you book.',
      },
      {
        chile: true,
        q: 'What documents do I need to cross into Chile?',
        a: 'A valid ID or passport, depending on your nationality. When you book we confirm the current border requirements.',
      },
      {
        q: 'How far in advance should I book?',
        a: 'The sooner the better, especially in high season (October to April). Message us even for same-day rides.',
      },
      {
        q: 'How do I pay?',
        a: 'We share the available payment methods when we confirm your trip.',
      },
    ],
  },
  cta: {
    title: 'Arriving in El Calafate?',
    text: 'Message us and we’ll arrange your transfer.',
    mensaje: "Hi! I'd like to ask about a transfer.",
  },
  footer: {
    rights: 'All rights reserved.',
  },
  float: 'Message us on WhatsApp',
  arriba: 'Back to top',
  approx: '≈',
};

const pt: Dict = {
  meta: {
    title: 'CS Free Sur Transfers | Motorista particular em El Calafate',
    description:
      'Transfers privados desde El Calafate em Chevrolet Spin nova: aeroporto, Geleira Perito Moreno, El Chaltén, estâncias e Río Gallegos.',
    descriptionChile:
      'Transfers privados desde El Calafate em Chevrolet Spin nova: aeroporto, Geleira Perito Moreno, El Chaltén, estâncias, Río Gallegos e Chile (Puerto Natales, Punta Arenas).',
  },
  nav: {
    destinos: 'Destinos',
    vehiculo: 'O veículo',
    faq: 'Perguntas',
    cta: 'Reservar',
    menu: 'Abrir menu',
    cerrar: 'Fechar menu',
    idioma: 'Idioma',
    tema: 'Tema',
    modoOscuro: 'Modo escuro',
    preferencias: 'Idioma e tema',
  },
  hero: {
    badge: 'Transfer privado desde El Calafate',
    title: 'Seu transfer pela Patagônia, de porta a porta.',
    subtitle:
      'Aeroporto, Geleira Perito Moreno, El Chaltén, estâncias e mais, em uma Chevrolet Spin nova. Saia no seu horário e pare onde quiser.',
    subtitleChile:
      'Aeroporto, Geleira Perito Moreno, El Chaltén, estâncias e Chile em uma Chevrolet Spin nova. Saia no seu horário e pare onde quiser.',
    photoAlt: 'A Chevrolet Spin da CS Free Sur diante da Geleira Perito Moreno',
    vehicleTitle: 'Chevrolet Spin 0 km',
    vehicleText: (n: number) => `Até ${n} passageiros com bagagem`,
  },
  quote: {
    destino: 'Destino',
    fecha: 'Data',
    pasajeros: 'Passageiros',
    boton: 'Consultar',
    nota: 'Respondemos pelo WhatsApp com preço e horário.',
    otro: 'Outro destino',
    mensaje: (destino: string, fecha: string, pax: string) =>
      `Olá! Quero consultar um transfer para ${destino}` +
      (fecha ? ` no dia ${fecha}` : '') +
      ` (${pax} passageiros). Podem me passar preço e disponibilidade?`,
  },
  trust: [
    { title: 'Porta a porta', text: 'Buscamos você no hotel ou no aeroporto.' },
    { title: 'No seu ritmo', text: 'Paradas para fotos, sem horários de excursão em grupo.' },
    { title: 'Motorista local', text: 'Conhece as estradas, o clima e os tempos da região.' },
    { title: 'Viagens ao Chile', text: 'Puerto Natales e Punta Arenas por Cancha Carrera.', soloChile: true },
    { title: 'Reserva pelo WhatsApp', text: 'Uma mensagem e combinamos data, horário e ponto de encontro.', sinChile: true },
  ],
  destinos: {
    eyebrow: 'Destinos',
    title: 'Para onde levamos você',
    intro: 'Saídas de El Calafate. Se o seu destino não estiver na lista, consulte mesmo assim.',
    consultar: 'Consultar',
    consulta: 'Consulte',
    todos: 'Todos',
    cat: { excursion: 'Passeio', traslado: 'Transfer', estancia: 'Estância', chile: 'Chile' },
    catPlural: { excursion: 'Passeios', traslado: 'Transfers', estancia: 'Estâncias', chile: 'Chile' },
    otroTitulo: 'Outro destino?',
    otroTexto: 'Consulte-nos',
    mensaje: (d: string) => `Olá! Quero consultar um transfer para ${d}. Podem me passar preço e disponibilidade?`,
    mensajeOtro: 'Olá! Quero consultar um transfer para outro destino.',
  },
  mapa: {
    alt: 'Mapa ilustrativo da região de El Calafate com o trajeto até cada destino',
    ayuda: 'Toque em um destino para ver o trajeto desde El Calafate.',
    desde: 'Saindo de El Calafate',
    verRecorrido: 'Ver trajeto',
    verTodo: 'Ver mapa completo',
    consultar: 'Consultar pelo WhatsApp',
    aviso: 'Mapa ilustrativo: trajetos e distâncias são aproximados.',
  },
  vehiculo: {
    eyebrow: 'O veículo',
    title: 'Chevrolet Spin nova, pronta para o cascalho e o vento.',
    photoAlt: 'Chevrolet Spin, o modelo do nosso veículo',
    cerrar: 'Fechar',
    cta: 'Consultar pelo WhatsApp',
    mensaje: 'Olá! Quero consultar um transfer na Chevrolet Spin.',
    features: (n: number) => [
      `Até ${n} passageiros`,
      'Porta-malas amplo para bagagens',
      'Ar-condicionado e aquecimento',
      'Habilitada e com seguro de passageiros',
      'Cadeirinhas infantis sob pedido',
      'Paradas para fotos quando quiser',
    ],
  },
  faq: {
    title: 'Perguntas frequentes',
    items: [
      {
        q: 'A entrada do Parque Nacional está incluída?',
        a: 'Não. A entrada do Parque Nacional Los Glaciares é paga à parte, no acesso ao parque.',
      },
      {
        q: 'Vocês esperam enquanto faço o passeio?',
        a: 'Sim. Nos passeios de ida e volta o motorista espera e traz você de volta. Combinamos o tempo de espera na reserva.',
      },
      {
        chile: true,
        q: 'Que documentos preciso para entrar no Chile?',
        a: 'Documento de identidade ou passaporte válido, conforme sua nacionalidade. Na reserva confirmamos os requisitos atualizados da fronteira.',
      },
      {
        q: 'Com quanta antecedência devo reservar?',
        a: 'Quanto antes, melhor, principalmente na alta temporada (outubro a abril). Escreva mesmo que seja para o mesmo dia.',
      },
      {
        q: 'Como faço o pagamento?',
        a: 'Informamos as formas de pagamento disponíveis ao confirmar a viagem.',
      },
    ],
  },
  cta: {
    title: 'Vai chegar em El Calafate?',
    text: 'Escreva para nós e combinamos seu transfer.',
    mensaje: 'Olá! Quero consultar um transfer.',
  },
  footer: {
    rights: 'Todos os direitos reservados.',
  },
  float: 'Escrever no WhatsApp',
  arriba: 'Voltar ao topo',
  approx: '≈',
};

export const UI: Record<Lang, Dict> = { es, en, pt };

/** Devuelve el diccionario del idioma pedido */
export function t(lang: Lang): Dict {
  return UI[lang];
}
