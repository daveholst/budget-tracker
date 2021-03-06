const cacheName = 'static-files-v2';
const apiCache = 'api-data-cache-v1';
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
  e.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});

// call Activate Event
self.addEventListener('activate', (e) => {
  // Remove unwanted caches
  e.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cache) => {
          if (cache !== (cacheName || apiCache)) {
            return caches.delete(cache);
          }
        })
      )
    )
  );
});

// call fetch event
self.addEventListener('fetch', (e) => {
  // only apply to GET requests
  if (e.request.method !== 'GET') return;
  // api calls
  if (e.request.url.includes('/api/')) {
    e.respondWith(
      caches
        .open(apiCache)
        .then((cache) =>
          fetch(e.request)
            .then((res) => {
              if (res.status === 200) {
                cache.put(e.request.url, res.clone());
              }
              return res;
            })
            .catch((err) => cache.match(e.request))
        )
        .catch((err) => console.error(err))
    );
    return;
  }

  // check if live files available else send cache
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
