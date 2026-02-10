# Trust Methodology

This project assigns each alternative a transparent, deterministic trust profile.

## Inputs

- Base catalogue from `tmp/european-alternatives-master-research.md`
- Curated manual entries in `src/data/manualAlternatives.ts`
- Vetting outcomes from `tmp/vetted/*-approved.md` and `tmp/vetted/*-rejected.md`
- Explicit reservations/overrides in `src/data/trustOverrides.ts`

## Scoring Model

All scores are in `1..10`.

Baseline: `3`

Additions:
- `+2` European jurisdiction (`country !== 'eu'`), otherwise `-1` for non-EU exception
- `+3` fully open source (`openSourceLevel='full'`)
- `+1` partially open source (`openSourceLevel='partial'`)
- `+1` public source repository (`githubUrl`)
- `+1` self-hosting/offline/federated signal in tags
- `+1` privacy signal in tags
- `+2` vetted approved

Deductions:
- `-4` vetted rejected
- Reservations:
  - minor: `-1`
  - moderate: `-2`
  - major: `-3`

Confidence caps:
- low confidence: max score `8`
- medium confidence: max score `9`
- high confidence: no cap

## Confidence

- `high`: fully vetted (`vetted-approved` or `vetted-rejected`)
- `medium`: research profile with GitHub transparency and/or explicit reservations
- `low`: research profile without strong external trust signals

## Output Fields

Each `Alternative` includes:

- `trustScore`
- `trustTier` (`excellent`, `good`, `fair`, `poor`)
- `trustConfidence` (`high`, `medium`, `low`)
- `vettingStatus` (`vetted-approved`, `research`, `vetted-rejected`)
- `reservations[]` with severity and optional date/source
- `trustRationale[]` machine-readable reason keys

## UX Rules

- Rejected entries are included for transparency but hidden by default via filter presets.
- Users can sort by trust score.
- Users can filter by minimum trust score and vetting status.
- Every card displays trust score + status + confidence + rationale + reservations.
