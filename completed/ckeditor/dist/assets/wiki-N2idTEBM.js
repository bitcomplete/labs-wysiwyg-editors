import{c as r,j as e,g as n}from"./index-mRZX017O.js";import{r as a}from"./react-C_gYsUBP.js";import{k as d,l as c,m as h,A as u,a as m,B as g,b as p,c as b,C as f,E as k,G as T,H as L,t as x,u as C,O as H,Q as v,I as y,L as w,d as E,e as P,M as R,X as j,P as _,f as S,g as A,R as B,S as I,h as D,a4 as K,a5 as M,a6 as F,a7 as G,a8 as N,a9 as Q,aa as U,ab as z,T as O,ac as V,U as W,ad as X,i as $,j as q}from"./ckeditor-CD3WpQ63.js";import{p as J}from"./parseContentToHtml-siEqU7OT.js";function Y(){const i=a.useRef(null),s=a.useRef(null),[o,t]=a.useState(!1);a.useEffect(()=>(t(!0),()=>t(!1)),[]);const l={licenseKey:n(),toolbar:{items:["undo","redo","|","heading","|","bold","italic","underline","|","link","insertTable","highlight","blockQuote","|","alignment","|","bulletedList","numberedList","todoList"],shouldNotGroupWhenFull:!1},plugins:[d,c,h,u,m,g,p,b,f,k,T,L,x,C,H,v,y,w,E,P,R,j,_,S,A,B,I,D,K,M,F,G,N,Q,U,z,O,V,W,X],balloonToolbar:["bold","italic","|","link","|","bulletedList","numberedList"],heading:{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h1",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h2",title:"Heading 2",class:"ck-heading_heading2"},{model:"heading3",view:"h3",title:"Heading 3",class:"ck-heading_heading3"},{model:"heading4",view:"h4",title:"Heading 4",class:"ck-heading_heading4"},{model:"heading5",view:"h5",title:"Heading 5",class:"ck-heading_heading5"},{model:"heading6",view:"h6",title:"Heading 6",class:"ck-heading_heading6"}]},htmlSupport:{allow:[{name:/^.*$/,styles:!0,attributes:!0,classes:!0}]},initialData:J()+`<ul>
    <li>📝 <a href="https://orders.ckeditor.com/trial/premium-features">Trial sign up</a>,</li>
    <li>📕 <a href="https://ckeditor.com/docs/ckeditor5/latest/installation/index.html">Documentation</a>,</li>
    <li>⭐️ <a href="https://github.com/ckeditor/ckeditor5">GitHub</a>,</li>
    <li>🏠 <a href="https://ckeditor.com">CKEditor Homepage</a>,</li>
    <li>🧑‍💻 <a href="https://ckeditor.com/ckeditor-5/demo/">CKEditor 5 Demos</a>,</li>
</ul>
`,link:{addTargetToExternalLinks:!0,defaultProtocol:"https://",decorators:{toggleDownloadable:{mode:"manual",label:"Downloadable",attributes:{download:"file"}}}},list:{properties:{styles:!0,startIndex:!0,reversed:!0}},menuBar:{isVisible:!0},placeholder:"Type or paste your content here!",table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties"]}};return e.jsx("div",{children:e.jsx("div",{className:"main-container",children:e.jsx("div",{className:"editor-container editor-container_classic-editor editor-container_include-style",ref:i,children:e.jsx("div",{className:"editor-container__editor editor-body",children:e.jsx("div",{ref:s,children:o&&e.jsx($,{editor:q,config:l})})})})})})}r(document.getElementById("root")).render(e.jsx(a.StrictMode,{children:e.jsx(Y,{})}));
