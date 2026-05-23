# Mountain Vista Estates — Project Handoff
_Last updated: May 23, 2026 · May 18 minutes added + amended; board roster updated; septic card updated; footer timestamp added_

---

## Project Overview

A community website for **Mountain Vista Estates**, a small hamlet of 42 lots in **Cardston County, Alberta (T0K 1W0)**. The site serves as a central communication hub for two volunteer-run governing bodies:

- **Mountain Vista Water Co-op** — manages potable water, infrastructure, snow removal, regulatory compliance
- **Community Committee** — manages events, common areas, garbage, pond, beautification

The site is hosted on **Netlify** at **`https://mountainvistaestates.ca`**, deployed via **GitHub → Netlify** (auto-deploys on push to main). The GitHub repo is named **`mountainvista`**. Contact form uses **Netlify Forms** (built-in, no backend needed).

---

## File Structure

```
mountainvista/                          ← GitHub repo root
├── index.html                          ← Single-page site (all sections)
├── contact-watercoop.html              ← Water Co-op contact form page
├── contact-committee.html              ← Community Committee contact form page
├── confirm.html                        ← Netlify Identity invite/password-set handler
├── netlify-identity-invite-email.html  ← Custom invite email template (set in Netlify Identity settings)
├── robots.txt                          ← Blocks all search engine crawlers
├── _headers                            ← Netlify headers (Content-Type + Content-Disposition: attachment)
├── images/
│   ├── Site_Hero-Image.png             ← Hero image (full-width, text baked in)
│   ├── MVEWC_Card.png                  ← Water Co-op card image (used in invite email footer)
│   ├── sunset.jpg                      ← No longer used in hero (keep for now)
│   └── sign.jpg                        ← No longer used in hero (keep for now)
└── docs/
    ├── 2022_AGM_Report.pdf             ← 🔒 Gated
    ├── 2023_AGM_Report.pdf             ← 🔒 Gated
    ├── 2024_AGM_Report.pdf             ← 🔒 Gated
    ├── 2025_AGM_Report.pdf             ← 🔒 Gated
    ├── 2026_AGM_Report.pdf             ← 🔒 Gated
    ├── MountainVista_Community_Survey_2026.pdf   ← ✅ Public
    ├── Emergency_Response_Plan.pdf               ← ✅ Public (v4.1 Dec 9 2024)
    ├── Mountain_Vista_Water_Co-Op_Membership_Agreement.pdf  ← 🔒 Gated
    ├── Section_6_Addendum_v2.pdf                ← 🔒 Gated
    ├── Annual_General_Meeting_12APR2025.pdf      ← 🔒 Gated
    ├── Annual_General_Meeting_20APR2024.pdf      ← 🔒 Gated
    ├── 2020___2021_AGM_Minutes.pdf               ← 🔒 Gated
    ├── agm_2022_minutes.pdf                      ← 🔒 Gated
    ├── WaterCoop_MeetingMinutes_May18_2026.pdf   ← 🔒 Gated — amended May 23, 2026
    └── GCBD_Rules_and_Regulations_2026.pdf       ← ✅ Public
```

> **`_headers`** must always be present. Sets Content-Type AND Content-Disposition: attachment on all PDFs and docx files.
>
> **IMPORTANT — version drift:** Always upload the latest index.html from the GitHub repo before making changes. Never use the project folder version without checking it first.
>
> **Old docx files** (agm_2025_minutes.docx, agm_2024_minutes.docx, agm_2020_2021_minutes.docx, Emergency_Response_Plan.docx, Rules_and_Regulations.docx) are no longer linked — can be deleted from repo.

---

## Site Sections (in order)

