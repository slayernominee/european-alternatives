import type { Reservation, VettingStatus } from '../types';

export const vettedApprovedIds = new Set<string>([
  'airvpn',
  'bitwarden',
  'cryptpad',
  'filen',
  'keepassxc',
  'libreoffice',
  'mailbox-org',
  'mailfence',
  'mastodon',
  'mullvad-browser',
  'openproject',
  'proton-drive',
  'proton-mail',
  'proton-vpn',
  'scaleway',
  'simple-analytics',
  'stability-ai',
  'startmail',
]);

export const vettedRejectedIds = new Set<string>(['nordvpn']);

export function deriveVettingStatus(id: string): VettingStatus {
  if (vettedRejectedIds.has(id)) return 'vetted-rejected';
  if (vettedApprovedIds.has(id)) return 'vetted-approved';
  return 'research';
}

export const reservationsById: Record<string, Reservation[]> = {
  airvpn: [
    {
      id: 'missing-independent-no-logs-audit',
      text: 'No independent third-party no-logs audit published yet.',
      textDe: 'Es wurde bisher kein unabhaengiger No-Logs-Audit veroeffentlicht.',
      severity: 'minor',
    },
  ],
  bitwarden: [
    {
      id: 'us-jurisdiction',
      text: 'US-based company (included for strong open-source and self-hosting model).',
      textDe: 'US-basiertes Unternehmen (aufgenommen wegen starkem Open-Source- und Self-Hosting-Modell).',
      severity: 'moderate',
    },
    {
      id: 'sdk-license-incident-2024',
      text: 'Temporary SDK licensing controversy in 2024; reverted after community backlash.',
      textDe: 'Voruebergehende SDK-Lizenzkontroverse 2024; nach Community-Kritik rueckgaengig gemacht.',
      severity: 'minor',
      date: '2024-10-01',
    },
  ],
  filen: [
    {
      id: 'no-independent-security-audit-yet',
      text: 'Independent security audit has not been completed yet.',
      textDe: 'Ein unabhaengiger Sicherheits-Audit wurde noch nicht abgeschlossen.',
      severity: 'moderate',
    },
    {
      id: 'desktop-sync-reliability-issues',
      text: 'Desktop sync reliability issues were reported by users and acknowledged by the team.',
      textDe: 'Probleme bei der Desktop-Synchronisation wurden von Nutzern gemeldet und vom Team bestaetigt.',
      severity: 'minor',
    },
  ],
  'mailbox-org': [
    {
      id: 'custom-domain-spoofing-gap',
      text: 'Custom-domain spoofing edge case has been discussed for years and only partially mitigated.',
      textDe: 'Eine Spoofing-Luecke bei eigenen Domains wird seit Jahren diskutiert und nur teilweise entschaerft.',
      severity: 'moderate',
    },
    {
      id: 'account-recovery-support-friction',
      text: 'Users report support and account-recovery friction in edge cases.',
      textDe: 'Nutzer berichten in Sonderfaellen ueber Reibung bei Support und Account-Wiederherstellung.',
      severity: 'minor',
    },
  ],
  mailfence: [
    {
      id: 'address-recycling-policy',
      text: 'Historical email-address recycling policy raised account continuity concerns.',
      textDe: 'Die fruehere Wiedervergabe von E-Mail-Adressen fuehrte zu Bedenken bei der Kontinuitaet.',
      severity: 'moderate',
    },
    {
      id: 'vpn-signup-friction',
      text: 'VPN-based sign-ups have reportedly been blocked by anti-abuse controls.',
      textDe: 'Registrierungen ueber VPN wurden laut Berichten durch Anti-Missbrauchsregeln blockiert.',
      severity: 'minor',
    },
  ],
  mastodon: [
    {
      id: 'federation-moderation-complexity',
      text: 'Federated moderation and onboarding are still complex for mainstream users.',
      textDe: 'Foederierte Moderation und Onboarding sind fuer Mainstream-Nutzer weiterhin komplex.',
      severity: 'minor',
    },
    {
      id: 'admin-readable-dm-metadata',
      text: 'Federation architecture means some metadata/privacy limits are structural (instance-admin trust model).',
      textDe: 'Die Foederations-Architektur bringt strukturelle Datenschutzgrenzen mit sich (Vertrauensmodell fuer Instanz-Admins).',
      severity: 'moderate',
    },
  ],
  'proton-drive': [
    {
      id: 'feature-maturity-gap',
      text: 'Product maturity and feature parity still trail established cloud incumbents.',
      textDe: 'Produktreife und Funktionsumfang liegen noch hinter etablierten Cloud-Anbietern.',
      severity: 'minor',
    },
    {
      id: 'upsell-dark-pattern-claims',
      text: 'Some users report upsell pressure and account UX friction around plan limits.',
      textDe: 'Einige Nutzer berichten von Upsell-Druck und UX-Reibung bei Tarifgrenzen.',
      severity: 'minor',
    },
  ],
  'proton-mail': [
    {
      id: 'ip-logging-court-order-2021',
      text: 'In 2021, Proton logged IP metadata for a user after a Swiss court order.',
      textDe: '2021 protokollierte Proton IP-Metadaten eines Nutzers nach einer Schweizer Gerichtsanordnung.',
      severity: 'moderate',
      date: '2021-09-01',
    },
    {
      id: 'journalist-suspension-2025',
      text: 'Journalist account suspensions in 2025 triggered press-freedom criticism before reversal.',
      textDe: 'Kontosperren von Journalisten im Jahr 2025 fuehrten vor Ruecknahme zu Pressefreiheitskritik.',
      severity: 'moderate',
      date: '2025-01-01',
    },
    {
      id: 'lumo-marketing-opt-out-incident',
      text: 'Lumo marketing notifications were criticized as opt-out dark-pattern behavior in 2025.',
      textDe: 'Lumo-Marketingbenachrichtigungen wurden 2025 als Dark Pattern beim Opt-out kritisiert.',
      severity: 'minor',
      date: '2025-10-01',
    },
  ],
  'proton-vpn': [
    {
      id: 'speed-support-complaints',
      text: 'Common complaints include slower free-tier speeds and slower support responses.',
      textDe: 'Hauefige Kritik betrifft geringere Geschwindigkeiten im Gratis-Tier und langsameren Support.',
      severity: 'minor',
    },
  ],
  scaleway: [
    {
      id: 'parent-founder-controversy',
      text: 'Parent-group founder has unrelated historical controversies that can affect perception.',
      textDe: 'Der Gruender der Muttergruppe hat historische, fachfremde Kontroversen, die die Wahrnehmung beeinflussen.',
      severity: 'moderate',
    },
  ],
  'stability-ai': [
    {
      id: 'active-copyright-litigation',
      text: 'Active copyright lawsuits remain unresolved across multiple jurisdictions.',
      textDe: 'Aktive Urheberrechtsklagen sind in mehreren Jurisdiktionen noch nicht abgeschlossen.',
      severity: 'major',
    },
    {
      id: 'community-license-not-osi',
      text: 'Model licensing has restrictions and is not fully OSI-compliant open source.',
      textDe: 'Die Modelllizenz hat Einschraenkungen und ist nicht vollstaendig OSI-konform.',
      severity: 'moderate',
    },
    {
      id: 'governance-instability-history',
      text: 'Historical governance and leadership turbulence impacted trust.',
      textDe: 'Historische Turbulenzen bei Fuehrung und Governance haben das Vertrauen belastet.',
      severity: 'moderate',
    },
  ],
  startmail: [
    {
      id: 'limited-audit-transparency',
      text: 'No public independent security audit or transparency reporting track record.',
      textDe: 'Es gibt keinen oeffentlichen unabhaengigen Sicherheits-Audit und kaum Transparenzberichte.',
      severity: 'moderate',
    },
  ],
  startpage: [
    {
      id: 'system1-majority-stake',
      text: 'A majority stake was acquired by US ad-tech company System1 in 2019.',
      textDe: 'Ein Mehrheitsanteil wurde 2019 vom US-Ad-Tech-Unternehmen System1 uebernommen.',
      severity: 'moderate',
      date: '2019-10-01',
    },
  ],
  mistral: [
    {
      id: 'microsoft-investment-2024',
      text: 'Microsoft invested in Mistral in 2024, raising dependency concerns for some users.',
      textDe: 'Microsoft investierte 2024 in Mistral, was bei einigen Nutzern Abhaengigkeitsbedenken ausloeste.',
      severity: 'moderate',
      date: '2024-02-01',
    },
  ],
  nordvpn: [
    {
      id: 'dark-pattern-class-actions',
      text: 'Ongoing class-action allegations around dark-pattern renewals and cancellation friction.',
      textDe: 'Laufende Sammelklagen wegen mutmasslicher Dark Patterns bei Verlaengerung und Kuendigung.',
      severity: 'major',
    },
    {
      id: 'delayed-breach-disclosure-2018',
      text: '2018 server incident had delayed detection/disclosure, damaging trust.',
      textDe: 'Beim Servervorfall 2018 erfolgten Erkennung und Offenlegung verzoegert, was Vertrauen kostete.',
      severity: 'major',
      date: '2018-03-01',
    },
    {
      id: 'tesonet-oxylabs-ownership-concerns',
      text: 'Ownership and related-entity concerns (Tesonet/Oxylabs) conflict with strict trust criteria.',
      textDe: 'Eigentums- und Verflechtungsfragen (Tesonet/Oxylabs) stehen im Konflikt mit strengen Vertrauenskriterien.',
      severity: 'major',
    },
  ],
};

export const trustScoreOverrides: Record<string, number> = {
  nordvpn: 2,
  'stability-ai': 5,
  'proton-mail': 8,
  'proton-drive': 8,
  startpage: 6,
  mistral: 7,
  startmail: 6,
  'mailbox-org': 7,
  mailfence: 7,
  filen: 7,
  bitwarden: 7,
};
