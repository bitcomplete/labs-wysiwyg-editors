import{r as f,a as u}from"./react-C_gYsUBP.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();var l={exports:{}},a={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d=f,m=Symbol.for("react.element"),y=Symbol.for("react.fragment"),b=Object.prototype.hasOwnProperty,v=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_={key:!0,ref:!0,__self:!0,__source:!0};function p(n,o,s){var r,e={},t=null,i=null;s!==void 0&&(t=""+s),o.key!==void 0&&(t=""+o.key),o.ref!==void 0&&(i=o.ref);for(r in o)b.call(o,r)&&!_.hasOwnProperty(r)&&(e[r]=o[r]);if(n&&n.defaultProps)for(r in o=n.defaultProps,o)e[r]===void 0&&(e[r]=o[r]);return{$$typeof:m,type:n,key:t,ref:i,props:e,_owner:v.current}}a.Fragment=y;a.jsx=p;a.jsxs=p;l.exports=a;var g=l.exports,E,c=u;E=c.createRoot,c.hydrateRoot;const O="Preview more features below:",w=()=>{const n=document.getElementById("editor-content-json"),o=n?n.innerText:"",s="This is editable content.";if(!o)return s;let r;try{r=JSON.parse(o)}catch(t){return console.error("Failed to parse editor content to HTML:",t),s}let e="";return r.title&&(e+=`<p><b>${r.title}</b></p>`),r.overview&&(e+=`<p><b>Overview</b><p>${r.overview}</p></p>`),r.advantages&&Array.isArray(r.advantages)&&(e+="<p><b>Advantages</b></p><ul>",r.advantages.forEach(t=>{e+=`<li>${t}</li>`}),e+="</ul>"),r.drawbacks&&Array.isArray(r.drawbacks)&&(e+="<p><b>Drawbacks</b></p><ul>",r.drawbacks.forEach(t=>{e+=`<li>${t}</li>`}),e+="</ul>"),r.conclusion&&(e+=`<p><b>Conclusion</b></p><p>${r.conclusion}</p>`),e+=`<p>${O}</p>`,e};export{E as c,g as j,w as p};
