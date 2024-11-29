import {
    createEditor,
    $getSelection,
    $isRangeSelection,
    FORMAT_TEXT_COMMAND,
    COMMAND_PRIORITY_LOW,
} from 'lexical'
import {
    HeadingNode,
    QuoteNode,
    registerRichText,
    $createHeadingNode,
    $createQuoteNode,
} from '@lexical/rich-text'
import { $setBlocksType } from '@lexical/selection'
import { $findMatchingParent, mergeRegister } from '@lexical/utils'
import { createEmptyHistoryState, registerHistory } from '@lexical/history'
import { registerDragonSupport } from '@lexical/dragon'
import {
    INSERT_UNORDERED_LIST_COMMAND,
    INSERT_ORDERED_LIST_COMMAND,
    REMOVE_LIST_COMMAND,
    insertList,
    removeList,
    ListItemNode,
    ListNode,
} from '@lexical/list'
import { LinkNode, TOGGLE_LINK_COMMAND, $toggleLink, $isLinkNode } from '@lexical/link'
import { $createCodeNode, CodeNode } from '@lexical/code'

import prepopulatedRichText from './prepopulatedRichText.js'
import { $isAtNodeEnd } from '@lexical/selection'

function getSelectedNode(selection) {
    const anchor = selection.anchor
    const focus = selection.focus
    const anchorNode = selection.anchor.getNode()
    const focusNode = selection.focus.getNode()
    if (anchorNode === focusNode) {
        return anchorNode
    }
    const isBackward = selection.isBackward()
    if (isBackward) {
        return $isAtNodeEnd(focus) ? anchorNode : focusNode
    } else {
        return $isAtNodeEnd(anchor) ? anchorNode : focusNode
    }
}

// HTML References
const editorRef = document.getElementById('lexical-editor')
// for debugging
// const stateRef = document.getElementById("lexical-state");

// Initial configuration for the Lexical editor
const initialConfig = {
    namespace: 'Vanilla JS Demo',
    nodes: [HeadingNode, QuoteNode, ListNode, ListItemNode, LinkNode, CodeNode],
    onError: (error) => {
        throw error
    },
    theme: {
        quote: 'PlaygroundEditorTheme__quote',
        code: 'PlaygroundEditorTheme__code',
        text: {
            quote: 'PlaygroundEditorTheme__quote',
            code: 'PlaygroundEditorTheme__textCode',
            h1: 'PlaygroundEditorTheme__h1',
            h2: 'PlaygroundEditorTheme__h2',
            bold: 'PlaygroundEditorTheme__textBold',
            code: 'PlaygroundEditorTheme__textCode',
            italic: 'PlaygroundEditorTheme__textItalic',
            strikethrough: 'PlaygroundEditorTheme__textStrikethrough',
            subscript: 'PlaygroundEditorTheme__textSubscript',
            superscript: 'PlaygroundEditorTheme__textSuperscript',
            underline: 'PlaygroundEditorTheme__textUnderline',
            underlineStrikethrough: 'PlaygroundEditorTheme__textUnderlineStrikethrough',
        },
    },
}

// Initialize the Lexical editor
const editor = createEditor(initialConfig)
editor.setRootElement(editorRef)

// Register Plugins
mergeRegister(
    registerRichText(editor),
    registerDragonSupport(editor),
    editor.registerCommand(
        INSERT_UNORDERED_LIST_COMMAND,
        () => {
            insertList(editor, 'bullet')
            return true
        },
        COMMAND_PRIORITY_LOW,
    ),
    editor.registerCommand(
        INSERT_ORDERED_LIST_COMMAND,
        () => {
            insertList(editor, 'number')
            return true
        },
        COMMAND_PRIORITY_LOW,
    ),
    editor.registerCommand(
        REMOVE_LIST_COMMAND,
        () => {
            removeList(editor)
            return true
        },
        COMMAND_PRIORITY_LOW,
    ),
    editor.registerCommand(
        TOGGLE_LINK_COMMAND,
        (payload) => {
            $toggleLink(payload)
            return true
        },
        COMMAND_PRIORITY_LOW,
    ),
    registerHistory(editor, createEmptyHistoryState(), 300),
)

// Set up buttons functionality
const h1Button = document.getElementById('h1')
if (h1Button) {
    h1Button.onclick = () => {
        editor.update(() => {
            const selection = $getSelection()
            $setBlocksType(selection, () => $createHeadingNode('h1'))
        })
    }
}
const h2Button = document.getElementById('h2')
if (h2Button) {
    h2Button.onclick = () => {
        editor.update(() => {
            const selection = $getSelection()
            $setBlocksType(selection, () => $createHeadingNode('h2'))
        })
    }
}
const boldButton = document.getElementById('bold')
if (boldButton) {
    boldButton.onclick = () => {
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold')
    }
}
const italicButton = document.getElementById('italic')
if (italicButton) {
    italicButton.onclick = () => {
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic')
    }
}
const underlineButton = document.getElementById('underline')
if (underlineButton) {
    underlineButton.onclick = () => {
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline')
    }
}
const strikeButton = document.getElementById('strike')
if (strikeButton) {
    strikeButton.onclick = () => {
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'strikethrough')
    }
}
const inlineCodeButton = document.getElementById('inline-code')
if (inlineCodeButton) {
    inlineCodeButton.onclick = () => {
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'code')
    }
}
const bulletListButton = document.getElementById('bullet')
if (bulletListButton) {
    bulletListButton.onclick = () => {
        editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined)
    }
}
const orderedListButton = document.getElementById('ordered')
if (orderedListButton) {
    orderedListButton.onclick = () => {
        editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined)
    }
}
const linkButton = document.getElementById('link')
if (linkButton) {
    linkButton.onclick = () => {
        editor.update(() => {
            let selection = $getSelection()
            let currentUrl = 'https://'

            if ($isRangeSelection(selection)) {
                const node = getSelectedNode(selection)
                const linkParent = $findMatchingParent(node, $isLinkNode)

                if (linkParent) {
                    currentUrl = linkParent.getURL()
                } else if ($isLinkNode(node)) {
                    currentUrl = node.getURL()
                }
            }
            const url = prompt('Please enter url:', currentUrl)
            if (url == null || url == '') {
                editor.dispatchCommand(TOGGLE_LINK_COMMAND, null)
            } else {
                editor.dispatchCommand(TOGGLE_LINK_COMMAND, url)
            }
        })
    }
}
const quoteButton = document.getElementById('quote')
if (quoteButton) {
    quoteButton.onclick = () => {
        editor.update(() => {
            const selection = $getSelection()
            $setBlocksType(selection, () => $createQuoteNode())
        })
    }
}
const codeButton = document.getElementById('code')
if (codeButton) {
    codeButton.onclick = () => {
        editor.update(() => {
            let selection = $getSelection()

            if (selection !== null) {
                if (selection.isCollapsed()) {
                    $setBlocksType(selection, () => $createCodeNode())
                } else {
                    const textContent = selection.getTextContent()
                    const codeNode = $createCodeNode()
                    selection.insertNodes([codeNode])
                    selection = $getSelection()
                    if ($isRangeSelection(selection)) {
                        selection.insertRawText(textContent)
                    }
                }
            }
        })
    }
}

// Populate initial content in the editor
editor.update(prepopulatedRichText, { tag: 'history-merge' })

// Update textarea with editor state JSON on editor changes
editor.registerUpdateListener(({ editorState }) => {
    stateRef.value = JSON.stringify(editorState.toJSON(), null, 2)
})
