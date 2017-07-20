"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/hwc-website/index.html","723fecfe2458d7684377974c5930b997"],["/hwc-website/static/css/main.19af82b8.css","0d407fc981351334d0730edda4b00c26"],["/hwc-website/static/js/main.87781434.js","d57d9ff9c36c2e872fca7128b2c0f7e4"],["/hwc-website/static/media/Jenna-Sue.ttf.02287d45.svg","02287d45f53a15cdafac37e7ea647ec0"],["/hwc-website/static/media/Jenna-Sue.ttf.41a65e9d.woff","41a65e9d92ea99e45752d2cb1d155b0b"],["/hwc-website/static/media/Jenna-Sue.ttf.62d1344a.eot","62d1344aa6e84251b6287d3c4cc76291"],["/hwc-website/static/media/exterior@2x.6b981f11.png","6b981f1159675643a9813f4dfb433902"],["/hwc-website/static/media/gallery.7ec7f7fa.png","7ec7f7fa76bb3a7ffbec1383c4854dc5"],["/hwc-website/static/media/glyphicons-halflings-regular.448c34a5.woff2","448c34a56d699c29117adc64c43affeb"],["/hwc-website/static/media/glyphicons-halflings-regular.89889688.svg","89889688147bd7575d6327160d64e760"],["/hwc-website/static/media/glyphicons-halflings-regular.e18bbf61.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/hwc-website/static/media/glyphicons-halflings-regular.f4769f9b.eot","f4769f9bdb7466be65088239c12046d1"],["/hwc-website/static/media/glyphicons-halflings-regular.fa277232.woff","fa2772327f55d8198301fdb8bcfc8158"],["/hwc-website/static/media/highland_chapel.694fa6a7.jpg","694fa6a736a658fa85176a59874dec40"],["/hwc-website/static/media/highland_chapel_ext.3902e0b3.jpg","3902e0b3cabb1f3feed9274410cce347"],["/hwc-website/static/media/highland_hall.0c408b51.jpg","0c408b517809e8460178bf5af38f44bc"],["/hwc-website/static/media/interior@2x.8ee29f31.png","8ee29f31f4e3ffff8e039c7a2f4ec9ad"],["/hwc-website/static/media/logo_md.d27b42ed.png","d27b42edb2d25c31ea10ad3868f146f0"],["/hwc-website/static/media/logo_xsm.c9a7757e.png","c9a7757e8d368f3c4ad9aab1b907e6a3"],["/hwc-website/static/media/pews@2x.74471205.png","74471205e3c03971d5bdff15e26a6332"],["/hwc-website/static/media/save_date.a70801c4.png","a70801c439af750b870df7a1ccb1f2da"],["/hwc-website/static/media/values.c7ed6388.png","c7ed638812448e4f3d2c8a9b19eecce4"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/hwc-website/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});