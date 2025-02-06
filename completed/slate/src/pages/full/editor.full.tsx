import React, { useCallback, useMemo } from 'react'
import isHotkey from 'is-hotkey'
import isUrl from 'is-url'
import { Editable, withReact, useSlate, Slate, useSelected } from 'slate-react'
import { Editor, Transforms, createEditor, Descendant, Element as SlateElement, Range } from 'slate'
import { withHistory } from 'slate-history'

import { Button, Icon, Toolbar } from '../../components'
import { parseContentToValueList } from '../../parseContentToValueList'
import { css } from '@emotion/css'
import { LinkElement } from '../../vite-env'

const HOTKEYS = {
    'mod+b': 'bold',
    'mod+i': 'italic',
    'mod+u': 'underline',
    'mod+`': 'code',
}

const LIST_TYPES = ['numbered-list', 'bulleted-list']
const TEXT_ALIGN_TYPES = ['left', 'center', 'right', 'justify']

const RichTextExample = () => {
    const renderElement = useCallback((props) => <Element {...props} />, [])
    const renderLeaf = useCallback((props) => <Leaf {...props} />, [])
    const editor = useMemo(() => withInlines(withHistory(withReact(createEditor()))), [])

    return (
        <Slate editor={editor} initialValue={[...parseContentToValueList(), ...initialValue]}>
            <Toolbar className="toolbar">
                <MarkButton format="bold" icon="format_bold" />
                <MarkButton format="italic" icon="format_italic" />
                <MarkButton format="underline" icon="format_underlined" />
                <MarkButton format="code" icon="code" />
                <LinkButton action="link" />
                <LinkButton action="link_off" />
                <BlockButton format="heading-one" icon="looks_one" />
                <BlockButton format="heading-two" icon="looks_two" />
                <BlockButton format="block-quote" icon="format_quote" />
                <BlockButton format="numbered-list" icon="format_list_numbered" />
                <BlockButton format="bulleted-list" icon="format_list_bulleted" />
                <BlockButton format="left" icon="format_align_left" />
                <BlockButton format="center" icon="format_align_center" />
                <BlockButton format="right" icon="format_align_right" />
                <BlockButton format="justify" icon="format_align_justify" />
            </Toolbar>
            <Editable
                renderElement={renderElement}
                renderLeaf={renderLeaf}
                placeholder="Enter some rich text…"
                spellCheck
                disableDefaultStyles
                className="editor-textbox"
                onKeyDown={(event) => {
                    for (const hotkey in HOTKEYS) {
                        if (isHotkey(hotkey, event as any)) {
                            event.preventDefault()
                            const mark = HOTKEYS[hotkey]
                            toggleMark(editor, mark)
                        }
                    }
                }}
            />
        </Slate>
    )
}

const withInlines = (editor) => {
    const { insertData, insertText, isInline, isElementReadOnly, isSelectable } = editor

    editor.isInline = (element) =>
        ['link', 'button', 'badge'].includes(element.type) || isInline(element)

    editor.isElementReadOnly = (element) => element.type === 'badge' || isElementReadOnly(element)

    editor.isSelectable = (element) => element.type !== 'badge' && isSelectable(element)

    editor.insertText = (text) => {
        if (text && isUrl(text)) {
            wrapLink(editor, text)
        } else {
            insertText(text)
        }
    }

    editor.insertData = (data) => {
        const text = data.getData('text/plain')

        if (text && isUrl(text)) {
            wrapLink(editor, text)
        } else {
            insertData(data)
        }
    }

    return editor
}

const toggleBlock = (editor, format) => {
    const isActive = isBlockActive(
        editor,
        format,
        TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type',
    )
    const isList = LIST_TYPES.includes(format)

    Transforms.unwrapNodes(editor, {
        match: (n) =>
            !Editor.isEditor(n) &&
            SlateElement.isElement(n) &&
            LIST_TYPES.includes(n.type) &&
            !TEXT_ALIGN_TYPES.includes(format),
        split: true,
    })
    let newProperties: Partial<SlateElement>
    if (TEXT_ALIGN_TYPES.includes(format)) {
        newProperties = {
            align: isActive ? undefined : format,
        }
    } else {
        newProperties = {
            type: isActive ? 'paragraph' : isList ? 'list-item' : format,
        }
    }
    Transforms.setNodes<SlateElement>(editor, newProperties)

    if (!isActive && isList) {
        const block = { type: format, children: [] }
        Transforms.wrapNodes(editor, block)
    }
}

const toggleMark = (editor, format) => {
    const isActive = isMarkActive(editor, format)

    if (isActive) {
        Editor.removeMark(editor, format)
    } else {
        Editor.addMark(editor, format, true)
    }
}

const wrapLink = (editor, url: string) => {
    if (isLinkActive(editor)) {
        unwrapLink(editor)
    }

    const { selection } = editor
    const isCollapsed = selection && Range.isCollapsed(selection)
    const link: LinkElement = {
        type: 'link',
        url,
        children: isCollapsed ? [{ text: url }] : [],
    }

    if (isCollapsed) {
        Transforms.insertNodes(editor, link)
    } else {
        Transforms.wrapNodes(editor, link, { split: true })
        Transforms.collapse(editor, { edge: 'end' })
    }
}

const unwrapLink = (editor) => {
    Transforms.unwrapNodes(editor, {
        match: (n) => !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === 'link',
    })
}

