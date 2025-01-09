// main.js or any entry file
import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import List from '@editorjs/list'
import Quote from '@editorjs/quote'
// import CodeTool from '@editorjs/code'
import Underline from '@editorjs/underline'
import InlineCode from '@editorjs/inline-code'
import Strikethrough from '@sotaproject/strikethrough'
import Marker from '@editorjs/marker'
import Table from '@editorjs/table'
import AlignmentTuneTool from 'editorjs-text-alignment-blocktune'
import SimpleImage from '@editorjs/simple-image'
import ColorPicker from 'editorjs-color-picker'
import CodeBox from '@bomdi/codebox'
import { parseContentToDataList } from '../../parseContentToDataList'

const editor = new EditorJS({
    holder: 'editorjs',
    autofocuse: true,
    tools: {
        header: Header,
        list: {
            class: List,
            inlineToolbar: true,
            config: {
                defaultStyle: 'unordered',
            },
        },
        quote: Quote,
        // already have code box tool with highlighting
        // code: CodeTool,
        underline: Underline,
        inlineCode: {
            class: InlineCode,
            shortcut: 'CMD+SHIFT+M',
        },
        strikethrough: Strikethrough,
        marker: {
            class: Marker,
            shortcut: 'CMD+SHIFT+H',
        },
        alignmentTune: {
            class: AlignmentTuneTool,
        },
        table: Table,
        image: SimpleImage,
        colorPicker: {
            class: ColorPicker,
        },
        codeBox: {
            class: CodeBox,
            config: {
                themeName: 'atom-one-dark',
                useDefaultTheme: 'light',
            },
        },
    },
    tunes: ['alignmentTune'],
    data: {
        blocks: parseContentToDataList(),
    },
})
