# Edrian M. Abiera | Developer Portfolio

Glassmorphism portfolio for a 3rd Year BSIT student and aspiring Web Developer and UI/UX Designer. Plain HTML, CSS and JavaScript. No build step.

## Structure
```
index.html          page markup
css/style.css       all styles (dark and light themes)
js/main.js          settings, animations, carousel, and the 3 project prototypes
assets/images/      put profile.png here
```

## Run locally
Open `index.html` in a browser, or run `python3 -m http.server 8000` and visit http://localhost:8000.

## Replace your photo
Your formal photo is saved as `assets/images/profile.jpg` (portrait, about 4:5, under 300 KB; keep the name profile.jpg or update the path in index.html). Your photo is already included; replace the file to change it.

## Social links
Edit the `LINKS` object at the top of `js/main.js`. Facebook, GitHub and Gmail are already set. The Gmail button opens a Gmail compose window addressed to you.

## Featured projects
The three Live Demo buttons open working prototypes inside the page:
1. Inventory Management System
2. Barangay Document Request and E-Certificate System (QR codes via the qrcodejs library from cdnjs)
3. Waste Segregation Tracking and Route Coordination Platform

These are **front-end prototypes**. Data is saved in the visitor's browser (localStorage) only. There is no server or database, sign-in has no password, and QR verification only works in the browser that issued the certificate.

When you publish each project as its own repository or deployment, update the `PROJECTS` list in `js/main.js` and point the buttons at the real URLs (the Live Demo button currently opens the built-in prototype, and View Source Code opens your GitHub profile).

## Contact form
The form validates input but does **not** send email, because the site has no backend. To deliver messages, connect a service such as Formspree or EmailJS, or rely on the Gmail button.

## Deploy on GitHub Pages
1. Create a new repository on GitHub, e.g. `portfolio` (or `edrian-abiera.github.io` for a root URL).
2. Upload all files in this folder, or from a terminal:
   ```
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/edrian-abiera/portfolio.git
   git push -u origin main
   ```
3. In the repository go to **Settings > Pages**, set Source to **Deploy from a branch**, choose `main` and `/ (root)`, then Save.
4. After a minute the site is live at `https://edrian-abiera.github.io/portfolio/`.

## Browser support
Current Chrome, Edge, Firefox and Safari on desktop and mobile.