| Section | ID | Status | Notes |
|---|---|---|---|
| Navigation | nav | ✅ Complete | Sticky, mobile hamburger; News · Boards · Survey · Meetings · Financials · Minutes · Contact + 🔒 Member Login button |
| Hero | .hero | ✅ Updated | Full-width Site_Hero-Image.png; text overlay removed; buttons flow below image on mobile |
| Sign Strip | .sign-strip | 🗑️ Removed | No longer needed — sign content is in hero image |
| Stats Strip | .stats-strip | ✅ Complete | 42 lots, 2 boards, 1 co-op, 2026 fiscal year — single row compact on mobile |
| Fire Ban Strip | #fireban-strip | ✅ Manual | Slim bar above Survey Strip — change data-status to update |
| Survey Strip | .survey-strip | ⏳ Temporary | Orange/accent gradient bar — **remove after May 29, 2026 @ 5pm** when survey closes |
| Announcements | #announcements | ✅ Real data | 9 cards — cards 1, 2 & 3 highlighted; card 3 = May 18 board meeting minutes |
| Boards | #boards | ✅ Real data | Water Co-op: 6 members + 1 open position; Committee: 6 members |
| Survey Results | #survey | ✅ Real data | 2026 survey (37 responses) |
| Meetings | #meetings | ✅ Real data | 4 past meeting cards |
| Financials | #financials | ✅ Gated | 2026 budget + 2025 actuals blurred for non-members; doc archive with gated links |
| Meeting Minutes | #minutes | ✅ Gated | 7 entries incl. May 18 board meeting; all PDF links gated |
| FAQ | #faq | ⏳ Coming Soon | Pending board approval — placeholder section + announcement card + nav link |
| Contact Form | #contact | ✅ Complete | Two choice cards → separate pages; new @mountainvistaestates.ca emails |
| Footer | footer | ✅ Complete | www.mountainvistaestates.ca · Last updated timestamp added May 23, 2026 |

---

## Member Authentication — Added May 22, 2026

**Method:** Netlify Identity (invite-only, per-member logins)
**Managed via:** Netlify dashboard → Identity tab → Users

### Gated Documents (login required) 🔒
| File | Appears In |
|---|---|
| 2022_AGM_Report.pdf | Financials / Minutes |
| 2023_AGM_Report.pdf | Financials |
| 2024_AGM_Report.pdf | Financials |
| 2025_AGM_Report.pdf | Financials |
| 2026_AGM_Report.pdf | Financials / Minutes |
| Annual_General_Meeting_12APR2025.pdf | Minutes |
| Annual_General_Meeting_20APR2024.pdf | Minutes |
| 2020___2021_AGM_Minutes.pdf | Minutes |
| agm_2022_minutes.pdf | Minutes |
| WaterCoop_MeetingMinutes_May18_2026.pdf | Announcements / Minutes |
| Mountain_Vista_Water_Co-Op_Membership_Agreement.pdf | Financials |
| Section_6_Addendum_v2.pdf | Financials |

### Public Documents (no gate) ✅
- Emergency_Response_Plan.pdf
- GCBD_Rules_and_Regulations_2026.pdf
- MountainVista_Community_Survey_2026.pdf

### Gated Financial Data
- **2026 Approved Budget** card — dollar amounts blurred for non-members, 🔒 overlay shown
- **2025 Year-End Actuals** card — dollar amounts blurred for non-members, 🔒 overlay shown
- Clicking either overlay opens the login modal
- On login → blur instantly disappears, numbers visible

### How It Works
- Site is fully public — anyone can browse all content
- Gated doc links → login modal appears for non-members
- Finance cards → amounts blurred with "Members Only" overlay for non-members
- Members log in once per browser session — all gated content unlocks
- Nav shows **🔒 Member Login** (logged out) or **✓ Logged In · Sign Out** (logged in)
- **Member Login** nav button → opens Member Portal modal (explains what access gives them)
- **Gated doc click** → opens Members Only modal (refers to the specific document)

### Managing Members
- **Add:** Netlify dashboard → Identity → Invite users → enter email → member gets invite email
- **Remove:** Netlify dashboard → Identity → find user → delete
- **Registration must be set to:** Invite only (Project configuration → Identity → Registration)

### Invite Flow
1. You invite member via Netlify dashboard
2. Member receives branded invite email (with MVEWC_Card.png footer)
3. Member clicks "Accept Invite & Set Password" → lands on `confirm.html`
4. Netlify Identity widget auto-opens → member sets password
5. On success → redirected to main site, logged in

