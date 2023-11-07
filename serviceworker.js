const staticPhoneStore = "app"
const assets = [
  "/",
  "/index.html",
  "/airvent.html",
  "/css/style.css",
  "/css/style2.css",
  "/js/index.js",
  "dist/img/boat.jpg",
  "dist/img/cat.jpg",
  "/images/icon-72x72.jpg",
  "/images/icon-96x96.jpg",
  "/images/128x128.jpg",
  "/images/144x144.jpg",
  "/images/152x152.jpg",
  "/images/192x192.jpg",
  "/images/384x384.jpg",
  "/images/512x512.jpg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticPhoneStore).then(cache => {
      cache.addAll(assets)
    })
  )
})
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })