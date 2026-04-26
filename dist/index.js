"use strict";var g=function(t,e){return function(){return e||t((e={exports:{}}).exports,e),e.exports}};var p=g(function(P,v){
var m=require('@stdlib/constants-float64-max-safe-integer/dist'),h=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,l=require('@stdlib/utils-property-symbols/dist'),q=require('@stdlib/utils-property-names/dist'),u=require('@stdlib/utils-get-prototype-of/dist'),c=require('@stdlib/error-tools-fmtprodmsg/dist');function f(t,e){var r;for(r=0;r<t.length;r++)if(t[r]===e)return!0;return!1}function y(t,e){var r,a,n,o,s,i;if(arguments.length>1){if(!h(e))throw new TypeError(c('1Uh45',e));o=e}else o=m;if(t==null)return[];for(a=u(t),r=[],s=1;a&&s<=o;){for(n=q(a),i=0;i<n.length;i++)f(r,n[i])===!1&&r.push(n[i]);for(n=l(a),i=0;i<n.length;i++)f(r,n[i])===!1&&r.push(n[i]);a=u(a),s+=1}return r}v.exports=y
});var d=p();module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
