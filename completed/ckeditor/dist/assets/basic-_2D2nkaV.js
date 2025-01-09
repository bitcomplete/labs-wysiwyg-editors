import{c as l,j as o}from"./index-DdQ729D5.js";import{r as i}from"./react-C_gYsUBP.js";import{A as d,a as c,B as u,b as p,c as h,C as m,E as f,G as b,I as g,L as y,d as k,e as E,M as v,P as w,f as x,g as C,R as T,S as j,h as L,T as A,U as R,i as S,j as D}from"./ckeditor-CD3WpQ63.js";const N="------ End of Developer's Comments ------",I=()=>{const a=document.getElementById("editor-content-json"),s=a?a.innerText:"",n="This is editable content.";if(!s)return n;let e;try{e=JSON.parse(s)}catch(r){return console.error("Failed to parse editor content to HTML:",r),n}let t="";return e.title&&(t+=`<b>${e.title}</b>`),e.overview&&(t+=`<p><b>Overview</b><p>${e.overview}</p></p>`),e.advantages&&Array.isArray(e.advantages)&&(t+="<p><b>Advantages</b></p><ul>",e.advantages.forEach(r=>{t+=`<li>${r}</li>`}),t+="</ul>"),e.drawbacks&&Array.isArray(e.drawbacks)&&(t+="<p><b>Drawbacks</b></p><ul>",e.drawbacks.forEach(r=>{t+=`<li>${r}</li>`}),t+="</ul>"),e.conclusion&&(t+=`<p><b>Conclusion</b></p><p>${e.conclusion}</p>`),t+=`<p>${N}</p>`,t};function O(){const a=i.useRef(null),s=i.useRef(null),[n,e]=i.useState(!1);i.useEffect(()=>(e(!0),()=>e(!1)),[]);const t={toolbar:{items:["bold","italic","underline","|","link","bulletedList","numberedList"],shouldNotGroupWhenFull:!1},plugins:[d,c,u,p,h,m,f,b,g,y,k,E,v,w,x,C,T,j,L,A,R],balloonToolbar:["bold","italic","|","link","|","bulletedList","numberedList"],htmlSupport:{allow:[{name:/^.*$/,styles:!0,attributes:!0,classes:!0}]},initialData:I()+`<b>Congratulations on setting up CKEditor 5! 🎉</b>
<p>
    You've successfully created a CKEditor 5 project. This powerful text editor will enhance your application, enabling rich text editing
    capabilities that are customizable and easy to use.
</p>
<b>What's next?</b>
<ol>
    <li>
        <strong>Integrate into your app</strong>: time to bring the editing into your application. Take the code you created and add to your
        application.
    </li>
    <li>
        <strong>Explore features:</strong> Experiment with different plugins and toolbar options to discover what works best for your needs.
    </li>
    <li>
        <strong>Customize your editor:</strong> Tailor the editor's configuration to match your application's style and requirements. Or even
        write your plugin!
    </li>
</ol>
<p>
    Keep experimenting, and don't hesitate to push the boundaries of what you can achieve with CKEditor 5. Your feedback is invaluable to us
    as we strive to improve and evolve. Happy editing!
</p>
<h3>Helpful resources</h3>
<ul>
    <li>📝 <a href="https://orders.ckeditor.com/trial/premium-features">Trial sign up</a>,</li>
    <li>📕 <a href="https://ckeditor.com/docs/ckeditor5/latest/installation/index.html">Documentation</a>,</li>
    <li>⭐️ <a href="https://github.com/ckeditor/ckeditor5">GitHub</a> (star us if you can!),</li>
    <li>🏠 <a href="https://ckeditor.com">CKEditor Homepage</a>,</li>
    <li>🧑‍💻 <a href="https://ckeditor.com/ckeditor-5/demo/">CKEditor 5 Demos</a>,</li>
</ul>
<b>Need help?</b>
<p>
    See this text, but the editor is not starting up? Check the browser's console for clues and guidance. It may be related to an incorrect
    license key if you use premium features or another feature-related requirement. If you cannot make it work, file a GitHub issue, and we
    will help as soon as possible!
</p>
`,link:{addTargetToExternalLinks:!0,defaultProtocol:"https://",decorators:{toggleDownloadable:{mode:"manual",label:"Downloadable",attributes:{download:"file"}}}},list:{properties:{styles:!1,startIndex:!1,reversed:!1}},menuBar:{isVisible:!0},placeholder:"Type or paste your content here!"};return o.jsx("div",{children:o.jsx("div",{className:"main-container",children:o.jsx("div",{className:"editor-container editor-container_classic-editor editor-container_include-style",ref:a,children:o.jsx("div",{className:"editor-container__editor",children:o.jsx("div",{ref:s,children:n&&o.jsx(S,{editor:D,config:t})})})})})})}l(document.getElementById("root")).render(o.jsx(i.StrictMode,{children:o.jsx(O,{})}));
