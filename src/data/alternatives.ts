import type { Alternative } from '../types';
import { manualAlternatives } from './manualAlternatives';
import { researchAlternatives } from './researchAlternatives';
import { reservationsById, trustScoresById } from './trustOverrides';
import { calculateTrustScore } from '../utils/trustScore';
import { buildUSVendorComparisons } from './usVendors';

const pricingLikeTags = new Set(['free', 'freemium', 'paid', 'free and paid']);

function sanitizeTags(tags: string[]): string[] {
  const seen = new Set<string>();
  const sanitized: string[] = [];

  for (const tag of tags) {
    const trimmed = tag.trim();
    if (!trimmed) continue;

    const normalized = trimmed.toLowerCase();
    if (pricingLikeTags.has(normalized) || seen.has(normalized)) continue;

    seen.add(normalized);
    sanitized.push(trimmed);
  }

  return sanitized;
}

function normalizeReplacesUS(names: string[], category: Alternative['category']): string[] {
  return names.map((name) => {
    const normalized = name.trim().toLowerCase();

    if (normalized !== 'outlook') {
      return name;
    }

    if (category === 'email') {
      return 'Outlook.com';
    }

    if (category === 'mail-client') {
      return 'Microsoft Outlook (Desktop)';
    }

    return name;
  });
}

function mergeCatalogue(): Alternative[] {
  const deduped = new Map<string, Alternative>();

  for (const alternative of [...manualAlternatives, ...researchAlternatives]) {
    // Manual entries win if IDs collide in future updates.
    if (!deduped.has(alternative.id)) {
      deduped.set(alternative.id, alternative);
    }
  }

  const merged = Array.from(deduped.values()).map((alternative) => {
    const tags = sanitizeTags(alternative.tags);
    const replacesUS = normalizeReplacesUS(alternative.replacesUS, alternative.category);
    const reservations = alternative.reservations ?? reservationsById[alternative.id] ?? [];
    const computedTrustScore = calculateTrustScore({
      country: alternative.country,
      isOpenSource: alternative.isOpenSource,
      openSourceLevel: alternative.openSourceLevel,
      tags,
      reservations,
    });
    const trustScore = trustScoresById[alternative.id];
    const trustScoreStatus = trustScore != null ? 'ready' as const : 'pending' as const;

    return {
      ...alternative,
      tags,
      replacesUS,
      logo: alternative.logo ?? `/logos/${alternative.id}.svg`,
      reservations,
      trustScore,
      usVendorComparisons: buildUSVendorComparisons(replacesUS),
      trustScoreStatus,
      trustScoreBreakdown: trustScoreStatus === 'pending' ? computedTrustScore.breakdown : undefined,
    };
  });

  return merged.sort((a, b) => a.name.localeCompare(b.name));
}

export const alternatives: Alternative[] = mergeCatalogue();
