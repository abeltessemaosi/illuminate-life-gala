# Illuminate Life Gala 2026 — Client Audit: What Happened & What To Do

Prepared for: Dev team
Source docs: `Illuminate_Life_Gala_Website_Package.pdf` (audit, Sep 4, 2026) + kickoff call transcript
Today: Sep 5, 2026 · Event: **Thu, Oct 15, 2026** · **40 days out**

---

## 1. What actually happened (read between the lines)

This wasn't rejected for being ugly in a vacuum. Two things collided:

1. **A power/branding shift.** The site was originally built around **Dr. Ersno Eromo** as the founder/face of the gala (his photo, bio, "10,000+ Lives Impacted" stat block, a whole section named `DrErsnoSection3.tsx`, his name in page `<title>`, meta author, meta keywords, and even the FAQ schema — "Who is Dr. Ersno Eromo?"). The Host now wants **Concierge Health Care International (CHCI)**, a 501(c)(3), positioned as the presenting organization instead, with Dr. Eromo's personal presence removed entirely. This is a governance/identity decision, not a design bug — the audit calls it "per the Host's direct instruction."
2. **Genuine aesthetic/content gaps.** No 2024 event photography, no honoree recap, no "past winners" page, broken footer links, placeholder sponsor tiers that just say "Available," an SVG social-preview image that doesn't render as a link preview, and a fake "Second Annual" / stat inconsistencies (500+ vs. actual 450 guests). The client's "we have so many great photos" comment on the call confirms: the site currently uses almost none of them — `public/` has logos and one stock photo (`stock.avif`), nothing from the actual 2024 gala.

Both are real and both are yours to fix. The "removing Eromo" part is Priority 1 not because it's technically hard, but because it's the Host's explicit order — treat it like a legal/compliance directive, not a style choice.

---

## 2. Who's who (from the call — keep this straight)

| Name | Role |
|---|---|
| **Heather Richmond** | Executive Director, Illuminate Life Gala. Wrote the audit. Single point of approval — "no changes on verbal instruction from any other party." (310) 743-2999 |
| **Dr. Ersno Eromo** ("Dr. Romo"/"Dr. Aromo") | The Host / founder being removed from public-facing branding. Still involved operationally (banking details, tickets). |
| **CHCI (Concierge Health Care International)** | The 501(c)(3) nonprofit that must become the presenting org and the entity all money legally routes to. |
| **Tony** | In-office with Dr. Eromo; getting a signature on a letter for Leon. |
| **Zawadi ("Zati")** | Local point person; setting up the technical WhatsApp group. |
| **Leon** | Handling something for "his uncle" (context suggests family connection to an honoree or partner) — needs a signed letter + working links + Getty photo links to forward. |
| **Maron** | Deciding who runs social media (leaning toward "Jenny" — has "an eye" for it — plus a technical partner). |
| **You (dev)** | Building/fixing the site. Heather said reach out directly with questions. |

---

## 3. Cross-check: audit claims vs. actual code (verified Sep 5, 2026)

I checked the repo directly — every flagged item is real, not stale documentation. This matters because it means you can trust the audit's specifics and go straight to the file.

