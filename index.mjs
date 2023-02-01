// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max-safe-integer@v0.0.8-esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-property-symbols@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-property-names@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-get-prototype-of@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function o(t,s){var e;for(e=0;e<t.length;e++)if(t[e]===s)return!0;return!1}function m(m,d){var l,p,f,h,j,g;if(arguments.length>1){if(!s(d))throw new TypeError(n("0kC4I",d));h=d}else h=t;if(null==m)return[];for(p=i(m),l=[],j=1;p&&j<=h;){for(f=r(p),g=0;g<f.length;g++)!1===o(l,f[g])&&l.push(f[g]);for(f=e(p),g=0;g<f.length;g++)!1===o(l,f[g])&&l.push(f[g]);p=i(p),j+=1}return l}export{m as default};
//# sourceMappingURL=index.mjs.map
