import{r as d,a as m}from"./react-C_gYsUBP.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();var u={exports:{}},c={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=d,p=Symbol.for("react.element"),f=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,O=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,L={key:!0,ref:!0,__self:!0,__source:!0};function I(o,r,n){var i,e={},t=null,s=null;n!==void 0&&(t=""+n),r.key!==void 0&&(t=""+r.key),r.ref!==void 0&&(s=r.ref);for(i in r)y.call(r,i)&&!L.hasOwnProperty(i)&&(e[i]=r[i]);if(o&&o.defaultProps)for(i in r=o.defaultProps,r)e[i]===void 0&&(e[i]=r[i]);return{$$typeof:p,type:o,key:t,ref:s,props:e,_owner:O.current}}c.Fragment=f;c.jsx=I;c.jsxs=I;u.exports=c;var b=u.exports,N,l=m;N=l.createRoot,l.hydrateRoot;const J="https://www.bitcomplete.io/?ref=wysiwyg-editors-03",w="eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NjgzNDg3OTksImp0aSI6IjUxY2RmNWM5LWExNDItNDlmZC05MmI0LTE1OTMwOTlmNDI0MyIsImxpY2Vuc2VkSG9zdHMiOlsiMTI3LjAuMC4xIiwibG9jYWxob3N0IiwiMTkyLjE2OC4qLioiLCIxMC4qLiouKiIsIjE3Mi4qLiouKiIsIioudGVzdCIsIioubG9jYWxob3N0IiwiKi5sb2NhbCJdLCJ1c2FnZUVuZHBvaW50IjoiaHR0cHM6Ly9wcm94eS1ldmVudC5ja2VkaXRvci5jb20iLCJkaXN0cmlidXRpb25DaGFubmVsIjpbImNsb3VkIiwiZHJ1cGFsIl0sImxpY2Vuc2VUeXBlIjoiZGV2ZWxvcG1lbnQiLCJmZWF0dXJlcyI6WyJEUlVQIl0sInZjIjoiMTA5ZWVkZGUifQ.7twYmmQ-lQEF3Uh6pJk_rq25LfvdKSDSqXX4kG5HiYi3eGoaMj_zpQJkwfGRLtiFo7Smc4WMw155ypzdsXTAjQ",j="eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NjgzNDg3OTksImp0aSI6IjE2YmExOTgyLWI0OTYtNDQwMi05NDUwLThjZWY5NTdmNDBjNCIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiXSwiZmVhdHVyZXMiOlsiRFJVUCJdLCJ2YyI6IjQ1Y2QyMzI0In0.tjWp7guz42Cx6O4w0zBy5Fi7NHzwsLQa0II7e4OL-rPFugOG3MJDkucuXvkfwclO-qYDkqULHE_bsiaGj6em7Q";function _(){return window.parent.location.hostname==="wysiwyg-editors.com"?j:w}export{J as B,N as c,_ as g,b as j};