### Invite Email Template
- File: `netlify-identity-invite-email.html` (in repo root)
- Set in: Netlify → Project configuration → Identity → Emails → Invitation template → Path to template: `/netlify-identity-invite-email.html`
- Uses `{{ .SiteURL }}/confirm/#invite_token={{ .Token }}` to redirect to confirm.html
- Footer image: `images/MVEWC_Card.png`

### confirm.html
- Handles invite_token and recovery_token from URL hash
- Shows a spinner while Netlify Identity widget loads
- Widget auto-opens for member to set password
- On success → redirects to index.html
- If no token in URL → redirects to index.html immediately
- Key fix: `window.netlifyIdentity.APIUrl` must be set BEFORE the widget script loads
- Key fix: `#netlify-identity-widget { display: block !important }` overrides widget's own display:none

### Requesting Access
- Members contact the Water Co-op board via `contact-watercoop.html`
- Category dropdown includes "🔒 Request Member Access" option
- Gate modal note links directly to `contact-watercoop.html`

---

## Hero Section — Updated May 22, 2026

- **Image:** `images/Site_Hero-Image.png` — full-width, height auto (scales with aspect ratio)
- **Text overlay:** removed entirely (logo, tagline, location text all baked into the image)
- **Buttons:** `.hero-btns-overlay` — absolutely positioned bottom-center on desktop
  - "See Latest News" → `#announcements` (btn-primary / accent orange)
  - "Contact a Board" → `#contact` (btn-outline / white ghost)
  - **Mobile (≤600px):** `position: static` — buttons flow below the hero image on a dark background bar
- **Sign strip:** removed (was mobile-only; no longer needed)

---

## Stats Strip — Updated May 22, 2026

- Desktop: 4 items in a row with `1.6rem 3rem` padding, `2rem` stat numbers
- **Mobile (≤600px):** `flex-wrap: nowrap` — all 4 stats in a single compact row
  - Padding: `0.75rem 0`, each item `flex: 1`
  - Stat numbers: `1.3rem`, labels: `0.6rem`

---

## Fire Ban Strip

Slim bar between Stats Strip and Survey Strip. **Manual update only.**

To update, find this line in index.html and change data-status:
```html
<div class="fireban-strip" id="fireban-strip" data-status="none">
```

| Value | Colour | Badge |
|---|---|---|
| none | Green | No Restriction |
| advisory | Amber | Fire Advisory |
| restriction | Orange | Fire Restriction |
| ban | Red | Fire Ban |

"Full Map" link always points to https://www.albertafirebans.ca

> Live API attempts failed — Alberta government ArcGIS API blocks both browser CORS and server-side requests. Manual strip is the permanent solution.

---

## Current Board Members

### Water Co-op Board (6 members — updated May 23, 2026)
| Name | Role |
|---|---|
| Keith Wagner | President |
| Gina Rebere | Vice President |
| Kylee Gairns | Secretary |
| Julio Gonzalez | Communications Officer |
| Denis Dumais | Treasurer |
| Brett Hutchinson | Member — no voting rights |
| _(Open Position)_ | _(Looking for Volunteers)_ |

> Personal emails removed from site. Board contact via watercoop@mountainvistaestates.ca only.
> Dave May, Shane McMorrow, and Sarah Greer resigned May 18, 2026.
> Shane McMorrow remains as Lead Operator (advisory, non-board, no voting rights).
> Brett Hutchinson has no voting rights until an odd number of voting board members is achieved.
> One open position shown on site board roster card.

### Community Committee (6 members)
| Name | Role |
|---|---|
| Gina Rebere | Committee Member |
| Kylee Gairns | Committee Member |
| Daniel Saretsky | Committee Member |
| Dave May | Committee Member |
| Debra Glaister | Committee Member |
| Caroline Allain | Committee Member |

> Personal emails removed from site. Committee contact via mvecommittee@mountainvistaestates.ca only.

### Board Email Buttons
- Email the Water Co-op → watercoop@mountainvistaestates.ca
- Email the Community Committee → mvecommittee@mountainvistaestates.ca

