# Building Ideas Limited — Website

Marketing website for **Building Ideas Limited**, a Ghana-based construction company
specialising in **Project Management**, **Design & Build**, and
**General & Maintenance Construction**.

_Innovation · Style · Dedication_

## Pages

| Page | File | Highlights |
| ---- | ---- | ---------- |
| Home | `index.html` | Hero with **Schedule a Strategy Session** CTA, **Featured Clients** logo slider, services, featured projects |
| Services | `services.html` | Three core services, five sectors, delivery process |
| Case Studies | `projects.html` | Filterable portfolio of delivered & on-going projects |
| About | `about.html` | Company story, mission, management team, plant & capacity |
| Contact | `contact.html` | Contact details + strategy-session enquiry form |

## Tech

Static **HTML + CSS + vanilla JS** — no build step, no dependencies. Brand colours
(deep navy + amber) and typography (Lexend / Source Sans 3) live as design tokens in
`css/styles.css`.

## Run locally

```bash
python3 -m http.server 8000
# open http://127.0.0.1:8000
```

Or simply open `index.html` in a browser.

## Deploy

Any static host works — GitHub Pages, Netlify, Vercel, Cloudflare Pages, or an S3
bucket. Point it at the repository root; `index.html` is the entry point.

## Contact

P.O. Box DF 793, Adenta Flats, Accra, Ghana, West Africa
+233 24 463 3327 · +233 24 428 6978 · info@buildingideasltd.com
