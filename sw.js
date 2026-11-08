// LJM Clim offline cache (generated at build time).
const CACHE = 'ljm-clim-2.0.0-1794171417380';
const FILES = ["./","./assets/App-DINUbrX9.js","./assets/InstallHint-DhCLmhuN.js","./assets/Lab3D-B5AD0tOI.js","./assets/aiPrompt-BRD8O5JA.js","./assets/arabic-400-C4fpvNYa.css","./assets/arabic-600-DfnZHZ36.css","./assets/arabic-700-BDt49Y6b.css","./assets/arabic-700-C59oaava.css","./assets/armoire-BDp5fwMo.jpg","./assets/backend-BOf5-Dmn.js","./assets/cap_podium-C7_jGEH4.jpg","./assets/cap_swollen-DomnKMRH.jpg","./assets/cassette-BatNV2WE.jpg","./assets/client-DAw1N-jy.js","./assets/comp_rotary-D9ov6G4E.jpg","./assets/comp_scroll-9oP5tUBk.jpg","./assets/console-Bkw0gBHV.jpg","./assets/copper-D3hvs9Ae.jpg","./assets/drain_clog-DrBvzPvY.jpg","./assets/eev-BkRf-lH7.jpg","./assets/filter-BOsBDJ_2.jpg","./assets/gainable-CAhEP7VF.jpg","./assets/global-BSFGMG_I.css","./assets/hero_split-CcFHUOPv.jpg","./assets/index-ppu58Nt9.js","./assets/install-C4F3uxpQ.jpg","./assets/inter-latin-400-normal-C38fXH4l.woff2","./assets/inter-latin-400-normal-CyCys3Eg.woff","./assets/inter-latin-600-normal-CiBQ2DWP.woff","./assets/inter-latin-600-normal-LgqL8muc.woff2","./assets/inter-latin-800-normal-BYj_oED-.woff2","./assets/inter-latin-800-normal-D1mf63XC.woff","./assets/inverter_board-CkS2-1Yo.jpg","./assets/jsx-runtime-MKhVqBIO.js","./assets/latin-400-C_EDAeTs.css","./assets/latin-600-BoopVwW2.css","./assets/latin-800-Czfn3zVL.css","./assets/manifold-C_MNgix4.jpg","./assets/mobile-BjHIcJUW.jpg","./assets/noto-kufi-arabic-arabic-700-normal-CGKuvZQr.woff2","./assets/noto-kufi-arabic-arabic-700-normal-SbQDc0eq.woff","./assets/noto-sans-arabic-arabic-400-normal-AAMxebZb.woff2","./assets/noto-sans-arabic-arabic-400-normal-hsqIUL9Q.woff","./assets/noto-sans-arabic-arabic-600-normal-JLzruTOp.woff","./assets/noto-sans-arabic-arabic-600-normal-JPxwL-XU.woff2","./assets/noto-sans-arabic-arabic-700-normal-3CqrwsiZ.woff2","./assets/noto-sans-arabic-arabic-700-normal-DXnsSW3z.woff","./assets/react-DlPsW1c0.js","./assets/refrigerants-n9rXdhiq.jpg","./assets/rolldown-runtime-sJBDdmOt.js","./assets/sql-wasm-browser-B-9ndiyM.wasm","./assets/tech_phone-D_RffI6H.jpg","./assets/vanne4v-DO0Kn7Oy.jpg","./assets/web-CBYz4yux.js","./assets/web-CzeDyHX3.js","./icon-180.png","./icon-192.png","./icon-512.png","./icon-maskable-512.png","./index.html","./manifest.webmanifest","./telecharger.html"];
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
