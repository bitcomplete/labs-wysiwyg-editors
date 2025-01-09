import { createPlateEditor, Plate, ParagraphPlugin } from '@udecode/plate-common/react'
import { BlockquotePlugin } from '@udecode/plate-block-quote/react'
import { CodeBlockPlugin } from '@udecode/plate-code-block/react'
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
import { CommentsPopover } from '@/components/plate-ui/comments-popover'
import { parseContentToHTML } from '../../../../../scripts/parseContentToHtml.ts'

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
        <Plate editor={plateEditor}>
            <FixedToolbar>
                <FixedToolbarButtons />
            </FixedToolbar>

            <Editor />

            <FloatingToolbar>
                <FloatingToolbarButtons />
            </FloatingToolbar>
            <CommentsPopover />
        </Plate>
    )
}

export default PlateEditor
