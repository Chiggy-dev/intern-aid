/* Kill-switch service worker for the retired /intern-aid/ scope.
   Replaces the old caching worker: drops every cache and unregisters itself so
   installed clients fall through to index.html and get redirected. */
self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.map(k => caches.delete(k))))
      .then(() => self.registration.unregister())
      .then(() => self.clients.matchAll({ type: "window" }))
      .then(clients => clients.forEach(c => c.navigate(c.url)))
      .catch(() => {})
  );
});
