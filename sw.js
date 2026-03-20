const CACHE_NAME = 'gas-dokumenter-v3';

// Daftar semua file yang ada di foldermu agar langsung tersimpan di cache HP
const assetsToCache = [
  './',
  './index.html',
  './manifest.json',
  './background-baru.svg',
  './ruby-bulat.svg',
  './ruby-text.svg',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assetsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
