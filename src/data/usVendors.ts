import type { Reservation, USVendorComparison } from '../types';

interface USVendorRecord {
  id: string;
  name: string;
  aliases: string[];
}

interface USVendorTrustProfile {
  trustScore: number;
  description: string;
  descriptionDe: string;
  reservations: Reservation[];
}

const US_VENDOR_RECORDS: USVendorRecord[] = [
  {
    id: 'gmail',
    name: 'Gmail',
    aliases: ['gmail'],
  },
  {
    id: 'google-docs',
    name: 'Google Docs',
    aliases: ['google docs', 'google document', 'docs.google.com'],
  },
  {
    id: 'google-search',
    name: 'Google Search',
    aliases: ['google search'],
  },
  {
    id: 'google-chrome',
    name: 'Google Chrome',
    aliases: ['google chrome', 'chrome browser', 'chrome'],
  },
  {
    id: 'google-home',
    name: 'Google Home',
    aliases: ['google nest', 'nest hub', 'nest mini', 'nest audio'],
  },
  {
    id: 'apple-homekit',
    name: 'Apple HomeKit',
    aliases: ['apple home', 'homekit', 'apple home app'],
  },
  {
    id: 'google',
    name: 'Google',
    aliases: [
      'google meet',
      'google workspace',
      'google maps',
      'google drive',
      'google ai',
      'google cloud',
      'google analytics',
      'google gemini',
      'google translate',
      'google imagen',
      'waze',
      'youtube',
    ],
  },
  {
    id: 'microsoft',
    name: 'Microsoft',
    aliases: [
      'microsoft 365',
      'office 365',
      'm365',
      'microsoft teams',
      'ms teams',
      'outlook',
      'outlook.com',
      'microsoft outlook',
      'microsoft outlook desktop',
      'onedrive',
      'microsoft office',
      'bing',
      'edge',
      'azure',
      'microsoft copilot',
      'github copilot',
      'linkedin',
    ],
  },
  {
    id: 'openai',
    name: 'OpenAI',
    aliases: ['chatgpt', 'chat gpt', 'openai chatgpt', 'openai api', 'openai dall-e', 'dall-e', 'dall e'],
  },
  {
    id: 'amazon',
    name: 'Amazon',
    aliases: ['aws', 'aws ai', 'aws translate', 'twitch'],
  },
  {
    id: 'apple',
    name: 'Apple',
    aliases: ['icloud', 'apple maps', 'safari', 'imessage'],
  },
  {
    id: 'meta',
    name: 'Meta',
    aliases: ['facebook', 'instagram'],
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    aliases: ['whatsapp', 'whatsapp messenger', 'whatsapp business'],
  },
  {
    id: 'atlassian',
    name: 'Atlassian',
    aliases: ['jira', 'trello'],
  },
  {
    id: 'salesforce',
    name: 'Salesforce',
    aliases: ['slack'],
  },
  {
    id: 'x-corp',
    name: 'X Corp',
    aliases: ['x/twitter', 'twitter', 'x', 'x.com', 'x twitter'],
  },
  {
    id: 'yahoo',
    name: 'Yahoo',
    aliases: ['yahoo mail'],
  },
  {
    id: 'dropbox',
    name: 'Dropbox',
    aliases: [],
  },
  {
    id: 'cloudflare',
    name: 'Cloudflare',
    aliases: [],
  },
  {
    id: 'discord',
    name: 'Discord',
    aliases: [],
  },
  {
    id: 'vimeo',
    name: 'Vimeo',
    aliases: [],
  },
  {
    id: 'zoom',
    name: 'Zoom',
    aliases: ['zoom meetings'],
  },
  {
    id: 'expressvpn',
    name: 'ExpressVPN',
    aliases: [],
  },
  {
    id: 'mixpanel',
    name: 'Mixpanel',
    aliases: [],
  },
  {
    id: 'amplitude',
    name: 'Amplitude',
    aliases: [],
  },
  {
    id: 'asana',
    name: 'Asana',
    aliases: [],
  },
  {
    id: 'monday-com',
    name: 'Monday.com',
    aliases: ['monday'],
  },
  {
    id: 'lastpass',
    name: 'LastPass',
    aliases: [],
  },
  {
    id: '1password',
    name: '1Password',
    aliases: [],
  },
  {
    id: 'dashlane',
    name: 'Dashlane',
    aliases: [],
  },
  {
    id: 'stripe',
    name: 'Stripe',
    aliases: [],
  },
  {
    id: 'paypal',
    name: 'PayPal',
    aliases: ['pay pal'],
  },
  {
    id: 'block',
    name: 'Block',
    aliases: ['square'],
  },
  {
    id: 'shopify',
    name: 'Shopify',
    aliases: [],
  },
  {
    id: 'ebay',
    name: 'eBay',
    aliases: ['ebay'],
  },
];

