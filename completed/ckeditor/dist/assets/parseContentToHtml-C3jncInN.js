import{B as s}from"./index-CjsOZlEE.js";const c="Preview more features below:",p=(i=!0)=>{const n=document.getElementById("editor-content-json"),o=n?n.innerText:"",a="This is editable content.";if(!o)return a;let e;try{e=JSON.parse(o)}catch(r){return console.error("Failed to parse editor content to HTML:",r),a}let t="";return e.title&&(t+=`<p><b>${e.title}</b> - by <a href="${s}" target="_blank">Bit Complete</a></p>`),e.overview&&(t+=`<p><b>Overview</b></p><p>${e.overview}</p>`),e.advantages&&Array.isArray(e.advantages)&&(t+="<p><b>Advantages</b></p><ul>",e.advantages.forEach(r=>{t+=`<li>${r}</li>`}),t+="</ul>"),e.drawbacks&&Array.isArray(e.drawbacks)&&(t+="<p><b>Drawbacks</b></p><ul>",e.drawbacks.forEach(r=>{t+=`<li>${r}</li>`}),t+="</ul>"),e.conclusion&&(t+=`<p><b>Conclusion</b></p><p>${e.conclusion}</p>`),i&&(t+=`<p><b>${c}</b></p>`),t};export{p};
