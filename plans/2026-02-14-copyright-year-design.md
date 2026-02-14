# Auto-updating Copyright Year

**Date:** 2026-02-14
**Status:** Approved

## Overview

Automatically update the copyright year in the site footer to always show the current year without manual updates.

## Requirements

- Display only the current year (not a range)
- Format: "© 2026 Camilo Pires" (year updates automatically)
- Work across all pages
- No client-side JavaScript required

## Approach

**Build-time rendering** - Use JavaScript expression in Astro component to compute year at build time.

### Why this approach?

- **No JavaScript overhead:** Year is rendered into static HTML at build time
- **SEO-friendly:** Search engines see the correct year immediately
- **Accessible:** Works without JavaScript enabled
- **Simple:** Single-line change, no dependencies
- **Reliable:** Site rebuilds regularly through normal deployments, ensuring year stays current

### Trade-offs considered

- **Requires rebuilds:** Year only updates when site is built/deployed
  - Acceptable because site is actively maintained with regular deployments
  - If site goes dormant for a year, outdated copyright is a minor issue

## Implementation

### File Changes

**`src/components/Footer.astro:56`**

```diff
- <li class="text-gray-300">© 2025 Camilo Pires</li>
+ <li class="text-gray-300">© {new Date().getFullYear()} Camilo Pires</li>
```

### Data Flow

1. **Build time:** `astro build` evaluates `new Date().getFullYear()`
2. **Static HTML:** Current year rendered into HTML (e.g., "© 2026 Camilo Pires")
3. **Runtime:** No JavaScript execution needed - year is already in HTML
4. **Updates:** Each build automatically uses current year

## Testing & Verification

1. Build site: `npm run build`
2. Preview: `npm run preview`
3. Verify footer shows current year across all pages
4. Check built HTML in `docs/` directory confirms correct year

## Error Handling

Not applicable - JavaScript `Date` API is built-in and reliable.

## Alternatives Considered

**Client-side JavaScript:** Always shows current year without rebuilds, but requires JavaScript and causes flash of old content before JS loads. Rejected as unnecessary complexity.

**Hybrid approach:** Build-time with client-side fallback. Rejected as overkill for this use case.
