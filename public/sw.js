const cacheName = 'static-files-v2';
const API_CACHE_NAME = 'api-data-cache-v1';
const cacheAssets = [
  '/',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  '/index.html',
  '/index.js',
  '/idb.js',
  '/manifest.webmanifest',
  '/sw.js',
  '/styles.css',
];
// call Install Event
self.addEventListener('install', (e) => {
  console.log('Service Worker: Installed');

  e.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        console.log('Service Worker: Caching Files');
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});

// call Activate Event
self.addEventListener('activate', (e) => {
  console.log('Service Worker: Activated');
  // Remove unwanted caches
  e.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            console.log('Service Worker: Clearing Old Cache');
            return caches.delete(cache);
          }
        })
      )
    )
  );
});

// call fetch event
self.addEventListener('fetch', (e) => {
  console.log('Service Worker: Fetching');
  // check if live available
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
