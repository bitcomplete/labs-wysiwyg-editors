import{D as l,P as s,T as r,B as a,I as u,S as d,C as b,U as g,H as h,a as k,O as v,L as m,b as f,c as x,d as p,e as C,j as o,r as i,u as j,E as N}from"./constants-C3H0B5y1.js";import{p as A}from"./parseContentToHtml-C20UmG5W.js";const B=[l,s,r,a,u,d,b,g,h.configure({levels:[1,2,3,4,5,6]}),k,v,m,f.configure({openOnClick:!0,autolink:!0,defaultProtocol:"https"}),x,p],L=`
  <p>
    This is a <em>basic</em> example of <strong>Tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
  </p>
  <ul>
    <li>
      That’s a bullet list with one …
    </li>
    <li>
      … or two list items.
    </li>
  </ul>
  <p>
    Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
  </p>
  <pre><code class="language-css">body {
    display: none;
  }</code></pre>
  <p>
    I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
  </p>
  <blockquote>
    Wow, that’s amazing. Good work, boy! 👏
    <br />
    — Mom
  </blockquote>
  `,H=()=>{const t=j({extensions:B,content:`${A()}${L}`});if(!t)return null;const n=i.useCallback(()=>{const c=t.getAttributes("link").href,e=window.prompt("URL",c);if(e!==null){if(e===""){t.chain().focus().extendMarkRange("link").unsetLink().run();return}t.chain().focus().extendMarkRange("link").setLink({href:e}).run()}},[t]);return o.jsxs("div",{className:"card",children:[o.jsx("div",{className:"control-group",children:o.jsxs("div",{className:"button-group",children:[o.jsx("button",{onClick:()=>t.chain().focus().toggleBold().run(),disabled:!t.can().chain().focus().toggleBold().run(),className:t.isActive("bold")?"is-active editor-control-button":"editor-control-button",children:"Bold"}),o.jsx("button",{onClick:()=>t.chain().focus().toggleItalic().run(),disabled:!t.can().chain().focus().toggleItalic().run(),className:t.isActive("italic")?"is-active editor-control-button":"editor-control-button",children:"Italic"}),o.jsx("button",{onClick:()=>t.chain().focus().toggleStrike().run(),disabled:!t.can().chain().focus().toggleStrike().run(),className:t.isActive("strike")?"is-active editor-control-button":"editor-control-button",children:"Strike"}),o.jsx("button",{onClick:()=>t.chain().focus().toggleUnderline().run(),disabled:!t.can().chain().focus().toggleUnderline().run(),className:t.isActive("underline")?"is-active editor-control-button":"editor-control-button",children:"Underline"}),o.jsx("button",{onClick:()=>t.chain().focus().toggleCode().run(),disabled:!t.can().chain().focus().toggleCode().run(),className:t.isActive("code")?"is-active editor-control-button":"editor-control-button",children:"Code"}),o.jsx("button",{onClick:()=>t.chain().focus().toggleHeading({level:1}).run(),className:t.isActive("heading",{level:1})?"is-active editor-control-button":"editor-control-button",children:"H1"}),o.jsx("button",{onClick:()=>t.chain().focus().toggleHeading({level:2}).run(),className:t.isActive("heading",{level:2})?"is-active editor-control-button":"editor-control-button",children:"H2"}),o.jsx("button",{onClick:()=>t.chain().focus().toggleHeading({level:3}).run(),className:t.isActive("heading",{level:3})?"is-active editor-control-button":"editor-control-button",children:"H3"}),o.jsx("button",{onClick:()=>t.chain().focus().toggleHeading({level:4}).run(),className:t.isActive("heading",{level:4})?"is-active editor-control-button":"editor-control-button",children:"H4"}),o.jsx("button",{onClick:()=>t.chain().focus().toggleHeading({level:5}).run(),className:t.isActive("heading",{level:5})?"is-active editor-control-button":"editor-control-button",children:"H5"}),o.jsx("button",{onClick:()=>t.chain().focus().toggleHeading({level:6}).run(),className:t.isActive("heading",{level:6})?"is-active editor-control-button":"editor-control-button",children:"H6"}),o.jsx("button",{onClick:()=>t.chain().focus().toggleBulletList().run(),className:t.isActive("bulletList")?"is-active editor-control-button":"editor-control-button",children:"Bullet list"}),o.jsx("button",{onClick:()=>t.chain().focus().toggleOrderedList().run(),className:t.isActive("orderedList")?"is-active editor-control-button":"editor-control-button",children:"Ordered list"}),o.jsx("button",{onClick:()=>t.chain().focus().toggleCodeBlock().run(),className:t.isActive("codeBlock")?"is-active editor-control-button":"editor-control-button",children:"Code block"}),o.jsx("button",{onClick:()=>t.chain().focus().toggleBlockquote().run(),className:t.isActive("blockquote")?"is-active editor-control-button":"editor-control-button",children:"Blockquote"})," ",o.jsx("button",{onClick:n,className:t.isActive("link")?"is-active editor-control-button":"editor-control-button",children:"Set link"}),o.jsx("button",{onClick:()=>t.chain().focus().unsetLink().run(),disabled:!t.isActive("link"),className:"editor-control-button",children:"Unset link"})]})}),o.jsx(N,{editor:t,className:"editor editor-body"})]})};C(document.getElementById("root")).render(o.jsx(i.StrictMode,{children:o.jsx(H,{})}));
