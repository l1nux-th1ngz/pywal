if(!self.define){let e,o={};const i=(i,f)=>(i=new URL(i+".js",f).href,o[i]||new Promise((o=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=o,document.head.appendChild(e)}else e=i,importScripts(i),o()})).then((()=>{let e=o[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(f,d)=>{const b=e||("document"in self?document.currentScript.src:"")||location.href;if(o[b])return;let s={};const c=e=>i(e,b),r={module:{uri:b},exports:s,require:c};o[b]=Promise.all(f.map((e=>r[e]||c(e)))).then((e=>(d(...e),s)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"build/About-bb8df2cd.js",revision:"b48e21f387dc8846ecd8beaf731ffb3e"},{url:"build/bundle.css",revision:"86e395e73ca72a9fe068bc2c27111ce3"},{url:"build/Header-7b9307da.js",revision:"cb82fff23ad157f1b36367551c96e509"},{url:"build/main.js",revision:"584efad0a54bdbfd9325be33597b4b2c"},{url:"build/Network-ccd0c51b.js",revision:"3b2d233e274e87d22494eee869b7b5c7"},{url:"build/Peers-da0bd855.js",revision:"6c35d02c627e2be06150fc9edd7d6d2c"},{url:"build/Speed-cea946ce.js",revision:"3e39238505e81a2966243a18eb7b9faf"},{url:"build/Torrents-a0f48c6c.js",revision:"18a9621e0081ffc193f58c9d59680a6c"},{url:"build/UserInterface-e543c0b2.js",revision:"8cded13077bdfe27d8b66bcdbdf462af"},{url:"fonts/Roboto-500/Roboto-500.woff2",revision:"1afbee5a09a022fe0287f16e9a48da1f"},{url:"fonts/Roboto-700/Roboto-700.woff2",revision:"3b38c16e4b39e5fd4017cd5055b0d505"},{url:"fonts/Roboto-700italic/Roboto-700italic.woff2",revision:"6d9c5fe65281e3034abe99931b7f0d85"},{url:"fonts/Roboto-italic/Roboto-italic.woff2",revision:"4dcf65b9b1c120ed423d78ed3d9880c1"},{url:"fonts/Roboto-regular/Roboto-regular.woff2",revision:"f84cb1bf9be983133497000554605b4d"},{url:"index.html",revision:"d8440f60784b1948131e3cfc9e77be8a"},{url:"style/colors.css",revision:"589f7f7f43b2e06f4bdfedc88994670a"},{url:"style/fonts.css",revision:"1bda5c5fb0c0ea079dae8d9f109fe107"},{url:"style/reset.css",revision:"13bccbfc10bf767d25c983dfca08d1bd"}],{})}));
//# sourceMappingURL=sw.js.map