# Bitwarden Trust Score Worksheet (Alignment v1)

Scored from evidence in `tmp/deepresearches/Bitwarden.md` (old 79/100 value ignored by rule).

## Classification
- Base class: `FOSS (verified)`
- Base score: `68`
- Applicable caps:
  - `FOSS cap 95`

## Operational (+0..32)
- Security: `10/12`
  - Strong assurance signals in scope: public SOC 3 report, recurring third-party assessments, bug bounty/disclosure process, and no confirmed major cloud vault breach found in the research.
  - Browser-extension/autofill attack surface remains a practical risk class.
- Governance: `6/8`
  - Clear legal entity and mature product governance signals.
  - Mixed-license episode in 2024 reduced governance confidence.
- Reliability: `5/6`
  - Public status operations and mature release/maintenance signals.
  - Periodic access/ops friction still appears in user-facing operations.
- Contract: `4/6`
  - Good data portability (export paths, self-hosting options).
  - Pricing changes and migration/region-switch friction reduce contractual trust.
- Subtotal: `25`

## Penalties
- `hostile-license-switch-or-rug-pull-pattern`
  - Base penalty: `-6`
  - Recency multiplier: `x0.7` (`2024-10-01`, 1-3 years old as of `2026-02-11`)
  - Adjusted penalty: `-4.2`
  - Sources:
    - https://github.com/bitwarden/clients/issues/11611
- Subtotal penalties: `4.2`

## Final
- Pre-cap: `68 + 25 - 4.2 = 88.8`
- Cap applied: `none` (FOSS cap 95 not reached)
- Final trust score: `88.8/100` -> `8.9/10`
- Confidence: `medium`

## Reservations For Frontend
- id: `pricing-shift-2026`
  - severity: `moderate`
  - date: `2026-01-20`
  - sourceUrl: `https://community.bitwarden.com/t/bitwarden-launches-enhanced-premium-plan/93006`
- id: `sdk-license-incident-2024`
  - severity: `minor`
  - date: `2024-10-01`
  - sourceUrl: `https://github.com/bitwarden/clients/issues/11611`
