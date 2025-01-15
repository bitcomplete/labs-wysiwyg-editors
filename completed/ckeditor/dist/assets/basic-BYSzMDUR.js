import{c as l,j as e,p as n}from"./index-D9SBdBx4.js";import{r as t}from"./react-C_gYsUBP.js";import{A as d,a as u,B as c,b as p,c as h,C as m,E as f,G as b,I as g,L as y,d as k,e as x,M as w,P as v,f as E,g as C,R as T,S as L,h as j,T as R,U as I,i as S,j as H}from"./ckeditor-CD3WpQ63.js";function K(){const i=t.useRef(null),a=t.useRef(null),[r,o]=t.useState(!1);t.useEffect(()=>(o(!0),()=>o(!1)),[]);const s={toolbar:{items:["bold","italic","underline","|","link","bulletedList","numberedList"],shouldNotGroupWhenFull:!1},plugins:[d,u,c,p,h,m,f,b,g,y,k,x,w,v,E,C,T,L,j,R,I],balloonToolbar:["bold","italic","|","link","|","bulletedList","numberedList"],htmlSupport:{allow:[{name:/^.*$/,styles:!0,attributes:!0,classes:!0}]},initialData:n()+`<b>Congratulations on setting up CKEditor 5! 🎉</b>
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
`,link:{addTargetToExternalLinks:!0,defaultProtocol:"https://",decorators:{toggleDownloadable:{mode:"manual",label:"Downloadable",attributes:{download:"file"}}}},list:{properties:{styles:!1,startIndex:!1,reversed:!1}},menuBar:{isVisible:!0},placeholder:"Type or paste your content here!"};return e.jsx("div",{children:e.jsx("div",{className:"main-container",children:e.jsx("div",{className:"editor-container editor-container_classic-editor editor-container_include-style",ref:i,children:e.jsx("div",{className:"editor-container__editor",children:e.jsx("div",{ref:a,children:r&&e.jsx(S,{editor:H,config:s})})})})})})}l(document.getElementById("root")).render(e.jsx(t.StrictMode,{children:e.jsx(K,{})}));
