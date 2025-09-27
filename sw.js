const CACHE_NAME = 'myrep-sales-app-v1';
// Daftar file yang akan disimpan untuk mode offline
const CACHE_FILES = [
  '/',
  '/index.html',
  '/input-data.html',
  '/detail.html',
  '/kartu.html',
  // Jika Anda punya file CSS atau JS terpisah, tambahkan di sini.
  // Contoh: '/style.css',
  '/logo192.png',
  '/logo512.png'
];

// Saat aplikasi di-install, simpan semua file di atas ke cache
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CACHE_FILES);
    })
  );
});

// Saat aplikasi meminta file, coba ambil dari cache dulu
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
