import{D as o,P as l,T as a,B as r,I as u,S as d,C as h,U as g,H as b,a as k,O as f,L as m,b as v,c as x,d as C,e as p,j as t,r as n,u as j,E as A}from"./index-ZJ-zUfJw.js";import{H as N,T as w,G as B,a as H,b as L,c as T,d as y}from"./index-Cm-_3LWk.js";import{p as I}from"./parseContentToHtml-CPwPeoO0.js";const R=[o,l,a,r,u,d,h,g,b.configure({levels:[1,2,3,4,5,6]}),k,f,m,v.configure({openOnClick:!0,autolink:!0,defaultProtocol:"https"}),x,C,N,w.configure({types:["heading","paragraph"]}),B,H.configure({resizable:!0}),L,T,y],S=`
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
  `,U=()=>{const e=j({extensions:R,content:`${I()}${S}`});if(!e)return null;const s=n.useCallback(()=>{const c=e.getAttributes("link").href,i=window.prompt("URL",c);if(i!==null){if(i===""){e.chain().focus().extendMarkRange("link").unsetLink().run();return}e.chain().focus().extendMarkRange("link").setLink({href:i}).run()}},[e]);return t.jsxs("div",{className:"card",children:[t.jsx("div",{className:"control-group",children:t.jsxs("div",{className:"button-group",children:[t.jsx("button",{onClick:()=>e.chain().focus().toggleBold().run(),disabled:!e.can().chain().focus().toggleBold().run(),className:e.isActive("bold")?"is-active":"",children:"Bold"}),t.jsx("button",{onClick:()=>e.chain().focus().toggleItalic().run(),disabled:!e.can().chain().focus().toggleItalic().run(),className:e.isActive("italic")?"is-active":"",children:"Italic"}),t.jsx("button",{onClick:()=>e.chain().focus().toggleStrike().run(),disabled:!e.can().chain().focus().toggleStrike().run(),className:e.isActive("strike")?"is-active":"",children:"Strike"}),t.jsx("button",{onClick:()=>e.chain().focus().toggleUnderline().run(),disabled:!e.can().chain().focus().toggleUnderline().run(),className:e.isActive("underline")?"is-active":"",children:"Underline"}),t.jsx("button",{onClick:()=>e.chain().focus().toggleHighlight().run(),className:e.isActive("highlight")?"is-active":"",children:"Highlight"}),t.jsx("button",{onClick:()=>e.chain().focus().toggleCode().run(),disabled:!e.can().chain().focus().toggleCode().run(),className:e.isActive("code")?"is-active":"",children:"Code"})," ",t.jsx("button",{onClick:()=>e.chain().focus().toggleHeading({level:1}).run(),className:e.isActive("heading",{level:1})?"is-active":"",children:"H1"}),t.jsx("button",{onClick:()=>e.chain().focus().toggleHeading({level:2}).run(),className:e.isActive("heading",{level:2})?"is-active":"",children:"H2"}),t.jsx("button",{onClick:()=>e.chain().focus().toggleHeading({level:3}).run(),className:e.isActive("heading",{level:3})?"is-active":"",children:"H3"}),t.jsx("button",{onClick:()=>e.chain().focus().toggleHeading({level:4}).run(),className:e.isActive("heading",{level:4})?"is-active":"",children:"H4"})," ",t.jsx("button",{onClick:()=>e.chain().focus().toggleBulletList().run(),className:e.isActive("bulletList")?"is-active":"",children:"Bullet list"}),t.jsx("button",{onClick:()=>e.chain().focus().toggleOrderedList().run(),className:e.isActive("orderedList")?"is-active":"",children:"Ordered list"}),t.jsx("button",{onClick:()=>e.chain().focus().toggleCodeBlock().run(),className:e.isActive("codeBlock")?"is-active":"",children:"Code block"}),t.jsx("button",{onClick:()=>e.chain().focus().toggleBlockquote().run(),className:e.isActive("blockquote")?"is-active":"",children:"Blockquote"})," ",t.jsx("button",{onClick:()=>e.chain().focus().setTextAlign("left").run(),className:e.isActive({textAlign:"left"})?"is-active":"",children:"Left"}),t.jsx("button",{onClick:()=>e.chain().focus().setTextAlign("center").run(),className:e.isActive({textAlign:"center"})?"is-active":"",children:"Center"}),t.jsx("button",{onClick:()=>e.chain().focus().setTextAlign("right").run(),className:e.isActive({textAlign:"right"})?"is-active":"",children:"Right"})," ",t.jsx("button",{onClick:s,className:e.isActive("link")?"is-active":"",children:"Set link"}),t.jsx("button",{onClick:()=>e.chain().focus().unsetLink().run(),disabled:!e.isActive("link"),children:"Unset link"}),t.jsxs("div",{className:"button-group",children:[t.jsx("button",{onClick:()=>e.chain().focus().insertTable({rows:3,cols:3,withHeaderRow:!0}).run(),children:"Insert table"}),t.jsx("button",{onClick:()=>e.chain().focus().addColumnBefore().run(),children:"Add column before"}),t.jsx("button",{onClick:()=>e.chain().focus().addColumnAfter().run(),children:"Add column after"}),t.jsx("button",{onClick:()=>e.chain().focus().deleteColumn().run(),children:"Delete column"}),t.jsx("button",{onClick:()=>e.chain().focus().addRowBefore().run(),children:"Add row before"}),t.jsx("button",{onClick:()=>e.chain().focus().addRowAfter().run(),children:"Add row after"}),t.jsx("button",{onClick:()=>e.chain().focus().deleteRow().run(),children:"Delete row"}),t.jsx("button",{onClick:()=>e.chain().focus().mergeOrSplit().run(),children:"Merge or split"})]})]})}),t.jsx(A,{editor:e,className:"editor"})]})};p(document.getElementById("root")).render(t.jsx(n.StrictMode,{children:t.jsx(U,{})}));