---

## Announcements — 9 Cards

Cards 1, 2 & 3 highlighted: 5px left border + 3px coloured top stripe + tinted shadow.

| # | Title | Tag | Date |
|---|---|---|---|
| 1 ⭐ | FAQ Section — Coming Soon | 📋 Community | May 2026 |
| 2 ⭐ | Community Committee Follow-up Survey — Have Your Say! | 📋 Survey — Action Required | May 15, 2026 |
| 3 ⭐ | May 18 Board Meeting — Minutes Now Available | 📋 Water Co-op | May 19, 2026 · Amended May 23, 2026 |
| 4 | 2026 AGM Minutes — Now Available | 📋 Water Co-op | April 18, 2026 |
| 5 | Irrigation Water Is On for the Season | 💧 Water Co-op | May 19, 2026 |
| 6 | GCBD Rules & Regulations — Important Notice for Lot Owners | 📋 Notice | May 20, 2026 |
| 7 | Speed Bumps & Sign Reinstalled | 🏘️ Community | May 7, 2026 |
| 8 | Pond Fountain Is In for the Season | 🌊 Community | May 2, 2026 |
| 9 | Septic Service — Beck's Septic & Gravel | 🔔 Notice | Apr 27, 2026 |

### Announcement Card Notes
- **Card 3 — May 18 Minutes:** Full summary including all board appointments, voting rights, Shane as Lead Operator, and all action item statuses. Amended May 23, 2026. Links to `docs/WaterCoop_MeetingMinutes_May18_2026.pdf`
- **Card 5 — Irrigation:** Water is on for 2026 season. UID governs irrigation; Water Co-op facilitates communication. Link: https://www.uidistrict.com/
- **Card 9 — Beck's Septic & Gravel:** Contact Jim Beck · 403-382-1839 · jim@becksltd.com

> **Survey strip** sits between fire ban strip and announcements. Remove after May 29, 2026 @ 5pm (survey deadline). Strip links to: https://docs.google.com/forms/d/e/1FAIpQLSfXsDGqBQpFis2L3WZMzun8cW_H9XiAdGD9BKqsmXx0PPpAWw/viewform

---

## Survey Results Section

Based on Community Committee survey sent April 27, 2026 — 37 respondents.

Approved: Pond Pellets 54.1% · Equipment Shed 70.3% · Weed Spraying 67.6% · August Long 54.1% · NYE Fireworks 56.8%
Not Supported: New Garbage Trailer 75.7% · Dog Park 83.8% · Dog Park Fencing 91.9% · Stray Animal Fund 67.6%
Priority Pills: Pond 32.4% · Shed 27.0% · Weed Spraying 24.3% · Garbage Trailer 10.8%
Both download buttons → docs/MountainVista_Community_Survey_2026.pdf (public)

---

## Meetings Section

| Date | Event |
|---|---|
| May 18, 2026 | Water Co-op Board Meeting — board appointments, financial separation, irrigation, shed placement |
| April 18, 2026 | 2026 AGM — 2025 financials, $574/lot budget, board elections |
| January 28, 2026 | Water Co-op Board Meeting — rules review, AGM planning, generator confirmed |
| June 4, 2025 | Community Improvement Meeting — survey results, speed bumps, August Long planning |

---

## May 18, 2026 Board Meeting — Key Details

**Status:** Approved · Amended May 23, 2026
**PDF:** `docs/WaterCoop_MeetingMinutes_May18_2026.pdf`
**Build script:** `/home/claude/build_minutes_pdf.py` (Claude session — recreate in new session if needed)

### Board Appointments Confirmed
| Name | Role | Notes |
|---|---|---|
| Keith Wagner | President | Acclaimed |
| Gina Rebere | Vice President | Voted |
| Kylee Gairns | Secretary | Voted |
| Julio Gonzalez | Communications Officer | Voted |
| Denis Dumais | Treasurer | Voted |
| Brett Hutchinson | Member | No voting rights until odd number of voting members achieved |
| Shane McMorrow | Lead Operator | Non-board, advisory, no voting rights |

