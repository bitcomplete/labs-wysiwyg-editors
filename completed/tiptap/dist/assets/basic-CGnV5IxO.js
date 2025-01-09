import{D as l,P as o,T as a,B as r,I as u,S as d,C as h,U as g,H as k,a as v,O as b,L as m,b as f,c as x,d as p,e as C,j as i,r as s,u as j,E as A}from"./index-8d_XDoOF.js";import{p as N}from"./parseContentToHtml-7AxGeDOE.js";const B=[l,o,a,r,u,d,h,g,k.configure({levels:[1,2,3,4,5,6]}),v,b,m,f.configure({openOnClick:!0,autolink:!0,defaultProtocol:"https"}),x,p],H=`
  <h2>
    Hi there,
  </h2>
  <p>
    this is a <em>basic</em> example of <strong>Tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
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
  `,L=()=>{const e=j({extensions:B,content:`${N()}${H}`});if(!e)return null;const n=s.useCallback(()=>{const c=e.getAttributes("link").href,t=window.prompt("URL",c);if(t!==null){if(t===""){e.chain().focus().extendMarkRange("link").unsetLink().run();return}e.chain().focus().extendMarkRange("link").setLink({href:t}).run()}},[e]);return i.jsxs("div",{className:"card",children:[i.jsx("h1",{children:"Tiptap Basics - React"}),i.jsx("div",{className:"control-group",children:i.jsxs("div",{className:"button-group",children:[i.jsx("button",{onClick:()=>e.chain().focus().toggleBold().run(),disabled:!e.can().chain().focus().toggleBold().run(),className:e.isActive("bold")?"is-active":"",children:"Bold"}),i.jsx("button",{onClick:()=>e.chain().focus().toggleItalic().run(),disabled:!e.can().chain().focus().toggleItalic().run(),className:e.isActive("italic")?"is-active":"",children:"Italic"}),i.jsx("button",{onClick:()=>e.chain().focus().toggleStrike().run(),disabled:!e.can().chain().focus().toggleStrike().run(),className:e.isActive("strike")?"is-active":"",children:"Strike"}),i.jsx("button",{onClick:()=>e.chain().focus().toggleUnderline().run(),disabled:!e.can().chain().focus().toggleUnderline().run(),className:e.isActive("underline")?"is-active":"",children:"Underline"}),i.jsx("button",{onClick:()=>e.chain().focus().toggleCode().run(),disabled:!e.can().chain().focus().toggleCode().run(),className:e.isActive("code")?"is-active":"",children:"Code"}),i.jsx("button",{onClick:()=>e.chain().focus().toggleHeading({level:1}).run(),className:e.isActive("heading",{level:1})?"is-active":"",children:"H1"}),i.jsx("button",{onClick:()=>e.chain().focus().toggleHeading({level:2}).run(),className:e.isActive("heading",{level:2})?"is-active":"",children:"H2"}),i.jsx("button",{onClick:()=>e.chain().focus().toggleHeading({level:3}).run(),className:e.isActive("heading",{level:3})?"is-active":"",children:"H3"}),i.jsx("button",{onClick:()=>e.chain().focus().toggleHeading({level:4}).run(),className:e.isActive("heading",{level:4})?"is-active":"",children:"H4"}),i.jsx("button",{onClick:()=>e.chain().focus().toggleHeading({level:5}).run(),className:e.isActive("heading",{level:5})?"is-active":"",children:"H5"}),i.jsx("button",{onClick:()=>e.chain().focus().toggleHeading({level:6}).run(),className:e.isActive("heading",{level:6})?"is-active":"",children:"H6"}),i.jsx("button",{onClick:()=>e.chain().focus().toggleBulletList().run(),className:e.isActive("bulletList")?"is-active":"",children:"Bullet list"}),i.jsx("button",{onClick:()=>e.chain().focus().toggleOrderedList().run(),className:e.isActive("orderedList")?"is-active":"",children:"Ordered list"}),i.jsx("button",{onClick:()=>e.chain().focus().toggleCodeBlock().run(),className:e.isActive("codeBlock")?"is-active":"",children:"Code block"}),i.jsx("button",{onClick:()=>e.chain().focus().toggleBlockquote().run(),className:e.isActive("blockquote")?"is-active":"",children:"Blockquote"})," ",i.jsx("button",{onClick:n,className:e.isActive("link")?"is-active":"",children:"Set link"}),i.jsx("button",{onClick:()=>e.chain().focus().unsetLink().run(),disabled:!e.isActive("link"),children:"Unset link"})]})}),i.jsx(A,{editor:e,className:"editor"})]})};C(document.getElementById("root")).render(i.jsx(s.StrictMode,{children:i.jsx(L,{})}));
