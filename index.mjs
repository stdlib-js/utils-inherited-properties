// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max-safe-integer@v0.2.2-esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-property-symbols@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-property-names@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-get-prototype-of@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function o(t,s){var e;for(e=0;e<t.length;e++)if(t[e]===s)return!0;return!1}function m(m,d){var l,p,f,h,j,v;if(arguments.length>1){if(!s(d))throw new TypeError(n("1Uh45",d));h=d}else h=t;if(null==m)return[];for(p=i(m),l=[],j=1;p&&j<=h;){for(f=r(p),v=0;v<f.length;v++)!1===o(l,f[v])&&l.push(f[v]);for(f=e(p),v=0;v<f.length;v++)!1===o(l,f[v])&&l.push(f[v]);p=i(p),j+=1}return l}export{m as default};
//# sourceMappingURL=index.mjs.map
