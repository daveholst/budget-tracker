const FILES_TO_CACHE = [
  '/',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  '/index.html',
  '/index.js',
  '/manifest.webmanifest',
  '/service-worker.js',
  '/styles.css',
];

const CACHE_NAME = 'static-files-cache-v1';
const API_CACHE_NAME = 'api-cache-v1';

// install caching
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('static files cached');
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});
