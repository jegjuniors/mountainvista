# Mountain Vista Estates — Project Handoff
_Last updated: May 21, 2026 · 2026 AGM financials flagged Under Review · Water Co-op board 7th spot added (Looking for Volunteers)_

---

## Project Overview

A community website for **Mountain Vista Estates**, a small hamlet of 42 lots in **Cardston County, Alberta (T0K 1W0)**. The site serves as a central communication hub for two volunteer-run governing bodies:

- **Mountain Vista Water Co-op** — manages potable water, infrastructure, snow removal, regulatory compliance
- **Community Committee** — manages events, common areas, garbage, pond, beautification

The site is hosted on **Netlify** at **`https://mountainvistaestates.netlify.app`**, deployed via **GitHub → Netlify** (auto-deploys on push to main). The GitHub repo is named **`mountainvista`**. Contact form uses **Netlify Forms** (built-in, no backend needed).

---

## File Structure

```
mountainvista/                          ← GitHub repo root
├── index.html                          ← Single-page site (all sections)
├── contact-watercoop.html              ← Water Co-op contact form page
├── contact-committee.html              ← Community Committee contact form page
├── _headers                            ← Netlify headers (Content-Type + Content-Disposition: attachment)
├── images/
│   ├── Site_Hero-Image.png             ← NEW hero image (full-width, text baked in)
│   ├── sunset.jpg                      ← No longer used in hero (keep for now)
│   └── sign.jpg                        ← No longer used in hero (keep for now)
└── docs/
    ├── 2022_AGM_Report.pdf
    ├── 2023_AGM_Report.pdf
    ├── 2024_AGM_Report.pdf
    ├── 2025_AGM_Report.pdf
    ├── 2026_AGM_Report.pdf
    ├── MountainVista_Community_Survey_2026.pdf
    ├── Emergency_Response_Plan.pdf             ← v4.1 Dec 9 2024 (PDF, replaces old docx)
    ├── Mountain_Vista_Water_Co-Op_Membership_Agreement.pdf
    ├── Section_6_Addendum_v2.pdf
    ├── Annual_General_Meeting_12APR2025.pdf    ← replaces agm_2025_minutes.docx
    ├── Annual_General_Meeting_20APR2024.pdf    ← replaces agm_2024_minutes.docx
    ├── 2020___2021_AGM_Minutes.pdf             ← replaces agm_2020_2021_minutes.docx
    ├── agm_2022_minutes.pdf                    ← unchanged
    ├── WaterCoop_MeetingMinutes_May18_2026.pdf
    └── GCBD_Rules_and_Regulations_2026.pdf
```

> **`_headers`** must always be present. Sets Content-Type AND Content-Disposition: attachment on all PDFs and docx files.
>
> **⚠️ IMPORTANT — upload Site_Hero-Image.png** to the `images/` folder in the GitHub repo before deploying.
>
> **Old docx files** (agm_2025_minutes.docx, agm_2024_minutes.docx, agm_2020_2021_minutes.docx, Emergency_Response_Plan.docx, Rules_and_Regulations.docx) are no longer linked — can be deleted from repo.
>
> **IMPORTANT — version drift:** Always upload the latest index.html from the GitHub repo before making changes. Never use the project folder version without checking it first.

---

## Site Sections (in order)

| Section | ID | Status | Notes |
|---|---|---|---|
| Navigation | nav | ✅ Complete | Sticky, mobile hamburger; News · Boards · Survey · Meetings · Financials · Minutes · Contact |
| Hero | .hero | ✅ Updated | Full-width Site_Hero-Image.png; text overlay removed; invisible hotspot on Learn More → #announcements |
| Sign Strip | .sign-strip | 🗑️ Removed | No longer needed — sign content is in hero image |
| Stats Strip | .stats-strip | ✅ Complete | 42 lots, 2 boards, 1 co-op, 2026 fiscal year |
| Fire Ban Strip | #fireban-strip | ✅ Manual | Slim bar above Survey Strip — change data-status to update |
| Survey Strip | .survey-strip | ⏳ Temporary | Orange/accent gradient bar — remove after May 29, 2026 @ 5pm when survey closes |
| Announcements | #announcements | ✅ Real data | 8 cards — cards 1, 2 & 3 highlighted |
| Boards | #boards | ✅ Real data | Water Co-op: 7 slots (6 members + 1 open/volunteer); Committee: 6 members |
| Survey Results | #survey | ✅ Real data | 2026 survey (37 responses) |
| Meetings | #meetings | ✅ Real data | 4 past meeting cards |
| Financials | #financials | ⚠️ Under Review | 2026 budget + 2025 actuals flagged Under Review (erroneous data); doc archive entry also flagged |
| Meeting Minutes | #minutes | ✅ Real data | 6 AGM entries, all PDF links |
| FAQ | #faq | ⏳ Coming Soon | Pending board approval — placeholder section + announcement card + nav link |
| Contact Form | #contact | ✅ Complete | Two choice cards → separate pages; new @mountainvistaestates.ca emails |
| Footer | footer | ✅ Complete | www.mountainvistaestates.ca |

