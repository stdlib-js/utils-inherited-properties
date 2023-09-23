// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r=9007199254740991,e="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function n(r){return"number"==typeof r}function o(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+o(i):o(i)+r,n&&(r="-"+r)),r}var u=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var e,t,o;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,o=parseInt(t,10),!isFinite(o)){if(!n(t))throw new Error("invalid integer. Value: "+t);o=0}return o<0&&("u"===r.specifier||10!==e)&&(o=4294967295+o+1),o<0?(t=(-o).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=o.toString(e),o||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===a.call(r.specifier)?a.call(t):u.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(r){return"string"==typeof r}var l=Math.abs,s=String.prototype.toLowerCase,p=String.prototype.toUpperCase,g=String.prototype.replace,y=/e\+(\d)$/,b=/e-(\d)$/,h=/^(\d+)$/,d=/^(\d+)e/,v=/\.0$/,w=/\.0*e/,m=/(\..*[^0])0*e/;function j(r){var e,t,o=parseFloat(r.arg);if(!isFinite(o)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);o=r.arg}switch(r.specifier){case"e":case"E":t=o.toExponential(r.precision);break;case"f":case"F":t=o.toFixed(r.precision);break;case"g":case"G":l(o)<1e-4?((e=r.precision)>0&&(e-=1),t=o.toExponential(e)):t=o.toPrecision(r.precision),r.alternate||(t=g.call(t,m,"$1e"),t=g.call(t,w,"e"),t=g.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=g.call(t,y,"e+0$1"),t=g.call(t,b,"e-0$1"),r.alternate&&(t=g.call(t,h,"$1."),t=g.call(t,d,"$1.e")),o>=0&&r.sign&&(t=r.sign+t),t=r.specifier===p.call(r.specifier)?p.call(t):s.call(t)}function O(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function S(r,e,t){var n=e-r.length;return n<0?r:r=t?r+O(n):O(n)+r}var E=String.fromCharCode,_=isNaN,T=Array.isArray;function P(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function k(r){var e,t,n,o,u,a,l,s,p;if(!T(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",l=1,s=0;s<r.length;s++)if(f(n=r[s]))a+=n;else{if(e=void 0!==n.precision,!(n=P(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,_(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!_(n.arg)){if((u=parseInt(n.arg,10))<0||u>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(u)?String(n.arg):E(u)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=j(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=S(n.arg,n.width,n.padRight)),a+=n.arg||"",l+=1}return a}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function A(r){var e,t,n,o;for(t=[],o=0,n=x.exec(r);n;)(e=r.slice(o,x.lastIndex-n[0].length)).length&&t.push(e),t.push(I(n)),o=x.lastIndex,n=x.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function V(r){return"string"==typeof r}function B(r){var e,t,n;if(!V(r))throw new TypeError(B("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=A(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return k.apply(null,t)}var F,N=Object.prototype,C=N.toString,L=N.__defineGetter__,$=N.__defineSetter__,R=N.__lookupGetter__,G=N.__lookupSetter__;F=function(){try{return e({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var n,o,i,u;if("object"!=typeof r||null===r||"[object Array]"===C.call(r))throw new TypeError(B("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError(B("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(R.call(r,e)||G.call(r,e)?(n=r.__proto__,r.__proto__=N,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,u="set"in t,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&L&&L.call(r,e,t.get),u&&$&&$.call(r,e,t.set),r};var M=F;function U(r,e,t){M(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function W(r){return"number"==typeof r}var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return X&&"symbol"==typeof Symbol.toStringTag}var Y,H=Object.prototype.toString,z=Object.prototype.hasOwnProperty,D="function"==typeof Symbol?Symbol:void 0,q="function"==typeof D?D.toStringTag:"";Y=Z()?function(r){var e,t,n,o,i;if(null==r)return H.call(r);t=r[q],i=q,e=null!=(o=r)&&z.call(o,i);try{r[q]=void 0}catch(e){return H.call(r)}return n=H.call(r),e?r[q]=t:delete r[q],n}:function(r){return H.call(r)};var J=Y,K=Number,Q=K.prototype.toString,rr=Z();function er(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function tr(r){return W(r)||er(r)}U(tr,"isPrimitive",W),U(tr,"isObject",er);var nr=Number.POSITIVE_INFINITY,or=K.NEGATIVE_INFINITY,ir=Math.floor;function ur(r){return ir(r)===r}function ar(r){return r<nr&&r>or&&ur(r)}function cr(r){return W(r)&&ar(r)}function fr(r){return er(r)&&ar(r.valueOf())}function lr(r){return cr(r)||fr(r)}function sr(r){return cr(r)&&r>0}function pr(r){return fr(r)&&r.valueOf()>0}function gr(r){return sr(r)||pr(r)}U(lr,"isPrimitive",cr),U(lr,"isObject",fr),U(gr,"isPrimitive",sr),U(gr,"isObject",pr);var yr,br=void 0!==Object.getOwnPropertySymbols,hr=Object,dr=hr.getOwnPropertySymbols;yr=br?function(r){return dr(hr(r))}:function(){return[]};var vr=yr,wr=void 0!==Object.getOwnPropertyNames,mr=hr.getOwnPropertyNames;function jr(r){return Object.keys(Object(r))}var Or,Sr=void 0!==Object.keys;function Er(r){return"[object Arguments]"===J(r)}Or=function(){return Er(arguments)}();var _r=Or,Tr=Object.prototype.hasOwnProperty;function Pr(r,e){return null!=r&&Tr.call(r,e)}function kr(r){return"string"==typeof r}var xr=String.prototype.valueOf,Ir=Z();function Ar(r){return"object"==typeof r&&(r instanceof String||(Ir?function(r){try{return xr.call(r),!0}catch(r){return!1}}(r):"[object String]"===J(r)))}function Vr(r){return kr(r)||Ar(r)}function Br(r){return r!=r}function Fr(r){return W(r)&&Br(r)}function Nr(r){return er(r)&&Br(r.valueOf())}function Cr(r){return Fr(r)||Nr(r)}U(Vr,"isPrimitive",kr),U(Vr,"isObject",Ar),U(Cr,"isPrimitive",Fr),U(Cr,"isObject",Nr);var Lr,$r=Object.prototype.propertyIsEnumerable,Rr=!$r.call("beep","0");function Gr(r,e){var t;return null!=r&&(!(t=$r.call(r,e))&&Rr&&Vr(r)?!Fr(e=+e)&&cr(e)&&e>=0&&e<r.length:t)}Lr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};var Mr,Ur=Lr;Mr=_r?Er:function(r){return null!==r&&"object"==typeof r&&!Ur(r)&&"number"==typeof r.length&&ur(r.length)&&r.length>=0&&r.length<=4294967295&&Pr(r,"callee")&&!Gr(r,"callee")};var Wr=Mr,Xr=Array.prototype.slice;function Zr(r){return null!==r&&"object"==typeof r}var Yr=function(r){if("function"!=typeof r)throw new TypeError(B("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Ur(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Zr);U(Zr,"isObjectLikeArray",Yr);var Hr=Gr((function(){}),"prototype"),zr=!Gr({toString:null},"toString");function Dr(r){return r!=r}function qr(r){return W(r)&&Dr(r)}function Jr(r){return er(r)&&Dr(r.valueOf())}function Kr(r){return qr(r)||Jr(r)}function Qr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&ur(r.length)&&r.length>=0&&r.length<=9007199254740991}function re(r){return"string"==typeof r}U(Kr,"isPrimitive",qr),U(Kr,"isObject",Jr);var ee=String.prototype.valueOf,te=Z();function ne(r){return"object"==typeof r&&(r instanceof String||(te?function(r){try{return ee.call(r),!0}catch(r){return!1}}(r):"[object String]"===J(r)))}function oe(r){return re(r)||ne(r)}function ie(r,e,t){var n,o;if(!Qr(r)&&!re(r))throw new TypeError(B("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!cr(t))throw new TypeError(B("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;o=t}else(o=n+t)<0&&(o=0)}else o=0;if(Kr(e)){for(;o<n;o++)if(Kr(r[o]))return o}else for(;o<n;o++)if(r[o]===e)return o;return-1}U(oe,"isPrimitive",re),U(oe,"isObject",ne);var ue=/./;function ae(r){return"boolean"==typeof r}var ce=Boolean,fe=Boolean.prototype.toString,le=Z();function se(r){return"object"==typeof r&&(r instanceof ce||(le?function(r){try{return fe.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function pe(r){return ae(r)||se(r)}function ge(){return new Function("return this;")()}U(pe,"isPrimitive",ae),U(pe,"isObject",se);var ye="object"==typeof self?self:null,be="object"==typeof window?window:null,he="object"==typeof globalThis?globalThis:null,de=function(r){if(arguments.length){if(!ae(r))throw new TypeError(B("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return ge()}if(he)return he;if(ye)return ye;if(be)return be;throw new Error("unexpected error. Unable to resolve global object.")}(),ve=de.document&&de.document.childNodes,we=Int8Array;function me(){return/^\s*function\s*([^(]*)/i}var je=/^\s*function\s*([^(]*)/i;function Oe(r){var e,t,n,o;if(("Object"===(t=J(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=je.exec(n.toString()))return e[1]}return Zr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}U(me,"REGEXP",je);var Se="function"==typeof ue||"object"==typeof we||"function"==typeof ve?function(r){return Oe(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?Oe(r).toLowerCase():e};function Ee(r){return r.constructor&&r.constructor.prototype===r}var _e,Te=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Pe="undefined"==typeof window?void 0:window,ke=function(){var r;if("undefined"===Se(Pe))return!1;for(r in Pe)try{-1===ie(Te,r)&&Pr(Pe,r)&&null!==Pe[r]&&"object"===Se(Pe[r])&&Ee(Pe[r])}catch(r){return!0}return!1}(),xe="undefined"!=typeof window,Ie=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];_e=Sr?function(){return 2!==(jr(arguments)||"").length}(1,2)?function(r){return Wr(r)?jr(Xr.call(r)):jr(r)}:jr:function(r){var e,t,n,o,i,u,a;if(o=[],Wr(r)){for(a=0;a<r.length;a++)o.push(a.toString());return o}if("string"==typeof r){if(r.length>0&&!Pr(r,"0"))for(a=0;a<r.length;a++)o.push(a.toString())}else{if(0==(n="function"==typeof r)&&!Zr(r))return o;t=Hr&&n}for(i in r)t&&"prototype"===i||!Pr(r,i)||o.push(String(i));if(zr)for(e=function(r){if(!1===xe&&!ke)return Ee(r);try{return Ee(r)}catch(r){return!1}}(r),a=0;a<Ie.length;a++)u=Ie[a],e&&"constructor"===u||!Pr(r,u)||o.push(String(u));return o};var Ae,Ve=_e;Ae=wr?function(r){return mr(hr(r))}:function(r){return Ve(hr(r))};var Be=Ae,Fe=/./;function Ne(r){return"boolean"==typeof r}var Ce=Boolean.prototype.toString,Le=Z();function $e(r){return"object"==typeof r&&(r instanceof ce||(Le?function(r){try{return Ce.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function Re(r){return Ne(r)||$e(r)}function Ge(){return new Function("return this;")()}U(Re,"isPrimitive",Ne),U(Re,"isObject",$e);var Me="object"==typeof self?self:null,Ue="object"==typeof window?window:null,We="object"==typeof globalThis?globalThis:null,Xe=function(r){if(arguments.length){if(!Ne(r))throw new TypeError(B("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Ge()}if(We)return We;if(Me)return Me;if(Ue)return Ue;throw new Error("unexpected error. Unable to resolve global object.")}(),Ze=Xe.document&&Xe.document.childNodes,Ye=Int8Array;function He(){return/^\s*function\s*([^(]*)/i}var ze=/^\s*function\s*([^(]*)/i;function De(r){return null!==r&&"object"==typeof r}U(He,"REGEXP",ze);var qe=function(r){if("function"!=typeof r)throw new TypeError(B("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Ur(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(De);function Je(r){var e,t,n,o;if(("Object"===(t=J(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=ze.exec(n.toString()))return e[1]}return De(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}U(De,"isObjectLikeArray",qe);var Ke,Qe,rt="function"==typeof Fe||"object"==typeof Ye||"function"==typeof Ze?function(r){return Je(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?Je(r).toLowerCase():e},et=Object.getPrototypeOf;Qe=Object.getPrototypeOf,Ke="function"===rt(Qe)?et:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var tt=Ke;function nt(r){return null==r?null:(r=hr(r),tt(r))}function ot(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}function it(r,e){var t;for(t=0;t<r.length;t++)if(r[t]===e)return!0;return!1}return function(e,t){var n,o,i,u,a,c;if(arguments.length>1){if(!sr(t))throw new TypeError(ot("1Uh45,IB",t));u=t}else u=r;if(null==e)return[];for(o=nt(e),n=[],a=1;o&&a<=u;){for(i=Be(o),c=0;c<i.length;c++)!1===it(n,i[c])&&n.push(i[c]);for(i=vr(o),c=0;c<i.length;c++)!1===it(n,i[c])&&n.push(i[c]);o=nt(o),a+=1}return n}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).inheritedProperties=e();
//# sourceMappingURL=browser.js.map
