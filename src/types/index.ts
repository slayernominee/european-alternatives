export interface Alternative {
  id: string;
  name: string;
  description: string;
  localizedDescriptions?: {
    de?: string;
  };
  website: string;
  logo?: string;
  country: CountryCode;
  category: CategoryId;
  replacesUS: string[];
  isOpenSource: boolean;
  openSourceLevel?: OpenSourceLevel;
  githubUrl?: string;
  pricing: 'free' | 'freemium' | 'paid';
  tags: string[];
  foundedYear?: number;
  headquartersCity?: string;
  license?: string;
  vettingStatus?: VettingStatus;
  reservations?: Reservation[];
  trustScore?: number;
  trustTier?: TrustTier;
  trustConfidence?: TrustConfidence;
  trustRationale?: TrustReasonKey[];
}

export interface Reservation {
  id: string;
  text: string;
  textDe?: string;
  severity: ReservationSeverity;
  date?: string;
  sourceUrl?: string;
}

export type CountryCode =
  | 'at' | 'be' | 'bg' | 'hr' | 'cy' | 'cz' | 'dk' | 'ee'
  | 'fi' | 'fr' | 'de' | 'gr' | 'hu' | 'ie' | 'it' | 'lv'
  | 'lt' | 'lu' | 'mt' | 'nl' | 'pl' | 'pt' | 'ro' | 'sk'
  | 'si' | 'es' | 'se'
  | 'ch' | 'no' | 'gb' | 'is'
  | 'eu';

export type CategoryId =
  | 'cloud-storage'
  | 'email'
  | 'search-engine'
  | 'social-media'
  | 'messaging'
  | 'video-hosting'
  | 'office-suite'
  | 'maps'
  | 'browser'
  | 'vpn'
  | 'analytics'
  | 'project-management'
  | 'password-manager'
  | 'ai-ml'
  | 'hosting'
  | 'payments'
  | 'ecommerce'
  | 'other';

export interface Category {
  id: CategoryId;
  name: string;
  description: string;
  usGiants: string[];
  emoji: string;
}

export type OpenSourceLevel = 'full' | 'partial' | 'none';
export type VettingStatus = 'vetted-approved' | 'vetted-rejected' | 'research';
export type TrustTier = 'excellent' | 'good' | 'fair' | 'poor';
export type TrustConfidence = 'high' | 'medium' | 'low';
export type ReservationSeverity = 'minor' | 'moderate' | 'major';
export type TrustReasonKey =
  | 'european-jurisdiction'
  | 'non-eu-exception'
  | 'open-source-full'
  | 'open-source-partial'
  | 'closed-source'
  | 'github-transparency'
  | 'self-hosting-possible'
  | 'privacy-centric-features'
  | 'vetted-approved'
  | 'vetted-rejected'
  | 'not-fully-vetted'
  | 'reservations-present';

export type SortBy = 'name' | 'country' | 'category' | 'trustScore';
export type ViewMode = 'grid' | 'list';

export interface SelectedFilters {
  category: CategoryId[];
  country: CountryCode[];
  pricing: string[];
  openSourceOnly: boolean;
  vettingStatus: VettingStatus[];
  minTrustScore: number;
}
