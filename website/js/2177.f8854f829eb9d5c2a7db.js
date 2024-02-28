(self.webpackChunk=self.webpackChunk||[]).push([[2177],{92177:(e,t,r)=>{"use strict";var n=r(64349);const o="https://personalize.mat.cimpress.io/",s="https://int-personalize.mat.cimpress.io/";e.exports={getRecommendations:async(e,t,r)=>{let i;if(!t.token){throw new Error({status:"FAILED",message:"Authentication Token missing"})}if(i=t.token,!e.lob||!e.tenant){let e={status:"FAILED",message:"Key Fields Missing: Please check lob and tenant"};throw console.error(e.message),new Error(e)}if(!(e.placementId||e.channels&&e.locations)){let e={status:"FAILED",message:"Key Fields Missing: Either placementId or (channels and locations) are missing"};throw console.error(e.message),new Error(e)}try{let t=await async function(e,t,r){const{upSell:i}=e;delete e.upSell;const a={queryStringParameters:{...e},upSell:i},u=`${r?s:o}v2/personalize`,c={"content-type":"application/json",tenant:e.tenant,Authorization:`Bearer ${t}`};return n.post(u,a,{headers:c})}(e,i,r);return t.data}catch(e){console.error(`Error in getting recommendations:: MESSAGE->${e.message} :: URL->${e.config.url} METHOD->${e.config.method}`)}},updateMetric:(e,t)=>{let r=e.token,i=e.tenant,a={};for(const[t,r]of Object.entries(e))"tenant"!==t&&"token"!==t&&(a[t]=r);return async function(e,t,r,i){const a=`${i?s:o}v2/recordMetric`,u={"content-type":"application/json",Authorization:`Bearer ${t}`,tenant:e};return n.post(a,{metrics:r},{headers:u})}(i,r,a,t)}}},64349:(e,t,r)=>{e.exports=r(34651)},7761:(e,t,r)=>{"use strict";var n=r(44692),o=r(70908),s=r(43359),i=r(14756),a=r(72605),u=r(7277),c=r(9396),f=r(71802),l=r(55419),p=r(70300),d=r(99816);e.exports=function(e){return new Promise((function(t,r){var h,m=e.data,v=e.headers,g=e.responseType;function y(){e.cancelToken&&e.cancelToken.unsubscribe(h),e.signal&&e.signal.removeEventListener("abort",h)}n.isFormData(m)&&n.isStandardBrowserEnv()&&delete v["Content-Type"];var E=new XMLHttpRequest;if(e.auth){var b=e.auth.username||"",w=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";v.Authorization="Basic "+btoa(b+":"+w)}var O=a(e.baseURL,e.url);function R(){if(E){var n="getAllResponseHeaders"in E?u(E.getAllResponseHeaders()):null,s={data:g&&"text"!==g&&"json"!==g?E.response:E.responseText,status:E.status,statusText:E.statusText,headers:n,config:e,request:E};o((function(e){t(e),y()}),(function(e){r(e),y()}),s),E=null}}if(E.open(e.method.toUpperCase(),i(O,e.params,e.paramsSerializer),!0),E.timeout=e.timeout,"onloadend"in E?E.onloadend=R:E.onreadystatechange=function(){E&&4===E.readyState&&(0!==E.status||E.responseURL&&0===E.responseURL.indexOf("file:"))&&setTimeout(R)},E.onabort=function(){E&&(r(new l("Request aborted",l.ECONNABORTED,e,E)),E=null)},E.onerror=function(){r(new l("Network Error",l.ERR_NETWORK,e,E,E)),E=null},E.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",n=e.transitional||f;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(new l(t,n.clarifyTimeoutError?l.ETIMEDOUT:l.ECONNABORTED,e,E)),E=null},n.isStandardBrowserEnv()){var x=(e.withCredentials||c(O))&&e.xsrfCookieName?s.read(e.xsrfCookieName):void 0;x&&(v[e.xsrfHeaderName]=x)}"setRequestHeader"in E&&n.forEach(v,(function(e,t){void 0===m&&"content-type"===t.toLowerCase()?delete v[t]:E.setRequestHeader(t,e)})),n.isUndefined(e.withCredentials)||(E.withCredentials=!!e.withCredentials),g&&"json"!==g&&(E.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&E.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&E.upload&&E.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(h=function(e){E&&(r(!e||e&&e.type?new p:e),E.abort(),E=null)},e.cancelToken&&e.cancelToken.subscribe(h),e.signal&&(e.signal.aborted?h():e.signal.addEventListener("abort",h))),m||(m=null);var A=d(O);A&&-1===["http","https","file"].indexOf(A)?r(new l("Unsupported protocol "+A+":",l.ERR_BAD_REQUEST,e)):E.send(m)}))}},34651:(e,t,r)=>{"use strict";var n=r(44692),o=r(45485),s=r(33211),i=r(3358);var a=function e(t){var r=new s(t),a=o(s.prototype.request,r);return n.extend(a,s.prototype,r),n.extend(a,r),a.create=function(r){return e(i(t,r))},a}(r(96619));a.Axios=s,a.CanceledError=r(70300),a.CancelToken=r(44340),a.isCancel=r(63124),a.VERSION=r(82542).version,a.toFormData=r(11228),a.AxiosError=r(55419),a.Cancel=a.CanceledError,a.all=function(e){return Promise.all(e)},a.spread=r(24888),a.isAxiosError=r(23075),e.exports=a,e.exports.default=a},44340:(e,t,r)=>{"use strict";var n=r(70300);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;this.promise.then((function(e){if(r._listeners){var t,n=r._listeners.length;for(t=0;t<n;t++)r._listeners[t](e);r._listeners=null}})),this.promise.then=function(e){var t,n=new Promise((function(e){r.subscribe(e),t=e})).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e((function(e){r.reason||(r.reason=new n(e),t(r.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},o.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},70300:(e,t,r)=>{"use strict";var n=r(55419);function o(e){n.call(this,null==e?"canceled":e,n.ERR_CANCELED),this.name="CanceledError"}r(44692).inherits(o,n,{__CANCEL__:!0}),e.exports=o},63124:e=>{"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},33211:(e,t,r)=>{"use strict";var n=r(44692),o=r(14756),s=r(51794),i=r(90420),a=r(3358),u=r(72605),c=r(25573),f=c.validators;function l(e){this.defaults=e,this.interceptors={request:new s,response:new s}}l.prototype.request=function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=a(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var r=t.transitional;void 0!==r&&c.assertOptions(r,{silentJSONParsing:f.transitional(f.boolean),forcedJSONParsing:f.transitional(f.boolean),clarifyTimeoutError:f.transitional(f.boolean)},!1);var n=[],o=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(o=o&&e.synchronous,n.unshift(e.fulfilled,e.rejected))}));var s,u=[];if(this.interceptors.response.forEach((function(e){u.push(e.fulfilled,e.rejected)})),!o){var l=[i,void 0];for(Array.prototype.unshift.apply(l,n),l=l.concat(u),s=Promise.resolve(t);l.length;)s=s.then(l.shift(),l.shift());return s}for(var p=t;n.length;){var d=n.shift(),h=n.shift();try{p=d(p)}catch(e){h(e);break}}try{s=i(p)}catch(e){return Promise.reject(e)}for(;u.length;)s=s.then(u.shift(),u.shift());return s},l.prototype.getUri=function(e){e=a(this.defaults,e);var t=u(e.baseURL,e.url);return o(t,e.params,e.paramsSerializer)},n.forEach(["delete","get","head","options"],(function(e){l.prototype[e]=function(t,r){return this.request(a(r||{},{method:e,url:t,data:(r||{}).data}))}})),n.forEach(["post","put","patch"],(function(e){function t(t){return function(r,n,o){return this.request(a(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}l.prototype[e]=t(),l.prototype[e+"Form"]=t(!0)})),e.exports=l},55419:(e,t,r)=>{"use strict";var n=r(44692);function o(e,t,r,n,o){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o)}n.inherits(o,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var s=o.prototype,i={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(e){i[e]={value:e}})),Object.defineProperties(o,i),Object.defineProperty(s,"isAxiosError",{value:!0}),o.from=function(e,t,r,i,a,u){var c=Object.create(s);return n.toFlatObject(e,c,(function(e){return e!==Error.prototype})),o.call(c,e.message,t,r,i,a),c.name=e.name,u&&Object.assign(c,u),c},e.exports=o},51794:(e,t,r)=>{"use strict";var n=r(44692);function o(){this.handlers=[]}o.prototype.use=function(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},72605:(e,t,r)=>{"use strict";var n=r(27315),o=r(31268);e.exports=function(e,t){return e&&!n(t)?o(e,t):t}},90420:(e,t,r)=>{"use strict";var n=r(44692),o=r(86767),s=r(63124),i=r(96619),a=r(70300);function u(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new a}e.exports=function(e){return u(e),e.headers=e.headers||{},e.data=o.call(e,e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||i.adapter)(e).then((function(t){return u(e),t.data=o.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return s(t)||(u(e),t&&t.response&&(t.response.data=o.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},3358:(e,t,r)=>{"use strict";var n=r(44692);e.exports=function(e,t){t=t||{};var r={};function o(e,t){return n.isPlainObject(e)&&n.isPlainObject(t)?n.merge(e,t):n.isPlainObject(t)?n.merge({},t):n.isArray(t)?t.slice():t}function s(r){return n.isUndefined(t[r])?n.isUndefined(e[r])?void 0:o(void 0,e[r]):o(e[r],t[r])}function i(e){if(!n.isUndefined(t[e]))return o(void 0,t[e])}function a(r){return n.isUndefined(t[r])?n.isUndefined(e[r])?void 0:o(void 0,e[r]):o(void 0,t[r])}function u(r){return r in t?o(e[r],t[r]):r in e?o(void 0,e[r]):void 0}var c={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:u};return n.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=c[e]||s,o=t(e);n.isUndefined(o)&&t!==u||(r[e]=o)})),r}},70908:(e,t,r)=>{"use strict";var n=r(55419);e.exports=function(e,t,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?t(new n("Request failed with status code "+r.status,[n.ERR_BAD_REQUEST,n.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r)):e(r)}},86767:(e,t,r)=>{"use strict";var n=r(44692),o=r(96619);e.exports=function(e,t,r){var s=this||o;return n.forEach(r,(function(r){e=r.call(s,e,t)})),e}},96619:(e,t,r)=>{"use strict";var n=r(44692),o=r(88345),s=r(55419),i=r(71802),a=r(11228),u={"Content-Type":"application/x-www-form-urlencoded"};function c(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var f,l={transitional:i,adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(f=r(7761)),f),transformRequest:[function(e,t){if(o(t,"Accept"),o(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e))return e;if(n.isArrayBufferView(e))return e.buffer;if(n.isURLSearchParams(e))return c(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var r,s=n.isObject(e),i=t&&t["Content-Type"];if((r=n.isFileList(e))||s&&"multipart/form-data"===i){var u=this.env&&this.env.FormData;return a(r?{"files[]":e}:e,u&&new u)}return s||"application/json"===i?(c(t,"application/json"),function(e,t,r){if(n.isString(e))try{return(t||JSON.parse)(e),n.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(r||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||l.transitional,r=t&&t.silentJSONParsing,o=t&&t.forcedJSONParsing,i=!r&&"json"===this.responseType;if(i||o&&n.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(i){if("SyntaxError"===e.name)throw s.from(e,s.ERR_BAD_RESPONSE,this,null,this.response);throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:r(99018)},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],(function(e){l.headers[e]={}})),n.forEach(["post","put","patch"],(function(e){l.headers[e]=n.merge(u)})),e.exports=l},71802:e=>{"use strict";e.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}},82542:e=>{e.exports={version:"0.27.2"}},45485:e=>{"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},14756:(e,t,r)=>{"use strict";var n=r(44692);function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var s;if(r)s=r(t);else if(n.isURLSearchParams(t))s=t.toString();else{var i=[];n.forEach(t,(function(e,t){null!=e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),i.push(o(t)+"="+o(e))})))})),s=i.join("&")}if(s){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}},31268:e=>{"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},43359:(e,t,r)=>{"use strict";var n=r(44692);e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,o,s,i){var a=[];a.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),n.isString(o)&&a.push("path="+o),n.isString(s)&&a.push("domain="+s),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},27315:e=>{"use strict";e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}},23075:(e,t,r)=>{"use strict";var n=r(44692);e.exports=function(e){return n.isObject(e)&&!0===e.isAxiosError}},9396:(e,t,r)=>{"use strict";var n=r(44692);e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=o(window.location.href),function(t){var r=n.isString(t)?o(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}},88345:(e,t,r)=>{"use strict";var n=r(44692);e.exports=function(e,t){n.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))}},99018:e=>{e.exports=null},7277:(e,t,r)=>{"use strict";var n=r(44692),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,s,i={};return e?(n.forEach(e.split("\n"),(function(e){if(s=e.indexOf(":"),t=n.trim(e.substr(0,s)).toLowerCase(),r=n.trim(e.substr(s+1)),t){if(i[t]&&o.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([r]):i[t]?i[t]+", "+r:r}})),i):i}},99816:e=>{"use strict";e.exports=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}},24888:e=>{"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},11228:(e,t,r)=>{"use strict";var n=r(44692);e.exports=function(e,t){t=t||new FormData;var r=[];function o(e){return null===e?"":n.isDate(e)?e.toISOString():n.isArrayBuffer(e)||n.isTypedArray(e)?"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}return function e(s,i){if(n.isPlainObject(s)||n.isArray(s)){if(-1!==r.indexOf(s))throw Error("Circular reference detected in "+i);r.push(s),n.forEach(s,(function(r,s){if(!n.isUndefined(r)){var a,u=i?i+"."+s:s;if(r&&!i&&"object"==typeof r)if(n.endsWith(s,"{}"))r=JSON.stringify(r);else if(n.endsWith(s,"[]")&&(a=n.toArray(r)))return void a.forEach((function(e){!n.isUndefined(e)&&t.append(u,o(e))}));e(r,u)}})),r.pop()}else t.append(i,o(s))}(e),t}},25573:(e,t,r)=>{"use strict";var n=r(82542).version,o=r(55419),s={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){s[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}}));var i={};s.transitional=function(e,t,r){function s(e,t){return"[Axios v"+n+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}return function(r,n,a){if(!1===e)throw new o(s(n," has been removed"+(t?" in "+t:"")),o.ERR_DEPRECATED);return t&&!i[n]&&(i[n]=!0,console.warn(s(n," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,n,a)}},e.exports={assertOptions:function(e,t,r){if("object"!=typeof e)throw new o("options must be an object",o.ERR_BAD_OPTION_VALUE);for(var n=Object.keys(e),s=n.length;s-- >0;){var i=n[s],a=t[i];if(a){var u=e[i],c=void 0===u||a(u,i,e);if(!0!==c)throw new o("option "+i+" must be "+c,o.ERR_BAD_OPTION_VALUE)}else if(!0!==r)throw new o("Unknown option "+i,o.ERR_BAD_OPTION)}},validators:s}},44692:(e,t,r)=>{"use strict";var n,o=r(45485),s=Object.prototype.toString,i=(n=Object.create(null),function(e){var t=s.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())});function a(e){return e=e.toLowerCase(),function(t){return i(t)===e}}function u(e){return Array.isArray(e)}function c(e){return void 0===e}var f=a("ArrayBuffer");function l(e){return null!==e&&"object"==typeof e}function p(e){if("object"!==i(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}var d=a("Date"),h=a("File"),m=a("Blob"),v=a("FileList");function g(e){return"[object Function]"===s.call(e)}var y=a("URLSearchParams");function E(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),u(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var b,w=(b="undefined"!=typeof Uint8Array&&Object.getPrototypeOf(Uint8Array),function(e){return b&&e instanceof b});e.exports={isArray:u,isArrayBuffer:f,isBuffer:function(e){return null!==e&&!c(e)&&null!==e.constructor&&!c(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){var t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||s.call(e)===t||g(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&f(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:l,isPlainObject:p,isUndefined:c,isDate:d,isFile:h,isBlob:m,isFunction:g,isStream:function(e){return l(e)&&g(e.pipe)},isURLSearchParams:y,isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:E,merge:function e(){var t={};function r(r,n){p(t[n])&&p(r)?t[n]=e(t[n],r):p(r)?t[n]=e({},r):u(r)?t[n]=r.slice():t[n]=r}for(var n=0,o=arguments.length;n<o;n++)E(arguments[n],r);return t},extend:function(e,t,r){return E(t,(function(t,n){e[n]=r&&"function"==typeof t?o(t,r):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e},inherits:function(e,t,r,n){e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,r&&Object.assign(e.prototype,r)},toFlatObject:function(e,t,r){var n,o,s,i={};t=t||{};do{for(o=(n=Object.getOwnPropertyNames(e)).length;o-- >0;)i[s=n[o]]||(t[s]=e[s],i[s]=!0);e=Object.getPrototypeOf(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},kindOf:i,kindOfTest:a,endsWith:function(e,t,r){e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;var n=e.indexOf(t,r);return-1!==n&&n===r},toArray:function(e){if(!e)return null;var t=e.length;if(c(t))return null;for(var r=new Array(t);t-- >0;)r[t]=e[t];return r},isTypedArray:w,isFileList:v}}}]);