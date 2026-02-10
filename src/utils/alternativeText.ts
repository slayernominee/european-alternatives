import type { Alternative, Reservation } from '../types';

export function getLocalizedAlternativeDescription(alternative: Alternative, language: string): string {
  if (language.startsWith('de') && alternative.localizedDescriptions?.de) {
    return alternative.localizedDescriptions.de;
  }
  return alternative.description;
}

export function getLocalizedReservationText(reservation: Reservation, language: string): string {
  if (language.startsWith('de') && reservation.textDe) {
    return reservation.textDe;
  }
  return reservation.text;
}
