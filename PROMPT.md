Act as a Senior Full-Stack Developer, UI/UX Designer, and Local-SEO Specialist.

Build a professional, modern, mobile-first business website for:

Business: Island Hands, LLC  
Location: Bainbridge Island, WA (Kitsap County service area)

This must feel like a “Professional Facility & Service Partner” (B2B + municipal/government-ready credibility), not a casual residential cleaning site.

==================================================
1) COMPANY CONTEXT
==================================================
Island Hands, LLC is a trusted local provider. They handle commercial/municipal janitorial work (public facilities) AND residential services.

Core services to show clearly:
- Janitorial Services (Commercial/Municipal)
- Office & House Cleaning
- Carpet Cleaning
- Moving Services
- Delivery & Pickup
- Pressure Washing
- Demolition
- General Labor

Primary goals:
1) Build trust (reliable, professional, insured/bonded-ready vibe)
2) Conversion (make quote requests easy)
3) Local SEO (Bainbridge Island + Kitsap County keywords)

==================================================
2) TECH REQUIREMENTS (IMPORTANT)
==================================================
Frontend:
- React using Create React App (NOT Vite)
- TailwindCSS
- React Router
- Mobile-first responsive design
- Modern UI: cards, badges, clean typography, subtle shadows, good spacing
- Language switcher (English default) using react-i18next

Backend:
- Only if needed for contact form:
  - Node.js + Express
  - POST /api/contact
  - MVP: store submissions in a local JSON file AND log to console
  - Provide .env.example for optional email later (do not require paid services)

No database required for this marketing site MVP.

==================================================
3) MULTI-LANGUAGE (i18n) REQUIREMENTS
==================================================
Default language: English
Supported languages:
- en (English)
- fr (French)
- es (Spanish)
- zh-CN (Chinese Simplified)

Implement with:
- i18next
- react-i18next

Rules:
- No hard-coded UI strings in components
- All UI text must use: t("key.path")
- Language switcher in top nav (desktop + mobile)
- Persist choice to localStorage: key "app_lang"
- Use Intl for date/currency formatting if needed

Translation files per app:
src/i18n/locales/en/translation.json
src/i18n/locales/fr/translation.json
src/i18n/locales/es/translation.json
src/i18n/locales/zh-CN/translation.json

==================================================
4) IMAGE ASSETS (VERY IMPORTANT)
==================================================
All images are inside the project root folder: /img

Use them exactly as follows:

Homepage Hero:
- img/hero-cleaning.jpg

Trust / Equipment Section:
- img/equipment-van-1.jpg
- img/equipment-van-2.jpg
- img/equipment-closeup.jpg

Services Page images (cards/sections):
- Janitorial / Office: img/commercial-cleaning.jpg
- Carpet: img/carpet-machine.jpg
- Carpet: img/carpet-stairs.jpg
- Sanitizing: img/sanitizing-backpack.jpg
- Residential: img/residential-cleaning.jpg
- Moving / General Labor: img/moving-service.jpg

Safety section:
- img/bathroom-safety.jpg

About page credibility:
- img/training-certificate.jpg

Contact page background:
- img/floor-cleaning-office.jpg

Image display rules:
- Rounded corners + subtle shadows
- Responsive
- Lazy load images
- Add dark overlay on hero so text is readable
- Optimize performance: compress and convert to WebP when possible

==================================================
5) PAGES (REQUIRED)
==================================================
Create these pages and routes:

1) Home (/)
- Hero section (image, headline, subheadline, CTA buttons)
- Trust badges strip (insured/bonded-ready, fast response, local, commercial contracts)
- Services overview grid (cards + icons + short text + link)
- “How it works” (3 steps)
- Testimonials section (placeholder)
- CTA section (Request a Quote)
- Footer with service area

2) Services (/services)
- Clear “Commercial / Municipal” section first
- Then Residential section
- Each service category has:
  - image
  - short description
  - bullet list
  - CTA button “Request a Quote”
- Add a section called:
  - “Commercial & Municipal Ready”
  Mention reliability + safety + professional equipment

3) About / Credibility (/about)
- Local story (Bainbridge Island focus)
- Mission + values
- Credentials/training section (use training certificate image)
- “Who we serve” (municipal, commercial, residential)
- CTA

4) Contact (/contact)
- Contact form with validation:
  - name, email, phone, service type dropdown, message
- Clear service area section
- Map embed placeholder (no API key required)
- Business hours + response time promise
- Submit should call backend if backend is created, otherwise do a front-end fallback message

==================================================
6) SEO REQUIREMENTS (LOCAL SEO)
==================================================
- Add per-page <title> and meta description
- Add OpenGraph tags
- Add JSON-LD LocalBusiness schema (placeholders for phone/address)
- Use local keywords naturally in headings and content:
  - Bainbridge Island janitorial services
  - Kitsap County facility services
  - commercial cleaning Bainbridge Island
- Use proper heading structure (one H1 per page)

==================================================
7) DESIGN DIRECTION
==================================================
Design language: professional, clean, “hard-working”, corporate-ready.

Color palette:
- slate blues
- forest greens
- crisp whites
- high-contrast CTA color for buttons

UI patterns:
- sticky top nav on mobile
- mobile drawer menu
- cards for services
- status/trust badges
- clean call-to-action buttons
- consistent spacing

==================================================
8) DELIVERABLES (WHAT YOU MUST OUTPUT)
==================================================
Step A — Show the full folder structure first.

Step B — Scaffold the project with code:
- CRA + Tailwind setup
- React Router pages
- i18n setup with 4 languages
- Navbar with language switcher + mobile menu
- Home page with hero + trust + services grid + CTA
- Services page with content outline + starter copy
- About page with credibility + certificate section
- Contact page with form + validation + service area

Step C — (Optional) Add backend:
- express server folder (e.g. /server)
- POST /api/contact
- Save submissions to a local JSON file
- Include .env.example

Step D — Provide “how to run” commands clearly.

==================================================
9) START NOW
==================================================
Start by producing:
1) The folder structure
2) The main App layout (App.jsx + Router + Navbar + Footer)
3) A responsive Home Hero section using img/hero-cleaning.jpg
4) Services page outline + starter copy (commercial/municipal first)
Then continue building the rest.