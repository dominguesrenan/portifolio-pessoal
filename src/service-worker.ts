const CACHE_NAME = 'portfolio-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '/favicon.ico',
    '/robots.txt',
    '/assets/**/*',
];

// @ts-ignore
self.addEventListener('install', (event: ExtendableEvent) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache: Cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

// @ts-ignore
self.addEventListener('fetch', (event: FetchEvent) => {
    event.respondWith(
        caches.match(event.request).then((response: Response | undefined) => {
            if (response) {
                return response;
            }
            return fetch(event.request).then((response: Response) => {
                if (!response || response.status !== 200 || response.type !== 'basic') {
                    return response;
                }
                const responseToCache = response.clone();
                caches.open(CACHE_NAME).then((cache: Cache) => {
                    cache.put(event.request, responseToCache);
                });
                return response;
            });
        })
    );
});

// @ts-ignore
self.addEventListener('activate', (event: ExtendableEvent) => {
    event.waitUntil(
        caches.keys().then((cacheNames: string[]) => {
            return Promise.all(
                cacheNames
                    .filter((cacheName: string) => {
                        return cacheName.startsWith('portfolio-cache-') && cacheName !== CACHE_NAME;
                    })
                    .map((cacheName: string) => {
                        return caches.delete(cacheName);
                    })
            );
        })
    );
});
