import{T as c,d as u,a as h,s as p,S as g,p as f}from"./style-O_cwcEwl.js";import{v as m,m as b,s as w,A as C,F as v}from"./bundle-CPL9y_4S.js";(function(){try{if(typeof document<"u"){var n=document.createElement("style");n.appendChild(document.createTextNode(".ce-code__textarea{min-height:200px;font-family:Menlo,Monaco,Consolas,Courier New,monospace;color:#41314e;line-height:1.6em;font-size:12px;background:#f8f7fa;border:1px solid #f1f1f4;box-shadow:none;white-space:pre;word-wrap:normal;overflow-x:auto;resize:vertical}")),document.head.appendChild(n)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();function x(n,e){let t="";for(;t!==`
`&&e>0;)e=e-1,t=n.substr(e,1);return t===`
`&&(e+=1),e}const S='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8L5 12L9 16"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8L19 12L15 16"/></svg>';/**
 * CodeTool for Editor.js
 * @version 2.0.0
 * @license MIT
 */class l{static get isReadOnlySupported(){return!0}static get enableLineBreaks(){return!0}constructor({data:e,config:t,api:a,readOnly:s}){this.api=a,this.readOnly=s,this.placeholder=this.api.i18n.t(t.placeholder||l.DEFAULT_PLACEHOLDER),this.CSS={baseClass:this.api.styles.block,input:this.api.styles.input,wrapper:"ce-code",textarea:"ce-code__textarea"},this.nodes={holder:null,textarea:null},this.data={code:e.code??""},this.nodes.holder=this.drawView()}render(){return this.nodes.holder}save(e){return{code:e.querySelector("textarea").value}}onPaste(e){const t=e.detail;if("data"in t){const a=t.data;this.data={code:a||""}}}get data(){return this._data}set data(e){this._data=e,this.nodes.textarea&&(this.nodes.textarea.value=e.code)}static get toolbox(){return{icon:S,title:"Code"}}static get DEFAULT_PLACEHOLDER(){return"Enter a code"}static get pasteConfig(){return{tags:["pre"]}}static get sanitize(){return{code:!0}}tabHandler(e){e.stopPropagation(),e.preventDefault();const t=e.target,a=e.shiftKey,s=t.selectionStart,r=t.value,o="  ";let i;if(!a)i=s+o.length,t.value=r.substring(0,s)+o+r.substring(s);else{const d=x(r,s);if(r.substr(d,o.length)!==o)return;t.value=r.substring(0,d)+r.substring(d+o.length),i=s-o.length}t.setSelectionRange(i,i)}drawView(){const e=document.createElement("div"),t=document.createElement("textarea");return e.classList.add(this.CSS.baseClass,this.CSS.wrapper),t.classList.add(this.CSS.textarea,this.CSS.input),t.value=this.data.code,t.placeholder=this.placeholder,this.readOnly&&(t.disabled=!0),e.appendChild(t),t.addEventListener("keydown",a=>{switch(a.code){case"Tab":this.tabHandler(a);break}}),this.nodes.textarea=t,e}}new c({holder:"editorjs",autofocuse:!0,tools:{header:m,list:{class:u,inlineToolbar:!0,config:{defaultStyle:"unordered"}},quote:b,code:l,underline:h,inlineCode:{class:p,shortcut:"CMD+SHIFT+M"},strikethrough:g,marker:{class:w,shortcut:"CMD+SHIFT+H"},alignmentTune:{class:C},table:v},tunes:["alignmentTune"],data:{blocks:f()}});
