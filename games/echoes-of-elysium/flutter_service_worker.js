'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"manifest.json": "3969b238492e1fe85719996a3a0455b3",
"icons/Icon-512.png": "42a3a0085897752dba65e0374d7f3cb9",
"icons/Icon-192.png": "3e66b3002179c3dc277d4435335caa25",
"icons/Icon-maskable-192.png": "3e66b3002179c3dc277d4435335caa25",
"icons/Icon-maskable-512.png": "42a3a0085897752dba65e0374d7f3cb9",
"flutter_bootstrap.js": "d6e1bcae9a9554dc19093210037c1203",
"assets/AssetManifest.bin.json": "cef6a9ecd20a191c8afe071c8b96a521",
"assets/AssetManifest.json": "9dee82703b3bf6ce15cf0c5d3a1e1da4",
"assets/assets/audio/sfx/damage_hit.mp3": "26cbf1a6969513ddd183fb2118a1a074",
"assets/assets/audio/sfx/ui_click.wav": "82401b5b3ace5fe4a76b41c7540f338b",
"assets/assets/audio/sfx/door_open.wav": "360edbe04a32ee64e6c84b6819a98412",
"assets/assets/audio/sfx/shoot.mp3": "bb639727ce521aaad9b22584d9b811e1",
"assets/assets/audio/sfx/footsteps.wav": "18353bfb747918b103d021c0c5613543",
"assets/assets/audio/sfx/portal.mp3": "90e44e7993892faa70fd2468ecb05fd9",
"assets/assets/audio/sfx/computer_beep.wav": "8e4edc9d26e80eb78fa019895f2cbe7f",
"assets/assets/audio/sfx/footstep_grass.mp3": "66e017a51b1f5f8ba17b5b09640731a4",
"assets/assets/audio/sfx/footstep_new.mp3": "fb9ab506f7a96336ca8ca3383f80103c",
"assets/assets/audio/voices/archivist_1.mp3": "408dd7e7ee9af5a34e91b996858c1696",
"assets/assets/audio/voices/gaia_3.mp3": "afc980b17eb3a4121078f62751d0f9e4",
"assets/assets/audio/voices/echo7_2.mp3": "2074dc1cfc2cd04a8d58714b1bddbd9b",
"assets/assets/audio/voices/asha_3.mp3": "8c12ffa078de158ee82145d280476d54",
"assets/assets/audio/voices/echo7_1.mp3": "afbeb9a3ec3cd3808eadd4c4b18ee735",
"assets/assets/audio/voices/voss_1.mp3": "49db4f309ea484908f189506432cf56d",
"assets/assets/audio/voices/gaia_2.mp3": "0939cb201da4a5a2ad1b800655cebff3",
"assets/assets/audio/voices/asha_1.mp3": "fb4205d10fe76fcf57a89c3460e91699",
"assets/assets/audio/voices/voss_2.mp3": "aa26c42f719d70f2221e921797cdc49f",
"assets/assets/audio/voices/voss_3.mp3": "3899c1498069cc952cd450df92e5837b",
"assets/assets/audio/voices/gaia_1.mp3": "091cadb9e57c4b9821f27776c2268ba8",
"assets/assets/audio/voices/asha_2.mp3": "2ac59dca9d7a647071798e062503a3f6",
"assets/assets/audio/voices/archivist_3.mp3": "27d5db0dd232cd557a0c0913f3013180",
"assets/assets/audio/voices/archivist_2.mp3": "5302ca99cf9351b1c09922efdbf42bc4",
"assets/assets/audio/voices/echo7_3.mp3": "f921113cb3cf920a5df5da3c6dc1c046",
"assets/assets/audio/music/Echoes_of_the%2520Deep_Mine.mp3": "6e2db0d9a69dc32e694d06c1c5ab4cfd",
"assets/assets/audio/music/Space_Launch_City.mp3": "5f770a9b3bbe44bb075905b1e283f9b3",
"assets/assets/audio/music/corporate_response.wav": "131c8b8887ed01b5bb9e80e16d94ba63",
"assets/assets/audio/music/Space_Launch_City3.mp3": "7525739f544472910fcd5194b18888f4",
"assets/assets/audio/music/Whispering_Pines.mp3": "127642f7bd2da3375ce2d110883ff128",
"assets/assets/audio/music/morning_shift.wav": "0857f60ef096e9d396372314d392279b",
"assets/assets/audio/music/Space_Launch_City2.mp3": "e965e30cabff3d9dced0dd3ba6c0737d",
"assets/assets/audio/music/underground.wav": "30359a624ef9eb7e3c71d49d1e108c9d",
"assets/assets/audio/music/Neon_Shadows.mp3": "09e912d3ae706170b03d3d40dc3c6655",
"assets/assets/audio/music/final_choice.wav": "2bf95d1398f2cc069ebcb233f62365d9",
"assets/assets/audio/music/Whispering_Pines2.mp3": "59ba849f60278f04ebd4436e42288739",
"assets/assets/audio/music/system_anomaly.wav": "0d94af215c99052e443dadb9c634d72f",
"assets/assets/audio/music/Neon_Mirage.mp3": "06c2b3013fc7369df08016904f195aa3",
"assets/assets/images/maps/cyberpunk-mask.png": "e5fd6b4d29abab79d47fc2ef9fea6f0d",
"assets/assets/images/maps/city-texture.png": "479f232727113d5d3d03346674eace23",
"assets/assets/images/maps/cyberpunk-texture.png": "0838d4f8e1d8c4b80f30ed43251a3700",
"assets/assets/images/maps/Untitled_Artwork(1).png": "7d8d610c03c13981916bdb8561791495",
"assets/assets/images/maps/buildings/apartment_block.png": "88fda45d839c538c6ab7081955d6506f",
"assets/assets/images/maps/buildings/archive_library.png": "b1e315260cf3aadded79453202e70576",
"assets/assets/images/maps/buildings/tea_house.png": "82131dbffc28e09f3c1b4f9f9a5afd79",
"assets/assets/images/maps/buildings/greenhouse.png": "1028796645c8c8b490ad0826a602f55a",
"assets/assets/images/maps/buildings/ruin_shrine.png": "9a11e82d896cf4e1041493922cac112a",
"assets/assets/images/maps/buildings/ranger_cabin.png": "9da7be8697965324288fcdd5938053d3",
"assets/assets/images/maps/buildings/noodle_shop.png": "9245171cbee3104f06549a2566142d7a",
"assets/assets/images/maps/wods-texture.png": "cb4f093ad880c25849747dd7707fcb87",
"assets/assets/images/maps/world3.tmj": "df1a2ac3b607e6256764fe62fbd9e26a",
"assets/assets/images/maps/tilesets/city.png": "4789176f76097a13d6e75214ec69b7e5",
"assets/assets/images/maps/tilesets/cyberpunk.png": "6cecf88855f4b198d91899787e805ded",
"assets/assets/images/maps/tilesets/core.png": "716ba600f0ee38c6fe96d85d962b824a",
"assets/assets/images/maps/tilesets/woods.png": "0f87f564ec1fcc4eed23b4fcfdbc6fa8",
"assets/assets/images/maps/world.tmj": "f1868a6749868680d15ef113faf5f92e",
"assets/assets/images/maps/Starter-map.png": "75dfc98b4c5b139945de717de0928c18",
"assets/assets/images/maps/world2.tmj": "ce030a73ade4979dc1a0d477d052edc2",
"assets/assets/images/maps/ai-map-texture.png": "86fd31a5135083bc4fc456f4690a7fe6",
"assets/assets/images/sprites/fragment.png": "5b6f6cf84bbc2d16ab95f430b0ab0399",
"assets/assets/images/sprites/player.png": "fe690857d46f825c9d465834cfc9b531",
"assets/assets/images/sprites/bullet.png": "85cd901ee96816f32bde710e588f30c8",
"assets/assets/images/sprites/npc_archivist.png": "a636f268f752948bcb1712e98a3b0181",
"assets/assets/images/sprites/enemy_ship.png": "63b2564dd2d3c1f1676fccc8e1e139e0",
"assets/assets/images/sprites/kaela_walk.png": "9ad4ec6940ffafb1a7a48553ee1266f9",
"assets/assets/images/sprites/npc_voss.png": "6b31c91d7e7f2a43a2c41c975f442c7a",
"assets/assets/images/sprites/gaia_walk.png": "c0dca37bbefc5d7b8e4c5478fd356b92",
"assets/assets/images/sprites/echo7_walk.png": "809014aa848daf2435e8ce74ddaebfca",
"assets/assets/images/sprites/uec_drone.png": "47ac4db9178eb493fa9d38bf3183f949",
"assets/assets/images/sprites/npc_gaia.png": "0f7a767dae6a412e8ca4a75f6e210da6",
"assets/assets/images/sprites/asha_walk.png": "097a393c7fc05fb8fbf897c7953afc62",
"assets/assets/images/sprites/npc_asha.png": "80044055c567b03ac332a173b45fb5cc",
"assets/assets/images/sprites/voss_walk.png": "c37ae68ccf34d400cfc4eec00ba4ccc6",
"assets/assets/images/sprites/health_pickup.png": "2c75907b2644728ff477f8a03fad8c1f",
"assets/assets/images/sprites/explosion.png": "b843263583ccff24174127828112452d",
"assets/assets/images/sprites/asteroid.png": "f9e87f65c27df622b0f3f77a64036879",
"assets/assets/images/sprites/archivist_walk.png": "14d80f52606222e92cca8e79f9470abc",
"assets/assets/images/sprites/sentinel_boss.png": "a2ef5df977e3c3686ed351eb97edf42d",
"assets/assets/images/sprites/npc_echo7.png": "a33e8da2537d953e8e7635d862092ba4",
"assets/NOTICES": "f8482ae483ca1355422e84eacd3ffcd1",
"assets/AssetManifest.bin": "0090ae8d34e0129d16a727ee7c6ac5ee",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"index.html": "682d711ea07992bef3d7ab8015d89322",
"/": "682d711ea07992bef3d7ab8015d89322",
"version.json": "7524b4f237ebe4646dde79e08412430f",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "3d9849baea84eae01c239d604c225d11",
"main.dart.js": "04319cb3f07abcf89ee4ce5f3c17b286",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
