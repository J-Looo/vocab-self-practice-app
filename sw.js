// sw.js - 基礎空殼版本 (不干擾網頁載入)
self.addEventListener('install', (event) => {
    // 什麼都不做，直接跳過
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    // 什麼都不做，確保舊的攔截行為失效
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    // 不做任何離線快取攔截，保證網頁 100% 從網路載入
    // 這能防止出現空白畫面的問題
});
