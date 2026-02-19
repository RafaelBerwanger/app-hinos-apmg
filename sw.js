/* V2 - Obs, atualizar toda vez que o app for atualizado para carregar as mudanças no APP */
/* O Service Worker é um script que fica rodando em segundo plano. Ele "salva" os arquivos no celular do usuário. */
const CACHE_NAME = 'hinos-v1';
const ASSETS = [
    '/',
    '/index.html',
    '/stylesheet.css',
    '/script.js',
    '/img/pmpr.png',
    '/img/apmg.png'
];

// Instala o Service Worker e guarda os arquivos no cache
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
    );
});

// Responde com o cache quando estiver offline
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((res) => res || fetch(e.request))
    );
});