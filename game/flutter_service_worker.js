'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"icons/Icon-512.png": "509fd7c82b74059d3c69f91dc2f12a3e",
"icons/Icon-maskable-512.png": "509fd7c82b74059d3c69f91dc2f12a3e",
"icons/Icon-192.png": "4fa4055236ba55d26ac2e639ad3854f3",
"icons/Icon-maskable-192.png": "4fa4055236ba55d26ac2e639ad3854f3",
"manifest.json": "8b23ac60f0a09f8d43c919f20b34416d",
"main.dart.mjs": "3e7ee34580e2c845cc2274d8fb8d8892",
"index.html": "b611e647579422d095faec0f9046c4fa",
"/": "b611e647579422d095faec0f9046c4fa",
"splash/img/light-4x.png": "e0fd7d741ef020ab7dd8f81e5cd6f75d",
"splash/img/dark-4x.png": "e0fd7d741ef020ab7dd8f81e5cd6f75d",
"splash/img/dark-3x.png": "dcee90052ee544a76642a945ed15f9a7",
"splash/img/dark-1x.png": "6f4a9988536d1d5e68c22a13f9df346f",
"splash/img/dark-2x.png": "25193f0e3c0badba5cead1dab82eef27",
"splash/img/light-1x.png": "6f4a9988536d1d5e68c22a13f9df346f",
"splash/img/light-3x.png": "dcee90052ee544a76642a945ed15f9a7",
"splash/img/light-2x.png": "25193f0e3c0badba5cead1dab82eef27",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "85a98b8d85dc5242f5d8a0004003247a",
"assets/assets/images/hendrix-person.png": "e972954b78776b660d5867e6854b45a0",
"assets/assets/images/logo.png": "cedd481304cdfb5053ca9ac445de9cb7",
"assets/assets/images/game.webp": "2f3b7b714df78b1881cdca75730fee41",
"assets/assets/sounds/match_full_lucky.ogg": "3415d1339b2b2ad9a81a1609858a5870",
"assets/assets/sounds/match_lucky.ogg": "bd897797fb143775ee95f4458b99cc63",
"assets/assets/sounds/flip.ogg": "b5064ac697712a39259884a87fb14128",
"assets/assets/sounds/README.md": "51fb38ff9a068154e38bba0ef409228b",
"assets/assets/sounds/victory.ogg": "d81c465e176c26ee442c3a8128da9e35",
"assets/assets/sounds/error.flac": "98f06214f8b5081c821623fe0e8ba3b5",
"assets/assets/sounds/match_perfect.ogg": "324b398ab6e790de7ea29c72dda4db34",
"assets/fonts/MaterialIcons-Regular.otf": "8601fef84cc05286ebcb33918d6ec15f",
"assets/NOTICES": "e83262663cfbb55abb65fb42dfd109a3",
"assets/packages/flutter_soloud/web/libflutter_soloud_plugin.js": "7125e998b52325a0c79804c133b3492c",
"assets/packages/flutter_soloud/web/libflutter_soloud_plugin.wasm": "e16d81271adabfafc4ec0a85e7579ae0",
"assets/packages/flutter_soloud/web/init_module.dart.js": "ea0b343660fd4dace81cfdc2910d14e6",
"assets/packages/flutter_soloud/web/worker.dart.js": "2fddc14058b5cc9ad8ba3a15749f9aef",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin": "77fb1cb25bd6a3090598a674e7f3ddcd",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"favicon.png": "9f8a3a8719d534efed1f38acd048f979",
"main.dart.wasm": "a86e65a2d9cbd029f4e0aeec9667803c",
"CNAME": "94c2d351073b18c888a25f31a483e3c5",
"flutter_bootstrap.js": "174be466b80fcc3dff7a37fe44e71939",
"version.json": "6ed328c5824517be2e2dcc99104f6a46",
"main.dart.js": "3083dde038ad51ff0c5edb314a3a33b9"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
