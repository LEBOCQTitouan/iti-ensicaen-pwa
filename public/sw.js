if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const o=e=>n(e,c),r={module:{uri:c},exports:t,require:o};s[c]=Promise.all(a.map((e=>r[e]||o(e)))).then((e=>(i(...e),t)))}}define(["./workbox-5f5b08d6"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/633-712e09c094d0472d.js",revision:"712e09c094d0472d"},{url:"/_next/static/chunks/675-b1c0bfa226b363b1.js",revision:"b1c0bfa226b363b1"},{url:"/_next/static/chunks/framework-4556c45dd113b893.js",revision:"4556c45dd113b893"},{url:"/_next/static/chunks/main-5035a05945ec0e6e.js",revision:"5035a05945ec0e6e"},{url:"/_next/static/chunks/pages/_app-d4051bb3851cbb1d.js",revision:"d4051bb3851cbb1d"},{url:"/_next/static/chunks/pages/_error-0a004b8b8498208d.js",revision:"0a004b8b8498208d"},{url:"/_next/static/chunks/pages/avantages-398ca2c7d008aeed.js",revision:"398ca2c7d008aeed"},{url:"/_next/static/chunks/pages/conclusion-dedc861a95c595e9.js",revision:"dedc861a95c595e9"},{url:"/_next/static/chunks/pages/creation-9362ab40b375fa0f.js",revision:"9362ab40b375fa0f"},{url:"/_next/static/chunks/pages/definition-63862218368e799b.js",revision:"63862218368e799b"},{url:"/_next/static/chunks/pages/index-c8eddf133a5fb509.js",revision:"c8eddf133a5fb509"},{url:"/_next/static/chunks/pages/installation-57a49b016def0ac0.js",revision:"57a49b016def0ac0"},{url:"/_next/static/chunks/pages/introduction-1bf77b942dafac94.js",revision:"1bf77b942dafac94"},{url:"/_next/static/chunks/pages/outils-7cf7f8b603904311.js",revision:"7cf7f8b603904311"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-fd1bc4a65a80e5c8.js",revision:"fd1bc4a65a80e5c8"},{url:"/_next/static/css/2e43fdad5177bb48.css",revision:"2e43fdad5177bb48"},{url:"/_next/static/jtfheIfsxzak_COq-PlbL/_buildManifest.js",revision:"94ea22bb72889751a4a95af33898bf20"},{url:"/_next/static/jtfheIfsxzak_COq-PlbL/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/jtfheIfsxzak_COq-PlbL/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/favicon.ico",revision:"6e41f4e58b70f289e3ad9970f02c775f"},{url:"/favicon_.ico",revision:"885786eabeb092b194861651a2829a0c"},{url:"/icons/icon-192x192.png",revision:"26a4fea4df69b433dfa1af9aa4fcec39"},{url:"/icons/icon-192x192__.png",revision:"6ef797255374989b686780de451746cd"},{url:"/icons/icon-256x256.png",revision:"1a93acd0b69fccb8d9c1b310f773f644"},{url:"/icons/icon-256x256_.png",revision:"998530db2b888ab49fbb792a169e1eb7"},{url:"/icons/icon-384x384.png",revision:"a89ade2e3c5bd7bcbbbe303138841b46"},{url:"/icons/icon-384x384_.png",revision:"04833f5ab12167b24c7b077b39fb2c6c"},{url:"/icons/icon-512x512.png",revision:"b7c046c65e4cf52e77ffa730dbf682ab"},{url:"/icons/icon-512x512_.png",revision:"1f56c403f8d64891155e6a23fbc6359c"},{url:"/icons/icon-512x512__.png",revision:"415b087ccae8ee6ae3a6371897942842"},{url:"/img/AngularLogo.png",revision:"db165002106fc19dec34924038e3da19"},{url:"/img/ReactLogo.png",revision:"254e2aade1a20e80766f37f209f25845"},{url:"/img/dl_icon.png",revision:"e662f321b481c4c5ef8660bc55bb0f77"},{url:"/img/scheme.svg",revision:"95ca4d40e08d86f61a7c423fc2935038"},{url:"/img/service_worker.png",revision:"2d3967c953bb1515adee7d359896aab7"},{url:"/img/share_icon.png",revision:"aae53341c5789bdb1ab2e68fd5b065a4"},{url:"/manifest.json",revision:"298fa20d05ea3078ee0be7a9c31ba06d"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
