# Fragments reviewer settings fixture

A small React/Vite app using the real published `@usefragments/ui@3.1.2` package.
The five `ui/` adapters expose explicit, source-scannable APIs over its controls.
This source fixture has **no approved Cloud contract,
account, repository binding or hosted verification result yet**.

## Run

Use Node 22.12+ or another Node version supported by Vite 7.

```sh
npm ci --ignore-scripts
npm run verify:tokens
npm run build
npm run dev
```

Open the URL Vite prints. Edit the profile, toggle notifications with Space,
then save. The status message confirms only the local demo action. Reload resets
all changes. No account update, storage, analytics or backend call is implemented.

`src/SettingsPage.tsx` and its CSS module are the exact saved settings example.
`reviewer-inputs.json` includes their contents and SHA-256 hashes for submission
through tools that accept code. It contains proposed inputs, not tool results.

## Actual component APIs

Imports below are relative to `src/SettingsPage.tsx`.

| Name | Import | Required props | Additional supported props |
| --- | --- | --- | --- |
| Button | `../ui/Button` | children | type (button/submit/reset), disabled, onClick |
| Card | `../ui/Card` | title, description, children | — |
| Field | `../ui/Field` | name, label, value, onChange(value: string) | — |
| Input | `../ui/Input` | name, label, value, onChange(value: string) | type (text/email), required, autoComplete |
| Switch | `../ui/Switch` | label, checked, onCheckedChange(checked: boolean) | — |

Field is a labeled, required profile input over the published Input's built-in
Field behavior; it is not an alias for the package's compound Field API. Card
composes the real Card.Header/Title/Description/Body. Nothing reimplements the
published controls or claims to expose their entire API.

## Tokens and provenance

`src/main.tsx` imports the package's complete CSS and then `design/tokens.css`.
That file copies seven exact default token definitions from the pinned published
CSS, with dependencies included. `design/provenance.json` records the upstream
CSS hash and selected values. `npm run verify:tokens` compares them against the
installed public package. This snapshot is a small fixture vocabulary, not the
whole upstream contract or every theme mode.

The selected color `#f56138` maps to `--fui-seed-brand` in this snapshot. A future
hosted repair test must first confirm the approved token lookup returns that
unambiguous mapping; it must not assume the lookup succeeded.

## Establish the real Cloud contract

See [PROVISIONING.md](PROVISIONING.md). Do not present the bundled local policy
or offline evidence as Cloud approval. The hosted connection must return usable
props and approved source identities before the settings-page review can pass.

## Validation already performed

- Public npm install, strict TypeScript check and Vite production build passed.
- All seven token snapshot definitions match the pinned package's CSS.
- Local source scan extracted all five adapter declarations and their props.
- Local CLI check of the three application TSX/CSS files passed with zero findings
  under the declared four active rules. No baseline or suppression was used.
- Browser checks passed: accessible input labels, editing, keyboard switch,
  save status, reload reset, no mobile overflow, and no page errors.
- Offline full Cloud source-memory extraction, component detail normalization,
  and hosted MCP primitive serialization retained each adapter's usable props.
  This is not a live `list_primitives` result. ReactNode children remain `unknown`
  in that repository-only extraction for Button/Card; its partial-schema
  diagnostics are preserved. Do not call those complete closed prop schemas.

See `evidence/` for concise results and screenshots. The Vite build emitted
upstream `use client` directive warnings; the client-only app built successfully.
No hooks were installed or exercised in this fixture. Local validation did not
change any production account, Cloud contract or entitlement. Publishing this
source repository does not provision a reviewer account or Cloud authority.

## License

MIT; see [LICENSE](LICENSE). The copied upstream token definitions retain their
notice in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
