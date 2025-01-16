import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../index.css'
import { useCallback } from 'react'
import { EditorContent, useEditor } from '@tiptap/react'
import Heading from '@tiptap/extension-heading'
import Bold from '@tiptap/extension-bold'
import Italic from '@tiptap/extension-italic'
import Code from '@tiptap/extension-code'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Underline from '@tiptap/extension-underline'
import Strike from '@tiptap/extension-strike'
import BulletList from '@tiptap/extension-bullet-list'
import OrderedList from '@tiptap/extension-ordered-list'
import ListItem from '@tiptap/extension-list-item'
import Link from '@tiptap/extension-link'
import Blockquote from '@tiptap/extension-blockquote'
import CodeBlock from '@tiptap/extension-code-block'
import Highlight from '@tiptap/extension-highlight'
import TextAlign from '@tiptap/extension-text-align'
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import Gapcursor from '@tiptap/extension-gapcursor'
import TextStyle from '@tiptap/extension-text-style'
import { Color } from '@tiptap/extension-color'
import Image from '@tiptap/extension-image'
import Youtube from '@tiptap/extension-youtube'
import Mention from '@tiptap/extension-mention'
import suggestion from './suggestion.ts'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import css from 'highlight.js/lib/languages/css'
import js from 'highlight.js/lib/languages/javascript'
import ts from 'highlight.js/lib/languages/typescript'
import html from 'highlight.js/lib/languages/xml'
// load all languages with "all" or common languages with "common"
import { all, createLowlight } from 'lowlight'
import { parseContentToHTML } from '../../../../../scripts/parseContentToHtml.ts'

// create a lowlight instance with all languages loaded
const lowlight = createLowlight(all)

// This is only an example, all supported languages are already loaded above
// but you can also register only specific languages to reduce bundle-size
lowlight.register('html', html)
lowlight.register('css', css)
lowlight.register('js', js)
lowlight.register('ts', ts)

const extensions = [
    Document,
    Paragraph,
    Text,
    Bold,
    Italic,
    Strike,
    Code,
    Underline,
    Heading.configure({
        levels: [1, 2, 3, 4, 5, 6],
    }),
    BulletList,
    OrderedList,
    ListItem,
    Link.configure({
        openOnClick: true,
        autolink: true,
        defaultProtocol: 'https',
    }),
    Blockquote,
    CodeBlock,
    Highlight,
    TextAlign.configure({
        types: ['heading', 'paragraph'],
    }),
    Gapcursor,
    Table.configure({
        resizable: true,
    }),
    TableRow,
    TableHeader,
    TableCell,
    TextStyle,
    Color,
    Image,
    Youtube.configure({
        controls: false,
        nocookie: true,
    }),
    Mention.configure({
        HTMLAttributes: {
            class: 'mention',
        },
        suggestion: suggestion as any,
    }),
    CodeBlockLowlight.configure({
        lowlight,
    }),
]

const content = `
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
    Isn’t that great? And <span style="color: #958DF1">all of that </span> is <mark>editable</mark>. But wait, there’s more. Let’s try a code block:
  </p>
  <pre><code class="language-css">body {
    display: none;
  }</code></pre>
  <p>
    I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
  </p>
  <blockquote>
    Wow, that’s amazing. Good work, boy! 👏 <span data-type="mention" data-id="Jennifer Grey">
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
  <img src="https://placehold.co/800x400" />
  <div data-youtube-video>
    <iframe src="https://www.youtube.com/watch?v=3lTUAWOgoHs"></iframe>
  </div>
`

