import { SITE } from '../config/site';

/**
 * Arma un link de WhatsApp con el mensaje ya escrito.
 * wa.me es el formato oficial: https://wa.me/<numero>?text=<mensaje>
 *
 * encodeURIComponent convierte espacios, tildes y "¿" en caracteres válidos
 * para una URL. Sin eso, el mensaje llega cortado o roto.
 */
export function waLink(message: string): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}
