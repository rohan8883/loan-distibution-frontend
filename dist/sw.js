<<<<<<< HEAD
if(!self.define){let s,e={};const n=(n,l)=>(n=new URL(n+".js",l).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(l,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const t=s=>n(s,r),o={module:{uri:r},exports:u,require:t};e[r]=Promise.all(l.map((s=>o[s]||t(s)))).then((s=>(i(...s),u)))}}define(["./workbox-1409041e"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/@files-ui/react-BjM7iZ0W.js",revision:null},{url:"assets/axios-DmypytPv.js",revision:null},{url:"assets/ButtonLoading-NqmcDfp2.js",revision:null},{url:"assets/card-BXWGEJ-w.js",revision:null},{url:"assets/clock-BUZui6oN.js",revision:null},{url:"assets/eye-DjvEq7pQ.js",revision:null},{url:"assets/FileUpload-DRAtH2em.js",revision:null},{url:"assets/index-4k9Y5EUK.js",revision:null},{url:"assets/index-8d7qnEGm.js",revision:null},{url:"assets/index-B988Wf77.js",revision:null},{url:"assets/index-BAEzcZXb.js",revision:null},{url:"assets/index-Bfthjsc3.js",revision:null},{url:"assets/index-BHdXwAgi.js",revision:null},{url:"assets/index-bnAz1BSF.css",revision:null},{url:"assets/index-C7fuCKHS.js",revision:null},{url:"assets/index-C7Mc6tZt.js",revision:null},{url:"assets/index-CbRssMCZ.js",revision:null},{url:"assets/index-CJ573FTn.js",revision:null},{url:"assets/index-Ckpgczvk.js",revision:null},{url:"assets/index-CMNcp6Vq.js",revision:null},{url:"assets/index-CMqHKSML.js",revision:null},{url:"assets/index-CMv9LLg0.js",revision:null},{url:"assets/index-CoJVdVEQ.css",revision:null},{url:"assets/index-CRLCmFTP.js",revision:null},{url:"assets/index-CUxpgM_C.js",revision:null},{url:"assets/index-CwvLewC9.js",revision:null},{url:"assets/index-CypjzBjB.js",revision:null},{url:"assets/index-CZ08gryw.js",revision:null},{url:"assets/index-DBoQfh-a.js",revision:null},{url:"assets/index-DmTr79AT.js",revision:null},{url:"assets/index-DUKrIHJn.js",revision:null},{url:"assets/index-dy-WVpJO.js",revision:null},{url:"assets/index-DZE_eR0U.js",revision:null},{url:"assets/index-fWjZE-NH.js",revision:null},{url:"assets/index-ka_AFnDs.js",revision:null},{url:"assets/index-OEQpfHqN.js",revision:null},{url:"assets/index-olbiRMH8.js",revision:null},{url:"assets/index-PVu3wjsT.js",revision:null},{url:"assets/index-W2_O--UV.js",revision:null},{url:"assets/input-B--ZfOPM.js",revision:null},{url:"assets/moment-BjLXg0w5.js",revision:null},{url:"assets/pencil-Ce-mzsbO.js",revision:null},{url:"assets/react-BqE6rHzI.js",revision:null},{url:"assets/resizeImage-nNayW6hE.js",revision:null},{url:"assets/RHFPasswordField-CYxKnkRA.js",revision:null},{url:"assets/RHFTextArea-CMqUn6Hr.js",revision:null},{url:"assets/RHFTextField-Bgg7dTSw.js",revision:null},{url:"assets/router-Bu5b4_LN.js",revision:null},{url:"assets/select-C4NWgVNz.js",revision:null},{url:"assets/separator-B6jE5r42.js",revision:null},{url:"assets/services-KQnp_8oA.js",revision:null},{url:"assets/share-CmpkxC9V.js",revision:null},{url:"assets/square-pen-BhDLUf_Y.js",revision:null},{url:"assets/table-Cd-p8XpK.js",revision:null},{url:"assets/tabs-C0Yv9dyK.js",revision:null},{url:"assets/useTimer-B_7DHncw.js",revision:null},{url:"assets/yup-BUr1D_ak.js",revision:null},{url:"index.html",revision:"b3f90c5ec5c3ab65e512a6e610af03aa"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"c975cf1d2d6f2007cb887ecad31b57ed"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/\.(?:png|jpg|jpeg|svg|gif|json)$/,new s.CacheFirst({cacheName:"images",plugins:[new s.ExpirationPlugin({maxEntries:100,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com/,new s.StaleWhileRevalidate({cacheName:"google-fonts",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:86400})]}),"GET")}));
=======
if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const t=s=>l(s,r),o={module:{uri:r},exports:u,require:t};e[r]=Promise.all(i.map((s=>o[s]||t(s)))).then((s=>(n(...s),u)))}}define(["./workbox-1409041e"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/@files-ui/react-DWI7dZJj.js",revision:null},{url:"assets/axios-jfmoi6Ws.js",revision:null},{url:"assets/ButtonLoading-z1V49Cn9.js",revision:null},{url:"assets/card-fEl4wnA7.js",revision:null},{url:"assets/clock-Bnlz6vco.js",revision:null},{url:"assets/eye-CsWJjFVd.js",revision:null},{url:"assets/file-upload-CGkqJc24.js",revision:null},{url:"assets/index-B1ilr24F.js",revision:null},{url:"assets/index-B4HQmLmT.js",revision:null},{url:"assets/index-BA2gm-bA.js",revision:null},{url:"assets/index-BbDunNqZ.js",revision:null},{url:"assets/index-BdoqKkkJ.js",revision:null},{url:"assets/index-BDZp5Dq6.js",revision:null},{url:"assets/index-BebU60XM.js",revision:null},{url:"assets/index-C_f6UwJG.js",revision:null},{url:"assets/index-C1h4Voua.js",revision:null},{url:"assets/index-C2Bv6DiD.js",revision:null},{url:"assets/index-CaJnJWf8.js",revision:null},{url:"assets/index-Cd_iLryw.js",revision:null},{url:"assets/index-CeW5jHzb.js",revision:null},{url:"assets/index-Chh7jSv3.js",revision:null},{url:"assets/index-CI4a3Xgm.js",revision:null},{url:"assets/index-CjB4WFvm.css",revision:null},{url:"assets/index-CJqJa4R3.js",revision:null},{url:"assets/index-Co0Qt00j.js",revision:null},{url:"assets/index-ColjtIZa.js",revision:null},{url:"assets/index-CsZNH9lk.js",revision:null},{url:"assets/index-D3zrO2Xc.js",revision:null},{url:"assets/index-D72ZiOxd.js",revision:null},{url:"assets/index-Dd7C1egn.js",revision:null},{url:"assets/index-DiIQ8scf.js",revision:null},{url:"assets/index-djXQPKgl.css",revision:null},{url:"assets/index-DskqbHC7.js",revision:null},{url:"assets/index-DwYAEMbQ.js",revision:null},{url:"assets/index-hvZEKHsN.js",revision:null},{url:"assets/index-no0PHRuH.js",revision:null},{url:"assets/index-ns-rqW2I.js",revision:null},{url:"assets/index-rd900gF1.js",revision:null},{url:"assets/index-ZgPFjpoi.js",revision:null},{url:"assets/index.esm-DdUqhsLW.js",revision:null},{url:"assets/input-BAP8HvZQ.js",revision:null},{url:"assets/moment-BjLXg0w5.js",revision:null},{url:"assets/pencil-DKfRucjO.js",revision:null},{url:"assets/react-BqE6rHzI.js",revision:null},{url:"assets/resizeImage-OtsRBZB0.js",revision:null},{url:"assets/RHFPasswordField-C1xkLfb7.js",revision:null},{url:"assets/RHFSelectField-Dwf_QoOo.js",revision:null},{url:"assets/RHFTextArea-CHMmo0VD.js",revision:null},{url:"assets/RHFTextField-BeDtDaIv.js",revision:null},{url:"assets/router-Bu5b4_LN.js",revision:null},{url:"assets/select-Bl5H_JfX.js",revision:null},{url:"assets/separator-CbJS0FaJ.js",revision:null},{url:"assets/services-KQnp_8oA.js",revision:null},{url:"assets/share-DTOZ35VA.js",revision:null},{url:"assets/square-pen-C-h6fA6r.js",revision:null},{url:"assets/table-CMgVDFZv.js",revision:null},{url:"assets/tabs-BtlSel8T.js",revision:null},{url:"assets/trash-D90pU7HV.js",revision:null},{url:"assets/useTimer-YhDHaU4h.js",revision:null},{url:"assets/yup-C06B-woG.js",revision:null},{url:"index.html",revision:"c87608fb0f386fdf31c9da72cab89c71"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"c975cf1d2d6f2007cb887ecad31b57ed"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/\.(?:png|jpg|jpeg|svg|gif|json)$/,new s.CacheFirst({cacheName:"images",plugins:[new s.ExpirationPlugin({maxEntries:100,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com/,new s.StaleWhileRevalidate({cacheName:"google-fonts",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:86400})]}),"GET")}));
>>>>>>> 898ab233da9690b194a7d11e7dca80652e2f11ec