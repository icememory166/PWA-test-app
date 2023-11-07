// Perform install steps
let CACHE_NAME = 'my-cache';
let urlsToCache = [
    'assets/css/style.css',
    'assets/css/style2.css',    
    'dist/img/boat.jpg',
    'dist/img/cat.jpg',
    'assets/js/index.js',
    'airvent.html'

    ];

self.addEventListener('install', function(event) {
// Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            console.log('Opened cache');
        return cache.addAll(urlsToCache);
        })
    );
});