---

## Hero Section — Updated May 21, 2026

- **Image:** `images/Site_Hero-Image.png` — full-width, height auto (scales with aspect ratio)
- **Text overlay:** removed entirely (logo, tagline, location text all baked into the image)
- **Buttons:** `.hero-btns-overlay` — absolutely positioned bottom-center over the clean open area below the baked-in text
  - "See Latest News" → `#announcements` (btn-primary / accent orange)
  - "Contact a Board" → `#contact` (btn-outline / white ghost)
  - Responsive: stacks and shrinks on mobile below 600px
- **Sign strip:** removed (was mobile-only; no longer needed)

---

## Fire Ban Strip

Slim bar between Stats Strip and Announcements. **Manual update only.**

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

### Water Co-op Board (7 slots — 6 members + 1 open · updated May 2026)
| Name | Role | Email |
|---|---|---|
| Keith Wagner | President | catapultdesigns@shaw.ca |
| Gina Rebere | Vice President | ginarebere@gmail.com |
| Kylee Gairns | Secretary | kylee.gairns666@gmail.com |
| Julio Gonzalez | Communications Officer | — |
| Denis Dumais | Treasurer | — |
| Brett Hutchinson | Member | — |
| *(Open Position)* | 🙋 Looking for Volunteers | — |

### Community Committee (6 members)
| Name | Role | Email |
|---|---|---|
| Gina Rebere | Committee Member | ginarebere@gmail.com |
| Kylee Gairns | Committee Member | kylee.gairns666@gmail.com |
| Daniel Saretsky | Committee Member | dsaretsky@hotmail.com |
| Dave May | Committee Member | billybob_61@yahoo.com |
| Debra Glaister | Committee Member | debra.glaister@gmail.com |
| Caroline Allain | Committee Member | mcallain@hotmail.com |

### Board Email Buttons
- Email the Water Co-op → watercoop@mountainvistaestates.ca
- Email the Community Committee → mvecommittee@mountainvistaestates.ca

---

## Announcements — 8 Cards

Cards 1, 2 & 3 highlighted: 5px left border + 3px coloured top stripe + tinted shadow.

| # | Title | Tag | Date |
|---|---|---|---|
| 1 ⭐ | FAQ Section — Coming Soon | 📋 Community | May 2026 |
| 2 ⭐ | Community Committee Follow-up Survey — Have Your Say! | 📋 Survey — Action Required | May 15, 2026 |
| 3 ⭐ | 2026 Community Survey — Results Are In! | 📊 Survey Results | May 15, 2026 |
| 4 | May 18 Board Meeting — Minutes Now Available | 📋 Water Co-op | May 19, 2026 |
| 5 | GCBD Rules & Regulations — Important Notice for Lot Owners | 📋 Notice | May 20, 2026 |
| 6 | Irrigation Water Is On for the Season | 💧 Water Co-op | May 19, 2026 |
| 7 | Speed Bumps & Sign Reinstalled | 🏘️ Community | May 7, 2026 |
| 8 | Pond Fountain Is In for the Season | 🌊 Community | May 2, 2026 |
| 9 | Septic Service Reminder — Jim Beck | 🔔 Notice | Apr 27, 2026 |

> **Survey strip** sits between fire ban strip and announcements. Remove after May 29, 2026 @ 5pm (survey deadline). Strip links to Google Form: https://docs.google.com/forms/d/e/1FAIpQLSfXsDGqBQpFis2L3WZMzun8cW_H9XiAdGD9BKqsmXx0PPpAWw/viewform

---

## Survey Results Section

Based on Community Committee survey sent April 27, 2026 — 37 respondents.

Approved: Pond Pellets 54.1% · Equipment Shed 70.3% · Weed Spraying 67.6% · August Long 54.1% · NYE Fireworks 56.8%
Not Supported: New Garbage Trailer 75.7% · Dog Park 83.8% · Dog Park Fencing 91.9% · Stray Animal Fund 67.6%
Priority Pills: Pond 32.4% · Shed 27.0% · Weed Spraying 24.3% · Garbage Trailer 10.8%
Both download buttons → docs/MountainVista_Community_Survey_2026.pdf

---

## Meetings Section

| Date | Event |
|---|---|
| April 18, 2026 | 2026 AGM — 2025 financials, $574/lot budget, board elections |
| January 28, 2026 | Water Co-op Board Meeting — rules review, AGM planning, generator confirmed |
| April 12, 2025 | 2025 AGM — $580/lot, board elections |
| June 4, 2025 | Community Improvement Meeting — survey results, speed bumps, August Long planning |

---

## Financials

### 2026 Approved Budget ⚠️ Under Review
- Annual Fee per Lot: $574 (Total Budget ÷ 42 Lots + $100 Reserve + $50 Optional Community Committee Donation)
- Total budget: $17,800 · Due July 1, 2026
- Line items: Irrigation $8,500 · Electricity $3,100 · Insurance $4,000 · Cistern Cleaning $1,200

