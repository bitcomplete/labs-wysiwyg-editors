import { END_OF_DEVELOPER_COMMENTS } from '../../../scripts/parseContentToHtml'

export const parseContentToDataList = () => {
    const editorContentElement = document.getElementById('editor-content-json')
    const jsonString = editorContentElement ? editorContentElement.innerText : ''

    const DEFAULT_CONTENT = [
        {
            type: 'paragraph',
            data: {
                text: 'This is editable content.',
            },
        },
    ]

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

    const blocks = []

    // Title
    if (jsonObject.title) {
        blocks.push({
            type: 'paragraph',
            data: {
                text: `<b>${jsonObject.title}</b>`,
            },
        })
    }

    // Overview
    if (jsonObject.overview) {
        blocks.push({
            type: 'paragraph',
            data: {
                text: `<b>Overview</b>`,
            },
        })
        blocks.push({
            type: 'paragraph',
            data: {
                text: jsonObject.overview,
            },
        })
    }

    // Advantages
    if (jsonObject.advantages && Array.isArray(jsonObject.advantages)) {
        blocks.push({
            type: 'paragraph',
            data: {
                text: `<b>Advantages</b>`,
            },
        })
        blocks.push({
            type: 'list',
            data: {
                style: 'unordered',
                items: jsonObject.advantages,
            },
        })
    }

    // Drawbacks
    if (jsonObject.drawbacks && Array.isArray(jsonObject.drawbacks)) {
        blocks.push({
            type: 'paragraph',
            data: {
                text: `<b>Drawbacks</b>`,
            },
        })
        blocks.push({
            type: 'list',
            data: {
                style: 'unordered',
                items: jsonObject.drawbacks,
            },
        })
    }

    // Conclusion
    if (jsonObject.conclusion) {
        blocks.push({
            type: 'paragraph',
            data: {
                text: `<b>Conclusion</b>`,
            },
        })
        blocks.push({
            type: 'paragraph',
            data: {
                text: jsonObject.conclusion,
            },
        })
    }

    return blocks
}
