import{s as ae,e as $,U as pl,c as z,b as q,V as ml,f as L,l as F,i as lt,h as B,n as Ot,A as gl,C as _l,W as yl,q as me,a as ot,t as ks,g as at,d as Os,w as Eo,j as Ms,X as te,z as rn,Y as vl,H as El}from"../chunks/scheduler.B1ILd6Yz.js";import{S as le,i as ue,b as St,d as Ct,m as bt,t as Vt,a as Dt,e as Nt}from"../chunks/index.lifIyvsi.js";import{n as Tl,_ as Il,I as wl,m as Al,a as Rl,b as Pl,c as Sl,d as Cl,P as bl,F as Vl,C as Dl,N as Nl}from"../chunks/copy-rights.C8nCnMPf.js";import{w as kl}from"../chunks/entry.3ynoWcNL.js";import{U as Ol}from"../chunks/underline.CAlttiHW.js";function Ml(n){let t,e,i,s,o;return{c(){t=$("div"),e=$("div"),i=$("div"),s=new pl(!1),this.h()},l(l){t=z(l,"DIV",{class:!0});var c=q(t);e=z(c,"DIV",{class:!0,role:!0,"aria-live":!0,"aria-atomic":!0});var f=q(e);i=z(f,"DIV",{class:!0});var p=q(i);s=ml(p,!1),p.forEach(L),f.forEach(L),c.forEach(L),this.h()},h(){s.a=null,F(i,"class","toast-body text-center"),F(e,"class",o="toast "+n[1]+" svelte-a1eky1"),F(e,"role","alert"),F(e,"aria-live","assertive"),F(e,"aria-atomic","true"),F(t,"class","d-flex justify-content-center")},m(l,c){lt(l,t,c),B(t,e),B(e,i),s.m(n[0],i),n[5](e)},p(l,[c]){c&1&&s.p(l[0]),c&2&&o!==(o="toast "+l[1]+" svelte-a1eky1")&&F(e,"class",o)},i:Ot,o:Ot,d(l){l&&L(t),n[5](null)}}}function xl(n,t,e){let{message:i}=t,{duration:s=3e3}=t,{theme:o="info"}=t,{toastId:l}=t,c,f;gl(async()=>{if(c){var y=c;if(y&&(y.addEventListener("hidden.bs.toast",w=>{Ul({toastId:l})}),bootstrap)){let w={delay:s,animation:!0};f=new bootstrap.Toast(y,w),f.show()}}});function p(y){_l[y?"unshift":"push"](()=>{c=y,e(2,c)})}return n.$$set=y=>{"message"in y&&e(0,i=y.message),"duration"in y&&e(3,s=y.duration),"theme"in y&&e(1,o=y.theme),"toastId"in y&&e(4,l=y.toastId)},[i,o,c,s,l,p]}class Fl extends le{constructor(t){super(),ue(this,t,xl,Ml,ae,{message:0,duration:3,theme:1,toastId:4})}}let Ve;const Yr=kl([]),Ll=({component:n,props:t})=>{let i={toastId:"toast-"+Tl(),component:n,props:t};return Ve&&clearTimeout(Ve),Yr.update(s=>[...s,i]),i},Ul=async({toastId:n})=>{let t=yl(Yr);const e=t.find(i=>i.toastId==n);e&&(e.hide=!0),Ve&&clearTimeout(Ve),Ve=setTimeout(async()=>{Il.remove(t,i=>i.hide),Yr.set(t),clearTimeout(Ve)},300)},Bl=async n=>{n=n||{},Ll({component:Fl,props:n})},jl=async({message:n,duration:t})=>{Bl({message:n,duration:t,theme:"info"})};function $l(n){let t,e='<div class="bg-image svelte-1oqtufu"></div> <div class="full d-flex align-items-center position-absolute w-100 h-100 svelte-1oqtufu"><div class="container"><div class="row w-100 mb-2"><div class="col-md-6 text-md-left"><p class="mb-1 text-white">EXPLORE THE FEATURES</p> <h1 class="display-4 text-white mb-2 svelte-1oqtufu">Contact us</h1></div></div> <hr class="mt-96 text-white"/> <div class="row position-absolute w-100" style="bottom: 20px; left: 20px;"><div class="col"><nav aria-label="breadcrumb"><ol class="breadcrumb bg-transparent p-0 mb-0 text-background"><li class="breadcrumb-item svelte-1oqtufu"><a href="/" class="text-white svelte-1oqtufu">Home</a></li> <li class="breadcrumb-item text-white" aria-current="page">Contact Us</li></ol></nav></div></div></div></div>';return{c(){t=$("section"),t.innerHTML=e,this.h()},l(i){t=z(i,"SECTION",{class:!0,"data-svelte-h":!0}),me(t)!=="svelte-434vu8"&&(t.innerHTML=e),this.h()},h(){F(t,"class","position-relative")},m(i,s){lt(i,t,s)},p:Ot,i:Ot,o:Ot,d(i){i&&L(t)}}}class zl extends le{constructor(t){super(),ue(this,t,null,$l,ae,{})}}function Hl(n){let t,e,i,s,o,l,c,f,p,y,w,R,P,V,k,N,U;return s=new wl({props:{path:n[0],size:n[2],color:n[1]}}),{c(){t=$("div"),e=$("div"),i=$("div"),St(s.$$.fragment),o=ot(),l=$("div"),c=$("h4"),f=ks(n[3]),y=ot(),w=$("p"),R=$("strong"),P=ks(n[4]),this.h()},l(O){t=z(O,"DIV",{});var S=q(t);e=z(S,"DIV",{class:!0,style:!0});var M=q(e);i=z(M,"DIV",{class:!0});var W=q(i);Ct(s.$$.fragment,W),W.forEach(L),o=at(M),l=z(M,"DIV",{class:!0,style:!0});var Y=q(l);c=z(Y,"H4",{class:!0});var v=q(c);f=Os(v,n[3]),v.forEach(L),y=at(Y),w=z(Y,"P",{class:!0});var d=q(w);R=z(d,"STRONG",{});var m=q(R);P=Os(m,n[4]),m.forEach(L),d.forEach(L),Y.forEach(L),M.forEach(L),S.forEach(L),this.h()},h(){F(i,"class","text-center pt-4 iconCircle svelte-scbpy3"),F(c,"class",p="fw-light "+n[7]+" svelte-scbpy3"),F(w,"class",V="pt-4 grey fw-light fs-5 text-black "+n[8]+" svelte-scbpy3"),F(l,"class",k="mt-3 text-center "+n[6]+" svelte-scbpy3"),F(l,"style",""),F(e,"class",N="rounded bg p-5 "+n[5]+" cardStyling svelte-scbpy3"),Eo(e,"background-color","#f4f4f4")},m(O,S){lt(O,t,S),B(t,e),B(e,i),bt(s,i,null),B(e,o),B(e,l),B(l,c),B(c,f),B(l,y),B(l,w),B(w,R),B(R,P),U=!0},p(O,[S]){const M={};S&1&&(M.path=O[0]),S&4&&(M.size=O[2]),S&2&&(M.color=O[1]),s.$set(M),(!U||S&8)&&Ms(f,O[3]),(!U||S&128&&p!==(p="fw-light "+O[7]+" svelte-scbpy3"))&&F(c,"class",p),(!U||S&16)&&Ms(P,O[4]),(!U||S&256&&V!==(V="pt-4 grey fw-light fs-5 text-black "+O[8]+" svelte-scbpy3"))&&F(w,"class",V),(!U||S&64&&k!==(k="mt-3 text-center "+O[6]+" svelte-scbpy3"))&&F(l,"class",k),(!U||S&32&&N!==(N="rounded bg p-5 "+O[5]+" cardStyling svelte-scbpy3"))&&F(e,"class",N)},i(O){U||(Vt(s.$$.fragment,O),U=!0)},o(O){Dt(s.$$.fragment,O),U=!1},d(O){O&&L(t),Nt(s)}}}function ql(n,t,e){let{iconPath:i=Al}=t,{iconColor:s="#000000"}=t,{iconSize:o="64px"}=t,{title:l="Title"}=t,{message:c="Lorem ipsum dolor sit amet, consectetur adipiscing elit."}=t,{cardClazz:f=""}=t,{cardBodyClazz:p=""}=t,{titleClazz:y=""}=t,{messageClazz:w=""}=t;return n.$$set=R=>{"iconPath"in R&&e(0,i=R.iconPath),"iconColor"in R&&e(1,s=R.iconColor),"iconSize"in R&&e(2,o=R.iconSize),"title"in R&&e(3,l=R.title),"message"in R&&e(4,c=R.message),"cardClazz"in R&&e(5,f=R.cardClazz),"cardBodyClazz"in R&&e(6,p=R.cardBodyClazz),"titleClazz"in R&&e(7,y=R.titleClazz),"messageClazz"in R&&e(8,w=R.messageClazz)},[i,s,o,l,c,f,p,y,w]}class zr extends le{constructor(t){super(),ue(this,t,ql,Hl,ae,{iconPath:0,iconColor:1,iconSize:2,title:3,message:4,cardClazz:5,cardBodyClazz:6,titleClazz:7,messageClazz:8})}}function Gl(n){let t,e,i,s,o,l,c,f,p,y,w,R;return o=new zr({props:{iconPath:Rl,iconSize:"60px",iconColor:"#ff6600",title:"VISIT US",message:`1290 Stiven Street\r
                    Raleigh, New York City`}}),f=new zr({props:{iconPath:Pl,iconSize:"60px",iconColor:"#ff6600",title:"CALL US",message:` +91 123 587 4444   \r
                       +91 456 234 1111`}}),w=new zr({props:{iconPath:Sl,iconSize:"60px",iconColor:"#ff6600",title:"EMAIL US",message:`mailus@gmail.com\r
                    getsupport@divi.com`}}),{c(){t=$("section"),e=$("div"),i=$("div"),s=$("div"),St(o.$$.fragment),l=ot(),c=$("div"),St(f.$$.fragment),p=ot(),y=$("div"),St(w.$$.fragment),this.h()},l(P){t=z(P,"SECTION",{class:!0});var V=q(t);e=z(V,"DIV",{class:!0});var k=q(e);i=z(k,"DIV",{class:!0});var N=q(i);s=z(N,"DIV",{class:!0});var U=q(s);Ct(o.$$.fragment,U),U.forEach(L),l=at(N),c=z(N,"DIV",{class:!0});var O=q(c);Ct(f.$$.fragment,O),O.forEach(L),p=at(N),y=z(N,"DIV",{class:!0});var S=q(y);Ct(w.$$.fragment,S),S.forEach(L),N.forEach(L),k.forEach(L),V.forEach(L),this.h()},h(){F(s,"class","col-md-4 p-3"),F(c,"class","col-md-4 p-3"),F(y,"class","col-md-4 p-3"),F(i,"class","row"),F(e,"class","container"),F(t,"class","card-section my-96 svelte-36nv7t")},m(P,V){lt(P,t,V),B(t,e),B(e,i),B(i,s),bt(o,s,null),B(i,l),B(i,c),bt(f,c,null),B(i,p),B(i,y),bt(w,y,null),R=!0},p:Ot,i(P){R||(Vt(o.$$.fragment,P),Vt(f.$$.fragment,P),Vt(w.$$.fragment,P),R=!0)},o(P){Dt(o.$$.fragment,P),Dt(f.$$.fragment,P),Dt(w.$$.fragment,P),R=!1},d(P){P&&L(t),Nt(o),Nt(f),Nt(w)}}}class Kl extends le{constructor(t){super(),ue(this,t,null,Gl,ae,{})}}var xs={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To=function(n){const t=[];let e=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Ql=function(n){const t=[];let e=0,i=0;for(;e<n.length;){const s=n[e++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[i++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],l=n[e++],c=n[e++],f=((s&7)<<18|(o&63)<<12|(l&63)<<6|c&63)-65536;t[i++]=String.fromCharCode(55296+(f>>10)),t[i++]=String.fromCharCode(56320+(f&1023))}else{const o=n[e++],l=n[e++];t[i++]=String.fromCharCode((s&15)<<12|(o&63)<<6|l&63)}}return t.join("")},Io={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const o=n[s],l=s+1<n.length,c=l?n[s+1]:0,f=s+2<n.length,p=f?n[s+2]:0,y=o>>2,w=(o&3)<<4|c>>4;let R=(c&15)<<2|p>>6,P=p&63;f||(P=64,l||(R=64)),i.push(e[y],e[w],e[R],e[P])}return i.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(To(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Ql(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],c=s<n.length?e[n.charAt(s)]:0;++s;const p=s<n.length?e[n.charAt(s)]:64;++s;const w=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||c==null||p==null||w==null)throw new Wl;const R=o<<2|c>>4;if(i.push(R),p!==64){const P=c<<4&240|p>>2;if(i.push(P),w!==64){const V=p<<6&192|w;i.push(V)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Wl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Xl=function(n){const t=To(n);return Io.encodeByteArray(t,!0)},Zn=function(n){return Xl(n).replace(/\./g,"")},Yl=function(n){try{return Io.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl=()=>Jl().__FIREBASE_DEFAULTS__,tu=()=>{if(typeof process>"u"||typeof xs>"u")return;const n=xs.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},eu=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Yl(n[1]);return t&&JSON.parse(t)},pi=()=>{try{return Zl()||tu()||eu()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},nu=n=>{var t,e;return(e=(t=pi())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},ru=n=>{const t=nu(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),i]:[t.substring(0,e),i]},wo=()=>{var n;return(n=pi())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,i)=>{e?this.reject(e):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},i=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Zn(JSON.stringify(e)),Zn(JSON.stringify(l)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ou(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function au(){var n;const t=(n=pi())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function lu(){return!au()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function uu(){try{return typeof indexedDB=="object"}catch{return!1}}function cu(){return new Promise((n,t)=>{try{let e=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu="FirebaseError";class Le extends Error{constructor(t,e,i){super(e),this.code=t,this.customData=i,this.name=hu,Object.setPrototypeOf(this,Le.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ao.prototype.create)}}class Ao{constructor(t,e,i){this.service=t,this.serviceName=e,this.errors=i}create(t,...e){const i=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],l=o?fu(o,i):"Error",c=`${this.serviceName}: ${l} (${s}).`;return new Le(s,c,i)}}function fu(n,t){return n.replace(du,(e,i)=>{const s=t[i];return s!=null?String(s):`<${i}?>`})}const du=/\{\$([^}]+)}/g;function Jr(n,t){if(n===t)return!0;const e=Object.keys(n),i=Object.keys(t);for(const s of e){if(!i.includes(s))return!1;const o=n[s],l=t[s];if(Fs(o)&&Fs(l)){if(!Jr(o,l))return!1}else if(o!==l)return!1}for(const s of i)if(!e.includes(s))return!1;return!0}function Fs(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(n){return n&&n._delegate?n._delegate:n}class pn{constructor(t,e,i){this.name=t,this.instanceFactory=e,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const i=new iu;if(this.instancesDeferred.set(e,i),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(gu(t))try{this.getOrInitializeService({instanceIdentifier:pe})}catch{}for(const[e,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});i.resolve(o)}catch{}}}}clearInstance(t=pe){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=pe){return this.instances.has(t)}getOptions(t=pe){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:e});for(const[o,l]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);i===c&&l.resolve(s)}return s}onInit(t,e){var i;const s=this.normalizeInstanceIdentifier(e),o=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;o.add(t),this.onInitCallbacks.set(s,o);const l=this.instances.get(s);return l&&t(l,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const i=this.onInitCallbacks.get(e);if(i)for(const s of i)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:mu(t),options:e}),this.instances.set(t,i),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=pe){return this.component?this.component.multipleInstances?t:pe:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function mu(n){return n===pe?void 0:n}function gu(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new pu(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Q||(Q={}));const yu={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},vu=Q.INFO,Eu={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},Tu=(n,t,...e)=>{if(t<n.logLevel)return;const i=new Date().toISOString(),s=Eu[t];if(s)console[s](`[${i}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ro{constructor(t){this.name=t,this._logLevel=vu,this._logHandler=Tu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Q))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?yu[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...t),this._logHandler(this,Q.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...t),this._logHandler(this,Q.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...t),this._logHandler(this,Q.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...t),this._logHandler(this,Q.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...t),this._logHandler(this,Q.ERROR,...t)}}const Iu=(n,t)=>t.some(e=>n instanceof e);let Ls,Us;function wu(){return Ls||(Ls=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Au(){return Us||(Us=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Po=new WeakMap,Zr=new WeakMap,So=new WeakMap,Hr=new WeakMap,mi=new WeakMap;function Ru(n){const t=new Promise((e,i)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",l)},o=()=>{e(ee(n.result)),s()},l=()=>{i(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",l)});return t.then(e=>{e instanceof IDBCursor&&Po.set(e,n)}).catch(()=>{}),mi.set(t,n),t}function Pu(n){if(Zr.has(n))return;const t=new Promise((e,i)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",l),n.removeEventListener("abort",l)},o=()=>{e(),s()},l=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",l),n.addEventListener("abort",l)});Zr.set(n,t)}let ti={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Zr.get(n);if(t==="objectStoreNames")return n.objectStoreNames||So.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return ee(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Su(n){ti=n(ti)}function Cu(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const i=n.call(qr(this),t,...e);return So.set(i,t.sort?t.sort():[t]),ee(i)}:Au().includes(n)?function(...t){return n.apply(qr(this),t),ee(Po.get(this))}:function(...t){return ee(n.apply(qr(this),t))}}function bu(n){return typeof n=="function"?Cu(n):(n instanceof IDBTransaction&&Pu(n),Iu(n,wu())?new Proxy(n,ti):n)}function ee(n){if(n instanceof IDBRequest)return Ru(n);if(Hr.has(n))return Hr.get(n);const t=bu(n);return t!==n&&(Hr.set(n,t),mi.set(t,n)),t}const qr=n=>mi.get(n);function Vu(n,t,{blocked:e,upgrade:i,blocking:s,terminated:o}={}){const l=indexedDB.open(n,t),c=ee(l);return i&&l.addEventListener("upgradeneeded",f=>{i(ee(l.result),f.oldVersion,f.newVersion,ee(l.transaction),f)}),e&&l.addEventListener("blocked",f=>e(f.oldVersion,f.newVersion,f)),c.then(f=>{o&&f.addEventListener("close",()=>o()),s&&f.addEventListener("versionchange",p=>s(p.oldVersion,p.newVersion,p))}).catch(()=>{}),c}const Du=["get","getKey","getAll","getAllKeys","count"],Nu=["put","add","delete","clear"],Gr=new Map;function Bs(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Gr.get(t))return Gr.get(t);const e=t.replace(/FromIndex$/,""),i=t!==e,s=Nu.includes(e);if(!(e in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Du.includes(e)))return;const o=async function(l,...c){const f=this.transaction(l,s?"readwrite":"readonly");let p=f.store;return i&&(p=p.index(c.shift())),(await Promise.all([p[e](...c),s&&f.done]))[0]};return Gr.set(t,o),o}Su(n=>({...n,get:(t,e,i)=>Bs(t,e)||n.get(t,e,i),has:(t,e)=>!!Bs(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Ou(e)){const i=e.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(e=>e).join(" ")}}function Ou(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ei="@firebase/app",js="0.10.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve=new Ro("@firebase/app"),Mu="@firebase/app-compat",xu="@firebase/analytics-compat",Fu="@firebase/analytics",Lu="@firebase/app-check-compat",Uu="@firebase/app-check",Bu="@firebase/auth",ju="@firebase/auth-compat",$u="@firebase/database",zu="@firebase/database-compat",Hu="@firebase/functions",qu="@firebase/functions-compat",Gu="@firebase/installations",Ku="@firebase/installations-compat",Qu="@firebase/messaging",Wu="@firebase/messaging-compat",Xu="@firebase/performance",Yu="@firebase/performance-compat",Ju="@firebase/remote-config",Zu="@firebase/remote-config-compat",tc="@firebase/storage",ec="@firebase/storage-compat",nc="@firebase/firestore",rc="@firebase/vertexai-preview",ic="@firebase/firestore-compat",sc="firebase",oc="10.12.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni="[DEFAULT]",ac={[ei]:"fire-core",[Mu]:"fire-core-compat",[Fu]:"fire-analytics",[xu]:"fire-analytics-compat",[Uu]:"fire-app-check",[Lu]:"fire-app-check-compat",[Bu]:"fire-auth",[ju]:"fire-auth-compat",[$u]:"fire-rtdb",[zu]:"fire-rtdb-compat",[Hu]:"fire-fn",[qu]:"fire-fn-compat",[Gu]:"fire-iid",[Ku]:"fire-iid-compat",[Qu]:"fire-fcm",[Wu]:"fire-fcm-compat",[Xu]:"fire-perf",[Yu]:"fire-perf-compat",[Ju]:"fire-rc",[Zu]:"fire-rc-compat",[tc]:"fire-gcs",[ec]:"fire-gcs-compat",[nc]:"fire-fst",[ic]:"fire-fst-compat",[rc]:"fire-vertex","fire-js":"fire-js",[sc]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ee=new Map,ri=new Map,ii=new Map;function $s(n,t){try{n.container.addComponent(t)}catch(e){ve.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function tr(n){const t=n.name;if(ii.has(t))return ve.debug(`There were multiple attempts to register component ${t}.`),!1;ii.set(t,n);for(const e of Ee.values())$s(e,n);for(const e of ri.values())$s(e,n);return!0}function lc(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ne=new Ao("app","Firebase",uc);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(t,e,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ne.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc=oc;function si(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const i=Object.assign({name:ni,automaticDataCollectionEnabled:!1},t),s=i.name;if(typeof s!="string"||!s)throw ne.create("bad-app-name",{appName:String(s)});if(e||(e=wo()),!e)throw ne.create("no-options");const o=Ee.get(s);if(o){if(Jr(e,o.options)&&Jr(i,o.config))return o;throw ne.create("duplicate-app",{appName:s})}const l=new _u(s);for(const f of ii.values())l.addComponent(f);const c=new cc(e,i,l);return Ee.set(s,c),c}function Co(n=ni){const t=Ee.get(n);if(!t&&n===ni&&wo())return si();if(!t)throw ne.create("no-app",{appName:n});return t}function fc(){return Array.from(Ee.values())}async function dc(n){let t=!1;const e=n.name;Ee.has(e)?(t=!0,Ee.delete(e)):ri.has(e)&&n.decRefCount()<=0&&(ri.delete(e),t=!0),t&&(await Promise.all(n.container.getProviders().map(i=>i.delete())),n.isDeleted=!0)}function De(n,t,e){var i;let s=(i=ac[n])!==null&&i!==void 0?i:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),l=t.match(/\s|\//);if(o||l){const c=[`Unable to register library "${s}" with version "${t}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&l&&c.push("and"),l&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ve.warn(c.join(" "));return}tr(new pn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc="firebase-heartbeat-database",mc=1,mn="firebase-heartbeat-store";let Kr=null;function bo(){return Kr||(Kr=Vu(pc,mc,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(mn)}catch(e){console.warn(e)}}}}).catch(n=>{throw ne.create("idb-open",{originalErrorMessage:n.message})})),Kr}async function gc(n){try{const e=(await bo()).transaction(mn),i=await e.objectStore(mn).get(Vo(n));return await e.done,i}catch(t){if(t instanceof Le)ve.warn(t.message);else{const e=ne.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ve.warn(e.message)}}}async function zs(n,t){try{const i=(await bo()).transaction(mn,"readwrite");await i.objectStore(mn).put(t,Vo(n)),await i.done}catch(e){if(e instanceof Le)ve.warn(e.message);else{const i=ne.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});ve.warn(i.message)}}}function Vo(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c=1024,yc=30*24*60*60*1e3;class vc{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Tc(e),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,e;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Hs();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const c=new Date(l.date).valueOf();return Date.now()-c<=yc}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Hs(),{heartbeatsToSend:i,unsentEntries:s}=Ec(this._heartbeatsCache.heartbeats),o=Zn(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Hs(){return new Date().toISOString().substring(0,10)}function Ec(n,t=_c){const e=[];let i=n.slice();for(const s of n){const o=e.find(l=>l.agent===s.agent);if(o){if(o.dates.push(s.date),qs(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),qs(e)>t){e.pop();break}i=i.slice(1)}return{heartbeatsToSend:e,unsentEntries:i}}class Tc{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return uu()?cu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await gc(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return zs(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return zs(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function qs(n){return Zn(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(n){tr(new pn("platform-logger",t=>new ku(t),"PRIVATE")),tr(new pn("heartbeat",t=>new vc(t),"PRIVATE")),De(ei,js,n),De(ei,js,"esm2017"),De("fire-js","")}Ic("");var wc="firebase",Ac="10.12.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */De(wc,Ac,"app");var Gs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Do;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,d){function m(){}m.prototype=d.prototype,v.D=d.prototype,v.prototype=new m,v.prototype.constructor=v,v.C=function(_,E,I){for(var g=Array(arguments.length-2),kt=2;kt<arguments.length;kt++)g[kt-2]=arguments[kt];return d.prototype[E].apply(_,g)}}function e(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(i,e),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,d,m){m||(m=0);var _=Array(16);if(typeof d=="string")for(var E=0;16>E;++E)_[E]=d.charCodeAt(m++)|d.charCodeAt(m++)<<8|d.charCodeAt(m++)<<16|d.charCodeAt(m++)<<24;else for(E=0;16>E;++E)_[E]=d[m++]|d[m++]<<8|d[m++]<<16|d[m++]<<24;d=v.g[0],m=v.g[1],E=v.g[2];var I=v.g[3],g=d+(I^m&(E^I))+_[0]+3614090360&4294967295;d=m+(g<<7&4294967295|g>>>25),g=I+(E^d&(m^E))+_[1]+3905402710&4294967295,I=d+(g<<12&4294967295|g>>>20),g=E+(m^I&(d^m))+_[2]+606105819&4294967295,E=I+(g<<17&4294967295|g>>>15),g=m+(d^E&(I^d))+_[3]+3250441966&4294967295,m=E+(g<<22&4294967295|g>>>10),g=d+(I^m&(E^I))+_[4]+4118548399&4294967295,d=m+(g<<7&4294967295|g>>>25),g=I+(E^d&(m^E))+_[5]+1200080426&4294967295,I=d+(g<<12&4294967295|g>>>20),g=E+(m^I&(d^m))+_[6]+2821735955&4294967295,E=I+(g<<17&4294967295|g>>>15),g=m+(d^E&(I^d))+_[7]+4249261313&4294967295,m=E+(g<<22&4294967295|g>>>10),g=d+(I^m&(E^I))+_[8]+1770035416&4294967295,d=m+(g<<7&4294967295|g>>>25),g=I+(E^d&(m^E))+_[9]+2336552879&4294967295,I=d+(g<<12&4294967295|g>>>20),g=E+(m^I&(d^m))+_[10]+4294925233&4294967295,E=I+(g<<17&4294967295|g>>>15),g=m+(d^E&(I^d))+_[11]+2304563134&4294967295,m=E+(g<<22&4294967295|g>>>10),g=d+(I^m&(E^I))+_[12]+1804603682&4294967295,d=m+(g<<7&4294967295|g>>>25),g=I+(E^d&(m^E))+_[13]+4254626195&4294967295,I=d+(g<<12&4294967295|g>>>20),g=E+(m^I&(d^m))+_[14]+2792965006&4294967295,E=I+(g<<17&4294967295|g>>>15),g=m+(d^E&(I^d))+_[15]+1236535329&4294967295,m=E+(g<<22&4294967295|g>>>10),g=d+(E^I&(m^E))+_[1]+4129170786&4294967295,d=m+(g<<5&4294967295|g>>>27),g=I+(m^E&(d^m))+_[6]+3225465664&4294967295,I=d+(g<<9&4294967295|g>>>23),g=E+(d^m&(I^d))+_[11]+643717713&4294967295,E=I+(g<<14&4294967295|g>>>18),g=m+(I^d&(E^I))+_[0]+3921069994&4294967295,m=E+(g<<20&4294967295|g>>>12),g=d+(E^I&(m^E))+_[5]+3593408605&4294967295,d=m+(g<<5&4294967295|g>>>27),g=I+(m^E&(d^m))+_[10]+38016083&4294967295,I=d+(g<<9&4294967295|g>>>23),g=E+(d^m&(I^d))+_[15]+3634488961&4294967295,E=I+(g<<14&4294967295|g>>>18),g=m+(I^d&(E^I))+_[4]+3889429448&4294967295,m=E+(g<<20&4294967295|g>>>12),g=d+(E^I&(m^E))+_[9]+568446438&4294967295,d=m+(g<<5&4294967295|g>>>27),g=I+(m^E&(d^m))+_[14]+3275163606&4294967295,I=d+(g<<9&4294967295|g>>>23),g=E+(d^m&(I^d))+_[3]+4107603335&4294967295,E=I+(g<<14&4294967295|g>>>18),g=m+(I^d&(E^I))+_[8]+1163531501&4294967295,m=E+(g<<20&4294967295|g>>>12),g=d+(E^I&(m^E))+_[13]+2850285829&4294967295,d=m+(g<<5&4294967295|g>>>27),g=I+(m^E&(d^m))+_[2]+4243563512&4294967295,I=d+(g<<9&4294967295|g>>>23),g=E+(d^m&(I^d))+_[7]+1735328473&4294967295,E=I+(g<<14&4294967295|g>>>18),g=m+(I^d&(E^I))+_[12]+2368359562&4294967295,m=E+(g<<20&4294967295|g>>>12),g=d+(m^E^I)+_[5]+4294588738&4294967295,d=m+(g<<4&4294967295|g>>>28),g=I+(d^m^E)+_[8]+2272392833&4294967295,I=d+(g<<11&4294967295|g>>>21),g=E+(I^d^m)+_[11]+1839030562&4294967295,E=I+(g<<16&4294967295|g>>>16),g=m+(E^I^d)+_[14]+4259657740&4294967295,m=E+(g<<23&4294967295|g>>>9),g=d+(m^E^I)+_[1]+2763975236&4294967295,d=m+(g<<4&4294967295|g>>>28),g=I+(d^m^E)+_[4]+1272893353&4294967295,I=d+(g<<11&4294967295|g>>>21),g=E+(I^d^m)+_[7]+4139469664&4294967295,E=I+(g<<16&4294967295|g>>>16),g=m+(E^I^d)+_[10]+3200236656&4294967295,m=E+(g<<23&4294967295|g>>>9),g=d+(m^E^I)+_[13]+681279174&4294967295,d=m+(g<<4&4294967295|g>>>28),g=I+(d^m^E)+_[0]+3936430074&4294967295,I=d+(g<<11&4294967295|g>>>21),g=E+(I^d^m)+_[3]+3572445317&4294967295,E=I+(g<<16&4294967295|g>>>16),g=m+(E^I^d)+_[6]+76029189&4294967295,m=E+(g<<23&4294967295|g>>>9),g=d+(m^E^I)+_[9]+3654602809&4294967295,d=m+(g<<4&4294967295|g>>>28),g=I+(d^m^E)+_[12]+3873151461&4294967295,I=d+(g<<11&4294967295|g>>>21),g=E+(I^d^m)+_[15]+530742520&4294967295,E=I+(g<<16&4294967295|g>>>16),g=m+(E^I^d)+_[2]+3299628645&4294967295,m=E+(g<<23&4294967295|g>>>9),g=d+(E^(m|~I))+_[0]+4096336452&4294967295,d=m+(g<<6&4294967295|g>>>26),g=I+(m^(d|~E))+_[7]+1126891415&4294967295,I=d+(g<<10&4294967295|g>>>22),g=E+(d^(I|~m))+_[14]+2878612391&4294967295,E=I+(g<<15&4294967295|g>>>17),g=m+(I^(E|~d))+_[5]+4237533241&4294967295,m=E+(g<<21&4294967295|g>>>11),g=d+(E^(m|~I))+_[12]+1700485571&4294967295,d=m+(g<<6&4294967295|g>>>26),g=I+(m^(d|~E))+_[3]+2399980690&4294967295,I=d+(g<<10&4294967295|g>>>22),g=E+(d^(I|~m))+_[10]+4293915773&4294967295,E=I+(g<<15&4294967295|g>>>17),g=m+(I^(E|~d))+_[1]+2240044497&4294967295,m=E+(g<<21&4294967295|g>>>11),g=d+(E^(m|~I))+_[8]+1873313359&4294967295,d=m+(g<<6&4294967295|g>>>26),g=I+(m^(d|~E))+_[15]+4264355552&4294967295,I=d+(g<<10&4294967295|g>>>22),g=E+(d^(I|~m))+_[6]+2734768916&4294967295,E=I+(g<<15&4294967295|g>>>17),g=m+(I^(E|~d))+_[13]+1309151649&4294967295,m=E+(g<<21&4294967295|g>>>11),g=d+(E^(m|~I))+_[4]+4149444226&4294967295,d=m+(g<<6&4294967295|g>>>26),g=I+(m^(d|~E))+_[11]+3174756917&4294967295,I=d+(g<<10&4294967295|g>>>22),g=E+(d^(I|~m))+_[2]+718787259&4294967295,E=I+(g<<15&4294967295|g>>>17),g=m+(I^(E|~d))+_[9]+3951481745&4294967295,v.g[0]=v.g[0]+d&4294967295,v.g[1]=v.g[1]+(E+(g<<21&4294967295|g>>>11))&4294967295,v.g[2]=v.g[2]+E&4294967295,v.g[3]=v.g[3]+I&4294967295}i.prototype.u=function(v,d){d===void 0&&(d=v.length);for(var m=d-this.blockSize,_=this.B,E=this.h,I=0;I<d;){if(E==0)for(;I<=m;)s(this,v,I),I+=this.blockSize;if(typeof v=="string"){for(;I<d;)if(_[E++]=v.charCodeAt(I++),E==this.blockSize){s(this,_),E=0;break}}else for(;I<d;)if(_[E++]=v[I++],E==this.blockSize){s(this,_),E=0;break}}this.h=E,this.o+=d},i.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var d=1;d<v.length-8;++d)v[d]=0;var m=8*this.o;for(d=v.length-8;d<v.length;++d)v[d]=m&255,m/=256;for(this.u(v),v=Array(16),d=m=0;4>d;++d)for(var _=0;32>_;_+=8)v[m++]=this.g[d]>>>_&255;return v};function o(v,d){var m=c;return Object.prototype.hasOwnProperty.call(m,v)?m[v]:m[v]=d(v)}function l(v,d){this.h=d;for(var m=[],_=!0,E=v.length-1;0<=E;E--){var I=v[E]|0;_&&I==d||(m[E]=I,_=!1)}this.g=m}var c={};function f(v){return-128<=v&&128>v?o(v,function(d){return new l([d|0],0>d?-1:0)}):new l([v|0],0>v?-1:0)}function p(v){if(isNaN(v)||!isFinite(v))return w;if(0>v)return N(p(-v));for(var d=[],m=1,_=0;v>=m;_++)d[_]=v/m|0,m*=4294967296;return new l(d,0)}function y(v,d){if(v.length==0)throw Error("number format error: empty string");if(d=d||10,2>d||36<d)throw Error("radix out of range: "+d);if(v.charAt(0)=="-")return N(y(v.substring(1),d));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=p(Math.pow(d,8)),_=w,E=0;E<v.length;E+=8){var I=Math.min(8,v.length-E),g=parseInt(v.substring(E,E+I),d);8>I?(I=p(Math.pow(d,I)),_=_.j(I).add(p(g))):(_=_.j(m),_=_.add(p(g)))}return _}var w=f(0),R=f(1),P=f(16777216);n=l.prototype,n.m=function(){if(k(this))return-N(this).m();for(var v=0,d=1,m=0;m<this.g.length;m++){var _=this.i(m);v+=(0<=_?_:4294967296+_)*d,d*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(V(this))return"0";if(k(this))return"-"+N(this).toString(v);for(var d=p(Math.pow(v,6)),m=this,_="";;){var E=M(m,d).g;m=U(m,E.j(d));var I=((0<m.g.length?m.g[0]:m.h)>>>0).toString(v);if(m=E,V(m))return I+_;for(;6>I.length;)I="0"+I;_=I+_}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function V(v){if(v.h!=0)return!1;for(var d=0;d<v.g.length;d++)if(v.g[d]!=0)return!1;return!0}function k(v){return v.h==-1}n.l=function(v){return v=U(this,v),k(v)?-1:V(v)?0:1};function N(v){for(var d=v.g.length,m=[],_=0;_<d;_++)m[_]=~v.g[_];return new l(m,~v.h).add(R)}n.abs=function(){return k(this)?N(this):this},n.add=function(v){for(var d=Math.max(this.g.length,v.g.length),m=[],_=0,E=0;E<=d;E++){var I=_+(this.i(E)&65535)+(v.i(E)&65535),g=(I>>>16)+(this.i(E)>>>16)+(v.i(E)>>>16);_=g>>>16,I&=65535,g&=65535,m[E]=g<<16|I}return new l(m,m[m.length-1]&-2147483648?-1:0)};function U(v,d){return v.add(N(d))}n.j=function(v){if(V(this)||V(v))return w;if(k(this))return k(v)?N(this).j(N(v)):N(N(this).j(v));if(k(v))return N(this.j(N(v)));if(0>this.l(P)&&0>v.l(P))return p(this.m()*v.m());for(var d=this.g.length+v.g.length,m=[],_=0;_<2*d;_++)m[_]=0;for(_=0;_<this.g.length;_++)for(var E=0;E<v.g.length;E++){var I=this.i(_)>>>16,g=this.i(_)&65535,kt=v.i(E)>>>16,jt=v.i(E)&65535;m[2*_+2*E]+=g*jt,O(m,2*_+2*E),m[2*_+2*E+1]+=I*jt,O(m,2*_+2*E+1),m[2*_+2*E+1]+=g*kt,O(m,2*_+2*E+1),m[2*_+2*E+2]+=I*kt,O(m,2*_+2*E+2)}for(_=0;_<d;_++)m[_]=m[2*_+1]<<16|m[2*_];for(_=d;_<2*d;_++)m[_]=0;return new l(m,0)};function O(v,d){for(;(v[d]&65535)!=v[d];)v[d+1]+=v[d]>>>16,v[d]&=65535,d++}function S(v,d){this.g=v,this.h=d}function M(v,d){if(V(d))throw Error("division by zero");if(V(v))return new S(w,w);if(k(v))return d=M(N(v),d),new S(N(d.g),N(d.h));if(k(d))return d=M(v,N(d)),new S(N(d.g),d.h);if(30<v.g.length){if(k(v)||k(d))throw Error("slowDivide_ only works with positive integers.");for(var m=R,_=d;0>=_.l(v);)m=W(m),_=W(_);var E=Y(m,1),I=Y(_,1);for(_=Y(_,2),m=Y(m,2);!V(_);){var g=I.add(_);0>=g.l(v)&&(E=E.add(m),I=g),_=Y(_,1),m=Y(m,1)}return d=U(v,E.j(d)),new S(E,d)}for(E=w;0<=v.l(d);){for(m=Math.max(1,Math.floor(v.m()/d.m())),_=Math.ceil(Math.log(m)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),I=p(m),g=I.j(d);k(g)||0<g.l(v);)m-=_,I=p(m),g=I.j(d);V(I)&&(I=R),E=E.add(I),v=U(v,g)}return new S(E,v)}n.A=function(v){return M(this,v).h},n.and=function(v){for(var d=Math.max(this.g.length,v.g.length),m=[],_=0;_<d;_++)m[_]=this.i(_)&v.i(_);return new l(m,this.h&v.h)},n.or=function(v){for(var d=Math.max(this.g.length,v.g.length),m=[],_=0;_<d;_++)m[_]=this.i(_)|v.i(_);return new l(m,this.h|v.h)},n.xor=function(v){for(var d=Math.max(this.g.length,v.g.length),m=[],_=0;_<d;_++)m[_]=this.i(_)^v.i(_);return new l(m,this.h^v.h)};function W(v){for(var d=v.g.length+1,m=[],_=0;_<d;_++)m[_]=v.i(_)<<1|v.i(_-1)>>>31;return new l(m,v.h)}function Y(v,d){var m=d>>5;d%=32;for(var _=v.g.length-m,E=[],I=0;I<_;I++)E[I]=0<d?v.i(I+m)>>>d|v.i(I+m+1)<<32-d:v.i(I+m);return new l(E,v.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=p,l.fromString=y,Do=l}).apply(typeof Gs<"u"?Gs:typeof self<"u"?self:typeof window<"u"?window:{});var qn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var No,ko,an,Oo,Xn,oi,Mo,xo,Fo;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(r,a,u){return r==Array.prototype||r==Object.prototype||(r[a]=u.value),r};function e(r){r=[typeof globalThis=="object"&&globalThis,r,typeof window=="object"&&window,typeof self=="object"&&self,typeof qn=="object"&&qn];for(var a=0;a<r.length;++a){var u=r[a];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var i=e(this);function s(r,a){if(a)t:{var u=i;r=r.split(".");for(var h=0;h<r.length-1;h++){var T=r[h];if(!(T in u))break t;u=u[T]}r=r[r.length-1],h=u[r],a=a(h),a!=h&&a!=null&&t(u,r,{configurable:!0,writable:!0,value:a})}}function o(r,a){r instanceof String&&(r+="");var u=0,h=!1,T={next:function(){if(!h&&u<r.length){var A=u++;return{value:a(A,r[A]),done:!1}}return h=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}s("Array.prototype.values",function(r){return r||function(){return o(this,function(a,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},c=this||self;function f(r){var a=typeof r;return a=a!="object"?a:r?Array.isArray(r)?"array":a:"null",a=="array"||a=="object"&&typeof r.length=="number"}function p(r){var a=typeof r;return a=="object"&&r!=null||a=="function"}function y(r,a,u){return r.call.apply(r.bind,arguments)}function w(r,a,u){if(!r)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,h),r.apply(a,T)}}return function(){return r.apply(a,arguments)}}function R(r,a,u){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:w,R.apply(null,arguments)}function P(r,a){var u=Array.prototype.slice.call(arguments,1);return function(){var h=u.slice();return h.push.apply(h,arguments),r.apply(this,h)}}function V(r,a){function u(){}u.prototype=a.prototype,r.aa=a.prototype,r.prototype=new u,r.prototype.constructor=r,r.Qb=function(h,T,A){for(var D=Array(arguments.length-2),J=2;J<arguments.length;J++)D[J-2]=arguments[J];return a.prototype[T].apply(h,D)}}function k(r){const a=r.length;if(0<a){const u=Array(a);for(let h=0;h<a;h++)u[h]=r[h];return u}return[]}function N(r,a){for(let u=1;u<arguments.length;u++){const h=arguments[u];if(f(h)){const T=r.length||0,A=h.length||0;r.length=T+A;for(let D=0;D<A;D++)r[T+D]=h[D]}else r.push(h)}}class U{constructor(a,u){this.i=a,this.j=u,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function O(r){return/^[\s\xa0]*$/.test(r)}function S(){var r=c.navigator;return r&&(r=r.userAgent)?r:""}function M(r){return M[" "](r),r}M[" "]=function(){};var W=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function Y(r,a,u){for(const h in r)a.call(u,r[h],h,r)}function v(r,a){for(const u in r)a.call(void 0,r[u],u,r)}function d(r){const a={};for(const u in r)a[u]=r[u];return a}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(r,a){let u,h;for(let T=1;T<arguments.length;T++){h=arguments[T];for(u in h)r[u]=h[u];for(let A=0;A<m.length;A++)u=m[A],Object.prototype.hasOwnProperty.call(h,u)&&(r[u]=h[u])}}function E(r){var a=1;r=r.split(":");const u=[];for(;0<a&&r.length;)u.push(r.shift()),a--;return r.length&&u.push(r.join(":")),u}function I(r){c.setTimeout(()=>{throw r},0)}function g(){var r=vr;let a=null;return r.g&&(a=r.g,r.g=r.g.next,r.g||(r.h=null),a.next=null),a}class kt{constructor(){this.h=this.g=null}add(a,u){const h=jt.get();h.set(a,u),this.h?this.h.next=h:this.g=h,this.h=h}}var jt=new U(()=>new Qt,r=>r.reset());class Qt{constructor(){this.next=this.g=this.h=null}set(a,u){this.h=a,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let Wt,je=!1,vr=new kt,ki=()=>{const r=c.Promise.resolve(void 0);Wt=()=>{r.then(Oa)}};var Oa=()=>{for(var r;r=g();){try{r.h.call(r.g)}catch(u){I(u)}var a=jt;a.j(r),100>a.h&&(a.h++,r.next=a.g,a.g=r)}je=!1};function Xt(){this.s=this.s,this.C=this.C}Xt.prototype.s=!1,Xt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Xt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function _t(r,a){this.type=r,this.g=this.target=a,this.defaultPrevented=!1}_t.prototype.h=function(){this.defaultPrevented=!0};var Ma=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var r=!1,a=Object.defineProperty({},"passive",{get:function(){r=!0}});try{const u=()=>{};c.addEventListener("test",u,a),c.removeEventListener("test",u,a)}catch{}return r}();function $e(r,a){if(_t.call(this,r?r.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,r){var u=this.type=r.type,h=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:null;if(this.target=r.target||r.srcElement,this.g=a,a=r.relatedTarget){if(W){t:{try{M(a.nodeName);var T=!0;break t}catch{}T=!1}T||(a=null)}}else u=="mouseover"?a=r.fromElement:u=="mouseout"&&(a=r.toElement);this.relatedTarget=a,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0),this.button=r.button,this.key=r.key||"",this.ctrlKey=r.ctrlKey,this.altKey=r.altKey,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.pointerId=r.pointerId||0,this.pointerType=typeof r.pointerType=="string"?r.pointerType:xa[r.pointerType]||"",this.state=r.state,this.i=r,r.defaultPrevented&&$e.aa.h.call(this)}}V($e,_t);var xa={2:"touch",3:"pen",4:"mouse"};$e.prototype.h=function(){$e.aa.h.call(this);var r=this.i;r.preventDefault?r.preventDefault():r.returnValue=!1};var Sn="closure_listenable_"+(1e6*Math.random()|0),Fa=0;function La(r,a,u,h,T){this.listener=r,this.proxy=null,this.src=a,this.type=u,this.capture=!!h,this.ha=T,this.key=++Fa,this.da=this.fa=!1}function Cn(r){r.da=!0,r.listener=null,r.proxy=null,r.src=null,r.ha=null}function bn(r){this.src=r,this.g={},this.h=0}bn.prototype.add=function(r,a,u,h,T){var A=r.toString();r=this.g[A],r||(r=this.g[A]=[],this.h++);var D=Tr(r,a,h,T);return-1<D?(a=r[D],u||(a.fa=!1)):(a=new La(a,this.src,A,!!h,T),a.fa=u,r.push(a)),a};function Er(r,a){var u=a.type;if(u in r.g){var h=r.g[u],T=Array.prototype.indexOf.call(h,a,void 0),A;(A=0<=T)&&Array.prototype.splice.call(h,T,1),A&&(Cn(a),r.g[u].length==0&&(delete r.g[u],r.h--))}}function Tr(r,a,u,h){for(var T=0;T<r.length;++T){var A=r[T];if(!A.da&&A.listener==a&&A.capture==!!u&&A.ha==h)return T}return-1}var Ir="closure_lm_"+(1e6*Math.random()|0),wr={};function Oi(r,a,u,h,T){if(Array.isArray(a)){for(var A=0;A<a.length;A++)Oi(r,a[A],u,h,T);return null}return u=Fi(u),r&&r[Sn]?r.K(a,u,p(h)?!!h.capture:!!h,T):Ua(r,a,u,!1,h,T)}function Ua(r,a,u,h,T,A){if(!a)throw Error("Invalid event type");var D=p(T)?!!T.capture:!!T,J=Rr(r);if(J||(r[Ir]=J=new bn(r)),u=J.add(a,u,h,D,A),u.proxy)return u;if(h=Ba(),u.proxy=h,h.src=r,h.listener=u,r.addEventListener)Ma||(T=D),T===void 0&&(T=!1),r.addEventListener(a.toString(),h,T);else if(r.attachEvent)r.attachEvent(xi(a.toString()),h);else if(r.addListener&&r.removeListener)r.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return u}function Ba(){function r(u){return a.call(r.src,r.listener,u)}const a=ja;return r}function Mi(r,a,u,h,T){if(Array.isArray(a))for(var A=0;A<a.length;A++)Mi(r,a[A],u,h,T);else h=p(h)?!!h.capture:!!h,u=Fi(u),r&&r[Sn]?(r=r.i,a=String(a).toString(),a in r.g&&(A=r.g[a],u=Tr(A,u,h,T),-1<u&&(Cn(A[u]),Array.prototype.splice.call(A,u,1),A.length==0&&(delete r.g[a],r.h--)))):r&&(r=Rr(r))&&(a=r.g[a.toString()],r=-1,a&&(r=Tr(a,u,h,T)),(u=-1<r?a[r]:null)&&Ar(u))}function Ar(r){if(typeof r!="number"&&r&&!r.da){var a=r.src;if(a&&a[Sn])Er(a.i,r);else{var u=r.type,h=r.proxy;a.removeEventListener?a.removeEventListener(u,h,r.capture):a.detachEvent?a.detachEvent(xi(u),h):a.addListener&&a.removeListener&&a.removeListener(h),(u=Rr(a))?(Er(u,r),u.h==0&&(u.src=null,a[Ir]=null)):Cn(r)}}}function xi(r){return r in wr?wr[r]:wr[r]="on"+r}function ja(r,a){if(r.da)r=!0;else{a=new $e(a,this);var u=r.listener,h=r.ha||r.src;r.fa&&Ar(r),r=u.call(h,a)}return r}function Rr(r){return r=r[Ir],r instanceof bn?r:null}var Pr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Fi(r){return typeof r=="function"?r:(r[Pr]||(r[Pr]=function(a){return r.handleEvent(a)}),r[Pr])}function yt(){Xt.call(this),this.i=new bn(this),this.M=this,this.F=null}V(yt,Xt),yt.prototype[Sn]=!0,yt.prototype.removeEventListener=function(r,a,u,h){Mi(this,r,a,u,h)};function Rt(r,a){var u,h=r.F;if(h)for(u=[];h;h=h.F)u.push(h);if(r=r.M,h=a.type||a,typeof a=="string")a=new _t(a,r);else if(a instanceof _t)a.target=a.target||r;else{var T=a;a=new _t(h,r),_(a,T)}if(T=!0,u)for(var A=u.length-1;0<=A;A--){var D=a.g=u[A];T=Vn(D,h,!0,a)&&T}if(D=a.g=r,T=Vn(D,h,!0,a)&&T,T=Vn(D,h,!1,a)&&T,u)for(A=0;A<u.length;A++)D=a.g=u[A],T=Vn(D,h,!1,a)&&T}yt.prototype.N=function(){if(yt.aa.N.call(this),this.i){var r=this.i,a;for(a in r.g){for(var u=r.g[a],h=0;h<u.length;h++)Cn(u[h]);delete r.g[a],r.h--}}this.F=null},yt.prototype.K=function(r,a,u,h){return this.i.add(String(r),a,!1,u,h)},yt.prototype.L=function(r,a,u,h){return this.i.add(String(r),a,!0,u,h)};function Vn(r,a,u,h){if(a=r.i.g[String(a)],!a)return!0;a=a.concat();for(var T=!0,A=0;A<a.length;++A){var D=a[A];if(D&&!D.da&&D.capture==u){var J=D.listener,dt=D.ha||D.src;D.fa&&Er(r.i,D),T=J.call(dt,h)!==!1&&T}}return T&&!h.defaultPrevented}function Li(r,a,u){if(typeof r=="function")u&&(r=R(r,u));else if(r&&typeof r.handleEvent=="function")r=R(r.handleEvent,r);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(r,a||0)}function Ui(r){r.g=Li(()=>{r.g=null,r.i&&(r.i=!1,Ui(r))},r.l);const a=r.h;r.h=null,r.m.apply(null,a)}class $a extends Xt{constructor(a,u){super(),this.m=a,this.l=u,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Ui(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ze(r){Xt.call(this),this.h=r,this.g={}}V(ze,Xt);var Bi=[];function ji(r){Y(r.g,function(a,u){this.g.hasOwnProperty(u)&&Ar(a)},r),r.g={}}ze.prototype.N=function(){ze.aa.N.call(this),ji(this)},ze.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Sr=c.JSON.stringify,za=c.JSON.parse,Ha=class{stringify(r){return c.JSON.stringify(r,void 0)}parse(r){return c.JSON.parse(r,void 0)}};function Cr(){}Cr.prototype.h=null;function $i(r){return r.h||(r.h=r.i())}function zi(){}var He={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function br(){_t.call(this,"d")}V(br,_t);function Vr(){_t.call(this,"c")}V(Vr,_t);var ce={},Hi=null;function Dn(){return Hi=Hi||new yt}ce.La="serverreachability";function qi(r){_t.call(this,ce.La,r)}V(qi,_t);function qe(r){const a=Dn();Rt(a,new qi(a))}ce.STAT_EVENT="statevent";function Gi(r,a){_t.call(this,ce.STAT_EVENT,r),this.stat=a}V(Gi,_t);function Pt(r){const a=Dn();Rt(a,new Gi(a,r))}ce.Ma="timingevent";function Ki(r,a){_t.call(this,ce.Ma,r),this.size=a}V(Ki,_t);function Ge(r,a){if(typeof r!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){r()},a)}function Ke(){this.g=!0}Ke.prototype.xa=function(){this.g=!1};function qa(r,a,u,h,T,A){r.info(function(){if(r.g)if(A)for(var D="",J=A.split("&"),dt=0;dt<J.length;dt++){var X=J[dt].split("=");if(1<X.length){var vt=X[0];X=X[1];var Et=vt.split("_");D=2<=Et.length&&Et[1]=="type"?D+(vt+"="+X+"&"):D+(vt+"=redacted&")}}else D=null;else D=A;return"XMLHTTP REQ ("+h+") [attempt "+T+"]: "+a+`
`+u+`
`+D})}function Ga(r,a,u,h,T,A,D){r.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+T+"]: "+a+`
`+u+`
`+A+" "+D})}function Re(r,a,u,h){r.info(function(){return"XMLHTTP TEXT ("+a+"): "+Qa(r,u)+(h?" "+h:"")})}function Ka(r,a){r.info(function(){return"TIMEOUT: "+a})}Ke.prototype.info=function(){};function Qa(r,a){if(!r.g)return a;if(!a)return null;try{var u=JSON.parse(a);if(u){for(r=0;r<u.length;r++)if(Array.isArray(u[r])){var h=u[r];if(!(2>h.length)){var T=h[1];if(Array.isArray(T)&&!(1>T.length)){var A=T[0];if(A!="noop"&&A!="stop"&&A!="close")for(var D=1;D<T.length;D++)T[D]=""}}}}return Sr(u)}catch{return a}}var Nn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Qi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Dr;function kn(){}V(kn,Cr),kn.prototype.g=function(){return new XMLHttpRequest},kn.prototype.i=function(){return{}},Dr=new kn;function Yt(r,a,u,h){this.j=r,this.i=a,this.l=u,this.R=h||1,this.U=new ze(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Wi}function Wi(){this.i=null,this.g="",this.h=!1}var Xi={},Nr={};function kr(r,a,u){r.L=1,r.v=Fn(zt(a)),r.m=u,r.P=!0,Yi(r,null)}function Yi(r,a){r.F=Date.now(),On(r),r.A=zt(r.v);var u=r.A,h=r.R;Array.isArray(h)||(h=[String(h)]),hs(u.i,"t",h),r.C=0,u=r.j.J,r.h=new Wi,r.g=bs(r.j,u?a:null,!r.m),0<r.O&&(r.M=new $a(R(r.Y,r,r.g),r.O)),a=r.U,u=r.g,h=r.ca;var T="readystatechange";Array.isArray(T)||(T&&(Bi[0]=T.toString()),T=Bi);for(var A=0;A<T.length;A++){var D=Oi(u,T[A],h||a.handleEvent,!1,a.h||a);if(!D)break;a.g[D.key]=D}a=r.H?d(r.H):{},r.m?(r.u||(r.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",r.g.ea(r.A,r.u,r.m,a)):(r.u="GET",r.g.ea(r.A,r.u,null,a)),qe(),qa(r.i,r.u,r.A,r.l,r.R,r.m)}Yt.prototype.ca=function(r){r=r.target;const a=this.M;a&&Ht(r)==3?a.j():this.Y(r)},Yt.prototype.Y=function(r){try{if(r==this.g)t:{const Et=Ht(this.g);var a=this.g.Ba();const Ce=this.g.Z();if(!(3>Et)&&(Et!=3||this.g&&(this.h.h||this.g.oa()||ys(this.g)))){this.J||Et!=4||a==7||(a==8||0>=Ce?qe(3):qe(2)),Or(this);var u=this.g.Z();this.X=u;e:if(Ji(this)){var h=ys(this.g);r="";var T=h.length,A=Ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){he(this),Qe(this);var D="";break e}this.h.i=new c.TextDecoder}for(a=0;a<T;a++)this.h.h=!0,r+=this.h.i.decode(h[a],{stream:!(A&&a==T-1)});h.length=0,this.h.g+=r,this.C=0,D=this.h.g}else D=this.g.oa();if(this.o=u==200,Ga(this.i,this.u,this.A,this.l,this.R,Et,u),this.o){if(this.T&&!this.K){e:{if(this.g){var J,dt=this.g;if((J=dt.g?dt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(J)){var X=J;break e}}X=null}if(u=X)Re(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Mr(this,u);else{this.o=!1,this.s=3,Pt(12),he(this),Qe(this);break t}}if(this.P){u=!0;let Ft;for(;!this.J&&this.C<D.length;)if(Ft=Wa(this,D),Ft==Nr){Et==4&&(this.s=4,Pt(14),u=!1),Re(this.i,this.l,null,"[Incomplete Response]");break}else if(Ft==Xi){this.s=4,Pt(15),Re(this.i,this.l,D,"[Invalid Chunk]"),u=!1;break}else Re(this.i,this.l,Ft,null),Mr(this,Ft);if(Ji(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Et!=4||D.length!=0||this.h.h||(this.s=1,Pt(16),u=!1),this.o=this.o&&u,!u)Re(this.i,this.l,D,"[Invalid Chunked Response]"),he(this),Qe(this);else if(0<D.length&&!this.W){this.W=!0;var vt=this.j;vt.g==this&&vt.ba&&!vt.M&&(vt.j.info("Great, no buffering proxy detected. Bytes received: "+D.length),jr(vt),vt.M=!0,Pt(11))}}else Re(this.i,this.l,D,null),Mr(this,D);Et==4&&he(this),this.o&&!this.J&&(Et==4?Rs(this.j,this):(this.o=!1,On(this)))}else fl(this.g),u==400&&0<D.indexOf("Unknown SID")?(this.s=3,Pt(12)):(this.s=0,Pt(13)),he(this),Qe(this)}}}catch{}finally{}};function Ji(r){return r.g?r.u=="GET"&&r.L!=2&&r.j.Ca:!1}function Wa(r,a){var u=r.C,h=a.indexOf(`
`,u);return h==-1?Nr:(u=Number(a.substring(u,h)),isNaN(u)?Xi:(h+=1,h+u>a.length?Nr:(a=a.slice(h,h+u),r.C=h+u,a)))}Yt.prototype.cancel=function(){this.J=!0,he(this)};function On(r){r.S=Date.now()+r.I,Zi(r,r.I)}function Zi(r,a){if(r.B!=null)throw Error("WatchDog timer not null");r.B=Ge(R(r.ba,r),a)}function Or(r){r.B&&(c.clearTimeout(r.B),r.B=null)}Yt.prototype.ba=function(){this.B=null;const r=Date.now();0<=r-this.S?(Ka(this.i,this.A),this.L!=2&&(qe(),Pt(17)),he(this),this.s=2,Qe(this)):Zi(this,this.S-r)};function Qe(r){r.j.G==0||r.J||Rs(r.j,r)}function he(r){Or(r);var a=r.M;a&&typeof a.ma=="function"&&a.ma(),r.M=null,ji(r.U),r.g&&(a=r.g,r.g=null,a.abort(),a.ma())}function Mr(r,a){try{var u=r.j;if(u.G!=0&&(u.g==r||xr(u.h,r))){if(!r.K&&xr(u.h,r)&&u.G==3){try{var h=u.Da.g.parse(a)}catch{h=null}if(Array.isArray(h)&&h.length==3){var T=h;if(T[0]==0){t:if(!u.u){if(u.g)if(u.g.F+3e3<r.F)$n(u),Bn(u);else break t;Br(u),Pt(18)}}else u.za=T[1],0<u.za-u.T&&37500>T[2]&&u.F&&u.v==0&&!u.C&&(u.C=Ge(R(u.Za,u),6e3));if(1>=ns(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else de(u,11)}else if((r.K||u.g==r)&&$n(u),!O(a))for(T=u.Da.g.parse(a),a=0;a<T.length;a++){let X=T[a];if(u.T=X[0],X=X[1],u.G==2)if(X[0]=="c"){u.K=X[1],u.ia=X[2];const vt=X[3];vt!=null&&(u.la=vt,u.j.info("VER="+u.la));const Et=X[4];Et!=null&&(u.Aa=Et,u.j.info("SVER="+u.Aa));const Ce=X[5];Ce!=null&&typeof Ce=="number"&&0<Ce&&(h=1.5*Ce,u.L=h,u.j.info("backChannelRequestTimeoutMs_="+h)),h=u;const Ft=r.g;if(Ft){const Hn=Ft.g?Ft.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Hn){var A=h.h;A.g||Hn.indexOf("spdy")==-1&&Hn.indexOf("quic")==-1&&Hn.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(Fr(A,A.h),A.h=null))}if(h.D){const $r=Ft.g?Ft.g.getResponseHeader("X-HTTP-Session-Id"):null;$r&&(h.ya=$r,tt(h.I,h.D,$r))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-r.F,u.j.info("Handshake RTT: "+u.R+"ms")),h=u;var D=r;if(h.qa=Cs(h,h.J?h.ia:null,h.W),D.K){rs(h.h,D);var J=D,dt=h.L;dt&&(J.I=dt),J.B&&(Or(J),On(J)),h.g=D}else ws(h);0<u.i.length&&jn(u)}else X[0]!="stop"&&X[0]!="close"||de(u,7);else u.G==3&&(X[0]=="stop"||X[0]=="close"?X[0]=="stop"?de(u,7):Ur(u):X[0]!="noop"&&u.l&&u.l.ta(X),u.v=0)}}qe(4)}catch{}}var Xa=class{constructor(r,a){this.g=r,this.map=a}};function ts(r){this.l=r||10,c.PerformanceNavigationTiming?(r=c.performance.getEntriesByType("navigation"),r=0<r.length&&(r[0].nextHopProtocol=="hq"||r[0].nextHopProtocol=="h2")):r=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=r?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function es(r){return r.h?!0:r.g?r.g.size>=r.j:!1}function ns(r){return r.h?1:r.g?r.g.size:0}function xr(r,a){return r.h?r.h==a:r.g?r.g.has(a):!1}function Fr(r,a){r.g?r.g.add(a):r.h=a}function rs(r,a){r.h&&r.h==a?r.h=null:r.g&&r.g.has(a)&&r.g.delete(a)}ts.prototype.cancel=function(){if(this.i=is(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const r of this.g.values())r.cancel();this.g.clear()}};function is(r){if(r.h!=null)return r.i.concat(r.h.D);if(r.g!=null&&r.g.size!==0){let a=r.i;for(const u of r.g.values())a=a.concat(u.D);return a}return k(r.i)}function Ya(r){if(r.V&&typeof r.V=="function")return r.V();if(typeof Map<"u"&&r instanceof Map||typeof Set<"u"&&r instanceof Set)return Array.from(r.values());if(typeof r=="string")return r.split("");if(f(r)){for(var a=[],u=r.length,h=0;h<u;h++)a.push(r[h]);return a}a=[],u=0;for(h in r)a[u++]=r[h];return a}function Ja(r){if(r.na&&typeof r.na=="function")return r.na();if(!r.V||typeof r.V!="function"){if(typeof Map<"u"&&r instanceof Map)return Array.from(r.keys());if(!(typeof Set<"u"&&r instanceof Set)){if(f(r)||typeof r=="string"){var a=[];r=r.length;for(var u=0;u<r;u++)a.push(u);return a}a=[],u=0;for(const h in r)a[u++]=h;return a}}}function ss(r,a){if(r.forEach&&typeof r.forEach=="function")r.forEach(a,void 0);else if(f(r)||typeof r=="string")Array.prototype.forEach.call(r,a,void 0);else for(var u=Ja(r),h=Ya(r),T=h.length,A=0;A<T;A++)a.call(void 0,h[A],u&&u[A],r)}var os=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Za(r,a){if(r){r=r.split("&");for(var u=0;u<r.length;u++){var h=r[u].indexOf("="),T=null;if(0<=h){var A=r[u].substring(0,h);T=r[u].substring(h+1)}else A=r[u];a(A,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function fe(r){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,r instanceof fe){this.h=r.h,Mn(this,r.j),this.o=r.o,this.g=r.g,xn(this,r.s),this.l=r.l;var a=r.i,u=new Ye;u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),as(this,u),this.m=r.m}else r&&(a=String(r).match(os))?(this.h=!1,Mn(this,a[1]||"",!0),this.o=We(a[2]||""),this.g=We(a[3]||"",!0),xn(this,a[4]),this.l=We(a[5]||"",!0),as(this,a[6]||"",!0),this.m=We(a[7]||"")):(this.h=!1,this.i=new Ye(null,this.h))}fe.prototype.toString=function(){var r=[],a=this.j;a&&r.push(Xe(a,ls,!0),":");var u=this.g;return(u||a=="file")&&(r.push("//"),(a=this.o)&&r.push(Xe(a,ls,!0),"@"),r.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&r.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&r.push("/"),r.push(Xe(u,u.charAt(0)=="/"?nl:el,!0))),(u=this.i.toString())&&r.push("?",u),(u=this.m)&&r.push("#",Xe(u,il)),r.join("")};function zt(r){return new fe(r)}function Mn(r,a,u){r.j=u?We(a,!0):a,r.j&&(r.j=r.j.replace(/:$/,""))}function xn(r,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);r.s=a}else r.s=null}function as(r,a,u){a instanceof Ye?(r.i=a,sl(r.i,r.h)):(u||(a=Xe(a,rl)),r.i=new Ye(a,r.h))}function tt(r,a,u){r.i.set(a,u)}function Fn(r){return tt(r,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),r}function We(r,a){return r?a?decodeURI(r.replace(/%25/g,"%2525")):decodeURIComponent(r):""}function Xe(r,a,u){return typeof r=="string"?(r=encodeURI(r).replace(a,tl),u&&(r=r.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r):null}function tl(r){return r=r.charCodeAt(0),"%"+(r>>4&15).toString(16)+(r&15).toString(16)}var ls=/[#\/\?@]/g,el=/[#\?:]/g,nl=/[#\?]/g,rl=/[#\?@]/g,il=/#/g;function Ye(r,a){this.h=this.g=null,this.i=r||null,this.j=!!a}function Jt(r){r.g||(r.g=new Map,r.h=0,r.i&&Za(r.i,function(a,u){r.add(decodeURIComponent(a.replace(/\+/g," ")),u)}))}n=Ye.prototype,n.add=function(r,a){Jt(this),this.i=null,r=Pe(this,r);var u=this.g.get(r);return u||this.g.set(r,u=[]),u.push(a),this.h+=1,this};function us(r,a){Jt(r),a=Pe(r,a),r.g.has(a)&&(r.i=null,r.h-=r.g.get(a).length,r.g.delete(a))}function cs(r,a){return Jt(r),a=Pe(r,a),r.g.has(a)}n.forEach=function(r,a){Jt(this),this.g.forEach(function(u,h){u.forEach(function(T){r.call(a,T,h,this)},this)},this)},n.na=function(){Jt(this);const r=Array.from(this.g.values()),a=Array.from(this.g.keys()),u=[];for(let h=0;h<a.length;h++){const T=r[h];for(let A=0;A<T.length;A++)u.push(a[h])}return u},n.V=function(r){Jt(this);let a=[];if(typeof r=="string")cs(this,r)&&(a=a.concat(this.g.get(Pe(this,r))));else{r=Array.from(this.g.values());for(let u=0;u<r.length;u++)a=a.concat(r[u])}return a},n.set=function(r,a){return Jt(this),this.i=null,r=Pe(this,r),cs(this,r)&&(this.h-=this.g.get(r).length),this.g.set(r,[a]),this.h+=1,this},n.get=function(r,a){return r?(r=this.V(r),0<r.length?String(r[0]):a):a};function hs(r,a,u){us(r,a),0<u.length&&(r.i=null,r.g.set(Pe(r,a),k(u)),r.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const r=[],a=Array.from(this.g.keys());for(var u=0;u<a.length;u++){var h=a[u];const A=encodeURIComponent(String(h)),D=this.V(h);for(h=0;h<D.length;h++){var T=A;D[h]!==""&&(T+="="+encodeURIComponent(String(D[h]))),r.push(T)}}return this.i=r.join("&")};function Pe(r,a){return a=String(a),r.j&&(a=a.toLowerCase()),a}function sl(r,a){a&&!r.j&&(Jt(r),r.i=null,r.g.forEach(function(u,h){var T=h.toLowerCase();h!=T&&(us(this,h),hs(this,T,u))},r)),r.j=a}function ol(r,a){const u=new Ke;if(c.Image){const h=new Image;h.onload=P(Zt,u,"TestLoadImage: loaded",!0,a,h),h.onerror=P(Zt,u,"TestLoadImage: error",!1,a,h),h.onabort=P(Zt,u,"TestLoadImage: abort",!1,a,h),h.ontimeout=P(Zt,u,"TestLoadImage: timeout",!1,a,h),c.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=r}else a(!1)}function al(r,a){const u=new Ke,h=new AbortController,T=setTimeout(()=>{h.abort(),Zt(u,"TestPingServer: timeout",!1,a)},1e4);fetch(r,{signal:h.signal}).then(A=>{clearTimeout(T),A.ok?Zt(u,"TestPingServer: ok",!0,a):Zt(u,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(T),Zt(u,"TestPingServer: error",!1,a)})}function Zt(r,a,u,h,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),h(u)}catch{}}function ll(){this.g=new Ha}function ul(r,a,u){const h=u||"";try{ss(r,function(T,A){let D=T;p(T)&&(D=Sr(T)),a.push(h+A+"="+encodeURIComponent(D))})}catch(T){throw a.push(h+"type="+encodeURIComponent("_badmap")),T}}function Je(r){this.l=r.Ub||null,this.j=r.eb||!1}V(Je,Cr),Je.prototype.g=function(){return new Ln(this.l,this.j)},Je.prototype.i=function(r){return function(){return r}}({});function Ln(r,a){yt.call(this),this.D=r,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(Ln,yt),n=Ln.prototype,n.open=function(r,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=r,this.A=a,this.readyState=1,tn(this)},n.send=function(r){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};r&&(a.body=r),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ze(this)),this.readyState=0},n.Sa=function(r){if(this.g&&(this.l=r,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=r.headers,this.readyState=2,tn(this)),this.g&&(this.readyState=3,tn(this),this.g)))if(this.responseType==="arraybuffer")r.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in r){if(this.j=r.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;fs(this)}else r.text().then(this.Ra.bind(this),this.ga.bind(this))};function fs(r){r.j.read().then(r.Pa.bind(r)).catch(r.ga.bind(r))}n.Pa=function(r){if(this.g){if(this.o&&r.value)this.response.push(r.value);else if(!this.o){var a=r.value?r.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!r.done}))&&(this.response=this.responseText+=a)}r.done?Ze(this):tn(this),this.readyState==3&&fs(this)}},n.Ra=function(r){this.g&&(this.response=this.responseText=r,Ze(this))},n.Qa=function(r){this.g&&(this.response=r,Ze(this))},n.ga=function(){this.g&&Ze(this)};function Ze(r){r.readyState=4,r.l=null,r.j=null,r.v=null,tn(r)}n.setRequestHeader=function(r,a){this.u.append(r,a)},n.getResponseHeader=function(r){return this.h&&this.h.get(r.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const r=[],a=this.h.entries();for(var u=a.next();!u.done;)u=u.value,r.push(u[0]+": "+u[1]),u=a.next();return r.join(`\r
`)};function tn(r){r.onreadystatechange&&r.onreadystatechange.call(r)}Object.defineProperty(Ln.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(r){this.m=r?"include":"same-origin"}});function ds(r){let a="";return Y(r,function(u,h){a+=h,a+=":",a+=u,a+=`\r
`}),a}function Lr(r,a,u){t:{for(h in u){var h=!1;break t}h=!0}h||(u=ds(u),typeof r=="string"?u!=null&&encodeURIComponent(String(u)):tt(r,a,u))}function rt(r){yt.call(this),this.headers=new Map,this.o=r||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(rt,yt);var cl=/^https?$/i,hl=["POST","PUT"];n=rt.prototype,n.Ha=function(r){this.J=r},n.ea=function(r,a,u,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+r);a=a?a.toUpperCase():"GET",this.D=r,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Dr.g(),this.v=this.o?$i(this.o):$i(Dr),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(a,String(r),!0),this.B=!1}catch(A){ps(this,A);return}if(r=u||"",u=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var T in h)u.set(T,h[T]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const A of h.keys())u.set(A,h.get(A));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(u.keys()).find(A=>A.toLowerCase()=="content-type"),T=c.FormData&&r instanceof c.FormData,!(0<=Array.prototype.indexOf.call(hl,a,void 0))||h||T||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,D]of u)this.g.setRequestHeader(A,D);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{_s(this),this.u=!0,this.g.send(r),this.u=!1}catch(A){ps(this,A)}};function ps(r,a){r.h=!1,r.g&&(r.j=!0,r.g.abort(),r.j=!1),r.l=a,r.m=5,ms(r),Un(r)}function ms(r){r.A||(r.A=!0,Rt(r,"complete"),Rt(r,"error"))}n.abort=function(r){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=r||7,Rt(this,"complete"),Rt(this,"abort"),Un(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Un(this,!0)),rt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?gs(this):this.bb())},n.bb=function(){gs(this)};function gs(r){if(r.h&&typeof l<"u"&&(!r.v[1]||Ht(r)!=4||r.Z()!=2)){if(r.u&&Ht(r)==4)Li(r.Ea,0,r);else if(Rt(r,"readystatechange"),Ht(r)==4){r.h=!1;try{const D=r.Z();t:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var u;if(!(u=a)){var h;if(h=D===0){var T=String(r.D).match(os)[1]||null;!T&&c.self&&c.self.location&&(T=c.self.location.protocol.slice(0,-1)),h=!cl.test(T?T.toLowerCase():"")}u=h}if(u)Rt(r,"complete"),Rt(r,"success");else{r.m=6;try{var A=2<Ht(r)?r.g.statusText:""}catch{A=""}r.l=A+" ["+r.Z()+"]",ms(r)}}finally{Un(r)}}}}function Un(r,a){if(r.g){_s(r);const u=r.g,h=r.v[0]?()=>{}:null;r.g=null,r.v=null,a||Rt(r,"ready");try{u.onreadystatechange=h}catch{}}}function _s(r){r.I&&(c.clearTimeout(r.I),r.I=null)}n.isActive=function(){return!!this.g};function Ht(r){return r.g?r.g.readyState:0}n.Z=function(){try{return 2<Ht(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(r){if(this.g){var a=this.g.responseText;return r&&a.indexOf(r)==0&&(a=a.substring(r.length)),za(a)}};function ys(r){try{if(!r.g)return null;if("response"in r.g)return r.g.response;switch(r.H){case"":case"text":return r.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in r.g)return r.g.mozResponseArrayBuffer}return null}catch{return null}}function fl(r){const a={};r=(r.g&&2<=Ht(r)&&r.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<r.length;h++){if(O(r[h]))continue;var u=E(r[h]);const T=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const A=a[T]||[];a[T]=A,A.push(u)}v(a,function(h){return h.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function en(r,a,u){return u&&u.internalChannelParams&&u.internalChannelParams[r]||a}function vs(r){this.Aa=0,this.i=[],this.j=new Ke,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=en("failFast",!1,r),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=en("baseRetryDelayMs",5e3,r),this.cb=en("retryDelaySeedMs",1e4,r),this.Wa=en("forwardChannelMaxRetries",2,r),this.wa=en("forwardChannelRequestTimeoutMs",2e4,r),this.pa=r&&r.xmlHttpFactory||void 0,this.Xa=r&&r.Tb||void 0,this.Ca=r&&r.useFetchStreams||!1,this.L=void 0,this.J=r&&r.supportsCrossDomainXhr||!1,this.K="",this.h=new ts(r&&r.concurrentRequestLimit),this.Da=new ll,this.P=r&&r.fastHandshake||!1,this.O=r&&r.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=r&&r.Rb||!1,r&&r.xa&&this.j.xa(),r&&r.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&r&&r.detectBufferingProxy||!1,this.ja=void 0,r&&r.longPollingTimeout&&0<r.longPollingTimeout&&(this.ja=r.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=vs.prototype,n.la=8,n.G=1,n.connect=function(r,a,u,h){Pt(0),this.W=r,this.H=a||{},u&&h!==void 0&&(this.H.OSID=u,this.H.OAID=h),this.F=this.X,this.I=Cs(this,null,this.W),jn(this)};function Ur(r){if(Es(r),r.G==3){var a=r.U++,u=zt(r.I);if(tt(u,"SID",r.K),tt(u,"RID",a),tt(u,"TYPE","terminate"),nn(r,u),a=new Yt(r,r.j,a),a.L=2,a.v=Fn(zt(u)),u=!1,c.navigator&&c.navigator.sendBeacon)try{u=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!u&&c.Image&&(new Image().src=a.v,u=!0),u||(a.g=bs(a.j,null),a.g.ea(a.v)),a.F=Date.now(),On(a)}Ss(r)}function Bn(r){r.g&&(jr(r),r.g.cancel(),r.g=null)}function Es(r){Bn(r),r.u&&(c.clearTimeout(r.u),r.u=null),$n(r),r.h.cancel(),r.s&&(typeof r.s=="number"&&c.clearTimeout(r.s),r.s=null)}function jn(r){if(!es(r.h)&&!r.s){r.s=!0;var a=r.Ga;Wt||ki(),je||(Wt(),je=!0),vr.add(a,r),r.B=0}}function dl(r,a){return ns(r.h)>=r.h.j-(r.s?1:0)?!1:r.s?(r.i=a.D.concat(r.i),!0):r.G==1||r.G==2||r.B>=(r.Va?0:r.Wa)?!1:(r.s=Ge(R(r.Ga,r,a),Ps(r,r.B)),r.B++,!0)}n.Ga=function(r){if(this.s)if(this.s=null,this.G==1){if(!r){this.U=Math.floor(1e5*Math.random()),r=this.U++;const T=new Yt(this,this.j,r);let A=this.o;if(this.S&&(A?(A=d(A),_(A,this.S)):A=this.S),this.m!==null||this.O||(T.H=A,A=null),this.P)t:{for(var a=0,u=0;u<this.i.length;u++){e:{var h=this.i[u];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(a+=h,4096<a){a=u;break t}if(a===4096||u===this.i.length-1){a=u+1;break t}}a=1e3}else a=1e3;a=Is(this,T,a),u=zt(this.I),tt(u,"RID",r),tt(u,"CVER",22),this.D&&tt(u,"X-HTTP-Session-Id",this.D),nn(this,u),A&&(this.O?a="headers="+encodeURIComponent(String(ds(A)))+"&"+a:this.m&&Lr(u,this.m,A)),Fr(this.h,T),this.Ua&&tt(u,"TYPE","init"),this.P?(tt(u,"$req",a),tt(u,"SID","null"),T.T=!0,kr(T,u,null)):kr(T,u,a),this.G=2}}else this.G==3&&(r?Ts(this,r):this.i.length==0||es(this.h)||Ts(this))};function Ts(r,a){var u;a?u=a.l:u=r.U++;const h=zt(r.I);tt(h,"SID",r.K),tt(h,"RID",u),tt(h,"AID",r.T),nn(r,h),r.m&&r.o&&Lr(h,r.m,r.o),u=new Yt(r,r.j,u,r.B+1),r.m===null&&(u.H=r.o),a&&(r.i=a.D.concat(r.i)),a=Is(r,u,1e3),u.I=Math.round(.5*r.wa)+Math.round(.5*r.wa*Math.random()),Fr(r.h,u),kr(u,h,a)}function nn(r,a){r.H&&Y(r.H,function(u,h){tt(a,h,u)}),r.l&&ss({},function(u,h){tt(a,h,u)})}function Is(r,a,u){u=Math.min(r.i.length,u);var h=r.l?R(r.l.Na,r.l,r):null;t:{var T=r.i;let A=-1;for(;;){const D=["count="+u];A==-1?0<u?(A=T[0].g,D.push("ofs="+A)):A=0:D.push("ofs="+A);let J=!0;for(let dt=0;dt<u;dt++){let X=T[dt].g;const vt=T[dt].map;if(X-=A,0>X)A=Math.max(0,T[dt].g-100),J=!1;else try{ul(vt,D,"req"+X+"_")}catch{h&&h(vt)}}if(J){h=D.join("&");break t}}}return r=r.i.splice(0,u),a.D=r,h}function ws(r){if(!r.g&&!r.u){r.Y=1;var a=r.Fa;Wt||ki(),je||(Wt(),je=!0),vr.add(a,r),r.v=0}}function Br(r){return r.g||r.u||3<=r.v?!1:(r.Y++,r.u=Ge(R(r.Fa,r),Ps(r,r.v)),r.v++,!0)}n.Fa=function(){if(this.u=null,As(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var r=2*this.R;this.j.info("BP detection timer enabled: "+r),this.A=Ge(R(this.ab,this),r)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Pt(10),Bn(this),As(this))};function jr(r){r.A!=null&&(c.clearTimeout(r.A),r.A=null)}function As(r){r.g=new Yt(r,r.j,"rpc",r.Y),r.m===null&&(r.g.H=r.o),r.g.O=0;var a=zt(r.qa);tt(a,"RID","rpc"),tt(a,"SID",r.K),tt(a,"AID",r.T),tt(a,"CI",r.F?"0":"1"),!r.F&&r.ja&&tt(a,"TO",r.ja),tt(a,"TYPE","xmlhttp"),nn(r,a),r.m&&r.o&&Lr(a,r.m,r.o),r.L&&(r.g.I=r.L);var u=r.g;r=r.ia,u.L=1,u.v=Fn(zt(a)),u.m=null,u.P=!0,Yi(u,r)}n.Za=function(){this.C!=null&&(this.C=null,Bn(this),Br(this),Pt(19))};function $n(r){r.C!=null&&(c.clearTimeout(r.C),r.C=null)}function Rs(r,a){var u=null;if(r.g==a){$n(r),jr(r),r.g=null;var h=2}else if(xr(r.h,a))u=a.D,rs(r.h,a),h=1;else return;if(r.G!=0){if(a.o)if(h==1){u=a.m?a.m.length:0,a=Date.now()-a.F;var T=r.B;h=Dn(),Rt(h,new Ki(h,u)),jn(r)}else ws(r);else if(T=a.s,T==3||T==0&&0<a.X||!(h==1&&dl(r,a)||h==2&&Br(r)))switch(u&&0<u.length&&(a=r.h,a.i=a.i.concat(u)),T){case 1:de(r,5);break;case 4:de(r,10);break;case 3:de(r,6);break;default:de(r,2)}}}function Ps(r,a){let u=r.Ta+Math.floor(Math.random()*r.cb);return r.isActive()||(u*=2),u*a}function de(r,a){if(r.j.info("Error code "+a),a==2){var u=R(r.fb,r),h=r.Xa;const T=!h;h=new fe(h||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Mn(h,"https"),Fn(h),T?ol(h.toString(),u):al(h.toString(),u)}else Pt(2);r.G=0,r.l&&r.l.sa(a),Ss(r),Es(r)}n.fb=function(r){r?(this.j.info("Successfully pinged google.com"),Pt(2)):(this.j.info("Failed to ping google.com"),Pt(1))};function Ss(r){if(r.G=0,r.ka=[],r.l){const a=is(r.h);(a.length!=0||r.i.length!=0)&&(N(r.ka,a),N(r.ka,r.i),r.h.i.length=0,k(r.i),r.i.length=0),r.l.ra()}}function Cs(r,a,u){var h=u instanceof fe?zt(u):new fe(u);if(h.g!="")a&&(h.g=a+"."+h.g),xn(h,h.s);else{var T=c.location;h=T.protocol,a=a?a+"."+T.hostname:T.hostname,T=+T.port;var A=new fe(null);h&&Mn(A,h),a&&(A.g=a),T&&xn(A,T),u&&(A.l=u),h=A}return u=r.D,a=r.ya,u&&a&&tt(h,u,a),tt(h,"VER",r.la),nn(r,h),h}function bs(r,a,u){if(a&&!r.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=r.Ca&&!r.pa?new rt(new Je({eb:u})):new rt(r.pa),a.Ha(r.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Vs(){}n=Vs.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function zn(){}zn.prototype.g=function(r,a){return new xt(r,a)};function xt(r,a){yt.call(this),this.g=new vs(a),this.l=r,this.h=a&&a.messageUrlParams||null,r=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(r?r["X-Client-Protocol"]="webchannel":r={"X-Client-Protocol":"webchannel"}),this.g.o=r,r=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(r?r["X-WebChannel-Content-Type"]=a.messageContentType:r={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(r?r["X-WebChannel-Client-Profile"]=a.va:r={"X-WebChannel-Client-Profile":a.va}),this.g.S=r,(r=a&&a.Sb)&&!O(r)&&(this.g.m=r),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!O(a)&&(this.g.D=a,r=this.h,r!==null&&a in r&&(r=this.h,a in r&&delete r[a])),this.j=new Se(this)}V(xt,yt),xt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},xt.prototype.close=function(){Ur(this.g)},xt.prototype.o=function(r){var a=this.g;if(typeof r=="string"){var u={};u.__data__=r,r=u}else this.u&&(u={},u.__data__=Sr(r),r=u);a.i.push(new Xa(a.Ya++,r)),a.G==3&&jn(a)},xt.prototype.N=function(){this.g.l=null,delete this.j,Ur(this.g),delete this.g,xt.aa.N.call(this)};function Ds(r){br.call(this),r.__headers__&&(this.headers=r.__headers__,this.statusCode=r.__status__,delete r.__headers__,delete r.__status__);var a=r.__sm__;if(a){t:{for(const u in a){r=u;break t}r=void 0}(this.i=r)&&(r=this.i,a=a!==null&&r in a?a[r]:void 0),this.data=a}else this.data=r}V(Ds,br);function Ns(){Vr.call(this),this.status=1}V(Ns,Vr);function Se(r){this.g=r}V(Se,Vs),Se.prototype.ua=function(){Rt(this.g,"a")},Se.prototype.ta=function(r){Rt(this.g,new Ds(r))},Se.prototype.sa=function(r){Rt(this.g,new Ns)},Se.prototype.ra=function(){Rt(this.g,"b")},zn.prototype.createWebChannel=zn.prototype.g,xt.prototype.send=xt.prototype.o,xt.prototype.open=xt.prototype.m,xt.prototype.close=xt.prototype.close,Fo=function(){return new zn},xo=function(){return Dn()},Mo=ce,oi={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Nn.NO_ERROR=0,Nn.TIMEOUT=8,Nn.HTTP_ERROR=6,Xn=Nn,Qi.COMPLETE="complete",Oo=Qi,zi.EventType=He,He.OPEN="a",He.CLOSE="b",He.ERROR="c",He.MESSAGE="d",yt.prototype.listen=yt.prototype.K,an=zi,ko=Je,rt.prototype.listenOnce=rt.prototype.L,rt.prototype.getLastError=rt.prototype.Ka,rt.prototype.getLastErrorCode=rt.prototype.Ba,rt.prototype.getStatus=rt.prototype.Z,rt.prototype.getResponseJson=rt.prototype.Oa,rt.prototype.getResponseText=rt.prototype.oa,rt.prototype.send=rt.prototype.ea,rt.prototype.setWithCredentials=rt.prototype.Ha,No=rt}).apply(typeof qn<"u"?qn:typeof self<"u"?self:typeof window<"u"?window:{});const Ks="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}It.UNAUTHENTICATED=new It(null),It.GOOGLE_CREDENTIALS=new It("google-credentials-uid"),It.FIRST_PARTY=new It("first-party-uid"),It.MOCK_USER=new It("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ue="10.12.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te=new Ro("@firebase/firestore");function sn(){return Te.logLevel}function x(n,...t){if(Te.logLevel<=Q.DEBUG){const e=t.map(gi);Te.debug(`Firestore (${Ue}): ${n}`,...e)}}function Ie(n,...t){if(Te.logLevel<=Q.ERROR){const e=t.map(gi);Te.error(`Firestore (${Ue}): ${n}`,...e)}}function er(n,...t){if(Te.logLevel<=Q.WARN){const e=t.map(gi);Te.warn(`Firestore (${Ue}): ${n}`,...e)}}function gi(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(n="Unexpected state"){const t=`FIRESTORE (${Ue}) INTERNAL ASSERTION FAILED: `+n;throw Ie(t),new Error(t)}function ft(n,t){n||G()}function et(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends Le{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Rc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(It.UNAUTHENTICATED))}shutdown(){}}class Pc{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Sc{constructor(t){this.t=t,this.currentUser=It.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let i=this.i;const s=f=>this.i!==i?(i=this.i,e(f)):Promise.resolve();let o=new _e;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new _e,t.enqueueRetryable(()=>s(this.currentUser))};const l=()=>{const f=o;t.enqueueRetryable(async()=>{await f.promise,await s(this.currentUser)})},c=f=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.auth.addAuthTokenListener(this.o),l()};this.t.onInit(f=>c(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?c(f):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new _e)}},0),l()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(i=>this.i!==t?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ft(typeof i.accessToken=="string"),new Lo(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return ft(t===null||typeof t=="string"),new It(t)}}class Cc{constructor(t,e,i){this.l=t,this.h=e,this.P=i,this.type="FirstParty",this.user=It.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class bc{constructor(t,e,i){this.l=t,this.h=e,this.P=i}getToken(){return Promise.resolve(new Cc(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(It.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Vc{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Dc{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const i=o=>{o.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const l=o.token!==this.R;return this.R=o.token,x("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>i(o))};const s=o=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(ft(typeof e.token=="string"),this.R=e.token,new Vc(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let i=0;i<n;i++)e[i]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const s=Nc(40);for(let o=0;o<s.length;++o)i.length<20&&s[o]<e&&(i+=t.charAt(s[o]%t.length))}return i}}function Z(n,t){return n<t?-1:n>t?1:0}function ke(n,t,e){return n.length===t.length&&n.every((i,s)=>e(i,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new j(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new j(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new j(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new j(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ht.fromMillis(Date.now())}static fromDate(t){return ht.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),i=Math.floor(1e6*(t-1e3*e));return new ht(e,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Z(this.nanoseconds,t.nanoseconds):Z(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t){this.timestamp=t}static fromTimestamp(t){return new nt(t)}static min(){return new nt(new ht(0,0))}static max(){return new nt(new ht(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(t,e,i){e===void 0?e=0:e>t.length&&G(),i===void 0?i=t.length-e:i>t.length-e&&G(),this.segments=t,this.offset=e,this.len=i}get length(){return this.len}isEqual(t){return gn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof gn?t.forEach(i=>{e.push(i)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,i=this.limit();e<i;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const i=Math.min(t.length,e.length);for(let s=0;s<i;s++){const o=t.get(s),l=e.get(s);if(o<l)return-1;if(o>l)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class it extends gn{construct(t,e,i){return new it(t,e,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const i of t){if(i.indexOf("//")>=0)throw new j(b.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter(s=>s.length>0))}return new it(e)}static emptyPath(){return new it([])}}const kc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gt extends gn{construct(t,e,i){return new gt(t,e,i)}static isValidIdentifier(t){return kc.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new gt(["__name__"])}static fromServerFormat(t){const e=[];let i="",s=0;const o=()=>{if(i.length===0)throw new j(b.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(i),i=""};let l=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new j(b.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const f=t[s+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new j(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=f,s+=2}else c==="`"?(l=!l,s++):c!=="."||l?(i+=c,s++):(o(),s++)}if(o(),l)throw new j(b.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new gt(e)}static emptyPath(){return new gt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(t){this.path=t}static fromPath(t){return new H(it.fromString(t))}static fromName(t){return new H(it.fromString(t).popFirst(5))}static empty(){return new H(it.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&it.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return it.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new H(new it(t.slice()))}}function Oc(n,t){const e=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=nt.fromTimestamp(i===1e9?new ht(e+1,0):new ht(e,i));return new ie(s,H.empty(),t)}function Mc(n){return new ie(n.readTime,n.key,-1)}class ie{constructor(t,e,i){this.readTime=t,this.documentKey=e,this.largestBatchId=i}static min(){return new ie(nt.min(),H.empty(),-1)}static max(){return new ie(nt.max(),H.empty(),-1)}}function xc(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=H.comparator(n.documentKey,t.documentKey),e!==0?e:Z(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Lc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bo(n){if(n.code!==b.FAILED_PRECONDITION||n.message!==Fc)throw n;x("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new C((i,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(i,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(i,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof C?e:C.resolve(e)}catch(e){return C.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):C.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):C.reject(e)}static resolve(t){return new C((e,i)=>{e(t)})}static reject(t){return new C((e,i)=>{i(t)})}static waitFor(t){return new C((e,i)=>{let s=0,o=0,l=!1;t.forEach(c=>{++s,c.next(()=>{++o,l&&o===s&&e()},f=>i(f))}),l=!0,o===s&&e()})}static or(t){let e=C.resolve(!1);for(const i of t)e=e.next(s=>s?C.resolve(s):i());return e}static forEach(t,e){const i=[];return t.forEach((s,o)=>{i.push(e.call(this,s,o))}),this.waitFor(i)}static mapArray(t,e){return new C((i,s)=>{const o=t.length,l=new Array(o);let c=0;for(let f=0;f<o;f++){const p=f;e(t[p]).next(y=>{l[p]=y,++c,c===o&&i(l)},y=>s(y))}})}static doWhile(t,e){return new C((i,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):i()};o()})}}function Uc(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function cr(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=i=>this.ie(i),this.se=i=>e.writeSequenceNumber(i))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}jo.oe=-1;function _i(n){return n==null}function nr(n){return n===0&&1/n==-1/0}function Bc(n){return typeof n=="number"&&Number.isInteger(n)&&!nr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function wn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function $o(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(t,e){this.comparator=t,this.root=e||pt.EMPTY}insert(t,e){return new Mt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,pt.BLACK,null,null))}remove(t){return new Mt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,pt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const i=this.comparator(t,e.key);if(i===0)return e.value;i<0?e=e.left:i>0&&(e=e.right)}return null}indexOf(t){let e=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(t,i.key);if(s===0)return e+i.left.size;s<0?i=i.left:(e+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,i)=>(t(e,i),!1))}toString(){const t=[];return this.inorderTraversal((e,i)=>(t.push(`${e}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Gn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Gn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Gn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Gn(this.root,t,this.comparator,!0)}}class Gn{constructor(t,e,i,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?i(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class pt{constructor(t,e,i,s,o){this.key=t,this.value=e,this.color=i??pt.RED,this.left=s??pt.EMPTY,this.right=o??pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,i,s,o){return new pt(t??this.key,e??this.value,i??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,i){let s=this;const o=i(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,i),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return pt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let i,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return pt.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const t=this.left.check();if(t!==this.right.check())throw G();return t+(this.isRed()?0:1)}}pt.EMPTY=null,pt.RED=!0,pt.BLACK=!1;pt.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(t,e,i,s,o){return this}insert(t,e,i){return new pt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t){this.comparator=t,this.data=new Mt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,i)=>(t(e),!1))}forEachInRange(t,e){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let i;for(i=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ws(this.data.getIterator())}getIteratorFrom(t){return new Ws(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(i=>{e=e.add(i)}),e}isEqual(t){if(!(t instanceof At)||this.size!==t.size)return!1;const e=this.data.getIterator(),i=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=i.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new At(this.comparator);return e.data=t,e}}class Ws{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(t){this.fields=t,t.sort(gt.comparator)}static empty(){return new Bt([])}unionWith(t){let e=new At(gt.comparator);for(const i of this.fields)e=e.add(i);for(const i of t)e=e.add(i);return new Bt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ke(this.fields,t.fields,(e,i)=>e.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new jc("Invalid base64 string: "+o):o}}(t);return new Kt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let l=0;l<s.length;++l)o+=String.fromCharCode(s[l]);return o}(t);return new Kt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const i=new Uint8Array(e.length);for(let s=0;s<e.length;s++)i[s]=e.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Z(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Kt.EMPTY_BYTE_STRING=new Kt("");const $c=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function we(n){if(ft(!!n),typeof n=="string"){let t=0;const e=$c.exec(n);if(ft(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:mt(n.seconds),nanos:mt(n.nanos)}}function mt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function _n(n){return typeof n=="string"?Kt.fromBase64String(n):Kt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function zo(n){const t=n.mapValue.fields.__previous_value__;return yi(t)?zo(t):t}function rr(n){const t=we(n.mapValue.fields.__local_write_time__.timestampValue);return new ht(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(t,e,i,s,o,l,c,f,p){this.databaseId=t,this.appId=e,this.persistenceKey=i,this.host=s,this.ssl=o,this.forceLongPolling=l,this.autoDetectLongPolling=c,this.longPollingOptions=f,this.useFetchStreams=p}}class ir{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new ir("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof ir&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Oe(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?yi(n)?4:Hc(n)?9007199254740991:10:G()}function $t(n,t){if(n===t)return!0;const e=Oe(n);if(e!==Oe(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return rr(n).isEqual(rr(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const l=we(s.timestampValue),c=we(o.timestampValue);return l.seconds===c.seconds&&l.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return _n(s.bytesValue).isEqual(_n(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return mt(s.geoPointValue.latitude)===mt(o.geoPointValue.latitude)&&mt(s.geoPointValue.longitude)===mt(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return mt(s.integerValue)===mt(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const l=mt(s.doubleValue),c=mt(o.doubleValue);return l===c?nr(l)===nr(c):isNaN(l)&&isNaN(c)}return!1}(n,t);case 9:return ke(n.arrayValue.values||[],t.arrayValue.values||[],$t);case 10:return function(s,o){const l=s.mapValue.fields||{},c=o.mapValue.fields||{};if(Qs(l)!==Qs(c))return!1;for(const f in l)if(l.hasOwnProperty(f)&&(c[f]===void 0||!$t(l[f],c[f])))return!1;return!0}(n,t);default:return G()}}function yn(n,t){return(n.values||[]).find(e=>$t(e,t))!==void 0}function Me(n,t){if(n===t)return 0;const e=Oe(n),i=Oe(t);if(e!==i)return Z(e,i);switch(e){case 0:case 9007199254740991:return 0;case 1:return Z(n.booleanValue,t.booleanValue);case 2:return function(o,l){const c=mt(o.integerValue||o.doubleValue),f=mt(l.integerValue||l.doubleValue);return c<f?-1:c>f?1:c===f?0:isNaN(c)?isNaN(f)?0:-1:1}(n,t);case 3:return Xs(n.timestampValue,t.timestampValue);case 4:return Xs(rr(n),rr(t));case 5:return Z(n.stringValue,t.stringValue);case 6:return function(o,l){const c=_n(o),f=_n(l);return c.compareTo(f)}(n.bytesValue,t.bytesValue);case 7:return function(o,l){const c=o.split("/"),f=l.split("/");for(let p=0;p<c.length&&p<f.length;p++){const y=Z(c[p],f[p]);if(y!==0)return y}return Z(c.length,f.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,l){const c=Z(mt(o.latitude),mt(l.latitude));return c!==0?c:Z(mt(o.longitude),mt(l.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(o,l){const c=o.values||[],f=l.values||[];for(let p=0;p<c.length&&p<f.length;++p){const y=Me(c[p],f[p]);if(y)return y}return Z(c.length,f.length)}(n.arrayValue,t.arrayValue);case 10:return function(o,l){if(o===Kn.mapValue&&l===Kn.mapValue)return 0;if(o===Kn.mapValue)return 1;if(l===Kn.mapValue)return-1;const c=o.fields||{},f=Object.keys(c),p=l.fields||{},y=Object.keys(p);f.sort(),y.sort();for(let w=0;w<f.length&&w<y.length;++w){const R=Z(f[w],y[w]);if(R!==0)return R;const P=Me(c[f[w]],p[y[w]]);if(P!==0)return P}return Z(f.length,y.length)}(n.mapValue,t.mapValue);default:throw G()}}function Xs(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return Z(n,t);const e=we(n),i=we(t),s=Z(e.seconds,i.seconds);return s!==0?s:Z(e.nanos,i.nanos)}function xe(n){return ai(n)}function ai(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const i=we(e);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return _n(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return H.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let i="[",s=!0;for(const o of e.values||[])s?s=!1:i+=",",i+=ai(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(e){const i=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const l of i)o?o=!1:s+=",",s+=`${l}:${ai(e.fields[l])}`;return s+"}"}(n.mapValue):G()}function li(n){return!!n&&"integerValue"in n}function vi(n){return!!n&&"arrayValue"in n}function Yn(n){return!!n&&"mapValue"in n}function un(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return wn(n.mapValue.fields,(e,i)=>t.mapValue.fields[e]=un(i)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=un(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Hc(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(t){this.value=t}static empty(){return new Ut({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let i=0;i<t.length-1;++i)if(e=(e.mapValue.fields||{})[t.get(i)],!Yn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=un(e)}setAll(t){let e=gt.emptyPath(),i={},s=[];t.forEach((l,c)=>{if(!e.isImmediateParentOf(c)){const f=this.getFieldsMap(e);this.applyChanges(f,i,s),i={},s=[],e=c.popLast()}l?i[c.lastSegment()]=un(l):s.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,i,s)}delete(t){const e=this.field(t.popLast());Yn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return $t(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let i=0;i<t.length;++i){let s=e.mapValue.fields[t.get(i)];Yn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(i)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,i){wn(e,(s,o)=>t[s]=o);for(const s of i)delete t[s]}clone(){return new Ut(un(this.value))}}function Ho(n){const t=[];return wn(n.fields,(e,i)=>{const s=new gt([e]);if(Yn(i)){const o=Ho(i.mapValue).fields;if(o.length===0)t.push(s);else for(const l of o)t.push(s.child(l))}else t.push(s)}),new Bt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(t,e,i,s,o,l,c){this.key=t,this.documentType=e,this.version=i,this.readTime=s,this.createTime=o,this.data=l,this.documentState=c}static newInvalidDocument(t){return new Lt(t,0,nt.min(),nt.min(),nt.min(),Ut.empty(),0)}static newFoundDocument(t,e,i,s){return new Lt(t,1,e,nt.min(),i,s,0)}static newNoDocument(t,e){return new Lt(t,2,e,nt.min(),nt.min(),Ut.empty(),0)}static newUnknownDocument(t,e){return new Lt(t,3,e,nt.min(),nt.min(),Ut.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(nt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ut.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=nt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Lt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Lt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(t,e){this.position=t,this.inclusive=e}}function Ys(n,t,e){let i=0;for(let s=0;s<n.position.length;s++){const o=t[s],l=n.position[s];if(o.field.isKeyField()?i=H.comparator(H.fromName(l.referenceValue),e.key):i=Me(l,e.data.field(o.field)),o.dir==="desc"&&(i*=-1),i!==0)break}return i}function Js(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!$t(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(t,e="asc"){this.field=t,this.dir=e}}function qc(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{}class ct extends qo{constructor(t,e,i){super(),this.field=t,this.op=e,this.value=i}static create(t,e,i){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,i):new Kc(t,e,i):e==="array-contains"?new Xc(t,i):e==="in"?new Yc(t,i):e==="not-in"?new Jc(t,i):e==="array-contains-any"?new Zc(t,i):new ct(t,e,i)}static createKeyFieldInFilter(t,e,i){return e==="in"?new Qc(t,i):new Wc(t,i)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Me(e,this.value)):e!==null&&Oe(this.value)===Oe(e)&&this.matchesComparison(Me(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class se extends qo{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new se(t,e)}matches(t){return Go(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Go(n){return n.op==="and"}function Ko(n){return Gc(n)&&Go(n)}function Gc(n){for(const t of n.filters)if(t instanceof se)return!1;return!0}function ui(n){if(n instanceof ct)return n.field.canonicalString()+n.op.toString()+xe(n.value);if(Ko(n))return n.filters.map(t=>ui(t)).join(",");{const t=n.filters.map(e=>ui(e)).join(",");return`${n.op}(${t})`}}function Qo(n,t){return n instanceof ct?function(i,s){return s instanceof ct&&i.op===s.op&&i.field.isEqual(s.field)&&$t(i.value,s.value)}(n,t):n instanceof se?function(i,s){return s instanceof se&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((o,l,c)=>o&&Qo(l,s.filters[c]),!0):!1}(n,t):void G()}function Wo(n){return n instanceof ct?function(e){return`${e.field.canonicalString()} ${e.op} ${xe(e.value)}`}(n):n instanceof se?function(e){return e.op.toString()+" {"+e.getFilters().map(Wo).join(" ,")+"}"}(n):"Filter"}class Kc extends ct{constructor(t,e,i){super(t,e,i),this.key=H.fromName(i.referenceValue)}matches(t){const e=H.comparator(t.key,this.key);return this.matchesComparison(e)}}class Qc extends ct{constructor(t,e){super(t,"in",e),this.keys=Xo("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Wc extends ct{constructor(t,e){super(t,"not-in",e),this.keys=Xo("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Xo(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(i=>H.fromName(i.referenceValue))}class Xc extends ct{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return vi(e)&&yn(e.arrayValue,this.value)}}class Yc extends ct{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&yn(this.value.arrayValue,e)}}class Jc extends ct{constructor(t,e){super(t,"not-in",e)}matches(t){if(yn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!yn(this.value.arrayValue,e)}}class Zc extends ct{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!vi(e)||!e.arrayValue.values)&&e.arrayValue.values.some(i=>yn(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(t,e=null,i=[],s=[],o=null,l=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=i,this.filters=s,this.limit=o,this.startAt=l,this.endAt=c,this.ue=null}}function Zs(n,t=null,e=[],i=[],s=null,o=null,l=null){return new th(n,t,e,i,s,o,l)}function Ei(n){const t=et(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(i=>ui(i)).join(","),e+="|ob:",e+=t.orderBy.map(i=>function(o){return o.field.canonicalString()+o.dir}(i)).join(","),_i(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(i=>xe(i)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(i=>xe(i)).join(",")),t.ue=e}return t.ue}function Ti(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!qc(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Qo(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Js(n.startAt,t.startAt)&&Js(n.endAt,t.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(t,e=null,i=[],s=[],o=null,l="F",c=null,f=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=i,this.filters=s,this.limit=o,this.limitType=l,this.startAt=c,this.endAt=f,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function eh(n,t,e,i,s,o,l,c){return new hr(n,t,e,i,s,o,l,c)}function nh(n){return new hr(n)}function to(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function rh(n){return n.collectionGroup!==null}function cn(n){const t=et(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(l){let c=new At(gt.comparator);return l.filters.forEach(f=>{f.getFlattenedFilters().forEach(p=>{p.isInequality()&&(c=c.add(p.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new or(o,i))}),e.has(gt.keyField().canonicalString())||t.ce.push(new or(gt.keyField(),i))}return t.ce}function ye(n){const t=et(n);return t.le||(t.le=ih(t,cn(n))),t.le}function ih(n,t){if(n.limitType==="F")return Zs(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new or(s.field,o)});const e=n.endAt?new sr(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new sr(n.startAt.position,n.startAt.inclusive):null;return Zs(n.path,n.collectionGroup,t,n.filters,n.limit,e,i)}}function ci(n,t,e){return new hr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Yo(n,t){return Ti(ye(n),ye(t))&&n.limitType===t.limitType}function Jo(n){return`${Ei(ye(n))}|lt:${n.limitType}`}function on(n){return`Query(target=${function(e){let i=e.path.canonicalString();return e.collectionGroup!==null&&(i+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(i+=`, filters: [${e.filters.map(s=>Wo(s)).join(", ")}]`),_i(e.limit)||(i+=", limit: "+e.limit),e.orderBy.length>0&&(i+=`, orderBy: [${e.orderBy.map(s=>function(l){return`${l.field.canonicalString()} (${l.dir})`}(s)).join(", ")}]`),e.startAt&&(i+=", startAt: ",i+=e.startAt.inclusive?"b:":"a:",i+=e.startAt.position.map(s=>xe(s)).join(",")),e.endAt&&(i+=", endAt: ",i+=e.endAt.inclusive?"a:":"b:",i+=e.endAt.position.map(s=>xe(s)).join(",")),`Target(${i})`}(ye(n))}; limitType=${n.limitType})`}function Ii(n,t){return t.isFoundDocument()&&function(i,s){const o=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(o):H.isDocumentKey(i.path)?i.path.isEqual(o):i.path.isImmediateParentOf(o)}(n,t)&&function(i,s){for(const o of cn(i))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(i,s){for(const o of i.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(i,s){return!(i.startAt&&!function(l,c,f){const p=Ys(l,c,f);return l.inclusive?p<=0:p<0}(i.startAt,cn(i),s)||i.endAt&&!function(l,c,f){const p=Ys(l,c,f);return l.inclusive?p>=0:p>0}(i.endAt,cn(i),s))}(n,t)}function sh(n){return(t,e)=>{let i=!1;for(const s of cn(n)){const o=oh(s,t,e);if(o!==0)return o;i=i||s.field.isKeyField()}return 0}}function oh(n,t,e){const i=n.field.isKeyField()?H.comparator(t.key,e.key):function(o,l,c){const f=l.data.field(o),p=c.data.field(o);return f!==null&&p!==null?Me(f,p):G()}(n.field,t,e);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return G()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i!==void 0){for(const[s,o]of i)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const i=this.mapKeyFn(t),s=this.inner[i];if(s===void 0)return this.inner[i]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return i.length===1?delete this.inner[e]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(t){wn(this.inner,(e,i)=>{for(const[s,o]of i)t(s,o)})}isEmpty(){return $o(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah=new Mt(H.comparator);function ar(){return ah}const Zo=new Mt(H.comparator);function Qn(...n){let t=Zo;for(const e of n)t=t.insert(e.key,e);return t}function ta(n){let t=Zo;return n.forEach((e,i)=>t=t.insert(e,i.overlayedDocument)),t}function ge(){return hn()}function ea(){return hn()}function hn(){return new Be(n=>n.toString(),(n,t)=>n.isEqual(t))}const lh=new Mt(H.comparator),uh=new At(H.comparator);function wt(...n){let t=uh;for(const e of n)t=t.add(e);return t}const ch=new At(Z);function hh(){return ch}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:nr(t)?"-0":t}}function ra(n){return{integerValue:""+n}}function fh(n,t){return Bc(t)?ra(t):na(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(){this._=void 0}}function dh(n,t,e){return n instanceof vn?function(s,o){const l={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&yi(o)&&(o=zo(o)),o&&(l.fields.__previous_value__=o),{mapValue:l}}(e,t):n instanceof En?sa(n,t):n instanceof Tn?oa(n,t):function(s,o){const l=ia(s,o),c=eo(l)+eo(s.Pe);return li(l)&&li(s.Pe)?ra(c):na(s.serializer,c)}(n,t)}function ph(n,t,e){return n instanceof En?sa(n,t):n instanceof Tn?oa(n,t):e}function ia(n,t){return n instanceof lr?function(i){return li(i)||function(o){return!!o&&"doubleValue"in o}(i)}(t)?t:{integerValue:0}:null}class vn extends fr{}class En extends fr{constructor(t){super(),this.elements=t}}function sa(n,t){const e=aa(t);for(const i of n.elements)e.some(s=>$t(s,i))||e.push(i);return{arrayValue:{values:e}}}class Tn extends fr{constructor(t){super(),this.elements=t}}function oa(n,t){let e=aa(t);for(const i of n.elements)e=e.filter(s=>!$t(s,i));return{arrayValue:{values:e}}}class lr extends fr{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function eo(n){return mt(n.integerValue||n.doubleValue)}function aa(n){return vi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(t,e){this.field=t,this.transform=e}}function gh(n,t){return n.field.isEqual(t.field)&&function(i,s){return i instanceof En&&s instanceof En||i instanceof Tn&&s instanceof Tn?ke(i.elements,s.elements,$t):i instanceof lr&&s instanceof lr?$t(i.Pe,s.Pe):i instanceof vn&&s instanceof vn}(n.transform,t.transform)}class _h{constructor(t,e){this.version=t,this.transformResults=e}}class qt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new qt}static exists(t){return new qt(void 0,t)}static updateTime(t){return new qt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Jn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class dr{}function la(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new ca(n.key,qt.none()):new An(n.key,n.data,qt.none());{const e=n.data,i=Ut.empty();let s=new At(gt.comparator);for(let o of t.fields)if(!s.has(o)){let l=e.field(o);l===null&&o.length>1&&(o=o.popLast(),l=e.field(o)),l===null?i.delete(o):i.set(o,l),s=s.add(o)}return new Ae(n.key,i,new Bt(s.toArray()),qt.none())}}function yh(n,t,e){n instanceof An?function(s,o,l){const c=s.value.clone(),f=ro(s.fieldTransforms,o,l.transformResults);c.setAll(f),o.convertToFoundDocument(l.version,c).setHasCommittedMutations()}(n,t,e):n instanceof Ae?function(s,o,l){if(!Jn(s.precondition,o))return void o.convertToUnknownDocument(l.version);const c=ro(s.fieldTransforms,o,l.transformResults),f=o.data;f.setAll(ua(s)),f.setAll(c),o.convertToFoundDocument(l.version,f).setHasCommittedMutations()}(n,t,e):function(s,o,l){o.convertToNoDocument(l.version).setHasCommittedMutations()}(0,t,e)}function fn(n,t,e,i){return n instanceof An?function(o,l,c,f){if(!Jn(o.precondition,l))return c;const p=o.value.clone(),y=io(o.fieldTransforms,f,l);return p.setAll(y),l.convertToFoundDocument(l.version,p).setHasLocalMutations(),null}(n,t,e,i):n instanceof Ae?function(o,l,c,f){if(!Jn(o.precondition,l))return c;const p=io(o.fieldTransforms,f,l),y=l.data;return y.setAll(ua(o)),y.setAll(p),l.convertToFoundDocument(l.version,y).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(w=>w.field))}(n,t,e,i):function(o,l,c){return Jn(o.precondition,l)?(l.convertToNoDocument(l.version).setHasLocalMutations(),null):c}(n,t,e)}function vh(n,t){let e=null;for(const i of n.fieldTransforms){const s=t.data.field(i.field),o=ia(i.transform,s||null);o!=null&&(e===null&&(e=Ut.empty()),e.set(i.field,o))}return e||null}function no(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&ke(i,s,(o,l)=>gh(o,l))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class An extends dr{constructor(t,e,i,s=[]){super(),this.key=t,this.value=e,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ae extends dr{constructor(t,e,i,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=i,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function ua(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const i=n.data.field(e);t.set(e,i)}}),t}function ro(n,t,e){const i=new Map;ft(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],l=o.transform,c=t.data.field(o.field);i.set(o.field,ph(l,c,e[s]))}return i}function io(n,t,e){const i=new Map;for(const s of n){const o=s.transform,l=e.data.field(s.field);i.set(s.field,dh(o,l,t))}return i}class ca extends dr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Eh extends dr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(t,e,i,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(t,e){const i=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&yh(o,t,i[s])}}applyToLocalView(t,e){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(e=fn(i,t,e,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(e=fn(i,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const i=ea();return this.mutations.forEach(s=>{const o=t.get(s.key),l=o.overlayedDocument;let c=this.applyToLocalView(l,o.mutatedFields);c=e.has(s.key)?null:c;const f=la(l,c);f!==null&&i.set(s.key,f),l.isValidDocument()||l.convertToNoDocument(nt.min())}),i}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),wt())}isEqual(t){return this.batchId===t.batchId&&ke(this.mutations,t.mutations,(e,i)=>no(e,i))&&ke(this.baseMutations,t.baseMutations,(e,i)=>no(e,i))}}class wi{constructor(t,e,i,s){this.batch=t,this.commitVersion=e,this.mutationResults=i,this.docVersions=s}static from(t,e,i){ft(t.mutations.length===i.length);let s=function(){return lh}();const o=t.mutations;for(let l=0;l<o.length;l++)s=s.insert(o[l].key,i[l].version);return new wi(t,e,i,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var st,K;function wh(n){switch(n){default:return G();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function Ah(n){if(n===void 0)return Ie("GRPC error has no .code"),b.UNKNOWN;switch(n){case st.OK:return b.OK;case st.CANCELLED:return b.CANCELLED;case st.UNKNOWN:return b.UNKNOWN;case st.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case st.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case st.INTERNAL:return b.INTERNAL;case st.UNAVAILABLE:return b.UNAVAILABLE;case st.UNAUTHENTICATED:return b.UNAUTHENTICATED;case st.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case st.NOT_FOUND:return b.NOT_FOUND;case st.ALREADY_EXISTS:return b.ALREADY_EXISTS;case st.PERMISSION_DENIED:return b.PERMISSION_DENIED;case st.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case st.ABORTED:return b.ABORTED;case st.OUT_OF_RANGE:return b.OUT_OF_RANGE;case st.UNIMPLEMENTED:return b.UNIMPLEMENTED;case st.DATA_LOSS:return b.DATA_LOSS;default:return G()}}(K=st||(st={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Do([4294967295,4294967295],0);class Rh{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function hi(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ph(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Sh(n,t){return hi(n,t.toTimestamp())}function Ne(n){return ft(!!n),nt.fromTimestamp(function(e){const i=we(e);return new ht(i.seconds,i.nanos)}(n))}function ha(n,t){return fi(n,t).canonicalString()}function fi(n,t){const e=function(s){return new it(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Ch(n){const t=it.fromString(n);return ft(xh(t)),t}function di(n,t){return ha(n.databaseId,t.path)}function bh(n){const t=Ch(n);return t.length===4?it.emptyPath():Dh(t)}function Vh(n){return new it(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Dh(n){return ft(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function so(n,t,e){return{name:di(n,t),fields:e.value.mapValue.fields}}function Nh(n,t){let e;if(t instanceof An)e={update:so(n,t.key,t.value)};else if(t instanceof ca)e={delete:di(n,t.key)};else if(t instanceof Ae)e={update:so(n,t.key,t.data),updateMask:Mh(t.fieldMask)};else{if(!(t instanceof Eh))return G();e={verify:di(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(i=>function(o,l){const c=l.transform;if(c instanceof vn)return{fieldPath:l.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof En)return{fieldPath:l.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Tn)return{fieldPath:l.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof lr)return{fieldPath:l.field.canonicalString(),increment:c.Pe};throw G()}(0,i))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:Sh(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:G()}(n,t.precondition)),e}function kh(n,t){return n&&n.length>0?(ft(t!==void 0),n.map(e=>function(s,o){let l=s.updateTime?Ne(s.updateTime):Ne(o);return l.isEqual(nt.min())&&(l=Ne(o)),new _h(l,s.transformResults||[])}(e,t))):[]}function Oh(n){let t=bh(n.parent);const e=n.structuredQuery,i=e.from?e.from.length:0;let s=null;if(i>0){ft(i===1);const y=e.from[0];y.allDescendants?s=y.collectionId:t=t.child(y.collectionId)}let o=[];e.where&&(o=function(w){const R=fa(w);return R instanceof se&&Ko(R)?R.getFilters():[R]}(e.where));let l=[];e.orderBy&&(l=function(w){return w.map(R=>function(V){return new or(be(V.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(R))}(e.orderBy));let c=null;e.limit&&(c=function(w){let R;return R=typeof w=="object"?w.value:w,_i(R)?null:R}(e.limit));let f=null;e.startAt&&(f=function(w){const R=!!w.before,P=w.values||[];return new sr(P,R)}(e.startAt));let p=null;return e.endAt&&(p=function(w){const R=!w.before,P=w.values||[];return new sr(P,R)}(e.endAt)),eh(t,s,l,o,c,"F",f,p)}function fa(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const i=be(e.unaryFilter.field);return ct.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=be(e.unaryFilter.field);return ct.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=be(e.unaryFilter.field);return ct.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const l=be(e.unaryFilter.field);return ct.create(l,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(n):n.fieldFilter!==void 0?function(e){return ct.create(be(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return se.create(e.compositeFilter.filters.map(i=>fa(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return G()}}(e.compositeFilter.op))}(n):G()}function be(n){return gt.fromServerFormat(n.fieldPath)}function Mh(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function xh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(t){this.ct=t}}function Lh(n){const t=Oh({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ci(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(){this._n=new Bh}addToCollectionParentIndex(t,e){return this._n.add(e),C.resolve()}getCollectionParents(t,e){return C.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return C.resolve()}deleteFieldIndex(t,e){return C.resolve()}deleteAllFieldIndexes(t){return C.resolve()}createTargetIndexes(t,e){return C.resolve()}getDocumentsMatchingTarget(t,e){return C.resolve(null)}getIndexType(t,e){return C.resolve(0)}getFieldIndexes(t,e){return C.resolve([])}getNextCollectionGroupToUpdate(t){return C.resolve(null)}getMinOffset(t,e){return C.resolve(ie.min())}getMinOffsetFromCollectionGroup(t,e){return C.resolve(ie.min())}updateCollectionGroup(t,e,i){return C.resolve()}updateIndexEntries(t,e){return C.resolve()}}class Bh{constructor(){this.index={}}add(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e]||new At(it.comparator),o=!s.has(i);return this.index[e]=s.add(i),o}has(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e];return s&&s.has(i)}getEntries(t){return(this.index[t]||new At(it.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Fe(0)}static Ln(){return new Fe(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(){this.changes=new Be(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Lt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const i=this.changes.get(e);return i!==void 0?C.resolve(i):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(t,e,i,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=i,this.indexManager=s}getDocument(t,e){let i=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(i=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(i!==null&&fn(i.mutation,s,Bt.empty(),ht.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.getLocalViewOfDocuments(t,i,wt()).next(()=>i))}getLocalViewOfDocuments(t,e,i=wt()){const s=ge();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,i).next(o=>{let l=Qn();return o.forEach((c,f)=>{l=l.insert(c,f.overlayedDocument)}),l}))}getOverlayedDocuments(t,e){const i=ge();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,wt()))}populateOverlays(t,e,i){const s=[];return i.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((l,c)=>{e.set(l,c)})})}computeViews(t,e,i,s){let o=ar();const l=hn(),c=function(){return hn()}();return e.forEach((f,p)=>{const y=i.get(p.key);s.has(p.key)&&(y===void 0||y.mutation instanceof Ae)?o=o.insert(p.key,p):y!==void 0?(l.set(p.key,y.mutation.getFieldMask()),fn(y.mutation,p,y.mutation.getFieldMask(),ht.now())):l.set(p.key,Bt.empty())}),this.recalculateAndSaveOverlays(t,o).next(f=>(f.forEach((p,y)=>l.set(p,y)),e.forEach((p,y)=>{var w;return c.set(p,new $h(y,(w=l.get(p))!==null&&w!==void 0?w:null))}),c))}recalculateAndSaveOverlays(t,e){const i=hn();let s=new Mt((l,c)=>l-c),o=wt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(l=>{for(const c of l)c.keys().forEach(f=>{const p=e.get(f);if(p===null)return;let y=i.get(f)||Bt.empty();y=c.applyToLocalView(p,y),i.set(f,y);const w=(s.get(c.batchId)||wt()).add(f);s=s.insert(c.batchId,w)})}).next(()=>{const l=[],c=s.getReverseIterator();for(;c.hasNext();){const f=c.getNext(),p=f.key,y=f.value,w=ea();y.forEach(R=>{if(!o.has(R)){const P=la(e.get(R),i.get(R));P!==null&&w.set(R,P),o=o.add(R)}}),l.push(this.documentOverlayCache.saveOverlays(t,p,w))}return C.waitFor(l)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.recalculateAndSaveOverlays(t,i))}getDocumentsMatchingQuery(t,e,i,s){return function(l){return H.isDocumentKey(l.path)&&l.collectionGroup===null&&l.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):rh(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,i,s):this.getDocumentsMatchingCollectionQuery(t,e,i,s)}getNextDocuments(t,e,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,i,s).next(o=>{const l=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,i.largestBatchId,s-o.size):C.resolve(ge());let c=-1,f=o;return l.next(p=>C.forEach(p,(y,w)=>(c<w.largestBatchId&&(c=w.largestBatchId),o.get(y)?C.resolve():this.remoteDocumentCache.getEntry(t,y).next(R=>{f=f.insert(y,R)}))).next(()=>this.populateOverlays(t,p,o)).next(()=>this.computeViews(t,f,p,wt())).next(y=>({batchId:c,changes:ta(y)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new H(e)).next(i=>{let s=Qn();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,i,s){const o=e.collectionGroup;let l=Qn();return this.indexManager.getCollectionParents(t,o).next(c=>C.forEach(c,f=>{const p=function(w,R){return new hr(R,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(e,f.child(o));return this.getDocumentsMatchingCollectionQuery(t,p,i,s).next(y=>{y.forEach((w,R)=>{l=l.insert(w,R)})})}).next(()=>l))}getDocumentsMatchingCollectionQuery(t,e,i,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,i.largestBatchId).next(l=>(o=l,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,i,o,s))).next(l=>{o.forEach((f,p)=>{const y=p.getKey();l.get(y)===null&&(l=l.insert(y,Lt.newInvalidDocument(y)))});let c=Qn();return l.forEach((f,p)=>{const y=o.get(f);y!==void 0&&fn(y.mutation,p,Bt.empty(),ht.now()),Ii(e,p)&&(c=c.insert(f,p))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return C.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Ne(s.createTime)}}(e)),C.resolve()}getNamedQuery(t,e){return C.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(s){return{name:s.name,query:Lh(s.bundledQuery),readTime:Ne(s.readTime)}}(e)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(){this.overlays=new Mt(H.comparator),this.hr=new Map}getOverlay(t,e){return C.resolve(this.overlays.get(e))}getOverlays(t,e){const i=ge();return C.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&i.set(s,o)})).next(()=>i)}saveOverlays(t,e,i){return i.forEach((s,o)=>{this.ht(t,e,o)}),C.resolve()}removeOverlaysForBatchId(t,e,i){const s=this.hr.get(i);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.hr.delete(i)),C.resolve()}getOverlaysForCollection(t,e,i){const s=ge(),o=e.length+1,l=new H(e.child("")),c=this.overlays.getIteratorFrom(l);for(;c.hasNext();){const f=c.getNext().value,p=f.getKey();if(!e.isPrefixOf(p.path))break;p.path.length===o&&f.largestBatchId>i&&s.set(f.getKey(),f)}return C.resolve(s)}getOverlaysForCollectionGroup(t,e,i,s){let o=new Mt((p,y)=>p-y);const l=this.overlays.getIterator();for(;l.hasNext();){const p=l.getNext().value;if(p.getKey().getCollectionGroup()===e&&p.largestBatchId>i){let y=o.get(p.largestBatchId);y===null&&(y=ge(),o=o.insert(p.largestBatchId,y)),y.set(p.getKey(),p)}}const c=ge(),f=o.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((p,y)=>c.set(p,y)),!(c.size()>=s)););return C.resolve(c)}ht(t,e,i){const s=this.overlays.get(i.key);if(s!==null){const l=this.hr.get(s.largestBatchId).delete(i.key);this.hr.set(s.largestBatchId,l)}this.overlays=this.overlays.insert(i.key,new Ih(e,i));let o=this.hr.get(e);o===void 0&&(o=wt(),this.hr.set(e,o)),this.hr.set(e,o.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(){this.Pr=new At(ut.Ir),this.Tr=new At(ut.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const i=new ut(t,e);this.Pr=this.Pr.add(i),this.Tr=this.Tr.add(i)}dr(t,e){t.forEach(i=>this.addReference(i,e))}removeReference(t,e){this.Ar(new ut(t,e))}Rr(t,e){t.forEach(i=>this.removeReference(i,e))}Vr(t){const e=new H(new it([])),i=new ut(e,t),s=new ut(e,t+1),o=[];return this.Tr.forEachInRange([i,s],l=>{this.Ar(l),o.push(l.key)}),o}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new H(new it([])),i=new ut(e,t),s=new ut(e,t+1);let o=wt();return this.Tr.forEachInRange([i,s],l=>{o=o.add(l.key)}),o}containsKey(t){const e=new ut(t,0),i=this.Pr.firstAfterOrEqual(e);return i!==null&&t.isEqual(i.key)}}class ut{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return H.comparator(t.key,e.key)||Z(t.pr,e.pr)}static Er(t,e){return Z(t.pr,e.pr)||H.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new At(ut.Ir)}checkEmpty(t){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,i,s){const o=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const l=new Th(o,e,i,s);this.mutationQueue.push(l);for(const c of s)this.wr=this.wr.add(new ut(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return C.resolve(l)}lookupMutationBatch(t,e){return C.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const i=e+1,s=this.br(i),o=s<0?0:s;return C.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const i=new ut(e,0),s=new ut(e,Number.POSITIVE_INFINITY),o=[];return this.wr.forEachInRange([i,s],l=>{const c=this.Sr(l.pr);o.push(c)}),C.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let i=new At(Z);return e.forEach(s=>{const o=new ut(s,0),l=new ut(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([o,l],c=>{i=i.add(c.pr)})}),C.resolve(this.Dr(i))}getAllMutationBatchesAffectingQuery(t,e){const i=e.path,s=i.length+1;let o=i;H.isDocumentKey(o)||(o=o.child(""));const l=new ut(new H(o),0);let c=new At(Z);return this.wr.forEachWhile(f=>{const p=f.key.path;return!!i.isPrefixOf(p)&&(p.length===s&&(c=c.add(f.pr)),!0)},l),C.resolve(this.Dr(c))}Dr(t){const e=[];return t.forEach(i=>{const s=this.Sr(i);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){ft(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let i=this.wr;return C.forEach(e.mutations,s=>{const o=new ut(s.key,e.batchId);return i=i.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=i})}Mn(t){}containsKey(t,e){const i=new ut(e,0),s=this.wr.firstAfterOrEqual(i);return C.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,C.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(t){this.vr=t,this.docs=function(){return new Mt(H.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const i=e.key,s=this.docs.get(i),o=s?s.size:0,l=this.vr(e);return this.docs=this.docs.insert(i,{document:e.mutableCopy(),size:l}),this.size+=l-o,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const i=this.docs.get(e);return C.resolve(i?i.document.mutableCopy():Lt.newInvalidDocument(e))}getEntries(t,e){let i=ar();return e.forEach(s=>{const o=this.docs.get(s);i=i.insert(s,o?o.document.mutableCopy():Lt.newInvalidDocument(s))}),C.resolve(i)}getDocumentsMatchingQuery(t,e,i,s){let o=ar();const l=e.path,c=new H(l.child("")),f=this.docs.getIteratorFrom(c);for(;f.hasNext();){const{key:p,value:{document:y}}=f.getNext();if(!l.isPrefixOf(p.path))break;p.path.length>l.length+1||xc(Mc(y),i)<=0||(s.has(y.key)||Ii(e,y))&&(o=o.insert(y.key,y.mutableCopy()))}return C.resolve(o)}getAllFromCollectionGroup(t,e,i,s){G()}Fr(t,e){return C.forEach(this.docs,i=>e(i))}newChangeBuffer(t){return new Qh(this)}getSize(t){return C.resolve(this.size)}}class Qh extends jh{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?e.push(this.ar.addEntry(t,s)):this.ar.removeEntry(i)}),C.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(t){this.persistence=t,this.Mr=new Be(e=>Ei(e),Ti),this.lastRemoteSnapshotVersion=nt.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Ai,this.targetCount=0,this.Lr=Fe.Nn()}forEachTarget(t,e){return this.Mr.forEach((i,s)=>e(s)),C.resolve()}getLastRemoteSnapshotVersion(t){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return C.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(t,e,i){return i&&(this.lastRemoteSnapshotVersion=i),e>this.Or&&(this.Or=e),C.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Lr=new Fe(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,C.resolve()}updateTargetData(t,e){return this.qn(e),C.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,C.resolve()}removeTargets(t,e,i){let s=0;const o=[];return this.Mr.forEach((l,c)=>{c.sequenceNumber<=e&&i.get(c.targetId)===null&&(this.Mr.delete(l),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),C.waitFor(o).next(()=>s)}getTargetCount(t){return C.resolve(this.targetCount)}getTargetData(t,e){const i=this.Mr.get(e)||null;return C.resolve(i)}addMatchingKeys(t,e,i){return this.Nr.dr(e,i),C.resolve()}removeMatchingKeys(t,e,i){this.Nr.Rr(e,i);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(l=>{o.push(s.markPotentiallyOrphaned(t,l))}),C.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),C.resolve()}getMatchingKeysForTargetId(t,e){const i=this.Nr.gr(e);return C.resolve(i)}containsKey(t,e){return C.resolve(this.Nr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(t,e){this.Br={},this.overlays={},this.kr=new jo(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new Wh(this),this.indexManager=new Uh,this.remoteDocumentCache=function(s){return new Kh(s)}(i=>this.referenceDelegate.Kr(i)),this.serializer=new Fh(e),this.$r=new Hh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new qh,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let i=this.Br[t.toKey()];return i||(i=new Gh(e,this.referenceDelegate),this.Br[t.toKey()]=i),i}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,i){x("MemoryPersistence","Starting transaction:",t);const s=new Yh(this.kr.next());return this.referenceDelegate.Ur(),i(s).next(o=>this.referenceDelegate.Wr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Gr(t,e){return C.or(Object.values(this.Br).map(i=>()=>i.containsKey(t,e)))}}class Yh extends Lc{constructor(t){super(),this.currentSequenceNumber=t}}class Ri{constructor(t){this.persistence=t,this.zr=new Ai,this.jr=null}static Hr(t){return new Ri(t)}get Jr(){if(this.jr)return this.jr;throw G()}addReference(t,e,i){return this.zr.addReference(i,e),this.Jr.delete(i.toString()),C.resolve()}removeReference(t,e,i){return this.zr.removeReference(i,e),this.Jr.add(i.toString()),C.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),C.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(s=>this.Jr.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.Jr.add(o.toString()))}).next(()=>i.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Jr,i=>{const s=H.fromPath(i);return this.Yr(t,s).next(o=>{o||e.removeEntry(s,nt.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(i=>{i?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return C.or([()=>C.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(t,e,i,s){this.targetId=t,this.fromCache=e,this.qi=i,this.Qi=s}static Ki(t,e){let i=wt(),s=wt();for(const o of e.docChanges)switch(o.type){case 0:i=i.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Pi(t,e.fromCache,i,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return lu()?8:Uc(ou())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,i,s){const o={result:null};return this.ji(t,e).next(l=>{o.result=l}).next(()=>{if(!o.result)return this.Hi(t,e,s,i).next(l=>{o.result=l})}).next(()=>{if(o.result)return;const l=new Jh;return this.Ji(t,e,l).next(c=>{if(o.result=c,this.Ui)return this.Yi(t,e,l,c.size)})}).next(()=>o.result)}Yi(t,e,i,s){return i.documentReadCount<this.Wi?(sn()<=Q.DEBUG&&x("QueryEngine","SDK will not create cache indexes for query:",on(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),C.resolve()):(sn()<=Q.DEBUG&&x("QueryEngine","Query:",on(e),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.Gi*s?(sn()<=Q.DEBUG&&x("QueryEngine","The SDK decides to create cache indexes for query:",on(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ye(e))):C.resolve())}ji(t,e){if(to(e))return C.resolve(null);let i=ye(e);return this.indexManager.getIndexType(t,i).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=ci(e,null,"F"),i=ye(e)),this.indexManager.getDocumentsMatchingTarget(t,i).next(o=>{const l=wt(...o);return this.zi.getDocuments(t,l).next(c=>this.indexManager.getMinOffset(t,i).next(f=>{const p=this.Zi(e,c);return this.Xi(e,p,l,f.readTime)?this.ji(t,ci(e,null,"F")):this.es(t,p,e,f)}))})))}Hi(t,e,i,s){return to(e)||s.isEqual(nt.min())?C.resolve(null):this.zi.getDocuments(t,i).next(o=>{const l=this.Zi(e,o);return this.Xi(e,l,i,s)?C.resolve(null):(sn()<=Q.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),on(e)),this.es(t,l,e,Oc(s,-1)).next(c=>c))})}Zi(t,e){let i=new At(sh(t));return e.forEach((s,o)=>{Ii(t,o)&&(i=i.add(o))}),i}Xi(t,e,i,s){if(t.limit===null)return!1;if(i.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Ji(t,e,i){return sn()<=Q.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",on(e)),this.zi.getDocumentsMatchingQuery(t,e,ie.min(),i)}es(t,e,i,s){return this.zi.getDocumentsMatchingQuery(t,i,s).next(o=>(e.forEach(l=>{o=o.insert(l.key,l)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(t,e,i,s){this.persistence=t,this.ts=e,this.serializer=s,this.ns=new Mt(Z),this.rs=new Be(o=>Ei(o),Ti),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(i)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new zh(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function ef(n,t,e,i){return new tf(n,t,e,i)}async function da(n,t){const e=et(n);return await e.persistence.runTransaction("Handle user change","readonly",i=>{let s;return e.mutationQueue.getAllMutationBatches(i).next(o=>(s=o,e._s(t),e.mutationQueue.getAllMutationBatches(i))).next(o=>{const l=[],c=[];let f=wt();for(const p of s){l.push(p.batchId);for(const y of p.mutations)f=f.add(y.key)}for(const p of o){c.push(p.batchId);for(const y of p.mutations)f=f.add(y.key)}return e.localDocuments.getDocuments(i,f).next(p=>({us:p,removedBatchIds:l,addedBatchIds:c}))})})}function nf(n,t){const e=et(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=t.batch.keys(),o=e.os.newChangeBuffer({trackRemovals:!0});return function(c,f,p,y){const w=p.batch,R=w.keys();let P=C.resolve();return R.forEach(V=>{P=P.next(()=>y.getEntry(f,V)).next(k=>{const N=p.docVersions.get(V);ft(N!==null),k.version.compareTo(N)<0&&(w.applyToRemoteDocument(k,p),k.isValidDocument()&&(k.setReadTime(p.commitVersion),y.addEntry(k)))})}),P.next(()=>c.mutationQueue.removeMutationBatch(f,w))}(e,i,t,o).next(()=>o.apply(i)).next(()=>e.mutationQueue.performConsistencyCheck(i)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(i,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(c){let f=wt();for(let p=0;p<c.mutationResults.length;++p)c.mutationResults[p].transformResults.length>0&&(f=f.add(c.batch.mutations[p].key));return f}(t))).next(()=>e.localDocuments.getDocuments(i,s))})}function rf(n){const t=et(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function sf(n,t){const e=et(n);return e.persistence.runTransaction("Get next mutation batch","readonly",i=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(i,t)))}class oo{constructor(){this.activeTargetIds=hh()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class of{constructor(){this.no=new oo,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,i){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,i){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new oo,Promise.resolve()}handleUserChange(t,e,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{io(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){x("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){x("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wn=null;function Qr(){return Wn===null?Wn=function(){return 268435456+Math.round(2147483648*Math.random())}():Wn++,"0x"+Wn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}Ao(t){this.Ro=t}onMessage(t){this.Vo=t}close(){this.ho()}send(t){this.lo(t)}mo(){this.Io()}fo(){this.Eo()}po(t){this.Ro(t)}yo(t){this.Vo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt="WebChannelConnection";class cf extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const i=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.wo=i+"://"+e.host,this.So=`projects/${s}/databases/${o}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Do(){return!1}Co(e,i,s,o,l){const c=Qr(),f=this.vo(e,i.toUriEncodedString());x("RestConnection",`Sending RPC '${e}' ${c}:`,f,s);const p={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(p,o,l),this.Mo(e,f,p,s).then(y=>(x("RestConnection",`Received RPC '${e}' ${c}: `,y),y),y=>{throw er("RestConnection",`RPC '${e}' ${c} failed with error: `,y,"url: ",f,"request:",s),y})}xo(e,i,s,o,l,c){return this.Co(e,i,s,o,l)}Fo(e,i,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ue}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((o,l)=>e[l]=o),s&&s.headers.forEach((o,l)=>e[l]=o)}vo(e,i){const s=lf[e];return`${this.wo}/v1/${i}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Mo(t,e,i,s){const o=Qr();return new Promise((l,c)=>{const f=new No;f.setWithCredentials(!0),f.listenOnce(Oo.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case Xn.NO_ERROR:const y=f.getResponseJson();x(Tt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(y)),l(y);break;case Xn.TIMEOUT:x(Tt,`RPC '${t}' ${o} timed out`),c(new j(b.DEADLINE_EXCEEDED,"Request time out"));break;case Xn.HTTP_ERROR:const w=f.getStatus();if(x(Tt,`RPC '${t}' ${o} failed with status:`,w,"response text:",f.getResponseText()),w>0){let R=f.getResponseJson();Array.isArray(R)&&(R=R[0]);const P=R==null?void 0:R.error;if(P&&P.status&&P.message){const V=function(N){const U=N.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(U)>=0?U:b.UNKNOWN}(P.status);c(new j(V,P.message))}else c(new j(b.UNKNOWN,"Server responded with status "+f.getStatus()))}else c(new j(b.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{x(Tt,`RPC '${t}' ${o} completed.`)}});const p=JSON.stringify(s);x(Tt,`RPC '${t}' ${o} sending request:`,s),f.send(e,"POST",p,i,15)})}Oo(t,e,i){const s=Qr(),o=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],l=Fo(),c=xo(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(f.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(f.xmlHttpFactory=new ko({})),this.Fo(f.initMessageHeaders,e,i),f.encodeInitMessageHeaders=!0;const y=o.join("");x(Tt,`Creating RPC '${t}' stream ${s}: ${y}`,f);const w=l.createWebChannel(y,f);let R=!1,P=!1;const V=new uf({lo:N=>{P?x(Tt,`Not sending because RPC '${t}' stream ${s} is closed:`,N):(R||(x(Tt,`Opening RPC '${t}' stream ${s} transport.`),w.open(),R=!0),x(Tt,`RPC '${t}' stream ${s} sending:`,N),w.send(N))},ho:()=>w.close()}),k=(N,U,O)=>{N.listen(U,S=>{try{O(S)}catch(M){setTimeout(()=>{throw M},0)}})};return k(w,an.EventType.OPEN,()=>{P||(x(Tt,`RPC '${t}' stream ${s} transport opened.`),V.mo())}),k(w,an.EventType.CLOSE,()=>{P||(P=!0,x(Tt,`RPC '${t}' stream ${s} transport closed`),V.po())}),k(w,an.EventType.ERROR,N=>{P||(P=!0,er(Tt,`RPC '${t}' stream ${s} transport errored:`,N),V.po(new j(b.UNAVAILABLE,"The operation could not be completed")))}),k(w,an.EventType.MESSAGE,N=>{var U;if(!P){const O=N.data[0];ft(!!O);const S=O,M=S.error||((U=S[0])===null||U===void 0?void 0:U.error);if(M){x(Tt,`RPC '${t}' stream ${s} received error:`,M);const W=M.status;let Y=function(m){const _=st[m];if(_!==void 0)return Ah(_)}(W),v=M.message;Y===void 0&&(Y=b.INTERNAL,v="Unknown error status: "+W+" with message "+M.message),P=!0,V.po(new j(Y,v)),w.close()}else x(Tt,`RPC '${t}' stream ${s} received:`,O),V.yo(O)}}),k(c,Mo.STAT_EVENT,N=>{N.stat===oi.PROXY?x(Tt,`RPC '${t}' stream ${s} detected buffering proxy`):N.stat===oi.NOPROXY&&x(Tt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{V.fo()},0),V}}function Wr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(n){return new Rh(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(t,e,i=1e3,s=1.5,o=6e4){this.oi=t,this.timerId=e,this.No=i,this.Lo=s,this.Bo=o,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(t){this.cancel();const e=Math.floor(this.ko+this.Uo()),i=Math.max(0,Date.now()-this.Qo),s=Math.max(0,e-i);s>0&&x("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${e} ms, last attempt: ${i} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),t())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(t,e,i,s,o,l,c,f){this.oi=t,this.Go=i,this.zo=s,this.connection=o,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=c,this.listener=f,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new pa(t,e)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(t){this.s_(),this.stream.send(t)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(t,e){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,t!==4?this.Yo.reset():e&&e.code===b.RESOURCE_EXHAUSTED?(Ie(e.toString()),Ie("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):e&&e.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ao(e)}__(){}auth(){this.state=1;const t=this.a_(this.jo),e=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.jo===e&&this.u_(i,s)},i=>{t(()=>{const s=new j(b.UNKNOWN,"Fetching auth token failed: "+i.message);return this.c_(s)})})}u_(t,e){const i=this.a_(this.jo);this.stream=this.l_(t,e),this.stream.Po(()=>{i(()=>this.listener.Po())}),this.stream.To(()=>{i(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{i(()=>this.c_(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(t){return x("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}a_(t){return e=>{this.oi.enqueueAndForget(()=>this.jo===t?e():(x("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ff extends hf{constructor(t,e,i,s,o,l){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,i,s,l),this.serializer=o,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(t,e){return this.connection.Oo("Write",t,e)}onMessage(t){if(ft(!!t.streamToken),this.lastStreamToken=t.streamToken,this.T_){this.Yo.reset();const e=kh(t.writeResults,t.commitTime),i=Ne(t.commitTime);return this.listener.A_(i,e)}return ft(!t.writeResults||t.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const t={};t.database=Vh(this.serializer),this.i_(t)}d_(t){const e={streamToken:this.lastStreamToken,writes:t.map(i=>Nh(this.serializer,i))};this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df extends class{}{constructor(t,e,i,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=i,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new j(b.FAILED_PRECONDITION,"The client has already been terminated.")}Co(t,e,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Co(t,fi(e,i),s,o,l)).catch(o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new j(b.UNKNOWN,o.toString())})}xo(t,e,i,s,o){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.xo(t,fi(e,i),s,l,c,o)).catch(l=>{throw l.name==="FirebaseError"?(l.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new j(b.UNKNOWN,l.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class pf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(t){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.S_("Offline")))}set(t){this.C_(),this.g_=0,t==="Online"&&(this.y_=!1),this.S_(t)}S_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}b_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Ie(e),this.y_=!1):x("OnlineStateTracker",e)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(t,e,i,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=i,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=o,this.O_.io(l=>{i.enqueueAndForget(async()=>{Pn(this)&&(x("RemoteStore","Restarting streams for network reachability change."),await async function(f){const p=et(f);p.M_.add(4),await Rn(p),p.N_.set("Unknown"),p.M_.delete(4),await mr(p)}(this))})}),this.N_=new pf(i,s)}}async function mr(n){if(Pn(n))for(const t of n.x_)await t(!0)}async function Rn(n){for(const t of n.x_)await t(!1)}function Pn(n){return et(n).M_.size===0}async function ma(n,t,e){if(!cr(t))throw t;n.M_.add(1),await Rn(n),n.N_.set("Offline"),e||(e=()=>rf(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{x("RemoteStore","Retrying IndexedDB access"),await e(),n.M_.delete(1),await mr(n)})}function ga(n,t){return t().catch(e=>ma(n,e,t))}async function gr(n){const t=et(n),e=oe(t);let i=t.v_.length>0?t.v_[t.v_.length-1].batchId:-1;for(;gf(t);)try{const s=await sf(t.localStore,i);if(s===null){t.v_.length===0&&e.n_();break}i=s.batchId,_f(t,s)}catch(s){await ma(t,s)}_a(t)&&ya(t)}function gf(n){return Pn(n)&&n.v_.length<10}function _f(n,t){n.v_.push(t);const e=oe(n);e.Xo()&&e.E_&&e.d_(t.mutations)}function _a(n){return Pn(n)&&!oe(n).Zo()&&n.v_.length>0}function ya(n){oe(n).start()}async function yf(n){oe(n).V_()}async function vf(n){const t=oe(n);for(const e of n.v_)t.d_(e.mutations)}async function Ef(n,t,e){const i=n.v_.shift(),s=wi.from(i,t,e);await ga(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await gr(n)}async function Tf(n,t){t&&oe(n).E_&&await async function(i,s){if(function(l){return wh(l)&&l!==b.ABORTED}(s.code)){const o=i.v_.shift();oe(i).t_(),await ga(i,()=>i.remoteSyncer.rejectFailedWrite(o.batchId,s)),await gr(i)}}(n,t),_a(n)&&ya(n)}async function lo(n,t){const e=et(n);e.asyncQueue.verifyOperationInProgress(),x("RemoteStore","RemoteStore received new credentials");const i=Pn(e);e.M_.add(3),await Rn(e),i&&e.N_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.M_.delete(3),await mr(e)}async function If(n,t){const e=et(n);t?(e.M_.delete(2),await mr(e)):t||(e.M_.add(2),await Rn(e),e.N_.set("Unknown"))}function oe(n){return n.k_||(n.k_=function(e,i,s){const o=et(e);return o.f_(),new ff(i,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Po:()=>Promise.resolve(),To:yf.bind(null,n),Ao:Tf.bind(null,n),R_:vf.bind(null,n),A_:Ef.bind(null,n)}),n.x_.push(async t=>{t?(n.k_.t_(),await gr(n)):(await n.k_.stop(),n.v_.length>0&&(x("RemoteStore",`Stopping write stream with ${n.v_.length} pending writes`),n.v_=[]))})),n.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(t,e,i,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=i,this.op=s,this.removalCallback=o,this.deferred=new _e,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,i,s,o){const l=Date.now()+i,c=new Si(t,e,l,s,o);return c.start(i),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(b.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function va(n,t){if(Ie("AsyncQueue",`${t}: ${n}`),cr(n))return new j(b.UNAVAILABLE,`${t}: ${n}`);throw n}class wf{constructor(){this.queries=new Be(t=>Jo(t),Yo),this.onlineState="Unknown",this.z_=new Set}}function Af(n){n.z_.forEach(t=>{t.next()})}var uo,co;(co=uo||(uo={})).J_="default",co.Cache="cache";class Rf{constructor(t,e,i,s,o,l){this.localStore=t,this.remoteStore=e,this.eventManager=i,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=l,this.Sa={},this.ba=new Be(c=>Jo(c),Yo),this.Da=new Map,this.Ca=new Set,this.va=new Mt(H.comparator),this.Fa=new Map,this.Ma=new Ai,this.xa={},this.Oa=new Map,this.Na=Fe.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function Pf(n,t,e){const i=Vf(n);try{const s=await function(l,c){const f=et(l),p=ht.now(),y=c.reduce((P,V)=>P.add(V.key),wt());let w,R;return f.persistence.runTransaction("Locally write mutations","readwrite",P=>{let V=ar(),k=wt();return f.os.getEntries(P,y).next(N=>{V=N,V.forEach((U,O)=>{O.isValidDocument()||(k=k.add(U))})}).next(()=>f.localDocuments.getOverlayedDocuments(P,V)).next(N=>{w=N;const U=[];for(const O of c){const S=vh(O,w.get(O.key).overlayedDocument);S!=null&&U.push(new Ae(O.key,S,Ho(S.value.mapValue),qt.exists(!0)))}return f.mutationQueue.addMutationBatch(P,p,U,c)}).next(N=>{R=N;const U=N.applyToLocalDocumentSet(w,k);return f.documentOverlayCache.saveOverlays(P,N.batchId,U)})}).then(()=>({batchId:R.batchId,changes:ta(w)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),function(l,c,f){let p=l.xa[l.currentUser.toKey()];p||(p=new Mt(Z)),p=p.insert(c,f),l.xa[l.currentUser.toKey()]=p}(i,s.batchId,e),await _r(i,s.changes),await gr(i.remoteStore)}catch(s){const o=va(s,"Failed to persist write");e.reject(o)}}function ho(n,t,e){const i=et(n);if(i.isPrimaryClient&&e===0||!i.isPrimaryClient&&e===1){const s=[];i.ba.forEach((o,l)=>{const c=l.view.j_(t);c.snapshot&&s.push(c.snapshot)}),function(l,c){const f=et(l);f.onlineState=c;let p=!1;f.queries.forEach((y,w)=>{for(const R of w.U_)R.j_(c)&&(p=!0)}),p&&Af(f)}(i.eventManager,t),s.length&&i.Sa.h_(s),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function Sf(n,t){const e=et(n),i=t.batch.batchId;try{const s=await nf(e.localStore,t);Ta(e,i,null),Ea(e,i),e.sharedClientState.updateMutationState(i,"acknowledged"),await _r(e,s)}catch(s){await Bo(s)}}async function Cf(n,t,e){const i=et(n);try{const s=await function(l,c){const f=et(l);return f.persistence.runTransaction("Reject batch","readwrite-primary",p=>{let y;return f.mutationQueue.lookupMutationBatch(p,c).next(w=>(ft(w!==null),y=w.keys(),f.mutationQueue.removeMutationBatch(p,w))).next(()=>f.mutationQueue.performConsistencyCheck(p)).next(()=>f.documentOverlayCache.removeOverlaysForBatchId(p,y,c)).next(()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(p,y)).next(()=>f.localDocuments.getDocuments(p,y))})}(i.localStore,t);Ta(i,t,e),Ea(i,t),i.sharedClientState.updateMutationState(t,"rejected",e),await _r(i,s)}catch(s){await Bo(s)}}function Ea(n,t){(n.Oa.get(t)||[]).forEach(e=>{e.resolve()}),n.Oa.delete(t)}function Ta(n,t,e){const i=et(n);let s=i.xa[i.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),i.xa[i.currentUser.toKey()]=s}}async function _r(n,t,e){const i=et(n),s=[],o=[],l=[];i.ba.isEmpty()||(i.ba.forEach((c,f)=>{l.push(i.Ba(f,t,e).then(p=>{var y;if((p||e)&&i.isPrimaryClient){const w=p?!p.fromCache:(y=void 0)===null||y===void 0?void 0:y.current;i.sharedClientState.updateQueryState(f.targetId,w?"current":"not-current")}if(p){s.push(p);const w=Pi.Ki(f.targetId,p);o.push(w)}}))}),await Promise.all(l),i.Sa.h_(s),await async function(f,p){const y=et(f);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>C.forEach(p,R=>C.forEach(R.qi,P=>y.persistence.referenceDelegate.addReference(w,R.targetId,P)).next(()=>C.forEach(R.Qi,P=>y.persistence.referenceDelegate.removeReference(w,R.targetId,P)))))}catch(w){if(!cr(w))throw w;x("LocalStore","Failed to update sequence numbers: "+w)}for(const w of p){const R=w.targetId;if(!w.fromCache){const P=y.ns.get(R),V=P.snapshotVersion,k=P.withLastLimboFreeSnapshotVersion(V);y.ns=y.ns.insert(R,k)}}}(i.localStore,o))}async function bf(n,t){const e=et(n);if(!e.currentUser.isEqual(t)){x("SyncEngine","User change. New user:",t.toKey());const i=await da(e.localStore,t);e.currentUser=t,function(o,l){o.Oa.forEach(c=>{c.forEach(f=>{f.reject(new j(b.CANCELLED,l))})}),o.Oa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await _r(e,i.us)}}function Vf(n){const t=et(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Sf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Cf.bind(null,t),t}class fo{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=pr(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return ef(this.persistence,new Zh,t.initialUser,this.serializer)}createPersistence(t){return new Xh(Ri.Hr,this.serializer)}createSharedClientState(t){return new of}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Df{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>ho(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=bf.bind(null,this.syncEngine),await If(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new wf}()}createDatastore(t){const e=pr(t.databaseInfo.databaseId),i=function(o){return new cf(o)}(t.databaseInfo);return function(o,l,c,f){return new df(o,l,c,f)}(t.authCredentials,t.appCheckCredentials,i,e)}createRemoteStore(t){return function(i,s,o,l,c){return new mf(i,s,o,l,c)}(this.localStore,this.datastore,t.asyncQueue,e=>ho(this.syncEngine,e,0),function(){return ao.D()?new ao:new af}())}createSyncEngine(t,e){return function(s,o,l,c,f,p,y){const w=new Rf(s,o,l,c,f,p);return y&&(w.La=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(i){const s=et(i);x("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await Rn(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(t,e,i,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=i,this.databaseInfo=s,this.user=It.UNAUTHENTICATED,this.clientId=Uo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async o=>{x("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(i,o=>(x("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new j(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new _e;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const i=va(e,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function Xr(n,t){n.asyncQueue.verifyOperationInProgress(),x("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let i=e.initialUser;n.setCredentialChangeListener(async s=>{i.isEqual(s)||(await da(t.localStore,s),i=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function po(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Of(n);x("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(i=>lo(t.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>lo(t.remoteStore,s)),n._onlineComponents=t}function kf(n){return n.name==="FirebaseError"?n.code===b.FAILED_PRECONDITION||n.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Of(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){x("FirestoreClient","Using user provided OfflineComponentProvider");try{await Xr(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!kf(e))throw e;er("Error using user provided cache. Falling back to memory cache: "+e),await Xr(n,new fo)}}else x("FirestoreClient","Using default OfflineComponentProvider"),await Xr(n,new fo);return n._offlineComponents}async function Mf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(x("FirestoreClient","Using user provided OnlineComponentProvider"),await po(n,n._uninitializedComponentsProvider._online)):(x("FirestoreClient","Using default OnlineComponentProvider"),await po(n,new Df))),n._onlineComponents}function xf(n){return Mf(n).then(t=>t.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(n,t,e){if(!e)throw new j(b.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Ff(n,t,e,i){if(t===!0&&i===!0)throw new j(b.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function go(n){if(!H.isDocumentKey(n))throw new j(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function _o(n){if(H.isDocumentKey(n))throw new j(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ci(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(i){return i.constructor?i.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":G()}function Aa(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new j(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ci(n);throw new j(b.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(t){var e,i;if(t.host===void 0){if(t.ssl!==void 0)throw new j(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new j(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Ff("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ia((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new j(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new j(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new j(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class yr{constructor(t,e,i,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yo({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new j(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new j(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yo(t),t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new Rc;switch(i.type){case"firstParty":return new bc(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new j(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const i=mo.get(e);i&&(x("ComponentProvider","Removing Datastore"),mo.delete(e),i.terminate())}(this),Promise.resolve()}}function Lf(n,t,e,i={}){var s;const o=(n=Aa(n,yr))._getSettings(),l=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==l&&er("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:l,ssl:!1})),i.mockUserToken){let c,f;if(typeof i.mockUserToken=="string")c=i.mockUserToken,f=It.MOCK_USER;else{c=su(i.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const p=i.mockUserToken.sub||i.mockUserToken.user_id;if(!p)throw new j(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new It(p)}n._authCredentials=new Pc(new Lo(c,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(t,e,i){this.converter=e,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new bi(this.firestore,t,this._query)}}class Gt{constructor(t,e,i){this.converter=e,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new re(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Gt(this.firestore,t,this._key)}}class re extends bi{constructor(t,e,i){super(t,e,nh(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Gt(this.firestore,null,new H(t))}withConverter(t){return new re(this.firestore,t,this._path)}}function Uf(n,t,...e){if(n=dn(n),wa("collection","path",t),n instanceof yr){const i=it.fromString(t,...e);return _o(i),new re(n,null,i)}{if(!(n instanceof Gt||n instanceof re))throw new j(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(it.fromString(t,...e));return _o(i),new re(n.firestore,null,i)}}function Bf(n,t,...e){if(n=dn(n),arguments.length===1&&(t=Uo.newId()),wa("doc","path",t),n instanceof yr){const i=it.fromString(t,...e);return go(i),new Gt(n,null,new H(i))}{if(!(n instanceof Gt||n instanceof re))throw new j(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(it.fromString(t,...e));return go(i),new Gt(n.firestore,n instanceof re?n.converter:null,new H(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new pa(this,"async_queue_retry"),this.hu=()=>{const e=Wr();e&&x("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Yo.Wo()};const t=Wr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const e=Wr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise(()=>{});const e=new _e;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.su.push(t),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(t){if(!cr(t))throw t;x("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(t){const e=this.iu.then(()=>(this.uu=!0,t().catch(i=>{this.au=i,this.uu=!1;const s=function(l){let c=l.message||"";return l.stack&&(c=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),c}(i);throw Ie("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.uu=!1,i))));return this.iu=e,e}enqueueAfterDelay(t,e,i){this.Pu(),this.lu.indexOf(t)>-1&&(e=0);const s=Si.createAndSchedule(this,t,e,i,o=>this.Eu(o));return this._u.push(s),s}Pu(){this.au&&G()}verifyOperationInProgress(){}async du(){let t;do t=this.iu,await t;while(t!==this.iu)}Au(t){for(const e of this._u)if(e.timerId===t)return!0;return!1}Ru(t){return this.du().then(()=>{this._u.sort((e,i)=>e.targetTimeMs-i.targetTimeMs);for(const e of this._u)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.du()})}Vu(t){this.lu.push(t)}Eu(t){const e=this._u.indexOf(t);this._u.splice(e,1)}}class Ra extends yr{constructor(t,e,i,s){super(t,e,i,s),this.type="firestore",this._queue=function(){return new jf}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Pa(this),this._firestoreClient.terminate()}}function $f(n,t){const e=typeof n=="object"?n:Co(),i=typeof n=="string"?n:"(default)",s=lc(e,"firestore").getImmediate({identifier:i});if(!s._initialized){const o=ru("firestore");o&&Lf(s,...o)}return s}function zf(n){return n._firestoreClient||Pa(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Pa(n){var t,e,i;const s=n._freezeSettings(),o=function(c,f,p,y){return new zc(c,f,p,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,Ia(y.experimentalLongPollingOptions),y.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new Nf(n._authCredentials,n._appCheckCredentials,n._queue,o),!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(t){this._byteString=t}static fromBase64String(t){try{return new In(Kt.fromBase64String(t))}catch(e){throw new j(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new In(Kt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new j(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new j(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new j(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Z(this._lat,t._lat)||Z(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hf=/^__.*__$/;class qf{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return this.fieldMask!==null?new Ae(t,this.data,this.fieldMask,e,this.fieldTransforms):new An(t,this.data,e,this.fieldTransforms)}}function ba(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class Di{constructor(t,e,i,s,o,l){this.settings=t,this.databaseId=e,this.serializer=i,this.ignoreUndefinedProperties=s,o===void 0&&this.mu(),this.fieldTransforms=o||[],this.fieldMask=l||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(t){return new Di(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:i,yu:!1});return s.wu(t),s}Su(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:i,yu:!1});return s.mu(),s}bu(t){return this.gu({path:void 0,yu:!0})}Du(t){return ur(t,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}mu(){if(this.path)for(let t=0;t<this.path.length;t++)this.wu(this.path.get(t))}wu(t){if(t.length===0)throw this.Du("Document fields must not be empty");if(ba(this.fu)&&Hf.test(t))throw this.Du('Document fields cannot begin and end with "__"')}}class Gf{constructor(t,e,i){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=i||pr(t)}Fu(t,e,i,s=!1){return new Di({fu:t,methodName:e,vu:i,path:gt.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Kf(n){const t=n._freezeSettings(),e=pr(n._databaseId);return new Gf(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Qf(n,t,e,i,s,o={}){const l=n.Fu(o.merge||o.mergeFields?2:0,t,e,s);ka("Data must be an object, but it was:",l,i);const c=Da(i,l);let f,p;if(o.merge)f=new Bt(l.fieldMask),p=l.fieldTransforms;else if(o.mergeFields){const y=[];for(const w of o.mergeFields){const R=Wf(t,w,e);if(!l.contains(R))throw new j(b.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);Jf(y,R)||y.push(R)}f=new Bt(y),p=l.fieldTransforms.filter(w=>f.covers(w.field))}else f=null,p=l.fieldTransforms;return new qf(new Ut(c),f,p)}class Ni extends Vi{_toFieldTransform(t){return new mh(t.path,new vn)}isEqual(t){return t instanceof Ni}}function Va(n,t){if(Na(n=dn(n)))return ka("Unsupported field value:",t,n),Da(n,t);if(n instanceof Vi)return function(i,s){if(!ba(s.fu))throw s.Du(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${i._methodName}() is not currently supported inside arrays`);const o=i._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.yu&&t.fu!==4)throw t.Du("Nested arrays are not supported");return function(i,s){const o=[];let l=0;for(const c of i){let f=Va(c,s.bu(l));f==null&&(f={nullValue:"NULL_VALUE"}),o.push(f),l++}return{arrayValue:{values:o}}}(n,t)}return function(i,s){if((i=dn(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return fh(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const o=ht.fromDate(i);return{timestampValue:hi(s.serializer,o)}}if(i instanceof ht){const o=new ht(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:hi(s.serializer,o)}}if(i instanceof Ca)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof In)return{bytesValue:Ph(s.serializer,i._byteString)};if(i instanceof Gt){const o=s.databaseId,l=i.firestore._databaseId;if(!l.isEqual(o))throw s.Du(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:ha(i.firestore._databaseId||s.databaseId,i._key.path)}}throw s.Du(`Unsupported field value: ${Ci(i)}`)}(n,t)}function Da(n,t){const e={};return $o(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):wn(n,(i,s)=>{const o=Va(s,t.pu(i));o!=null&&(e[i]=o)}),{mapValue:{fields:e}}}function Na(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ht||n instanceof Ca||n instanceof In||n instanceof Gt||n instanceof Vi)}function ka(n,t,e){if(!Na(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const i=Ci(e);throw i==="an object"?t.Du(n+" a custom object"):t.Du(n+" "+i)}}function Wf(n,t,e){if((t=dn(t))instanceof Sa)return t._internalPath;if(typeof t=="string")return Yf(n,t);throw ur("Field path arguments must be of type string or ",n,!1,void 0,e)}const Xf=new RegExp("[~\\*/\\[\\]]");function Yf(n,t,e){if(t.search(Xf)>=0)throw ur(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Sa(...t.split("."))._internalPath}catch{throw ur(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function ur(n,t,e,i,s){const o=i&&!i.isEmpty(),l=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let f="";return(o||l)&&(f+=" (found",o&&(f+=` in field ${i}`),l&&(f+=` in document ${s}`),f+=")"),new j(b.INVALID_ARGUMENT,c+n+f)}function Jf(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf(n,t,e){let i;return i=n?n.toFirestore(t):t,i}function td(n,t){const e=Aa(n.firestore,Ra),i=Bf(n),s=Zf(n.converter,t);return ed(e,[Qf(Kf(n.firestore),"addDoc",i._key,s,n.converter!==null,{}).toMutation(i._key,qt.exists(!1))]).then(()=>i)}function ed(n,t){return function(i,s){const o=new _e;return i.asyncQueue.enqueueAndForget(async()=>Pf(await xf(i),s,o)),o.promise}(zf(n),t)}function nd(){return new Ni("serverTimestamp")}(function(t,e=!0){(function(s){Ue=s})(hc),tr(new pn("firestore",(i,{instanceIdentifier:s,options:o})=>{const l=i.getProvider("app").getImmediate(),c=new Ra(new Sc(i.getProvider("auth-internal")),new Dc(i.getProvider("app-check-internal")),function(p,y){if(!Object.prototype.hasOwnProperty.apply(p.options,["projectId"]))throw new j(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ir(p.options.projectId,y)}(l,s),l);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),De(Ks,"4.6.4",t),De(Ks,"4.6.4","esm2017")})();const vo={apiKey:"AIzaSyCV4UnH7mYQFs3lkRWQ1iAfAUaUiyUNCCs",authDomain:"bbc-group-def5f.firebaseapp.com",projectId:"bbc-group-def5f",storageBucket:"bbc-group-def5f.appspot.com",messagingSenderId:"554976813860",appId:"1:554976813860:web:11661bc24d26cd23c989b1",measurementId:"G-0K2032HTD8"};let ln;fc().length&&(ln=Co(),dc(ln)),ln=si(vo);const rd=$f(ln);function id(n){let t,e,i,s,o,l,c,f,p,y,w,R,P,V,k,N='<button type="submit" class="btn btn-danger svelte-1vl5gl0">Send Message</button>',U,O;return{c(){t=$("div"),e=$("form"),i=$("div"),s=$("input"),o=ot(),l=$("div"),c=$("input"),f=ot(),p=$("div"),y=$("input"),w=ot(),R=$("div"),P=$("textarea"),V=ot(),k=$("div"),k.innerHTML=N,this.h()},l(S){t=z(S,"DIV",{});var M=q(t);e=z(M,"FORM",{action:!0});var W=q(e);i=z(W,"DIV",{class:!0});var Y=q(i);s=z(Y,"INPUT",{type:!0,placeholder:!0,class:!0}),Y.forEach(L),o=at(W),l=z(W,"DIV",{class:!0});var v=q(l);c=z(v,"INPUT",{type:!0,name:!0,placeholder:!0,class:!0}),v.forEach(L),f=at(W),p=z(W,"DIV",{class:!0});var d=q(p);y=z(d,"INPUT",{type:!0,name:!0,placeholder:!0,class:!0}),d.forEach(L),w=at(W),R=z(W,"DIV",{class:!0});var m=q(R);P=z(m,"TEXTAREA",{name:!0,placeholder:!0,class:!0}),q(P).forEach(L),m.forEach(L),V=at(W),k=z(W,"DIV",{class:!0,"data-svelte-h":!0}),me(k)!=="svelte-hbvg6r"&&(k.innerHTML=N),W.forEach(L),M.forEach(L),this.h()},h(){F(s,"type","text"),F(s,"placeholder","Name"),F(s,"class","inputField svelte-1vl5gl0"),F(i,"class","inputSection svelte-1vl5gl0"),F(c,"type","email"),F(c,"name","email"),F(c,"placeholder","Email Adderess"),F(c,"class","inputField svelte-1vl5gl0"),F(l,"class","inputSection svelte-1vl5gl0"),F(y,"type","phone"),F(y,"name","phone"),F(y,"placeholder","Phone"),F(y,"class","inputField svelte-1vl5gl0"),F(p,"class","inputSection svelte-1vl5gl0"),F(P,"name","message"),F(P,"placeholder","Message"),F(P,"class","inputField svelte-1vl5gl0"),F(R,"class","inputSection svelte-1vl5gl0"),F(k,"class","inputSection svelte-1vl5gl0"),F(e,"action","")},m(S,M){lt(S,t,M),B(t,e),B(e,i),B(i,s),te(s,n[0]),B(e,o),B(e,l),B(l,c),te(c,n[1]),B(e,f),B(e,p),B(p,y),te(y,n[2]),B(e,w),B(e,R),B(R,P),te(P,n[3]),B(e,V),B(e,k),U||(O=[rn(s,"input",n[5]),rn(c,"input",n[6]),rn(y,"input",n[7]),rn(P,"input",n[8]),rn(e,"submit",vl(n[4]))],U=!0)},p(S,[M]){M&1&&s.value!==S[0]&&te(s,S[0]),M&2&&c.value!==S[1]&&te(c,S[1]),M&4&&te(y,S[2]),M&8&&te(P,S[3])},i:Ot,o:Ot,d(S){S&&L(t),U=!1,El(O)}}}function sd(n,t,e){let i="",s="",o="",l="";async function c(R){if(e(0,i=(i||"").trim()),e(1,s=(s||"").trim()),e(2,o=(o||"").trim()),e(3,l=(l||"").trim()),i&&l&&(s||o))try{await td(Uf(rd,"contacts"),{name:i,email:s,phone:o,message:l,createdAt:nd()}),console.log("Contact information saved successfully"),e(0,i=""),e(1,s=""),e(2,o=""),e(3,l="")}catch(P){console.log("There was an error saving your information",P)}else jl({message:"Missing Required Fields!"})}function f(){i=this.value,e(0,i)}function p(){s=this.value,e(1,s)}function y(){o=this.value,e(2,o)}function w(){l=this.value,e(3,l)}return[i,s,o,l,c,f,p,y,w]}class od extends le{constructor(t){super(),ue(this,t,sd,id,ae,{})}}function ad(n){let t,e,i,s='<div class="col-12 mt-5"><div class="services-container position-relative"><div class="services-back svelte-1tkmhum">get in touch.</div> <div class="services svelte-1tkmhum">get in touch.</div></div></div>',o,l,c,f,p="WE’D LOVE TO <br/> HEAR FROM YOU",y,w,R,P,V,k,N="Information Request",U,O,S=`For more information and how we can meet your needs, please fill out the form below and\r
					someone from our team will be in touch.`,M,W,Y,v,d,m;return w=new Ol({props:{color:"#FF792D",position:"center",style:"margin-top:0px;"}}),W=new od({}),d=new Cl({}),{c(){t=$("section"),e=$("div"),i=$("div"),i.innerHTML=s,o=ot(),l=$("div"),c=$("div"),f=$("h1"),f.innerHTML=p,y=ot(),St(w.$$.fragment),R=ot(),P=$("div"),V=$("div"),k=$("h2"),k.textContent=N,U=ot(),O=$("p"),O.textContent=S,M=ot(),St(W.$$.fragment),Y=ot(),v=$("div"),St(d.$$.fragment),this.h()},l(_){t=z(_,"SECTION",{class:!0});var E=q(t);e=z(E,"DIV",{class:!0});var I=q(e);i=z(I,"DIV",{class:!0,"data-svelte-h":!0}),me(i)!=="svelte-e4ms20"&&(i.innerHTML=s),o=at(I),l=z(I,"DIV",{class:!0});var g=q(l);c=z(g,"DIV",{class:!0});var kt=q(c);f=z(kt,"H1",{class:!0,"data-svelte-h":!0}),me(f)!=="svelte-17mw0va"&&(f.innerHTML=p),y=at(kt),Ct(w.$$.fragment,kt),kt.forEach(L),g.forEach(L),R=at(I),P=z(I,"DIV",{class:!0});var jt=q(P);V=z(jt,"DIV",{class:!0,style:!0});var Qt=q(V);k=z(Qt,"H2",{"data-svelte-h":!0}),me(k)!=="svelte-3vrg5z"&&(k.textContent=N),U=at(Qt),O=z(Qt,"P",{"data-svelte-h":!0}),me(O)!=="svelte-17q43to"&&(O.textContent=S),M=at(Qt),Ct(W.$$.fragment,Qt),Qt.forEach(L),Y=at(jt),v=z(jt,"DIV",{class:!0});var Wt=q(v);Ct(d.$$.fragment,Wt),Wt.forEach(L),jt.forEach(L),I.forEach(L),E.forEach(L),this.h()},h(){F(i,"class","row justify-content-center"),F(f,"class","display-4 font-weight-bold text-uppercase"),F(c,"class","col-12 text-center"),F(l,"class","row justify-content-center mt-5 mb-5"),F(V,"class","col-md-6 py-5 ps-4 mobile-padding svelte-1tkmhum"),Eo(V,"background-color","#F3F5FA"),F(v,"class","col-md-6 ps-96 py-96 pe-4 mobile-padding svelte-1tkmhum"),F(P,"class","row"),F(e,"class","container-fluid"),F(t,"class","py-96 pt-5")},m(_,E){lt(_,t,E),B(t,e),B(e,i),B(e,o),B(e,l),B(l,c),B(c,f),B(c,y),bt(w,c,null),B(e,R),B(e,P),B(P,V),B(V,k),B(V,U),B(V,O),B(V,M),bt(W,V,null),B(P,Y),B(P,v),bt(d,v,null),m=!0},p:Ot,i(_){m||(Vt(w.$$.fragment,_),Vt(W.$$.fragment,_),Vt(d.$$.fragment,_),m=!0)},o(_){Dt(w.$$.fragment,_),Dt(W.$$.fragment,_),Dt(d.$$.fragment,_),m=!1},d(_){_&&L(t),Nt(w),Nt(W),Nt(d)}}}class ld extends le{constructor(t){super(),ue(this,t,null,ad,ae,{})}}function ud(n){let t,e='<div class="row"><div class="col-12"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d487293.477870827!2d78.07836166993249!3d17.41273323166305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1721814685895!5m2!1sen!2sin" width="100%" height="450" style="border:0; max-width: 100%;" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div></div>';return{c(){t=$("section"),t.innerHTML=e,this.h()},l(i){t=z(i,"SECTION",{class:!0,"data-svelte-h":!0}),me(t)!=="svelte-p2m663"&&(t.innerHTML=e),this.h()},h(){F(t,"class","container-fluid")},m(i,s){lt(i,t,s)},p:Ot,i:Ot,o:Ot,d(i){i&&L(t)}}}let cd=class extends le{constructor(t){super(),ue(this,t,null,ud,ae,{})}};function hd(n){let t,e,i,s,o,l,c,f,p,y,w,R,P,V,k,N,U,O;return e=new zl({}),o=new ld({}),f=new cd({}),w=new Kl({}),V=new Vl({}),U=new Dl({}),{c(){t=$("section"),St(e.$$.fragment),i=ot(),s=$("section"),St(o.$$.fragment),l=ot(),c=$("section"),St(f.$$.fragment),p=ot(),y=$("section"),St(w.$$.fragment),R=ot(),P=$("section"),St(V.$$.fragment),k=ot(),N=$("section"),St(U.$$.fragment)},l(S){t=z(S,"SECTION",{});var M=q(t);Ct(e.$$.fragment,M),M.forEach(L),i=at(S),s=z(S,"SECTION",{});var W=q(s);Ct(o.$$.fragment,W),W.forEach(L),l=at(S),c=z(S,"SECTION",{});var Y=q(c);Ct(f.$$.fragment,Y),Y.forEach(L),p=at(S),y=z(S,"SECTION",{});var v=q(y);Ct(w.$$.fragment,v),v.forEach(L),R=at(S),P=z(S,"SECTION",{});var d=q(P);Ct(V.$$.fragment,d),d.forEach(L),k=at(S),N=z(S,"SECTION",{});var m=q(N);Ct(U.$$.fragment,m),m.forEach(L)},m(S,M){lt(S,t,M),bt(e,t,null),lt(S,i,M),lt(S,s,M),bt(o,s,null),lt(S,l,M),lt(S,c,M),bt(f,c,null),lt(S,p,M),lt(S,y,M),bt(w,y,null),lt(S,R,M),lt(S,P,M),bt(V,P,null),lt(S,k,M),lt(S,N,M),bt(U,N,null),O=!0},p:Ot,i(S){O||(Vt(e.$$.fragment,S),Vt(o.$$.fragment,S),Vt(f.$$.fragment,S),Vt(w.$$.fragment,S),Vt(V.$$.fragment,S),Vt(U.$$.fragment,S),O=!0)},o(S){Dt(e.$$.fragment,S),Dt(o.$$.fragment,S),Dt(f.$$.fragment,S),Dt(w.$$.fragment,S),Dt(V.$$.fragment,S),Dt(U.$$.fragment,S),O=!1},d(S){S&&(L(t),L(i),L(s),L(l),L(c),L(p),L(y),L(R),L(P),L(k),L(N)),Nt(e),Nt(o),Nt(f),Nt(w),Nt(V),Nt(U)}}}function fd(n){let t,e;return t=new Nl({props:{slot:"navbar"}}),{c(){St(t.$$.fragment)},l(i){Ct(t.$$.fragment,i)},m(i,s){bt(t,i,s),e=!0},p:Ot,i(i){e||(Vt(t.$$.fragment,i),e=!0)},o(i){Dt(t.$$.fragment,i),e=!1},d(i){Nt(t,i)}}}function dd(n){let t,e;return t=new bl({props:{$$slots:{navbar:[fd],default:[hd]},$$scope:{ctx:n}}}),{c(){St(t.$$.fragment)},l(i){Ct(t.$$.fragment,i)},m(i,s){bt(t,i,s),e=!0},p(i,[s]){const o={};s&1&&(o.$$scope={dirty:s,ctx:i}),t.$set(o)},i(i){e||(Vt(t.$$.fragment,i),e=!0)},o(i){Dt(t.$$.fragment,i),e=!1},d(i){Nt(t,i)}}}class wd extends le{constructor(t){super(),ue(this,t,null,dd,ae,{})}}export{wd as component};
