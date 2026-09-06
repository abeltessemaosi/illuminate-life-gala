# Illuminate Life Gala — Full Audit Checklist vs. Current Code

Verified against the actual codebase today (not memory/assumption — every line below was re-read fresh). Cross-referenced to the audit PDF sections + the kickoff call transcript.

**Scope reality check:** this repo is Next.js frontend only. No backend, no CMS, no payment processor, no email system, no social media accounts, no access to the separate CHCI Wix site. Items marked 🚫 are real, valid audit items — just not things I can execute from this codebase. Everything else here IS frontend-fixable.

Status key: ✅ Done · ⚠️ Partial · ❌ Not started · 🔒 Blocked (needs a client decision first) · 🚫 Not frontend

---

## Priority 1 — Remove Dr. Eromo's Personal Information (audit §2)

**✅ Complete, except the one item that's supposed to stay on hold.**

| # | Item | Status | Notes |
|---|---|---|---|
| 1.1 | "Legacy of Compassion" section | ✅ | `DrErsnoSection3.tsx` and its CSS file deleted, no longer imported/rendered |
| 1.2 | `/modified.png` + Eromo alt text | ✅ | File deleted from `public/`, removed from event structured data. Also deleted the two other unused Eromo images (`dr-ersno.png`, `ersno.jpeg`) that weren't referenced anywhere |
| 1.3 | meta author tag | ✅ | Now `'Concierge Health Care International'` |
| 1.4 | meta keywords | ✅ | Removed from **both** `layout.tsx` and `page.tsx` schema keywords |
| 1.5 | Structured data / schema | ✅ | `performer` object removed entirely, `alternateName` entry removed, the "Who is Dr. Ersno Eromo?" FAQ deleted, event description rewritten to mention CHCI instead |
| 1.6 | Partner logos (Eromo Ventures, Levy Eromo Media) | ⏸ HOLD — correct as-is | Still present, per audit — don't touch until Host confirms |

**Acceptance test now passes:** a source search for "Eromo"/"Ersno" returns exactly one file — `Partners.tsx` — which is the intentional hold item.

---

## Priority 1 — Establish CHCI as Presenter (audit §3)

**✅ Complete — all seven items.**

| # | Item | Status | Notes |
|---|---|---|---|
| 3.1 | Hero "Presented by CHCI" line | ✅ | Added beneath the date/venue, linked, opens in new tab |
| 3.2 | Presenter logo, separate row above partners | ✅ | New featured "Presented by" row in `Partners.tsx`, full-color CHCI logo above the desaturated partner grid |
| 3.3 | Footer "Presented by CHCI" line | ✅ | Added, plus the actual logo image placed top-right of the footer card (your specific ask) |
| 3.4 | Mission section CHCI sentence | ✅ | Added to `About.tsx`, linked |
| 3.5 | meta creator/publisher → CHCI | ✅ | `layout.tsx` creator/publisher and `page.tsx` organizer.name all now `'Concierge Health Care International'` |
| 3.6 | Copyright line + 501(c)(3) statement | ✅ | Footer now reads "© 2026 Concierge Health Care International · Illuminate Life Gala" plus the tax-deductibility line |
| 3.7 | Partner logos clickable | ✅ | All 7 wrapped in links to their real sites (you supplied the URLs) |

---

## Priority 1 — Payment Processing (audit §4)

🚫 **All of this is backend/business, not frontend.** Current reality: `TicketModal` collects info and POSTs to a backend endpoint that (per `BACKEND_REQUIREMENTS.md`) does no real payment — no Stripe, no Wix Payments, nothing that moves money. This was flagged as the single biggest gap back in the first audit pass and is still unresolved. Needs your answer on the Wix-vs-custom-backend question before any of 4.1–4.7 can start.

---

## Priority 2 — Correct 2026 Event Info (audit §5)

| # | Item | Status | Notes |
|---|---|---|---|
| 5.1 | 500+ Guests → 450 | ✅ | Fixed in both `About.tsx` and `Sponsors.tsx` |
| 5.2 | "Black Tie Optional" → "Black Tie" | ✅ | Fixed in `Contact.tsx` |
| 5.3 | Countdown clock broken | ✅ | Fixed as a side effect of the flip-clock rebuild — verified the date math is correct and it displays real numbers. (Minor: if it ever hits zero it freezes on the last value instead of showing 0s — a non-issue until October 2026, low priority) |
| 5.4 | "Second Annual" numbering | 🔒 | Correctly left alone — blocked on your confirmation, per audit |
| 5.5 | Meta description "Los Angeles" scope | ❌ | Still geographically narrow, unchanged |
| 5.6 | Evening timeline claims (culinary team, Fund-a-Dream, etc.) | 🔒 | Not verified against 2026 production plan — needs your sign-off before either keeping or editing |
| 5.7 | Sponsorship tier benefits | ❌ | Confirmed still literal placeholder — the code comment literally says `// silently fail — slots just show "Available"`. Blocked on you supplying the benefit-deck copy |
| 5.8 | Contact form dropdown options | ❌ | Still only the 4 sponsor tiers + General Inquiry. Audit wants added: Individual Tickets, Table Purchase, Media & Press, Volunteer, Donation, Honoree/Awards Inquiry |

---

## Priority 2 — Add the 2024 Gala Record (audit §6)