const US_VENDOR_TRUST_PROFILES: Record<string, USVendorTrustProfile> = {
  gmail: {
    trustScore: 2.7,
    description:
      'US-operated email service with strong technical hardening, but trust is reduced by Alphabet\'s ad-driven incentives, major privacy enforcement actions, and antitrust rulings.',
    descriptionDe:
      'US-E-Mail-Dienst mit starker technischer Absicherung, dessen Vertrauen aber durch Alphabets werbegetriebene Anreize, schwere Privacy-Verfahren und Antitrust-Urteile reduziert wird.',
    reservations: [
      {
        id: 'ad-tech-majority-control',
        text: 'Alphabet remains majority-funded by advertising, creating structural incentives that can conflict with privacy-first expectations.',
        textDe: 'Alphabet erzielt weiterhin den Großteil seines Umsatzes aus Werbung, was strukturelle Anreize schafft, die mit Privacy-First-Erwartungen kollidieren können.',
        severity: 'major',
        sourceUrl: 'https://www.sec.gov/ixviewer/ix.html?doc=/Archives/edgar/data/1652044/000165204425000014/goog-20241231.htm',
      },
      {
        id: 'major-privacy-settlement-2025',
        text: 'Google agreed to a $1.375B Texas settlement over privacy allegations around location, incognito, and biometrics.',
        textDe: 'Google stimmte in Texas einem Vergleich über 1,375 Mrd. USD zu, basierend auf Privacy-Vorwürfen zu Standortdaten, Incognito und biometrischen Daten.',
        severity: 'major',
        date: '2025-05-09',
        sourceUrl: 'https://apnews.com/article/8097e181cc7cb8522781db8a9a897eea',
      },
      {
        id: 'adverse-antitrust-rulings-2024-2025',
        text: 'US antitrust cases found Google violated competition law in search and open-web ad-tech markets.',
        textDe: 'US-Antitrust-Verfahren stellten fest, dass Google im Such- und Open-Web-Ad-Tech-Markt gegen Wettbewerbsrecht verstoßen hat.',
        severity: 'major',
        date: '2025-04-17',
        sourceUrl: 'https://www.justice.gov/opa/pr/department-justice-prevails-landmark-antitrust-case-against-google',
      },
      {
        id: 'gemini-bundled-pricing-2025',
        text: 'Workspace business plans were repriced while Gemini AI features were bundled into base offerings, reducing opt-out flexibility on cost.',
        textDe: 'Workspace-Business-Pläne wurden neu bepreist, während Gemini-AI-Funktionen in Basispakete gebündelt wurden, was die Kosten-Opt-out-Flexibilität reduziert.',
        severity: 'moderate',
        date: '2025-01-15',
        sourceUrl: 'https://workspace.google.com/blog/product-announcements/empowering-businesses-with-AI',
      },
    ],
  },
  'google-docs': {
    trustScore: 2.8,
    description:
      'US-operated document platform with strong enterprise security controls, but trust is materially reduced by US legal-process exposure, Alphabet\'s ad-driven corporate incentives, and major privacy/antitrust enforcement history.',
    descriptionDe:
      'US-Dokumentenplattform mit starken Enterprise-Sicherheitskontrollen, deren Vertrauen jedoch durch US-Rechtszugriffsrisiken, Alphabets werbegetriebene Unternehmensanreize und schwere Privacy-/Antitrust-Verfahren deutlich sinkt.',
    reservations: [
      {
        id: 'docs-us-legal-process-exposure',
        text: 'As a US provider, Google can be compelled under US legal process frameworks, so EU data-region settings do not fully remove jurisdictional disclosure risk on their own.',
        textDe: 'Als US-Anbieter kann Google auf Basis von US-Rechtsrahmen zur Datenausgabe verpflichtet werden; EU-Datenregionen beseitigen dieses Jurisdiktionsrisiko allein nicht vollstaendig.',
        severity: 'major',
        sourceUrl: 'https://www.govinfo.gov/content/pkg/PLAW-115publ141/pdf/PLAW-115publ141.pdf',
      },
      {
        id: 'docs-ad-tech-majority-control',
        text: 'Alphabet remains majority-funded by advertising, creating structural incentives that can conflict with strict privacy-first expectations.',
        textDe: 'Alphabet erzielt weiterhin den Grossteil seines Umsatzes aus Werbung, was strukturelle Anreize schafft, die mit strikten Privacy-First-Erwartungen kollidieren koennen.',
        severity: 'major',
        sourceUrl: 'https://www.sec.gov/ixviewer/ix.html?doc=/Archives/edgar/data/1652044/000165204425000014/goog-20241231.htm',
      },
      {
        id: 'docs-major-privacy-settlement-2025',
        text: 'Google agreed to a $1.375B Texas settlement over privacy allegations around location, incognito, and biometrics.',
        textDe: 'Google stimmte in Texas einem Vergleich ueber 1,375 Mrd. USD zu, basierend auf Privacy-Vorwuerfen zu Standortdaten, Incognito und biometrischen Daten.',
        severity: 'major',
        date: '2025-05-09',
        sourceUrl: 'https://apnews.com/article/8097e181cc7cb8522781db8a9a897eea',
      },
      {
        id: 'docs-antitrust-adtech-ruling-2025',
        text: 'US antitrust litigation found Google liable in open-web ad-tech markets, reinforcing governance and market-concentration risk for the broader product ecosystem.',
        textDe: 'US-Antitrust-Verfahren stellten eine Haftung Googles im Open-Web-Ad-Tech-Markt fest und verstaerken damit Governance- und Marktkonzentrationsrisiken im gesamten Produktoekosystem.',
        severity: 'major',
        date: '2025-04-17',
        sourceUrl: 'https://www.justice.gov/opa/pr/department-justice-prevails-landmark-antitrust-case-against-google',
      },
      {
        id: 'docs-gemini-bundled-pricing-2025',
        text: 'Workspace plans were repriced while Gemini AI capabilities were bundled into base offerings, reducing cost opt-out flexibility for organizations that do not want AI features.',
        textDe: 'Workspace-Plaene wurden neu bepreist, waehrend Gemini-AI-Funktionen in Basispakete gebuendelt wurden; dadurch sinkt die Kosten-Opt-out-Flexibilitaet fuer Organisationen ohne AI-Bedarf.',
        severity: 'moderate',
        date: '2025-01-15',
        sourceUrl: 'https://workspace.google.com/blog/product-announcements/empowering-businesses-with-AI',
      },
      {
        id: 'docs-export-format-conversion-friction',
        text: 'Local exports rely on conversion to external file formats, which can introduce document-fidelity friction during migration from complex native Docs workflows.',
        textDe: 'Lokale Exporte beruhen auf der Konvertierung in externe Dateiformate, was bei komplexen nativen Docs-Workflows zu Migrations- und Formatfidelitaetsverlust fuehren kann.',
        severity: 'moderate',
        sourceUrl: 'https://support.google.com/docs/answer/49114',
      },
      {
        id: 'docs-drive-desktop-unsynced-file-loss-84x',
        text: 'Google documented a specific Drive for desktop v84.x issue where unsynced local files could be lost and later introduced a recovery workflow, indicating real resilience risk in adjacent Docs sync workflows.',
        textDe: 'Google dokumentierte ein konkretes Drive-for-desktop-v84.x-Problem, bei dem unsynchronisierte lokale Dateien verloren gehen konnten, und fuehrte spaeter einen Recovery-Workflow ein; das zeigt ein reales Resilienzrisiko in angrenzenden Docs-Sync-Workflows.',
        severity: 'moderate',
        sourceUrl: 'https://support.google.com/drive/answer/16631477?hl=en',
      },
      {
        id: 'docs-ai-principles-guardrail-shift-2025',
        text: 'In February 2025, Google updated public AI principles and removed explicit pledge language about avoiding AI for weapons or surveillance, increasing governance-drift concern for AI-enabled product surfaces.',
        textDe: 'Im Februar 2025 aktualisierte Google die oeffentlichen KI-Prinzipien und entfernte explizite Zusagen, KI fuer Waffen oder Ueberwachung zu vermeiden; das erhoeht Governance-Drift-Bedenken fuer KI-aktivierte Produktflaechen.',
        severity: 'moderate',
        date: '2025-02-04',
        sourceUrl: 'https://techcrunch.com/2025/02/04/google-removes-pledge-to-not-use-ai-for-weapons-from-website/',
      },
    ],
  },
  'google-chrome': {
    trustScore: 2.3,
    description:
      'US-operated browser with elite patch velocity and exploit response, but trust is materially reduced by ad-driven incentives, privacy litigation over Incognito expectations, and antitrust pressure tied to default-distribution power.',
    descriptionDe:
      'US-Browser mit sehr starker Patch-Geschwindigkeit und Exploit-Reaktion, dessen Vertrauen jedoch durch werbegetriebene Anreize, Privacy-Klagen rund um Incognito-Erwartungen und Antitrust-Druck bei Default-Verteilung deutlich sinkt.',
    reservations: [
      {
        id: 'chrome-ad-tech-majority-control',
        text: 'Alphabet remains majority-funded by advertising, creating structural incentives that can conflict with strict privacy-first browser expectations.',
        textDe: 'Alphabet erzielt weiterhin den Grossteil seines Umsatzes aus Werbung, was strukturelle Anreize schafft, die mit strikten Privacy-First-Erwartungen an Browser kollidieren koennen.',
        severity: 'major',
        sourceUrl: 'https://www.sec.gov/ixviewer/ix.html?doc=/Archives/edgar/data/1652044/000165204425000014/goog-20241231.htm',
      },
      {
        id: 'chrome-incognito-privacy-settlement-2024',
        text: 'Google settled US Incognito privacy litigation, including deletion commitments for large volumes of private-browsing records and clearer disclosures.',
        textDe: 'Google einigte sich in den USA auf einen Vergleich zur Incognito-Privacy-Klage, einschliesslich Loeschzusagen fuer grosse Mengen privater Browsing-Daten und klarerer Hinweise.',
        severity: 'major',
        date: '2024-04-01',
        sourceUrl: 'https://apnews.com/article/203cc5063f1a1d4013de1900d9376814',
      },
      {
        id: 'chrome-sync-disabled-collection-lawsuit-2024',
        text: 'A US appeals court revived claims that Chrome collected data even with Sync disabled, highlighting ongoing disclosure and consent-risk disputes.',
        textDe: 'Ein US-Berufungsgericht liess Klagepunkte wieder zu, wonach Chrome auch bei deaktivierter Sync-Funktion Daten gesammelt habe, was fortlaufende Risiken bei Transparenz und Einwilligung zeigt.',
        severity: 'moderate',
        date: '2024-08-20',
        sourceUrl: 'https://cdn.ca9.uscourts.gov/datastore/opinions/2024/08/20/22-16993.pdf',
      },
      {
        id: 'chrome-antitrust-monopoly-finding',
        text: 'US antitrust rulings found illegal search-monopoly maintenance, and remedy debates directly include default-distribution channels where Chrome is strategically central.',
        textDe: 'US-Antitrust-Urteile stellten eine illegale Aufrechterhaltung eines Suchmonopols fest; Remedy-Debatten beziehen direkt Default-Vertriebskanaele ein, in denen Chrome strategisch zentral ist.',
        severity: 'major',
        date: '2024-08-05',
        sourceUrl: 'https://apnews.com/article/846916fda0943c5fa359385044a02c8b',
      },
      {
        id: 'chrome-ai-training-policy-scope',
        text: 'Google privacy terms state that some interactions with AI systems may be used to train and improve models, adding governance risk for sensitive Chrome-adjacent workflows.',
        textDe: 'Googles Datenschutzbedingungen nennen, dass manche Interaktionen mit KI-Systemen zum Training und zur Verbesserung von Modellen genutzt werden koennen, was Governance-Risiken fuer sensible, Chrome-nahe Workflows erhoeht.',
        severity: 'major',
        sourceUrl: 'https://policies.google.com/privacy',
      },
      {
        id: 'chrome-manifest-v2-phaseout-2025',
        text: 'Manifest V2 was fully disabled in Chrome by July 2025, forcing extension migration and reducing capabilities used by some privacy-focused blockers.',
        textDe: 'Manifest V2 wurde in Chrome bis Juli 2025 vollstaendig deaktiviert, was Extension-Migration erzwang und Faehigkeiten einiger privacy-orientierter Blocker reduzierte.',
        severity: 'moderate',
        date: '2025-07-24',
        sourceUrl: 'https://developer.chrome.com/docs/extensions/develop/migrate/mv2-deprecation-timeline',
      },
      {
        id: 'chromium-governance-concentration-2024',
        text: 'Google reported contributing about 94% of Chromium commits in 2024, signaling strong single-vendor governance concentration.',
        textDe: 'Google gab an, 2024 etwa 94 Prozent der Chromium-Commits beigetragen zu haben, was eine starke Governance-Konzentration bei einem Anbieter signalisiert.',
        severity: 'moderate',
        date: '2025-01-09',
        sourceUrl: 'https://blog.chromium.org/2025/01/announcing-supporters-of-chromium-based.html',
      },
      {
        id: 'chrome-extension-supply-chain-incident-2024',
        text: 'A documented 2024 campaign distributed malicious Chrome extension updates after publisher compromise, highlighting extension supply-chain risk beyond core browser code.',
        textDe: 'Eine dokumentierte Kampagne aus 2024 verteilte boesartige Chrome-Extension-Updates nach einem Publisher-Kompromiss und unterstreicht damit Supply-Chain-Risiken jenseits des Browser-Kerncodes.',
        severity: 'moderate',
        date: '2024-12-27',
        sourceUrl: 'https://techcrunch.com/2024/12/27/cyberhaven-says-it-was-hacked-to-publish-a-malicious-update-to-its-chrome-extension/',
      },
      {
        id: 'chrome-in-the-wild-exploit-tempo-2025',
        text: 'Chrome stable-channel advisories continue to include vulnerabilities with known in-the-wild exploitation, requiring consistently fast patching by users and IT teams.',
        textDe: 'Chrome-Stable-Channel-Advisories enthalten weiterhin Schwachstellen mit bekannter Ausnutzung in freier Wildbahn, was eine durchgehend schnelle Patch-Umsetzung durch Nutzer und IT-Teams erfordert.',
        severity: 'moderate',
        date: '2025-05-14',
        sourceUrl: 'https://chromereleases.googleblog.com/2025/05/stable-channel-update-for-desktop_14.html',
      },
      {
        id: 'chrome-safe-browsing-not-fully-local',
        text: 'Google\'s real-time Safe Browsing design adds privacy mitigations, but it still relies on network interaction and remote checks rather than fully local-only protection.',
        textDe: 'Googles Real-Time-Safe-Browsing-Design fuegt Privacy-Mitigierungen hinzu, basiert aber weiterhin auf Netzwerkinteraktion und Remote-Pruefungen statt ausschliesslich lokaler Schutzlogik.',
        severity: 'minor',
        date: '2024-03-14',
        sourceUrl: 'https://blog.google/products-and-platforms/products/chrome/google-chrome-safe-browsing-real-time/',
      },
    ],
  },
  'google-home': {
    trustScore: 2.4,
    description:
      'US-operated smart-home ecosystem with solid security maintenance, but trust is materially reduced by ad-tech parent incentives, default Home History AI-training pathways, and recurring privacy/lifecycle controversies.',
    descriptionDe:
      'US-Smart-Home-Oekosystem mit solider Security-Wartung, dessen Vertrauen aber durch ad-tech-getriebene Konzernanreize, AI-Training ueber Home-History-Defaults und wiederkehrende Privacy-/Lifecycle-Kontroversen klar sinkt.',
    reservations: [
      {
        id: 'home-ad-tech-majority-control',
        text: 'Alphabet remains majority-funded by advertising, creating structural incentives that can conflict with privacy-first expectations in always-on home environments.',
        textDe: 'Alphabet erzielt weiterhin den Grossteil des Umsatzes aus Werbung; das schafft strukturelle Anreize, die mit Privacy-First-Erwartungen in Always-on-Home-Umgebungen kollidieren koennen.',
        severity: 'major',
        sourceUrl: 'https://www.sec.gov/ixviewer/ix.html?doc=/Archives/edgar/data/1652044/000165204425000014/goog-20241231.htm',
      },
      {
        id: 'home-default-ai-training-and-retention',
        text: 'Gemini for Home activity is saved in Home History for 18 months by default and, when Home History is on, is used to improve services including training generative AI models.',
        textDe: 'Gemini-for-Home-Aktivitaet wird standardmaessig 18 Monate in der Home History gespeichert und bei aktivierter Home History auch zur Verbesserung von Diensten inklusive Training generativer KI-Modelle genutzt.',
        severity: 'major',
        sourceUrl: 'https://support.google.com/googlenest/answer/16613583?hl=en',
      },
      {
        id: 'home-voice-assistant-privacy-settlement-2026',
        text: 'Google agreed to a $68M class-action settlement over allegations that voice-assistant devices recorded private conversations without proper consent.',
        textDe: 'Google stimmte einem Vergleich ueber 68 Mio. USD in einer Sammelklage zu, die unerlaubte Aufzeichnungen privater Gespraeche durch Voice-Assistant-Geraete beanstandete.',
        severity: 'major',
        date: '2026-01-26',
        sourceUrl: 'https://www.cbsnews.com/news/google-voice-assistant-lawsuit-settlement-68-million/',
      },
      {
        id: 'home-global-processing-and-audio-review',
        text: 'Google privacy terms state that data may be processed outside a user\'s country and that service providers may analyze samples of saved user audio to improve recognition technologies.',
        textDe: 'Googles Datenschutzhinweise nennen grenzueberschreitende Datenverarbeitung und den Einsatz von Dienstleistern, die gespeicherte Audio-Samples zur Verbesserung von Erkennungstechnologien analysieren koennen.',
        severity: 'moderate',
        sourceUrl: 'https://policies.google.com/privacy',
      },
      {
        id: 'home-subscription-lapse-video-history-loss',
        text: 'Google Home Premium documentation states that if a subscription lapses, users lose access to video history and face library features.',
        textDe: 'Die Google-Home-Premium-Dokumentation nennt beim Ablauf des Abonnements den Verlust des Zugriffs auf Videoverlauf und Face-Library-Funktionen.',
        severity: 'moderate',
        sourceUrl: 'https://support.google.com/googlenest/answer/16581647?hl=en',
      },
      {
        id: 'home-nest-aware-price-increase-2025',
        text: 'Google increased Nest Aware pricing in August 2025 (base plan from $8 to $10; Plus from $15 to $20), reducing subscription cost predictability.',
        textDe: 'Google hat die Nest-Aware-Preise im August 2025 erhoeht (Basistarif von 8 auf 10 USD; Plus von 15 auf 20 USD), was die Kostenplanbarkeit fuer Abonnements reduziert.',
        severity: 'moderate',
        date: '2025-08-15',
        sourceUrl: 'https://www.theverge.com/news/708538/google-nest-aware-plus-price-increase-subscription',
      },
      {
        id: 'home-assistant-feature-removals-2024',
        text: 'Google announced removal of underutilized Assistant features as part of quality/reliability reprioritization, reinforcing feature-churn risk during the Assistant-to-Gemini transition.',
        textDe: 'Google kuendigte die Entfernung untergenutzter Assistant-Funktionen im Zuge einer Qualitaets-/Reliability-Neuausrichtung an, was das Feature-Churn-Risiko im Assistant-zu-Gemini-Uebergang verstaerkt.',
        severity: 'moderate',
        date: '2024-01-11',
        sourceUrl: 'https://blog.google/products-and-platforms/products/assistant/google-assistant-update-january-2024/',
      },
      {
        id: 'home-reliability-degradation-acknowledged-2025',
        text: 'Google Home leadership publicly acknowledged reliability degradation reports in 2025 and apologized while promising long-term fixes, indicating a material service-quality issue.',
        textDe: 'Die Google-Home-Leitung hat 2025 oeffentlich Zuverlaessigkeitsprobleme bestaetigt und sich entschuldigt, waehrend langfristige Fixes angekuendigt wurden; das weist auf ein relevantes Service-Qualitaetsproblem hin.',
        severity: 'moderate',
        date: '2025-07-23',
        sourceUrl: 'https://x.com/AnishKattukaran/status/1948164062384406814?s=19&t=yUTsPiecyXO8dteiiq5bXw',
      },
      {
        id: 'home-nest-secure-support-ended-2024',
        text: 'Google ended Nest Secure cloud support in 2024, and the product no longer works in the Nest app or online, highlighting hard end-of-life risk in the ecosystem.',
        textDe: 'Google hat 2024 den Cloud-Support fuer Nest Secure beendet; das Produkt funktioniert nicht mehr in der Nest-App oder online, was ein hartes End-of-Life-Risiko im Oekosystem zeigt.',
        severity: 'major',
        date: '2024-04-08',
        sourceUrl: 'https://support.google.com/googlehome/answer/9231739?hl=en',
      },
      {
        id: 'home-device-eol-thermostat-cutoff-2025',
        text: 'Google ended app/cloud support for Nest Learning Thermostat 1st and 2nd gen on October 25, 2025, highlighting lifecycle churn risk for connected-home hardware.',
        textDe: 'Google beendete am 25. Oktober 2025 die App-/Cloud-Unterstuetzung fuer Nest Learning Thermostat der 1. und 2. Generation, was Lifecycle-Churn-Risiken bei Connected-Home-Hardware unterstreicht.',
        severity: 'moderate',
        date: '2025-10-25',
        sourceUrl: 'https://support.google.com/googlenest/answer/16233096',
      },
      {
        id: 'home-residual-backend-data-recovery-2026',
        text: 'Reporting on a 2026 criminal case described Nest footage recovered from residual backend data despite assumptions that video was unavailable, raising retention and access-path concerns.',
        textDe: 'Berichte zu einem Kriminalfall 2026 beschrieben aus Restdaten in Backend-Systemen wiederhergestelltes Nest-Material trotz Annahmen, dass keine Videos verfuegbar seien; das erhoeht Bedenken zu Retention und Zugriffswegen.',
        severity: 'moderate',
        date: '2026-02-11',
        sourceUrl: 'https://fortune.com/2026/02/11/privacy-concerns-nancy-guthrie-google-nest-camera-footage-kidnapping/',
      },
    ],
  },
  'apple-homekit': {
    trustScore: 4.6,
    description:
      'US-operated smart-home ecosystem with strong cryptographic design and mature security operations, but trust is reduced by demonstrated spyware-chain targeting, ecosystem lock-in through architecture migration, and Siri/iCloud contractual privacy constraints.',
    descriptionDe:
      'US-Smart-Home-Oekosystem mit starker kryptografischer Architektur und reifen Security-Prozessen; das Vertrauen sinkt jedoch durch dokumentierte Spyware-Chain-Targeting-Faelle, Lock-in durch Architektur-Migration sowie Siri-/iCloud-Vertrags- und Privacy-Risiken.',
    reservations: [
      {
        id: 'homekit-spyware-chain-pwnyourhome-2023',
        text: 'Citizen Lab documented NSO-linked exploit chains where a first-stage interaction targeted HomeKit before follow-on iMessage exploitation, showing HomeKit as a viable high-end attack surface.',
        textDe: 'Citizen Lab dokumentierte NSO-verknuepfte Exploit-Ketten, bei denen eine erste Stufe HomeKit angriff, bevor eine nachgelagerte iMessage-Exploitation folgte; das zeigt HomeKit als reales High-End-Angriffsziel.',
        severity: 'major',
        date: '2023-04-18',
        sourceUrl: 'https://citizenlab.ca/2023/04/nso-groups-pegasus-spyware-returns-in-2022/',
      },
      {
        id: 'homekit-amnesty-serbia-targeting-2024',
        text: 'Amnesty International reported 2024 forensic traces of Pegasus targeting in Serbia that included Apple HomeKit interaction artifacts, reinforcing targeted-surveillance risk.',
        textDe: 'Amnesty International berichtete 2024 ueber forensische Spuren von Pegasus-Targeting in Serbien, darunter Artefakte mit Apple-HomeKit-Interaktionen, was das Risiko gezielter Ueberwachung unterstreicht.',
        severity: 'major',
        sourceUrl: 'https://www.amnesty.org/en/documents/EUR70/8813/2024/en/',
      },
      {
        id: 'homekit-amnesty-india-targeting-2023',
        text: 'Amnesty Security Lab reported Pegasus-linked targeting in India where an initial stage interacted with Apple HomeKit service before iMessage payload delivery.',
        textDe: 'Amnesty Security Lab berichtete ueber Pegasus-verknuepfte Targeting-Faelle in Indien, bei denen eine erste Stufe mit dem Apple-HomeKit-Dienst interagierte, bevor iMessage-Payloads zugestellt wurden.',
        severity: 'major',
        date: '2023-12-28',
        sourceUrl: 'https://www.amnesty.org/en/latest/news/2023/12/india-damning-new-forensic-investigation-reveals-repeated-use-of-pegasus-spyware-to-target-high-profile-journalists/',
      },
      {
        id: 'homekit-siri-privacy-settlement-2025',
        text: 'Apple agreed to a $95M settlement over allegations that Siri-enabled devices captured private conversations without intended user activation.',
        textDe: 'Apple stimmte einem Vergleich ueber 95 Mio. USD zu, nachdem vorgeworfen wurde, dass Siri-faehige Geraete private Gespraeche ohne beabsichtigte Nutzeraktivierung erfassten.',
        severity: 'major',
        date: '2025-01-03',
        sourceUrl: 'https://www.cbsnews.com/news/siri-civil-lawsuit-settlement-apple-iphone-eavesdropping/',
      },
      {
        id: 'homekit-legacy-architecture-support-ended-2026',
        text: 'Apple ended support for the previous Home architecture on February 10, 2026, forcing lagging setups to migrate and increasing hardware/platform lock-in pressure.',
        textDe: 'Apple beendete am 10. Februar 2026 den Support fuer die fruehere Home-Architektur, was verzoegerte Setups zur Migration zwingt und den Hardware-/Plattform-Lock-in erhoeht.',
        severity: 'moderate',
        date: '2026-02-10',
        sourceUrl: 'https://support.apple.com/en-us/102287',
      },
      {
        id: 'homekit-icloud-terms-legal-disclosure-rights',
        text: 'iCloud terms state Apple may access, use, preserve, and disclose account information and content when legally required or for specified fraud/security reasons.',
        textDe: 'Die iCloud-Bedingungen nennen, dass Apple Account-Informationen und Inhalte bei rechtlicher Pflicht oder fuer definierte Fraud-/Security-Zwecke abrufen, nutzen, aufbewahren und offenlegen darf.',
        severity: 'moderate',
        sourceUrl: 'https://www.apple.com/legal/internet-services/icloud/',
      },
      {
        id: 'homekit-icloud-unilateral-service-change-rights',
        text: 'iCloud terms allow Apple to modify services and terms, while also disclaiming uninterrupted availability, creating contractual continuity risk for cloud-dependent Home features.',
        textDe: 'Die iCloud-Bedingungen erlauben Apple Aenderungen an Diensten und Bedingungen und schliessen eine unterbrechungsfreie Verfuegbarkeit aus, was vertragliche Kontinuitaetsrisiken fuer cloudabhaengige Home-Funktionen erzeugt.',
        severity: 'moderate',
        sourceUrl: 'https://www.apple.com/legal/internet-services/icloud/',
      },
      {
        id: 'homekit-secure-video-subscription-tier-gating',
        text: 'HomeKit Secure Video camera capacity is tied to iCloud+ subscription tiers, adding lock-in and feature-availability dependence on paid plan level.',
        textDe: 'Die Kamera-Kapazitaet von HomeKit Secure Video ist an iCloud+-Abostufen gebunden, was Lock-in und Funktionsverfuegbarkeit an den bezahlten Tarif koppelt.',
        severity: 'moderate',
        sourceUrl: 'https://support.apple.com/guide/icloud/set-up-homekit-secure-video-mm7c90d21583/icloud',
      },
      {
        id: 'homekit-mfi-protocol-access-restriction',
        text: 'Apple positions HomeKit accessory development through the MFi program, limiting full protocol/certification access to enrolled licensees and reducing independent transparency.',
        textDe: 'Apple verankert die Entwicklung von HomeKit-Zubehoer im MFi-Programm; voller Protokoll-/Zertifizierungszugang ist auf eingeschriebene Lizenznehmer begrenzt und reduziert unabhaengige Transparenz.',
        severity: 'moderate',
        sourceUrl: 'https://developer.apple.com/homekit/',
      },
      {
        id: 'homekit-cve-2022-22588-dos',
        text: 'CVE-2022-22588 documented a HomeKit denial-of-service condition triggered by processing a maliciously crafted accessory name before Apple patched affected platforms.',
        textDe: 'CVE-2022-22588 dokumentierte einen HomeKit-Denial-of-Service-Zustand durch die Verarbeitung eines boesartig konstruierten Accessory-Namens, bevor Apple betroffene Plattformen patchte.',
        severity: 'moderate',
        date: '2022-01-12',
        sourceUrl: 'https://nvd.nist.gov/vuln/detail/CVE-2022-22588',
      },
      {
        id: 'homekit-doj-ecosystem-lock-in-antitrust-2024',
        text: 'The U.S. Department of Justice filed antitrust litigation alleging Apple maintains smartphone-market power through ecosystem restrictions, reinforcing lock-in concerns relevant to Apple Home adoption.',
        textDe: 'Das US-Justizministerium reichte ein Antitrust-Verfahren ein und wirft Apple vor, Marktmacht im Smartphone-Markt ueber Oekosystem-Beschraenkungen aufrechtzuerhalten; das verstaerkt Lock-in-Bedenken bei Apple-Home-Einfuehrungen.',
        severity: 'moderate',
        date: '2024-03-21',
        sourceUrl: 'https://www.justice.gov/opa/pr/justice-department-sues-apple-monopolizing-smartphone-markets',
      },
    ],
  },
  microsoft: {
    trustScore: 3.1,
    description:
      'US-operated productivity suite with strong enterprise security programs and compliance artifacts, but trust is reduced by major cloud incident history, regulatory findings, and persistent US-jurisdiction sovereignty limits.',
    descriptionDe:
      'US-betriebene Produktivitaetsplattform mit starken Enterprise-Sicherheitsprogrammen und Compliance-Artefakten, deren Vertrauen aber durch schwere Cloud-Incidents, regulatorische Befunde und fortbestehende Souveraenitaetsgrenzen unter US-Jurisdiktion reduziert wird.',
    reservations: [
      {
        id: 'microsoft-storm-0558-exchange-intrusion',
        text: 'CISA confirmed attackers exfiltrated Exchange Online Outlook data in the Storm-0558 campaign using forged tokens.',
        textDe: 'CISA bestaetigte, dass Angreifer im Rahmen von Storm-0558 mit gefaelschten Tokens Exchange-Online-Outlook-Daten exfiltrierten.',
        severity: 'major',
        date: '2023-07-12',
        sourceUrl: 'https://www.cisa.gov/news-events/cybersecurity-advisories/aa23-193a',
      },
      {
        id: 'microsoft-csrb-critical-findings-2024',
        text: 'The US Cyber Safety Review Board described the Exchange Online intrusion as preventable and criticized Microsoft\'s incident transparency and security governance.',
        textDe: 'Das US Cyber Safety Review Board stufte die Exchange-Online-Intrusion als vermeidbar ein und kritisierte Microsofts Incident-Transparenz sowie Security-Governance.',
        severity: 'major',
        date: '2024-04-02',
        sourceUrl: 'https://www.cisa.gov/resources-tools/resources/CSRB-Review-Summer-2023-MEO-Intrusion',
      },
      {
        id: 'microsoft-midnight-blizzard-corporate-breach-2024',
        text: 'Microsoft reported that the Midnight Blizzard actor accessed parts of corporate email, source code repositories, and internal systems in 2024, even though no customer-facing hosted systems were reported compromised.',
        textDe: 'Microsoft berichtete 2024, dass die Gruppe Midnight Blizzard auf Teile von Unternehmens-E-Mail, Source-Code-Repositories und interne Systeme zugriff, auch wenn keine kompromittierten gehosteten Kundensysteme gemeldet wurden.',
        severity: 'moderate',
        date: '2024-03-08',
        sourceUrl: 'https://www.microsoft.com/en-us/msrc/blog/2024/03/update-on-microsoft-actions-following-attack-by-nation-state-actor-midnight-blizzard/',
      },
      {
        id: 'microsoft-edps-m365-infringement-2024',
        text: 'The EDPS found the European Commission\'s Microsoft 365 use infringed EU-institution data protection rules, highlighting transfer and purpose-limitation risks.',
        textDe: 'Der EDPS stellte fest, dass die Microsoft-365-Nutzung der EU-Kommission gegen Datenschutzregeln fuer EU-Institutionen verstiess und Transfer- sowie Zweckbindungsrisiken sichtbar machte.',
        severity: 'major',
        date: '2024-03-08',
        sourceUrl: 'https://www.edps.europa.eu/data-protection/our-work/publications/investigations/2024-03-08-edps-investigation-european-commissions-use-microsoft-365_en',
      },
      {
        id: 'microsoft-security-logging-tier-history-2023',
        text: 'CISA stated some critical Microsoft cloud security logs had required higher-cost licensing before expanded logging access was rolled out, which affected baseline forensic visibility.',
        textDe: 'CISA stellte fest, dass einige kritische Microsoft-Cloud-Sicherheitslogs vor der Erweiterung nur mit hoeherpreisiger Lizenz verfuegbar waren, was die forensische Basis-Sichtbarkeit beeintraechtigte.',
        severity: 'moderate',
        date: '2023-07-19',
        sourceUrl: 'https://www.cisa.gov/news-events/news/cisa-and-microsoft-partnership-expands-access-logging-capabilities-broadly',
      },
      {
        id: 'microsoft-us-cloud-act-jurisdiction',
        text: 'US law (18 U.S.C. 2713) can compel providers to disclose customer data under their control regardless of storage location, limiting sovereignty guarantees for US-headquartered vendors.',
        textDe: 'US-Recht (18 U.S.C. 2713) kann Anbieter zur Herausgabe von Kundendaten unter ihrer Kontrolle verpflichten, unabhaengig vom Speicherort, was Souveraenitaetszusagen bei US-Hauptsitz begrenzt.',
        severity: 'major',
        sourceUrl: 'https://www.law.cornell.edu/uscode/text/18/2713',
      },
      {
        id: 'microsoft-teams-bundling-antitrust-commitments-2025',
        text: 'Microsoft accepted long-running EU antitrust commitments on Teams bundling, including offering suites without Teams and interoperability/data-portability obligations for multiple years.',
        textDe: 'Microsoft akzeptierte langlaufende EU-Antitrust-Verpflichtungen zur Teams-Buendelung, einschliesslich Suites ohne Teams sowie Interoperabilitaets- und Datenportabilitaetsauflagen ueber mehrere Jahre.',
        severity: 'moderate',
        date: '2025-09-12',
        sourceUrl: 'https://apnews.com/article/61a94a85f04df5183f2b8f81bc9468e5',
      },
      {
        id: 'microsoft-copilot-pricing-accc-2025',
        text: 'Australia\'s ACCC sued Microsoft over allegedly misleading Microsoft 365 consumer subscribers about Copilot-linked price increases and downgrade options.',
        textDe: 'Die australische ACCC verklagte Microsoft wegen mutmasslich irrefuehrender Kommunikation zu Copilot-bedingten Microsoft-365-Preiserhoehungen und Downgrade-Optionen.',
        severity: 'moderate',
        date: '2025-10-27',
        sourceUrl: 'https://www.accc.gov.au/media-release/microsoft-in-court-for-allegedly-misleading-millions-of-australians-over-microsoft-365-subscriptions',
      },
      {
        id: 'microsoft-major-outage-2026-01-22',
        text: 'Microsoft reported a 9+ hour outage affecting multiple Microsoft 365 workloads on January 22, 2026, including Outlook, Exchange Online, Teams, and admin surfaces.',
        textDe: 'Microsoft berichtete am 22. Januar 2026 ueber einen Ausfall von mehr als neun Stunden in mehreren Microsoft-365-Workloads, darunter Outlook, Exchange Online, Teams und Admin-Oberflaechen.',
        severity: 'moderate',
        date: '2026-01-22',
        sourceUrl: 'https://www.crn.com/news/software/2026/microsoft-365-nine-hour-plus-outage-is-resolved-software-giant-blames-elevated-service-load-during-maintenance',
      },
      {
        id: 'microsoft-admin-center-outage-2026-02-10',
        text: 'Microsoft acknowledged an incident in North America on February 10, 2026 where some business and enterprise admins could not access the Microsoft 365 admin center.',
        textDe: 'Microsoft bestaetigte am 10. Februar 2026 einen Incident in Nordamerika, bei dem einige Business- und Enterprise-Admins nicht auf das Microsoft-365-Admin-Center zugreifen konnten.',
        severity: 'moderate',
        date: '2026-02-10',
        sourceUrl: 'https://www.bleepingcomputer.com/news/microsoft/microsoft-365-outage-takes-down-admin-center-in-north-america/',
      },
      {
        id: 'microsoft-nce-seven-day-cancellation-window',
        text: 'Microsoft\'s New Commerce cancellation terms describe only a seven-day prorated refund window for many software and license-based subscriptions.',
        textDe: 'Microsofts New-Commerce-Kuendigungsbedingungen nennen fuer viele Software- und lizenzbasierte Abos nur ein siebentaegiges anteiliges Erstattungsfenster.',
        severity: 'moderate',
        sourceUrl: 'https://learn.microsoft.com/en-us/partner-center/customers/new-commerce-cancellation-policy',
      },
      {
        id: 'microsoft-ews-deprecation-migration-pressure',
        text: 'Microsoft will disable Exchange Web Services in Exchange Online in October 2026, which can create migration pressure and integration churn for long-lived third-party or internal workflows.',
        textDe: 'Microsoft wird Exchange Web Services in Exchange Online im Oktober 2026 deaktivieren, was Migrationsdruck und Integrationsaufwand fuer langlaufende Drittanbieter- oder interne Workflows erzeugen kann.',
        severity: 'moderate',
        date: '2026-10-01',
        sourceUrl: 'https://learn.microsoft.com/en-us/exchange/clients-and-mobile-in-exchange-online/deprecation-of-ews-exchange-online',
      },
    ],
  },
  openai: {
    trustScore: 2.7,
    description:
      'US-operated AI platform with strong enterprise security and compliance controls, but trust is reduced by consumer-tier training defaults, significant privacy enforcement, litigation-driven retention overrides, and notable incident history.',
    descriptionDe:
      'US-AI-Plattform mit starken Enterprise-Security- und Compliance-Kontrollen, deren Vertrauen jedoch durch Trainings-Defaults im Consumer-Tier, signifikante Privacy-Verfahren, litigation-getriebene Retention-Overrides und relevante Incident-Historie sinkt.',
    reservations: [
      {
        id: 'openai-us-legal-process-exposure',
        text: 'As a US provider, OpenAI can be compelled under US legal-process frameworks, so EU-region setup choices alone do not eliminate disclosure-risk exposure.',
        textDe: 'Als US-Anbieter kann OpenAI unter US-Rechtsrahmen zur Datenausgabe verpflichtet werden; reine EU-Regionseinstellungen beseitigen dieses Offenlegungsrisiko daher nicht.',
        severity: 'major',
        sourceUrl: 'https://www.law.cornell.edu/uscode/text/18/2713',
      },
      {
        id: 'openai-consumer-training-default-opt-out',
        text: 'OpenAI policy states that consumer ChatGPT content may be used to improve models unless users opt out, creating default governance risk for sensitive workflows.',
        textDe: 'Die OpenAI-Policy nennt, dass Inhalte aus dem Consumer-ChatGPT zur Modellverbesserung genutzt werden koennen, sofern Nutzer nicht aktiv widersprechen; das erzeugt ein Default-Governance-Risiko fuer sensible Workflows.',
        severity: 'major',
        sourceUrl: 'https://openai.com/policies/how-your-data-is-used-to-improve-model-performance/',
      },
      {
        id: 'openai-gdpr-fine-italy-2024',
        text: 'Italy\'s data protection authority fined OpenAI EUR 15M in December 2024 over ChatGPT privacy and transparency issues.',
        textDe: 'Die italienische Datenschutzaufsicht verhaengte im Dezember 2024 eine Strafe von 15 Mio. EUR gegen OpenAI wegen ChatGPT-Privacy- und Transparenzthemen.',
        severity: 'major',
        date: '2024-12-20',
        sourceUrl: 'https://apnews.com/article/6760575ae7a29a1dd22cc666f49e605f',
      },
      {
        id: 'openai-chat-history-exposure-2023',
        text: 'OpenAI disclosed a March 2023 bug that exposed some users to other users\' chat titles and limited billing metadata.',
        textDe: 'OpenAI legte im Maerz 2023 einen Bug offen, durch den einige Nutzer fremde Chat-Titel und begrenzte Billing-Metadaten sehen konnten.',
        severity: 'major',
        date: '2023-03-24',
        sourceUrl: 'https://openai.com/index/march-20-chatgpt-outage/',
      },
      {
        id: 'openai-litigation-legal-hold-retention-2025',
        text: 'OpenAI stated in 2025 that court-ordered legal holds can require retaining content beyond normal deletion expectations, increasing compliance unpredictability.',
        textDe: 'OpenAI erklaerte 2025, dass gerichtlich angeordnete Legal Holds Inhalte ueber normale Loeschfristen hinaus aufbewahren koennen, was Compliance-Planung unvorhersehbarer macht.',
        severity: 'major',
        date: '2025-06-05',
        sourceUrl: 'https://openai.com/index/response-to-nyt-data-demands/',
      },
      {
        id: 'openai-third-party-analytics-incident-2025',
        text: 'OpenAI reported a 2025 third-party analytics incident involving Mixpanel data for some API users, underscoring subprocessor exposure risk.',
        textDe: 'OpenAI meldete 2025 einen Drittanbieter-Analytics-Vorfall mit Mixpanel-Daten bei einigen API-Nutzern, was Subprozessor-Risiken unterstreicht.',
        severity: 'moderate',
        date: '2025-11-26',
        sourceUrl: 'https://status.openai.com/incidents/01K91M8C5DBNFRFC8R55D7Q1EW',
      },
      {
        id: 'openai-edpb-chatgpt-taskforce-findings-2024',
        text: 'The EDPB ChatGPT Taskforce report documented cross-authority GDPR concerns around lawful basis, transparency, and personal-data processing in LLM training contexts.',
        textDe: 'Der EDPB-ChatGPT-Taskforce-Report dokumentierte behordenuebergreifende DSGVO-Bedenken zu Rechtsgrundlage, Transparenz und Verarbeitung personenbezogener Daten in LLM-Trainingskontexten.',
        severity: 'moderate',
        date: '2024-05-23',
        sourceUrl: 'https://www.edpb.europa.eu/our-work-tools/our-documents/other/report-work-undertaken-chatgpt-taskforce_en',
      },
      {
        id: 'openai-nyt-copyright-lawsuit-2023',
        text: 'The New York Times sued OpenAI and Microsoft over alleged unauthorized training on journalism content, creating ongoing copyright and model-governance litigation risk.',
        textDe: 'Die New York Times verklagte OpenAI und Microsoft wegen mutmasslich nicht autorisierten Trainings mit journalistischen Inhalten, was fortlaufende Copyright- und Model-Governance-Litigation-Risiken schafft.',
        severity: 'moderate',
        date: '2023-12-27',
        sourceUrl: 'https://apnews.com/article/6ea53a8ad3efa06ee4643b697df0ba57',
      },
      {
        id: 'openai-safety-priority-dispute-2024',
        text: 'A former OpenAI safety lead said safety had taken a backseat to product launches, signaling internal governance and prioritization friction.',
        textDe: 'Ein ehemaliger OpenAI-Safety-Lead sagte, Sicherheit habe gegenueber Produkt-Launches an Prioritaet verloren, was interne Governance- und Priorisierungs-Reibungen signalisiert.',
        severity: 'moderate',
        date: '2024-05-17',
        sourceUrl: 'https://apnews.com/article/8a7ba341e06a66e9a7935bb06214edcb',
      },
      {
        id: 'openai-output-competition-restriction',
        text: 'OpenAI terms restrict using output to develop models that compete with OpenAI, which increases long-term strategic lock-in risk.',
        textDe: 'Die OpenAI-Bedingungen beschraenken die Nutzung von Output fuer konkurrierende Modelle und erhoehen damit langfristiges strategisches Lock-in-Risiko.',
        severity: 'moderate',
        sourceUrl: 'https://openai.com/policies/terms-of-use/',
      },
    ],
  },
  'google-search': {
    trustScore: 2.0,
    description:
      'US-operated search platform with strong engineering depth, but ad-driven data monetization, AI training defaults, and major legal findings materially reduce trust.',
    descriptionDe:
      'US-Suchplattform mit starker technischer Reife, deren Vertrauen aber durch werbegetriebene Datennutzung, KI-Trainings-Defaults und schwere Rechtsbefunde deutlich sinkt.',
    reservations: [
      {
        id: 'search-ad-surveillance-business-model',
        text: 'Google Search is monetized via advertising and personalization signals, creating a structural conflict with strict privacy-first expectations.',
        textDe: 'Google Search wird ueber Werbung und Personalisierungssignale monetarisiert, was einen strukturellen Konflikt mit strikten Privacy-First-Erwartungen schafft.',
        severity: 'major',
        sourceUrl: 'https://policies.google.com/privacy',
      },
      {
        id: 'search-default-ai-training-controls',
        text: 'Google states Search interactions can be used to improve generative AI models, including signed-out searches and aggregated/anonymized usage even after certain controls are disabled.',
        textDe: 'Google dokumentiert, dass Search-Interaktionen zur Verbesserung generativer KI genutzt werden koennen, einschliesslich ausgeloggter Suchen und aggregierter/anonymisierter Nutzung auch bei deaktivierten Kontrollen.',
        severity: 'major',
        sourceUrl: 'https://support.google.com/websearch/answer/14901683',
      },
      {
        id: 'search-antitrust-monopoly-finding',
        text: 'The US court found Google maintained an illegal search monopoly, and remedies now impose restrictions tied to default-distribution and data access.',
        textDe: 'Das US-Gericht stellte fest, dass Google ein illegales Suchmonopol aufrechterhalten hat; die verhaengten Auflagen betreffen unter anderem Default-Distribution und Datenzugang.',
        severity: 'major',
        date: '2024-08-05',
        sourceUrl: 'https://apnews.com/article/846916fda0943c5fa359385044a02c8b',
      },
      {
        id: 'search-major-privacy-settlement-2025',
        text: 'Google agreed to a $1.375B Texas settlement over privacy allegations, including location tracking and incognito-related practices.',
        textDe: 'Google stimmte in Texas einem Vergleich ueber 1,375 Mrd. USD wegen Privacy-Vorwuerfen zu, einschliesslich Standort-Tracking und Incognito-bezogener Praktiken.',
        severity: 'major',
        date: '2025-05-09',
        sourceUrl: 'https://apnews.com/article/8097e181cc7cb8522781db8a9a897eea',
      },
      {
        id: 'search-us-controller-global-processing',
        text: 'Google privacy terms describe global processing and specify Google LLC as data controller for information indexed and displayed in Search regardless of user location.',
        textDe: 'Googles Datenschutzhinweise beschreiben globale Verarbeitung und benennen Google LLC als Data Controller fuer in Search indexierte und angezeigte Informationen unabhaengig vom Standort des Nutzers.',
        severity: 'moderate',
        sourceUrl: 'https://policies.google.com/privacy',
      },
    ],
  },
  asana: {
    trustScore: 4.2,
    description:
      'US-operated project management platform with strong compliance and security tooling, but trust is reduced by a recent cross-tenant MCP exposure incident, enterprise-tier portability limits, and governance/business-pressure signals.',
    descriptionDe:
      'US-Projektmanagement-Plattform mit starker Compliance- und Security-Tooling-Basis; das Vertrauen sinkt jedoch durch einen juengsten MCP-Cross-Tenant-Exposure-Vorfall, tier-gebundene Portabilitaetsgrenzen und Governance-/Business-Risikofaktoren.',
    reservations: [
      {
        id: 'asana-mcp-cross-tenant-exposure-2025',
        text: 'Asana disclosed a June 2025 MCP server flaw that could expose data across organizations, requiring shutdown and connection resets for remediation.',
        textDe: 'Asana legte im Juni 2025 einen MCP-Server-Fehler offen, der Daten zwischen Organisationen exponieren konnte; zur Behebung waren Abschaltung und Verbindungs-Resets noetig.',
        severity: 'major',
        date: '2025-06-04',
        sourceUrl: 'https://www.bleepingcomputer.com/news/security/asana-warns-mcp-ai-feature-exposed-customer-data-to-other-orgs/',
      },
      {
        id: 'asana-organization-export-enterprise-tier-gating',
        text: 'Asana developer documentation ties organization-level export access to service-account authentication, an Enterprise-tier feature, creating portability gaps for lower tiers.',
        textDe: 'Die Asana-Entwicklerdokumentation koppelt Organisations-Exporte an Service-Account-Authentifizierung (Enterprise-Tier) und erzeugt damit Portabilitaetsluecken fuer niedrigere Tarife.',
        severity: 'moderate',
        sourceUrl: 'https://developers.asana.com/docs/authentication',
      },
      {
        id: 'asana-dual-class-voting-concentration',
        text: 'Asana proxy filings describe dual-class voting (Class B with 10 votes per share), concentrating control and reducing governance predictability for customers.',
        textDe: 'Asana-Proxy-Filings beschreiben Dual-Class-Stimmrechte (Class B mit 10 Stimmen je Aktie), was Kontrolle konzentriert und Governance-Vorhersehbarkeit fuer Kunden reduziert.',
        severity: 'moderate',
        sourceUrl: 'https://www.sec.gov/Archives/edgar/data/1477720/000119312525112359/d806157ddef14a.htm',
      },
      {
        id: 'asana-support-response-backlog-signals',
        text: 'Trustpilot review patterns repeatedly mention delayed support responses and billing-friction experiences, signaling customer-support trust costs.',
        textDe: 'In Trustpilot-Reviewmustern werden wiederholt verzoegerte Support-Antworten und Billing-Reibungen genannt, was auf relevante Customer-Support-Trust-Kosten hindeutet.',
        severity: 'moderate',
        sourceUrl: 'https://www.trustpilot.com/review/www.asana.com',
      },
      {
        id: 'asana-net-loss-and-retention-pressure-2025',
        text: 'Asana\'s 2025 Form 10-K reports continued large net losses and sub-100% dollar-based net retention, increasing long-term business-pressure risk.',
        textDe: 'Der Asana-Form-10-K-Bericht 2025 zeigt weiterhin hohe Nettoverluste und eine Dollar-based Net Retention unter 100 %, was langfristigen Business-Druck erhoeht.',
        severity: 'moderate',
        date: '2025-01-31',
        sourceUrl: 'https://www.sec.gov/ix?doc=/Archives/edgar/data/1477720/000147772025000010/asana-20250131.htm',
      },
      {
        id: 'asana-desktop-cve-footprint',
        text: 'Public CVE records for Asana Desktop include issues such as CVE-2022-26877 and CVE-2023-49314, indicating endpoint-side risk when desktop clients are in scope.',
        textDe: 'Oeffentliche CVE-Records fuer Asana Desktop enthalten Schwachstellen wie CVE-2022-26877 und CVE-2023-49314 und zeigen damit endpoint-seitige Risiken, wenn Desktop-Clients im Scope sind.',
        severity: 'moderate',
        date: '2022-04-09',
        sourceUrl: 'https://www.cve.org/CVERecord?id=CVE-2022-26877',
      },
      {
        id: 'asana-forum-support-delay-signals',
        text: 'Asana community forum threads report support delays, including reports of response times of up to around one week.',
        textDe: 'Threads im Asana-Community-Forum berichten von Supportverzoegerungen, darunter Hinweise auf Antwortzeiten von bis zu etwa einer Woche.',
        severity: 'moderate',
        date: '2025-04-16',
        sourceUrl: 'https://forum.asana.com/t/response-time-from-support/1051231',
      },
      {
        id: 'asana-seat-increment-billing-structure',
        text: 'Asana pricing FAQ states plans for smaller teams are designed for 2 members and additional seats scale in fixed increments, which can create billing-fit friction for very small teams.',
        textDe: 'Die Asana-Preis-FAQ nennt, dass Plaene fuer kleinere Teams auf 2 Mitglieder ausgelegt sind und zusaetzliche Seats in festen Schritten wachsen, was bei sehr kleinen Teams zu Billing-Fit-Reibung fuehren kann.',
        severity: 'minor',
        sourceUrl: 'https://asana.com/pricing',
      },
    ],
  },
  vimeo: {
    trustScore: 4.4,
    description:
      'US-operated video platform with strong security/compliance signaling and clear creator-content ownership language, but trust is reduced by post-acquisition workforce shock, pricing/renewal friction, and portability/support risks.',
    descriptionDe:
      'US-Video-Plattform mit starken Security-/Compliance-Signalen und klarer Content-Ownership-Position fuer Creator; das Vertrauen sinkt jedoch durch den Personalabbau nach der Uebernahme, Pricing-/Renewal-Reibung sowie Portabilitaets- und Support-Risiken.',
    reservations: [
      {
        id: 'vimeo-bending-spoons-acquisition-2025',
        text: 'Vimeo entered a $1.38B all-cash agreement to be acquired by Bending Spoons in September 2025, shifting strategic control to a private acquirer.',
        textDe: 'Vimeo schloss im September 2025 eine All-Cash-Uebernahme ueber 1,38 Mrd. USD durch Bending Spoons ab, wodurch die strategische Kontrolle auf einen privaten Eigentuemer ueberging.',
        severity: 'moderate',
        date: '2025-09-10',
        sourceUrl: 'https://investors.vimeo.com/news-releases/news-release-details/vimeo-enters-definitive-agreement-be-acquired-bending-spoons-138',
      },
      {
        id: 'vimeo-post-acquisition-layoffs-2026',
        text: 'Post-acquisition reporting says a large portion of Vimeo staff was laid off, and Bending Spoons confirmed layoffs to The Verge.',
        textDe: 'Berichte nach der Uebernahme beschreiben Entlassungen eines grossen Teils der Vimeo-Belegschaft; Bending Spoons bestaetigte Kuendigungen gegenueber The Verge.',
        severity: 'major',
        date: '2026-01-22',
        sourceUrl: 'https://www.theverge.com/news/866238/vimeo-layoffs-bending-spoons-acquisition',
      },
      {
        id: 'vimeo-pre-acquisition-workforce-reduction-2025',
        text: 'Vimeo disclosed in a September 3, 2025 8-K that it reduced global full-time headcount by just under 10% before the buyout closed.',
        textDe: 'Vimeo legte in einem 8-K vom 3. September 2025 offen, dass die globale Vollzeitbelegschaft bereits vor Abschluss der Uebernahme um knapp 10 % reduziert wurde.',
        severity: 'moderate',
        date: '2025-09-03',
        sourceUrl: 'https://investors.vimeo.com/sec-filings/sec-filing/8-k/0001104659-25-086746',
      },
      {
        id: 'vimeo-owner-layoff-pattern-across-acquisitions',
        text: 'Reporting on Bending Spoons\' WeTransfer acquisition documented plans to cut about 75% of staff, indicating a broader post-acquisition cost-cutting pattern.',
        textDe: 'Die Berichterstattung zur WeTransfer-Uebernahme durch Bending Spoons dokumentierte Plaene fuer einen Stellenabbau von rund 75 %, was auf ein breiteres Post-Merger-Cost-Cutting-Muster hindeutet.',
        severity: 'moderate',
        date: '2024-09-08',
        sourceUrl: 'https://techcrunch.com/2024/09/08/bending-spoons-plans-to-lay-off-75-of-wetransfer-staff-after-acquisition/',
      },
      {
        id: 'vimeo-price-increase-structure-change',
        text: 'Vimeo states it changed pricing and plan structure and calls it the first price increase for existing subscribers in over 10 years.',
        textDe: 'Vimeo gibt an, Preis- und Planstruktur geaendert zu haben, und bezeichnet dies als erste Preiserhoehung fuer bestehende Abonnenten seit ueber 10 Jahren.',
        severity: 'moderate',
        sourceUrl: 'https://help.vimeo.com/hc/en-us/articles/29103675323153-Why-did-my-price-increase',
      },
      {
        id: 'vimeo-storage-and-upload-limits-by-plan',
        text: 'Vimeo plan documentation describes lifetime storage caps, video-count limits, or weekly upload quotas depending on plan and signup date, creating upgrade pressure and lock-in risk.',
        textDe: 'Die Vimeo-Plan-Dokumentation beschreibt je nach Tarif und Anmeldedatum Lifetime-Speicherlimits, Videoanzahl-Grenzen oder woechentliche Upload-Quoten, was Upgrade-Druck und Lock-in-Risiken erzeugt.',
        severity: 'moderate',
        sourceUrl: 'https://help.vimeo.com/hc/en-us/articles/26238558836881-What-is-the-difference-between-upload-quota-video-usage-and-total-storage',
      },
      {
        id: 'vimeo-auto-renewal-refund-friction',
        text: 'Self-serve subscriptions auto-renew by default, and cancellation guidance says refunds are not automatically issued.',
        textDe: 'Self-Serve-Abos verlaengern sich standardmaessig automatisch, und die Kuendigungsdokumentation nennt, dass Rueckerstattungen nicht automatisch erfolgen.',
        severity: 'moderate',
        sourceUrl: 'https://help.vimeo.com/hc/en-us/articles/12425433330577-How-to-cancel-my-Vimeo-subscription',
      },
      {
        id: 'vimeo-community-billing-support-complaints',
        text: 'Recent Trustpilot reviews repeatedly mention unexpected renewal charges, steep pricing changes, and support-response friction (community signal).',
        textDe: 'Aktuelle Trustpilot-Bewertungen nennen wiederholt unerwartete Verlaengerungsabbuchungen, starke Preisveraenderungen und Support-Reibung (Community-Signal).',
        severity: 'moderate',
        sourceUrl: 'https://www.trustpilot.com/review/www.vimeo.com',
      },
      {
        id: 'vimeo-no-bulk-library-download',
        text: 'Vimeo help documentation says there is currently no option to bulk-download videos from a library, increasing migration friction for large catalogs.',
        textDe: 'Die Vimeo-Hilfedokumentation nennt aktuell keine Moeglichkeit fuer Bulk-Downloads aus der Bibliothek, was Migrationsaufwand bei grossen Katalogen erhoeht.',
        severity: 'moderate',
        sourceUrl: 'https://help.vimeo.com/hc/en-us/articles/29641523095057-How-to-download-a-video-from-my-library',
      },
      {
        id: 'vimeo-ai-third-party-provider-access',
        text: 'Vimeo\'s AI terms say third-party providers may access AI inputs/outputs, although Vimeo states those providers agreed not to use that data for model training.',
        textDe: 'Die Vimeo-AI-Bedingungen nennen, dass Drittanbieter Zugriff auf AI-Inputs/-Outputs haben koennen; zugleich gibt Vimeo an, dass diese Daten nicht zum Modelltraining verwendet werden duerfen.',
        severity: 'moderate',
        sourceUrl: 'https://vimeo.com/legal/service-terms/ai',
      },
      {
        id: 'vimeo-us-based-global-data-processing',
        text: 'Vimeo\'s privacy policy states it is US-based and may transfer/process data in the US and other countries, relying on SCCs and DPF transfer mechanisms.',
        textDe: 'Die Vimeo-Datenschutzerklaerung nennt einen US-Sitz und die Verarbeitung/Uebertragung von Daten in die USA und andere Laender auf Basis von SCC- und DPF-Mechanismen.',
        severity: 'major',
        sourceUrl: 'https://vimeo.com/privacy',
      },
      {
        id: 'vimeo-as-is-availability-disclaimer',
        text: 'Vimeo Terms of Service provide services on an "as is" and "as available" basis and disclaim uninterrupted or error-free operation.',
        textDe: 'Die Vimeo-Nutzungsbedingungen stellen die Dienste auf "as is"/"as available"-Basis bereit und schliessen unterbrechungsfreien sowie fehlerfreien Betrieb aus.',
        severity: 'minor',
        sourceUrl: 'https://vimeo.com/legal',
      },
    ],
  },
  '1password': {
    trustScore: 4.8,
    description:
      'North America-operated password manager with unusually strong independent security testing and transparent advisory practices, but trust is reduced by local-malware attack surface, third-party dependency incidents, and limited public access to full compliance artifacts.',
    descriptionDe:
      'Nordamerikanischer Passwortmanager mit ungewoehnlich starker unabhaengiger Security-Pruefung und transparenter Advisory-Praxis; das Vertrauen sinkt jedoch durch lokale Malware-Angriffsflaechen, Drittanbieter-Abhaengigkeiten und nur eingeschraenkt oeffentlich verfuegbare Compliance-Artefakte.',
    reservations: [
      {
        id: '1password-local-exfiltration-cve-2024-42218',
        text: '1Password disclosed CVE-2024-42218 as a local-attack path where malicious software on a compromised Mac could exfiltrate vault items and account-derived secrets from outdated app versions before 8.10.38.',
        textDe: '1Password veroeffentlichte CVE-2024-42218 als lokalen Angriffsweg, bei dem Schadsoftware auf einem kompromittierten Mac Vault-Items und abgeleitete Account-Secrets aus veralteten App-Versionen vor 8.10.38 exfiltrieren konnte.',
        severity: 'major',
        sourceUrl: 'https://support.1password.com/kb/202408/',
      },
      {
        id: '1password-okta-support-system-incident-2023',
        text: '1Password reported suspicious activity on its Okta tenant during the 2023 Okta support-system breach window, underscoring dependency risk in identity and support-tool supply chains even when customer vault data is not reported as accessed.',
        textDe: '1Password meldete waehrend des Okta-Support-System-Incidents 2023 verdaechtige Aktivitaet auf dem eigenen Okta-Tenant; das unterstreicht Abhaengigkeitsrisiken in Identity- und Support-Tool-Lieferketten, auch wenn kein Zugriff auf Kundenvaults gemeldet wurde.',
        severity: 'moderate',
        date: '2023-09-29',
        sourceUrl: 'https://1password.com/blog/okta-incident',
      },
      {
        id: '1password-compliance-artifacts-gated-access',
        text: '1Password states SOC 2 Type II and ISO certifications, but key assurance artifacts are distributed primarily through request/Trust Center workflows rather than fully open public publication.',
        textDe: '1Password nennt SOC-2-Type-II- und ISO-Zertifizierungen, verteilt zentrale Assurance-Artefakte jedoch primaer ueber Request-/Trust-Center-Prozesse statt vollstaendig oeffentlicher Publikation.',
        severity: 'moderate',
        sourceUrl: 'https://support.1password.com/security-assessments/',
      },
      {
        id: '1password-region-change-manual-migration-friction',
        text: 'Changing account region requires creating a new account and manually copying data, which adds operational migration and lock-in friction for larger deployments.',
        textDe: 'Ein Regionswechsel erfordert die Erstellung eines neuen Accounts und das manuelle Kopieren von Daten, was fuer groessere Deployments operative Migrations- und Lock-in-Reibung erzeugt.',
        severity: 'moderate',
        sourceUrl: 'https://support.1password.com/regions/',
      },
      {
        id: '1password-open-source-scope-limited-to-tooling',
        text: '1Password publishes open-source SDK/CLI and integration tooling, but public open-source coverage does not extend to the full hosted password-manager stack used by most end users.',
        textDe: '1Password veroeffentlicht Open-Source-SDK-/CLI- und Integrations-Tooling, die oeffentliche Open-Source-Abdeckung reicht jedoch nicht bis zum vollstaendigen gehosteten Passwortmanager-Stack fuer die meisten Endnutzer.',
        severity: 'moderate',
        sourceUrl: 'https://developer.1password.com/docs/open-source-apps/',
      },
      {
        id: '1password-local-integration-hijack-cve-2024-42219',
        text: '1Password disclosed CVE-2024-42219 where a malicious local process on macOS could bypass inter-process protections and impersonate trusted integrations like the browser extension or CLI.',
        textDe: '1Password veroeffentlichte CVE-2024-42219, bei dem ein lokaler Schadprozess unter macOS Inter-Process-Schutzmechanismen umgehen und vertrauenswuerdige Integrationen wie Browser-Extension oder CLI imitieren konnte.',
        severity: 'major',
        sourceUrl: 'https://support.1password.com/kb/202408a/',
      },
      {
        id: '1password-libwebp-supply-chain-cve-2023-4863',
        text: '1Password reported impact from the 2023 libwebp/Chrome component vulnerability (CVE-2023-4863), showing inherited risk from third-party dependency chains.',
        textDe: '1Password meldete Betroffenheit durch die libwebp-/Chrome-Komponentenluecke von 2023 (CVE-2023-4863) und zeigt damit geerbte Risiken aus Drittanbieter-Abhaengigkeiten.',
        severity: 'moderate',
        sourceUrl: 'https://support.1password.com/kb/202309/',
      },
    ],
  },
  whatsapp: {
    trustScore: 3.4,
    description:
      'US-operated messenger with strong default end-to-end encryption for message content, but trust is reduced by Meta\'s ad-driven ownership model, metadata exposure risks, and repeated regulatory pressure on data-sharing transparency.',
    descriptionDe:
      'US-Messenger mit starker standardmaessiger Ende-zu-Ende-Verschluesselung fuer Nachrichteninhalte; das Vertrauen sinkt jedoch durch Metas werbegetriebenes Eigentuermodell, Metadatenrisiken und wiederkehrenden regulatorischen Druck bei Data-Sharing-Transparenz.',
    reservations: [
      {
        id: 'whatsapp-meta-ad-tech-majority-control',
        text: 'Meta reports that substantially all of its revenue comes from advertising, creating structural monetization incentives that can conflict with strict privacy-first expectations for messaging products.',
        textDe: 'Meta berichtet, dass im Wesentlichen der gesamte Umsatz aus Werbung stammt; dadurch entstehen strukturelle Monetarisierungsanreize, die mit strikten Privacy-First-Erwartungen an Messenger kollidieren koennen.',
        severity: 'major',
        sourceUrl: 'https://www.sec.gov/ix?doc=/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm',
      },
      {
        id: 'whatsapp-eea-global-data-transfers',
        text: 'WhatsApp\'s EEA privacy policy states that information can be transferred and processed outside the EEA, including in the United States, via mechanisms such as DPF and SCCs.',
        textDe: 'Die EWR-Datenschutzerklaerung von WhatsApp beschreibt, dass Informationen ausserhalb des EWR, einschliesslich in die USA, ueber Mechanismen wie DPF und SCC verarbeitet und uebertragen werden koennen.',
        severity: 'major',
        sourceUrl: 'https://www.whatsapp.com/legal/privacy-policy-eea/',
      },
      {
        id: 'whatsapp-gdpr-transparency-fine-2021',
        text: 'The EDPB required amendments to the Irish authority\'s draft decision, and WhatsApp was fined EUR 225M over GDPR transparency and data-sharing disclosures.',
        textDe: 'Der EDSA verlangte Nachbesserungen am Entwurf der irischen Aufsicht; anschliessend wurde gegen WhatsApp eine Strafe von 225 Mio. EUR wegen DSGVO-Transparenz- und Data-Sharing-Offenlegung verhaengt.',
        severity: 'major',
        date: '2021-09-02',
        sourceUrl: 'https://www.edpb.europa.eu/news/news/2021/edpb-requests-irish-sa-amends-whatsapp-decision-clarifications-transparency-and_en',
      },
      {
        id: 'whatsapp-contact-discovery-enumeration-risk',
        text: 'Academic research showed WhatsApp contact discovery enabled large-scale account enumeration, exposing metadata and targeting risk despite encrypted message content.',
        textDe: 'Wissenschaftliche Forschung zeigte, dass die WhatsApp-Kontaktsuche grossflaechige Account-Enumeration ermoeglichte und damit trotz verschluesselter Nachrichteninhalte Metadaten- und Targeting-Risiken offenlegte.',
        severity: 'major',
        date: '2025-11-25',
        sourceUrl: 'https://arxiv.org/abs/2509.15680',
      },
      {
        id: 'whatsapp-exploited-cve-2025-55177',
        text: 'CVE-2025-55177 on linked-device synchronization was listed in CISA KEV via NVD references, signaling real-world exploitation pressure against high-value targets.',
        textDe: 'CVE-2025-55177 bei der Linked-Device-Synchronisierung wurde ueber NVD-Referenzen im CISA-KEV-Katalog gelistet und signalisiert realen Ausnutzungsdruck gegen hochwertige Ziele.',
        severity: 'major',
        sourceUrl: 'https://nvd.nist.gov/vuln/detail/CVE-2025-55177',
      },
      {
        id: 'whatsapp-business-sdk-archived',
        text: 'WhatsApp\'s official Business Platform Node.js SDK repository is archived and read-only, and the repository states Meta Platforms licensing rather than a standard OSI license.',
        textDe: 'Das offizielle WhatsApp-Business-Platform-Node.js-SDK-Repository ist archiviert und nur lesbar; zudem nennt das Repository eine Meta-Platforms-Lizenz statt einer standardisierten OSI-Lizenz.',
        severity: 'moderate',
        date: '2023-06-07',
        sourceUrl: 'https://github.com/WhatsApp/WhatsApp-Nodejs-SDK',
      },
      {
        id: 'whatsapp-spyware-litigation-signal',
        text: 'NSO spyware litigation produced a 2025 damages verdict for WhatsApp users, reinforcing persistent high-grade offensive targeting pressure around the platform.',
        textDe: 'Die NSO-Spyware-Litigation fuehrte 2025 zu einem Schadensersatzurteil zugunsten von WhatsApp-Nutzern und unterstreicht den anhaltenden Druck durch hochentwickelte offensive Angriffe auf die Plattform.',
        severity: 'moderate',
        date: '2025-05-06',
        sourceUrl: 'https://www.theverge.com/news/662242/meta-nso-group-pegasus-whatsapp-hack-damages',
      },
      {
        id: 'whatsapp-former-security-chief-lawsuit-2025',
        text: 'Reporting on a 2025 lawsuit by WhatsApp\'s former security lead alleges retaliation after raising privacy and security concerns, signaling governance and security-prioritization risk.',
        textDe: 'Berichte ueber eine Klage der ehemaligen WhatsApp-Sicherheitsleitung aus 2025 werfen Vergeltung nach internen Privacy- und Security-Hinweisen vor und signalisieren Governance- sowie Priorisierungsrisiken bei Sicherheit.',
        severity: 'moderate',
        date: '2025-09-24',
        sourceUrl: 'https://arstechnica.com/security/2025/09/former-whatsapp-security-boss-sues-meta-for-systemic-cybersecurity-failures/',
      },
      {
        id: 'whatsapp-updates-tab-ads-2025',
        text: 'WhatsApp introduced ads and paid channel promotion features in the Updates surface in 2025, increasing long-term monetization pressure around engagement and account signals.',
        textDe: 'WhatsApp fuehrte 2025 im Updates-Bereich Werbung und bezahlte Channel-Promotions ein, was den langfristigen Monetarisierungsdruck rund um Engagement- und Account-Signale erhoeht.',
        severity: 'moderate',
        sourceUrl: 'https://apnews.com/article/whatsapp-ads-meta-updates-channels-7f91664f2f31549fc80e4155af573e2d',
      },
    ],
  },
  yahoo: {
    trustScore: 2.1,
    description:
      'US-operated email service with broad feature coverage, but trust is materially reduced by inbox-content analysis for advertising, AI-provider data-sharing consent language, and legacy mega-breach disclosure failures.',
    descriptionDe:
      'US-E-Mail-Dienst mit breitem Funktionsumfang, dessen Vertrauen jedoch durch dokumentierte Inhaltsanalyse des Postfachs fuer Werbung, Einwilligungsklauseln zur Datenweitergabe an KI-Anbieter und historische Mega-Breach-Disclosure-Defizite deutlich sinkt.',
    reservations: [
      {
        id: 'yahoo-mail-content-analysis-for-advertising',
        text: 'Yahoo privacy disclosures state that communications products may analyze and store incoming and outgoing email content to deliver, personalize, and develop services and advertising.',
        textDe: 'Yahoo-Datenschutzhinweise nennen, dass Kommunikationsprodukte eingehende und ausgehende E-Mail-Inhalte analysieren und speichern koennen, um Dienste und Werbung bereitzustellen, zu personalisieren und weiterzuentwickeln.',
        severity: 'major',
        sourceUrl: 'https://legal.yahoo.com/us/en/yahoo/privacy/products/communications/index.html',
      },
      {
        id: 'yahoo-mail-third-party-ai-provider-inbox-consent',
        text: 'Yahoo terms state that using the services includes consent to share account data, including Yahoo Mail inbox data, with third-party AI providers for feature enhancement.',
        textDe: 'Die Yahoo-Bedingungen nennen, dass die Nutzung der Dienste die Einwilligung zur Weitergabe von Kontodaten, einschliesslich Yahoo-Mail-Postfachdaten, an Drittanbieter von KI zur Funktionsverbesserung umfasst.',
        severity: 'major',
        sourceUrl: 'https://legal.yahoo.com/us/en/yahoo/terms/otos/index.html',
      },
      {
        id: 'yahoo-mail-delayed-breach-disclosure-sec-2018',
        text: 'The SEC charged Altaba in 2018 for failing to timely disclose Yahoo\'s 2014 breach and announced a $35M penalty.',
        textDe: 'Die SEC erhob 2018 Vorwuerfe gegen Altaba wegen nicht rechtzeitiger Offenlegung von Yahoos Breach aus 2014 und kuendigte eine Strafe von 35 Mio. USD an.',
        severity: 'major',
        date: '2018-04-24',
        sourceUrl: 'https://www.sec.gov/news/press-release/2018-71',
      },
      {
        id: 'yahoo-mail-major-breach-settlement-2018',
        text: 'Reuters reported in 2018 that Yahoo agreed to a revised $117.5M settlement for users affected by historic mega-breaches.',
        textDe: 'Reuters berichtete 2018, dass Yahoo einem angepassten Vergleich ueber 117,5 Mio. USD fuer von historischen Mega-Breaches betroffene Nutzer zustimmte.',
        severity: 'major',
        date: '2018-10-23',
        sourceUrl: 'https://www.reuters.com/article/business/yahoo-agrees-to-revised-117-5-million-settlement-of-data-breach-lawsuit-idUSKCN1MX2V5/',
      },
      {
        id: 'yahoo-mail-cybersecurity-layoffs-outsourced-red-team-2024',
        text: 'TechCrunch reported in December 2024 that Yahoo laid off around a quarter of its cybersecurity team and outsourced red-team operations.',
        textDe: 'TechCrunch berichtete im Dezember 2024, dass Yahoo rund ein Viertel seines Cybersecurity-Teams entliess und Red-Team-Operationen auslagerte.',
        severity: 'moderate',
        date: '2024-12-12',
        sourceUrl: 'https://techcrunch.com/2024/12/12/yahoo-lays-off-a-quarter-of-its-cybersecurity-team-including-cisos-and-red-team/',
      },
      {
        id: 'yahoo-mail-unacknowledged-email-incidents-2024-2026',
        text: 'StatusGator incident tracking shows repeated Yahoo Mail and sign-in disruptions marked as not publicly acknowledged, reducing confidence in incident communication quality.',
        textDe: 'Das StatusGator-Incident-Tracking zeigt wiederholte Yahoo-Mail- und Sign-in-Stoerungen, die als oeffentlich nicht bestaetigt markiert sind; das reduziert das Vertrauen in die Incident-Kommunikation.',
        severity: 'moderate',
        sourceUrl: 'https://statusgator.com/services/yahoo-mail',
      },
      {
        id: 'yahoo-mail-broad-content-license-and-service-discretion',
        text: 'Yahoo terms grant broad licensing rights over submitted content and permit service/functionality changes or suspension, with no guarantee of uninterrupted operation.',
        textDe: 'Die Yahoo-Bedingungen gewaehren breite Lizenzrechte an eingereichten Inhalten und erlauben Aenderungen oder Aussetzung von Diensten/Funktionen ohne Garantie unterbrechungsfreien Betriebs.',
        severity: 'moderate',
        sourceUrl: 'https://legal.yahoo.com/us/en/yahoo/terms/otos/index.html',
      },
      {
        id: 'yahoo-mail-cross-border-transfers-us-india',
        text: 'Yahoo\'s EEA privacy policy states personal data may be processed in multiple countries, including the United States and India.',
        textDe: 'Yahoos EWR-Datenschutzerklaerung nennt, dass personenbezogene Daten in mehreren Laendern verarbeitet werden koennen, einschliesslich der USA und Indiens.',
        severity: 'moderate',
        sourceUrl: 'https://legal.yahoo.com/ie/en/yahoo/privacy/index.html',
      },
      {
        id: 'yahoo-mail-storage-limit-20gb',
        text: 'Yahoo Help states that free Yahoo Mail accounts include 20 GB of storage and that delivery can be limited when mailbox limits are exceeded.',
        textDe: 'Yahoo Help nennt, dass kostenlose Yahoo-Mail-Konten 20 GB Speicher umfassen und die Zustellung eingeschraenkt werden kann, wenn Postfachlimits ueberschritten werden.',
        severity: 'moderate',
        sourceUrl: 'https://help.yahoo.com/kb/yahoo-mail/resolve-yahoo-mail-storage-issues-sln4075.html',
      },
      {
        id: 'yahoo-mail-inactivity-deletion-policy',
        text: 'Yahoo privacy policy states account inactivity windows that can trigger mailbox deactivation and deletion processes for dormant users.',
        textDe: 'Die Yahoo-Datenschutzerklaerung nennt Inaktivitaetsfristen, die bei ruhenden Konten Deaktivierungs- und Loeschprozesse fuer Postfaecher ausloesen koennen.',
        severity: 'minor',
        sourceUrl: 'https://legal.yahoo.com/ie/en/yahoo/privacy/index.html',
      },
      {
        id: 'yahoo-mail-connectid-privacy-litigation-2025',
        text: 'MediaPost reported an April 2025 privacy lawsuit alleging Yahoo ConnectID tracks users via encrypted email identifiers without valid consent.',
        textDe: 'MediaPost berichtete im April 2025 ueber eine Privacy-Klage mit dem Vorwurf, Yahoo ConnectID verfolge Nutzer ueber verschluesselte E-Mail-Identifier ohne wirksame Einwilligung.',
        severity: 'moderate',
        date: '2025-04-07',
        sourceUrl: 'https://www.mediapost.com/publications/article/404862/yahoo-hit-with-privacy-suit-over-connectid.html',
      },
      {
        id: 'yahoo-mail-temporary-error-15-outage-2025',
        text: 'A July 24, 2025 outage disrupted Yahoo Mail access for many users and surfaced recurring "Temporary Error 15" failures during the incident.',
        textDe: 'Ein Ausfall am 24. Juli 2025 stoerte den Yahoo-Mail-Zugriff fuer viele Nutzer und zeigte waehrend des Vorfalls wiederkehrende "Temporary Error 15"-Fehler.',
        severity: 'moderate',
        date: '2025-07-24',
        sourceUrl: 'https://www.tomsguide.com/computing/live/yahoo-mail-down-for-thousands-live-updates-on-outage',
      },
      {
        id: 'yahoo-mail-aol-cyber-monday-outage-2025',
        text: 'TechRadar documented another major Yahoo/AOL mail disruption on December 1, 2025 with login and delivery issues and limited ETA transparency.',
        textDe: 'TechRadar dokumentierte am 1. Dezember 2025 einen weiteren groesseren Yahoo-/AOL-Mail-Ausfall mit Login- und Zustellproblemen bei begrenzter ETA-Transparenz.',
        severity: 'moderate',
        date: '2025-12-01',
        sourceUrl: 'https://www.techradar.com/news/live/yahoo-aol-email-outage-december-2025',
      },
      {
        id: 'yahoo-mail-openpgp-extension-archived-2019',
        text: 'Yahoo\'s former OpenPGP end-to-end project is archived and read-only since July 2019, signaling no active Yahoo-native encrypted-mail roadmap.',
        textDe: 'Yahoos frueheres OpenPGP-Ende-zu-Ende-Projekt ist seit Juli 2019 archiviert und nur lesbar, was auf keine aktive Yahoo-native Encrypted-Mail-Roadmap hinweist.',
        severity: 'moderate',
        date: '2019-07-15',
        sourceUrl: 'https://github.com/YahooArchive/end-to-end',
      },
      {
        id: 'yahoo-mail-no-support-commitment-in-terms',
        text: 'Yahoo terms state that support may not be provided and services are offered "as-is", reducing contractual assurance for critical-reliability scenarios.',
        textDe: 'Die Yahoo-Bedingungen nennen, dass Support moeglicherweise nicht bereitgestellt wird und Dienste "as-is" angeboten werden, was die vertragliche Absicherung fuer kritische Zuverlaessigkeitsszenarien reduziert.',
        severity: 'minor',
        sourceUrl: 'https://legal.yahoo.com/us/en/yahoo/terms/otos/index.html',
      },
    ],
  },
  paypal: {
    trustScore: 2.3,
    description:
      'US-operated payments platform with strong scale and compliance signaling, but trust is materially reduced by a recent cybersecurity settlement, AI training on personal data, cross-border processing exposure, and recurring governance/operations friction.',
    descriptionDe:
      'US-Zahlungsplattform mit starker Skalierung und Compliance-Signalen, deren Vertrauen jedoch durch einen juengsten Cybersecurity-Vergleich, KI-Training mit Personendaten, grenzueberschreitende Verarbeitung sowie wiederkehrende Governance- und Betriebsfriktionen deutlich sinkt.',
    reservations: [
      {
        id: 'paypal-nydfs-cybersecurity-settlement-2025',
        text: 'New York DFS announced a $2M settlement in January 2025 tied to cybersecurity control failures that exposed sensitive customer tax information.',
        textDe: 'Das New Yorker DFS meldete im Januar 2025 einen Vergleich ueber 2 Mio. USD wegen Cybersecurity-Kontrollfehlern, durch die sensible Steuerdaten von Kunden exponiert wurden.',
        severity: 'major',
        date: '2025-01-23',
        sourceUrl: 'https://www.dfs.ny.gov/reports_and_publications/press_releases/pr20250123',
      },
      {
        id: 'paypal-ai-training-personal-information',
        text: 'PayPal privacy terms state that personal information may be used to train AI models that power PayPal services.',
        textDe: 'Die PayPal-Datenschutzhinweise nennen, dass Personendaten zum Training von KI-Modellen fuer PayPal-Dienste genutzt werden koennen.',
        severity: 'major',
        sourceUrl: 'https://www.paypal.com/us/legalhub/paypal/privacy-full',
      },
      {
        id: 'paypal-cross-border-processing-us',
        text: 'PayPal states that personal information may be transferred and processed outside the user country, including in the United States.',
        textDe: 'PayPal gibt an, dass Personendaten ausserhalb des Nutzerlandes verarbeitet und uebertragen werden koennen, einschliesslich in die USA.',
        severity: 'moderate',
        sourceUrl: 'https://www.paypal.com/us/legalhub/paypal/privacy-full',
      },
      {
        id: 'paypal-account-limits-and-security-interest',
        text: 'PayPal User Agreement allows account limits/holds and includes a security-interest framing for funds in the account.',
        textDe: 'Die PayPal-Nutzungsbedingungen erlauben Kontolimits/Sperren und enthalten eine Security-Interest-Logik fuer Guthaben auf dem Konto.',
        severity: 'moderate',
        sourceUrl: 'https://www.paypal.com/us/legalhub/paypal/useragreement-full',
      },
      {
        id: 'paypal-bundeskartellamt-antitrust-proceeding',
        text: 'Germany\'s Bundeskartellamt opened proceedings in 2023 over PayPal terms that may restrict merchant price steering and surcharge competition.',
        textDe: 'Das Bundeskartellamt leitete 2023 ein Verfahren zu PayPal-Klauseln ein, die Preissteuerung von Haendlern und Aufschlagswettbewerb einschranken koennten.',
        severity: 'moderate',
        date: '2023-01-23',
        sourceUrl: 'https://www.bundeskartellamt.de/SharedDocs/Meldung/EN/Pressemitteilungen/2023/23_01_2023_PayPal.html',
      },
      {
        id: 'paypal-operational-incidents-2026',
        text: 'PayPal\'s public status RSS lists repeated 2026 incident notices across production and sandbox components, including payment tokenization and 3DS impact windows.',
        textDe: 'Der oeffentliche PayPal-Status-RSS-Feed listet 2026 wiederholt Incident-Meldungen ueber Produktions- und Sandbox-Komponenten, inklusive Payment-Tokenization- und 3DS-Beeintraechtigungen.',
        severity: 'moderate',
        date: '2026-01-19',
        sourceUrl: 'https://www.paypal-status.com/feed/rss',
      },
      {
        id: 'paypal-leadership-transition-2026',
        text: 'On February 3, 2026, PayPal announced a CEO transition with interim leadership after a board-led execution review.',
        textDe: 'Am 3. Februar 2026 veroeffentlichte PayPal einen CEO-Wechsel mit Interimsphase nach einer board-getriebenen Ueberpruefung der Umsetzung.',
        severity: 'moderate',
        date: '2026-02-03',
        sourceUrl: 'https://newsroom.paypal-corp.com/2026-02-03-PayPal-Appoints-Enrique-Lores-as-Chief-Executive-Officer-and-David-W-Dorman-as-Independent-Board-Chair',
      },
      {
        id: 'paypal-policy-update-cadence-2026',
        text: 'PayPal\'s Legal Hub shows continuing policy and fee update notices with fixed effective dates, requiring active contractual monitoring.',
        textDe: 'Der Legal Hub von PayPal zeigt fortlaufende Policy- und Gebuehren-Updates mit festen Wirksamkeitsdaten, was aktives Vertrags-Monitoring erfordert.',
        severity: 'minor',
        date: '2026-01-26',
        sourceUrl: 'https://www.paypal.com/us/legalhub/paypal/upcoming-policies-full',
      },
    ],
  },
  shopify: {
    trustScore: 3.7,
    description:
      'US-operated commerce platform with strong security assurance and mature operations, but trust is reduced by insider incident history, broad contractual rights over merchant materials, and privacy complexity from cross-merchant intelligence and AI subprocessors.',
    descriptionDe:
      'US-Commerce-Plattform mit starken Security-Signalen und reifer Betriebsstabilitaet, deren Vertrauen aber durch Insider-Vorfallshistorie, breite Vertragsrechte an Merchant-Materialien sowie Privacy-Komplexitaet durch haendleruebergreifende Datenintelligenz und KI-Unterauftragsverarbeiter sinkt.',
    reservations: [
      {
        id: 'shopify-insider-incident-2020',
        text: 'Shopify disclosed in September 2020 that two rogue support staff accessed customer transactional records for fewer than 200 merchants.',
        textDe: 'Shopify meldete im September 2020, dass zwei rogue Support-Mitarbeiter auf transaktionale Kundendaten von weniger als 200 Haendlern zugegriffen haben.',
        severity: 'major',
        date: '2020-09-22',
        sourceUrl: 'https://community.shopify.com/c/shopify-discussions/what-happened-in-the-recent-data-incident-involving-less-than/td-p/888971',
      },
      {
        id: 'shopify-network-intelligence-cross-merchant-processing',
        text: 'When Shopify Network Intelligence is enabled, customer data is used together with data from other merchants for Enhanced Services, increasing consent and opt-out compliance burden.',
        textDe: 'Wenn Shopify Network Intelligence aktiviert ist, werden Kundendaten zusammen mit Daten anderer Haendler fuer Enhanced Services genutzt, was Consent- und Opt-out-Compliance aufwaendiger macht.',
        severity: 'moderate',
        sourceUrl: 'https://help.shopify.com/en/manual/privacy-and-security/privacy/shopify-network-intelligence-requirements',
      },
      {
        id: 'shopify-sidekick-us-ai-subprocessors',
        text: 'Shopify lists OpenAI, Anthropic, and Microsoft as subprocessors for Sidekick conversational AI, and personal data may be processed when included in prompts or responses.',
        textDe: 'Shopify listet OpenAI, Anthropic und Microsoft als Unterauftragsverarbeiter fuer Sidekick-Conversation-AI; personenbezogene Daten koennen verarbeitet werden, wenn sie in Prompts oder Antworten enthalten sind.',
        severity: 'moderate',
        sourceUrl: 'https://help.shopify.com/en/manual/privacy-and-security/privacy/subprocessors',
      },
      {
        id: 'shopify-broad-materials-license-and-moral-rights-waiver',
        text: 'Terms grant Shopify a broad sublicensable worldwide license over merchant materials and include an irrevocable waiver of moral rights.',
        textDe: 'Die Nutzungsbedingungen gewaehren Shopify eine breite, unterlizenzierbare weltweite Lizenz an Merchant-Materialien und enthalten einen unwiderruflichen Verzicht auf Urheberpersoenlichkeitsrechte.',
        severity: 'major',
        sourceUrl: 'https://www.shopify.com/legal/terms',
      },
      {
        id: 'shopify-no-refunds-on-termination',
        text: 'Shopify terms state that, upon termination, merchants are generally not entitled to refunds of fees.',
        textDe: 'Die Shopify-Bedingungen legen fest, dass bei Vertragsbeendigung grundsaetzlich kein Anspruch auf Rueckerstattung von Gebuehren besteht.',
        severity: 'moderate',
        sourceUrl: 'https://www.shopify.com/legal/terms',
      },
      {
        id: 'shopify-privacy-litigation-briskin-2025',
        text: 'In April 2025, the Ninth Circuit (en banc) reversed dismissal in Briskin v. Shopify and allowed privacy-related claims to proceed on personal-jurisdiction grounds.',
        textDe: 'Im April 2025 hob der Ninth Circuit (en banc) die Abweisung in Briskin v. Shopify auf und liess privacy-bezogene Ansprueche auf Basis der persoenlichen Zustaendigkeit weiterlaufen.',
        severity: 'moderate',
        date: '2025-04-21',
        sourceUrl: 'https://law.justia.com/cases/federal/appellate-courts/ca9/22-15815/22-15815-2025-04-21.html',
      },
      {
        id: 'shopify-international-transfers-required-for-processing',
        text: 'Shopify states that even where certain merchant and customer personal data is stored at rest in Europe, it still relies on international data transfers for processing.',
        textDe: 'Shopify gibt an, dass auch bei Speicherung bestimmter Haendler- und Kundendaten at rest in Europa weiterhin internationale Datentransfers fuer die Verarbeitung erforderlich sind.',
        severity: 'moderate',
        sourceUrl: 'https://help.shopify.com/en/manual/privacy-and-security/privacy/onward-transfers',
      },
      {
        id: 'shopify-us-infrastructure-subprocessor-dependency',
        text: 'Shopify lists core subprocessors such as AWS and Cloudflare in the United States, creating jurisdiction and dependency risk for strict sovereignty requirements.',
        textDe: 'Shopify listet zentrale Unterauftragsverarbeiter wie AWS und Cloudflare in den USA, was fuer strikte Souveraenitaetsanforderungen Jurisdiktions- und Abhaengigkeitsrisiken erzeugt.',
        severity: 'moderate',
        sourceUrl: 'https://help.shopify.com/en/manual/privacy-and-security/privacy/subprocessors',
      },
      {
        id: 'shopify-third-party-service-data-sharing-liability-shift',
        text: 'Shopify terms state that installing third-party services authorizes data sharing to those providers and Shopify disclaims responsibility for third-party disclosure, modification, or deletion.',
        textDe: 'Die Shopify-Bedingungen legen fest, dass die Installation von Drittservices die Datenweitergabe an diese Anbieter erlaubt und Shopify Verantwortung fuer Offenlegung, Aenderung oder Loeschung durch Dritte ausschliesst.',
        severity: 'moderate',
        sourceUrl: 'https://www.shopify.com/legal/terms',
      },
      {
        id: 'shopify-network-intelligence-opt-out-feature-loss',
        text: 'Shopify documents that disabling Network Intelligence can remove access to some apps and features, creating functional trade-offs for stricter privacy configurations.',
        textDe: 'Shopify dokumentiert, dass das Deaktivieren von Network Intelligence den Zugriff auf bestimmte Apps und Funktionen entfernen kann, was funktionale Trade-offs fuer strengere Privacy-Konfigurationen erzeugt.',
        severity: 'minor',
        sourceUrl: 'https://help.shopify.com/en/manual/privacy-and-security/privacy/network-intelligence-services/terms-update-faq',
      },
      {
        id: 'shopify-service-availability-disclaimer',
        text: 'Shopify terms disclaim that services will be uninterrupted, timely, secure, or error-free, requiring merchants to plan for operational resilience.',
        textDe: 'Die Shopify-Bedingungen schliessen aus, dass die Dienste unterbrechungsfrei, rechtzeitig, sicher oder fehlerfrei bereitgestellt werden, weshalb Haendler operative Resilienz einplanen muessen.',
        severity: 'minor',
        sourceUrl: 'https://www.shopify.com/legal/terms',
      },
    ],
  },
  'x-corp': {
    trustScore: 1.3,
    description:
      'US-operated social platform with active vulnerability-reporting channels and significant engineering output, but trust is very low due to repeated privacy enforcement, high-impact identifier exposure history, broad AI-training rights over user content, and unstable governance/API policy changes.',
    descriptionDe:
      'US-Social-Plattform mit aktiven Kanaelen fuer Schwachstellenmeldungen und starker Engineering-Leistung, deren Vertrauen jedoch wegen wiederholter Privacy-Durchsetzung, hochrelevanter Identifier-Exposure-Historie, breiter AI-Training-Rechte an Nutzerinhalten und instabiler Governance-/API-Politik sehr niedrig ist.',
    reservations: [
      {
        id: 'x-ftc-privacy-penalty-2022',
        text: 'The FTC announced a $150M penalty and order against Twitter/X over allegations that security contact data (emails/phone numbers) was deceptively reused for advertising purposes.',
        textDe: 'Die FTC veroeffentlichte eine Strafe von 150 Mio. USD samt Auflagen gegen Twitter/X wegen Vorwuerfen, dass Sicherheits-Kontaktdaten (E-Mails/Telefonnummern) taeuschend fuer Werbung wiederverwendet wurden.',
        severity: 'major',
        date: '2022-05-25',
        sourceUrl: 'https://www.ftc.gov/news-events/news/press-releases/2022/05/twitter-agrees-pay-150-million-penalty-settling-allegations-it-misused-users-personal-information-targeted',
      },
      {
        id: 'x-api-identifier-mapping-incident-2022',
        text: 'X disclosed an API issue that could allow linking email/phone identifiers to account profiles for affected users, creating de-anonymization and phishing risk.',
        textDe: 'X meldete ein API-Problem, durch das bei betroffenen Nutzern E-Mail-/Telefon-Identifier mit Account-Profilen verknuepft werden konnten, was De-Anonymisierungs- und Phishing-Risiken erzeugt.',
        severity: 'major',
        date: '2022-08-05',
        sourceUrl: 'https://privacy.x.com/en/blog/an-issue-affecting-some-anonymous-accounts',
      },
      {
        id: 'x-hibp-large-email-dataset-2023',
        text: 'Have I Been Pwned added a large scraped X/Twitter email-address dataset in 2023, materially increasing credential-stuffing and targeted-phishing exposure.',
        textDe: 'Have I Been Pwned nahm 2023 einen grossen gescrapten X/Twitter-E-Mail-Datensatz auf, was das Risiko fuer Credential-Stuffing und gezieltes Phishing deutlich erhoeht.',
        severity: 'major',
        date: '2023-01-04',
        sourceUrl: 'https://www.troyhunt.com/200m-scraped-twitter-email-addresses-now-in-have-i-been-pwned/',
      },
      {
        id: 'x-dsa-fine-and-transparency-breaches-2025',
        text: 'The European Commission fined X EUR 120M in December 2025 for DSA breaches, including deceptive blue-check design, ad-transparency repository failures, and barriers to researcher access.',
        textDe: 'Die Europaeische Kommission verhaengte im Dezember 2025 gegen X eine DSA-Strafe von 120 Mio. EUR, unter anderem wegen taeuschendem Blue-Check-Design, Defiziten beim Ad-Transparency-Repository und Barrieren fuer Forschendenzugang.',
        severity: 'major',
        date: '2025-12-05',
        sourceUrl: 'https://digital-strategy.ec.europa.eu/en/news/commission-fines-x-eu120-million-breaching-digital-services-act',
      },
      {
        id: 'x-terms-ai-training-license',
        text: 'X Terms of Service grant broad rights to analyze user-submitted text and content for training machine-learning and artificial-intelligence models.',
        textDe: 'Die X-Nutzungsbedingungen gewaehren breite Rechte, von Nutzern eingereichte Texte und Inhalte fuer das Training von Machine-Learning- und KI-Modellen zu analysieren.',
        severity: 'major',
        sourceUrl: 'https://x.com/en/tos',
      },
      {
        id: 'x-privacy-third-party-ai-training-risk',
        text: 'X privacy policy states that collected/public information may be used for AI training and notes some third-party recipients may use shared data for their own model training unless users opt out where available.',
        textDe: 'Die X-Privacy-Policy nennt, dass erhobene/oeffentliche Informationen fuer KI-Training genutzt werden koennen, und dass manche Drittparteien geteilte Daten fuer eigenes Modelltraining verwenden koennen, sofern kein Opt-out greift.',
        severity: 'major',
        sourceUrl: 'https://x.com/en/privacy',
      },
      {
        id: 'x-trust-safety-staff-reductions-2024',
        text: 'Australia\'s eSafety transparency report documented major reductions in trust-and-safety staffing after takeover, indicating capacity and enforcement-consistency risk.',
        textDe: 'Der Transparenzbericht der australischen eSafety dokumentierte nach der Uebernahme starke Reduktionen im Trust-and-Safety-Personal und signalisiert Kapazitaets- sowie Durchsetzungskonsistenz-Risiken.',
        severity: 'moderate',
        date: '2024-01-11',
        sourceUrl: 'https://www.esafety.gov.au/sites/default/files/2024-01/Transparency-report-X-Corp-July-Dec-2023.pdf',
      },
      {
        id: 'x-api-pricing-volatility-2024',
        text: 'X repeatedly changed self-serve API pricing and limits, including major 2024 tier increases, reducing long-term integration cost predictability.',
        textDe: 'X hat Self-Serve-API-Preise und Limits wiederholt veraendert, inklusive deutlicher Tier-Erhoehungen im Jahr 2024, was die langfristige Integrations-Kostenplanbarkeit reduziert.',
        severity: 'moderate',
        date: '2024-10-25',
        sourceUrl: 'https://techcrunch.com/2024/10/25/x-hikes-api-prices/',
      },
      {
        id: 'x-outage-clusters-2025',
        text: 'X experienced repeated outage clusters in 2025, including service disruptions occurring within short intervals, indicating resilience and change-control risk for dependency use cases.',
        textDe: 'X hatte 2025 wiederholte Ausfall-Cluster, darunter Stoerungen in kurzen Abstaenden, was Resilienz- und Change-Control-Risiken fuer Abhaengigkeits-Use-Cases zeigt.',
        severity: 'moderate',
        date: '2025-05-24',
        sourceUrl: 'https://techcrunch.com/2025/05/24/x-is-down-again/',
      },
      {
        id: 'x-xai-acquisition-governance-concentration-2025',
        text: 'The 2025 all-stock xAI acquisition of X further concentrated governance and strategic alignment around AI-data monetization priorities.',
        textDe: 'Die All-Stock-Uebernahme von X durch xAI im Jahr 2025 verstaerkte die Governance-Konzentration und die strategische Ausrichtung auf AI-Daten-Monetarisierung.',
        severity: 'moderate',
        date: '2025-03-28',
        sourceUrl: 'https://www.reuters.com/markets/deals/musks-xai-buys-x-social-media-site-45-bln-2025-03-28/',
      },
      {
        id: 'x-paris-raid-csam-deepfake-investigation-2026',
        text: 'On February 3, 2026, French prosecutors raided X\'s Paris offices in a preliminary probe that includes allegations of complicity in possessing/disseminating child sexual abuse images and sexually explicit deepfakes linked to platform operation.',
        textDe: 'Am 3. Februar 2026 durchsuchten franzoesische Staatsanwaelte die Pariser X-Bueros in einer Voruntersuchung mit Vorwuerfen, die unter anderem mutmassliche Komplizenschaft bei Besitz/Verbreitung von Darstellungen sexuellen Kindesmissbrauchs sowie sexuell expliziten Deepfakes im Plattformkontext betreffen.',
        severity: 'major',
        date: '2026-02-03',
        sourceUrl: 'https://apnews.com/article/1116be84d84201011219086ecfd4e0bc',
      },
      {
        id: 'x-watchdog-litigation-media-matters-2023',
        text: 'X sued Media Matters in 2023 after reporting about ad placement next to extremist content, signaling a confrontational oversight posture and legal-escalation risk.',
        textDe: 'X verklagte 2023 Media Matters nach Berichten ueber Werbeplatzierungen neben extremistischen Inhalten, was auf eine konfrontative Aufsichtshaltung und juristisches Eskalationsrisiko hindeutet.',
        severity: 'moderate',
        date: '2023-11-21',
        sourceUrl: 'https://www.cnbc.com/2023/11/21/x-sues-media-matters-over-report-about-ads-appearing-next-to-nazi-posts.html',
      },
      {
        id: 'x-antitrust-suit-against-advertisers-2024',
        text: 'In August 2024, X filed an antitrust lawsuit alleging an illegal advertiser boycott, reinforcing ecosystem-conflict and commercial-predictability risk.',
        textDe: 'Im August 2024 reichte X eine Antitrust-Klage wegen eines mutmasslich illegalen Werbekunden-Boykotts ein und verstaerkte damit Oekosystem-Konflikt- sowie kommerzielle Planbarkeitsrisiken.',
        severity: 'moderate',
        date: '2024-08-06',
        sourceUrl: 'https://www.cnbc.com/2024/08/06/elon-musks-x-sues-advertisers-over-alleged-massive-advertiser-boycott-after-twitter-takeover.html',
      },
      {
        id: 'x-premium-plus-price-hike-2024',
        text: 'X raised Premium Plus pricing by roughly 40% in late 2024 across multiple regions, showing meaningful consumer pricing volatility.',
        textDe: 'X erhoehte Ende 2024 in mehreren Regionen die Premium-Plus-Preise um rund 40 Prozent und zeigt damit erhebliche Preisvolatilitaet fuer Nutzer.',
        severity: 'moderate',
        date: '2024-12-23',
        sourceUrl: 'https://www.theverge.com/2024/12/23/24327918/x-premium-plus-subscription-price-increases',
      },
      {
        id: 'x-passkey-domain-migration-lockout-risk-2025',
        text: 'During the 2025 migration from twitter.com to x.com, X warned that users who did not re-enroll passkeys/security keys could be locked out, highlighting authentication-change rollout risk.',
        textDe: 'Waerend der Migration von twitter.com zu x.com im Jahr 2025 warnte X, dass Nutzer ohne erneute Registrierung von Passkeys/Sicherheitsschluesseln ausgesperrt werden koennen, was Rollout-Risiken bei Authentifizierungs-Aenderungen zeigt.',
        severity: 'moderate',
        date: '2025-10-27',
        sourceUrl: 'https://www.theverge.com/news/807011/twitter-com-x-com-login-security-key-passkey-domain',
      },
    ],
  },
};

