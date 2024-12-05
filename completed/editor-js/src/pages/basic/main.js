// main.js or any entry file
import EditorJS from '@editorjs/editorjs'
import List from '@editorjs/list'
import Underline from '@editorjs/underline'
import InlineCode from '@editorjs/inline-code'
import Strikethrough from '@sotaproject/strikethrough'

const editor = new EditorJS({
    holder: 'editorjs',
    autofocuse: true,
    tools: {
        list: {
            class: List,
            inlineToolbar: true,
            config: {
                defaultStyle: 'unordered',
            },
        },
        underline: Underline,
        inlineCode: {
            class: InlineCode,
            shortcut: 'CMD+SHIFT+M',
        },
        strikethrough: Strikethrough,
    },
})
