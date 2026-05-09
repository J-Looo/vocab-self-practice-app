const CACHE_NAME = 'vocab-cache-v1';
const urlsToCache = [
  'index.html',
  'manifest.json',
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/react@18/umd/react.production.min.js',
  'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js',
  'https://unpkg.com/@babel/standalone/babel.min.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('vocab-store').then((cache) => cache.addAll([
      './',
      './index.html',
      './manifest.json',
      './icon-192.png',
      './icon-512.png'
    ]))
  );
});

self.addEventListener('fetch', (event) => {
  // 必須攔截請求，瀏覽器才會認為這是合格的 App
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