| # | Item | Status | Notes |
|---|---|---|---|
| 6.1 | Honoree write-ups (Appendix A copy) | ❌ | Not built. What I built instead is a **photo gallery**, which is a different thing — no honoree bio cards, no "Presented by X · Accepted by Y" structure, no `/honorees` page |
| 6.2 | Photography | ⚠️ | Gallery infrastructure exists (`/gallery` page + homepage carousel) but running on **placeholder stock images**, not real Getty photos — still waiting on the licensing question we discussed |
| 6.3 | Recap copy / impact figures | ❌ | Not present anywhere on the site |

**Important distinction:** the gallery I built this week and the "Past Honorees" page the audit's Appendix A describes are two different deliverables. Gallery = photos with short captions. Honoree page = full bio write-ups per person with named presenters/acceptors. Both are wanted; only the first exists.

---

## Priority 2 — Social Media (audit §7)

🚫 Entirely external accounts (Instagram/LinkedIn/Facebook/TikTok ownership, handle claims) — not something code can fix. One frontend-adjacent note: `Footer.tsx` still links to the year-specific `@illuminatelifegala2026` Instagram and to what the audit says are personal LinkedIn/Facebook profiles, not brand pages. Once real permanent-handle accounts exist, updating those `href`s is a one-line change.

---

## Priority 3 — Technical, Link, and SEO Cleanup (audit §8)

| # | Item | Status | Notes |
|---|---|---|---|
| 8.1 | Footer "Event Info" links → `#` | ✅ | Date/time now link to a real Google Calendar add-event URL; venue/city now link to Google Maps for the exact address |
| 8.2 | Footer "Get Involved" links | ⚠️ | Mostly fine now (I fixed the cross-page routing bug earlier), but Donate still points at the contact form since no dedicated donation page/flow exists yet (audit ties this to 4.4 and 5.8) |
| 8.3 | Social preview image (og:image) | ✅ | Replaced with a real generated 1200×630 PNG (`app/opengraph-image.tsx` using `next/og`, no external asset needed). Caveat: the serif brand font didn't load in the renderer, so it's currently in a fallback sans — geometry/copy/palette are right, typeface isn't |
| 8.4 | Page `<title>` vs `og:title` mismatch | ✅ | Both now read identically: "Illuminate Life Gala 2026 \| October 15 at The Beverly Hilton" |
| 8.5 | `twitter:creator` tag | ✅ | Removed rather than leave an unconfirmed handle — no evidence a real X/Twitter account exists |
| 8.6 | Partner logo filename | ✅ | Renamed to `tori-avey.png`, reference updated in `Partners.tsx` |
| 8.7 | Honorees/Awards section template | ❌ | Confirmed via full-codebase search: zero honoree/awards architecture exists beyond one incidental "Meet & greet with honorees" bullet in a ticket perk list |
| 8.8 | Reservation modal retirement | N/A yet | Can't retire it until real checkout (4.2) exists |
| 8.9 | Sitemap/robots | ✅ | `/gallery` added to `sitemap.ts`, confirmed present in the generated `/sitemap.xml` |
| 8.10 | Analytics | ✅ (needs confirmation) | GA4 (`G-NR6WEWK97P`) is installed and a Google verification tag is present — I can't tell from code whether that Google account is CHCI-controlled or personal; that needs your confirmation |
| 8.11 | Domain/hosting ownership | 🚫 | Not visible from code |
| 8.12 | Email accounts | 🚫 | Not frontend |

---

## Priority 2 — CHCI Website, conciergehealthcareinternational.com (audit §9)

🚫 **Entirely separate Wix site, not in this codebase.** Nothing here is touchable from this repo.

---

## Appendix A — 2024 Honoree Copy

❌ Not implemented. The audit's ready-to-paste copy (honoree bios, "Presented by / Accepted by" lines, image specs) has no home yet — this is the `6.1` gap above, called out separately because the audit treats it as its own deliverable with exact copy already written and waiting.

---

## What's actually been built (not audit items, but real work this week)

For context on where effort *has* gone: full ticket-card redesign (real perforated-ticket look), hero redesign (chips, marquee, split CTA button), true black/gold theme pass, flip-clock countdown, 3D gallery carousel + `/gallery` page, footer redesign with gradient card. All of that is aesthetic/UX work the client asked for directly in chat — separate track from this audit, and it's why the audit items above haven't moved: two different workstreams have been running, and only one of them has been getting attention.

---

## Suggested order for what's left

**Done: all of §2 (Eromo removal), §3 (CHCI as presenter), and the first mechanical batch of §5/§8 — 20 items closed.**

1. **Needs a quick answer from you, then mechanical** — 5.8 (dropdown options — audit already gives the list, just needs building), 5.4 spelling lock ("Concierge Health Care" vs "Concierge Healthcare" — flagged last round, still open).
2. **Needs content from Heather/CHCI first** — 5.6 (verify timeline claims), 5.7 (sponsor benefit copy), 6.1/6.3 (honoree bios + recap), Appendix A page build, 8.7 (honoree/awards section template — can build the empty shell now, needs names later).
3. **Blocked on bigger decisions** — 5.4 ("Second Annual" numbering), payment routing (§4), Getty licensing (6.2).
4. **Small remaining gap, low priority** — 8.2 (Donate link) resolves itself once 4.4/5.8 land; 8.8 (retire the manual reservation modal) waits on real checkout (4.2).
