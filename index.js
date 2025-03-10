// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).inheritedProperties=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,h=/^(\d+)$/,d=/^(\d+)e/,y=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function w(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":c(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=s.call(n,v,"$1e"),n=s.call(n,b,"e"),n=s.call(n,y,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,g,"e-0$1"),r.alternate&&(n=s.call(n,h,"$1."),n=s.call(n,d,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var j=String.fromCharCode,O=Array.isArray;function S(r){return r!=r}function _(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function E(r){var e,t,n,i,a,c,f,l,s,p,g,h,d;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,l=0;l<r.length;l++)if(n=r[l],"string"==typeof n)c+=n;else{if(e=void 0!==n.precision,!(n=_(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,S(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!S(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,h=n.padRight,d=void 0,(d=g-p.length)<0?p:p=h?p+m(d):m(d)+p)),c+=n.arg||"",f+=1}return c}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function x(r){var e,t,n,o;for(t=[],o=0,n=T.exec(r);n;)(e=r.slice(o,T.lastIndex-n[0].length)).length&&t.push(e),t.push(k(n)),o=T.lastIndex,n=T.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function I(r){var e,t;if("string"!=typeof r)throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[x(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return E.apply(null,e)}var P,A=Object.prototype,V=A.toString,F=A.__defineGetter__,N=A.__defineSetter__,C=A.__lookupGetter__,$=A.__lookupSetter__;P=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(C.call(r,e)||$.call(r,e)?(n=r.__proto__,r.__proto__=A,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&F&&F.call(r,e,t.get),a&&N&&N.call(r,e,t.set),r};var B=P;function L(r,e,t){B(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function R(r){return"number"==typeof r}var G="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return G&&"symbol"==typeof Symbol.toStringTag}var U=Object.prototype.toString;var X=Object.prototype.hasOwnProperty;function Z(r,e){return null!=r&&X.call(r,e)}var M="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof M?M.toStringTag:"";var H=W()?function(r){var e,t,n;if(null==r)return U.call(r);t=r[Y],e=Z(r,Y);try{r[Y]=void 0}catch(e){return U.call(r)}return n=U.call(r),e?r[Y]=t:delete r[Y],n}:function(r){return U.call(r)},z=Number,D=z.prototype.toString;var q=W();function J(r){return"object"==typeof r&&(r instanceof z||(q?function(r){try{return D.call(r),!0}catch(r){return!1}}(r):"[object Number]"===H(r)))}function K(r){return R(r)||J(r)}L(K,"isPrimitive",R),L(K,"isObject",J);var Q=Number.POSITIVE_INFINITY,rr=z.NEGATIVE_INFINITY,er=Math.floor;function tr(r){return er(r)===r}function nr(r){return r<Q&&r>rr&&tr(r)}function or(r){return R(r)&&nr(r)}function ir(r){return J(r)&&nr(r.valueOf())}function ar(r){return or(r)||ir(r)}function ur(r){return or(r)&&r>0}function cr(r){return ir(r)&&r.valueOf()>0}function fr(r){return ur(r)||cr(r)}L(ar,"isPrimitive",or),L(ar,"isObject",ir),L(fr,"isPrimitive",ur),L(fr,"isObject",cr);var lr,sr=void 0!==Object.getOwnPropertySymbols,pr=Object,gr=pr.getOwnPropertySymbols;lr=sr?function(r){return gr(pr(r))}:function(){return[]};var hr=lr,dr=void 0!==Object.getOwnPropertyNames,yr=pr.getOwnPropertyNames;function br(r){return Object.keys(Object(r))}var vr,wr=void 0!==Object.keys;function mr(r){return"[object Arguments]"===H(r)}vr=function(){return mr(arguments)}();var jr=vr;function Or(r){return"string"==typeof r}var Sr=String.prototype.valueOf;var _r=W();function Er(r){return"object"==typeof r&&(r instanceof String||(_r?function(r){try{return Sr.call(r),!0}catch(r){return!1}}(r):"[object String]"===H(r)))}function Tr(r){return Or(r)||Er(r)}function kr(r){return r!=r}function xr(r){return R(r)&&kr(r)}function Ir(r){return J(r)&&kr(r.valueOf())}function Pr(r){return xr(r)||Ir(r)}L(Tr,"isPrimitive",Or),L(Tr,"isObject",Er),L(Pr,"isPrimitive",xr),L(Pr,"isObject",Ir);var Ar=Object.prototype.propertyIsEnumerable;var Vr,Fr=!Ar.call("beep","0");function Nr(r,e){var t;return null!=r&&(!(t=Ar.call(r,e))&&Fr&&Tr(r)?!xr(e=+e)&&or(e)&&e>=0&&e<r.length:t)}Vr=Array.isArray?Array.isArray:function(r){return"[object Array]"===H(r)};var Cr,$r=Vr;Cr=jr?mr:function(r){return null!==r&&"object"==typeof r&&!$r(r)&&"number"==typeof r.length&&tr(r.length)&&r.length>=0&&r.length<=4294967295&&Z(r,"callee")&&!Nr(r,"callee")};var Br=Cr,Lr=Array.prototype.slice;function Rr(r){return null!==r&&"object"==typeof r}var Gr=function(r){if("function"!=typeof r)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!$r(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Rr);L(Rr,"isObjectLikeArray",Gr);var Wr=Nr((function(){}),"prototype"),Ur=!Nr({toString:null},"toString"),Xr=9007199254740991;function Zr(r,e,t){var n,o,i;if(!(i=r,"object"==typeof i&&null!==i&&"number"==typeof i.length&&tr(i.length)&&i.length>=0&&i.length<=Xr||Or(r)))throw new TypeError(I("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!or(t))throw new TypeError(I("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;o=t}else(o=n+t)<0&&(o=0)}else o=0;if(Pr(e)){for(;o<n;o++)if(Pr(r[o]))return o}else for(;o<n;o++)if(r[o]===e)return o;return-1}var Mr=/./;function Yr(r){return"boolean"==typeof r}var Hr=Boolean,zr=Boolean.prototype.toString;var Dr=W();function qr(r){return"object"==typeof r&&(r instanceof Hr||(Dr?function(r){try{return zr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===H(r)))}function Jr(r){return Yr(r)||qr(r)}L(Jr,"isPrimitive",Yr),L(Jr,"isObject",qr);var Kr="object"==typeof self?self:null,Qr="object"==typeof window?window:null,re="object"==typeof global?global:null,ee="object"==typeof globalThis?globalThis:null;var te=function(r){if(arguments.length){if(!Yr(r))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(ee)return ee;if(Kr)return Kr;if(Qr)return Qr;if(re)return re;throw new Error("unexpected error. Unable to resolve global object.")}(),ne=te.document&&te.document.childNodes,oe=Int8Array;function ie(){return/^\s*function\s*([^(]*)/i}var ae=/^\s*function\s*([^(]*)/i;function ue(r){var e,t,n,o;if(("Object"===(t=H(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=ae.exec(n.toString()))return e[1]}return Rr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}L(ie,"REGEXP",ae);var ce="function"==typeof Mr||"object"==typeof oe||"function"==typeof ne?function(r){return ue(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?ue(r).toLowerCase():e};function fe(r){return r.constructor&&r.constructor.prototype===r}var le=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],se="undefined"==typeof window?void 0:window;var pe=function(){var r;if("undefined"===ce(se))return!1;for(r in se)try{-1===Zr(le,r)&&Z(se,r)&&null!==se[r]&&"object"===ce(se[r])&&fe(se[r])}catch(r){return!0}return!1}(),ge="undefined"!=typeof window;var he,de=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];he=wr?function(){return 2!==(br(arguments)||"").length}(1,2)?function(r){return Br(r)?br(Lr.call(r)):br(r)}:br:function(r){var e,t,n,o,i,a,u;if(o=[],Br(r)){for(u=0;u<r.length;u++)o.push(u.toString());return o}if("string"==typeof r){if(r.length>0&&!Z(r,"0"))for(u=0;u<r.length;u++)o.push(u.toString())}else{if(!1==(n="function"==typeof r)&&!Rr(r))return o;t=Wr&&n}for(i in r)t&&"prototype"===i||!Z(r,i)||o.push(String(i));if(Ur)for(e=function(r){if(!1===ge&&!pe)return fe(r);try{return fe(r)}catch(r){return!1}}(r),u=0;u<de.length;u++)a=de[u],e&&"constructor"===a||!Z(r,a)||o.push(String(a));return o};var ye,be=he;ye=dr?function(r){return yr(pr(r))}:function(r){return be(pr(r))};var ve=ye;var we,me,je=Object.getPrototypeOf;me=Object.getPrototypeOf,we="function"===ce(me)?je:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===H(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Oe=we;function Se(r){return null==r?null:(r=pr(r),Oe(r))}function _e(r,e){var t;for(t=0;t<r.length;t++)if(r[t]===e)return!0;return!1}return function(r,e){var t,n,o,i,a,u;if(arguments.length>1){if(!ur(e))throw new TypeError(function(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}("1Uh45",e));i=e}else i=9007199254740991;if(null==r)return[];for(n=Se(r),t=[],a=1;n&&a<=i;){for(o=ve(n),u=0;u<o.length;u++)!1===_e(t,o[u])&&t.push(o[u]);for(o=hr(n),u=0;u<o.length;u++)!1===_e(t,o[u])&&t.push(o[u]);n=Se(n),a+=1}return t}}));
//# sourceMappingURL=index.js.map
