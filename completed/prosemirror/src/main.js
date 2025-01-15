import './style.css'
import { EditorState } from 'prosemirror-state'
import { EditorView } from 'prosemirror-view'
import { Schema, DOMParser as ProsemirrorDOMParser } from 'prosemirror-model'
import { schema } from 'prosemirror-schema-basic'
import { addListNodes } from 'prosemirror-schema-list'
import { exampleSetup } from 'prosemirror-example-setup'
import { parseContentToHTML } from '../../../scripts/parseContentToHtml'

// Mix the nodes from prosemirror-schema-list into the basic schema to
// create a schema with list support.
const mySchema = new Schema({
    nodes: addListNodes(schema.spec.nodes, 'paragraph block*', 'block'),
    marks: schema.spec.marks,
})
const contentNode = document.querySelector('#content')
const htmlString = parseContentToHTML(false)
const parser = new DOMParser()
const addedContentNode = parser.parseFromString(htmlString, 'text/html').body
const container = document.createElement('div')
container.appendChild(addedContentNode)
container.appendChild(contentNode)

window.view = new EditorView(document.querySelector('#editor'), {
    state: EditorState.create({
        doc: ProsemirrorDOMParser.fromSchema(mySchema).parse(container),
        plugins: exampleSetup({ schema: mySchema }),
    }),
})
