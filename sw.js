// sw.js 內容
const CACHE_NAME = 'vocab-app-v1';

self.addEventListener('install', (event) => {
    // 安裝時不強制等待，直接進入 active 狀態
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    // 確保 SW 取得控制權
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    // 必須攔截 fetch 請求，Android 才會顯示「安裝」選項
    event.respondWith(
        fetch(event.request).catch(() => {
            return caches.match(event.request);
        })
    );
});
