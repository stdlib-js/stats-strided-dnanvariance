// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function i(e){return"number"==typeof e}function t(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function n(e,r,i){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=i?e+t(a):t(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,t,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,c=parseInt(t,10),!isFinite(c)){if(!i(t))throw new Error("invalid integer. Value: "+t);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(t=(-c).toString(r),e.precision&&(t=n(t,e.precision,e.padRight)),t="-"+t):(t=c.toString(r),c||e.precision?e.precision&&(t=n(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===o.call(e.specifier)?o.call(t):a.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var s=Math.abs,p=String.prototype.toLowerCase,l=String.prototype.toUpperCase,u=String.prototype.replace,f=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,w=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function y(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":s(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=u.call(t,v,"$1e"),t=u.call(t,b,"e"),t=u.call(t,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=u.call(t,f,"e+0$1"),t=u.call(t,g,"e-0$1"),e.alternate&&(t=u.call(t,d,"$1."),t=u.call(t,h,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===l.call(e.specifier)?l.call(t):p.call(t)}function m(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}var _=String.fromCharCode,x=Array.isArray;function k(e){return e!=e}function E(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function S(e){var r,i,t,a,o,s,p,l,u,f,g,d,h;if(!x(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(s="",p=1,l=0;l<e.length;l++)if("string"==typeof(t=e[l]))s+=t;else{if(r=void 0!==t.precision,!(t=E(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(p=t.mapping),i=t.flags,u=0;u<i.length;u++)switch(a=i.charAt(u)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[p],10),p+=1,k(t.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[p],10),p+=1,k(t.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[p],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=c(t);break;case"s":t.maxWidth=r?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!k(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=k(o)?String(t.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=y(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=n(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(f=t.arg,g=t.width,d=t.padRight,h=void 0,(h=g-f.length)<0?f:f=d?f+m(h):m(h)+f)),s+=t.arg||"",p+=1}return s}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function T(e){var r,i,t,n;for(i=[],n=0,t=j.exec(e);t;)(r=e.slice(n,j.lastIndex-t[0].length)).length&&i.push(r),i.push(V(t)),n=j.lastIndex,t=j.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function $(e){var r,i;if("string"!=typeof e)throw new TypeError($("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[T(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return S.apply(null,r)}var F=Object.prototype,I=F.toString,A=F.__defineGetter__,C=F.__defineSetter__,N=F.__lookupGetter__,R=F.__lookupSetter__,O=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,i){var t,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===I.call(e))throw new TypeError($("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===I.call(i))throw new TypeError($("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((n="value"in i)&&(N.call(e,r)||R.call(e,r)?(t=e.__proto__,e.__proto__=F,delete e[r],e[r]=i.value,e.__proto__=t):e[r]=i.value),a="get"in i,o="set"in i,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&A&&A.call(e,r,i.get),o&&C&&C.call(e,r,i.set),e};function P(e,r,i){O(e,r,{configurable:!1,enumerable:!1,writable:!1,value:i})}function Z(e,r){return r>0?0:(1-e)*r}var G=Math.floor,W=128;function L(e,r,i,t,n,a,o){var c,s,p,l,u,f,g,d,h,w,b,v,y,m,_;if(e<=0)return n;if(c=t,s=o,1===e||0===i)return function(e){return e!=e}(r[c])||(n[s]+=r[c],n[s+a]+=1),n;if(e<8){for(v=0,y=0,_=0;_<e;_++)(m=r[c])==m&&(v+=m,y+=1),c+=i;return n[s]+=v,n[s+a]+=y,n}if(e<=W){for(p=0,l=0,u=0,f=0,g=0,d=0,h=0,w=0,y=0,b=e%8,_=0;_<e-b;_+=8)(m=r[c])==m&&(p+=m,y+=1),(m=r[c+=i])==m&&(l+=m,y+=1),(m=r[c+=i])==m&&(u+=m,y+=1),(m=r[c+=i])==m&&(f+=m,y+=1),(m=r[c+=i])==m&&(g+=m,y+=1),(m=r[c+=i])==m&&(d+=m,y+=1),(m=r[c+=i])==m&&(h+=m,y+=1),(m=r[c+=i])==m&&(w+=m,y+=1),c+=i;for(v=p+l+(u+f)+(g+d+(h+w));_<e;_++)(m=r[c])==m&&(v+=m,y+=1),c+=i;return n[s]+=v,n[s+a]+=y,n}return y=G(e/2),L(y-=y%8,r,i,c,n,a,o),L(e-y,r,i,c+y*i,n,a,o),n}function M(e,r,i,t,n,a,o){return n[o]=0,n[o+a]=0,L(e,r,i,t,n,a,o),n}P((function(e,r,i,t,n){var a,o;return a=i<0?(1-e)*i:0,t[o=n<0?-n:0]=0,t[o+n]=0,L(e,r,i,a,t,n,o),t}),"ndarray",M);var U=[0,0];function X(e,r,i,t,n){var a,o,c,s,p,l,u,f,g;if(e<=0)return NaN;if(1===e||0===t)return(u=i[n])==u&&e-r>0?0:NaN;if(U[0]=0,U[1]=0,M(e,i,t,n,U,1,0),(s=(f=U[1])-r)<=0)return NaN;for(a=U[0]/f,o=n,c=0,p=0,g=0;g<e;g++)(u=i[o])==u&&(c+=(l=u-a)*l,p+=l),o+=t;return c/s-p/f*(p/s)}function z(e,r,i,t,n){return X(e,r,i,t,n)}function q(e,r,i,t){return z(e,r,i,t,Z(e,t))}return P((function(e,r,i,t){return X(e,r,i,t,Z(e,t))}),"ndarray",X),P(q,"ndarray",z),q},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).dnanvariance=r();
//# sourceMappingURL=browser.js.map
