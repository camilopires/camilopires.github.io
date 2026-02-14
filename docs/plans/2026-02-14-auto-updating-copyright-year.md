# Auto-updating Copyright Year Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace hardcoded copyright year with dynamic build-time computation to automatically show current year.

**Architecture:** Single-line change in Footer.astro component using Astro's JavaScript expression syntax to evaluate `new Date().getFullYear()` at build time.

**Tech Stack:** Astro (static site generator), JavaScript Date API

---

## Task 1: Update Footer Component

**Files:**
- Modify: `src/components/Footer.astro:56`

**Step 1: Update copyright year to use dynamic expression**

Replace the hardcoded year with a JavaScript expression:

```astro
<li class="text-gray-300">© {new Date().getFullYear()} Camilo Pires</li>
```

**Context:** Line 56 currently reads:
```astro
<li class="text-gray-300">© 2025 Camilo Pires</li>
```

Change "2025" to `{new Date().getFullYear()}`. The curly braces tell Astro to evaluate the JavaScript expression at build time.

---

## Task 2: Build and Verify Locally

**Step 1: Build the site**

Run the build command:
```bash
npm run build
```

Expected output: Build completes successfully with no errors.

**Step 2: Preview the built site**

Run the preview server:
```bash
npm run preview
```

Expected output: Server starts (typically on http://localhost:4321)

**Step 3: Verify copyright year**

1. Open browser to http://localhost:4321
2. Scroll to footer
3. Verify copyright shows "© 2026 Camilo Pires" (current year)
4. Check other pages (e.g., /about/, /projects/, /contact/) to confirm footer appears correctly on all pages

**Step 4: Verify built HTML**

Check the built HTML directly:
```bash
grep -r "© 2026" docs/*.html
```

Expected output: Multiple files show "© 2026 Camilo Pires" in the footer HTML.

**Step 5: Stop preview server**

Press `Ctrl+C` in terminal to stop the preview server.

---

## Task 3: Commit Changes

**Files:**
- Modified: `src/components/Footer.astro`
- Modified: `docs/**/*.html` (built output)

**Step 1: Check git status**

```bash
git status
```

Expected output: Shows modifications to `src/components/Footer.astro` and multiple files in `docs/` directory.

**Step 2: Review the change**

```bash
git diff src/components/Footer.astro
```

Expected output: Shows the line changed from "2025" to `{new Date().getFullYear()}`.

**Step 3: Stage and commit changes**

```bash
git add src/components/Footer.astro docs/
git commit -m "$(cat <<'EOF'
Update copyright year to auto-generate from current date

Replaces hardcoded year with dynamic JavaScript expression that
evaluates at build time, ensuring copyright always shows current year.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
EOF
)"
```

Expected output: Commit created successfully.

**Step 4: Verify commit**

```bash
git log -1 --stat
```

Expected output: Shows the commit with modified files listed.

---

## Testing Checklist

After implementation, verify:
- [ ] Footer shows "© 2026 Camilo Pires" (current year) on all pages
- [ ] Built HTML in `docs/` contains correct year
- [ ] No console errors or build warnings
- [ ] Changes committed to git

---

## Notes

**Why build-time over client-side?**
- No JavaScript needed in browser (better performance)
- No flash of old year before JS loads
- SEO-friendly (search engines see correct year immediately)
- Works with JavaScript disabled

**When does the year update?**
- Every time `npm run build` runs
- The site rebuilds regularly through normal deployments, so year stays current

**What if site doesn't rebuild for a year?**
- Year will be stale until next build
- Acceptable trade-off for this actively maintained site