### 2025 Year-End Actuals ⚠️ Under Review
- Revenue: $25,661 · Expenses: $25,134 · Net Income: $527
- Reserve Fund: $39,362 · Cash: $5,246 · Total Assets: $132,870

> ⚠️ Both 2026 financials cards, the AGM announcement card, and the 2026 AGM Report archive entry are flagged "Under Review" due to identified errors. Remove flags once corrected report is issued.

### Governance Documents (all download links)
- Emergency Response Plan v4.1 (PDF, Dec 9 2024)
- Water Co-op Membership Agreement (PDF)
- Membership Agreement — Section 6 Addendum (PDF)
- GCBD Rules & Regulations (PDF, May 2026)

---

## Meeting Minutes

| Date | Type | File |
|---|---|---|
| May 18, 2026 | Board Meeting | WaterCoop_MeetingMinutes_May18_2026.pdf |
| April 18, 2026 | AGM | 2026_AGM_Report.pdf |
| April 12, 2025 | AGM | Annual_General_Meeting_12APR2025.pdf |
| April 20, 2024 | AGM | Annual_General_Meeting_20APR2024.pdf |
| April 2, 2022 | AGM | agm_2022_minutes.pdf |
| May 15, 2021 | AGM (2020 & 2021) | 2020___2021_AGM_Minutes.pdf |

> 2023 AGM minutes not available — only the 2023 AGM Report PDF exists.

---

## Contact Section

| Item | Value |
|---|---|
| Water Co-op email | watercoop@mountainvistaestates.ca |
| Community Committee email | mvecommittee@mountainvistaestates.ca |
| Water emergency phone | [Phone Number] — still placeholder |

Contact section now shows two clickable choice cards that link to dedicated pages:
- `contact-watercoop.html` — Water Co-op form (Netlify form name: `contact-watercoop`)
- `contact-committee.html` — Community Committee form (Netlify form name: `contact-committee`)

Each page has a category dropdown, sidebar with board info, and success message on submit.
- Success message "Back to Contact" link goes to `index.html#contact` (fixed May 21 — was incorrectly pointing to `index.html`)

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
--accent:     #c0622a
--muted:      #9a8070
```

### Typography
- Display: Playfair Display (Google Fonts)
- Body: Lato (Google Fonts) — 300, 400, 700

---

## Search Engine Blocking — Added May 21, 2026

- **`robots.txt`** in repo root — tells all crawlers to stay out
- **`<meta name="robots" content="noindex, nofollow">`** in `<head>` of all pages

Pages that need the meta tag:
- [x] `index.html` ← done
- [x] `contact-watercoop.html` ← done
- [x] `contact-committee.html` ← done

Add this line to each contact page, right after `<meta name="viewport" ...>`:
```html
<meta name="robots" content="noindex, nofollow" />
```

> Note: robots.txt and noindex are a polite request — Google and Bing will respect it, but the site remains publicly accessible to anyone with the URL. Not a security measure.

---



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

- Mobile hero fixed: sign panel hidden on mobile, sign-strip shown below hero. ← NOW RESOLVED via new full-width hero image
- Hero replaced May 21 2026: single full-width Site_Hero-Image.png, text overlay removed, Learn More hotspot added
- Board section uses colour-coded top borders: pine = Water Co-op, tan = Committee.
- PDF files in original project uploads were corrupted. Real files re-uploaded by owner.
- Document links: both download attribute AND _headers Content-Disposition required.
- Water Co-op board reverts to 6 members if stale index.html uploaded — always use GitHub version.
- Fire ban live API failed (CORS + server blocks). Manual data-status is permanent solution.
- Footer domain updated to www.mountainvistaestates.ca (was placeholder mountainvista.yourdomain.ca).

---

## ERP PDF Generation

Emergency_Response_Plan.pdf was generated from MVC_ERP_v4_1.docx content using Python/reportlab.
Script location: /home/claude/build_erp_pdf.py (Claude session — recreate in new session to regenerate).
22 pages: cover, TOC, sections 1–4 (10 emergency plans), Appendices A–E including full member contact list.

---

## How to Make Updates

1. Read CURRENT_STATE.md at start of every chat
2. Upload latest index.html from GitHub repo (not project folder)
3. Make edits and push index.html + any new docs to GitHub
4. Netlify auto-deploys on push
5. Ask Claude to update CURRENT_STATE.md after changes

> Never use target="_blank" on doc links — always use download attribute.
> Keep _headers in repo root at all times.

---

## Planned Future Work

- Fill in water emergency phone number
- Upload 2023 AGM minutes if available
- Budget spreadsheets (Excel)
- AGM presentation slides (PowerPoint)
- Fire ban auto-update if Alberta API ever adds CORS support
- **FAQ section** — replace coming-soon placeholder with real FAQ content once board approves
