# Official Assets Directory

Place official **Birasanzwe Initiative** media files in these subfolders so the homepage and future pages can load them cleanly:

- `images/` — Hero poster (`hero-poster.avif`, `hero-poster.webp`, `hero-poster.jpg`), leader portrait (`leader-mugara.webp`), Open Graph image (`og-image.jpg`, 1200×630), and project photography.
- `videos/` — Hero background video (`hero-1080p.webm`, `hero-1080p.mp4`, and optional mobile `hero-720p.webm` / `hero-720p.mp4`).
- `logos/` — Official initiative logo (`birasanzwe-logo.svg`) and official partner logos (`partners/*.svg` or `*.webp`).
- `icons/` — Custom UI/brand icons and `/apple-touch-icon.png` (180×180).

Once placed here, wire the paths in `src/content/home.ts` and `index.html`.
