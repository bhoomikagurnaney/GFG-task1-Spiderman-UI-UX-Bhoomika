# Spider-Man: Brand New Day — Movie Landing Page
A responsive movie landing page and companion timeline page built for the
"Spider-Man: Brand New Day" front-end assignment. Built with plain HTML, CSS
and JavaScript

## Live Demo
- Landing page: `index.html`
- Timeline page: `timeline.html`
- Deployed link: _add your Vercel / Netlify / GitHub Pages link here_

## Tech Stack
- **HTML5** — semantic markup for both pages
- **CSS3** — custom properties (CSS variables), Flexbox, CSS Grid, media queries
- **Vanilla JavaScript (ES5/ES6 mix)** — no libraries or frameworks
- **Google Fonts** — Anton (display) + Inter (body)
- No build tools required — it's a static site

## Folder Structure
```
spiderman-landing/
├── index.html        # Main movie landing page (hero, about, trailer, cast, FAQ, CTA)
├── timeline.html      # Spider-Man movies timeline page
├── style.css          # Shared stylesheet for both pages
├── script.js           # Shared JavaScript for both pages
└── README.md           # This file
```

## Features

### Landing page (`index.html`)
- Sticky navbar that changes background on scroll
- Mobile hamburger menu
- Hero section with movie title, tagline, key details and a live countdown timer to release day
- About / synopsis section with quick stats
- Embedded official YouTube trailer
- Cast section — click a card to see the actor's role
- FAQ accordion
- "Book Now" CTA buttons throughout, linking to BookMyShow
- Scroll-reveal animations using `IntersectionObserver`
- Back-to-top button

### Timeline page (`timeline.html`)
- Chronological, alternating timeline of every Spider-Man movie (2002 → 2026)
- Same navbar, footer and visual language as the landing page for consistency
- Fully responsive: single-column stack on mobile, alternating two-column layout on larger screens

## AI Tools Used
- Chatgpt was used to find the information used about the movie and its timelines and structured matter for readme file
- Claude was used for some CSS and JS functions

## How to Run Locally
No build step or dependencies are needed.

1. Download / clone this folder.
2. Open `index.html` directly in your browser, **or** serve it locally:
   ```bash
   # using Python
   python3 -m http.server 5500
   # then visit http://localhost:5500 in your browser
   ```
3. Navigate to the Timeline page using the "Timeline" link in the navbar.
