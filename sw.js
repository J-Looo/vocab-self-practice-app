const CACHE_NAME = 'vocab-cache-v1';
const urlsToCache = [
  'index.html',
  'manifest.json',
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/react@18/umd/react.production.min.js',
  'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js',
  'https://unpkg.com/@babel/standalone/babel.min.js'
];

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
    // 必須有這個 fetch 監聽器，瀏覽器才會給予 App 資格
    event.respondWith(fetch(event.request));
});
