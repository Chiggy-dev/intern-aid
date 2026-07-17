# intern-aid — retired, redirects only

This repo exists solely to keep the old link alive. The guide now lives at:

**https://chiggy-dev.github.io/residency-field-guide/**

Source: https://github.com/Chiggy-dev/residency-field-guide

GitHub does not redirect Pages sites when a repo is renamed, so old links and
shared QR codes pointing at `chiggy-dev.github.io/intern-aid` would 404. These
pages forward them instead:

- `index.html` — redirects the root, and unregisters the old service worker.
- `404.html` — forwards deep links, preserving the rest of the path.
- `sw.js` — kill-switch worker that clears the old caches and unregisters, so
  clients that installed the old PWA stop being served the stale app.

Nothing here needs maintenance. Do not add content to this repo.
