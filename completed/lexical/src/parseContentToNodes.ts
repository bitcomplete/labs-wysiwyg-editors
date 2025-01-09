import { $createParagraphNode, $createTextNode, $getRoot } from 'lexical'
import { $createListItemNode, $createListNode } from '@lexical/list'
import { END_OF_DEVELOPER_COMMENTS } from '../../../scripts/parseContentToHtml'

export function parseContentToNodes() {
    const editorContentElement = document.getElementById('editor-content-json')
    const jsonString = editorContentElement ? editorContentElement.innerText : ''

    const defaultNode = $createParagraphNode()
    defaultNode.append($createTextNode('This is editable content.'))
    const DEFAULT_CONTENT = [defaultNode]

    if (!jsonString) {
        return DEFAULT_CONTENT
    }

    // Parse the innerHTML as JSON
    let jsonObject
    try {
        jsonObject = JSON.parse(jsonString)
    } catch (error) {
        console.error('Failed to parse editor content to HTML:', error)
        return DEFAULT_CONTENT
    }
    const nodes = []

    // Title
    if (jsonObject.title) {
        const title = $createParagraphNode()
        title.append($createTextNode(jsonObject.title).toggleFormat('bold'))
        nodes.push(title)
    }

    // Overview
    if (jsonObject.overview) {
        const title = $createParagraphNode()
        title.append($createTextNode('Overview').toggleFormat('bold'))
        nodes.push(title)
        const paragraph = $createParagraphNode()
        paragraph.append($createTextNode(jsonObject.overview))
        nodes.push(paragraph)
    }

    // Advantages
    if (jsonObject.advantages && Array.isArray(jsonObject.advantages)) {
        const title = $createParagraphNode()
        title.append($createTextNode('Advantages').toggleFormat('bold'))
        nodes.push(title)
        const list = $createListNode('bullet')
        jsonObject.advantages.forEach((advantage) => {
            const listItem = $createListItemNode()
            listItem.append($createTextNode(advantage))
            list.append(listItem)
        })
        nodes.push(list)
    }

    // Drawbacks
    if (jsonObject.drawbacks && Array.isArray(jsonObject.drawbacks)) {
        const title = $createParagraphNode()
        title.append($createTextNode('Drawbacks').toggleFormat('bold'))
        nodes.push(title)
        const list = $createListNode('bullet')
        jsonObject.drawbacks.forEach((drawback) => {
            const listItem = $createListItemNode()
            listItem.append($createTextNode(drawback))
            list.append(listItem)
        })
        nodes.push(list)
    }

    // Conclusion
    if (jsonObject.conclusion) {
        const title = $createParagraphNode()
        title.append($createTextNode('Conclusion').toggleFormat('bold'))
        nodes.push(title)
        const paragraph = $createParagraphNode()
        paragraph.append($createTextNode(jsonObject.conclusion))
        nodes.push(paragraph)
    }

    const endOfDeveloperComments = $createParagraphNode()
    endOfDeveloperComments.append($createTextNode(END_OF_DEVELOPER_COMMENTS))
    nodes.push(endOfDeveloperComments)

    return nodes
}
