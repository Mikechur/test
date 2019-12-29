!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=27)}([function(t,e,n){"use strict";n.d(e,"a",function(){return r});var i=n(11);function r(t){return"function"==typeof t||"Function"===Object(i.a)(t)}},function(t,e,n){"use strict";function i(...t){}n.d(e,"a",function(){return i})},function(t,e,n){"use strict";function i(t=window){try{return(t.navigator||{}).userAgent||""}catch(e){return""}}n.d(e,"a",function(){return i})},function(t,e,n){"use strict";n.r(e),n.d(e,"getBoundingClientRect",function(){return i});const i=t=>{try{const{left:n,right:i,top:r,bottom:o}=t.getBoundingClientRect();return{left:n,right:i,top:r,bottom:o,width:i-n,height:o-r}}catch(e){return{left:0,width:0,top:0,height:0,right:0,bottom:0}}}},function(t,e,n){"use strict";n.d(e,"a",function(){return i});const i=(t,e,n)=>{const i=new Array(t.length);for(let r=0;r<t.length;r++)i[r]=e.call(n,t[r],r,t);return i}},function(t,e,n){"use strict";n.d(e,"a",function(){return r});const i=n(26),r=(t=window)=>{const e=i(t);return"boolean"==typeof e?-1:e}},function(t,e,n){"use strict";function i(t){const e=typeof t;return Boolean(t)&&("object"===e||"function"===e)}n.d(e,"a",function(){return i})},function(t,e,n){"use strict";n.d(e,"b",function(){return i}),n.d(e,"a",function(){return r});const i=["","webkit","moz","o","ms"],r=["","-webkit-","-ms-","-moz-","-o-"]},function(t,e,n){"use strict";n.d(e,"a",function(){return i});const i=(t=window)=>{const e=t.navigator.userAgent;return-1!==e.indexOf("Opera Mini")||(-1!==e.indexOf("; wv)")&&-1!==e.indexOf(" OPR/")||-1!==e.indexOf(" OPiOS/"))}},function(t,e,n){"use strict";function i(t){return"string"==typeof t}n.r(e),n.d(e,"isString",function(){return i})},function(t,e,n){"use strict";n.r(e),n.d(e,"_clip",function(){return s}),n.d(e,"isInViewport",function(){return a}),n.d(e,"getRatioInViewport",function(){return c}),n.d(e,"isOverlaid",function(){return l});const i=n(23),r=n(25),o=n(3).getBoundingClientRect;function s(t,e,n){return Math.max(Math.min(e,n)-Math.max(t,0),0)}function a(t,e){if(r.isOperaMini)return t.offsetWidth>0&&t.offsetHeight>0;return c(t)>=(e||Number.MIN_VALUE)}function c(t){const e=o(t),n=e.width,r=e.height;let a=0;if(n>0&&r>0){const t=i();a=s(e.left,e.right,t.width)*s(e.top,e.bottom,t.height)/(n*r)}return a}function l(t){if(!document.elementFromPoint||!t.contains||r.isOperaMini)return!1;const e=o(t),n=t.clientWidth/2,i=t.clientHeight/2,s=e.left+n,a=e.top+i,c=document.elementFromPoint(s,a);return!!c&&(t!==c&&!t.contains(c))}},function(t,e,n){"use strict";n.d(e,"a",function(){return o});const i={}.toString,r=/\[object (\w+)\]/,o=t=>{const e=i.call(t);if(!e)return null;const n=e.match(r);if(!n)return null;const o=n[1];return o||null}},function(t,e,n){"use strict";n.d(e,"a",function(){return r});var i=n(14);const r=Object(i.a)()},function(t,e,n){"use strict";var i=n(5);const r=(t=window)=>Object(i.a)(t)>11;function o(t){return function(t){return Boolean(t.PointerEvent)}(t)&&function(t){const e=t.navigator||{},{msMaxTouchPoints:n,maxTouchPoints:i}=e;return n||i||0}(t)>0&&!r(t)}var s=n(4),a=n(0),c=n(6);function l(t,e){if(!Object(a.a)(t.matchMedia))return!1;const n=t.matchMedia(e);return Object(c.a)(n)&&Boolean(n.matches)}var d=n(7);const h=Object(s.a)(d.a,t=>`(${t}any-pointer:coarse)`).join(",");const u=Object(s.a)(d.a,t=>`(${t}touch-enabled)`).join(",");function p(t=window){return o(t)||function(t){return l(t,h)}(t)||function(t){return l(t,u)}(t)||function(t){const{DocumentTouch:e}=t;return Boolean(e)&&t.document instanceof e}(t)||function(t){return"ontouchstart"in t}(t)}n.d(e,"a",function(){return p})},function(t,e,n){"use strict";var i=n(2);n.d(e,"a",function(){return r});const r=(t=window)=>{const e=Object(i.a)(t).toLowerCase();return-1!==e.indexOf("safari")&&-1===e.indexOf("chrome")&&-1===e.indexOf("android")&&-1===e.indexOf("phantomjs")&&!((t=window)=>Object(i.a)(t).toLowerCase().indexOf("tizen")>-1)(t)}},function(t,e){function n(t,e){var n=[],i=[];return null==e&&(e=function(t,e){return n[0]===e?"[Circular ~]":"[Circular ~."+i.slice(0,n.indexOf(e)).join(".")+"]"}),function(r,o){if(n.length>0){var s=n.indexOf(this);~s?n.splice(s+1):n.push(this),~s?i.splice(s,1/0,r):i.push(r),~n.indexOf(o)&&(o=e.call(this,r,o))}else n.push(o);return null==t?o:t.call(this,r,o)}}(t.exports=function(t,e,i,r){return JSON.stringify(t,n(e,r),i)}).getSerialize=n},function(t,e){},function(t,e,n){"use strict";n.r(e),n.d(e,"getMraid",function(){return r}),n.d(e,"isAvailable",function(){return o}),n.d(e,"isReady",function(){return s}),n.d(e,"open",function(){return a}),n.d(e,"on",function(){return c});var i=n(1);function r(t=window){try{const n="ownerDocument"in t&&"defaultView"in t.ownerDocument?t.ownerDocument.defaultView:t,i=n.mraid||n.top.mraid;return i&&i.getState&&i.addEventListener?i:void 0}catch(e){return}}function o(t=window){return void 0!==r(t)}function s(t=window){return o(t)&&"loading"!==r(t).getState()}function a(t=window,e){o(t)&&r(t).open(e)}function c(t=window,e,n,s){if(!o(t))return i.a;const a=r(t);return a.addEventListener(e,n),()=>{a.removeEventListener(e,n)}}},function(t,e,n){"use strict";n(16);var i=n(17);n.d(e,"MraidHelpers",function(){return i})},function(t,e){t.exports=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(t,e){return t.__proto__=e,t}:function(t,e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n]);return t})},function(t,e,n){t.exports=n(21).isObject},function(t,e,n){"use strict";function i(t){const e=typeof t;return Boolean(t)&&("object"===e||"function"===e)}n.r(e),n.d(e,"isObject",function(){return i})},function(t,e,n){t.exports=n(9).isString},function(t,e,n){t.exports=n(24).getWindowSize},function(t,e,n){"use strict";function i(){const t=window;let e=t.innerWidth,n=t.innerHeight;if(!e){const i=t.document.documentElement;e=i.clientWidth,n=i.clientHeight}return{width:e,height:n}}n.r(e),n.d(e,"getWindowSize",function(){return i})},function(t,e,n){const i=n(28).isOperaMini;t.exports={isOperaMini:i}},function(t,e){t.exports=function(t){t||(t=window);var e=t.navigator.userAgent,n=e.indexOf("MSIE ");if(n>0)return parseInt(e.substring(n+5,e.indexOf(".",n)),10);if(e.indexOf("Trident/")>0){var i=e.indexOf("rv:");return parseInt(e.substring(i+3,e.indexOf(".",i)),10)}var r=e.indexOf("Edge/");return r>0&&parseInt(e.substring(r+5,e.indexOf(".",r)),10)}},function(t,e,n){"use strict";n.r(e);const i=(t,e,n)=>{const i=[];for(let r=0;r<t.length;r++){const o=t[r];e.call(n,o,r,t)&&i.push(o)}return i};const r={message:"DEFAULT_ERROR_MESSAGE",code:0,details:"",stack:"?:?:?",isFatal:!0},o=n(15),s=n(19);class a extends Error{constructor(t,e={}){const n="object"==typeof t?t:{message:String(t||r.message)};super(),s(this,a.prototype),this.message=e.message||n.message||r.message,this.code=e.code||n.code||n.id||r.code,this.isFatal=Boolean(function(t){const[e]=i(t,t=>void 0!==t);return e}([e.isFatal,n.isFatal,r.isFatal])),this.details=e.details||n.details||r.details;const c=e.stack||n.stack||function(t){const{url:e,line:n,col:i,fileName:r,columnNumber:o,lineNumber:s}=t;return`${e||r||"?"}:${n||s||"?"}:${i||o||"?"}`}(n);c!==r.stack?this.stack=c:this.stack||(this.stack=this.message||r.stack),this.toString=()=>o(this.toJSON()),this.toJSON=()=>({message:this.message,code:this.code,isFatal:this.isFatal,details:this.details,stack:c})}}function c(t){if(t&&t.location){const{location:e}=t;return"function"==typeof e.toString?e.toString():e.href||""}return""}function l(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function d(t){if("function"==typeof Object.keys)return Object.keys(t);{const e=[];for(const n in t)l(t,n)&&e.push(n);return e}}function h(t){let e=function(){e=()=>n;const n=t.apply(this,arguments);return n};return function(){return e.apply(this,arguments)}}const u=(t,e,n)=>{let i=t.getItem(e);return i||(i=n(e),t.setItem(e,i)),i};function p(t){if(!t)return[];const e=[];for(let n=0;n<t.length;n++)e.push(t[n]);return e}var f=n(6);const g=(t,e)=>{for(const n of e.split(".")){if(!Object(f.a)(t)){t=void 0;break}t=t[n]}return t},m=(t,e,n)=>{if(!Object(f.a)(t))return t;const i=t,r=e.split("."),o=r.pop();for(const s of r){const e=t[s];t=Object(f.a)(e)?e:t[s]={}}return t[o]=n,i};var y=n(0);const v=t=>{try{return t()}catch(e){return}},b=(t,e,n,i)=>(function(){try{return e.apply(n||this,arguments)}catch(r){if(Object(y.a)(i)&&i(r),!0===r.preventProtect)throw r;b.log(r,t)}});function w(...t){return t.join("")}b.log=function(t,e){console.log("LOG:"+e+":"+t)},b.setTimeout=(t,e,n,i)=>window.setTimeout(b("timeout",t,n,i),e);class x{}x.YaContextCallbacks=w("Ya.C","ontext._callbacks"),x.YaContextCallbacksCalls=w("Ya.C","ontext._callbacks_call"),x.AdvManager=w("A","dvManager"),x.AdvBlock=w("A","dvBlock"),x.RTB=w("R","TB"),x.Rtb=w("R","tb"),x.MetrikaAdtune=w("metrika_a","dtune");class k{constructor(t){this.obj=t}getItem(t){return this.obj[t]}setItem(t,e){this.obj[t]=e}}const _=h(()=>((t,e,n)=>{let i;return((t,e)=>{const n=t.slice();for(;n.length;){const t=e(n.shift());if(!t)return;n.push(...t)}})([t.top],t=>{if(!(i=v(()=>g(t,e))))return v(()=>p(t.frames))||[]}),i||(i=n()),m(t,e,i),i})(self,"Ya.pcodeCrossFrameData",()=>new k({}))),S=t=>u(_(),t,()=>new k({})),O=h(()=>((t,e,n)=>{let i=g(t,e);return i||(i=n(),m(t,e,i)),i})(self,"Ya.pcodeWindowData",()=>new k({}))),C=t=>u(O(),t,()=>new k({})),$=b("metrika::pushEvent",(t,e)=>{const n=g(t,"Ya._metrika.dataLayer")||[];m(t,"Ya._metrika.dataLayer",n),n.push({ymetrikaEvent:{type:"params",parent:1,data:{__ym:Object.assign({},e)}}})}),P=b("sessionId::configureMetrika",(t,e)=>{$(t,{adSessionID:e})});function E(t){if(!t||!t.toString)return!1;const e=t.toString();return/\[native code\]/.test(e)||/\/\* source code not available \*\//.test(e)}const j=!E(Math.random)||Math.random()==Math.random(),R=Date&&Object(y.a)(Date.now)?()=>Date.now():()=>(new Date).getTime(),A="undefined"==typeof window?void 0:window.performance,T=A&&Object(y.a)(A.now),N=A&&A.timing&&A.timing.navigationStart?A.timing.navigationStart:R(),I=T?()=>A.now():()=>(()=>R()-N)(),M=2147483647,L=16807;let B=Date.now()*I()%M;const D=M-1;const z=j?function(){return((B=B*L%M)-1)/D}:function(){return Math.random()},V=()=>(1e6*z()).toFixed(0)+(new Date).valueOf().toString();let F;const U=()=>(F||(F=((t,e,n,i)=>{let r=e.getItem("sessionId");return r||(r=n.getItem("sessionId")||t(),i(window,r)),e.setItem("sessionId",r),n.setItem("sessionId",r),r})(V,C("common"),S("common"),P)),F),W=((t=window)=>{const e=(t=>{const e=[];for(;t;)try{if(c(t),e.push(t),t.parent===t)break;t=t.parent}catch(n){break}return e})(t);for(;e.length;){const t=e.pop();if(!t)continue;const n=g(t,"ya.videoAd.encodeUrl");if(Object(y.a)(n))return n}return null})(window),H=t=>"hidden"in t?"hidden":"webkitHidden"in t?"webkitHidden":void 0;function Y(t,e=!0){const n=H(t);return n?!t[n]:e}var q=n(11);function G(t,e){let n=t[e];if(!E(n)){const r=n;try{delete t[e];const o=t[e];"function"==typeof o&&(n=o),t[e]=r}catch(i){}}return n}const Q=G(Array,"isArray"),X=Boolean(Q)?t=>Q.call(Array,t):t=>"Array"===Object(q.a)(t);const J=Boolean(window.location.ancestorOrigins);const K=function(t=document,e){const n=t.currentScript;if(n)return n;{const n=t.getElementsByTagName("script"),i=[];for(let t=0;t<n.length;t++)i.push(n[t]);if("function"==typeof e){const t=i.filter(e);return t[t.length-1]}return i[i.length-1]}}(),Z=K?K.src:"";var tt=n(12);function et(t,e=!0){if(tt.a&&e)return[];{const e=[];let i=t;for(;;)try{if(!(i=i.ownerDocument.defaultView.frameElement))return e;e.push(i)}catch(n){return e}}}function nt(t){let e="",n="";if(t){(function(t){const e=et(t.documentElement).map(t=>t.ownerDocument);return e.unshift(t),e.map(t=>({location:c(t.defaultView),referrer:t.referrer}))})(t).reverse().forEach(({location:t,referrer:i})=>{e=e||t,n=n||i})}return{location:e,referrer:n}}function it(t){let e="";for(let n=0;n<t;n++)e+=(16*z()|0).toString(16);return e}var rt=n(4);const ot=et(document.documentElement);const st=function(){const t=Object(rt.a)(ot,t=>t.ownerDocument),{length:e}=t,n=(e?t[e-1]:document).defaultView;return!!n&&n.self!==n.parent}();var at=n(1);function ct(t,e,n){for(const i in t)l(t,i)&&e.call(n,t[i],i,t)}const lt=200,dt=4;function ht(t){const{method:e,url:n,async:i=!0,data:r,responseType:o="text",onBeforeSend:s=at.a,onError:a=at.a,onSuccess:c=at.a,onRetry:l=at.a,checkStatus:d=(t=>lt===t),headers:h={},xhrConstructor:u=XMLHttpRequest,retries:p=0,timeout:f=0,withCredentials:g,onAbort:m,onSetup:y}=t;let v,b=!1,w=t=>{b=!0,w=at.a,v=t,x(new Error("Abort request")),"function"==typeof m&&m(t)};const x=e=>{if(k.onerror=null,k.onreadystatechange=null,_&&clearTimeout(_),_&&k.readyState!==dt||b)try{k.abort()}catch(e){}if(!b)if(p>0){const n=l(e,k);if("boolean"!=typeof n||n||w(),b)return;ht(Object.assign({},t,{onSetup:({abort:t})=>{w=e=>t(e),b&&t(v)},retries:p-1}))}else w=at.a,a(e,k)},k=new u;try{k.open(e,n,i)}catch(S){return void x(S)}let _;if(k.responseType=o,k.withCredentials=Boolean(g),ct(h,(t,e)=>{try{k.setRequestHeader(e,t)}catch(S){}}),f>0&&isFinite(f)&&(_=window.setTimeout(()=>{x(new Error(`Request timeout, ${n}`))},f)),k.onerror=x,k.onreadystatechange=()=>{if(k.readyState===dt){const{status:t}=k;d(t)?(w=at.a,clearTimeout(_),c(k)):x(new Error(`Invalid request status ${t}, ${n}`))}},!("function"==typeof y&&(y({abort:t=>w(t)}),b)||(s(k,t),b)))try{k.send(r)}catch(S){x(S)}}function ut(t){const e={};return t.forEach(([t,n])=>{e[t]=n}),e}function pt(t){return"function"==typeof Object.entries?Object.entries(t):d(t).map(e=>[e,t[e]])}const ft=z();const gt=(t=>E(t.navigator.sendBeacon))(window);class mt{constructor(t){this.cache=t}get(t){return this.cache[t]}has(t){return t in this.cache}set(t,e){this.cache[t]=e}}const yt=(t,e=(t=>t),n=new mt({}))=>(function(){const i=e.apply(this,arguments);if(n.has(i))return n.get(i);const r=t.apply(this,arguments);return n.set(i,r),r}),vt=document.createElement("a");yt(t=>{const e=bt(t);return Object.assign({},e)});function bt(t){vt.href=t;let e=vt.pathname||"";"/"!==e.charAt(0)&&(e=`/${e}`);const n=(vt.search||"")+(vt.hash||""),i=t.lastIndexOf(n),r=-1===i?t:t.slice(0,i),o=vt.protocol&&/^[a-z]+:/i.test(vt.protocol)?vt.protocol:"";return{originalPath:r,href:vt.href,protocol:o,host:vt.host,hostname:vt.hostname,port:vt.port,pathname:e,search:vt.search,hash:vt.hash}}function wt(t,e=!1){if(e){const e=t.originalPath,n="/"===t.pathname&&"/"!==e[e.length-1];return`${t.originalPath}${n?"/":""}${t.search}${t.hash}`}const n="443"===t.port||"80"===t.port?t.hostname:t.host;return`${t.protocol}//${n}${t.pathname}${t.search}${t.hash}`}const xt=t=>{try{return decodeURIComponent(t)}catch(e){return t}};function kt(t){const e={},n=t.replace(/^\?+/,"").split("&");for(let i=0;i<n.length;i++){const t=n[i].indexOf("=");let r,o;if(-1===t?(r=n[i],o=""):(r=n[i].slice(0,t),o=n[i].slice(t+1)),r){const t=Boolean(/(\[\])$/.exec(r));r=r.replace(/\[\]$/,""),t?void 0===e[r]?e[r]=[xt(o)]:e[r]=[].concat(e[r],xt(o)):e[r]=xt(o)}}return e}const _t=(t,e)=>e.map(e=>`${t}[]=${encodeURIComponent(e)}`).join("&");function St(t){const e=[];for(const n in t)if(t.hasOwnProperty(n)){const i=t[n];X(i)?e.push(_t(n,i)):void 0!==i&&e.push(`${n}=${encodeURIComponent(i)}`)}return`?${e.join("&")}`}function Ot(t,e,{override:n=!0,saveOriginalPath:i=!1}={}){const r=bt(t),o=kt(r.search);ct(e,(t,e)=>{(void 0===o[e]||n)&&(o[e]=t)});const s=St(o);return wt(Object.assign({},r,{search:s}),i)}const Ct=64,$t="https://an.yandex.ru/jstracer",Pt="https://jstracer.yandex.ru/jstracer",Et="https://strm.yandex.ru/log",jt="_$".split("").reverse().join(""),Rt=t=>`_$invalid_${t}${jt}`,At={sensorName:Rt("sensor_name"),labelKey:Rt("label_key"),labelValue:Rt("label_value")};var Tt;!function(t){t.event="event",t.error="error",t.deprecated="deprecated",t.warning="warning",t.value="value",t.values="values"}(Tt||(Tt={}));const Nt=n(15),It=({eventType:t,eventName:e,value:n,values:i})=>{const r={};return ct(i,(n,i)=>{r[`${t}_${e}_${i}`]=n}),Object.assign({[`${t}_${e}`]:n},r)},Mt=/^\w(\-|_|:|\s|\.|\w){1,20}$/,Lt=/^\w(\-|_|:|\s|\.|\w){0,70}$/,Bt=/^\w(\-|_|:|\s|\.|\w){1,70}$/,{topAncestor:Dt,ancestorOrigins:zt}=function(t){if(!J)return{topAncestor:void 0,ancestorOrigins:void 0};const e=p(t.location.ancestorOrigins);return{topAncestor:e.length?e[e.length-1]:void 0,ancestorOrigins:e}}(window);class Vt{constructor(t){this.rootFields={},this.labels={},this.event=({name:t,data:e,labels:n,probability:i,extraRootFields:r})=>{this.push({eventType:Tt.event,eventName:t,data:e,additionalStatsLabels:n,probability:i,extraRootFields:r})},this.error=({error:t,labels:e,probability:n,extraRootFields:i})=>{const r=new a(t);this.push({eventName:String(r.code),eventType:Tt.error,data:r,additionalStatsLabels:e,probability:n,extraRootFields:i})},this.value=({name:t,value:e,data:n,labels:i,probability:r,extraRootFields:o})=>{this.push({eventName:t,value:e,eventType:Tt.value,data:n,additionalStatsLabels:i,probability:r,extraRootFields:o})},this.values=({name:t,values:e,data:n,labels:i,probability:r,extraRootFields:o})=>{this.push({eventName:t,eventType:Tt.values,data:n,additionalStatsLabels:i,probability:r,values:e,extraRootFields:o})},this.warning=({name:t,message:e,probability:n,extraRootFields:i})=>{Object(f.a)(console)&&Object(y.a)(console.warn)&&console.warn(e),this.push({eventName:t,eventType:Tt.warning,data:{message:e},probability:n,extraRootFields:i})},this.getParams=()=>Object.assign({},this.params),this.setRootFields=t=>{pt(t).forEach(([t,e])=>{void 0===e?delete this.rootFields[t]:this.rootFields[t]=e})},this.setLabels=t=>{pt(t).forEach(([t,e])=>{void 0===e?delete this.labels[t]:this.labels[t]=e})},this.eventToStats=(t,e,n,i)=>{this.push({eventType:Tt.event,eventName:t,data:e,additionalStatsLabels:n,extraRootFields:i})},this.errorToStats=(t,e,n)=>{const i=new a(t);this.push({eventName:String(i.code),eventType:Tt.error,data:i,additionalStatsLabels:e,extraRootFields:n})},this.deprecated=(t,e)=>{Object(f.a)(console)&&Object(y.a)(console.warn)&&console.warn(e),this.push({eventName:t,eventType:Tt.deprecated,data:{message:e}})},this.valueToStats=(t,e,n,i)=>{this.push({eventName:t,value:e,eventType:Tt.value,data:n,additionalStatsLabels:i})},this.statsErrorToStats=(t,e)=>{const n=new a(t);this.push({eventName:String(n.code),eventType:Tt.error,data:n,additionalStatsLabels:e,isErrorFromStats:!0})},this.params=Object.assign({},t,{sid:t.sid||it(Ct)}),this.logUrl=Vt.getLogUrl(t),this.isStrmLogUrl=this.logUrl===Et}static getLogUrl(t){return t.logUrl?t.logUrl:!0===t.useAlias?Pt:$t}push({eventName:t,eventType:e,data:n={},additionalStatsLabels:i,value:r=1,probability:o=1,values:s={},isErrorFromStats:a=!1,extraRootFields:c}){if(!function(t,e,n,i=!1){const r=(i?z():ft)<t,o=r?e:n;return"function"==typeof o&&o(),r}(o))return;const{service:l,version:d}=this.params,h={service:l,version:d,data:n,eventName:t,eventType:e,additionalStatsLabels:i,value:r,values:s};let u=this.logUrl;this.params.sendOnlyPrimaryParams||(u=Ot(this.logUrl,Object.assign({[l]:d,[e]:t},i)));try{const n=this.createFullStatsObject(h,c);this.isStrmLogUrl&&(n.routeToJSTracer=!0),this.sendData(u,Nt(n))}catch(p){a||Ft.statsErrorToStats(p,{service:l}),"undefined"!=typeof console&&"function"==typeof console.error&&console.error(`Cannot send stats data [${JSON.stringify({service:l,version:d,eventType:e,eventName:t})}]`)}}sendData(t,e){if(this.params.useSendBeacon){if(function(t,e){return!!gt&&window.navigator.sendBeacon(t,e)}(t,e))return}ht({url:t,data:e,method:"POST",onBeforeSend:this.params.onBeforeSend})}createFullStatsObject(t,e){const{service:n,version:i,eventName:r,eventType:o,data:s,additionalStatsLabels:a,value:l}=t,d=(this.params.createTagsFunction||It)(t),h=Object.assign({},this.labels,a,{version:this.params.version}),u={service:n,tags:ut(pt(d).map(([t,e])=>Bt.test(t)?[t,e]:[At.sensorName,e])),labels:ut(pt(h).map(([t,e])=>{let n=t,i=e;return Mt.test(n)||(n=At.labelKey),Lt.test(i)||(i=At.labelValue),[n,i]}))},{location:p,referrer:f}=nt(document);return Object.assign({},e,this.rootFields,u,{timestamp:Date.now(),eventType:o,eventName:r,data:s,sid:this.params.sid,version:i,location:c(window),topLocation:p,topAncestor:Dt,ancestorOrigins:zt,documentIsVisible:Y(document),referrer:window.document.referrer,topReferrer:f,currentScriptSrc:Z,secureIFrame:st,isVideoADB:Object(y.a)(W),value:l,rnd:ft})}}const Ft=new Vt({service:"CommonPcode",version:"0",sid:it(Ct)});["//yasta","tic.net/pcode-nat","ive-bundles"].join("");function Ut(){const t=function(){if(!window.yaads)return;return window.yaads}();if(t&&void 0!==t.version)return t}const Wt=yt(()=>{return 311});const Ht=new Vt({service:"pcode_native_error",version:Wt().toString(),sid:U()});function Yt(t){return function(t,e){const n={};return d(t).forEach(i=>{n[i]=e(t[i],i)}),n}(Object.assign({widget_ver:Wt().toString(),widget_pf:"no",bundle:"widget"},t),t=>void 0===t||""===t?"-":t)}function qt(t,e,n){try{const r=new a(t,{code:e,type:"ERROR",href:c(window),details:n});Ht.error({error:r,labels:Yt()})}catch(i){}}const Gt=(t,e=window)=>{let n;return{promise:new Promise((i,r)=>{const o=e.setTimeout(r,t);n=()=>{e.clearTimeout(o),i()}}),stop:n}};const Qt=(t,e,n)=>{for(let i=0;i<t.length;i++)e.call(n,t[i],i,t)},Xt=(t,e,n)=>{const i=new Array(t.length);for(let r=0;r<t.length;r++)i[r]=e.call(n,t[r],r,t);return i};function Jt(t){const e=[];for(const[n,i]of t){const t=Kt(i,n);e.push(t)}return function(t){if(t.length>53)throw new Error("bitUtils.toDecimal: больше 53 бит не поддерживается из-за ограниченной точности, но передана строка длиной "+t.length+" бит.");return parseInt(t,2)}(e.reverse().join(""))}function Kt(t,e){return Zt(function(t,e){return Number(t)&Math.pow(2,e)-1}(t,e).toString(2),e)}function Zt(t,e){return function(t,e,n=" "){const i=e-t.length;if(i>0){let e=n;for(;e.length<i;)e+=e;return(e.length>i?e.substr(0,i):e)+t}return t}(t,e,"0")}const te=n(20);class ee{constructor(t={}){this.props={},this.setProps(Object.assign({},this.defaults(),t))}static sliceBits(t,e,n){return function(t,e,n){const i=e+n,r=Zt(t.toString(2),i).substr(-i,n);return parseInt(r,2)}(t,e,n)}defaults(){return{}}toString(){return this.serialize().toString()}setProps(t){return te(t)&&Qt(this.getTemplate(),([,e])=>{e&&t.hasOwnProperty(e)&&(this.props[e]=t[e])},this),this}getProps(){return Object.assign({},this.props)}clone(){return new(0,this.constructor)(this.props)}serialize(){var t,e;return Jt((t=this.getTemplate(),e=this.props,Xt(t,([t,n])=>[t,n&&e[n]||null])))}slice(t,e){return ee.sliceBits(this.serialize(),t,e)}}const ne={DIRECT:1,RTB:2,PERFORMANCE:3,DISTRIBUTION:4,ADFOX:5,WIDGET:13,OLD_BUILD:14,LONG_SESSION:15};class ie extends ee{getTemplate(){return[[4,"marker"],[6,"format"],[4,null],[1,"isRefresh"],[1,"emptyLoaderTesttag"],[1,"isIframe"],[1,"isHover"],[10,"loaderVer"],[2,"preloadExp"],[7,null],[1,null],[1,null],[10,"codeVer"],[1,"adblock"],[3,"polyfill"]]}defaults(){return{marker:ne.WIDGET,adblock:!1,isIframe:(t=window,t.top!==t.self)};var t}}const re=/z-index\s*:\s*(\d+)/gm,oe=/((^|[\s\n\t.,+~>}])((grid|grid-row|grid-item|unit-wrapper|ya-grid-template|ya-unit-wrapper)[\s\n\t.,+~>:{\[(][^}]*))(z-index\s*:\s*-?\d+;?)/gm,se=999;function ae(t){let e=function(t){const e=[],n=t.replace(/ya-ad-(age|warning)/gm,t=>(e.push(t),"replacedByCssSanitizer"));e.length&&qt(new Error("Из шаблона удалены селекторы дисклеймеров"),"cssSanitizer",{replacedClasses:e});return n}(t);return function(t){const e=[];let n=re.exec(t);for(;null!==n;){const i=n[1];i&&e.push(parseInt(i,10)),n=re.exec(t)}if(e.sort((t,e)=>t-e),!e.length||e[e.length-1]<se)return t;const i=e.reduce((t,e,n)=>(t[e]=(n+1).toString(),t),{}),r=t.replace(re,t=>{const e=t.split(":")[1].trim();return`z-index: ${i[e.toString()]}`});return qt(new Error("Шаблон содержит элементы, потенциально закрывающие дисклеймер (z-index > 999)"),"cssSanitizer"),r}(e=function(t){if(!oe.test(t))return t;return qt(new Error("Запрещено назначение свойства z-index для группы объявлений"),"cssSanitizer"),t.replace(oe,"$1")}(e))}function ce(t){return t}function le(t,e,n){const i=[],{seatbid:r=[]}=t||{};return r.forEach(t=>{const{bid:r,directPositions:o,imptrackers:s}=t,a=X(r)?r:[],c=X(o)?o:[];a.forEach((t,r)=>{const o=function(t,e,n,i,r){if(!t.id)return;const o=t.adm.native||{},{beacon:s,rendertracker:a,category:c,ts:l,age:d,warning:h,abuseUrl:u}=o.ext||{beacon:void 0,rendertracker:void 0,category:void 0,ts:void 0,age:void 0,warning:void 0,abuseUrl:void 0},p=o.imptrackers||[],f={"test-tag":n.toString(),"stat-id":r},g=t=>ce(Ot(t,f)),m={id:t.id,link:e?g(o.link):o.link,imptrackers:e?p.map(g):p.map(ce),adsImptrackers:i?i.map(g):void 0,rendertracker:ce(a),beacon:ce(s),abuseUrl:u,category:c,age:d,warning:h,ad:e,date:l&&new Date(1e3*parseInt(String(l),10))||void 0,images:[]},{assets:y=[]}=o;return y.forEach(t=>{const e=t.ext&&parseInt(t.ext.type,10)||void 0;if(t.title&&t.title.value)m.title=t.title.value;else if(2===e&&t.data&&t.data.value)m.desc=t.data.value;else if(11===e&&t.data&&t.data.value)m.domain=t.data.value;else if(6===e&&t.data&&t.data.value)m.oldPrice=parseInt(t.data.value,10);else if(7===e&&t.data&&t.data.value)m.price=parseInt(t.data.value,10);else if(8===e&&t.data&&t.data.value)m.phone=t.data.value;else if(9===e&&t.data&&t.data.value)m.address=t.data.value;else if(t.img&&t.img.url){const{w:e,h:n,url:i}=t.img,r=[parseInt(e,10),parseInt(n,10),i,null],o=t.img["smart-centers"];if(X(o)){const t=o.map(t=>(function(t){let e=!0;const n=t=>{const n="string"==typeof t?parseInt(t,10):t;return(void 0===n||isNaN(n))&&(e=!1),n||0},i={x:n(t.x),y:n(t.y),w:n(t.w),h:n(t.h)};return e?i:null})(t)).filter(t=>null!==t);t&&t.length>0&&(r[3]=t)}m.images.push(r)}}),m}(t,c.indexOf(r+1)>=0,e,s,n);o&&i.push(o)})}),i}var de;function he(t,e){return t.name?t:t[e]}function ue(t,e){const n=he(t,e);if(n&&"grid"===n.name){return d(n.props||{}).length>0?de.GRID_PROPS:de.GRID_TEMPLATE}return de.UNKNOWN}!function(t){t[t.GRID_PROPS=0]="GRID_PROPS",t[t.GRID_TEMPLATE=1]="GRID_TEMPLATE",t[t.UNKNOWN=63]="UNKNOWN"}(de||(de={}));const pe=(t,e)=>{if(!t)return;const n="click"===e?"clickYrwSessionID":"renderYrwSessionID";$(window,{adSessionID:U(),[n]:t})};let fe;const ge=(t=window)=>(fe||(fe=t.document.createElement("div")),fe);"boolean"==typeof __test__&&!0===__test__&&(ge.__RESET_TEST_DIV_=()=>{fe=void 0});const me=n(22),ye=ge(window),ve=(t,e)=>{const n=void 0!==ye.style[t];if(n&&e&&me(e))try{ye.style.cssText=`${t}: ${e};`;const n=Boolean(ye.style.cssText);return ye.style.cssText="",n}catch(i){return!1}return n};var be=n(7);const we={};const xe=(t="")=>we[t]||function(t){const e=`${t[0].toUpperCase()}${t.slice(1)}`;for(let n=0;n<be.b.length;n++){const i=be.b[n],r=i?`${i}${e}`:t;if(ve(r))return we[t]=r}return we[t]=t}(t);function ke(t,e){const n=t.style;for(const i in e)if(e.hasOwnProperty(i)){n[xe(i)]=e[i]}}var _e,Se=n(3);!function(t){t[t.doNotMatch=0]="doNotMatch",t[t.image=1]="image",t[t.refresh=2]="refresh",t[t.all=3]="all",t[t.scrumble=4]="scrumble"}(_e||(_e={}));const Oe="__ADB_CONFIG__",Ce={pid:"",encode:{key:""},replaceClasses:[],detect:{links:[],custom:[],iframes:[]},cookieMatching:{publisherTag:"",publisherKey:"",types:[],type:_e.doNotMatch,redirectUrl:["//an.yand","ex.ru/map","uid/"].join(""),imageUrl:"/static/img/logo.gif/",cryptedUidUrl:"https://http-check-headers.yandex.ru",cryptedUidCookie:"crookie",cryptedUidTTL:336},cookieTTL:336,extuidCookies:[],debug:!1,force:!1,disableShadow:!1,forcecry:{enabled:!1,expires:0,percent:0},treeProtection:{enabled:!1}};const $e="string"==typeof Oe?Ce:Oe;function Pe(t){return!!Boolean(t)&&(Object(y.a)(t.encodeCSS)&&Object(y.a)(t.encodeUrl)&&Object(y.a)(t.decodeUrl)&&Object(y.a)(t.isEncodedUrl))}function Ee(t){const e=t.document;let n=e.getElementsByTagName("head")[0];return n||(n=e.createElement("head"),e.documentElement.appendChild(n)),n}function je(t){const e=t.win.document.createElement("script");return e.async=!0,t.nonce&&(e.nonce=t.nonce),Object(y.a)(t.onLoad)&&(e.onload=()=>{e.onload=()=>{},Object(y.a)(t.onLoad)&&t.onLoad()}),t.hasCors="boolean"!=typeof t.hasCors||t.hasCors,t.hasCors&&e.setAttribute("crossorigin","anonymous"),e.src=t.src,t.container?t.container.appendChild(e):Ee(t.win).appendChild(e),e}var Re;function Ae(t){if(!t)return;const{parentElement:e}=t;e&&e.removeChild(t)}function Te(t,e){let n=t+z()*(e+1-t);return n=Math.floor(n)}function Ne(t="a",e="z"){const n=Te(t.charCodeAt(0),e.charCodeAt(0));return String.fromCharCode(n)}function Ie(t){const e=[];for(let n=0;n<t;n++)e.push(Ne());return e.join("")}!function(t){t.LOAD_SCRIPT_ERROR="LOAD_SCRIPT_ERROR",t.STATS_SENSOR_NAME_ERROR="STATS_SENSOR_NAME_ERROR",t.STATS_LABEL_KEY_ERROR="STATS_LABEL_KEY_ERROR",t.STATS_LABEL_VALUE_ERROR="STATS_LABEL_VALUE_ERROR"}(Re||(Re={}));const Me=4294967295,Le="yaSafeFrameAsyncCallbacks",Be="host.js",De="host_adb.js",ze=window;ze.yaSafeFrameCallbacksStorage=ze.yaSafeFrameCallbacksStorage||{};const Ve="loader.js",Fe="loader_adb.js",Ue=(We="https://yastatic.net/safeframe/1-1-0/",!!Pe($e.fn)&&$e.fn.isEncodedUrl(We));var We;function He(){const t=Ue?De:Be,e=Ue?Fe:Ve,n="undefined"==typeof __safeframe_version__?`${["https://yastatic",".net/safeframe/1-1-0/"].join("")}${e}`:`${["https://yastatic",`.net/safeframe-bundles/0.${__safeframe_version__}/`].join("")}${t}`;return Ue?function(t){return Pe($e.fn)?$e.fn.encodeUrl(t):t}(n):n}function Ye(t){t.isLoadingSafeframeStarted||(t.isLoadingSafeframeStarted=!0,function(t,e,n,i=!0){je({win:t,src:e,onLoad:n,hasCors:i})}(t,He(),at.a,!Ue))}function qe(t){const e=t[Le]||[];return t[Le]=e,e}function Ge(t,e,n,i=at.a,r=at.a,o=at.a){Ye(t);const s=qe(t),a=n.id instanceof Element?"":n.id,c=function(t,e){return e||t.id||`sf-${Math.floor(Math.random()*Me)+1}`}(e,a);s.push(()=>{t.yaSafeFrameCallbacksStorage=t.yaSafeFrameCallbacksStorage||{},t.yaSafeFrameCallbacksStorage[c]={onError:i,onRender:r,onAction:o},function(t){t.yaSafeFrameCallbacksStorage=t.yaSafeFrameCallbacksStorage||{};const e=t.yaSafeFrameCallbacksStorage;new t.$sf.host.Config({auto:!1,onFailure:(t,n,i)=>{e[t]&&e[t].onError(t,i)},onEndPosRender:(t,n,i)=>{e[t]&&e[t].onRender(t,i)},onPosMsg:(n,i,r)=>{e[n]&&e[n].onAction(i,r),"nuke"===i&&Xe(t,n)}})}(t),function(t,e,n,i){e.id=i;const{html:r,width:o,height:s,basePath:a,nonce:c}=n,l={id:i,html:r,conf:{nonce:c,w:o,h:s,dest:Ue?e:i,protected:n.protected,sandbox:n.sandbox,basePath:a}};n.supports&&(l.conf.supports=n.supports),t.$sf.host.render(l)}(t,e,n,c)})}function Qe(t,e){Ye(t),qe(t).push(()=>{Xe(t,e),t.$sf.host.nuke(e)})}function Xe({yaSafeFrameCallbacksStorage:t},e){delete t[e]}const Je=300,Ke=(t,e={})=>(n,i)=>{let r;const o={portion:void 0!==e.portion?e.portion:0,interval:void 0!==e.interval?e.interval:Je,overlappedPoints:void 0!==e.overlappedPoints?e.overlappedPoints:[[0,0]]},s=t({portion:Math.max(Number.MIN_VALUE,o.portion),interval:o.interval,overlappedPoints:o.overlappedPoints,element:n,callback:b("visibilityObserver",t=>{r!==t&&(r=t,i(t))})});if(!s)throw new Error("visibilityObserver: no strategy");return s.start(),h(()=>s.stop())};class Ze{constructor(t){this.args=t,this.runningCount=0,this.callback=(t,e)=>{const n=t+1;e?n===this.strategies.length?this.args.callback(e):n===this.runningCount&&this.startNext():(this.stopUntil(n),this.args.callback(e))},this.strategies=Object(rt.a)(t.strategyFactories,(t,e)=>t(t=>this.callback(e,t)))}static from(...t){return e=>{const n=[];for(const i of t){let t=()=>null;const r=i(Object.assign({},e,{callback:e=>t(e)}));if(!r)return null;n.push(e=>(t=e,r))}return new Ze({callback:e.callback,strategyFactories:n})}}start(){!this.runningCount&&this.strategies.length&&this.startNext()}stop(){this.stopUntil(0)}startNext(){this.strategies[this.runningCount++].start()}stopUntil(t){for(;this.runningCount>t;)this.strategies[--this.runningCount].stop()}}function tn(t){const{width:e,height:n}=Object(Se.getBoundingClientRect)(t);return e>0&&n>0}const en=(t,e)=>{for(let n=0;n<t.length;n++)if(e(t[n],n,t))return!0;return!1};var nn=n(8);const rn=Object(nn.a)();function on(t,e){if(rn)return!1;const{left:n,right:i,top:r,bottom:o}=Object(Se.getBoundingClientRect)(t),s=i-n,a=o-r;return!en(e,([e,i])=>{const o=n+(s-1)*(1+e)/2,c=r+(a-1)*(1+i)/2,l=document.elementFromPoint(o,c);if(!l||t===l||t.contains(l))return!0;if(Object(y.a)(t.getRootNode)){if(function t(e,n){const i=e.getRootNode();if(!i||!i.host)return!1;if(n.contains(i.host))return!0;return t(i.host,n)}(l,t))return!0;if(function t(e,n){const i=n.getRootNode();if(!i||!i.host)return!1;if(e===i.host)return!0;return t(e,i.host)}(l,t))return!0}return!1})}class sn{constructor(t){this.args=t}start(){this.timer=window.setInterval(b("visibilityObserver",()=>{this.args.callback(this.isVisible())}),this.args.interval)}stop(){window.clearInterval(this.timer)}}const{isInViewport:an}=n(10);class cn extends sn{static factory(t){return t.element?new cn(t):null}isVisible(){const{element:t,portion:e,overlappedPoints:n}=this.args;return tn(t)&&an(t,e)&&!on(t,n)}}function ln(){this.returnValue=!1}function dn(){this.cancelBubble=!0}function hn(t){return function(e){const n=function(t){return t.stopPropagation||(t.stopPropagation=dn),t.preventDefault||(t.preventDefault=ln),t.target||(t.target=t.srcElement),t}(e);t.call(this,n)}}let un=function(t,e,n){t.attachEvent("on"+e,n)},pn=function(t,e,n){t.detachEvent("on"+e,n)};G(document,"addEventListener")&&(un=function(t,e,n,i){G(t,"addEventListener").call(t,e,n,i)},pn=function(t,e,n,i){G(t,"removeEventListener").call(t,e,n,i)});let fn=!1,gn=!1,mn=!1;try{if(((t=window)=>{const e=t.Object;try{const t={};return e.defineProperty(t,"sentinel",{}),"sentinel"in t}catch(n){return!1}})()){const t=document.createElement("div"),e={};Object.defineProperty(e,"once",{get:()=>fn=!0}),Object.defineProperty(e,"passive",{get:()=>gn=!0}),Object.defineProperty(e,"capture",{get:()=>mn=!0}),un(t,"click",at.a,e)}}catch(Oa){}function yn(t,e,n,i,r){if(!t||!n)return null;let o=hn(b("handler:"+e,n,i));const s={un(){pn(t,e,o)}};var a;return r&&r.once&&!fn&&(a=o,o=function(t){a.call(this,t),vn(s)}),un(t,e,o,gn?r:r&&r.capture),s}function vn(t){t&&t.un()}let bn="hidden",wn="visibilitychange";if(!(bn in document)){const t=["webkit","moz","ms","o"];for(const e of t){const t=`${e}Hidden`;if(t in document){bn=t,wn=`${e}visibilitychange`;break}}}const xn=new class{constructor(t=window){this.windowObj=t,this.initYaBrowserApi()}canUseYaBroApi(){return Boolean(this.yaBroApiInstance&&this.yaBroApiInstance.isInCustoPage)}isPageHiddenYaBroApi(){return!(this.yaBroApiInstance&&this.yaBroApiInstance.pageVisible)}initYaBrowserApi(){this.windowObj.browser&&this.windowObj.browser.BrowserEmbeddedApi&&this.windowObj.browser.BrowserEmbeddedApi.getInstance().then(t=>{this.yaBroApiInstance=t})}};class kn{constructor(t){this.args=t,this.callback=()=>{this.args.callback(!(xn.canUseYaBroApi()?xn.isPageHiddenYaBroApi():Boolean(document[bn])))}}static factory(t){return new kn(t)}start(){this.timer=window.setTimeout(()=>{this.callback(),this.subscription=yn(document,wn,this.callback)})}stop(){window.clearTimeout(this.timer),vn(this.subscription)}}class _n{static factory(){return new _n}start(){}stop(){}}const Sn=Math.pow(2,-149);class On{constructor(t){this.args=t,this.callback=t=>{const e=t[0].intersectionRatio>=this.observer.thresholds[0];this.args.callback(e)};const e=Math.max(Sn,this.args.portion);this.observer=new IntersectionObserver(this.callback,{threshold:e})}static factory(t){return"undefined"==typeof IntersectionObserver?null:"thresholds"in IntersectionObserver.prototype&&t.element?new On(t):null}start(){this.observer.observe(this.args.element)}stop(){this.observer.disconnect()}}var Cn=n(18);class $n{constructor(t){this.args=t,this.onViewableChange=b("MRAID::viewableChange",()=>{const{mraid:t}=this.args;this.check(t.isViewable())},this),this.onExposureChange=b("MRAID::exposureChange",t=>{const{portion:e}=this.args,n=t/100;this.check(n>=e)},this);const{mraid:e}=t,n=e.getVersion();(parseInt(n,10)>=3||e.__PRIV__&&e.__PRIV__.isYaMraid3FeatureSupported&&e.__PRIV__.isYaMraid3FeatureSupported("exposureChange"))&&(this.isSupportExposureChange=!0)}static factory(t){const{element:e}=t;if(!e)return null;const n=Cn.MraidHelpers.getMraid(e);return n?new $n(Object.assign({},t,{mraid:n})):null}start(){const{mraid:t}=this.args;this.isSupportExposureChange?t.addEventListener("exposureChange",this.onExposureChange):(t.addEventListener("viewableChange",this.onViewableChange),setTimeout(this.onViewableChange))}stop(){const{mraid:t}=this.args;this.isSupportExposureChange?t.removeEventListener("exposureChange",this.onExposureChange):t.removeEventListener("viewableChange",this.onViewableChange)}check(t){const{callback:e}=this.args;e(t)}}class Pn extends sn{static factory(t){return t.element?new Pn(t):null}isVisible(){return!on(this.args.element,this.args.overlappedPoints)}}class En{}En.factory=class{static from(...t){return e=>{for(const n of t){const t=n(e);if(t)return t}return null}}}.from($n.factory,Ze.from(kn.factory,On.factory,Pn.factory),Ze.from(kn.factory,cn.factory),_n.factory);var jn=n(13);const Rn=Object(jn.a)();function An(t){const e=new Image;Object(y.a)(t.onLoad)&&yn(e,"load",t.onLoad,t.ctx),Object(y.a)(t.onError)&&yn(e,"error",t.onError,t.ctx),e.src=t.src}const Tn={Metrika:"yandex_metrika_callbacks",Metrika2:"yandex_metrika_callbacks2"},Nn=1,In="https://mc.yandex.ru/metrika/watch.js",Mn="https://d93ih7uy3azjp.cloudfront.net/metrika/watch.js";class Ln{constructor(t,e,n){this.getYa=t,this.needLoadMetrika=e,this.loadMetrika=h(()=>{if(!this.needLoadMetrika||this.win.YA_TURBO_METRIKA)return;je({src:this.getYa().relHostname?Mn:In,win:this.win})}),this.win=n||window,Boolean(t().Metrika)?this.metrikaName="Metrika":Boolean(t().Metrika2)?this.metrikaName="Metrika2":this.metrikaName="tag"===this.win.YA_TURBO_METRIKA?"Metrika2":"Metrika",this.metrikaCallbacksName=Tn[this.metrikaName]}static getInstance(t,e=!0){return this.instance||(this.instance=new Ln(t,e)),this.instance}requestCounter(t,e){this.isLoaded()?e(this.getCounter(t)):(this.loadMetrika(),this.addCallback(()=>{e(this.getCounter(t))}))}getCounter(t){const e="yaCounter"+t.id;return this.win[e]||(this.win[e]=this.createCounter(t)),this.win[e]}isLoaded(){return Boolean(this.getYa()[this.metrikaName])}addCallback(t){this.win[this.metrikaCallbacksName]||(this.win[this.metrikaCallbacksName]=[]),this.win[this.metrikaCallbacksName].push(t)}createCounter(t){const e=this.getYa()[this.metrikaName];if(!e)throw new Error(`metrika counter creation error: ${this.metrikaName} is not in context`);try{return new e({id:t.id,type:t.isYAN?Nn:void 0,defer:!0,nck:!t.enableCookies})}catch(n){throw new Error("metrika counter creation error: "+n.message)}}}const Bn=new WeakMap,Dn=t=>(...e)=>{const n=t(...e);return Bn.set(n,!0),n},zn=t=>"function"==typeof t&&Bn.has(t),Vn=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,Fn=(t,e,n=null,i=null)=>{let r=e;for(;r!==n;){const e=r.nextSibling;t.insertBefore(r,i),r=e}},Un=(t,e,n=null)=>{let i=e;for(;i!==n;){const e=i.nextSibling;t.removeChild(i),i=e}},Wn={},Hn=`{{lit-${String(Math.random()).slice(2)}}}`,Yn=`\x3c!--${Hn}--\x3e`,qn=new RegExp(`${Hn}|${Yn}`),Gn="$lit$";class Qn{constructor(t,e){this.parts=[],this.element=e;let n=-1,i=0;const r=[],o=e=>{const s=e.content,a=document.createTreeWalker(s,133,null,!1);let c,l;for(;a.nextNode();){n++,c=l;const e=l=a.currentNode;if(1===e.nodeType){if(e.hasAttributes()){const r=e.attributes;let o=0;for(let t=0;t<r.length;t++)r[t].value.indexOf(Hn)>=0&&o++;for(;o-- >0;){const r=t.strings[i],o=Kn.exec(r)[2],s=o.toLowerCase()+Gn,a=e.getAttribute(s).split(qn);this.parts.push({type:"attribute",index:n,name:o,strings:a}),e.removeAttribute(s),i+=a.length-1}}"TEMPLATE"===e.tagName&&o(e)}else if(3===e.nodeType){const t=e.nodeValue;if(t.indexOf(Hn)<0)continue;const o=e.parentNode,s=t.split(qn),a=s.length-1;i+=a;for(let i=0;i<a;i++)o.insertBefore(""===s[i]?Jn():document.createTextNode(s[i]),e),this.parts.push({type:"node",index:n++});o.insertBefore(""===s[a]?Jn():document.createTextNode(s[a]),e),r.push(e)}else if(8===e.nodeType)if(e.nodeValue===Hn){const t=e.parentNode,o=e.previousSibling;null===o||o!==c||o.nodeType!==Node.TEXT_NODE?t.insertBefore(Jn(),e):n--,this.parts.push({type:"node",index:n++}),r.push(e),null===e.nextSibling?t.insertBefore(Jn(),e):n--,l=c,i++}else{let t=-1;for(;-1!==(t=e.nodeValue.indexOf(Hn,t+1));)this.parts.push({type:"node",index:-1})}}};o(e);for(const s of r)s.parentNode.removeChild(s)}}const Xn=t=>-1!==t.index,Jn=()=>document.createComment(""),Kn=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;class Zn{constructor(t,e,n){this._parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this._parts)void 0!==n&&n.setValue(t[e]),e++;for(const n of this._parts)void 0!==n&&n.commit()}_clone(){const t=Vn?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=this.template.parts;let n=0,i=0;const r=t=>{const o=document.createTreeWalker(t,133,null,!1);let s=o.nextNode();for(;n<e.length&&null!==s;){const t=e[n];if(Xn(t))if(i===t.index){if("node"===t.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(s),this._parts.push(t)}else this._parts.push(...this.processor.handleAttributeExpressions(s,t.name,t.strings,this.options));n++}else i++,"TEMPLATE"===s.nodeName&&r(s.content),s=o.nextNode();else this._parts.push(void 0),n++}};return r(t),Vn&&(document.adoptNode(t),customElements.upgrade(t)),t}}class ti{constructor(t,e,n,i){this.strings=t,this.values=e,this.type=n,this.processor=i}getHTML(){const t=this.strings.length-1;let e="";for(let n=0;n<t;n++){const t=this.strings[n];let i=!1;e+=t.replace(Kn,(t,e,n,r)=>(i=!0,e+n+Gn+r+Hn)),i||(e+=Yn)}return e+this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}const ei=t=>null===t||!("object"==typeof t||"function"==typeof t);class ni{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let i=0;i<n.length-1;i++)this.parts[i]=this._createPart()}_createPart(){return new ii(this)}_getValue(){const t=this.strings,e=t.length-1;let n="";for(let i=0;i<e;i++){n+=t[i];const e=this.parts[i];if(void 0!==e){const t=e.value;if(null!=t&&(Array.isArray(t)||"string"!=typeof t&&t[Symbol.iterator]))for(const e of t)n+="string"==typeof e?e:String(e);else n+="string"==typeof t?t:String(t)}}return n+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class ii{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===Wn||ei(t)&&t===this.value||(this.value=t,zn(t)||(this.committer.dirty=!0))}commit(){for(;zn(this.value);){const t=this.value;this.value=Wn,t(this)}this.value!==Wn&&this.committer.commit()}}class ri{constructor(t){this.value=void 0,this._pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(Jn()),this.endNode=t.appendChild(Jn())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t._insert(this.startNode=Jn()),t._insert(this.endNode=Jn())}insertAfterPart(t){t._insert(this.startNode=Jn()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this._pendingValue=t}commit(){for(;zn(this._pendingValue);){const t=this._pendingValue;this._pendingValue=Wn,t(this)}const t=this._pendingValue;t!==Wn&&(ei(t)?t!==this.value&&this._commitText(t):t instanceof ti?this._commitTemplateResult(t):t instanceof Node?this._commitNode(t):Array.isArray(t)||t[Symbol.iterator]?this._commitIterable(t):this._commitText(t))}_insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}_commitNode(t){this.value!==t&&(this.clear(),this._insert(t),this.value=t)}_commitText(t){const e=this.startNode.nextSibling;t=null==t?"":t,e===this.endNode.previousSibling&&e.nodeType===Node.TEXT_NODE?e.textContent=t:this._commitNode(document.createTextNode("string"==typeof t?t:String(t))),this.value=t}_commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value&&this.value.template===e)this.value.update(t.values);else{const n=new Zn(e,t.processor,this.options),i=n._clone();n.update(t.values),this._commitNode(i),this.value=n}}_commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,i=0;for(const r of t)void 0===(n=e[i])&&(n=new ri(this.options),e.push(n),0===i?n.appendIntoPart(this):n.insertAfterPart(e[i-1])),n.setValue(r),n.commit(),i++;i<e.length&&(e.length=i,this.clear(n&&n.endNode))}clear(t=this.startNode){Un(this.startNode.parentNode,t.nextSibling,this.endNode)}}class oi{constructor(t,e,n){if(this.value=void 0,this._pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this._pendingValue=t}commit(){for(;zn(this._pendingValue);){const t=this._pendingValue;this._pendingValue=Wn,t(this)}if(this._pendingValue===Wn)return;const t=!!this._pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=t,this._pendingValue=Wn}}class si extends ni{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new ai(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class ai extends ii{}let ci=!1;try{const t={get capture(){return ci=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(Ca){}class li{constructor(t,e,n){this.value=void 0,this._pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n,this._boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this._pendingValue=t}commit(){for(;zn(this._pendingValue);){const t=this._pendingValue;this._pendingValue=Wn,t(this)}if(this._pendingValue===Wn)return;const t=this._pendingValue,e=this.value,n=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||n);n&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),i&&(this._options=di(t),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=t,this._pendingValue=Wn}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const di=t=>t&&(ci?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);const hi=new class{handleAttributeExpressions(t,e,n,i){const r=e[0];if("."===r){return new si(t,e.slice(1),n).parts}return"@"===r?[new li(t,e.slice(1),i.eventContext)]:"?"===r?[new oi(t,e.slice(1),n)]:new ni(t,e,n).parts}handleTextExpression(t){return new ri(t)}};function ui(t){let e=pi.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},pi.set(t.type,e));let n=e.stringsArray.get(t.strings);if(void 0!==n)return n;const i=t.strings.join(Hn);return void 0===(n=e.keyString.get(i))&&(n=new Qn(t,t.getTemplateElement()),e.keyString.set(i,n)),e.stringsArray.set(t.strings,n),n}const pi=new Map,fi=new WeakMap,gi=(t,...e)=>new ti(t,e,"html",hi),mi=NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT|NodeFilter.SHOW_TEXT;function yi(t,e){const{element:{content:n},parts:i}=t,r=document.createTreeWalker(n,mi,null,!1);let o=bi(i),s=i[o],a=-1,c=0;const l=[];let d=null;for(;r.nextNode();){a++;const t=r.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(l.push(t),null===d&&(d=t)),null!==d&&c++;void 0!==s&&s.index===a;)s.index=null!==d?-1:s.index-c,s=i[o=bi(i,o)]}l.forEach(t=>t.parentNode.removeChild(t))}const vi=t=>{let e=t.nodeType===Node.DOCUMENT_FRAGMENT_NODE?0:1;const n=document.createTreeWalker(t,mi,null,!1);for(;n.nextNode();)e++;return e},bi=(t,e=-1)=>{for(let n=e+1;n<t.length;n++){const e=t[n];if(Xn(e))return n}return-1};const wi=(t,e)=>`${t}--${e}`;let xi=!0;void 0===window.ShadyCSS?xi=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),xi=!1);const ki=t=>e=>{const n=wi(e.type,t);let i=pi.get(n);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},pi.set(n,i));let r=i.stringsArray.get(e.strings);if(void 0!==r)return r;const o=e.strings.join(Hn);if(void 0===(r=i.keyString.get(o))){const n=e.getTemplateElement();xi&&window.ShadyCSS.prepareTemplateDom(n,t),r=new Qn(e,n),i.keyString.set(o,r)}return i.stringsArray.set(e.strings,r),r},_i=["html","svg"],Si=new Set,Oi=(t,e,n)=>{Si.add(n);const i=t.querySelectorAll("style");if(0===i.length)return;const r=document.createElement("style");for(let o=0;o<i.length;o++){const t=i[o];t.parentNode.removeChild(t),r.textContent+=t.textContent}if((t=>{_i.forEach(e=>{const n=pi.get(wi(e,t));void 0!==n&&n.keyString.forEach(t=>{const{element:{content:e}}=t,n=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{n.add(t)}),yi(t,n)})})})(n),function(t,e,n=null){const{element:{content:i},parts:r}=t;if(null==n)return void i.appendChild(e);const o=document.createTreeWalker(i,mi,null,!1);let s=bi(r),a=0,c=-1;for(;o.nextNode();){for(c++,o.currentNode===n&&(a=vi(e),n.parentNode.insertBefore(e,n));-1!==s&&r[s].index===c;){if(a>0){for(;-1!==s;)r[s].index+=a,s=bi(r,s);return}s=bi(r,s)}}}(e,r,e.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(e.element,n),window.ShadyCSS.nativeShadow){const n=e.element.content.querySelector("style");t.insertBefore(n.cloneNode(!0),t.firstChild)}else{e.element.content.insertBefore(r,e.element.content.firstChild);const t=new Set;t.add(r),yi(e,t)}},Ci=t=>null!==t,$i=t=>t?"":null,Pi=(t,e)=>e!==t&&(e==e||t==t),Ei={attribute:!0,type:String,reflect:!1,hasChanged:Pi},ji=new Promise(t=>t(!0)),Ri=1,Ai=4,Ti=8;class Ni extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=ji,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this._finalize();const t=[];for(const[e,n]of this._classProperties){const i=this._attributeNameForProperty(e,n);void 0!==i&&(this._attributeToPropertyMap.set(i,e),t.push(i))}return t}static createProperty(t,e=Ei){if(!this.hasOwnProperty("_classProperties")){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}if(this._classProperties.set(t,e),this.prototype.hasOwnProperty(t))return;const n="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[n]},set(i){const r=this[t];this[n]=i,this._requestPropertyUpdate(t,r,e)},configurable:!0,enumerable:!0})}static _finalize(){if(this.hasOwnProperty("_finalized")&&this._finalized)return;const t=Object.getPrototypeOf(this);"function"==typeof t._finalize&&t._finalize(),this._finalized=!0,this._attributeToPropertyMap=new Map;const e=this.properties,n=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const i of n)this.createProperty(i,e[i])}static _attributeNameForProperty(t,e){const n=void 0!==e&&e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,n=Pi){return n(t,e)}static _propertyValueFromAttribute(t,e){const n=e&&e.type;if(void 0===n)return t;const i=n===Boolean?Ci:"function"==typeof n?n:n.fromAttribute;return i?i(t):t}static _propertyValueToAttribute(t,e){if(void 0===e||void 0===e.reflect)return;return(e.type===Boolean?$i:e.type&&e.type.toAttribute||String)(t)}initialize(){this.renderRoot=this.createRenderRoot(),this._saveInstanceProperties()}_saveInstanceProperties(){for(const[t]of this.constructor._classProperties)if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}_applyInstanceProperties(){for(const[t,e]of this._instanceProperties)this[t]=e;this._instanceProperties=void 0}createRenderRoot(){return this.attachShadow({mode:"open"})}connectedCallback(){this._updateState&Ri?void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this):this.requestUpdate()}disconnectedCallback(){}attributeChangedCallback(t,e,n){e!==n&&this._attributeToProperty(t,n)}_propertyToAttribute(t,e,n=Ei){const i=this.constructor,r=i._propertyValueToAttribute(e,n);if(void 0!==r){const e=i._attributeNameForProperty(t,n);void 0!==e&&(this._updateState=this._updateState|Ti,null===r?this.removeAttribute(e):this.setAttribute(e,r),this._updateState=this._updateState&~Ti)}}_attributeToProperty(t,e){if(!(this._updateState&Ti)){const n=this.constructor,i=n._attributeToPropertyMap.get(t);if(void 0!==i){const t=n._classProperties.get(i);this[i]=n._propertyValueFromAttribute(e,t)}}}requestUpdate(t,e){if(void 0!==t){const n=this.constructor._classProperties.get(t)||Ei;return this._requestPropertyUpdate(t,e,n)}return this._invalidate()}_requestPropertyUpdate(t,e,n){return this.constructor._valueHasChanged(this[t],e,n.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0===n.reflect&&(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n)),this._invalidate()):this.updateComplete}async _invalidate(){if(!this._hasRequestedUpdate){let t;this._updateState=this._updateState|Ai;const e=this._updatePromise;this._updatePromise=new Promise(e=>t=e),await e,this._validate(),t(!this._hasRequestedUpdate)}return this.updateComplete}get _hasRequestedUpdate(){return this._updateState&Ai}_validate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const t=this._changedProperties;this.update(t),this._markUpdated(),this._updateState&Ri||(this._updateState=this._updateState|Ri,this.firstUpdated(t)),this.updated(t)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~Ai}get updateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){if(void 0!==this._reflectingProperties&&this._reflectingProperties.size>0){for(const[t,e]of this._reflectingProperties)this._propertyToAttribute(t,this[t],e);this._reflectingProperties=void 0}}updated(t){}firstUpdated(t){}}Ni._attributeToPropertyMap=new Map,Ni._finalized=!0,Ni._classProperties=new Map,Ni.properties={};const Ii=t=>e=>(window.customElements.define(t,e),e),Mi=t=>(e,n)=>{e.constructor.createProperty(n,t)},Li=Bi((t,e)=>t.querySelector(e));Bi((t,e)=>t.querySelectorAll(e));function Bi(t){return e=>(n,i)=>{Object.defineProperty(n,i,{get(){return t(this.renderRoot,e)},enumerable:!0,configurable:!0})}}class Di extends Ni{update(t){super.update(t);const e=this.render();e instanceof ti&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this})}render(){}}function zi(){return window.Ya||(window.Ya={})}Di.render=(t,e,n)=>{const i=n.scopeName,r=fi.has(e),o=e instanceof ShadowRoot&&xi&&t instanceof ti,s=o&&!Si.has(i),a=s?document.createDocumentFragment():e;if(((t,e,n)=>{let i=fi.get(e);void 0===i&&(Un(e,e.firstChild),fi.set(e,i=new ri(Object.assign({templateFactory:ui},n))),i.appendInto(e)),i.setValue(t),i.commit()})(t,a,Object.assign({templateFactory:ki(i)},n)),s){const t=fi.get(a);fi.delete(a),t.value instanceof Zn&&Oi(a,t.value.template,i),Un(e,e.firstChild),e.appendChild(a),fi.set(e,t)}!r&&o&&window.ShadyCSS.styleElement(e.host)};const Vi={NOT_INTERESTING:{"reason-id":3,"action-id":2,description:{large:{1:"Не интересуюсь этой темой",3:"This doesn't interest me",6:"Bununla ilgilenmiyorum"},small:{1:"Не интересуюсь",3:"Not interested",6:"İlgilenmiyorum"}}},ALREADY_BOUGHT:{"reason-id":14,"action-id":2,description:{large:{1:"Товар куплен или услуга найдена",3:"Already found product or service",6:"Hizmeti veya ürünü satın aldım"},small:{1:"Уже купил",3:"Already purchased",6:"Satın aldım"}}},SPAM:{"reason-id":5,"action-id":3,description:{large:{1:"Нарушает закон или спам",3:"Illegal or spam",6:"Yasa ihlali veya spam"},small:{1:"Спам",3:"Spam",6:"Spam"}}},PREVENTS_BROWSING:{"reason-id":9,"action-id":1,description:{large:{1:"Мешает просмотру контента",3:"Interferes with content",6:"İçeriği görüntülemeyi engelliyor"},small:{1:"Мешает",3:"Intrusive",6:"Engelliyor"}}}},Fi={1:"Скрыть рекламу",3:"Hide ad",6:"Reklamları gizle"},Ui={1:"Спасибо, объявление скрыто.",3:"Thank you, this ad is hidden now.",6:"Teşekkürler, reklam kapatıldı."},Wi="//an.yandex.ru",Hi="//an.webvisor.org";function Yi(t,e){const n=Ot(t||"",e||{});return function(){const t=zi();return Boolean(t&&t.relHostname)}()?n.replace(Wi,Hi):n}var qi=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let Gi=class extends Di{constructor(t,e,n){super(),this.sideSize=t,this.onClick=e,this.language=n,this.addEventListener("click",t=>this.onCloseClick(t))}render(){return gi`
            ${this.getStyle()}
            <div class="root">
                <div class="tooltip">${Fi[this.language]}</div><div class="arrow"></div>
                <div class="iconContainer">
                    <div class="iconImage">
                        <svg
                            width="${this.sideSize}px"
                            height="${this.sideSize}px"
                            viewBox="0 0 14 14"
                            style="display: block"
                        >
                            <polygon
                                style="fill: white"
                                points="8.286 7.020 13.663 12.398 12.3984 13.663 7.020 8.286 1.643 13.663 0.377 12.398 5.755 7.020 0.377 1.643 1.643 0.377 7.020 5.755 12.398 0.377 13.663 1.643"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        `}hide(){this.root.classList.add("hidden")}onCloseClick(t){t.stopPropagation(),t.preventDefault(),this.onClick()}getStyle(){const t=10+this.sideSize;return gi`
            <style>
                .root {
                    user-select: none;
                    position: absolute;
                    right: 0;
                    top: 0;
                    z-index: 20;
                    cursor: pointer;
                }
                .hidden {
                    display: none;
                }
                .iconContainer {
                    position: relative;
                    border-radius: 0 0 0 20%;
                    box-sizing: content-box;
                    background-color: rgba(0, 0, 0, 0.25);
                    padding: ${5}px;
                    display: inline-block;
                }
                .iconImage {
                    width: ${this.sideSize};
                    height: ${this.sideSize};
                }
                .tooltip {
                    font-family: Arial, sans-serif;
                    height: ${t}px;
                    line-height: ${t}px;
                    vertical-align: top;
                    display: none;
                    max-width: 160px;
                    font-size: 13px;
                    color: white;
                    background: #333;
                    background-color: rgba(0, 0, 0, 0.8);
                    border-radius: 1px;
                    padding: 0 4px;
                }
                .arrow {
                    width: 0;
                    height: 0;
                    border-style: solid;
                    border-width: 6px 0 6px 6px;
                    border-color: transparent transparent transparent rgba(0, 0, 0, 0.8);
                    display: none;
                    vertical-align: center;
                    position: relative;
                    bottom: ${(10+this.sideSize-12)/2}px;
                    margin-right: 2px;
                }
                .root:hover > .tooltip,
                .root:hover > .arrow {
                    display: inline-block;
                }
            </style>
        `}};qi([Li(".root")],Gi.prototype,"root",void 0),Gi=qi([Ii("ya-adtune-close")],Gi);var Qi=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let Xi=class extends Di{constructor(t,e){super(),this.language=t,this.onAbused=e,this.visible=!1,this.isTextBig=!0,this.actionTypes=["NOT_INTERESTING","ALREADY_BOUGHT","SPAM","PREVENTS_BROWSING"]}render(){return gi`
            ${this.getStyle()}
            <div class="root">
                <div class="slide">
                    <div class="form">
                        <div class="messages">
                            <div class="title">${Fi[this.language]}:</div>
                            <div class="complains-container">
                                <div class="complains complains-large">
                                    ${this.actionTypes.map((t,e)=>this.createAction(t,e))}
                                </div>
                                <div class="abuse-message">
                                    <div class="abuse-icon">${this.renderDoneIcon()}</div>
                                    <div class="abuse-text">${Ui[this.language]}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `}toggleVisiblitiy(){this.visible?this.root.classList.remove("visible"):this.root.classList.add("visible"),this.visible=!this.visible}updated(){const{clientWidth:t,clientHeight:e}=this.root,n=t/e;n<1?this.alignVertical(e):n<5&&e>100?this.alignHorizontal(e):this.alignRow(e,n)}createAction(t,e){return gi`
            <div
                class="complain complain-${e}"
                @click=${e=>this.handleClick(e,t)}
            >
                <span class="complain-text complain-text-large">
                    ${Vi[t].description.large[this.language]}
                </span>
                <span class="complain-text complain-text-short">
                    ${Vi[t].description.small[this.language]}
                </span>
            </div>
        `}isTextFits(){const t=this.root.querySelector(".complain").offsetWidth-10;let e=!0;const n=this.isTextBig?".complain-text-large":".complain-text-short";return this.root.querySelectorAll(n).forEach(n=>{n.offsetWidth>t&&(e=!1)}),e}decreaseText(t=!1){this.isTextBig&&(!t&&this.isTextFits()||(this.isTextBig=!1,this.complains.classList.remove("complains-large"),this.complains.classList.add("complains-short")))}alignVertical(t){for(let e=1;e<4&&this.messages.clientHeight>t;e++)this.messages.classList.add("messages-vertical-size-"+e);this.decreaseText()}alignHorizontal(t){if(this.messages.clientHeight<t)this.decreaseText();else if(this.complains.classList.add("complains-square"),this.decreaseText(),!(this.messages.clientHeight<t&&this.isTextFits()||(this.complains.classList.remove("complains-square"),this.complains.classList.add("complains-row"),this.messages.clientHeight<t&&this.isTextFits())))for(let e=1;e<4&&this.messages.clientHeight>t;e++)this.messages.classList.add("messages-horizontal-size-"+e)}alignRow(t,e){if(this.complains.classList.add("complains-row"),!(this.messages.clientHeight<t||(this.decreaseText(!0),this.messages.clientHeight<t||e>5&&(this.messages.classList.add("messages-row"),this.messages.clientHeight<t))))for(let n=1;n<4&&this.messages.clientHeight>t;n++)this.messages.classList.add("messages-row-size-"+n)}handleClick(t,e){t.stopPropagation(),t.preventDefault(),this.messages.classList.add("messages-abused"),this.onAbused(e,this.isTextBig)}renderDoneIcon(){return gi`
            <svg width="18" height="18">
                <path
                    d="M5.485 11.07L2.45 8.037 1.036 9.45l3.035 3.035-.034.036 1.414 1.415 8.485-8.485-1.414-1.414-7.035 7.035z"
                />
            </svg>
        `}getStyle(){return gi`
            <style>
                .root {
                    font-family: Arial, sans-serif;
                    font-size: 13px;
                    border: solid 1px #cccccc;
                    position: absolute;
                    box-sizing: border-box;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    z-index: -1;
                    transition: z-index 0s linear 0.4s;
                    cursor: default;
                    line-height: 1.25;
                }
                .slide {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    margin-left: 100%;
                    overflow: hidden;
                    transition: margin-left 0.4s ease-out;
                }
                .form {
                    align-items: center;
                    position: absolute;
                    display: flex;
                    width: 100%;
                    height: 100%;
                    background: rgba(255, 255, 255, 0.98);
                    justify-content: center;
                }
                .messages {
                    box-sizing: border-box;
                    padding: 10px;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                }
                .messages-row {
                    flex-direction: row;
                }
                .title {
                    font-weight: bold;
                    text-align: center;
                    padding-bottom: 15px;
                }
                .complains-container {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                }
                .complains {
                    width: 100%;
                    max-width: 250px;
                    display: flex;
                    align-items: stretch;
                    flex-direction: column;
                    align-content: center;
                }
                .complains-square,
                .complains-row {
                    flex-direction: row;
                    flex-wrap: wrap;
                }
                .complains-row {
                    max-width: none;
                    justify-content: center;
                }
                .complains-square .complain {
                    width: 47.5%;
                }
                .complains-square .complain:nth-child(odd) {
                    margin-right: 5%;
                }
                .complains-large .complain-text-short {
                    display: none;
                }
                .complains-short .complain-text-large {
                    display: none;
                }
                .complains-row .complain {
                    width: auto;
                    margin-right: 3%;
                }
                .complain {
                    user-select: none;
                    margin-top: 5px;
                    box-sizing: border-box;
                    width: 100%;
                    padding: ${5}px;
                    background-color: #fff;
                    border: 1px solid #c8c8c8;
                    border-radius: 4px;
                    text-align: center;
                    color: #555;
                    transition-property: border, color;
                    transition-duration: 0.2s;
                }
                .complain-text {
                    white-space: nowrap;
                }
                .complain:hover {
                    color: #333;
                    border-color: #333;
                }
                .root.visible {
                    transition: z-index 0s;
                    z-index: 2;
                }
                .root.visible > .slide {
                    margin-left: 0;
                }

                .abuse-message {
                    display: none;
                }
                .messages-abused .abuse-message {
                    display: flex;
                    align-items: center;
                }
                .messages-abused .complains {
                    display: none;
                }
                .abuse-text {
                    margin-left: 10px;
                }

                .messages-vertical-size-1 {
                    font-size: 12px;
                    padding: 5px;
                }
                .messages-vertical-size-1 .title {
                    padding-bottom: 5px;
                }
                .messages-vertical-size-1 .complain {
                    margin-top: 3px;
                }

                .messages-vertical-size-2 {
                    padding: 3px;
                }
                .messages-vertical-size-2 .title {
                    padding-bottom: 3px;
                }
                .messages-vertical-size-2 .complain {
                    margin-top: 2px;
                }

                .messages-vertical-size-3 {
                    padding: 1px;
                }
                .messages-vertical-size-3 .title {
                    padding-bottom: 1px;
                }
                .messages-vertical-size-3 .complain {
                    margin-top: 1px;
                }

                .messages-horizontal-size-1 {
                    padding: 3px;
                }
                .messages-horizontal-size-1 .title {
                    padding-bottom: 10px;
                }

                .messages-horizontal-size-2 {
                    padding: 1px;
                }
                .messages-horizontal-size-2 .title {
                    padding-bottom: 5px;
                }

                .messages-horizontal-size-3 {
                    font-size: 12px;
                }

                .messages-row-size-1 {
                    padding: 5px;
                }
                .messages-row-size-1 .title {
                    padding-botom: 5px;
                }

                .messages-row-size-2 {
                    padding: 3px;
                    font-size: 12px;
                }
                .messages-row-size-2 .title {
                    padding-bottom: 2px;
                }
                .messages-row-size-2 .complain {
                    padding: 3px;
                }

                .messages-row-size-3 .complain {
                    padding: 1px;
                }
            </style>
        `}};Qi([Li(".root")],Xi.prototype,"root",void 0),Qi([Li(".messages")],Xi.prototype,"messages",void 0),Qi([Li(".complains")],Xi.prototype,"complains",void 0),Xi=Qi([Ii("ya-adtune-feedback")],Xi);var Ji=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};const Ki={type:"inline",verison:function(){const t=Ut();return t&&t.version||0}(),isTouch:Rn,widget:!0};let Zi=class extends Di{constructor(t,e,n){super(),this.language=e,this.abuseUrl=n,this.sideSize=t>75e3?9:8,this.metrikaManager=Ln.getInstance(zi,!0)}render(){return this.adtuneFeedback=new Xi(this.language,(t,e)=>{this.onAdAbused(t,e)}),this.adtuneClose=new Gi(this.sideSize,()=>this.onAdCloseClicked(),this.language),gi`
            ${this.adtuneClose} ${this.adtuneFeedback}
        `}onAdCloseClicked(){this.adtuneFeedback.toggleVisiblitiy();this.metrikaManager.requestCounter({id:22596877},t=>{t.hit(window.location.href,{params:Ki})})}onAdAbused(t,e){this.adtuneClose.hide();const n={"reason-id":Vi[t]["reason-id"]+"","action-id":Vi[t]["action-id"]+""};An({src:Yi(this.abuseUrl,n)}),this.sendMetrikaAbused(t,e)}sendMetrikaAbused(t,e){this.metrikaManager.requestCounter({id:22596877},n=>{const i=e?"large":"small",r=Object.assign({},Ki,{blockType:i,optionId:`${Vi[t]["reason-id"]}-${Vi[t]["action-id"]}`,optionText:Vi[t].description[i][this.language]});n.reachGoal("send",r)})}};Zi=Ji([Ii("ya-adtune")],Zi);const tr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=";function er(t){return function(t){const e=[];let n=0;for(;n<t.length;){const i=t.charCodeAt(n);if(i<128)e.push(String.fromCharCode(i)),n++;else if(i>191&&i<224){const r=t.charCodeAt(n+1);e.push(String.fromCharCode((31&i)<<6|63&r)),n+=2}else{const r=t.charCodeAt(n+1),o=t.charCodeAt(n+2);e.push(String.fromCharCode((15&i)<<12|(63&r)<<6|63&o)),n+=3}}return e.join("")}(function(t){const e=[];let n=0;t=t.replace(/[^A-Za-z0-9\-_=]/g,"");for(;n<t.length;){const i=tr.indexOf(t.charAt(n++)),r=tr.indexOf(t.charAt(n++)),o=tr.indexOf(t.charAt(n++)),s=tr.indexOf(t.charAt(n++)),a=i<<2|r>>4,c=(15&r)<<4|o>>2,l=(3&o)<<6|s;e.push(String.fromCharCode(a)),64!==o&&e.push(String.fromCharCode(c)),64!==s&&e.push(String.fromCharCode(l))}return e.join("")}(t))}class nr{constructor(t,e){if(!t.rtb.html&&!t.rtb.url)throw new Error("Meta resource has not url and html");this.isHtml5=Boolean(t.rtb.html5),this.width=parseInt(t.rtb.width||"",10)||0,this.height=parseInt(t.rtb.height||"",10)||0,this.html=t.rtb.html?er(t.rtb.html):"",this.url=t.rtb.url||"",this.basePath=this.isHtml5?t.rtb.basePath:void 0,this.isAdaptive=Boolean(Number(t.rtb.flexible)),this.useSafeframe=Boolean(this.html),this.cssWidth=this.width?this.width+"px":"100%",this.cssHeight=this.height+"px",this.abuseUrl=t.rtb.abuseLink||"",this.lang=t.common&&t.common.pageLang||"1";const n=e.split("-");this.settings=t.settings[n[n.length-1]]}}var ir=n(10);class rr{constructor(t){this.args=t,this.stopObserver=at.a,this.isConfirmed=!1,this.confirmTimeoutId=null,this.onChange=t=>this.check(t),this.start()}static factory(t,e,n){const i={element:t,onConfirm:e,observer:Ke(n.factory,n.factoryOptions),onVisibilityChange:n.onVisibilityChange,preventStop:n.preventStop,delay:n.delay};return new rr(i)}start(){this.stopObserver=this.args.observer(this.args.element,this.onChange)}stop(t=!1){this.cancelConfirmSchedule(),this.args.preventStop&&!t||this.stopObserver()}confirm(){this.isConfirmed||(this.isConfirmed=!0,this.stop(),this.args.onConfirm())}check(t){this.args.onVisibilityChange&&this.args.onVisibilityChange(t),this.isConfirmed||(t?this.scheduleConfirm():this.cancelConfirmSchedule())}scheduleConfirm(){this.args.delay?null===this.confirmTimeoutId&&(this.confirmTimeoutId=setTimeout(()=>this.confirm(),this.args.delay)):this.confirm()}cancelConfirmSchedule(){null!==this.confirmTimeoutId&&(clearTimeout(this.confirmTimeoutId),this.confirmTimeoutId=null)}}function or(t){for(let e=0;e<t.length;e++)(new Image).src=t[e]}function sr(t,e){const n=["<scr",'ipt>"use strict";(',or,')(["',t.join('","'),'"])</scr',"ipt>"].join("");return new Promise((t,i)=>{!function(t){const e=document.createElement("div");document.body.appendChild(e),e.style.position="fixed",e.style.left="-99px";const n=document.createElement("div");e.appendChild(n);const i=it(10),r={nonce:t.nonce,width:1,height:1,html:t.html,id:i},o=h(()=>{Qe(window,i),Ae(e)}),s=()=>{setTimeout(o,t.wait)};Ge(window,n,r,()=>{Object(y.a)(t.onError)&&t.onError(),s()},()=>{Object(y.a)(t.onLoad)&&t.onLoad(),s()},(e,n)=>{t.onAction(e,n)})}({nonce:e,onAction:(t,e)=>{"error"===t&&qt(new Error(e),"confirm.html")},onLoad:t,onError:i,html:n,wait:5e3})})}class ar{constructor(t){this.confirmRendered=h(()=>{this.params.winNotice&&sr([this.params.winNotice],this.nonce)}),this.confirm=h(()=>{if(this.isConfirmSent=!0,this.params.container.removeEventListener("mouseover",this.onMouseOverConfirmer),this.visibilityConfirmer.stop(),!this.params.linkTail)return;const t=this.getAuxProps(),e=this.getConfirmUrl(t);this.params.viewNotices&&this.params.viewNotices.length?sr(this.params.viewNotices,this.nonce).then(()=>{An({src:e})},()=>{qt(new Error("View notices load error"),"RTB_visibility_manager_error")}):An({src:e})}),this.isVisible=!1,this.params=Object.assign({},t,{nonce:t.nonce||""});const e=Ke(En.factory,{portion:t.portion});this.visibilityConfirmer=new rr({element:t.container,observer:e,delay:this.params.visibilityTimeout,onVisibilityChange:t=>this.onVisibilityChanged(t),onConfirm:()=>this.confirm()}),this.onMouseOverConfirmer=()=>this.confirm(),this.params.container.addEventListener("mouseover",this.onMouseOverConfirmer)}getIsVisible(){return this.isVisible}getWasVisible(){return this.isConfirmSent}destroy(){this.visibilityConfirmer&&this.visibilityConfirmer.stop(),this.params.container.removeEventListener("mouseover",this.onMouseOverConfirmer)}onVisibilityChanged(t){this.confirmTimeStart=t?this.confirmTimeStart||performance.now():0}getAuxProps(){let t=-1;this.confirmTimeStart&&(t=performance.now()-this.confirmTimeStart,t=Math.round(1e3*t));let e=Number(Object(ir.getRatioInViewport)(this.params.container));return e=Math.round(1e6*e),{testtagProps:(new ie).getProps(),renderSize:(n=this.params.container,{width:n.clientWidth,height:n.clientHeight}),extParams:{confirmTime:t+"",confirmRatio:e+""}};var n}getConfirmUrl(t){const{testtagProps:e,renderSize:n,extParams:i}=t,r=new ie(e),o=Object.assign({},i,{"test-tag":r.toString(),rnd:Te(1e12,1e13)+""});return n&&(o.renderWidth=n.width+"",o.renderHeight=n.height+""),Yi(this.params.linkTail,o)}}const cr=242500,lr=.3,dr=.5,hr={position:"relative",margin:"0",display:"flex","justify-content":"flex-start","align-items":"center",overflow:"hidden"},ur={position:"relative",top:"0",left:"0"},pr=(t,e,n)=>{const i=document.createElement(t);return ke(i,e),n&&n.appendChild(i),i};class fr{constructor(t,e,n,i){this.container=e,this.nonce=i,this.destroyed=!1,this.wasRendered=!1,this.mediaData=new nr(t,n),this.initialSizes=Object(Se.getBoundingClientRect)(e)}destroy(){this.destroyed||(this.destroyed=!0,clearTimeout(this.visibilityInterval),this.iframe||Qe(window,this.container.id),this.visibilityManager&&this.visibilityManager.destroy(),this.stopVisibilityObserver&&this.stopVisibilityObserver(),this.root.remove())}getState(){const{visibilityManager:t}=this,e=Boolean(t&&t.getIsVisible()),n=Boolean(t&&t.getWasVisible()),i=this.destroyed||this.root&&this.root.parentElement!==this.container;return i&&this.destroy(),{isWidget:!1,isVisibleNow:e,wasVisible:n,disconnected:i,wasRendered:this.wasRendered}}render(){const{cssWidth:t,cssHeight:e,useSafeframe:n}=this.mediaData;this.root=pr("div",hr),this.body=pr("div",Object.assign({width:t,height:e},ur),this.root),this.body.id=it(12),n||(this.iframe=pr("iframe",{width:"100%",height:"100%"},this.body),this.iframe.scrolling="no",this.iframe.marginWidth="0",this.iframe.marginHeight="0",this.iframe.frameBorder="0"),this.container.appendChild(this.root),this.initFrames()}getVisibilityTimeout(){if(this.mediaData.settings&&void 0!==this.mediaData.settings.exposureTimeout){const t=parseInt(this.mediaData.settings.exposureTimeout,10);if(!isNaN(t))return t}return 7*Je}initVisibilityManager(){const{settings:t}=this.mediaData;let e=[];t&&t.viewNotices&&t.viewNotices.length&&(e=e.concat(t.viewNotices)),t&&"string"==typeof t.viewNotice&&""!==t.viewNotice&&e.push(t.viewNotice),e=(e=function(t){const e={};for(let n=0;n<t.length;n++)e[t[n]]=n;return d(e)}(e)).map(t=>Yi(t));const n=Yi(t&&t.winNotice||"");this.createVisibilityHandler(),this.visibilityManager=new ar({nonce:this.nonce,linkTail:t&&t.linkTail||"",viewNotices:e,winNotice:n,container:this.container,portion:this.getVisiblePortion(),visibilityTimeout:this.getVisibilityTimeout()})}createVisibilityHandler(){let t=!1;const e=e=>{t=e;try{const e=JSON.stringify({action:"pcode:"+(t?"visible":"invisible")}),i=this.root.querySelector("iframe");i&&i.contentWindow&&i.contentWindow.postMessage(e,"*")}catch(n){!function(t,e){0}()}};this.visibilityInterval=setInterval(()=>e(t),Je);const n=Ke(En.factory,{portion:this.getVisiblePortion()});this.stopVisibilityObserver=n(this.container,e)}initFrames(){this.setBannerSizes(),this.mediaData.isAdaptive&&window.addEventListener("resize",()=>this.setBannerSizes()),this.mediaData.useSafeframe?this.initSafeFrame():this.initFriendlyFrame()}setBannerSizes(){const{isAdaptive:t,cssWidth:e,cssHeight:n}=this.mediaData;if(t){const t=0===this.initialSizes.width||0===this.initialSizes.height,i={width:t?e:"100%",height:t?n:"100%","min-width":"160px","min-height":"50px"};return ke(this.root,i),void ke(this.body,i)}ke(this.body,{width:e,height:n})}initSafeFrame(){const{html:t,basePath:e,isHtml5:n}=this.mediaData;Ge(window,this.body,{id:this.body.id,html:t,basePath:e||void 0,width:"100%",height:"100%",nonce:this.nonce,protected:n},void 0,()=>this.onRender(),(e,n)=>this.onActionSafeFrame(e,n,t))}onActionSafeFrame(t,e,n){if("error"===t){let t;try{const r=JSON.parse(e);t=Object.assign({},r,{name:r.type}),"ReferenceError"===r.type&&(t.stack=`${r.line}:HTML:\n${n}`)}catch(i){(t=i).name=`UnknownSafeframeError:${t.name}`,t.stack=`${t.stack}:HTML:\n${n}`}this.onError(t)}}initFriendlyFrame(){const t=this.getTemplate();try{const e=this.iframe;if("srcdoc"in e)e.srcdoc=t;else{const n=e.contentDocument;n.open(),n.write(t),n.close()}this.onRender()}catch(Oa){Oa.name="RTBBanner.initFriendlyFrame",Oa.stack=`${Oa.stack}:HTML:\n${t}`,this.onError(Oa)}}getTemplate(){const{url:t,html:e,basePath:n}=this.mediaData,i=(Boolean(t),!Boolean(e));let r;return`\n            <!DOCTYPE html>\n            <html lang="en">\n            <head>\n                <meta charset="UTF-8">\n                <base href="${i?"":n}" target="_blank"/>\n            </head>\n            <body>\n                ${r=i?`\n                <script nonce="${this.nonce}">\n                    window.location = "${t}";\n                <\/script>`:e}\n            </body>\n            </html>\n        `}onRender(){this.wasRendered=!0,this.initVisibilityManager(),this.visibilityManager.confirmRendered(),this.renderAdtune()}onError(t){qt(t,t.name?t.name:"UnknownRtbBlockError")}renderAdtune(){const{abuseUrl:t,width:e,height:n,lang:i}=this.mediaData;if(!t)return;const r=new Zi(e*n,i,t);this.body.appendChild(r)}getVisiblePortion(){return(this.container.clientWidth||0)*(this.container.clientHeight||0)>=cr?lr:dr}}const gr={},mr=t=>e=>(window.customElements.define(t,e),e),yr=(t,...e)=>{return Object(rt.a)(t,(t,n)=>n>0?`${e[n-1]}${t}`:t).join("")},vr=(t,e)=>{t.classList.add(...e.split(" ").map(xr))},br=(t,e)=>{t.classList.remove(...e.split(" ").map(xr))},wr=(t,e)=>{ct(e,(e,n)=>((t,e,n)=>{t.style.setProperty(e,n)})(t,n,e))},xr=t=>t,kr=(t,...e)=>{return new ti(t,e,"html",hi)},_r=(yt(()=>{const t=(()=>d(gr))(),e=new RegExp(`(<\\/?)(${t.join("|")})(\\/?>|\\s)`,"igm"),n=/class\=(([^\"\'\s>]+)|[\"\']?([\w\d\-\_\s]+)[\"\']?)/gim,i=(t,e,n,i)=>`${e}${(t=>gr[t])(n)}${i}`,r=(t,e)=>{return`class="${e.replace(/[\"\']/g,"").split(" ").map(xr).join(" ")}"`};return t=>t.replace(e,i).replace(n,r)}),t=>t),Sr=(t,e)=>t.querySelector(_r(e)),Or=(t,e)=>Array.from(t.querySelectorAll(_r(e))),Cr=t=>Li(_r(t));var $r=n(9);const Pr=/.*var\s*\(.*\,\s*(.*)\).*/,Er=function(){const t=window.CSS;return t&&Object(y.a)(t.supports)&&(t.supports("--fake-var",0)||t.supports("font-weight","var(--fake-var)"))}();function jr(...t){const e=[];if(t.forEach(t=>{Object($r.isString)(t)?e.push(t):d(t).forEach(n=>{t[n]&&e.push(n)})}),e.length)return e.map(xr).join(" ")}function Rr(t,e){return void 0===e||Er||(e=function(t){return t.replace(Pr,"$1")}(`${e}`)),e?`${t}: ${e};`:""}function Ar(t){return`\n        ${Rr("padding-top",t["padding-top"])}\n        ${Rr("padding-right",t["padding-right"])}\n        ${Rr("padding-bottom",t["padding-bottom"])}\n        ${Rr("padding-left",t["padding-left"])}\n    `}function Tr(t){return`\n        ${Rr("margin-top",t["offset-top"])}\n        ${Rr("margin-right",t["offset-right"])}\n        ${Rr("margin-bottom",t["offset-bottom"])}\n        ${Rr("margin-left",t["offset-left"])}\n    `}function Nr(t){return`\n        ${Rr("border-top",t["border-top"])}\n        ${Rr("border-right",t["border-right"])}\n        ${Rr("border-bottom",t["border-bottom"])}\n        ${Rr("border-left",t["border-left"])}\n        ${Rr("border-radius",t["border-radius"])}\n    `}function Ir(t){return`\n        ${Rr("color",t.color)}\n        ${Rr("font-size",t["font-size"])}\n        ${Rr("font-family",t["font-family"])}\n        ${Rr("font-weight",t["font-weight"])}\n        ${Rr("font-style",t["font-style"])}\n        ${Rr("line-height",t["line-height"])}\n        ${Rr("letter-spacing",t["letter-spacing"])}\n        ${Rr("text-decoration",t["text-decoration"])}\n        ${Rr("text-transform",t["text-transform"])}\n        ${Rr("text-align",t["text-align"])}\n    `}function Mr(t){return`\n        ${Rr("width",t.width)}\n        ${Rr("height",t.height)}\n        ${Rr("max-width",t["max-width"])}\n        ${Rr("max-height",t["max-height"])}\n    `}function Lr(t){return`\n        ${Rr("background-color",t["background-color"])}\n        ${Rr("opacity",t["background-opacity"])}\n        ${Rr("filter",t["background-filter"])}\n    `}function Br(t){return`\n        ${Rr("top",t["background-top"]||"0px")}\n        ${Rr("bottom",t["background-bottom"]||"0px")}\n        ${Rr("left",t["background-left"]||"0px")}\n        ${Rr("right",t["background-right"]||"0px")}\n    `}const Dr="object"==typeof window.ShadyCSS&&!window.ShadyCSS.nativeShadow,zr=/\:host(\(([^\)]*)\))?([^\,\{]*)/g,Vr=/(?:^|([\}]\s*))(((?!(\:host|\s+))[^\,\{\}]){1,})/g,Fr=/(\s{2,}|[\s\r\n\t]+)/g;function Ur(t,e,n){const i=t.replace(Fr," ");return e?n?i.replace(Vr,`$1.${n} $2`).replace(zr,`${e}.${n}$2$3`):i.replace(zr,`${e}$2$3`):i}function Wr(t,e){return function(t,e=window){return("function"==typeof e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle)||{}}(t)[e]}function Hr(t,e=!1){Dr||e?setTimeout(t,0):t()}class Yr extends Di{constructor(){super(),this._scope=`${this.localName}_${Yr.getUniqScope()}`,this._scopeClass=`.${this._scope}`,vr(this,this._scope)}static getUniqScope(){let t,e=5;for(;!t||Yr.usedScopes.indexOf(t)>=0;)t=Ie(e++);return Yr.usedScopes.push(t),t}update(t){const e=this.render();e instanceof ti&&Di.render(e,this.renderRoot,{scopeName:this._scope,eventContext:this})}_style(t){return this.renderRoot instanceof window.ShadowRoot&&Dr?Ur(yr`
                    ${t}
                `,this.localName):Ur(yr`
                ${t}
            `)}_toggleClass(t,e=!1){e?vr(this,t):br(this,t)}}Yr.usedScopes=[];var qr=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let Gr=class extends Yr{render(){const{labelPosition:t,labelSpacing:e,styleProps:n}=this,i="tl"===t||"tr"===t,r="tl"===t||"bl"===t,o=jr("yrw-block-label",this._scope,{"yrw-block-label__right":!r,"yrw-block-label__top":i,"yrw-block-label__bottom":!i});return kr`
            <style>
                ${this._style(`\n                :host {\n                    position: relative;\n                    display: flex;\n                    flex-direction: column;\n                    box-sizing: border-box;\n                    ${Mr(n)}\n                    ${Lr(n)}\n                    ${Nr(n)}\n                    ${Ar(n)}\n                    ${Tr(n)}\n                }\n\n                .yrw-block-label {\n                    display: block;\n                    width: 100%;\n                }\n\n                .yrw-block-label__top {\n                    order: 0;\n                    ${Rr("margin-bottom",e)}\n                }\n\n                .yrw-block-label__bottom {\n                    order: 1;\n                    ${Rr("margin-top",e)}\n                }\n\n                .yrw-block-label__right {\n                    text-align: right;\n                }\n            `)}
            </style>
            <div class=${o}><slot name="label"></slot></div>
            <slot name="headline"></slot>
            <slot></slot>
        `}};function Qr(t){const e=/^[\s\n\r]+$/;return X(t)||(t=Xr(t)),t.filter(t=>{const n=8===t.nodeType,i=Jr(t);return!n&&!t.hide&&i&&!e.test(i)})}function Xr(t){return Array.from(t.childNodes)}function Jr(t){return t.nodeValue||t.textContent||t.innerText||""}function Kr(t,e){if(!e)return t;const n=t.shadowRoot?t.shadowRoot:t;return Sr(n,e)}qr([Mi({type:String})],Gr.prototype,"labelPosition",void 0),qr([Mi({type:String})],Gr.prototype,"labelSpacing",void 0),qr([Mi({type:Object})],Gr.prototype,"styleProps",void 0),Gr=qr([mr("ya-block")],Gr);const Zr="…";function to(t,e){return function(t){const e=Wr(t,"line-height");return"normal"===e?1.2*parseInt(Wr(t,"font-size"),10):parseInt(e,10)}(t)*e+parseInt(Wr(t,"padding-top"),10)+parseInt(Wr(t,"padding-bottom"),10)}function eo(t,e,n,i){const r=Kr(t,n);if(!r)return;const{style:o}=r;if(void 0!==o.webkitLineClamp)o.overflow="hidden",o.textOverflow="ellipsis",o.webkitBoxOrient="vertical",o.display="-webkit-box",o.webkitLineClamp=e,i&&(r.innerText=i);else{const r=()=>{!function(t,e,n,i){const r=Kr(t,n);i&&(r.innerText=i);const o=to(t,e);if(!o||o>=t.clientHeight)return;const s=t=>{r.innerText=t+Zr},a=Jr(r).split(" ");if(a.length<2)return;let c,l=a.length-1,d=0;for(;d<l;)c=d+l+1>>1,s(a.slice(0,c).join(" ")),t.clientHeight>o?l=c-1:d=c;s(a.slice(0,l).join(" "))}(t,e,n,i),o.removeProperty("visibility")};o.visibility="hidden",Hr(r)}}const no=[].find,io=E(no)?(t,e)=>no.call(t,e):(t,e)=>{for(let n=0;n<t.length;n++){const i=t[n];if(e(i,n,t))return i}};var ro;!function(t){t.adCategory="ad-category-",t.adDate="ad-date-",t.adDesc="ad-desc-",t.adDomain="ad-domain-",t.adImage="ad-image-",t.adMeta="ad-meta-",t.adTitle="ad-title-",t.adUnit="ad-unit-",t.blockGrid="block-grid-",t.blockHeadline="block-headline-",t.blockLabel="block-label-",t.block="block-"}(ro||(ro={}));const oo="hover-",so={hide:"hidden","spacing-width":"spacing-horizontal","spacing-height":"spacing-vertical"};function ao(t){const e={};return d(ro).forEach(t=>e[t]={}),d(t).forEach(n=>{const i=function(t){const e=io(d(ro),e=>0===t.indexOf(ro[e]));if(!e)return;let n=t.slice(ro[e].length);return so[n]&&(n=so[n]),[e,n]}(n);if(!i)return;const[r,o]=i;e[r][o]=e[r][o]||t[n]}),function(t){switch(t.adUnit["image-position"]){case"top":case"bottom":t.adImage.width="100%"}return t}(e)}function co(t){const e={};return d(t).forEach(n=>{if(0===n.indexOf(oo)){const i=n.slice(oo.length);e[i]=t[n]}}),e}var lo=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let ho=class extends Yr{constructor(){super(...arguments),this.styleProps={}}render(){this._toggleClass("yrw-hidden",this.hide);const{styleProps:t,maxLength:e}=this,n=co(t),i=function(t,e){return void 0!==e&&e<t.length?t.substr(0,e-3)+Zr:t}(Jr(this),e);return kr`
            <style>
                ${this._style(`\n                :host {\n                    position: relative;\n                    display: block;\n                    ${Rr("order",t.order)}\n                    ${Lr(t)}\n                    ${Ir(t)}\n                    ${Nr(t)}\n                    ${Ar(t)}\n                    ${Tr(t)}\n                }\n                :host(.yrw-hidden) {\n                    display: none;\n                }\n                :host(.yrw-hovered) {\n                    ${Ir(n)}\n                }\n                .yrw-content {\n                    text-decoration: inherit;\n                }\n            `)}
            </style>
            <span class=${jr("yrw-content",this._scope)}>${i}</span>
        `}shouldUpdate(t){if(!super.shouldUpdate(t))return!1;let e=0;return t.has("hide")&&(this._toggleClass("yrw-hidden",this.hide),e+=1),t.has("hovered")&&(this._toggleClass("yrw-hovered",this.hovered),e+=1),!(t.size<=e)}updated(){const{lineClamp:t}=this;t&&eo(this,t,".yrw-content")}};lo([Mi({type:Boolean})],ho.prototype,"hide",void 0),lo([Mi({type:Boolean})],ho.prototype,"hovered",void 0),lo([Mi({type:Number})],ho.prototype,"lineClamp",void 0),lo([Mi({type:Number})],ho.prototype,"maxLength",void 0),lo([Mi({type:Object})],ho.prototype,"styleProps",void 0),ho=lo([mr("ya-clamped-text")],ho);const uo=(t,e)=>{const n=t.startNode.parentNode,i=void 0===e?t.endNode:e.startNode,r=n.insertBefore(Jn(),i);n.insertBefore(Jn(),i);const o=new ri(t.options);return o.insertAfterNode(r),o},po=(t,e)=>(t.setValue(e),t.commit(),t),fo=(t,e,n)=>{const i=t.startNode.parentNode,r=n?n.startNode:t.endNode,o=e.endNode.nextSibling;o!==r&&Fn(i,e.startNode,o,r)},go=t=>{Un(t.startNode.parentNode,t.startNode,t.endNode.nextSibling)},mo=(t,e,n)=>{const i=new Map;for(let r=e;r<=n;r++)i.set(t[r],r);return i},yo=new WeakMap,vo=new WeakMap,bo=Dn((t,e,n)=>{let i;return void 0===n?n=e:void 0!==e&&(i=e),e=>{if(!(e instanceof ri))throw new Error("repeat can only be used in text bindings");const r=yo.get(e)||[],o=vo.get(e)||[],s=[],a=[],c=[];let l,d,h=0;for(const m of t)c[h]=i?i(m,h):h,a[h]=n(m,h),h++;let u=0,p=r.length-1,f=0,g=a.length-1;for(;u<=p&&f<=g;)if(null===r[u])u++;else if(null===r[p])p--;else if(o[u]===c[f])s[f]=po(r[u],a[f]),u++,f++;else if(o[p]===c[g])s[g]=po(r[p],a[g]),p--,g--;else if(o[u]===c[g])s[g]=po(r[u],a[g]),fo(e,r[u],s[g+1]),u++,g--;else if(o[p]===c[f])s[f]=po(r[p],a[f]),fo(e,r[p],r[u]),p--,f++;else if(void 0===l&&(l=mo(c,f,g),d=mo(o,u,p)),l.has(o[u]))if(l.has(o[p])){const t=d.get(c[f]),n=void 0!==t?r[t]:null;if(null===n){const t=uo(e,r[u]);po(t,a[f]),s[f]=t}else s[f]=po(n,a[f]),fo(e,n,r[u]),r[t]=null;f++}else go(r[p]),p--;else go(r[u]),u++;for(;f<=g;){const t=uo(e,s[g+1]);po(t,a[f]),s[f++]=t}for(;u<=p;){const t=r[u++];null!==t&&go(t)}yo.set(e,s),vo.set(e,c)}});function wo(t,e){const n=[];for(let i=0;i<t;i++)n.push(e(i));return n}function xo({rows:t=1,cols:e=1,items:n,fillEmpty:i}){return wo(t,t=>{const r=(t=>n.slice(t*e,(t+1)*e))(t);if(!r.length)return[];if(r.length<e){const n=wo(e-r.length,e=>i(t,e));r.push(...n)}return r})}function ko({rows:t,cols:e,items:n,template:i,scope:r,prefix:o=""}){const s=xo({rows:t,cols:e,items:n,fillEmpty:(t,e)=>({id:`empty_${t}_${e}`,empty:!0})});return kr`
        <div class=${jr(`${o}grid`,r)}>
            ${bo(s,t=>t.map(t=>t.id).join(""),t=>kr`
                    <div class=${jr(`${o}grid-row`,r)}>
                        ${bo(t,t=>t.id,t=>kr`
                                <div class=${jr(`${o}grid-item`,r)}>
                                    ${t.empty?void 0:i(t)}
                                </div>
                            `)}
                    </div>
                `)}
        </div>
    `}var _o=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let So=class extends Yr{constructor(){super(...arguments),this.items=[],this.styleProps={}}render(){const{cols:t,rows:e,items:n,template:i}=this,{styleProps:r}=this,o=r["spacing-vertical"]||r.spacing||"0px",s=r["spacing-horizontal"]||r.spacing||"0px";return kr`
            <style>
                ${this._style(`\n                :host {\n                    display: block;\n                }\n                .yrw-grid {\n                    display: flex;\n                    flex-direction: column;\n                    flex-wrap: wrap;\n                    justify-content: flex-start;\n                    align-items: stretch;\n                    align-content: flex-start;\n                    width: 100%;\n                    box-sizing: border-box;\n                }\n                .yrw-grid-row {\n                    position: relative;\n                    display: flex;\n                    flex-direction: row;\n                    flex-wrap: nowrap;\n                    justify-content: flex-start;\n                    align-items: stretch;\n                    align-content: flex-start;\n                    width: 100%;\n                    ${Rr("margin-top",o)}\n                }\n                .yrw-grid-row:first-child {\n                    margin-top: 0;\n                }\n                .yrw-grid-item {\n                    position: relative;\n                    flex: 1 1 0px;\n                    ${Rr("margin-left",s)}\n                }\n                .yrw-grid-item:first-child {\n                    margin-left: 0;\n                }\n                .yrw-grid-row:before {\n                    content: "";\n                    position: absolute;\n                    display: block;\n                    left: 0;\n                    right: 0;\n                    top: calc(-${o} / 2);\n                    ${Rr("border-top",r["border-vertical"])}\n                }\n                .yrw-grid-row:first-child:before {\n                    border-top: none;\n                }\n                .yrw-grid-item:before {\n                    content: "";\n                    position: absolute;\n                    display: block;\n                    top: 0;\n                    bottom: 0;\n                    left: calc(-${s} / 2);\n                    ${Rr("border-left",r["border-horizontal"])}\n                }\n                .yrw-grid-item:first-child:before {\n                    border-left: none;\n                }\n            `)}
            </style>
            ${ko({rows:e,cols:t,items:n,template:i,scope:this._scope,prefix:"yrw-"})}
        `}};_o([Mi({type:Number})],So.prototype,"cols",void 0),_o([Mi({type:Number})],So.prototype,"rows",void 0),_o([Mi({type:Array})],So.prototype,"items",void 0),_o([Mi({type:Function})],So.prototype,"template",void 0),_o([Mi({type:Object})],So.prototype,"styleProps",void 0),So=_o([mr("ya-grid")],So);const Oo=new WeakMap,Co=Dn(t=>e=>{if(!(e instanceof ri))throw new Error("unsafeHTML can only be used in text bindings");if(Oo.get(e)===t&&ei(t))return;const n=document.createElement("template");n.innerHTML=t,e.setValue(document.importNode(n.content,!0)),Oo.set(e,t)});function $o(t){return t&&Co(t)}var Po=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let Eo=class extends Yr{constructor(){super(...arguments),this._visibleChilds=[]}render(){const t=this._itemWithDelimiter(),{styleProps:e}=this,n=this.delimiter||e.spacing?e.spacing:"6px";return kr`
            <style>
                ${this._style(`\n                :host {\n                    display: block;\n                    ${Rr("order",e.order)}\n                    ${Lr(e)}\n                    ${Ir(e)}\n                    ${Nr(e)}\n                    ${Ar(e)}\n                }\n                :host(.yrw-hidden) {\n                    display: none;\n                }\n                .yrw-delimiter {\n                    ${Rr("padding-left",n)}\n                    ${Rr("padding-right",n)}\n                }\n                .yrw-delimiter__empty {\n                    padding-right: 0;\n                }\n            `)}
            </style>
            <div>${t}</div>
        `}updated(){this._toggleClass("yrw-hidden",this.hide||!this._visibleChilds.length)}_getDelimiter(){const{delimiter:t}=this,e=jr("yrw-delimiter",{"yrw-delimiter__empty":!t});return kr`
            <span class=${e}>${$o(t)}</span>
        `}_itemWithDelimiter(){const t=[],e=this._getDelimiter();return this._getChilds().forEach(n=>{t.length&&t.push(e),t.push(n)}),t}_getChilds(){return this._childs||(this._childs=Xr(this)),this._visibleChilds=Qr(this._childs),this._visibleChilds}};function jo(t,e,n,i){const r=function(t,e,n,i){const r=(e-i)/(t-n),o=e-r*t;return function(t){return r*t+o}}(t,e,n,i);return function(t){const n=r(t);return o=n,s=e,a=i,Math.max(s,Math.min(o,a));var o,s,a}}Po([Mi({type:Boolean})],Eo.prototype,"hide",void 0),Po([Mi({type:Boolean})],Eo.prototype,"hovered",void 0),Po([Mi({type:String})],Eo.prototype,"delimiter",void 0),Po([Mi({type:Object})],Eo.prototype,"styleProps",void 0),Eo=Po([mr("ya-meta")],Eo);const Ro=(t,e,n)=>{let{x:i,y:r}=t;const o=(t,e)=>{return jo(.5,0,e-.5,1)(t*e)};return e>n?r=o(r,e/n):e<n&&(i=o(i,n/e)),{x:i,y:r}};function Ao(t,e,n){if(!n)return{x:.5,y:.5};const i=n.x+n.w/2,r=n.y+n.h/2,o={x:i/t.w,y:r/t.h},s=e.w/e.h,a=t.w/t.h;return Ro(o,s,a)}const To=50;var No,Io=function(t,e,n,i){return new(n||(n=Promise))(function(r,o){function s(t){try{c(i.next(t))}catch(e){o(e)}}function a(t){try{c(i.throw(t))}catch(e){o(e)}}function c(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(s,a)}c((i=i.apply(t,e||[])).next())})};function Mo(t=[],e){const n=e*Math.max(window.devicePixelRatio||1,2);return t.reduce((t,e)=>!t[0]||e[0]>t[0]&&t[0]<n||e[0]>=n&&e[0]<t[0]?e:t,[0,0,"",null])}function Lo(t=[]){return t.reduce((t,e)=>!t[0]||e[0]<t[0]?e:t,[0,0,"",null])[2]}function Bo(t){return new Promise((e,n)=>{!function({src:t,crossOrigin:e="Anonymous",callback:n}){const i=new Image;i.crossOrigin=e,i.onload=()=>{try{const e=document.createElement("canvas"),r=e.getContext("2d");e.width=To,e.height=To,r.drawImage(i,0,0,To,To);const o=r.getImageData(0,0,To,To).data;n(o)}catch(t){n()}},i.src=t}({src:t,callback:t=>{const i=function(t){let e=0,n=0,i=0;if(!t)return null;for(let r=0;r<t.length;r+=4)e+=t[r],n+=t[r+1],i+=t[r+2];if(0!==t.length){const r=t.length/4;e=Math.floor(e/r),n=Math.floor(n/r),i=Math.floor(i/r)}return[e,n,i]}(t);i?e(i):n()}})})}function Do(t,e){const n=t[3];if(!n)return;const i=n.map(t=>(function(t,e){const n=Number((t.w/t.h).toFixed(2)),i=n<=e.w/e.h,r=i?e.w:e.h*n,o=i?e.w/n:e.h;return{area:Math.min(r,t.w)*Math.min(o,t.h),originArea:t.w*t.h,smartCenter:t}})(t,e));return i.reduce((t,e)=>((t,e)=>t.area>e.area||t.area===e.area&&t.originArea<e.originArea?t:e)(t,e),i[0]).smartCenter}!function(t){t[t.top=0]="top",t[t.bottom=1]="bottom",t[t.left=2]="left",t[t.right=3]="right"}(No||(No={}));var zo=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let Vo=class extends Yr{constructor(){super(...arguments),this.sources=[],this.styleProps={},this._actualWidth=0}render(){const{sources:t,styleProps:e}=this,n=Lo(t);return kr`
            <style>
                ${this._style(`\n                :host {\n                    display: block;\n                    position: relative;\n                    overflow: hidden;\n                    ${Rr("width",e.width||"100%")}\n                    ${Rr("max-height",e["max-height"]||"400px")}\n                }\n                .yrw-img {\n                    display: block;\n                    position: relative;\n                    width: 100%;\n                    padding-bottom: calc(${e.width||"100%"} * ${e.ratio||1/1.5});\n                }\n                .img-source {\n                    display: block;\n                    position: absolute;\n                    top: 0;\n                    left: 0;\n                    bottom: 0;\n                    right: 0;\n                    background-position: center center;\n                    background-repeat: no-repeat;\n                    background-origin: content-box;\n                    background-size: cover;\n                    background-image: url(${n});\n                    ${Rr("max-height",e["max-height"]||"400px")}\n                }\n            `)}
            </style>
            <div class=${jr("yrw-img",this._scope)}>
                <div class=${jr("img-source",this._scope)}></div>
            </div>
        `}updated(){Hr(()=>this.updateImageSize(),!0)}updateImageSize(){if(!this.sources.length)return;const t=parseFloat(Wr(this,"width")),e=parseFloat(Wr(this,"height"));if(isNaN(t))return;if(t===this._actualWidth)return;this._actualWidth=t;const n=Mo(this.sources,this._actualWidth);if(e){const i=Do(n,{w:t,h:e});if(i){const r=Ao({w:n[0],h:n[1]},{w:t,h:e},i);this.imageContainer.style.paddingBottom=`${e}px`,this.img.style.backgroundPosition=`${100*r.x}% ${100*r.y}%`}else this.imageContainer.style.paddingBottom=`calc(${this.styleProps.width||"100%"} * ${this.styleProps.ratio||1/1.5})`,this.img.style.backgroundPosition="center center"}this.img.style.backgroundImage=`url(${n[2]})`}};zo([Mi({type:Array})],Vo.prototype,"sources",void 0),zo([Mi({type:Object})],Vo.prototype,"styleProps",void 0),zo([Cr(".img-source")],Vo.prototype,"img",void 0),zo([Cr(".yrw-img")],Vo.prototype,"imageContainer",void 0),Vo=zo([mr("ya-styled-image")],Vo);var Fo=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let Uo=class extends Yr{render(){const{styleProps:t}=this;return this._toggleClass("yrw-hidden",this.hide),kr`
            <style>
                ${this._style(`\n                :host {\n                    display: inline-block;\n                    ${Lr(t)}\n                    ${Ir(t)}\n                    ${Nr(t)}\n                    ${Ar(t)}\n                }\n                :host(.yrw-hidden) {\n                    display: none;\n                }\n            `)}
            </style>
            <slot></slot>
        `}shouldUpdate(t){return!!super.shouldUpdate(t)&&(!t.has("hide")||(this._toggleClass("yrw-hidden",this.hide),1!==t.size))}};Fo([Mi({type:Boolean})],Uo.prototype,"hide",void 0),Fo([Mi({type:Object})],Uo.prototype,"styleProps",void 0),Uo=Fo([mr("ya-styled-text")],Uo);let Wo=class extends Di{render(){return kr`
            <style>
                :host {
                    position: absolute;
                    font-family: Verdana, Geneva, Tahoma, sans-serif;
                    font-size: 11px;
                    color: #ffffff;
                    top: 5px;
                    left: 5px;
                    padding: 2px 3px 3px 5px;
                    border-radius: 2px;
                    background: rgba(0, 0, 0, 0.3);
                    z-index: 910;
                }
            </style>
            <slot></slot>
        `}};Wo=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s}([mr("ya-ad-age")],Wo);var Ho=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let Yo=class extends Di{constructor(){super(),this.addEventListener("mouseenter",()=>{this._startDrag()}),this.addEventListener("mouseleave",()=>{this._endDrag()}),this.addEventListener("mousemove",t=>{this._onDrag(t.offsetX)}),this.addEventListener("touchstart",()=>{this._startDrag()}),this.addEventListener("touchend",()=>{this._endDrag()}),this.addEventListener("touchcancel",()=>{this._endDrag()}),this.addEventListener("touchmove",t=>{if(t.target&&t.touches.length){const e=Object(Se.getBoundingClientRect)(t.target);this._onDrag(t.touches[0].pageX-e.left,!0)}})}get styles(){return yr`
            :host {
                position: absolute;
                font-family: Verdana, Geneva, Tahoma, sans-serif;
                font-size: 11px;
                color: #ffffff;
                left: 0;
                right: 0;
                bottom: 0;
                top: 0;
                overflow: hidden;
                z-index: 910;
            }
            .yrw-warning-container {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                display: block;
                background: rgba(0, 0, 0, 0.3);
            }
            .yrw-warning-wrapper {
                display: block;
                padding: 5px 7px;
                -webkit-mask-image: linear-gradient(
                    to right,
                    rgba(0, 0, 0, 1) 0%,
                    rgba(0, 0, 0, 1) 95%,
                    rgba(0, 0, 0, 0) 98%
                );
                mask-image: linear-gradient(
                    to right,
                    rgba(0, 0, 0, 1) 0%,
                    rgba(0, 0, 0, 1) 95%,
                    rgba(0, 0, 0, 0) 98%
                );
            }
            .yrw-warning-text {
                display: block;
                min-height: 14px;
                line-height: 1.3;
                white-space: nowrap;
                text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
                margin-left: 0px;
            }
            :host(.yrw-hovered) .yrw-warning-text {
                transition: margin 0.5s linear 0s;
            }
            :host(.yrw-hovered) .yrw-warning-wrapper {
                -webkit-mask-image: linear-gradient(
                    to right,
                    rgba(0, 0, 0, 0) 2%,
                    rgba(0, 0, 0, 1) 3%,
                    rgba(0, 0, 0, 1) 95%,
                    rgba(0, 0, 0, 0) 98%
                );
                mask-image: linear-gradient(
                    to right,
                    rgba(0, 0, 0, 0) 2%,
                    rgba(0, 0, 0, 1) 3%,
                    rgba(0, 0, 0, 1) 95%,
                    rgba(0, 0, 0, 0) 98%
                );
            }
        `}render(){return kr`
            <style>
                ${this.styles}
            </style>
            <div class="yrw-warning-container">
                <div class="yrw-warning-wrapper">
                    <div class="yrw-warning-text">
                        <span class="yrw-warning-content">
                            <slot></slot>
                        </span>
                    </div>
                </div>
            </div>
        `}_startDrag(){this._diff=this.warningContainer.offsetWidth-this.clientWidth+34,this._diff<=10||vr(this,"yrw-hovered")}_endDrag(){br(this,"yrw-hovered"),this._setTextOffset(0)}_onDrag(t,e=!1){if(this._diff<=10)return;const n=this.clientWidth-40;let i=t-20;i<0?i=0:i>n&&(i=n),e&&(i=n-i);const r=-i*(this._diff/n)+10;this._setTextOffset(r)}_setTextOffset(t){wr(this.warningText,{"margin-left":`${t}px`})}};function qo(t){return t.age?kr`
              <ya-ad-age>${Co(t.age)}</ya-ad-age>
          `:void 0}function Go(t){return t.warning?kr`
              <ya-ad-warning>${Co(t.warning)}</ya-ad-warning>
          `:void 0}function Qo(t){return t&&kr`
            <div class="yrw-body_warning unit-warning">${t}</div>
        `}Ho([Cr(".yrw-warning-content")],Yo.prototype,"warningContainer",void 0),Ho([Cr(".yrw-warning-text")],Yo.prototype,"warningText",void 0),Yo=Ho([mr("ya-ad-warning")],Yo);const Xo=242500,Jo=.3,Ko=.5;function Zo(t,e){if(rn)return!1;const{left:n,right:i,top:r,bottom:o}=Object(Se.getBoundingClientRect)(t),s=i-n,a=o-r;return!en(e,([e,i])=>{const o=n+(s-1)*(1+e)/2,c=r+(a-1)*(1+i)/2,l=document.elementFromPoint(o,c);if(!l||t===l||t.contains(l))return!0;if("function"==typeof t.getRootNode){if(function t(e,n){const i=e.getRootNode();return!(!i||!i.host)&&(!!n.contains(i.host)||t(i.host,n))}(l,t))return!0;if(function t(e,n){const i=n.getRootNode();return!(!i||!i.host)&&(e===i.host||t(e,i.host))}(l,t))return!0}return!1})}class ts extends sn{static factory(t){return t.element?new ts(t):null}isVisible(){const{element:t,portion:e,overlappedPoints:n}=this.args;return tn(t)&&Object(ir.isInViewport)(t,e)&&!Zo(t,n)}}const es=Ze.from(kn.factory,ts.factory);function ns(t,e,n){return rr.factory(t,e,{factory:es,factoryOptions:{portion:is(t)},delay:7*Je,preventStop:!0,onVisibilityChange:n})}function is(t){return(t&&t.clientWidth||0)*(t&&t.clientHeight||0)>=Xo?Jo:Ko}var rs=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let os=class extends Yr{constructor(){super(),this._menuClosed=!0,this.addEventListener("click",t=>{t.preventDefault(),this.dispatchEvent(new CustomEvent("clicked")),this._changeClickLink(new CustomEvent("clicked"))}),this.addEventListener("mouseenter",()=>{this.dispatchEvent(new CustomEvent("hovered"))}),this.addEventListener("mouseleave",()=>{this.dispatchEvent(new CustomEvent("leaved"))}),this.addEventListener("contextmenu",()=>{this._changeClickLink(new CustomEvent("contextmenu"))}),window.addEventListener("click",()=>this._changeClickLink(new CustomEvent("clicked")))}render(){const{imagePosition:t,unit:e,styleProps:n}=this,i=co(n),r=function(t=""){switch(t.toLowerCase()){case"left":return No.left;case"right":return No.right;case"bottom":return No.bottom;default:return No.top}}(t),o=jr("yrw-unit",this._scope,{"yrw-unit__row":r===No.left,"yrw-unit__row_right":r===No.right,"yrw-unit__column":r===No.top,"yrw-unit__column_bottom":r===No.bottom}),{age:s,imageWarning:a,bodyWarning:c}=function(t,e){const n=qo(t),i=Go(t),r=void 0!==e&&[No.left,No.right].indexOf(e)>=0;return{age:n,warning:i,imageWarning:!r&&i||void 0,bodyWarning:r&&Qo(i)||void 0}}(e,r);return kr`
            <style>
                ${this._style(`\n                :host {\n                    position: relative;\n                    display: flex;\n                    box-sizing: border-box;\n                    margin: 0 auto;\n                    overflow: hidden;\n                    transition: box-shadow 600ms ease 0s;\n                    ${Mr(n)}\n                    ${Ir(n)}\n                    ${Nr(n)}\n                    ${Ar(n)}\n                    ${Rr("color",n.color)}\n                    ${Rr("box-shadow",n["box-shadow"])}\n                }\n                :host::before {\n                    content: "";\n                    position: absolute;\n                    ${Lr(n)}\n                    ${Br(n)}\n                }\n                :host(:hover) {\n                    ${Rr("box-shadow",i["box-shadow"])}\n                }\n                :host(:hover)::before {\n                    ${Lr(i)}\n                    ${Br(i)}\n                }\n                .yrw-unit {\n                    position: relative;\n                    display: flex;\n                    flex-direction: column;\n                    flex-wrap: nowrap;\n                    text-decoration: none;\n                    color: black;\n                    width: 100%;\n                    cursor: pointer;\n                }\n                .yrw-unit__column .yrw-image {\n                    ${Rr("margin-bottom",n["image-spacing"])}\n                }\n                .yrw-unit__row {\n                    flex-direction: row;\n                }\n                .yrw-unit__row .yrw-image {\n                    ${Rr("margin-right",n["image-spacing"])}\n                }\n                .yrw-unit__row_right {\n                    flex-direction: row-reverse;\n                }\n                .yrw-unit__row_right .yrw-image {\n                    ${Rr("margin-left",n["image-spacing"])}\n                }\n                .yrw-unit__column_bottom {\n                    flex-direction: column-reverse;\n                }\n                .yrw-unit__column_bottom .yrw-image {\n                    ${Rr("margin-top",n["image-spacing"])}\n                }\n                .yrw-image {\n                    position: relative;\n                    display: block;\n                    flex-grow: 0;\n                    flex-shrink: 0;\n                    overflow: hidden;\n                }\n                .yrw-body {\n                    position: relative;\n                    display: flex;\n                    flex-direction: column;\n                    width: 100%;\n                }\n                .yrw-body_warning {\n                    display: block;\n                    order: 9;\n                    margin-bottom: 30px;\n                }\n                .yrw-url {\n                    width: 100%;\n                    height: 100%;\n                    text-decoration: none;\n                }\n            `)}
            </style>
            <a href=${e.link} class=${jr("yrw-url",this._scope)}>
                <div class=${o}>
                    <div class=${jr("yrw-image",this._scope)}>
                        <slot name="image"></slot>
                        ${s} ${a}
                    </div>
                    <div class=${jr("yrw-body",this._scope)}>
                        <slot name="title"></slot>
                        <slot name="desc"></slot>
                        <slot name="meta"></slot>
                        ${c}
                    </div>
                </div>
            </a>
        `}updated(){this.dispatchEvent(new CustomEvent("rendered")),this._initVisibilityChecker();const t=this.styleProps["background-color"];t&&t.indexOf("--unit-average-color")>=0&&this._getAvgColor()}_getAvgColor(){if(void 0===this._avgColor){const t=Lo(this.unit.images);this._avgColor=Bo(t).then(t=>`rgb(${t.join(",")})`)}this._applyAvgColor()}_applyAvgColor(){this._avgColor.then(t=>{Er&&this.style.setProperty("--unit-average-color",t)})}_initVisibilityChecker(){this._checker||(this._checker=ns(this,()=>{this.dispatchEvent(new CustomEvent("visible"))},t=>{this.dispatchEvent(new CustomEvent(t?"visibleNow":"hiddenNow"))}))}_changeClickLink(t){"clicked"!==t.type||this._menuClosed||(this._menuClosed=!0,this.urlEl.href=this.unit.link||""),"contextmenu"===t.type&&(this._menuClosed=!1,this.urlEl.href=this.unit.beacon||this.unit.link||"")}};function ss(t,e,n){let i,r=0;const o=(...e)=>{t.call(n,...e)};return function(...t){const n=Date.now(),s=n-r;clearTimeout(i),s<e?i=window.setTimeout(o,e-s,...t):(r=n,o(...t))}}rs([Mi({type:Object})],os.prototype,"unit",void 0),rs([Mi({type:String})],os.prototype,"imagePosition",void 0),rs([Mi({type:Object})],os.prototype,"styleProps",void 0),rs([Cr("a")],os.prototype,"urlEl",void 0),os=rs([mr("ya-unit")],os);const as=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMs])\1?|[Ll]|"[^"]*"|'[^']*'/g;function cs(t,e){if(!t||isNaN(t))return;const n=e||"dd.mm.yyyy",i=t.getDate(),r=t.getMonth(),o=t.getFullYear(),s=t.getHours(),a=t.getMinutes(),c=t.getSeconds(),l=t.getMilliseconds(),d={d:String(i),dd:ls(i),m:String(r+1),mm:ls(r+1),yy:String(o).slice(2),yyyy:String(o),h:String(s%12||12),hh:ls(s%12||12),H:String(s),HH:ls(s),M:String(a),MM:ls(a),s:String(c),ss:ls(c),l:ls(l,"000"),L:ls(Math.round(l/10))};return n.replace(as,function(t){return t in d?d[t]:t.slice(1,t.length-1)})}function ls(t,e="00"){return(e+t).slice(-e.length)}const ds=/(\((max-width|min-width):(\d+)(px)?\))?(\d+)(x(\d+))?/;function hs(t){const e=us(function(t){const e=[];return t.replace(/\s+/g,"").toLowerCase().split(",").forEach(t=>{const n=t.match(ds);if(n){const t=parseInt(n[5],10)||1,i=parseInt(n[7],10)||1,r=parseInt(n[3],10)||0,o=n[2];e.push({cols:i,rows:t,[o]:r})}}),e}(t));if(e.cols&&e.rows)return[e.cols,e.rows]}function us(t){const e=document.body.clientWidth;return t.reduce((t,n)=>(!n["max-width"]||e<=n["max-width"])&&(!n["min-width"]||e>=n["min-width"])&&ps(n)<=ps(t)?n:t,{})}function ps(t){return Math.abs(t["max-width"]||9007199254740991)-(t["min-width"]||0)}const fs={};var gs=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let ms=class extends Di{constructor(){super(),this.cacheScopedProps=new WeakMap;const t=ss(()=>this.requestUpdate(),200);window.addEventListener("resize",t)}render(){const{units:t}=this,{block:e,blockHeadline:n,blockLabel:i,blockGrid:r,adUnit:o,adImage:s,adTitle:a,adDesc:c,adMeta:l,adCategory:d,adDate:h,adDomain:u}=this.getProps();return kr`
            <style>
                :host {
                    display: block;
                    width: 100%;
                    position: relative;
                    z-index: 1;
                }
            </style>
            <ya-block
                .labelPosition=${i.position}
                .labelSpacing=${i.spacing}
                .styleProps=${e}
            >
                <ya-clamped-text
                    slot="headline"
                    ?hide=${n.hidden}
                    .styleProps=${n}
                    >${$o(n.text)}</ya-clamped-text
                >
                <ya-styled-text slot="label" ?hide=${i.hidden} .styleProps=${i}
                    >${$o(i.text)||"Яндекс.Рекомендации"}</ya-styled-text
                >
                <ya-grid
                    .cols=${r.cols}
                    .rows=${r.rows}
                    .styleProps=${r}
                    .items=${t}
                    .template=${t=>kr`
                        <ya-unit
                            @clicked=${this.eventFactory("click",t)}
                            @rendered=${this.eventFactory("render",t)}
                            @visible=${this.eventFactory("visible",t)}
                            @hovered=${this.eventFactory("hover",t)}
                            @leaved=${this.eventFactory("leave",t)}
                            @visibleNow=${this.eventFactory("visibleNow",t)}
                            @hiddenNow=${this.eventFactory("hiddenNow",t)}
                            .unit=${t}
                            .imagePosition=${o["image-position"]}
                            .styleProps=${o}
                        >
                            <ya-styled-image
                                slot="image"
                                .sources=${t.images}
                                .styleProps=${s}
                            ></ya-styled-image>
                            <ya-clamped-text
                                slot="title"
                                ?hovered=${this.hoveredUnit===t.id}
                                ?hide=${a.hidden}
                                .lineClamp=${a["line-clamp"]}
                                .maxLength=${a["max-length"]}
                                .styleProps=${a}
                                >${$o(t.title)}</ya-clamped-text
                            >
                            <ya-clamped-text
                                slot="desc"
                                ?hovered=${this.hoveredUnit===t.id}
                                ?hide=${c.hidden}
                                .lineClamp=${c["line-clamp"]}
                                .maxLength=${c["max-length"]}
                                .styleProps=${c}
                                >${$o(t.desc)}</ya-clamped-text
                            >
                            <ya-meta
                                slot="meta"
                                ?hovered=${this.hoveredUnit===t.id}
                                ?hide=${l.hidden}
                                .delimiter=${l.delimiter}
                                .styleProps=${l}
                            >
                                <ya-styled-text
                                    ?hide=${!t.ad&&(d.hidden||!t.category)}
                                    .styleProps=${d}
                                    >${$o(t.category)}</ya-styled-text
                                >
                                <ya-styled-text
                                    ?hide=${h.hidden||!t.date}
                                    .styleProps=${h}
                                    >${cs(t.date,h.format)}</ya-styled-text
                                >
                                <ya-styled-text
                                    ?hide=${u.hidden||!t.domain}
                                    .styleProps=${u}
                                    >${$o(t.domain)}</ya-styled-text
                                >
                            </ya-meta>
                        </ya-unit>
                    `}
                ></ya-grid>
            </ya-block>
        `}getProps(){const t=function(t){const e=us(t["media-query"]||[]);return e&&e.props||fs}(this.props),e=this.cacheScopedProps.get(t);if(e)return e;const n=ao(Object.assign({},this.props,t));return this.cacheScopedProps.set(t,n),n}eventFactory(t,e){const n=this.props["ad-unit-link-inblank"];return()=>{"hover"===t&&(this.hoveredUnit=e.id,this.requestUpdate()),"leave"===t&&this.hoveredUnit===e.id&&(this.hoveredUnit=void 0,this.requestUpdate()),this.dispatchEvent(new CustomEvent("unitEvent",{detail:{unit:e,eventName:t,openInBlank:n}}))}}};gs([Mi({type:Array})],ms.prototype,"units",void 0),gs([Mi({type:Object})],ms.prototype,"props",void 0),ms=gs([mr("ya-grid-props")],ms);let ys=class extends Di{constructor(){super(),this.addEventListener("click",t=>{t.preventDefault(),this.dispatchEvent(new CustomEvent("closeClicked"))})}get styles(){return yr`
            :host {
                position: absolute;
                top: 0;
                right: 0;
                width: 20px;
                height: 20px;
                border-bottom-left-radius: 4px;
                background: rgba(0, 0, 0, 0.5);
                opacity: 0.5;
                box-sizing: border-box;
                z-index: 960;
            }
            :host(:hover) {
                opacity: 1;
            }
            :host(.transparent) {
                background: none;
            }
            .tip {
                display: none;
                position: absolute;
                font-family: Verdana, Geneva, Tahoma, sans-serif;
                font-size: 10px;
                color: #ffffff;

                padding: 2px 5px 3px 3px;
                border-radius: 1px;
                background: rgba(0, 0, 0, 0.5);
                white-space: nowrap;
                right: 26px;
                top: 2px;
            }
            :host(:hover) .tip {
                display: block;
            }
            :host(.transparent) .tip {
                right: 24px;
                top: 0px;
            }
            .tip::before {
                content: '';
                position: absolute;
                display: block;
                top: 0;
                bottom: 0;
                right: -6px;
                width: 6px;
            }
            .tip::after {
                content: '';
                position: absolute;
                display: block;
                top: 4px;
                right: -4px;
                width: 0;
                height: 0;
                overflow: hide;
                border-style: solid;
                border-width: 4px 0 4px 4px;
                border-color: transparent transparent transparent rgba(0, 0, 0, 0.5);
            }
            .cross {
                position: absolute;
                display: block;
                top: 5px;
                right: 5px;
                width: 10px;
                height: 10px;
                background-position: center center;
                background-repeat: no-repeat;
                background-origin: content-box;
                background-size: cover;
                background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAAABGdBTUEAALGPC/xhBQAAAQBJREFUOBGtk0sKwkAQRIN7XbkQV3oH8YNHVFFxpefxAgriMfws3MZXcVqTMJlMwIaiM91dL5NMkiT/jDRN56jblIlnJGU+B3mRzygaJgC6OQ0SmZEgihOqhTFjEHl23yeRGUXBmPNDjOZg2pHCuzPqYUgMLBoSgjWGVMAugHQ6it+LteG6jEkHIIjFIeRpBZpDev1cfwKx9tPIzSf6tsbo7rayJwdPs2C2BSbd2SBb1VnrMeNhDE/RAyk2Bm8EwzhDBlnnIXZNP7wzB3mSFSsz+jJ9P4yG3olBlj5zueZgxX+TYg9d0aJsCK0dTAdwRO1slotOyFTVc7APpGqoaf0NMq/bjpp8tDkAAAAASUVORK5CYII=');
            }
            :host(.transparent) .cross {
                top: 3px;
                right: 3px;
                background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAAABGdBTUEAALGPC/xhBQAAAZhJREFUOBGtlD9Lw0AYxnuBNlOrg5OTroIFQaziFIUkn0QnUcGPoaLipKsfIv80CB0ydxAEBx3c3JyStsTnOYyk7eVPwYPrvcnd87vnfXPXRuM/m+d5u2EYLs3LhG6TnTpBSJqmPuK3Vqu1ZxjGVx0gAb+6BnQbWrPZfCUEL9fjOH6s4yyDQLMohHjA5u+Cu1OcJMkTYXgc6Lq+X+QsD9E07dY0zSMyNP5QxLQQDtC7Rc6KIGRIRwzY6IwQhF30CWdlEGonQHyhgg2HwxUWljXJp8P1WZsBcWIK9oKCLpdBqFGCcrBnxGtyoRD3lmUdMFY1WWzVxHg8XqWTbA6OenSaPU+PSpDjOFsAyZoAdgdR6dckdAbkum4PYg8OFjDeIJ1Dnqsq2ATI9/1tACQEwmtAjrkbz1kV7A8UBMEO0nGh68DJlW3bJ4RkrQomQYSMRiMJgfASTk4zQH4sgwnWBOnw9rdx2C5wd87yYlXMrzd9NzXcsQ+k8ol+XgdCcP5uQveNf5BYbhhFUUe1c9U7Ouv3++2qdXPN/wDnQRX5Zj8RlQAAAABJRU5ErkJggg==');
            }
        `}render(){return kr`
            <style>
                ${this.styles}
            </style>
            <i class="cross close"></i>
            <div class="tip close">Скрыть объявление</div>
        `}};ys=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s}([mr("ya-ad-close")],ys);class vs extends Di{constructor(){super(...arguments),this.unit={}}createRenderRoot(){return this}render(){return this.value?kr`
            ${$o(this.value.trim())}
        `:kr``}}(function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);o>3&&s&&Object.defineProperty(e,n,s)})([Mi({type:Object})],vs.prototype,"unit",void 0);let bs=class extends vs{get value(){return this.unit.age}};bs=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s}([mr("ya-unit-age")],bs);var ws=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let xs=class extends vs{constructor(){super(...arguments),this.value=void 0}render(){return this.adOnly&&!this.unit.ad?(vr(this,"yrw-hidden"),kr``):kr`
            ${this.unit.category}
        `}};ws([Mi({type:Boolean,attribute:"ad-only"})],xs.prototype,"adOnly",void 0),xs=ws([mr("ya-unit-category")],xs);var ks=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};const _s=[{title:"Не интересуюсь",id:3,action:2},{title:"Уже купил",id:14,action:2},{title:"Спам",id:5,action:3}];let Ss=class extends Di{constructor(){super(),this.addEventListener("click",t=>{t.preventDefault()})}get styles(){return yr`
            :host {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                background: rgba(255, 255, 255, 0.98);
                font-size: 12px;
                z-index: 950;
                cursor: initial;
            }
            .yrw-options-wrapper {
                width: 100%;
                height: 100%;
                box-sizing: content-box;

                display: flex;
                flex-direction: column;
                justify-content: center;
            }
            .yrw-options,
            .yrw-selected {
                padding: 10px;
                text-align: center;
            }
            .yrw-selected {
                color: #000;
            }
            .yrw-options-title {
                color: #222222;
                padding-bottom: 15px;
                font-weight: bold;
            }
            .yrw-option {
                display: block;
                color: #555555;
                border: 1px solid #c8c8c8;
                border-radius: 4px;
                padding: 5px;
                margin-top: 5px;
                margin-bottom: 5px;
                cursor: pointer;
            }
            .yrw-option:hover {
                border-color: #333333;
                color: #333333;
            }
            .yrw-selected-icon,
            .yrw-selected-text {
                vertical-align: middle;
            }
            .yrw-hidden {
                display: none;
            }
        `}render(){return kr`
            <style>
                ${this.styles}
            </style>
            <div class="yrw-options-wrapper">
                <div class="yrw-options">
                    <div class="yrw-options-title">Скрыть объявление:</div>
                    <div class="options">
                        ${_s.map(t=>kr`
                                    <a
                                        class="yrw-option"
                                        @click=${this.eventFactory({reason:t.id,action:t.action})}
                                        >${t.title}</a
                                    >
                                `)}
                    </div>
                </div>
                <div class="yrw-selected yrw-hidden">
                    <div class="yrw-selected-title">
                        <svg class="yrw-selected-icon" width="18" height="18">
                            <path
                                d="M5.485 11.07L2.45 8.037 1.036 9.45l3.035 3.035-.034.036 1.414 1.415 8.485-8.485-1.414-1.414-7.035 7.035z"
                            ></path>
                        </svg>
                        <span class="yrw-selected-text">Спасибо, объявление скрыто.</span>
                    </div>
                </div>
            </div>
        `}eventFactory({reason:t,action:e}){return()=>{vr(this.optoionsEl,"yrw-hidden"),br(this.selectedEl,"yrw-hidden"),this.dispatchEvent(new CustomEvent("closeOptionChoosed",{detail:{reason:t,action:e}}))}}};ks([Cr(".yrw-options")],Ss.prototype,"optoionsEl",void 0),ks([Cr(".yrw-selected")],Ss.prototype,"selectedEl",void 0),Ss=ks([mr("ya-ad-close-options")],Ss);var Os=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let Cs=class extends vs{constructor(){super(...arguments),this.value=void 0,this.optionsShown=!1}get styles(){return yr`
            .yrw-hidden {
                display: none;
            }
        `}render(){return this.unit.ad?kr`
            <style>
                ${this.styles}
            </style>
            <ya-ad-close @closeClicked=${()=>this.closeClick()}></ya-ad-close>
            <ya-ad-close-options
                @closeOptionChoosed=${t=>this.optionSelected(t.detail)}
                class="yrw-hidden"
            ></ya-ad-close-options>
        `:kr``}closeClick(){this.optionsShown=!this.optionsShown,this.optionsShown?br(this.optionsEl,"yrw-hidden"):vr(this.optionsEl,"yrw-hidden")}optionSelected(t){vr(this.closeEl,"yrw-hidden"),this.dispatchEvent(new CustomEvent("closed",{detail:t}))}};Os([Cr("ya-ad-close")],Cs.prototype,"closeEl",void 0),Os([Cr("ya-ad-close-options")],Cs.prototype,"optionsEl",void 0),Cs=Os([mr("ya-unit-close")],Cs);var $s=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let Ps=class extends vs{get value(){return cs(this.unit.date,this.format)}};$s([Mi({type:String})],Ps.prototype,"format",void 0),Ps=$s([mr("ya-unit-date")],Ps);let Es=class extends vs{get value(){return this.unit.desc}};function js({price:t,decimalCount:e,decimal:n,thousands:i,prefix:r,suffix:o}){const s=new RegExp(`\\d(?=(\\d{3})+${e>0?"\\D":"$"})`,"g"),a=t.toFixed(e);return`${r}${(n?a.replace(".",n):a).replace(s,`$&${i}`)}${o}`}Es=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s}([mr("ya-unit-desc")],Es);var Rs=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let As=class extends vs{constructor(){super(...arguments),this.decimalCount=2,this.decimal=".",this.thousands=" ",this.suffix=" руб",this.prefix=""}get value(){if(void 0!==this.unit.price&&void 0!==this.unit.oldPrice&&this.unit.price!==this.unit.oldPrice)return js({price:Math.abs(this.unit.price-this.unit.oldPrice),decimalCount:this.decimalCount,decimal:this.decimal,thousands:this.thousands,prefix:this.prefix,suffix:this.suffix})}};Rs([Mi({type:Number,attribute:"decimal-count"})],As.prototype,"decimalCount",void 0),Rs([Mi({type:String})],As.prototype,"decimal",void 0),Rs([Mi({type:String})],As.prototype,"thousands",void 0),Rs([Mi({type:String})],As.prototype,"suffix",void 0),Rs([Mi({type:String})],As.prototype,"prefix",void 0),As=Rs([mr("ya-unit-discount")],As);let Ts=class extends vs{get value(){return this.unit.domain}};Ts=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s}([mr("ya-unit-domain")],Ts);var Ns=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let Is=class extends Di{constructor(){super(...arguments),this.sources=[],this.ratio=1/1.5,this._actualWidth=0}get styles(){return yr`
            :host {
                display: block;
                position: relative;
                overflow: hidden;
                width: 100%;
            }
            .yrw-img {
                display: block;
                position: relative;
                width: 100%;
            }
            .img-source {
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                background-position: center center;
                background-repeat: no-repeat;
                background-origin: content-box;
                background-size: cover;
            }
        `}render(){return vr(this,"unit-image"),kr`
            <style>
                ${this.styles}
            </style>
            <div class="yrw-img" style="padding-bottom: ${this.getPaddingBottom()}">
                <div
                    class="img-source"
                    style="background-image: ${this.getBackgroundImage()};"
                ></div>
            </div>
        `}updated(){Hr(()=>this.updateImageSize(),!0)}updateImageSize(){if(!this.sources.length)return;const t=parseFloat(Wr(this,"width")),e=parseFloat(Wr(this,"height"));if(isNaN(t))return;if(t===this._actualWidth)return;this._actualWidth=t;const n=Mo(this.sources,this._actualWidth);if(e){const i=Do(n,{w:t,h:e});if(i){const r=Ao({w:n[0],h:n[1]},{w:t,h:e},i);wr(this.imageContainer,{"padding-bottom":`${e}px`}),wr(this.img,{"background-position":`${100*r.x}% ${100*r.y}%`})}}wr(this.img,{"background-image":this.getBackgroundImage(n[2])})}getPaddingBottom(){return`${100*(this.ratio||1/1.5)}%`}getBackgroundImage(t=this.getDefaultSrc()){return`url(${t})`}getDefaultSrc(){return Lo(this.sources)}};Ns([Mi({type:Array})],Is.prototype,"sources",void 0),Ns([Mi({type:Number})],Is.prototype,"ratio",void 0),Ns([Cr(".img-source")],Is.prototype,"img",void 0),Ns([Cr(".yrw-img")],Is.prototype,"imageContainer",void 0),Is=Ns([mr("ya-image")],Is);var Ms=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let Ls=class extends vs{constructor(){super(...arguments),this.skipAge=!1,this.skipWarning=!1,this.value=void 0,this._showDisclaimer=!0}set showDisclaimer(t){t!==this._showDisclaimer&&(this._showDisclaimer=t,this.requestUpdate())}getImageSource(t,e){return t.images&&t.images.length?t.images:e?[[0,0,e,null]]:[]}render(){if(vr(this,"yrw-ya-unit-image"),!this.unit.images)return kr``;const t=this._showDisclaimer&&!this.skipAge?qo(this.unit):void 0,e=this._showDisclaimer&&!this.skipWarning?Go(this.unit):void 0,n=this.getImageSource(this.unit,this.src);return kr`
            <ya-image .sources=${n} .ratio=${this.ratio}></ya-image>
            ${t} ${e}
        `}};Ms([Mi({type:Number})],Ls.prototype,"ratio",void 0),Ms([Mi({type:String})],Ls.prototype,"src",void 0),Ms([Mi({type:Boolean,attribute:!1})],Ls.prototype,"skipAge",void 0),Ms([Mi({type:Boolean,attribute:!1})],Ls.prototype,"skipWarning",void 0),Ls=Ms([mr("ya-unit-image")],Ls);var Bs=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let Ds=class extends vs{constructor(){super(...arguments),this.decimalCount=2,this.decimal=".",this.thousands=" ",this.suffix="",this.prefix=""}get value(){if(void 0!==this.unit.oldPrice)return js({price:this.unit.oldPrice,decimalCount:this.decimalCount,decimal:this.decimal,thousands:this.thousands,prefix:this.prefix,suffix:this.suffix})}};Bs([Mi({type:Number,attribute:"decimal-count"})],Ds.prototype,"decimalCount",void 0),Bs([Mi({type:String})],Ds.prototype,"decimal",void 0),Bs([Mi({type:String})],Ds.prototype,"thousands",void 0),Bs([Mi({type:String})],Ds.prototype,"suffix",void 0),Bs([Mi({type:String})],Ds.prototype,"prefix",void 0),Ds=Bs([mr("ya-unit-old-price")],Ds);var zs=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let Vs=class extends vs{constructor(){super(...arguments),this.decimalCount=2,this.decimal=".",this.thousands=" ",this.suffix="",this.prefix=""}get value(){if(void 0!==this.unit.price)return js({price:this.unit.price,decimalCount:this.decimalCount,decimal:this.decimal,thousands:this.thousands,prefix:this.prefix,suffix:this.suffix})}};zs([Mi({type:Number,attribute:"decimal-count"})],Vs.prototype,"decimalCount",void 0),zs([Mi({type:String})],Vs.prototype,"decimal",void 0),zs([Mi({type:String})],Vs.prototype,"thousands",void 0),zs([Mi({type:String})],Vs.prototype,"suffix",void 0),zs([Mi({type:String})],Vs.prototype,"prefix",void 0),Vs=zs([mr("ya-unit-price")],Vs);let Fs=class extends vs{get value(){return this.unit.title}};Fs=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s}([mr("ya-unit-title")],Fs);let Us=class extends vs{get value(){return this.unit.warning}};Us=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s}([mr("ya-unit-warning")],Us);var Ws=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let Hs=class extends Di{constructor(){super(),this.checked=!1;const t=(t,e)=>{t&&this.dispatchEvent(new CustomEvent("unitClass",{detail:{classes:t,action:e},bubbles:!0}))};this.addEventListener("click",e=>{e.preventDefault(),this.checked=!this.checked,t(this.clickClass,this.checked?"add":"remove")}),this.addEventListener("mouseenter",e=>{e.preventDefault(),t(this.hoverClass,"add")}),this.addEventListener("mouseleave",e=>{e.preventDefault(),t(this.hoverClass,"remove")})}render(){return kr`
            <slot></slot>
        `}};Ws([Mi({type:String,attribute:"click-class"})],Hs.prototype,"clickClass",void 0),Ws([Mi({type:String,attribute:"hover-class"})],Hs.prototype,"hoverClass",void 0),Hs=Ws([mr("ya-button")],Hs);var Ys=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let qs=class extends Di{constructor(){super(...arguments),this.fullText=""}get styles(){return yr`
            :host {
                position: relative;
                display: block;
            }
            .yrw-hidden {
                display: none;
            }
            .yrw-content {
                text-decoration: inherit;
            }
        `}render(){return kr`
            <style>
                ${this.styles}
            </style>
            <span class="yrw-content"></span>
            <div class="yrw-hidden"><slot @slotchange=${this.onSlotChange}></slot></div>
        `}updated(){setTimeout(()=>this.onSlotChange(),0)}onSlotChange(){const t=this.textSlot.assignedNodes().map(t=>Jr(t)).join("");this.fullText!==t&&(this.fullText=t,this.applyText(t))}applyText(t){eo(this,this.lines,".yrw-content",t.trim())}};Ys([Mi({type:Number})],qs.prototype,"lines",void 0),Ys([Cr("slot")],qs.prototype,"textSlot",void 0),qs=Ys([mr("ya-clamp")],qs);var Gs=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let Qs=class extends Di{get styles(){return yr`
            :host {
                display: block;
                text-align: right;
                font-family: Helvetica, Arial, sans-serif;
                font-size: 12px;
                color: #999999;
                padding-top: 10px;
            }
        `}render(){vr(this,"recommendation-label");const t=this.text||"Яндекс.Рекомендации";return kr`
            <style>
                ${this.styles}
            </style>
            ${t}
        `}};Gs([Mi({type:String})],Qs.prototype,"text",void 0),Qs=Gs([mr("ya-recommendation-label")],Qs);const Xs=new WeakMap,Js=["ya-unit-title","ya-unit-desc","ya-unit-image","ya-unit-category","ya-unit-date","ya-unit-domain","ya-unit-price","ya-unit-old-price","ya-unit-discount","ya-unit-close","ya-unit-age","ya-unit-warning"].join(", "),Ks=Dn((t,e)=>n=>{if(!(n instanceof ri))throw new Error("repeat can only be used in text bindings");if(Xs.get(n)===t&&ei(t))return;const i=document.createElement("template");i.innerHTML=t;const r=document.importNode(i.content,!0);e(r),n.setValue(r),Xs.set(n,t)}),Zs=Dn((t,e,n)=>{let i=(t=>t.replace(/<(ya-[\w-]*)([^>]*)(\/>)/gm,"<$1$2></$1>"))(t);return Ks(i,t=>{const i={index:void 0,used:[]};Or(t,"*").forEach(t=>vr(t,"ya-grid-template"));const r=Or(t,"ya-unit-close");r.forEach(t=>{t.parentNode.removeChild(t)}),Or(t,"ya-units-grid").forEach((o,s)=>{const a=o.innerHTML,c=r.length?r[0].outerHTML:null,l=0!==Or(t,"ya-unit-age").length,d=0!==Or(t,"ya-unit-warning").length;ea(o,"items",e),ea(o,"template",n({unitTemplate:a,closeTemplate:c,customAge:l,customWarning:d})),ea(o,"config",Object.assign({},i,{index:s}))})})}),ta=Dn((t,e,n)=>Ks(t,t=>{Or(t,"ya-unit-image").forEach(t=>{ea(t,"skipAge",n.customAge),ea(t,"skipWarning",n.customWarning)}),Or(t,Js).forEach(t=>{ea(t,"unit",e)})}));function ea(t,e,n){const i=new si(t,e,["",""]);i.parts[0].setValue(n),i.commit()}var na=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s},ia=function(t,e,n,i){return new(n||(n=Promise))(function(r,o){function s(t){try{c(i.next(t))}catch(e){o(e)}}function a(t){try{c(i.throw(t))}catch(e){o(e)}}function c(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(s,a)}c((i=i.apply(t,e||[])).next())})};let ra=class extends Di{constructor(){super(...arguments),this.showDisclaimer=!1}createRenderRoot(){return this}render(){vr(this,"unit-container");const t=this.showDisclaimer&&!this.meta.customAge?qo(this.unit):void 0,e=this.showDisclaimer&&!this.meta.customWarning?Qo(Go(this.unit)):void 0;return kr`
            ${ta(this.template,this.unit,this.meta)} ${t} ${e}
        `}updated(){return ia(this,void 0,void 0,function*(){if(!(this.showDisclaimer||this.meta.customAge&&this.meta.customWarning))if(yield this.updateComplete,this.imgEl){parseFloat(Wr(this.imgEl,"width"))<=160&&(this.showDisclaimer=!0,this.imgEl.showDisclaimer=!1,this.requestUpdate())}else this.showDisclaimer=!0,this.requestUpdate()})}};na([Mi({type:Object})],ra.prototype,"unit",void 0),na([Mi({type:String})],ra.prototype,"template",void 0),na([Mi({type:Object})],ra.prototype,"meta",void 0),na([Cr("ya-unit-image")],ra.prototype,"imgEl",void 0),ra=na([mr("ya-unit-item")],ra);var oa=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let sa=class extends Di{constructor(){super(...arguments),this.cols=1,this.rows=1,this.sizes="",this.openInBlank=!1,this.items=[]}createRenderRoot(){return this}render(){const{items:t,template:e,config:n}=this;if(!e)return kr``;const[i,r]=this.sizes&&hs(this.sizes)||[this.cols,this.rows];let o=0;n&&(n.used[n.index]=i*r,o=function(t,e,n){let i=0;for(arguments.length<3&&(i=1,n=t[0]);i<t.length;i++)n=e(n,t[i],i,t);return n}(d(n.used),(t,e)=>t+(e<n.index?n.used[e]:0),0));const s=t.slice(o),a=e({openInBlank:this.openInBlank});return kr`
            ${ko({rows:r,cols:i,items:s,template:a,scope:"ya-grid-template"})}
        `}};oa([Mi({type:Number})],sa.prototype,"cols",void 0),oa([Mi({type:Number})],sa.prototype,"rows",void 0),oa([Mi({type:String})],sa.prototype,"sizes",void 0),oa([Mi({type:Boolean,attribute:"target-blank"})],sa.prototype,"openInBlank",void 0),oa([Mi({type:Array})],sa.prototype,"items",void 0),oa([Mi({type:Object})],sa.prototype,"config",void 0),oa([Mi({type:Function})],sa.prototype,"template",void 0),sa=oa([mr("ya-units-grid")],sa);var aa=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s},ca=function(t,e,n,i){return new(n||(n=Promise))(function(r,o){function s(t){try{c(i.next(t))}catch(e){o(e)}}function a(t){try{c(i.throw(t))}catch(e){o(e)}}function c(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(s,a)}c((i=i.apply(t,e||[])).next())})};let la=class extends Di{constructor(){super(),this.avgColorApplied=!1,this.contextMenuOpen=!1,this.addEventListener("click",t=>{t.defaultPrevented||(t.preventDefault(),this.dispatchEvent(new CustomEvent("clicked")),this.changeClickLink(new CustomEvent("clicked")))}),this.addEventListener("mouseenter",()=>{this.dispatchEvent(new CustomEvent("hovered"))}),this.addEventListener("mouseleave",()=>{this.dispatchEvent(new CustomEvent("leaved"))}),this.addEventListener("contextmenu",()=>{this.changeClickLink(new CustomEvent("contextmenu"))}),window.addEventListener("click",()=>this.changeClickLink(new CustomEvent("clicked")))}get styles(){return yr`
            .yrw-body_warning {
                display: block;
                margin-bottom: 30px;
            }
            .yrw-url {
                text-decoration: none;
                height: inherit;
            }
        `}render(){return vr(this,"unit-wrapper"),vr(this,"ya-grid-template"),this.unit.age&&vr(this,"unit-with-age"),this.unit.warning&&vr(this,"unit-with-warning"),this.unit.images&&this.unit.images.length||vr(this,"unit-without-image"),kr`
            <style>
                ${this.styles}
            </style>
            <a href=${this.unit.link} class="yrw-url">
                <slot @unitClass=${this.updateClasses}></slot>
            </a>
            ${this.close&&kr`
                    <ya-unit-close
                        .unit=${this.unit}
                        @closed=${t=>this.onClose(t.detail)}
                    ></ya-unit-close>
                `}
        `}updated(){this.dispatchEvent(new CustomEvent("rendered")),this.initVisibilityChecker(),this.applyAvgColor()}updateClasses({detail:{classes:t,action:e}}){"add"===e?vr(this,t):br(this,t)}initVisibilityChecker(){this.visibilityChecker||(this.visibilityChecker=ns(this,()=>{this.dispatchEvent(new CustomEvent("visible"))},t=>{this.dispatchEvent(new CustomEvent(t?"visibleNow":"hiddenNow"))}))}applyAvgColor(){return ca(this,void 0,void 0,function*(){if(!this.unit.images||this.avgColorApplied)return;const t=yield function({images:t}){return Io(this,void 0,void 0,function*(){const e=Lo(t);if(e)try{return Bo(e)}catch(n){return}})}(this.unit);if(!t)return;const e=t.join(",");Er&&wr(this,{"--unit-average-color":`rgb(${e})`,"--unit-average-color-rgb":e});const n=function(t,e=127){return function([t,e,n]){return(299*t+587*e+114*n)/1e3}(t)>e}(t);vr(this,n?"unit-image-light":"unit-image-dark"),this.avgColorApplied=!0})}changeClickLink(t){"clicked"===t.type&&this.contextMenuOpen&&(this.contextMenuOpen=!1,this.urlEl.href=this.unit.link||this.unit.beacon||""),"contextmenu"===t.type&&(this.contextMenuOpen=!0,this.urlEl.href=this.unit.beacon||this.unit.link||"")}onClose(t){this.dispatchEvent(new CustomEvent("closed",{detail:t}))}};aa([Mi({type:Object})],la.prototype,"unit",void 0),aa([Mi({type:Object})],la.prototype,"close",void 0),aa([Cr("a")],la.prototype,"urlEl",void 0),la=aa([mr("ya-unit-wrapper")],la);var da=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let ha=class extends Di{constructor(){super();const t=ss(()=>this.grid.requestUpdate(),200);window.addEventListener("resize",t)}render(){const{units:t,template:e,css:n}=this;return kr`
            <style>
                ${this.styles}
                ${yr`
                    ${n}
                `}
            </style>
            ${Zs(e,t,({unitTemplate:t,closeTemplate:e,customAge:n,customWarning:i})=>({openInBlank:r=!1})=>o=>{const s={customAge:n,customWarning:i};return kr`
                <ya-unit-wrapper
                    @clicked=${this.eventFactory("click",o,r)}
                    @rendered=${this.eventFactory("render",o)}
                    @visible=${this.eventFactory("visible",o)}
                    @hovered=${this.eventFactory("hover",o)}
                    @leaved=${this.eventFactory("leave",o)}
                    @visibleNow=${this.eventFactory("visibleNow",o)}
                    @hiddenNow=${this.eventFactory("hiddenNow",o)}
                    @closed=${this.eventFactory("close",o)}
                    .unit=${o}
                    .close=${e}
                >
                    <ya-unit-item .unit=${o} .template=${t} .meta=${s} />
                </ya-unit-wrapper>
            `})}
        `}eventFactory(t,e,n=!1){return i=>{this.dispatchEvent(new CustomEvent("unitEvent",{detail:{unit:e,eventName:t,openInBlank:n,orig:i.detail}}))}}get styles(){return yr`
            :host {
                display: block;
                width: 100%;
                position: relative;
                z-index: 1;
                font-family: 'Open Sans', Arial, sans-serif;
            }

            /* unit */
            .unit-wrapper {
                position: relative;
                display: flex;
                flex-direction: column;
                flex-wrap: nowrap;
                box-sizing: border-box;
                margin: 0 auto;
                overflow: hidden;
                width: 100%;
                cursor: pointer;
            }

            /* grid */
            .grid {
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                justify-content: flex-start;
                align-items: stretch;
                align-content: flex-start;
                width: 100%;
                box-sizing: border-box;
            }
            .grid-row {
                position: relative;
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                justify-content: flex-start;
                align-items: stretch;
                align-content: flex-start;
                width: 100%;
            }
            .grid-row:first-child {
                margin-top: 0;
            }
            .grid-item {
                position: relative;
                flex: 1 1 0px;
            }
            .grid-item:first-child {
                margin-left: 0;
            }
            .yrw-ya-unit-image {
                position: relative;
                display: block;
            }
            .yrw-hidden {
                display: none;
            }
        `}};function ua(t){const e=Object.values;if("function"==typeof e)return e(t);{const e=[];for(const n in t)l(t,n)&&e.push(t[n]);return e}}function pa(t,e){Object($r.isString)(t)?fa(ga(t,e)):t&&t.length&&t.forEach(t=>fa(ga(t,e)))}function fa(t){if(!t)return;return ht({method:"GET",url:ce(t),headers:{},withCredentials:!0})}function ga(t,e){return t&&e?ce(Ot(function(t){return t}(t),e)):t}da([Mi({type:Array})],ha.prototype,"units",void 0),da([Mi({type:String})],ha.prototype,"template",void 0),da([Mi({type:String})],ha.prototype,"css",void 0),da([Cr("ya-units-grid")],ha.prototype,"grid",void 0),ha=da([mr("ya-grid-template")],ha);const ma=void 0!==window.YandexMultifeedAPI,ya=void 0!==window.YandexApplicationsAPIBackend,va=ma||ya;function ba(t){null!==window.open(t,"_blank")||va||wa(t)}function wa(t){window.location.href=t}var xa=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let ka=class extends Di{constructor(t,e,n,i){super(),this.rendered=!1,this._cb=[],this.disconnected=!1,this.unitsState={adsWasVisible:!1,wasVisible:{},wasRendered:{},visible:{}},this.counters={visible:0,click:0},this.getState=()=>Object.assign({},this.unitsState,{isVisibleNow:en(ua(this.unitsState.visible),t=>t),adsCount:this.units.reduce((t,e)=>t+Number(e.ad),0),disconnected:this.disconnected,isWidget:!0}),this.props=this.props||e||{},this.units=this.units||t||[],this.template=this.template||n||"",this.css=this.css||i||""}on(t,e){this._cb.push({event:t,callback:e})}createRenderRoot(){return this.attachShadow({mode:"closed"})}disconnectedCallback(){this.disconnected=!0}render(){const{units:t,props:e,template:n,css:i}=this,r=d(e).length>0;return kr`
            <style>
                :host {
                    display: block;
                    width: 100%;

                    color: initial;
                    font-family: initial;
                    font-size: initial;
                    font-weight: initial;
                    font-style: initial;
                    line-height: initial;
                    letter-spacing: initial;
                    text-align: initial;
                    text-decoration: initial;
                }
            </style>
            ${t.length?r?kr`
                      <ya-grid-props
                          .units=${t}
                          .props=${e}
                          @unitEvent=${this.onEvent}
                      ></ya-grid-props>
                  `:kr`
                      <ya-grid-template
                          .units=${t}
                          .template=${n}
                          .css=${i}
                          @unitEvent=${this.onEvent}
                      ></ya-grid-template>
                  `:kr``}
        `}_emit(t){this._cb.forEach(e=>{e.event===t&&e.callback()})}onUnitClick(t,e=!1){t.ad||pa(t.beacon,{"event-counter":String(++this.counters.click)}),t.link&&(t.ad?ba(t.link):(this._emit("click"),e?ba(t.link):wa(t.link)))}onUnitRender(t){this.rendered||(this.rendered=!0,this._emit("render")),this.unitsState.wasRendered[t.id]||(this.unitsState.wasRendered[t.id]=!0,pa(t.rendertracker))}onUnitVisible(t){this.unitsState.wasVisible[t.id]||(t.ad&&!this.unitsState.adsWasVisible&&(pa(t.adsImptrackers),this.unitsState.adsWasVisible=!0),pa(t.imptrackers,t.ad?void 0:{"event-counter":String(++this.counters.visible)}),this.unitsState.wasVisible[t.id]=!0)}onUnitClose(t,{reason:e,action:n}){if(!t.abuseUrl)return;pa(Ot(t.abuseUrl,{"reason-id":String(e),"action-id":String(n)}))}onEvent({detail:{unit:t,eventName:e,openInBlank:n,orig:i}}){switch(e){case"render":return this.onUnitRender(t);case"hover":case"visible":return this.onUnitVisible(t);case"click":return this.onUnitClick(t,n);case"visibleNow":return void(this.unitsState.visible[t.id]=!0);case"hiddenNow":return void(this.unitsState.visible[t.id]=!1);case"close":return this.onUnitClose(t,i)}}};xa([Mi({type:Array})],ka.prototype,"units",void 0),xa([Mi({type:Object})],ka.prototype,"props",void 0),xa([Mi({type:String})],ka.prototype,"template",void 0),xa([Mi({type:String})],ka.prototype,"css",void 0),ka=xa([mr("ya-recommendation-widget")],ka);const _a=5e3;const Sa=new class{constructor(){this.mediaBlocks={}}render(t,e,n,i){const{id:r,render:o,statId:s,nonce:a}=t;return this.clearBlock(t.render),e.rtb?(t.media=e,this.renderMedia({block:{id:r,render:o,statId:s},settings:n,meta:t.media,nonce:a,additional:{testtag:i}})):(t.meta=e,this.renderWidget({block:{id:r,render:o,statId:s},settings:n,meta:t.meta,additional:{testtag:i}}))}renderMedia({block:t,meta:e,nonce:n}){return new Promise((i,r)=>{const o=t.render,s=document.querySelector(o);if(!s)return void r(new a({message:`Can not find element with selector "${o}"`,code:"containerNotFound"}));s.innerHTML="";const c=new fr(e,s,t.id,n);this.mediaBlocks[o]=c,c.render(),i(()=>c.getState())})}renderWidget({block:t,settings:e,meta:n,additional:i={}}){return new Promise((r,o)=>{const s=document.querySelector(t.render);if(!s)return void o(new a({message:`Can not find element with selector "${t.render}"`,code:"containerNotFound"}));let{testtag:c}=i;c||(c=new ie({emptyLoaderTesttag:!0})),c.setProps({format:ue(e,t.id)});const l=le(n,c,t.statId),h=function(t){return t?t.session_label:void 0}(n),u=function(t,e){const n=he(t,e),{props:i={}}=n||{};return d(i).length?i:void 0}(e,t.id),[p="",f=""]=function(t,e){const n=he(t,e);return n.template&&n.css?[n.template,n.css]:void 0}(e,t.id)||[];if(!l.length)throw new a({message:"Meta has no items",code:"noItemsForWidget"});if(!(u||p&&f))throw new a({message:"Props and template are empty",code:"wrongWidgetSettings"});try{const t=ae(f),e=new ka(l,u,p,t),n=()=>{pe(h,"render"),r(e.getState)},i=()=>{!function(t){try{Ht.event({name:t.name,data:Object.assign({},t.data),labels:Yt()})}catch(e){}}({name:"waitForRender",data:{timeout:_a.toString()}})},{promise:a,stop:c}=Gt(_a);a.then(n).catch(i),e.on("render",c),e.on("click",()=>pe(h,"click")),s.innerHTML="",s.appendChild(e)}catch(g){qt(g,"renderFail"),o("widgetRenderFail")}})}clearBlock(t){this.mediaBlocks[t]&&this.mediaBlocks[t].destroy()}};window.yaads||(qt(new Error('"window.yaads" does not exists'),"attachRenderMethod"),window.yaads=[]),window.yaads&&window.yaads.renderWidget&&qt(new Error('"window.yaads" already has "renderWidget"'),"attachRenderMethod"),window.yaads.renderWidget=t=>Sa.renderWidget(t),window.yaads.render=(t,e,n,i)=>Sa.render(t,e,n,i)},function(t,e,n){"use strict";n.r(e);var i=n(5);const r=(t=window)=>t.navigator.userAgent.indexOf("UCBrowser")>-1;function o(t=window){const e=t.navigator.userAgent.toLowerCase();return/ipad|iphone|ipod/.test(e)&&!t.MSStream&&!r(t)}const s=(t=window)=>/Windows Phone/i.test(t.navigator.userAgent);function a(t=window){const{userAgent:e=""}=t.navigator,n=/Android/.test(e),i=s(t),r=/com\.yandex\.mobile\.metrica\.ads\.sdk.*?Android/.test(e);return n&&!i||r}var c=n(2);const l=(t=window)=>/YaBrowser/.test(Object(c.a)(t));var d=n(8);var h=n(14),u=n(13),p=n(12);var f=n(7);const g=(t,e=f.a)=>{if(!t)return!1;let[n,i]=t.split(":");if(i||(i="none"),window.CSS&&window.CSS.supports){for(let t=0;t<e.length;t++)if(window.CSS.supports(e[t]+n,i))return!0;return!1}const r=new Image;for(let o=0;o<e.length;o++)if(r.style.cssText=`${e[o]+n}:${i}`,r.style.length)return!0;return!1},m=g("flex"),y=g("transform"),v=g("transition"),b=(g("animation"),g("filter:blur(2px)"));var w=n(0);const x=(t=window)=>"BackCompat"===t.document.compatMode,k=(t=window)=>{const e=Object(c.a)(t),n=e.match(/(opera|chrome|safari|firefox|ucbrowser|msie|trident(?=\/))\/?\s*(\d+)/i)||[];if(/trident/i.test(n[1]))return"MSIE";if("Chrome"===n[1]){const t=e.match(/\b(OPR|Edge|YaBrowser)\/(\d+)/);if(null!==t)return t[1].replace("OPR","Opera")}return n[1]};n.d(e,"isQuirks",function(){return S}),n.d(e,"isOpera",function(){return O}),n.d(e,"isOperaMini",function(){return C}),n.d(e,"ieVersion",function(){return $}),n.d(e,"isIE10",function(){return P}),n.d(e,"isIE11",function(){return E}),n.d(e,"isIE",function(){return j}),n.d(e,"isIEQuirks",function(){return R}),n.d(e,"isEdge",function(){return A}),n.d(e,"isSafari",function(){return T}),n.d(e,"safariVersion",function(){return N}),n.d(e,"isFirefox",function(){return I}),n.d(e,"isChrome",function(){return M}),n.d(e,"isYaBrowser",function(){return L}),n.d(e,"isUCBrowser",function(){return B}),n.d(e,"isIOS",function(){return D}),n.d(e,"iOSVersion",function(){return z}),n.d(e,"isAndroid",function(){return V}),n.d(e,"androidVersion",function(){return F}),n.d(e,"isWindowsPhone",function(){return U}),n.d(e,"isMobile",function(){return W}),n.d(e,"isPhone",function(){return H}),n.d(e,"isHDPIScreen",function(){return Y}),n.d(e,"flashVer",function(){return q}),n.d(e,"getDeviceName",function(){return G}),n.d(e,"support",function(){return Q}),n.d(e,"testProperty",function(){return g}),n.d(e,"getBrowserName",function(){return k});const _=window,S=x(_),O=((t=window)=>t.navigator.userAgent.indexOf("Opera")>-1||t.navigator.userAgent.indexOf("OPR")>-1)(_),C=Object(d.a)(_),$=Object(i.a)(_),P=10===$,E=11===$,j=$>0,R=((t=window)=>{const e=Object(i.a)(t);return e>0&&(5===t.document.documentMode||10!==e&&x(t))})(_),A=$&&$>11||!1,T=Object(h.a)(_),N=function(t=window){if(p.a&&t.navigator&&t.navigator.userAgent){const e=t.navigator.userAgent.match(/version\/(\d+)/i);if(e){const t=Number(e[1]);if(t)return t}}return-1}(_),I=((t=window)=>/firefox/.test(t.navigator.userAgent.toLowerCase()))(_),M=((t=window)=>/Chrome/.test(t.navigator.userAgent)&&/Google Inc/.test(t.navigator.vendor)&&!l(t))(_),L=l(_),B=r(_),D=o(_),z=function(t=window){if(o(t)&&t.navigator){const{platform:e}=t.navigator;if(e&&/iP(hone|od|ad)/.test(e)){const e=t.navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);if(e)return parseInt(e[1],10)}}return-1}(_),V=a(_),F=function(t=window){const e=t.navigator.userAgent,n=e.indexOf("Android");return-1===n?-1:parseFloat(e.slice(n+8))}(_),U=s(_),W=((t=window)=>/Mobi|Android/i.test(t.navigator.userAgent))(_),H=((t=window)=>((t=window)=>o(t)&&Object(c.a)(t).toLowerCase().indexOf("iphone")>-1)(t)||a(t)&&Object(c.a)(t).toLowerCase().indexOf("mobile")>-1)(_),Y=((t=window)=>{return(t.devicePixelRatio||t.screen.deviceXDPI&&t.screen.deviceXDPI/t.screen.logicalXDPI||1)>1})(_),q=[0,0,0];function G(){return(H?"phone":W&&"tablet")||"desktop"}const Q={cssFlex:m,cssTransform:y,cssTransition:v,cssFilterBlur:b,touch:Object(u.a)(_),postMessage:((t=window)=>Object(w.a)(t.postMessage)&&-1===Object(i.a)(t)&&!Object(d.a)(t))(_),longUrls:((t=window)=>!((t=window)=>-1!==Object(i.a)(t))(t))(_)}}]);