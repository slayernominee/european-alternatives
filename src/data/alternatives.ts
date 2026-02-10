import type { Alternative } from '../types';
import { computeTrustFields } from '../utils/trustScore';
import { manualAlternatives } from './manualAlternatives';
import { researchAlternatives } from './researchAlternatives';
import { deriveVettingStatus, reservationsById, trustScoreOverrides } from './trustOverrides';

function mergeCatalogue(): Alternative[] {
  const deduped = new Map<string, Alternative>();

  for (const alternative of [...manualAlternatives, ...researchAlternatives]) {
    // Manual entries win if IDs collide in future updates.
    if (!deduped.has(alternative.id)) {
      deduped.set(alternative.id, alternative);
    }
  }

  const merged = Array.from(deduped.values()).map((alternative) => {
    const vettingStatus = alternative.vettingStatus ?? deriveVettingStatus(alternative.id);
    const reservations = alternative.reservations ?? reservationsById[alternative.id] ?? [];
    const trustScore = trustScoreOverrides[alternative.id] ?? alternative.trustScore;

    const withOverlays: Alternative = {
      ...alternative,
      logo: alternative.logo ?? `/logos/${alternative.id}.svg`,
      vettingStatus,
      reservations,
      trustScore,
    };

    return computeTrustFields(withOverlays);
  });

  return merged.sort((a, b) => a.name.localeCompare(b.name));
}

export const alternatives: Alternative[] = mergeCatalogue();