### Action Items Status
| Item | Status |
|---|---|
| AFRWC, Rural Utilities Act & pertinent docs acquired, under review | In Progress |
| Co-op manual development | In Progress |
| Website & members-only area | Complete |
| Financial account separation (co-op vs. committee) | In Progress |
| Financial books finalization (Dave May) | In Progress |
| Water filter identification & ordering | In Progress |
| Shed placement | Complete |
| All votes and admissions | Complete |

---

## Financials

### 2026 Approved Budget 🔒 Members Only
- Annual Fee per Lot: $574 (Total Budget ÷ 42 Lots + $100 Reserve + $50 Optional Community Committee Donation)
- Total budget: $17,800 · Due July 1, 2026
- Line items: Irrigation $8,500 · Electricity $3,100 · Insurance $4,000 · Cistern Cleaning $1,200

### 2025 Year-End Actuals 🔒 Members Only
- Revenue: $25,661 · Expenses: $25,134 · Net Income: $527
- Reserve Fund: $39,362 · Cash: $5,246 · Total Assets: $132,870

### Governance Documents
- Emergency Response Plan v4.1 (PDF, Dec 9 2024) ✅ Public
- Water Co-op Membership Agreement (PDF) 🔒 Gated
- Membership Agreement — Section 6 Addendum (PDF) 🔒 Gated
- GCBD Rules & Regulations (PDF, May 2026) ✅ Public

---

## Meeting Minutes

| Date | Type | File | Access |
|---|---|---|---|
| May 18, 2026 | Board Meeting (Amended May 23) | WaterCoop_MeetingMinutes_May18_2026.pdf | 🔒 Gated |
| April 18, 2026 | AGM | 2026_AGM_Report.pdf | 🔒 Gated |
| April 12, 2025 | AGM | Annual_General_Meeting_12APR2025.pdf | 🔒 Gated |
| April 20, 2024 | AGM | Annual_General_Meeting_20APR2024.pdf | 🔒 Gated |
| April 2, 2022 | AGM | agm_2022_minutes.pdf | 🔒 Gated |
| May 15, 2021 | AGM (2020 & 2021) | 2020___2021_AGM_Minutes.pdf | 🔒 Gated |

> 2023 AGM minutes not available — only the 2023 AGM Report PDF exists.

---

## Contact Section

| Item | Value |
|---|---|
| Water Co-op email | watercoop@mountainvistaestates.ca |
| Community Committee email | mvecommittee@mountainvistaestates.ca |
| Water emergency phone | [Phone Number] — still placeholder |

- `contact-watercoop.html` — Water Co-op form (Netlify form name: `contact-watercoop`)
  - Category dropdown includes: 🔒 Request Member Access (first option)
- `contact-committee.html` — Community Committee form (Netlify form name: `contact-committee`)

---

## contact-watercoop.html — Updated May 22, 2026

- **Page header mobile:** `h1` font-size reduced to `1.5rem` at ≤768px
- **"What we handle" — Irrigation bullet:** "Irrigation — facilitating communication between residents and United Irrigation District" with link to https://www.uidistrict.com/

---

## Footer — Updated May 23, 2026

- Copyright © 2026
- **Last updated timestamp** below copyright line — subtle (0.72rem, 20% white opacity)
- Format: `Last updated: May 23, 2026 — 11:45 PM MT`
- **Update this manually each time changes are deployed**

---

## United Irrigation District (UID)

- **Website:** https://www.uidistrict.com/
- **Role:** Governs the irrigation system for the Mountain Vista Estates community
- **Water Co-op role:** Facilitates communication between residents and the UID
- Referenced in: Irrigation announcement card (index.html) + What we handle list (contact-watercoop.html)

---

## Design System

### Colours
```css
--cream:      #faf6ef
--warm-white: #fff9f2
--sand:       #e8d9c0
--tan:        #c9a97a
--brown:      #8b6340
--dark:       #3a2a1a
--pine:       #4a6741
--pine-light: #6a9165
--sky:        #7aa3b8
--accent:     #c0622a
--muted:      #9a8070
```

