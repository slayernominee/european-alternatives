# Ecosia Trust Score Worksheet (Alignment v1)

Scored from evidence in `tmp/deepresearches/Ecosia.md` (old 66/100 value ignored by rule).

## Classification
- Base class: `EU` (Germany)
- Base score: `60`
- Applicable caps:
  - `EU cap 92`

## Operational (+0..32)
- Security: `6/12`
  - Positive: public `security.txt` and vulnerability disclosure channel.
  - Limits: no clearly published independent SOC 2 / ISO 27001 assurance package in reviewed sources; partner-heavy data flow for search and AI features.
- Governance: `7/8`
  - Clear legal entity and public governance signals (B Corp listing, stewardship framing).
  - Remaining concentration risk through external search and AI suppliers.
- Reliability: `4/6`
  - Active product maintenance and support documentation.
  - Upstream dependency has caused inherited availability impact during partner outages.
- Contract: `4/6`
  - Consumer-friendly free model and documented controls.
  - User-right controls for AI features rely partly on cookie persistence and external processor terms.
- Subtotal: `21`

## Penalties
- `core-dependency-on-us-third-party-model-without-strong-no-train-guarantees`
  - Base penalty: `-6`
  - Recency multiplier: `n/a` (structural)
  - Adjusted penalty: `-6`
  - Sources:
    - https://support.ecosia.org/article/1006-ai-search
    - https://support.ecosia.org/article/579-search-results-providers
    - https://platform.openai.com/docs/models/default-usage-policies-by-endpoint
- Subtotal penalties: `6`

## Final
- Pre-cap: `60 + 21 - 6 = 75`
- Cap applied: `none` (EU cap 92 not reached)
- Final trust score: `75/100` -> `7.5/10`
- Confidence: `medium`

## Reservations For Frontend
- id: `search-partner-data-sharing`
  - severity: `moderate`
  - sourceUrl: `https://www.ecosia.org/privacy`
- id: `ai-search-us-llm-dependency`
  - severity: `moderate`
  - sourceUrl: `https://support.ecosia.org/article/1006-ai-search`
- id: `ai-overviews-cookie-opt-out`
  - severity: `minor`
  - sourceUrl: `https://support.ecosia.org/article/2045-ai-overviews`
- id: `upstream-search-provider-outage-risk`
  - severity: `minor`
  - date: `2024-05-23`
  - sourceUrl: `https://techcrunch.com/2024/05/23/bing-is-down-bringing-duckduckgo-and-ecosia-down-too/`
