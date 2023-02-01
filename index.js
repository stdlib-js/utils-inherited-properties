// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).inheritedProperties=r()}(this,(function(){"use strict";var t=9007199254740991,r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,c=o.__defineSetter__,f=o.__lookupGetter__,l=o.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,e){var n,a,p,s;if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(f.call(t,r)||l.call(t,r)?(n=t.__proto__,t.__proto__=o,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),p="get"in e,s="set"in e,a&&(p||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,r,e.get),s&&c&&c.call(t,r,e.set),t};var a=e;function p(t,r,e){a(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function s(t){return"number"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return y&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var g=Object.prototype.hasOwnProperty;function h(t,r){return null!=t&&g.call(t,r)}var d="function"==typeof Symbol?Symbol.toStringTag:"";var j=b()?function(t){var r,e,n;if(null==t)return v.call(t);e=t[d],r=h(t,d);try{t[d]=void 0}catch(r){return v.call(t)}return n=v.call(t),r?t[d]=e:delete t[d],n}:function(t){return v.call(t)},m=Number,O=m.prototype.toString;var w=b();function _(t){return"object"==typeof t&&(t instanceof m||(w?function(t){try{return O.call(t),!0}catch(t){return!1}}(t):"[object Number]"===j(t)))}function S(t){return s(t)||_(t)}p(S,"isPrimitive",s),p(S,"isObject",_);var P=Number.POSITIVE_INFINITY,E=m.NEGATIVE_INFINITY,I=Math.floor;function T(t){return I(t)===t}function A(t){return t<P&&t>E&&T(t)}function N(t){return s(t)&&A(t)}function k(t){return _(t)&&A(t.valueOf())}function x(t){return N(t)||k(t)}function B(t){return N(t)&&t>0}function V(t){return k(t)&&t.valueOf()>0}function F(t){return B(t)||V(t)}p(x,"isPrimitive",N),p(x,"isObject",k),p(F,"isPrimitive",B),p(F,"isObject",V);var C,L=void 0!==Object.getOwnPropertySymbols,G=Object.getOwnPropertySymbols;C=L?function(t){return G(Object(t))}:function(){return[]};var Y=C,M=void 0!==Object.getOwnPropertyNames,X=Object.getOwnPropertyNames;function H(t){return Object.keys(Object(t))}var R,U=void 0!==Object.keys;function W(t){return"[object Arguments]"===j(t)}R=function(){return W(arguments)}();var D=R;function q(t){return"string"==typeof t}var z=String.prototype.valueOf;var J=b();function K(t){return"object"==typeof t&&(t instanceof String||(J?function(t){try{return z.call(t),!0}catch(t){return!1}}(t):"[object String]"===j(t)))}function Q(t){return q(t)||K(t)}function Z(t){return t!=t}function $(t){return s(t)&&Z(t)}function tt(t){return _(t)&&Z(t.valueOf())}function rt(t){return $(t)||tt(t)}p(Q,"isPrimitive",q),p(Q,"isObject",K),p(rt,"isPrimitive",$),p(rt,"isObject",tt);var et=Object.prototype.propertyIsEnumerable;var nt,ot=!et.call("beep","0");function ut(t,r){var e;return null!=t&&(!(e=et.call(t,r))&&ot&&Q(t)?!$(r=+r)&&N(r)&&r>=0&&r<t.length:e)}nt=Array.isArray?Array.isArray:function(t){return"[object Array]"===j(t)};var it,ct=nt;it=D?W:function(t){return null!==t&&"object"==typeof t&&!ct(t)&&"number"==typeof t.length&&T(t.length)&&t.length>=0&&t.length<=4294967295&&h(t,"callee")&&!ut(t,"callee")};var ft=it,lt=Array.prototype.slice;function at(t){return null!==t&&"object"==typeof t}var pt=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!ct(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(at);p(at,"isObjectLikeArray",pt);var st=ut((function(){}),"prototype"),yt=!ut({toString:null},"toString");function bt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&T(t.length)&&t.length>=0&&t.length<=9007199254740991}function vt(t,r,e){var n,o;if(!bt(t)&&!q(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!N(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(rt(r)){for(;o<n;o++)if(rt(t[o]))return o}else for(;o<n;o++)if(t[o]===r)return o;return-1}var gt=/./;function ht(t){return"boolean"==typeof t}var dt=Boolean.prototype.toString;var jt=b();function mt(t){return"object"==typeof t&&(t instanceof Boolean||(jt?function(t){try{return dt.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===j(t)))}function Ot(t){return ht(t)||mt(t)}function wt(){return new Function("return this;")()}p(Ot,"isPrimitive",ht),p(Ot,"isObject",mt);var _t="object"==typeof self?self:null,St="object"==typeof window?window:null,Pt="object"==typeof global?global:null;var Et=function(t){if(arguments.length){if(!ht(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return wt()}if(_t)return _t;if(St)return St;if(Pt)return Pt;throw new Error("unexpected error. Unable to resolve global object.")}(),It=Et.document&&Et.document.childNodes,Tt=Int8Array;function At(){return/^\s*function\s*([^(]*)/i}var Nt=/^\s*function\s*([^(]*)/i;function kt(t){var r,e,n,o;if(("Object"===(e=j(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=Nt.exec(n.toString()))return r[1]}return at(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}p(At,"REGEXP",Nt);var xt="function"==typeof gt||"object"==typeof Tt||"function"==typeof It?function(t){return kt(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?kt(t).toLowerCase():r};function Bt(t){return t.constructor&&t.constructor.prototype===t}var Vt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Ft="undefined"==typeof window?void 0:window;var Ct=function(){var t;if("undefined"===xt(Ft))return!1;for(t in Ft)try{-1===vt(Vt,t)&&h(Ft,t)&&null!==Ft[t]&&"object"===xt(Ft[t])&&Bt(Ft[t])}catch(t){return!0}return!1}(),Lt="undefined"!=typeof window;var Gt,Yt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Gt=U?function(){return 2!==(H(arguments)||"").length}(1,2)?function(t){return ft(t)?H(lt.call(t)):H(t)}:H:function(t){var r,e,n,o,u,i,c;if(o=[],ft(t)){for(c=0;c<t.length;c++)o.push(c.toString());return o}if("string"==typeof t){if(t.length>0&&!h(t,"0"))for(c=0;c<t.length;c++)o.push(c.toString())}else{if(!1==(n="function"==typeof t)&&!at(t))return o;e=st&&n}for(u in t)e&&"prototype"===u||!h(t,u)||o.push(String(u));if(yt)for(r=function(t){if(!1===Lt&&!Ct)return Bt(t);try{return Bt(t)}catch(t){return!1}}(t),c=0;c<Yt.length;c++)i=Yt[c],r&&"constructor"===i||!h(t,i)||o.push(String(i));return o};var Mt,Xt=Gt;Mt=M?function(t){return X(Object(t))}:function(t){return Xt(Object(t))};var Ht=Mt;var Rt,Ut,Wt=Object.getPrototypeOf;Ut=Object.getPrototypeOf,Rt="function"===xt(Ut)?Wt:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===j(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Dt=Rt;function qt(t){return null==t?null:(t=Object(t),Dt(t))}function zt(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}function Jt(t,r){var e;for(e=0;e<t.length;e++)if(t[e]===r)return!0;return!1}return function(r,e){var n,o,u,i,c,f;if(arguments.length>1){if(!B(e))throw new TypeError(zt("0kC4I",e));i=e}else i=t;if(null==r)return[];for(o=qt(r),n=[],c=1;o&&c<=i;){for(u=Ht(o),f=0;f<u.length;f++)!1===Jt(n,u[f])&&n.push(u[f]);for(u=Y(o),f=0;f<u.length;f++)!1===Jt(n,u[f])&&n.push(u[f]);o=qt(o),c+=1}return n}}));
//# sourceMappingURL=index.js.map
