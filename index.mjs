// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max-safe-integer@v0.1.1-esm/index.mjs";import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-property-symbols@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-property-names@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-get-prototype-of@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function o(t,e){var s;for(s=0;s<t.length;s++)if(t[s]===e)return!0;return!1}function m(m,d){var l,p,f,h,j,g;if(arguments.length>1){if(!e(d))throw new TypeError(n("invalid argument. Second argument must be a positive integer. Value: `%s`.",d));h=d}else h=t;if(null==m)return[];for(p=i(m),l=[],j=1;p&&j<=h;){for(f=r(p),g=0;g<f.length;g++)!1===o(l,f[g])&&l.push(f[g]);for(f=s(p),g=0;g<f.length;g++)!1===o(l,f[g])&&l.push(f[g]);p=i(p),j+=1}return l}export{m as default};
//# sourceMappingURL=index.mjs.map
