if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>i(e,c),o={module:{uri:c},exports:t,require:r};s[c]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(a(...e),t)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts("notification-sw.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/177-69fd1237e02a3cfa.js",revision:"mT4rcKE8Pi5h76iR5s_q9"},{url:"/_next/static/chunks/497-99fe4f4a78eb78f0.js",revision:"mT4rcKE8Pi5h76iR5s_q9"},{url:"/_next/static/chunks/587-8cb0c7d765e3ce06.js",revision:"mT4rcKE8Pi5h76iR5s_q9"},{url:"/_next/static/chunks/997-8f11a3f387c2e257.js",revision:"mT4rcKE8Pi5h76iR5s_q9"},{url:"/_next/static/chunks/app/(root)/account/page-fbc759056841c011.js",revision:"mT4rcKE8Pi5h76iR5s_q9"},{url:"/_next/static/chunks/app/(root)/page-d548021d88937f93.js",revision:"mT4rcKE8Pi5h76iR5s_q9"},{url:"/_next/static/chunks/app/(root)/sign-in/page-8c6fc01577b81a8a.js",revision:"mT4rcKE8Pi5h76iR5s_q9"},{url:"/_next/static/chunks/app/(root)/sign-up/page-e142486be69ce2d5.js",revision:"mT4rcKE8Pi5h76iR5s_q9"},{url:"/_next/static/chunks/app/_not-found/page-a4eb8c27a229ab42.js",revision:"mT4rcKE8Pi5h76iR5s_q9"},{url:"/_next/static/chunks/app/layout-37d57d0badc421a6.js",revision:"mT4rcKE8Pi5h76iR5s_q9"},{url:"/_next/static/chunks/d441faa4-edbf6eace83b54f3.js",revision:"mT4rcKE8Pi5h76iR5s_q9"},{url:"/_next/static/chunks/fd9d1056-9a0a6c01e51205be.js",revision:"mT4rcKE8Pi5h76iR5s_q9"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"mT4rcKE8Pi5h76iR5s_q9"},{url:"/_next/static/chunks/main-app-9943fa53a44fbf6d.js",revision:"mT4rcKE8Pi5h76iR5s_q9"},{url:"/_next/static/chunks/main-f9b2af958ddcd17c.js",revision:"mT4rcKE8Pi5h76iR5s_q9"},{url:"/_next/static/chunks/pages/_app-72b849fbd24ac258.js",revision:"mT4rcKE8Pi5h76iR5s_q9"},{url:"/_next/static/chunks/pages/_error-7ba65e1336b92748.js",revision:"mT4rcKE8Pi5h76iR5s_q9"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-4d33c131e95636bc.js",revision:"mT4rcKE8Pi5h76iR5s_q9"},{url:"/_next/static/css/3c186c2980d53dcc.css",revision:"3c186c2980d53dcc"},{url:"/_next/static/css/ae05f919fe0aba92.css",revision:"ae05f919fe0aba92"},{url:"/_next/static/mT4rcKE8Pi5h76iR5s_q9/_buildManifest.js",revision:"c155cce658e53418dec34664328b51ac"},{url:"/_next/static/mT4rcKE8Pi5h76iR5s_q9/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/4473ecc91f70f139-s.p.woff",revision:"78e6fc13ea317b55ab0bd6dc4849c110"},{url:"/_next/static/media/463dafcda517f24f-s.p.woff",revision:"cbeb6d2d96eaa268b4b5beb0b46d9632"},{url:"/icons/next-logo-192.png",revision:"38b5410dad42e21cab76e776a0221cc5"},{url:"/icons/next-logo-256.png",revision:"d42e3b889d15309948f47122b53d341d"},{url:"/icons/next-logo-384.png",revision:"0d2984796a4d815181a73b868e52d4b2"},{url:"/icons/next-logo-512.png",revision:"beb97063df7137aa7067c51c3f62d732"},{url:"/manifest.json",revision:"32af6afbb66ef7ed1777179302a63d3b"},{url:"/notification-sw.js",revision:"45c0fcd50062e07f80b97ee29a2e7910"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:i})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&i&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:i})=>"1"===e.headers.get("RSC")&&i&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
