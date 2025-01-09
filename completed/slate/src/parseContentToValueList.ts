import { Descendant } from 'slate'
import { END_OF_DEVELOPER_COMMENTS } from '../../../scripts/parseContentToHtml'

export const parseContentToValueList = () => {
    const editorContentElement = document.getElementById('editor-content-json')
    const jsonString = editorContentElement ? editorContentElement.innerText : ''

    const DEFAULT_CONTENT = [
        {
            type: 'paragraph',
            children: [
                {
                    text: 'This is editable content.',
                },
            ],
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
            children: [
                {
                    text: jsonObject.title,
                    bold: true,
                },
            ],
        })
    }

    // Overview
    if (jsonObject.overview) {
        blocks.push({
            type: 'paragraph',
            children: [
                {
                    text: 'Overview',
                    bold: true,
                },
            ],
        })
        blocks.push({
            type: 'paragraph',
            children: [
                {
                    text: jsonObject.overview,
                },
            ],
        })
    }

    // Advantages
    if (jsonObject.advantages && Array.isArray(jsonObject.advantages)) {
        blocks.push({
            type: 'paragraph',
            children: [
                {
                    text: 'Advantages',
                    bold: true,
                },
            ],
        })
        blocks.push({
            type: 'bulleted-list',
            children: jsonObject.advantages.map((advantage: string) => ({
                type: 'list-item',
                children: [
                    {
                        text: advantage,
                    },
                ],
            })),
        })
    }

    // Drawbacks
    if (jsonObject.drawbacks && Array.isArray(jsonObject.drawbacks)) {
        blocks.push({
            type: 'paragraph',
            children: [
                {
                    text: 'Drawbacks',
                    bold: true,
                },
            ],
        })
        blocks.push({
            type: 'bulleted-list',
            children: jsonObject.drawbacks.map((drawback: string) => ({
                type: 'list-item',
                children: [
                    {
                        text: drawback,
                    },
                ],
            })),
        })
    }

    // Conclusion
    if (jsonObject.conclusion) {
        blocks.push({
            type: 'paragraph',
            children: [
                {
                    text: 'Conclusion',
                    bold: true,
                },
            ],
        })
        blocks.push({
            type: 'paragraph',
            children: [
                {
                    text: jsonObject.conclusion,
                },
            ],
        })
    }

    blocks.push({
        type: 'paragraph',
        children: [
            {
                text: END_OF_DEVELOPER_COMMENTS,
            },
        ],
    })

    return blocks
}