| # | Audit item | Confirmed in code |
|---|---|---|
| 1.1 | "A Legacy of Compassion" section w/ photo, bio, stat block | `components/DrErsnoSection3.tsx` — rendered in `app/page.tsx:188`. Stats: "10,000+ Lives Impacted / 25+ Years / 50+ Communities" match exactly. |
| 1.2 | `/modified.png` with Eromo alt text | Used in `DrErsnoSection3.tsx:40-41`, plus embedded in event schema `app/page.tsx:52,69` |
| 1.3/1.4 | meta author "Dr. Ersno Eromo", keyword "Dr Ersno Eromo gala" | `app/layout.tsx:13,26` |
| 1.5 | Structured data referencing him as performer | `app/page.tsx:63-70` (`performer` object), plus FAQ schema `app/page.tsx:134-138` — **audit didn't even catch this second FAQ reference, so search wider than the doc says** |
| 1.6 | Partner logos: Eromo Ventures, Levy Eromo Media, etc. | `components/Partners.tsx:6,9` (`/EV.png`, `/LEM.png`) — **HOLD, do not remove without Executive Director confirmation** |
| 3.5 | "Illuminate Life Foundation" (entity that doesn't exist) | `app/layout.tsx:27-28` (creator/publisher) AND `app/page.tsx:55` (schema organizer) — two locations, audit only mentions meta tags |
| 5.1 | "500+ Guests" vs. correct 450 | `components/About.tsx:15-16` AND `components/Sponsors.tsx:53` — two locations |
| 5.2 | "Black Tie Optional" vs. correct "Black Tie" | `components/Contact.tsx:160` |
| 5.4 | "Second Annual" | `app/layout.tsx`, `components/Hero.tsx`, `app/page.tsx` — **pending Executive Director confirmation, don't touch yet** |
| 8.3 | og:image / twitter:image is `/icon.svg` | `app/layout.tsx:38,49` — confirmed, SVG won't render as a link preview on iMessage/Slack/FB |
| 8.9 | sitemap/robots | Both exist and look correct (`app/sitemap.ts`, `public/robots.txt`) — this one's actually fine, don't waste time here |
| 4 | Payment processing | **No checkout exists at all.** `lib/api.ts` only POSTs a booking record to a backend (`/api/illuminate/bookings/ticket`) that emails/manually confirms later — no Stripe, no Wix Payments, nothing that moves money. This is the biggest gap, see §4 below. |

---

## 4. The payment problem — read this before you touch tickets

This is where the audit and the call **contradict each other**, and you need to resolve it before "testing tickets this weekend":

- **The call transcript** says ticketing "was built out on Wix" previously, and Heather asks whether to reuse that setup.
- **The actual live codebase** (this repo) is a custom Next.js site where "Reserve Your Seat" just submits a form to a separate backend (`lib/api.ts` → `NEXT_PUBLIC_API_URL`), which per `BACKEND_REQUIREMENTS.md` explicitly does **no payment processing** — "all financial transactions handled manually by admin team."
- **The audit** (§4) demands the opposite: direct checkout for all ticket tiers, tested end-to-end, settling to CHCI's own merchant account, with real receipts showing CHCI's EIN.

So there are two different systems being discussed and neither currently does what CHCI needs. Before you build anything this weekend, get a straight answer to:

1. Is ticketing staying on **this Next.js site + custom backend** (in which case you need to integrate Stripe or similar directly into `lib/api.ts` / `TicketModal.tsx`), or moving to **Wix Payments** (in which case this repo's ticket flow becomes dead code and "Reserve" buttons should just link out to Wix product pages, per audit item 4.2)?
2. Whose merchant account is this — Dr. Eromo's, "Illuminate Life Foundation" (which per the audit doesn't legally exist), or CHCI's? Audit item 4.1 requires it be CHCI's, with CHCI's EIN and bank account.

Don't guess on this — it's explicitly listed as a **pending decision** (audit §10, ref 4.1/4.5) owned by CHCI/Heather. Ask Heather directly; it blocks the Monday launch target from the call.

---

## 5. Marketing/design diagnosis (the "aesthetic" complaint)

Reading the audit + call together, "they hated the aesthetic" breaks down into concrete, fixable things — not vague taste:

- **Zero real event photography.** `public/` currently holds partner logos (`EV.png`, `LEM.png`, `CCH.png`, `CHP.png`, `STF.png`, `MM.png`), one stock photo (`stock.avif`), and Dr. Eromo's photo (`modified.png`, `ersno.jpeg`). Nothing from the actual 2024 gala. A gala site selling $750–$6,500 tickets with no photos of the event it's selling reads as unfinished/generic, regardless of layout quality. Getty photographer Arnold Turner shot the 2024 event — that's the fix, not a redesign (audit §6.2, §A3).
- **Placeholder copy where proof should be.** Sponsorship tiers literally just say "Available" with no benefits (5.7). A gala targeting $50,000+ sponsors needs to show what that buys.
- **No social proof / credibility section.** No past-honorees page, no recap, no "look who showed up last year" — this is normally the strongest conversion lever for a second annual gala and it's completely absent (§6, Appendix A has ready-to-paste copy for exactly this).
- **Broken trust signals.** Dead footer links (`#` for venue/date), a non-rendering social preview image, a misconfigured "Second Annual" claim not yet confirmed by the client themselves. These read as sloppy even before anyone judges the visual design.

Net: the design system itself (fonts, CSS, animations per `PROJECT_STRUCTURE.md`) probably isn't the core issue — the **content it's built to hold is missing or wrong**. Fix content/imagery/copy first; revisit visual polish only if it's still an issue after that.

---

## 6. Timeline (recalculated from today, Sep 5, 2026)

| Milestone | Original date | Status vs. today |
|---|---|---|
| M0 Kickoff call | Mon Sep 8 | 3 days out |
| **M1 Priority 1 live** (Eromo removed, CHCI presenter, payment checkout, emails) | **Fri Sep 11** | 6 days out — tight, especially payments |
| M2 Priority 2 content live | Fri Sep 18 | 13 days out |
| M3 Social handles secured | Fri Sep 18 | 13 days out |
| M4 2024 honoree page staged | Fri Sep 25 | 20 days out |
| M5 Priority 3 / full QA | Wed Sep 30 | 25 days out |
| M6 Content freeze | Thu Oct 1 | 26 days out |
| M7 2026 honorees published | Rolling Oct 1–12 | — |
| M8 Final check | Wed Oct 14 | day before event |
| **Event** | **Thu Oct 15** | **40 days out** |

The call transcript is more aggressive than the written audit: Heather wants ticket testing done **this weekend** and tickets live **Monday** (Sep 8) — earlier than the audit's Sep 11 target. Follow the call's urgency for tickets specifically; follow the doc for everything else.

---

## 7. This weekend's action items (from the call, not the PDF)

1. **Ticket test transaction** — run one real card transaction end-to-end once payment routing (§4 above) is confirmed. Verify money lands in the right account.
2. **Get Dr. Eromo's banking/account details confirmed as current** for whichever payment path is used (per call, this is on Heather/Dr. Eromo's side, not yours to source).
3. **Draft the three transactional emails** (ticket confirmation, sponsor inquiry, what-to-expect/parking/dress-code details) — Heather offered to write the copy if you send her a request.
4. **Get added to the Wix profile** for `illuminatelifegala.com` if ticketing stays there (ask Zawadi/Heather for access — you didn't have it as of the call).
5. Confirm whether the **old Instagram** (@illuminatelifegala, previously run by someone named "Ria," who is no longer reachable) can be recovered via her old CHCI email before assuming it's gone for good.

---

## 8. Decisions you're blocked on (don't build ahead of these)

Straight from audit §10 — do not guess at these, they're explicitly owned by Heather/Host/CHCI:

- Whether Eromo Ventures / Levy Eromo Media / Shuki & Tori Levy Foundation / Concierge Healthcare Partners logos stay on the site as partners (1.6)
- Legal entity name: "Concierge Healthcare International" vs. "Concierge Health Care International" — must be consistent across both sites, receipts, and social
- Whether "Second Annual" numbering is correct (there may be a Dec 2024 listing that changes this)
- Sponsorship tier benefit copy (needed to fix 5.7)
- Rowles vs. Rawles spelling for the 2024 honoree
- Whether to publish Dr. Eromo's name in the 2024 *historical* honoree list for Achieve Brain and Spine (different from removing his *personal profile* — this is a factual record question)
- CHCI's payment account details, EIN, fair-market-value figures for receipts — **this blocks everything in §4**

---

## 9. Suggested order of operations for you specifically

1. Get the payment-routing answer from Heather (§4) — everything ticket-related is stalled without it.
2. Do the Priority 1 code removals (Eromo content, "Illuminate Life Foundation" strings) — these are unblocked, mechanical, and low-risk. Full location list is in §3 above.
3. Add the CHCI "Presented by" line/logo/footer/copyright per audit §3 once you have the correct legal name spelling.
4. Request the Google Drive/Getty photo link and 2024 honoree copy (Appendix A is already paste-ready) and build the honoree page — this is your highest-leverage design fix.
5. Everything else (broken links, og:image, sponsorship copy) is mechanical cleanup — batch it once the above is moving.
