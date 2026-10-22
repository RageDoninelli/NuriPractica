/* Nuri practica — service worker (funciona sin internet) */
var CACHE = 'nuri-practica-v4';
var FILES = ['./', 'index.html', 'style.css', 'engine.js', 'verbs.js', 'content.js', 'content2.js', 'sentences.js', 'sentences_libro.js', 'questions.js', 'app.js', 'manifest.json', 'icon-192.png', 'icon-512.png', 'icon-512-maskable.png'];
self.addEventListener('install', function (e) { e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(FILES); }).then(function () { return self.skipWaiting(); })); });
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (ks) { return Promise.all(ks.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); })); }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  e.respondWith(fetch(e.request).then(function (r) {
    var copy = r.clone(); caches.open(CACHE).then(function (c) { c.put(e.request, copy); }); return r;
  }).catch(function () { return caches.match(e.request).then(function (m) { return m || caches.match('index.html'); }); }));
});
