import{c as l,j as e,p as n}from"./index-hHJxD_QX.js";import{r as t}from"./react-C_gYsUBP.js";import{A as d,a as c,B as u,b as m,c as f,C as p,E as h,G as b,I as k,L as x,d as g,e as L,M as E,P as j,f as T,g as y,R,S as C,h as v,T as S,U as w,i as B,j as P}from"./ckeditor-CD3WpQ63.js";function A(){const o=t.useRef(null),r=t.useRef(null),[s,a]=t.useState(!1);t.useEffect(()=>(a(!0),()=>a(!1)),[]);const i={toolbar:{items:["bold","italic","underline","|","link","bulletedList","numberedList"],shouldNotGroupWhenFull:!1},plugins:[d,c,u,m,f,p,h,b,k,x,g,L,E,j,T,y,R,C,v,S,w],balloonToolbar:["bold","italic","|","link","|","bulletedList","numberedList"],htmlSupport:{allow:[{name:/^.*$/,styles:!0,attributes:!0,classes:!0}]},initialData:n()+`<ul>
    <li>📝 <a href="https://orders.ckeditor.com/trial/premium-features">Trial sign up</a>,</li>
    <li>📕 <a href="https://ckeditor.com/docs/ckeditor5/latest/installation/index.html">Documentation</a>,</li>
    <li>⭐️ <a href="https://github.com/ckeditor/ckeditor5">GitHub</a>,</li>
    <li>🏠 <a href="https://ckeditor.com">CKEditor Homepage</a>,</li>
    <li>🧑‍💻 <a href="https://ckeditor.com/ckeditor-5/demo/">CKEditor 5 Demos</a>,</li>
</ul>
`,link:{addTargetToExternalLinks:!0,defaultProtocol:"https://",decorators:{toggleDownloadable:{mode:"manual",label:"Downloadable",attributes:{download:"file"}}}},list:{properties:{styles:!1,startIndex:!1,reversed:!1}},menuBar:{isVisible:!0},placeholder:"Type or paste your content here!"};return e.jsx("div",{children:e.jsx("div",{className:"main-container",children:e.jsx("div",{className:"editor-container editor-container_classic-editor editor-container_include-style",ref:o,children:e.jsx("div",{className:"editor-container__editor",children:e.jsx("div",{ref:r,children:s&&e.jsx(B,{editor:P,config:i})})})})})})}l(document.getElementById("root")).render(e.jsx(t.StrictMode,{children:e.jsx(A,{})}));
