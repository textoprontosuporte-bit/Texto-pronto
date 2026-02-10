self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("texto-pronto-v1").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./style.css",
        "./script.js",
        "./icon-192.png",
        "./icon-512.png"
      ]);
    })
  );
});
