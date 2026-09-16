# Provision through normal Cloud onboarding

These are future operator steps. They were not performed while preparing this
fixture. No credentials belong in this directory or a public repository.

1. Use https://github.com/fragments-sdk/plugin-review-fixture. The audited fixture
   must use an exact reviewed commit merged to `main` for provisioning. Source
   distributions must exclude node_modules, dist, .fragments, environment files
   and credentials.
2. Use a dedicated, verified review account through ordinary production sign-up
   or the authentication provider's supported user-management UI. Confirm a
   fresh browser can password-sign-in without MFA/SMS/email challenges. Do not
   weaken production-wide authentication or share a personal account.
3. Create a dedicated review organization/project through normal onboarding.
   Connect the Fragments GitHub App only to this fixture repository and select
   its exact repository binding. Do not connect a customer/private monorepo.
4. Allow onboarding discovery to finish, then run a **full semantic repository
   scan using the normal durable scan workflow**. Initial onboarding uses quick
   inventory, and the action-safe full mode also lacks semantic prop extraction.
   A source-path-only result is insufficient for this hosted settings example.
   If the deployed UI cannot run a full scan, pause provisioning and report that
   product gap; do not hand-author a generated manifest or seed production data.
5. In the shared contract editor, approve only the intended component source
   declarations `ui/Button.tsx`, `ui/Card.tsx`, `ui/Field.tsx`, `ui/Input.tsx`,
   `ui/Switch.tsx`, plus token source `design/tokens.css`. These are repository
   adapters over a public package. Do not approve SettingsPage as a canonical
   primitive or imply the package's full export/prop surface was discovered.
6. Save the real contract. Record its actual version/FCID, counts, token source
   paths and component identities privately. Intended selection is five named
   adapters and eight token names, but the returned frozen contract receipt is
   authoritative. No example or fabricated contract IDs are supplied here.
7. Connect the reviewer host through OAuth and select the exact dedicated
   organization/project/repository binding. Use the supported MCP read scope;
   contract authoring is a separate authorized operation. For the hosted MCP
   integration, use OAuth metadata; do not enable unsupported OIDC scopes.
8. Call the actual registered contract, approved-only primitive, and approved-only
   token tools. Verify that the five adapter props match README and that imports
   are proven for this layout. Hosted tools cannot fall back to reading local
   paths. In particular, Input/Field `onChange` accepts a string and Switch
   `onCheckedChange` accepts a boolean. If props are missing, do not claim the
   positive settings test is ready; inspect full-scan completion/publication.
9. Run the five positive and three negative cases in the release review plan.
   For deterministic color repair, first confirm the approved default snapshot
   exposes `--fui-color-danger: #c44732` with color semantics, resolved value and
   no ambiguous mode or alias. Do not use the seed-brand token as a substitute.
   Submit the exact saved code plus filename from reviewer-inputs.json to the
   hosted checker, inspect verdict and coverage, deliver any returned repairs,
   and recheck later edits. The CSS module is a separate submitted file: a TSX
   snippet verdict does not imply its imported stylesheet was checked.
10. Preview only in a coding host that has installed this fixture's dependencies.
    Ordinary hosted chat can deliver checked source but cannot claim a running
    local preview. Keep review entitlement valid through normal supported
    operator procedures, scoped to the dedicated review organization.

## Known limits

Offline evidence proves that the current full extraction and hosted serializer
can carry these APIs. It does not prove a deployed scan, approved-catalog refresh,
OAuth binding, hosted enforcement or the five live review cases succeeded.
The Button/Card ReactNode children field is truthfully partial (`unknown`) in
source-only extraction. Strict unknown-prop enforcement must not treat those
schemas as closed. The real npm package's TypeScript build and browser checks
independently validate this particular saved composition.
