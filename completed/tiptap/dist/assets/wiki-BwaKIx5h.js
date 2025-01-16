import{D as l,P as r,T as s,B as a,I as u,S as d,C as b,U as h,H as g,a as k,O as f,L as m,b as v,c as x,d as C,e as p,j as o,r as n,u as j,E as A}from"./constants-B4ln-Brx.js";import{H as N,T as w,G as B,a as L,b as H,c as T,d as y}from"./index-BnRW0GJG.js";import{p as I}from"./parseContentToHtml-pyWtlPNU.js";const R=[l,r,s,a,u,d,b,h,g.configure({levels:[1,2,3,4,5,6]}),k,f,m,v.configure({openOnClick:!0,autolink:!0,defaultProtocol:"https"}),x,C,N,w.configure({types:["heading","paragraph"]}),B,L.configure({resizable:!0}),H,T,y],S=`
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
  <table>
    <tbody>
    <tr>
        <th>Name</th>
        <th colspan="3">Description</th>
    </tr>
    <tr>
        <td>Cyndi Lauper</td>
        <td>Singer</td>
        <td>Songwriter</td>
        <td>Actress</td>
    </tr>
    </tbody>
  </table>
  `,U=()=>{const t=j({extensions:R,content:`${I()}${S}`});if(!t)return null;const i=n.useCallback(()=>{const c=t.getAttributes("link").href,e=window.prompt("URL",c);if(e!==null){if(e===""){t.chain().focus().extendMarkRange("link").unsetLink().run();return}t.chain().focus().extendMarkRange("link").setLink({href:e}).run()}},[t]);return o.jsxs("div",{className:"card",children:[o.jsx("div",{className:"control-group",children:o.jsxs("div",{className:"button-group",children:[o.jsx("button",{onClick:()=>t.chain().focus().toggleBold().run(),disabled:!t.can().chain().focus().toggleBold().run(),className:t.isActive("bold")?"is-active editor-control-button":"editor-control-button",children:"Bold"}),o.jsx("button",{onClick:()=>t.chain().focus().toggleItalic().run(),disabled:!t.can().chain().focus().toggleItalic().run(),className:t.isActive("italic")?"is-active editor-control-button":"editor-control-button",children:"Italic"}),o.jsx("button",{onClick:()=>t.chain().focus().toggleStrike().run(),disabled:!t.can().chain().focus().toggleStrike().run(),className:t.isActive("strike")?"is-active editor-control-button":"editor-control-button",children:"Strike"}),o.jsx("button",{onClick:()=>t.chain().focus().toggleUnderline().run(),disabled:!t.can().chain().focus().toggleUnderline().run(),className:t.isActive("underline")?"is-active editor-control-button":"editor-control-button",children:"Underline"}),o.jsx("button",{onClick:()=>t.chain().focus().toggleHighlight().run(),className:t.isActive("highlight")?"is-active editor-control-button":"editor-control-button",children:"Highlight"}),o.jsx("button",{onClick:()=>t.chain().focus().toggleCode().run(),disabled:!t.can().chain().focus().toggleCode().run(),className:t.isActive("code")?"is-active editor-control-button":"editor-control-button",children:"Code"})," ",o.jsx("button",{onClick:()=>t.chain().focus().toggleHeading({level:1}).run(),className:t.isActive("heading",{level:1})?"is-active editor-control-button":"editor-control-button",children:"H1"}),o.jsx("button",{onClick:()=>t.chain().focus().toggleHeading({level:2}).run(),className:t.isActive("heading",{level:2})?"is-active editor-control-button":"editor-control-button",children:"H2"}),o.jsx("button",{onClick:()=>t.chain().focus().toggleHeading({level:3}).run(),className:t.isActive("heading",{level:3})?"is-active editor-control-button":"editor-control-button",children:"H3"}),o.jsx("button",{onClick:()=>t.chain().focus().toggleHeading({level:4}).run(),className:t.isActive("heading",{level:4})?"is-active editor-control-button":"editor-control-button",children:"H4"})," ",o.jsx("button",{onClick:()=>t.chain().focus().toggleBulletList().run(),className:t.isActive("bulletList")?"is-active editor-control-button":"editor-control-button",children:"Bullet list"}),o.jsx("button",{onClick:()=>t.chain().focus().toggleOrderedList().run(),className:t.isActive("orderedList")?"is-active editor-control-button":"editor-control-button",children:"Ordered list"}),o.jsx("button",{onClick:()=>t.chain().focus().toggleCodeBlock().run(),className:t.isActive("codeBlock")?"is-active editor-control-button":"editor-control-button",children:"Code block"}),o.jsx("button",{onClick:()=>t.chain().focus().toggleBlockquote().run(),className:t.isActive("blockquote")?"is-active editor-control-button":"editor-control-button",children:"Blockquote"})," ",o.jsx("button",{onClick:()=>t.chain().focus().setTextAlign("left").run(),className:t.isActive({textAlign:"left"})?"is-active editor-control-button":"editor-control-button",children:"Left"}),o.jsx("button",{onClick:()=>t.chain().focus().setTextAlign("center").run(),className:t.isActive({textAlign:"center"})?"is-active editor-control-button":"editor-control-button",children:"Center"}),o.jsx("button",{onClick:()=>t.chain().focus().setTextAlign("right").run(),className:t.isActive({textAlign:"right"})?"is-active editor-control-button":"editor-control-button ",children:"Right"})," ",o.jsx("button",{onClick:i,className:t.isActive("link")?"is-active editor-control-button":"editor-control-button",children:"Set link"}),o.jsx("button",{onClick:()=>t.chain().focus().unsetLink().run(),disabled:!t.isActive("link"),className:"editor-control-button",children:"Unset link"}),o.jsxs("div",{className:"button-group",children:[o.jsx("button",{onClick:()=>t.chain().focus().insertTable({rows:3,cols:3,withHeaderRow:!0}).run(),className:"editor-control-button",children:"Insert table"}),o.jsx("button",{onClick:()=>t.chain().focus().addColumnBefore().run(),className:"editor-control-button",children:"Add column before"}),o.jsx("button",{onClick:()=>t.chain().focus().addColumnAfter().run(),className:"editor-control-button",children:"Add column after"}),o.jsx("button",{onClick:()=>t.chain().focus().deleteColumn().run(),className:"editor-control-button",children:"Delete column"}),o.jsx("button",{onClick:()=>t.chain().focus().addRowBefore().run(),className:"editor-control-button",children:"Add row before"}),o.jsx("button",{onClick:()=>t.chain().focus().addRowAfter().run(),className:"editor-control-button",children:"Add row after"}),o.jsx("button",{onClick:()=>t.chain().focus().deleteRow().run(),className:"editor-control-button",children:"Delete row"}),o.jsx("button",{onClick:()=>t.chain().focus().mergeOrSplit().run(),className:"editor-control-button",children:"Merge or split"})]})]})}),o.jsx(A,{editor:t,className:"editor editor-body"})]})};p(document.getElementById("root")).render(o.jsx(n.StrictMode,{children:o.jsx(U,{})}));