### Typography
- Display: Playfair Display (Google Fonts)
- Body: Lato (Google Fonts) — 300, 400, 700

---

## Search Engine Blocking

- **`robots.txt`** in repo root — tells all crawlers to stay out
- **`<meta name="robots" content="noindex, nofollow">`** in `<head>` of all pages

Pages with meta tag:
- [x] `index.html`
- [x] `contact-watercoop.html`
- [x] `contact-committee.html`
- [x] `confirm.html`

> Note: robots.txt and noindex are a polite request — not a security measure. Site remains publicly accessible to anyone with the URL.

---

## Google Analytics

- **Platform:** Google Analytics 4 (GA4)
- **Measurement ID:** `G-6ZLRQL5VH1`
- **Added:** May 20, 2026
- Snippet placed in `<head>` of `index.html`, immediately after the Google Fonts `<link>` tag
- Tracks page views automatically; verify in GA4 → Reports → Realtime after deploy

---

## Remaining Placeholders

- [ ] Water emergency phone number — shown as [Phone Number] in contact sidebar
- [ ] 2023 AGM Minutes — report exists but no standalone minutes doc

---

## Known Issues / History

- Mobile hero fixed: sign panel hidden on mobile, sign-strip shown below hero. ← RESOLVED via new full-width hero image
- Hero replaced May 21 2026: single full-width Site_Hero-Image.png, text overlay removed
- Mobile hero buttons fixed May 22 2026: position:static on ≤600px, buttons flow below image on dark bar
- Mobile stats strip fixed May 22 2026: flex-wrap:nowrap forces single row, smaller padding and font sizes
- Board section uses colour-coded top borders: pine = Water Co-op, tan = Committee
- PDF files in original project uploads were corrupted. Real files re-uploaded by owner
- Document links: both download attribute AND _headers Content-Disposition required
- Water Co-op board reverts to old version if stale index.html uploaded — always use GitHub version
- Fire ban live API failed (CORS + server blocks). Manual data-status is permanent solution
- Footer domain updated to www.mountainvistaestates.ca (was placeholder)
- Netlify Identity widget had display:none applied by CSS — fixed with `#netlify-identity-widget { display: block !important }` in confirm.html
- APIUrl must be set via `window.netlifyIdentity.APIUrl` BEFORE the widget script tag loads
- Stats strip mobile fix kept getting lost due to version drift — always verify CSS before pushing
- May 18 minutes PDF generated via reportlab — build script at /home/claude/build_minutes_pdf.py (recreate in new session)

---

## ERP PDF Generation

Emergency_Response_Plan.pdf was generated from MVC_ERP_v4_1.docx content using Python/reportlab.
Script location: /home/claude/build_erp_pdf.py (Claude session — recreate in new session to regenerate).
22 pages: cover, TOC, sections 1–4 (10 emergency plans), Appendices A–E including full member contact list.

---

## How to Make Updates

1. Read CURRENT_STATE.md at start of every chat
2. Upload latest index.html from GitHub repo (not project folder)
3. Make edits and push changed files to GitHub
4. Netlify auto-deploys on push
5. Ask Claude to update CURRENT_STATE.md after changes
6. **Update the footer timestamp** in index.html to reflect the date/time of changes

> Never use target="_blank" on doc links — always use download attribute.
> Keep _headers in repo root at all times.
> Always use GitHub version of index.html — never the project folder version.

---

## Planned Future Work

- Fill in water emergency phone number
- Upload 2023 AGM minutes if available
- Budget spreadsheets (Excel)
- AGM presentation slides (PowerPoint)
- Fire ban auto-update if Alberta API ever adds CORS support
- **FAQ section** — replace coming-soon placeholder with real FAQ content once board approves
- Remove survey strip after May 29, 2026 @ 5pm

---

## PENDING_CHANGES.md — Research Items

- **United Irrigation District** — review uidistrict.com documentation for any additional info worth surfacing on the MVE site (schedule, contact info, seasonal notices, etc.)
