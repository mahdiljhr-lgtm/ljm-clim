// LJM Clim offline cache (generated at build time).
const CACHE = 'ljm-clim-1.5.1-1794141982446';
const FILES = ["./","./assets/App-Csu9R-19.js","./assets/InstallHint-DhCLmhuN.js","./assets/Lab3D-CCnK6i8_.js","./assets/aiPrompt-DDlijh-I.js","./assets/arabic-400-C4fpvNYa.css","./assets/arabic-600-DfnZHZ36.css","./assets/arabic-700-BDt49Y6b.css","./assets/arabic-700-C59oaava.css","./assets/backend-zaFTbIPf.js","./assets/client-DAw1N-jy.js","./assets/global-DFM9vrkP.css","./assets/index-BGcN7SqV.js","./assets/inter-latin-400-normal-C38fXH4l.woff2","./assets/inter-latin-400-normal-CyCys3Eg.woff","./assets/inter-latin-600-normal-CiBQ2DWP.woff","./assets/inter-latin-600-normal-LgqL8muc.woff2","./assets/inter-latin-800-normal-BYj_oED-.woff2","./assets/inter-latin-800-normal-D1mf63XC.woff","./assets/jsx-runtime-MKhVqBIO.js","./assets/latin-400-C_EDAeTs.css","./assets/latin-600-BoopVwW2.css","./assets/latin-800-Czfn3zVL.css","./assets/noto-kufi-arabic-arabic-700-normal-CGKuvZQr.woff2","./assets/noto-kufi-arabic-arabic-700-normal-SbQDc0eq.woff","./assets/noto-sans-arabic-arabic-400-normal-AAMxebZb.woff2","./assets/noto-sans-arabic-arabic-400-normal-hsqIUL9Q.woff","./assets/noto-sans-arabic-arabic-600-normal-JLzruTOp.woff","./assets/noto-sans-arabic-arabic-600-normal-JPxwL-XU.woff2","./assets/noto-sans-arabic-arabic-700-normal-3CqrwsiZ.woff2","./assets/noto-sans-arabic-arabic-700-normal-DXnsSW3z.woff","./assets/react-DlPsW1c0.js","./assets/rolldown-runtime-sJBDdmOt.js","./assets/sql-wasm-browser-B-9ndiyM.wasm","./assets/web-BQMggtyr.js","./assets/web-Dnu4Pyoe.js","./icon-180.png","./icon-192.png","./icon-512.png","./icon-maskable-512.png","./index.html","./manifest.webmanifest","./telecharger.html"];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin) return; // AI / time requests go to the network
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then((hit) => hit || fetch(e.request).then((r) => {
      if (r.ok) caches.open(CACHE).then((c) => c.put(e.request, r.clone()));
      return r;
    }).catch(() => caches.match('./')))
  );
});
