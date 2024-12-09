import{r as a,a as p}from"./react-YsBxPMQB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();var u={exports:{}},c={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d=a,m=Symbol.for("react.element"),y=Symbol.for("react.fragment"),_=Object.prototype.hasOwnProperty,O=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function l(n,t,i){var o,e={},r=null,s=null;i!==void 0&&(r=""+i),t.key!==void 0&&(r=""+t.key),t.ref!==void 0&&(s=t.ref);for(o in t)_.call(t,o)&&!v.hasOwnProperty(o)&&(e[o]=t[o]);if(n&&n.defaultProps)for(o in t=n.defaultProps,t)e[o]===void 0&&(e[o]=t[o]);return{$$typeof:m,type:n,key:r,ref:s,props:e,_owner:O.current}}c.Fragment=y;c.jsx=l;c.jsxs=l;u.exports=c;var R=u.exports,x,f=p;x=f.createRoot,f.hydrateRoot;export{x as c,R as j};