function normalizeVendorName(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function slugifyVendorName(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-');
}

const US_VENDOR_BY_ALIAS = new Map<string, USVendorRecord>();

for (const record of US_VENDOR_RECORDS) {
  const normalizedNames = [record.name, ...record.aliases].map(normalizeVendorName);
  for (const normalizedName of normalizedNames) {
    if (normalizedName) {
      US_VENDOR_BY_ALIAS.set(normalizedName, record);
    }
  }
}

function toComparison(record: USVendorRecord, sourceName?: string): USVendorComparison {
  const profile = US_VENDOR_TRUST_PROFILES[record.id];
  const normalizedRecordName = normalizeVendorName(record.name);
  const normalizedSourceName = sourceName ? normalizeVendorName(sourceName) : '';
  const shouldIncludeContext = Boolean(normalizedSourceName) && normalizedSourceName !== normalizedRecordName;
  const sourceLabel = sourceName?.trim() ?? '';
  const lowerRecordName = record.name.toLowerCase();
  const lowerSourceLabel = sourceLabel.toLowerCase();
  const compactContext = lowerSourceLabel.startsWith(`${lowerRecordName} `)
    ? sourceLabel.slice(record.name.length).trim()
    : sourceLabel;
  const contextualName = (() => {
    if (!shouldIncludeContext || !compactContext) {
      return record.name;
    }

    return compactContext.includes('(')
      ? `${record.name}: ${compactContext}`
      : `${record.name} (${compactContext})`;
  })();

  return {
    id: record.id,
    name: contextualName,
    trustScoreStatus: profile ? 'ready' : 'pending',
    trustScore: profile?.trustScore,
    description: profile?.description,
    descriptionDe: profile?.descriptionDe,
    reservations: profile?.reservations,
  };
}

function toFallbackComparison(name: string): USVendorComparison {
  const normalized = name.trim();
  const fallbackId = slugifyVendorName(normalized) || 'us-vendor';

  return {
    id: `us-${fallbackId}`,
    name: normalized,
    trustScoreStatus: 'pending',
  };
}

export function resolveUSVendorComparison(name: string): USVendorComparison {
  const normalized = normalizeVendorName(name);
  const record = US_VENDOR_BY_ALIAS.get(normalized);

  if (record) {
    return toComparison(record, name);
  }

  return toFallbackComparison(name);
}

export function buildUSVendorComparisons(names: string[]): USVendorComparison[] {
  const deduped = new Map<string, USVendorComparison>();

  for (const name of names) {
    if (!name.trim()) continue;
    const comparison = resolveUSVendorComparison(name);
    if (!deduped.has(comparison.id)) {
      deduped.set(comparison.id, comparison);
    }
  }

  return Array.from(deduped.values());
}