const App = () => {
    const editor = useEditor({
        extensions: extensions,
        content: `${parseContentToHTML()}${content}`,
    })
    if (!editor) {
        return null
    }

    const setLink = useCallback(() => {
        const previousUrl = editor.getAttributes('link').href
        const url = window.prompt('URL', previousUrl)

        // cancelled
        if (url === null) {
            return
        }

        // empty
        if (url === '') {
            editor.chain().focus().extendMarkRange('link').unsetLink().run()

            return
        }

        // update link
        editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
    }, [editor])

    const addImage = useCallback(() => {
        const url = window.prompt('URL')

        if (url) {
            editor.chain().focus().setImage({ src: url }).run()
        }
    }, [editor])

    const addYoutubeVideo = () => {
        const url = prompt('Enter YouTube URL')

        if (url) {
            editor.commands.setYoutubeVideo({
                src: url,
                width: 640,
                height: 480,
            })
        }
    }

    return (
        <div className="card">
            <div className="control-group">
                <div className="button-group">
                    <button
                        onClick={() => editor.chain().focus().toggleBold().run()}
                        disabled={!editor.can().chain().focus().toggleBold().run()}
                        className={editor.isActive('bold') ? 'is-active editor-control-button' : 'editor-control-button'}
                    >
                        Bold
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleItalic().run()}
                        disabled={!editor.can().chain().focus().toggleItalic().run()}
                        className={editor.isActive('italic') ? 'is-active editor-control-button' : 'editor-control-button'}
                    >
                        Italic
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleStrike().run()}
                        disabled={!editor.can().chain().focus().toggleStrike().run()}
                        className={editor.isActive('strike') ? 'is-active editor-control-button' : 'editor-control-button'}
                    >
                        Strike
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleUnderline().run()}
                        disabled={!editor.can().chain().focus().toggleUnderline().run()}
                        className={editor.isActive('underline') ? 'is-active editor-control-button' : 'editor-control-button    '}
                    >
                        Underline
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleHighlight().run()}
                        className={editor.isActive('highlight') ? 'is-active editor-control-button' : 'editor-control-button'}
                    >
                        Highlight
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleCode().run()}
                        disabled={!editor.can().chain().focus().toggleCode().run()}
                        className={editor.isActive('code') ? 'is-active editor-control-button' : 'editor-control-button'}
                    >
                        Code
                    </button>{' '}
                    <button
                        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                        className={editor.isActive('heading', { level: 1 }) ? 'is-active editor-control-button' : 'editor-control-button'}
                    >
                        H1
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                        className={editor.isActive('heading', { level: 2 }) ? 'is-active editor-control-button' : 'editor-control-button'}
                    >
                        H2
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                        className={editor.isActive('heading', { level: 3 }) ? 'is-active editor-control-button' : 'editor-control-button'}
                    >
                        H3
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
                        className={editor.isActive('heading', { level: 4 }) ? 'is-active editor-control-button' : 'editor-control-button'}
                    >
                        H4
                    </button>{' '}
                    <input
                        type="color"
                        onInput={(event) =>
                            editor
                                .chain()
                                .focus()
                                .setColor((event.target as HTMLInputElement).value)
                                .run()
                        }
                        value={editor.getAttributes('textStyle').color}
                        data-testid="setColor"
                        className='editor-control-button'
                    />{' '}
                    <button
                        onClick={() => editor.chain().focus().toggleBulletList().run()}
                        className={editor.isActive('bulletList') ? 'is-active editor-control-button' : 'editor-control-button'}
                    >
                        Bullet list
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleOrderedList().run()}
                        className={editor.isActive('orderedList') ? 'is-active editor-control-button' : 'editor-control-button'}
                    >
                        Ordered list
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                        className={editor.isActive('codeBlock') ? 'is-active editor-control-button' : 'editor-control-button    '}
                    >
                        Code block
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleBlockquote().run()}
                        className={editor.isActive('blockquote') ? 'is-active editor-control-button' : 'editor-control-button'}
                    >
                        Blockquote
                    </button>{' '}
                    <button
                        onClick={() => editor.chain().focus().setTextAlign('left').run()}
                        className={editor.isActive({ textAlign: 'left' }) ? 'is-active editor-control-button' : 'editor-control-button'}
                    >
                        Left
                    </button>
                    <button
                        onClick={() => editor.chain().focus().setTextAlign('center').run()}
                        className={editor.isActive({ textAlign: 'center' }) ? 'is-active editor-control-button' : 'editor-control-button'}
                    >
                        Center
                    </button>
                    <button
                        onClick={() => editor.chain().focus().setTextAlign('right').run()}
                        className={editor.isActive({ textAlign: 'right' }) ? 'is-active editor-control-button' : 'editor-control-button'}
                    >
                        Right
                    </button>{' '}
                    <button onClick={addImage} className='editor-control-button'>Set image</button>
                    <button id="add" onClick={addYoutubeVideo} className='editor-control-button'>
                        Add YouTube video
                    </button>
                    <button
                        onClick={setLink}
                        className={editor.isActive('link') ? 'is-active editor-control-button' : 'editor-control-button'}
                    >
                        Set link
                    </button>
                    <button
                        onClick={() => editor.chain().focus().unsetLink().run()}
                        disabled={!editor.isActive('link')}
                        className='editor-control-button'
                    >
                        Unset link
                    </button>
                    <div className="button-group">
                        <button
                            onClick={() =>
                                editor
                                    .chain()
                                    .focus()
                                    .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
                                    .run()
                            }
                            className='editor-control-button'
                        >
                            Insert table
                        </button>
                        <button onClick={() => editor.chain().focus().addColumnBefore().run()} className='editor-control-button'>
                            Add column before
                        </button>
                        <button onClick={() => editor.chain().focus().addColumnAfter().run()} className='editor-control-button'>
                            Add column after
                        </button>
                        <button onClick={() => editor.chain().focus().deleteColumn().run()} className='editor-control-button'>
                            Delete column
                        </button>
                        <button onClick={() => editor.chain().focus().addRowBefore().run()} className='editor-control-button'>
                            Add row before
                        </button>
                        <button onClick={() => editor.chain().focus().addRowAfter().run()} className='editor-control-button'>
                            Add row after
                        </button>
                        <button onClick={() => editor.chain().focus().deleteRow().run()} className='editor-control-button'>
                            Delete row
                        </button>
                        <button onClick={() => editor.chain().focus().mergeOrSplit().run()} className='editor-control-button'>
                            Merge or split
                        </button>
                    </div>
                </div>
            </div>
            <EditorContent editor={editor} className="editor editor-body" />
        </div>
    )
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