const insertLink = (editor, url) => {
    if (editor.selection) {
        wrapLink(editor, url)
    }
}

const isBlockActive = (editor, format, blockType = 'type') => {
    const { selection } = editor
    if (!selection) return false

    const [match] = Array.from(
        Editor.nodes(editor, {
            at: Editor.unhangRange(editor, selection),
            match: (n) =>
                !Editor.isEditor(n) && SlateElement.isElement(n) && n[blockType] === format,
        }),
    )

    return !!match
}

const isMarkActive = (editor, format) => {
    const marks = Editor.marks(editor)
    return marks ? marks[format] === true : false
}

const isLinkActive = (editor) => {
    const [link] = Editor.nodes(editor, {
        match: (n) => !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === 'link',
    })
    return !!link
}

const Element = ({ attributes, children, element }) => {
    const style = { textAlign: element.align }
    switch (element.type) {
        case 'block-quote':
            return (
                <blockquote style={style} {...attributes}>
                    {children}
                </blockquote>
            )
        case 'bulleted-list':
            return (
                <ul style={style} {...attributes}>
                    {children}
                </ul>
            )
        case 'heading-one':
            return (
                <h1 style={style} {...attributes}>
                    {children}
                </h1>
            )
        case 'heading-two':
            return (
                <h2 style={style} {...attributes}>
                    {children}
                </h2>
            )
        case 'list-item':
            return (
                <li style={style} {...attributes}>
                    {children}
                </li>
            )
        case 'numbered-list':
            return (
                <ol style={style} {...attributes}>
                    {children}
                </ol>
            )
        case 'link':
            return (
                <LinkComponent attributes={attributes} element={element}>
                    {children}
                </LinkComponent>
            )
        default:
            return (
                <p style={style} {...attributes}>
                    {children}
                </p>
            )
    }
}

const Leaf = ({ attributes, children, leaf }) => {
    if (leaf.bold) {
        children = <strong>{children}</strong>
    }

    if (leaf.code) {
        children = <code>{children}</code>
    }

    if (leaf.italic) {
        children = <em>{children}</em>
    }

    if (leaf.underline) {
        children = <u>{children}</u>
    }

    return <span {...attributes}>{children}</span>
}

const BlockButton = ({ format, icon }) => {
    const editor = useSlate()
    return (
        <Button
            active={isBlockActive(
                editor,
                format,
                TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type',
            )}
            onMouseDown={(event) => {
                event.preventDefault()
                toggleBlock(editor, format)
            }}
        >
            <Icon>{icon}</Icon>
        </Button>
    )
}

const MarkButton = ({ format, icon }) => {
    const editor = useSlate()
    return (
        <Button
            active={isMarkActive(editor, format)}
            onMouseDown={(event) => {
                event.preventDefault()
                toggleMark(editor, format)
            }}
        >
            <Icon>{icon}</Icon>
        </Button>
    )
}

const LinkButton = ({ action }) => {
    const editor = useSlate()
    return (
        <Button
            active={isLinkActive(editor)}
            onMouseDown={(event) => {
                event.preventDefault()
                if (action === 'link_off' && isLinkActive(editor)) {
                    unwrapLink(editor)
                } else if (action === 'link') {
                    const url = window.prompt('Enter the URL of the link:')
                    if (!url) return
                    insertLink(editor, url)
                }
            }}
        >
            <Icon>{action}</Icon>
        </Button>
    )
}

const allowedSchemes = ['http:', 'https:', 'mailto:', 'tel:']

const LinkComponent = ({ attributes, children, element }) => {
    const selected = useSelected()

    const safeUrl = useMemo(() => {
        let parsedUrl: URL = null
        try {
            parsedUrl = new URL(element.url)
            // eslint-disable-next-line no-empty
        } catch {}
        if (parsedUrl && allowedSchemes.includes(parsedUrl.protocol)) {
            return parsedUrl.href
        }
        return 'about:blank'
    }, [element.url])

    return (
        <a
            {...attributes}
            href={safeUrl}
            className={
                selected
                    ? css`
                          box-shadow: 0 0 0 3px #ddd;
                      `
                    : ''
            }
        >
            <InlineChromiumBugfix />
            {children}
            <InlineChromiumBugfix />
        </a>
    )
}

// Put this at the start and end of an inline component to work around this Chromium bug:
// https://bugs.chromium.org/p/chromium/issues/detail?id=1249405
const InlineChromiumBugfix = () => (
    <span
        contentEditable={false}
        className={css`
            font-size: 0;
        `}
    >
        {String.fromCodePoint(160) /* Non-breaking space */}
    </span>
)

const initialValue: Descendant[] = [
    {
        type: 'paragraph',
        children: [
            { text: 'This is editable ' },
            { text: 'rich', bold: true },
            { text: ' text, ' },
            { text: 'much', italic: true },
            { text: ' better than a ' },
            { text: '<textarea>', code: true },
            { text: '!' },
        ],
    },
    {
        type: 'paragraph',
        children: [
            {
                text: "Since it's rich text, you can do things like turn a selection of text ",
            },
            { text: 'bold', bold: true },
            {
                text: ', or add a semantically rendered block quote in the middle of the page, like this:',
            },
        ],
    },
    {
        type: 'block-quote',
        children: [{ text: 'A wise quote.' }],
    },
]

export default RichTextExample
