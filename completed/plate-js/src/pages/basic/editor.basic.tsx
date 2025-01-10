import { withProps } from '@udecode/cn'
import { createPlateEditor, ParagraphPlugin, Plate, PlateLeaf } from '@udecode/plate-common/react'
import { CodeBlockPlugin, CodeLinePlugin, CodeSyntaxPlugin } from '@udecode/plate-code-block/react'
import { HeadingPlugin } from '@udecode/plate-heading/react'
import { HorizontalRulePlugin } from '@udecode/plate-horizontal-rule/react'
import { LinkPlugin } from '@udecode/plate-link/react'
import {
    BoldPlugin,
    ItalicPlugin,
    UnderlinePlugin,
    StrikethroughPlugin,
    CodePlugin,
    SubscriptPlugin,
    SuperscriptPlugin,
} from '@udecode/plate-basic-marks/react'
import { IndentPlugin } from '@udecode/plate-indent/react'
import { IndentListPlugin } from '@udecode/plate-indent-list/react'
import { AutoformatPlugin } from '@udecode/plate-autoformat/react'
import { ExitBreakPlugin, SoftBreakPlugin } from '@udecode/plate-break/react'
import { NodeIdPlugin } from '@udecode/plate-node-id'
import { ResetNodePlugin } from '@udecode/plate-reset-node/react'
import { TrailingBlockPlugin } from '@udecode/plate-trailing-block'
import { DeletePlugin } from '@udecode/plate-select'
import { DocxPlugin } from '@udecode/plate-docx'
import { CsvPlugin } from '@udecode/plate-csv'
import { MarkdownPlugin } from '@udecode/plate-markdown'
import { LinkFloatingToolbar } from '@/components/plate-ui/link-floating-toolbar.tsx'
import { Editor } from '@/components/plate-ui/editor.tsx'
import { Variant, VariantPlugin } from '@/lib/variant-plugin.ts'
import { FixedToolbar } from '@/components/plate-ui/fixed-toolbar'
import { FixedToolbarButtons } from '@/components/plate-ui/fixed-toolbar-buttons'
import { FloatingToolbar } from '@/components/plate-ui/floating-toolbar'
import { FloatingToolbarButtons } from '@/components/plate-ui/floating-toolbar-buttons'
import { withPlaceholders } from '@/components/plate-ui/placeholder'
import { withDraggables } from '@/components/plate-ui/with-draggables'
import { parseContentToHTML } from '../../../../../scripts/parseContentToHtml'
import { ParagraphElement } from '@/components/plate-ui/paragraph-element'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import { CodeLineElement } from '@/components/plate-ui/code-line-element'
import { BlockquotePlugin } from '@udecode/plate-block-quote/react'
import { CodeSyntaxLeaf } from '@/components/plate-ui/code-syntax-leaf'
import { CodeLeaf } from '@/components/plate-ui/code-leaf'

const plateEditor = createPlateEditor({
    plugins: [
        VariantPlugin(Variant.BASIC),
        ParagraphPlugin,
        BlockquotePlugin,
        CodeBlockPlugin,
        HeadingPlugin,
        HorizontalRulePlugin,
        LinkPlugin.configure({
            render: { afterEditable: () => <LinkFloatingToolbar /> },
        }),
        BoldPlugin,
        ItalicPlugin,
        UnderlinePlugin,
        StrikethroughPlugin,
        CodePlugin,
        SubscriptPlugin,
        SuperscriptPlugin,
        IndentPlugin.configure({
            inject: { targetPlugins: ['p', 'h1', 'h2', 'h3'] },
        }),
        IndentListPlugin.configure({
            inject: { targetPlugins: ['p', 'h1', 'h2', 'h3'] },
        }),
        AutoformatPlugin.configure({
            options: {
                enableUndoOnDelete: true,
                rules: [
                    // Usage: https://platejs.org/docs/autoformat
                ],
            },
        }),
        ExitBreakPlugin.configure({
            options: {
                rules: [
                    {
                        hotkey: 'mod+enter',
                    },
                    {
                        before: true,
                        hotkey: 'mod+shift+enter',
                    },
                    {
                        hotkey: 'enter',
                        level: 1,
                        query: {
                            allow: ['h1', 'h2', 'h3'],
                            end: true,
                            start: true,
                        },
                        relative: true,
                    },
                ],
            },
        }),
        NodeIdPlugin,
        ResetNodePlugin.configure({
            options: {
                rules: [
                    // Usage: https://platejs.org/docs/reset-node
                ],
            },
        }),
        SoftBreakPlugin.configure({
            options: {
                rules: [
                    { hotkey: 'shift+enter' },
                    {
                        hotkey: 'enter',
                        query: {
                            allow: ['code_block', 'blockquote', 'td', 'th'],
                        },
                    },
                ],
            },
        }),
        TrailingBlockPlugin.configure({
            options: { type: 'p' },
        }),
        DeletePlugin,
        DocxPlugin,
        CsvPlugin,
        MarkdownPlugin,
    ],
    override: {
        components: withDraggables(
            withPlaceholders({
                [ParagraphPlugin.key]: ParagraphElement,
                [BoldPlugin.key]: withProps(PlateLeaf, { as: 'strong' }),
                [CodeLinePlugin.key]: CodeLineElement,
                [CodeSyntaxPlugin.key]: CodeSyntaxLeaf,
                [ItalicPlugin.key]: withProps(PlateLeaf, { as: 'em' }),
                [StrikethroughPlugin.key]: withProps(PlateLeaf, { as: 's' }),
                [UnderlinePlugin.key]: withProps(PlateLeaf, { as: 'u' }),
                [CodePlugin.key]: CodeLeaf,
            }),
        ),
    },
    value: [
        {
            id: '1',
            type: 'p',
            children: [{ text: 'Hello, World!' }],
        },
    ],
})
plateEditor.children = [
    ...(plateEditor.api.html.deserialize({
        element: parseContentToHTML(),
    }) as any),
    ...plateEditor.children,
]

function PlateEditor() {
    return (
        <DndProvider backend={HTML5Backend}>
            <Plate editor={plateEditor}>
                <FixedToolbar>
                    <FixedToolbarButtons />
                </FixedToolbar>

                <Editor />

                <FloatingToolbar>
                    <FloatingToolbarButtons />
                </FloatingToolbar>
            </Plate>
        </DndProvider>
    )
}

export default PlateEditor
