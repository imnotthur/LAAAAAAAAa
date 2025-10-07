self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(app - saudacao - cache).then(cache => {
            return cache.addAll([
                "index.html",
                "manifest.json",
                "banoite.jpg",
                "batarde.jpg",
                "bondia.jpg",
                "goodafter.png",
                "jaotarde (1).jpg",
                "jaotarde.jpg",
                "logobranca (1).jpg",
                "logobranca (1).png",
                "Logobranca512.jpg",
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});