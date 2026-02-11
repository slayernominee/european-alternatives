import type { Alternative, CountryCode, Reservation } from '../types';

export interface CalculatedTrustScore {
  score: number;
  breakdown: {
    jurisdiction: number;
    openness: number;
    privacySignals: number;
    reservationPenalty: number;
    usCapApplied: boolean;
  };
}

const europeanJurisdictions = new Set<CountryCode>([
  'at', 'be', 'bg', 'hr', 'cy', 'cz', 'dk', 'ee', 'fi', 'fr', 'de', 'gr', 'hu', 'ie', 'it',
  'lv', 'lt', 'lu', 'mt', 'nl', 'pl', 'pt', 'ro', 'sk', 'si', 'es', 'se', 'ch', 'no', 'gb', 'is',
]);

const privacyTagGroupPrimary = new Set([
  'privacy',
  'gdpr',
  'encryption',
  'zero-knowledge',
  'no-logs',
]);

const privacyTagGroupSecondary = new Set([
  'self-hosted',
  'self-hosting',
  'offline',
  'federated',
  'local',
]);

function getJurisdictionScore(country: CountryCode): number {
  if (country === 'us') return 1;
  if (country === 'eu') return 3;
  if (europeanJurisdictions.has(country)) return 4;
  return 3;
}

function getOpennessScore(alternative: Pick<Alternative, 'isOpenSource' | 'openSourceLevel'>): number {
  switch (alternative.openSourceLevel) {
    case 'full':
      return 3;
    case 'partial':
      return 2;
    case 'none':
      return 1;
    default:
      return alternative.isOpenSource ? 2 : 1;
  }
}

function getPrivacySignalScore(tags: string[]): number {
  const normalized = new Set(tags.map((tag) => tag.toLowerCase()));

  let score = 0;
  if (Array.from(privacyTagGroupPrimary).some((tag) => normalized.has(tag))) score += 1;
  if (Array.from(privacyTagGroupSecondary).some((tag) => normalized.has(tag))) score += 1;

  return score;
}

function getReservationPenalty(reservations: Reservation[]): number {
  return reservations.reduce((sum, reservation) => {
    switch (reservation.severity) {
      case 'major':
        return sum + 3;
      case 'moderate':
        return sum + 2;
      case 'minor':
      default:
        return sum + 1;
    }
  }, 0);
}

function clampScore(value: number): number {
  return Math.min(10, Math.max(1, value));
}

export function calculateTrustScore(
  alternative: Pick<Alternative, 'country' | 'isOpenSource' | 'openSourceLevel' | 'tags'> & {
    reservations?: Reservation[];
  },
): CalculatedTrustScore {
  const jurisdiction = getJurisdictionScore(alternative.country);
  const openness = getOpennessScore(alternative);
  const privacySignals = getPrivacySignalScore(alternative.tags);
  const reservationPenalty = getReservationPenalty(alternative.reservations ?? []);

  const rawScore = jurisdiction + openness + privacySignals - reservationPenalty;
  const clampedScore = clampScore(rawScore);

  const usCapApplied = alternative.country === 'us' && clampedScore > 4;
  const score = usCapApplied ? 4 : clampedScore;

  return {
    score,
    breakdown: {
      jurisdiction,
      openness,
      privacySignals,
      reservationPenalty,
      usCapApplied,
    },
  };
}
