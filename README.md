# Tunnelde Assistant Runtime

Shared implementation for Tunnelde AI, Codex, Claude Code and Pi. Each consumer pins this build dependency and packages its own immutable identity and all runtime source. Plugins have independent permissions, storage, secrets and release cadence.

Run `npm ci --ignore-scripts`, `npm run build`, `npm run verify`. Regression tests exercise each identity and optional native Codex/Pi integrations. No runtime downloads are introduced.

Extracted from Tunnelde Hub; see MIGRATION.md for source provenance.
