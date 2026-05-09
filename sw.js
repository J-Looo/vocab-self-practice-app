// sw.js 安全相容版
const CACHE_NAME = 'vocab-app-v2';

// 僅快取你自己的基本檔案
const ASSETS = [
  './',
  './index.html',
  './site.webmanifest',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // 使用 map 逐一嘗試，避免其中一個檔案失敗導致整個 SW 掛掉
      return Promise.allSettled(ASSETS.map(url => cache.add(url)));
    })
  );
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // 核心修復：如果是在線請求，直接讓它通過，失敗才找快取
  e.respondWith(
    fetch(e.request).catch(() => {
      return caches.match(e.request);
    })
  );
});
