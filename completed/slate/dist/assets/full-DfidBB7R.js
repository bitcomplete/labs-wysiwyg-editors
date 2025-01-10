import{r as W,R as q}from"./react-DJO9vBfz.js";import{r as ze}from"./react-dom-CjlHBozD.js";import{w as Ke,a as Ye,S as He,E as Ue,_ as Je,b as L,u as Se,T as ie,c as Ce,d as Ze}from"./slate-BZjWeDOx.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();var Ae={exports:{}},te={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xe=W,Qe=Symbol.for("react.element"),er=Symbol.for("react.fragment"),rr=Object.prototype.hasOwnProperty,tr=Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,nr={key:!0,ref:!0,__self:!0,__source:!0};function Re(e,r,t){var n,s={},a=null,i=null;t!==void 0&&(a=""+t),r.key!==void 0&&(a=""+r.key),r.ref!==void 0&&(i=r.ref);for(n in r)rr.call(r,n)&&!nr.hasOwnProperty(n)&&(s[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps,r)s[n]===void 0&&(s[n]=r[n]);return{$$typeof:Qe,type:e,key:a,ref:i,props:s,_owner:tr.current}}te.Fragment=er;te.jsx=Re;te.jsxs=Re;Ae.exports=te;var c=Ae.exports,_e,pe=ze;_e=pe.createRoot,pe.hydrateRoot;var sr=!1;function ar(e){if(e.sheet)return e.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===e)return document.styleSheets[r]}function ir(e){var r=document.createElement("style");return r.setAttribute("data-emotion",e.key),e.nonce!==void 0&&r.setAttribute("nonce",e.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var cr=function(){function e(t){var n=this;this._insertTag=function(s){var a;n.tags.length===0?n.insertionPoint?a=n.insertionPoint.nextSibling:n.prepend?a=n.container.firstChild:a=n.before:a=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(s,a),n.tags.push(s)},this.isSpeedy=t.speedy===void 0?!sr:t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var r=e.prototype;return r.hydrate=function(n){n.forEach(this._insertTag)},r.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(ir(this));var s=this.tags[this.tags.length-1];if(this.isSpeedy){var a=ar(s);try{a.insertRule(n,a.cssRules.length)}catch{}}else s.appendChild(document.createTextNode(n));this.ctr++},r.flush=function(){this.tags.forEach(function(n){var s;return(s=n.parentNode)==null?void 0:s.removeChild(n)}),this.tags=[],this.ctr=0},e}(),w="-ms-",ee="-moz-",d="-webkit-",Oe="comm",le="rule",de="decl",or="@import",$e="@keyframes",fr="@layer",ur=Math.abs,ne=String.fromCharCode,lr=Object.assign;function dr(e,r){return y(e,0)^45?(((r<<2^y(e,0))<<2^y(e,1))<<2^y(e,2))<<2^y(e,3):0}function Te(e){return e.trim()}function hr(e,r){return(e=r.exec(e))?e[0]:e}function h(e,r,t){return e.replace(r,t)}function fe(e,r){return e.indexOf(r)}function y(e,r){return e.charCodeAt(r)|0}function V(e,r,t){return e.slice(r,t)}function _(e){return e.length}function he(e){return e.length}function H(e,r){return r.push(e),e}function pr(e,r){return e.map(r).join("")}var se=1,I=1,Ne=0,k=0,b=0,B="";function ae(e,r,t,n,s,a,i){return{value:e,root:r,parent:t,type:n,props:s,children:a,line:se,column:I,length:i,return:""}}function G(e,r){return lr(ae("",null,null,"",null,null,0),e,{length:-e.length},r)}function mr(){return b}function xr(){return b=k>0?y(B,--k):0,I--,b===10&&(I=1,se--),b}function S(){return b=k<Ne?y(B,k++):0,I++,b===10&&(I=1,se++),b}function O(){return y(B,k)}function J(){return k}function K(e,r){return V(B,e,r)}function z(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Pe(e){return se=I=1,Ne=_(B=e),k=0,[]}function Me(e){return B="",e}function Z(e){return Te(K(k-1,ue(e===91?e+2:e===40?e+1:e)))}function gr(e){for(;(b=O())&&b<33;)S();return z(e)>2||z(b)>3?"":" "}function br(e,r){for(;--r&&S()&&!(b<48||b>102||b>57&&b<65||b>70&&b<97););return K(e,J()+(r<6&&O()==32&&S()==32))}function ue(e){for(;S();)switch(b){case e:return k;case 34:case 39:e!==34&&e!==39&&ue(b);break;case 40:e===41&&ue(e);break;case 92:S();break}return k}function yr(e,r){for(;S()&&e+b!==57;)if(e+b===84&&O()===47)break;return"/*"+K(r,k-1)+"*"+ne(e===47?e:S())}function vr(e){for(;!z(O());)S();return K(e,k)}function wr(e){return Me(X("",null,null,null,[""],e=Pe(e),0,[0],e))}function X(e,r,t,n,s,a,i,o,f){for(var l=0,u=0,p=i,C=0,T=0,j=0,x=1,E=1,g=1,v=0,A="",Y=s,M=a,R=n,m=A;E;)switch(j=v,v=S()){case 40:if(j!=108&&y(m,p-1)==58){fe(m+=h(Z(v),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:m+=Z(v);break;case 9:case 10:case 13:case 32:m+=gr(j);break;case 92:m+=br(J()-1,7);continue;case 47:switch(O()){case 42:case 47:H(Er(yr(S(),J()),r,t),f);break;default:m+="/"}break;case 123*x:o[l++]=_(m)*g;case 125*x:case 59:case 0:switch(v){case 0:case 125:E=0;case 59+u:g==-1&&(m=h(m,/\f/g,"")),T>0&&_(m)-p&&H(T>32?xe(m+";",n,t,p-1):xe(h(m," ","")+";",n,t,p-2),f);break;case 59:m+=";";default:if(H(R=me(m,r,t,l,u,s,o,A,Y=[],M=[],p),a),v===123)if(u===0)X(m,r,R,R,Y,a,p,o,M);else switch(C===99&&y(m,3)===110?100:C){case 100:case 108:case 109:case 115:X(e,R,R,n&&H(me(e,R,R,0,0,s,o,A,s,Y=[],p),M),s,M,p,o,n?Y:M);break;default:X(m,R,R,R,[""],M,0,o,M)}}l=u=T=0,x=g=1,A=m="",p=i;break;case 58:p=1+_(m),T=j;default:if(x<1){if(v==123)--x;else if(v==125&&x++==0&&xr()==125)continue}switch(m+=ne(v),v*x){case 38:g=u>0?1:(m+="\f",-1);break;case 44:o[l++]=(_(m)-1)*g,g=1;break;case 64:O()===45&&(m+=Z(S())),C=O(),u=p=_(A=m+=vr(J())),v++;break;case 45:j===45&&_(m)==2&&(x=0)}}return a}function me(e,r,t,n,s,a,i,o,f,l,u){for(var p=s-1,C=s===0?a:[""],T=he(C),j=0,x=0,E=0;j<n;++j)for(var g=0,v=V(e,p+1,p=ur(x=i[j])),A=e;g<T;++g)(A=Te(x>0?C[g]+" "+v:h(v,/&\f/g,C[g])))&&(f[E++]=A);return ae(e,r,t,s===0?le:o,f,l,u)}function Er(e,r,t){return ae(e,r,t,Oe,ne(mr()),V(e,2,-2),0)}function xe(e,r,t,n){return ae(e,r,t,de,V(e,0,n),V(e,n+1,-1),n)}function D(e,r){for(var t="",n=he(e),s=0;s<n;s++)t+=r(e[s],s,e,r)||"";return t}function kr(e,r,t,n){switch(e.type){case fr:if(e.children.length)break;case or:case de:return e.return=e.return||e.value;case Oe:return"";case $e:return e.return=e.value+"{"+D(e.children,n)+"}";case le:e.value=e.props.join(",")}return _(t=D(e.children,n))?e.return=e.value+"{"+t+"}":""}function jr(e){var r=he(e);return function(t,n,s,a){for(var i="",o=0;o<r;o++)i+=e[o](t,n,s,a)||"";return i}}function Sr(e){return function(r){r.root||(r=r.return)&&e(r)}}function Cr(e){var r=Object.create(null);return function(t){return r[t]===void 0&&(r[t]=e(t)),r[t]}}var Ar=function(r,t,n){for(var s=0,a=0;s=a,a=O(),s===38&&a===12&&(t[n]=1),!z(a);)S();return K(r,k)},Rr=function(r,t){var n=-1,s=44;do switch(z(s)){case 0:s===38&&O()===12&&(t[n]=1),r[n]+=Ar(k-1,t,n);break;case 2:r[n]+=Z(s);break;case 4:if(s===44){r[++n]=O()===58?"&\f":"",t[n]=r[n].length;break}default:r[n]+=ne(s)}while(s=S());return r},_r=function(r,t){return Me(Rr(Pe(r),t))},ge=new WeakMap,Or=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var t=r.value,n=r.parent,s=r.column===n.column&&r.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(r.props.length===1&&t.charCodeAt(0)!==58&&!ge.get(n))&&!s){ge.set(r,!0);for(var a=[],i=_r(t,a),o=n.props,f=0,l=0;f<i.length;f++)for(var u=0;u<o.length;u++,l++)r.props[l]=a[f]?i[f].replace(/&\f/g,o[u]):o[u]+" "+i[f]}}},$r=function(r){if(r.type==="decl"){var t=r.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(r.return="",r.value="")}};function Le(e,r){switch(dr(e,r)){case 5103:return d+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return d+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return d+e+ee+e+w+e+e;case 6828:case 4268:return d+e+w+e+e;case 6165:return d+e+w+"flex-"+e+e;case 5187:return d+e+h(e,/(\w+).+(:[^]+)/,d+"box-$1$2"+w+"flex-$1$2")+e;case 5443:return d+e+w+"flex-item-"+h(e,/flex-|-self/,"")+e;case 4675:return d+e+w+"flex-line-pack"+h(e,/align-content|flex-|-self/,"")+e;case 5548:return d+e+w+h(e,"shrink","negative")+e;case 5292:return d+e+w+h(e,"basis","preferred-size")+e;case 6060:return d+"box-"+h(e,"-grow","")+d+e+w+h(e,"grow","positive")+e;case 4554:return d+h(e,/([^-])(transform)/g,"$1"+d+"$2")+e;case 6187:return h(h(h(e,/(zoom-|grab)/,d+"$1"),/(image-set)/,d+"$1"),e,"")+e;case 5495:case 3959:return h(e,/(image-set\([^]*)/,d+"$1$`$1");case 4968:return h(h(e,/(.+:)(flex-)?(.*)/,d+"box-pack:$3"+w+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+d+e+e;case 4095:case 3583:case 4068:case 2532:return h(e,/(.+)-inline(.+)/,d+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_(e)-1-r>6)switch(y(e,r+1)){case 109:if(y(e,r+4)!==45)break;case 102:return h(e,/(.+:)(.+)-([^]+)/,"$1"+d+"$2-$3$1"+ee+(y(e,r+3)==108?"$3":"$2-$3"))+e;case 115:return~fe(e,"stretch")?Le(h(e,"stretch","fill-available"),r)+e:e}break;case 4949:if(y(e,r+1)!==115)break;case 6444:switch(y(e,_(e)-3-(~fe(e,"!important")&&10))){case 107:return h(e,":",":"+d)+e;case 101:return h(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+d+(y(e,14)===45?"inline-":"")+"box$3$1"+d+"$2$3$1"+w+"$2box$3")+e}break;case 5936:switch(y(e,r+11)){case 114:return d+e+w+h(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return d+e+w+h(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return d+e+w+h(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return d+e+w+e+e}return e}var Tr=function(r,t,n,s){if(r.length>-1&&!r.return)switch(r.type){case de:r.return=Le(r.value,r.length);break;case $e:return D([G(r,{value:h(r.value,"@","@"+d)})],s);case le:if(r.length)return pr(r.props,function(a){switch(hr(a,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return D([G(r,{props:[h(a,/:(read-\w+)/,":"+ee+"$1")]})],s);case"::placeholder":return D([G(r,{props:[h(a,/:(plac\w+)/,":"+d+"input-$1")]}),G(r,{props:[h(a,/:(plac\w+)/,":"+ee+"$1")]}),G(r,{props:[h(a,/:(plac\w+)/,w+"input-$1")]})],s)}return""})}},Nr=[Tr],Pr=function(r){var t=r.key;if(t==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(x){var E=x.getAttribute("data-emotion");E.indexOf(" ")!==-1&&(document.head.appendChild(x),x.setAttribute("data-s",""))})}var s=r.stylisPlugins||Nr,a={},i,o=[];i=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(x){for(var E=x.getAttribute("data-emotion").split(" "),g=1;g<E.length;g++)a[E[g]]=!0;o.push(x)});var f,l=[Or,$r];{var u,p=[kr,Sr(function(x){u.insert(x)})],C=jr(l.concat(s,p)),T=function(E){return D(wr(E),C)};f=function(E,g,v,A){u=v,T(E?E+"{"+g.styles+"}":g.styles),A&&(j.inserted[g.name]=!0)}}var j={key:t,sheet:new cr({key:t,container:i,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:a,registered:{},insert:f};return j.sheet.hydrate(o),j};function Mr(e){for(var r=0,t,n=0,s=e.length;s>=4;++n,s-=4)t=e.charCodeAt(n)&255|(e.charCodeAt(++n)&255)<<8|(e.charCodeAt(++n)&255)<<16|(e.charCodeAt(++n)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,r=(t&65535)*1540483477+((t>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(s){case 3:r^=(e.charCodeAt(n+2)&255)<<16;case 2:r^=(e.charCodeAt(n+1)&255)<<8;case 1:r^=e.charCodeAt(n)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}var Lr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Dr=!1,Ir=/[A-Z]|^ms/g,qr=/_EMO_([^_]+?)_([^]*?)_EMO_/g,De=function(r){return r.charCodeAt(1)===45},be=function(r){return r!=null&&typeof r!="boolean"},ce=Cr(function(e){return De(e)?e:e.replace(Ir,"-$&").toLowerCase()}),ye=function(r,t){switch(r){case"animation":case"animationName":if(typeof t=="string")return t.replace(qr,function(n,s,a){return N={name:s,styles:a,next:N},s})}return Lr[r]!==1&&!De(r)&&typeof t=="number"&&t!==0?t+"px":t},Br="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function re(e,r,t){if(t==null)return"";var n=t;if(n.__emotion_styles!==void 0)return n;switch(typeof t){case"boolean":return"";case"object":{var s=t;if(s.anim===1)return N={name:s.name,styles:s.styles,next:N},s.name;var a=t;if(a.styles!==void 0){var i=a.next;if(i!==void 0)for(;i!==void 0;)N={name:i.name,styles:i.styles,next:N},i=i.next;var o=a.styles+";";return o}return Fr(e,r,t)}}var f=t;if(r==null)return f;var l=r[f];return l!==void 0?l:f}function Fr(e,r,t){var n="";if(Array.isArray(t))for(var s=0;s<t.length;s++)n+=re(e,r,t[s])+";";else for(var a in t){var i=t[a];if(typeof i!="object"){var o=i;r!=null&&r[o]!==void 0?n+=a+"{"+r[o]+"}":be(o)&&(n+=ce(a)+":"+ye(a,o)+";")}else{if(a==="NO_COMPONENT_SELECTOR"&&Dr)throw new Error(Br);if(Array.isArray(i)&&typeof i[0]=="string"&&(r==null||r[i[0]]===void 0))for(var f=0;f<i.length;f++)be(i[f])&&(n+=ce(a)+":"+ye(a,i[f])+";");else{var l=re(e,r,i);switch(a){case"animation":case"animationName":{n+=ce(a)+":"+l+";";break}default:n+=a+"{"+l+"}"}}}}return n}var ve=/label:\s*([^\s;{]+)\s*(;|$)/g,N;function oe(e,r,t){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var n=!0,s="";N=void 0;var a=e[0];if(a==null||a.raw===void 0)n=!1,s+=re(t,r,a);else{var i=a;s+=i[0]}for(var o=1;o<e.length;o++)if(s+=re(t,r,e[o]),n){var f=a;s+=f[o]}ve.lastIndex=0;for(var l="",u;(u=ve.exec(s))!==null;)l+="-"+u[1];var p=Mr(s)+l;return{name:p,styles:s,next:N}}function Ie(e,r,t){var n="";return t.split(" ").forEach(function(s){e[s]!==void 0?r.push(e[s]+";"):s&&(n+=s+" ")}),n}var Gr=function(r,t,n){var s=r.key+"-"+t.name;r.registered[s]===void 0&&(r.registered[s]=t.styles)},Wr=function(r,t,n){Gr(r,t);var s=r.key+"-"+t.name;if(r.inserted[t.name]===void 0){var a=t;do r.insert(t===a?"."+s:"",a,r.sheet,!0),a=a.next;while(a!==void 0)}};function we(e,r){if(e.inserted[r.name]===void 0)return e.insert("",r,e.sheet,!0)}function Ee(e,r,t){var n=[],s=Ie(e,n,t);return n.length<2?t:s+r(n)}var Vr=function(r){var t=Pr(r);t.sheet.speedy=function(o){this.isSpeedy=o},t.compat=!0;var n=function(){for(var f=arguments.length,l=new Array(f),u=0;u<f;u++)l[u]=arguments[u];var p=oe(l,t.registered,void 0);return Wr(t,p),t.key+"-"+p.name},s=function(){for(var f=arguments.length,l=new Array(f),u=0;u<f;u++)l[u]=arguments[u];var p=oe(l,t.registered),C="animation-"+p.name;return we(t,{name:p.name,styles:"@keyframes "+C+"{"+p.styles+"}"}),C},a=function(){for(var f=arguments.length,l=new Array(f),u=0;u<f;u++)l[u]=arguments[u];var p=oe(l,t.registered);we(t,p)},i=function(){for(var f=arguments.length,l=new Array(f),u=0;u<f;u++)l[u]=arguments[u];return Ee(t.registered,n,zr(l))};return{css:n,cx:i,injectGlobal:a,keyframes:s,hydrate:function(f){f.forEach(function(l){t.inserted[l]=!0})},flush:function(){t.registered={},t.inserted={},t.sheet.flush()},sheet:t.sheet,cache:t,getRegisteredStyles:Ie.bind(null,t.registered),merge:Ee.bind(null,t.registered,n)}},zr=function e(r){for(var t="",n=0;n<r.length;n++){var s=r[n];if(s!=null){var a=void 0;switch(typeof s){case"boolean":break;case"object":{if(Array.isArray(s))a=e(s);else{a="";for(var i in s)s[i]&&i&&(a&&(a+=" "),a+=i)}break}default:a=s}a&&(t&&(t+=" "),t+=a)}}return t},qe=Vr({key:"css"}),F=qe.cx,P=qe.css;const Be=q.forwardRef(({className:e,active:r,reversed:t,...n},s)=>c.jsx("span",{...n,ref:s,className:F(e,P`
                    cursor: pointer;
                    color: ${t?r?"white":"#aaa":r?"black":"#ccc"};
                `)}));q.forwardRef(({className:e,value:r,...t},n)=>{const s=r.document.nodes.map(a=>a.text).toArray().join(`
`);return c.jsxs("div",{ref:n,...t,className:F(e,P`
                        margin: 30px -20px 0;
                    `),children:[c.jsx("div",{className:P`
                        font-size: 14px;
                        padding: 5px 20px;
                        color: #404040;
                        border-top: 2px solid #eeeeee;
                        background: #f8f8f8;
                    `,children:"Slate's value as text"}),c.jsx("div",{className:P`
                        color: #404040;
                        font: 12px monospace;
                        white-space: pre-wrap;
                        padding: 10px 20px;
                        div {
                            margin: 0 0 0.5em;
                        }
                    `,children:s})]})});const Fe=q.forwardRef(({className:e,...r},t)=>c.jsx("span",{...r,ref:t,className:F("material-icons",e,P`
                    font-size: 18px;
                    vertical-align: text-bottom;
                `)}));q.forwardRef(({className:e,...r},t)=>c.jsx("div",{...r,ref:t,className:F(e,P`
                    white-space: pre-wrap;
                    margin: 0 -20px 10px;
                    padding: 10px 20px;
                    font-size: 14px;
                    background: #f8f8e8;
                `)}));const Kr=q.forwardRef(({className:e,...r},t)=>c.jsx("div",{...r,"data-test-id":"menu",ref:t,className:F(e,P`
                    & > * {
                        display: inline-block;
                    }

                    & > * + * {
                        margin-left: 15px;
                    }
                `)})),Yr=q.forwardRef(({className:e,...r},t)=>c.jsx(Kr,{...r,ref:t,className:F(e,P`
                    position: relative;
                    padding: 10px;
                    background-color: #789;
                `)})),Hr="------ End of Developer's Comments ------",Ur=()=>{const e=document.getElementById("editor-content-json"),r=e?e.innerText:"",t=[{type:"paragraph",children:[{text:"This is editable content."}]}];if(!r)return t;let n;try{n=JSON.parse(r)}catch(a){return console.error("Failed to parse editor content to HTML:",a),t}const s=[];return n.title&&s.push({type:"paragraph",children:[{text:n.title,bold:!0}]}),n.overview&&(s.push({type:"paragraph",children:[{text:"Overview",bold:!0}]}),s.push({type:"paragraph",children:[{text:n.overview}]})),n.advantages&&Array.isArray(n.advantages)&&(s.push({type:"paragraph",children:[{text:"Advantages",bold:!0}]}),s.push({type:"bulleted-list",children:n.advantages.map(a=>({type:"list-item",children:[{text:a}]}))})),n.drawbacks&&Array.isArray(n.drawbacks)&&(s.push({type:"paragraph",children:[{text:"Drawbacks",bold:!0}]}),s.push({type:"bulleted-list",children:n.drawbacks.map(a=>({type:"list-item",children:[{text:a}]}))})),n.conclusion&&(s.push({type:"paragraph",children:[{text:"Conclusion",bold:!0}]}),s.push({type:"paragraph",children:[{text:n.conclusion}]})),s.push({type:"paragraph",children:[{text:Hr}]}),s},ke={"mod+b":"bold","mod+i":"italic","mod+u":"underline","mod+`":"code"},je=["numbered-list","bulleted-list"],Q=["left","center","right","justify"],Jr=()=>{const e=W.useCallback(n=>c.jsx(Xr,{...n}),[]),r=W.useCallback(n=>c.jsx(Qr,{...n}),[]),t=W.useMemo(()=>Ke(Ye(Ze())),[]);return c.jsxs(He,{editor:t,initialValue:[...Ur(),...et],children:[c.jsxs(Yr,{children:[c.jsx(U,{format:"bold",icon:"format_bold"}),c.jsx(U,{format:"italic",icon:"format_italic"}),c.jsx(U,{format:"underline",icon:"format_underlined"}),c.jsx(U,{format:"code",icon:"code"}),c.jsx($,{format:"heading-one",icon:"looks_one"}),c.jsx($,{format:"heading-two",icon:"looks_two"}),c.jsx($,{format:"block-quote",icon:"format_quote"}),c.jsx($,{format:"numbered-list",icon:"format_list_numbered"}),c.jsx($,{format:"bulleted-list",icon:"format_list_bulleted"}),c.jsx($,{format:"left",icon:"format_align_left"}),c.jsx($,{format:"center",icon:"format_align_center"}),c.jsx($,{format:"right",icon:"format_align_right"}),c.jsx($,{format:"justify",icon:"format_align_justify"})]}),c.jsx(Ue,{renderElement:e,renderLeaf:r,placeholder:"Enter some rich text…",spellCheck:!0,disableDefaultStyles:!0,className:"editor-textbox",onKeyDown:n=>{for(const s in ke)if(Je(s,n)){n.preventDefault();const a=ke[s];Ge(t,a)}}})]})},Zr=(e,r)=>{const t=We(e,r,Q.includes(r)?"align":"type"),n=je.includes(r);ie.unwrapNodes(e,{match:a=>!L.isEditor(a)&&Ce.isElement(a)&&je.includes(a.type)&&!Q.includes(r),split:!0});let s;if(Q.includes(r)?s={align:t?void 0:r}:s={type:t?"paragraph":n?"list-item":r},ie.setNodes(e,s),!t&&n){const a={type:r,children:[]};ie.wrapNodes(e,a)}},Ge=(e,r)=>{Ve(e,r)?L.removeMark(e,r):L.addMark(e,r,!0)},We=(e,r,t="type")=>{const{selection:n}=e;if(!n)return!1;const[s]=Array.from(L.nodes(e,{at:L.unhangRange(e,n),match:a=>!L.isEditor(a)&&Ce.isElement(a)&&a[t]===r}));return!!s},Ve=(e,r)=>{const t=L.marks(e);return t?t[r]===!0:!1},Xr=({attributes:e,children:r,element:t})=>{const n={textAlign:t.align};switch(t.type){case"block-quote":return c.jsx("blockquote",{style:n,...e,children:r});case"bulleted-list":return c.jsx("ul",{style:n,...e,children:r});case"heading-one":return c.jsx("h1",{style:n,...e,children:r});case"heading-two":return c.jsx("h2",{style:n,...e,children:r});case"list-item":return c.jsx("li",{style:n,...e,children:r});case"numbered-list":return c.jsx("ol",{style:n,...e,children:r});default:return c.jsx("p",{style:n,...e,children:r})}},Qr=({attributes:e,children:r,leaf:t})=>(t.bold&&(r=c.jsx("strong",{children:r})),t.code&&(r=c.jsx("code",{children:r})),t.italic&&(r=c.jsx("em",{children:r})),t.underline&&(r=c.jsx("u",{children:r})),c.jsx("span",{...e,children:r})),$=({format:e,icon:r})=>{const t=Se();return c.jsx(Be,{active:We(t,e,Q.includes(e)?"align":"type"),onMouseDown:n=>{n.preventDefault(),Zr(t,e)},children:c.jsx(Fe,{children:r})})},U=({format:e,icon:r})=>{const t=Se();return c.jsx(Be,{active:Ve(t,e),onMouseDown:n=>{n.preventDefault(),Ge(t,e)},children:c.jsx(Fe,{children:r})})},et=[{type:"paragraph",children:[{text:"This is editable "},{text:"rich",bold:!0},{text:" text, "},{text:"much",italic:!0},{text:" better than a "},{text:"<textarea>",code:!0},{text:"!"}]},{type:"paragraph",children:[{text:"Since it's rich text, you can do things like turn a selection of text "},{text:"bold",bold:!0},{text:", or add a semantically rendered block quote in the middle of the page, like this:"}]},{type:"block-quote",children:[{text:"A wise quote."}]},{type:"paragraph",align:"center",children:[{text:"Try it out for yourself!"}]}];_e(document.getElementById("root")).render(c.jsx(W.StrictMode,{children:c.jsx("div",{className:"container",children:c.jsx(Jr,{})})}));
