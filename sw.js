const VERSION = "v1";

self.addEventListener("install", (event) => {
    event.waitUntil(precache());
});

self.addEventListener("fetch", (event) => {
    const request = event.request;
    //get
    if (request.method !== "GET") {
        return;
    }

    //buscar en cache
    event.respondWith(cachedResponse(request));

    // actualizar en cache
    event.waitUntil(updateCache(request));
});

async function precache() {
    const cache = await caches.open(VERSION);

    return cache.addAll([
        // "/",
        // "/index.html",
        // "/assets/index.js",
        // "/assets/mediaPlayer.js",
        // "/assets/plugins/autoPlay.js",
        // "/assets/plugins/autoPause.js",
        // "/assets/index.css",
        // "/assets/BigBuckBunny.mp4",
    ]);
}

async function cachedResponse(request) {
    const cache = await caches.open(VERSION);
    const response = await cache.match(request);
    return response || fetch(request);
}

//NOTE: Con esta función nos aseguramos de que el usuario siempre está recibiendo contenido actualizado

async function updateCache(request) {
    const cache = await caches.open(VERSION);
    const response = await fetch(request);
    return cache.put(request, response);
}
