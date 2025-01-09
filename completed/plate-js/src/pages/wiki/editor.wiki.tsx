import { withProps } from '@udecode/cn'
import { createPlateEditor, ParagraphPlugin, Plate, PlateLeaf } from '@udecode/plate-common/react'
import { BlockquotePlugin } from '@udecode/plate-block-quote/react'
import { CodeBlockPlugin, CodeLinePlugin, CodeSyntaxPlugin } from '@udecode/plate-code-block/react'
import { HeadingPlugin } from '@udecode/plate-heading/react'
import { HorizontalRulePlugin } from '@udecode/plate-horizontal-rule/react'
import { LinkPlugin } from '@udecode/plate-link/react'
import { MentionInputPlugin, MentionPlugin } from '@udecode/plate-mention/react'
import { TodoListPlugin } from '@udecode/plate-list/react'
import { ColumnItemPlugin, ColumnPlugin } from '@udecode/plate-layout/react'
import {
    TableCellHeaderPlugin,
    TableCellPlugin,
    TablePlugin,
    TableRowPlugin,
} from '@udecode/plate-table/react'
import { DatePlugin } from '@udecode/plate-date/react'
import {
    BoldPlugin,
    CodePlugin,
    ItalicPlugin,
    StrikethroughPlugin,
    SubscriptPlugin,
    SuperscriptPlugin,
    UnderlinePlugin,
} from '@udecode/plate-basic-marks/react'
import { HighlightPlugin } from '@udecode/plate-highlight/react'
import { AlignPlugin } from '@udecode/plate-alignment/react'
import { IndentPlugin } from '@udecode/plate-indent/react'
import { IndentListPlugin } from '@udecode/plate-indent-list/react'
import { AutoformatPlugin } from '@udecode/plate-autoformat/react'
import { EmojiPlugin } from '@udecode/plate-emoji/react'
import { ExitBreakPlugin, SoftBreakPlugin } from '@udecode/plate-break/react'
import { NodeIdPlugin } from '@udecode/plate-node-id'
import { ResetNodePlugin } from '@udecode/plate-reset-node/react'
import { DeletePlugin } from '@udecode/plate-select'
import { DocxPlugin } from '@udecode/plate-docx'
import { CsvPlugin } from '@udecode/plate-csv'
import { MarkdownPlugin } from '@udecode/plate-markdown'
import { JuicePlugin } from '@udecode/plate-juice'
import { HEADING_KEYS } from '@udecode/plate-heading'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { BlockquoteElement } from '@/components/plate-ui/blockquote-element'
import { CodeBlockElement } from '@/components/plate-ui/code-block-element'
import { CodeLineElement } from '@/components/plate-ui/code-line-element'
import { CodeSyntaxLeaf } from '@/components/plate-ui/code-syntax-leaf'
import { HrElement } from '@/components/plate-ui/hr-element'
import { LinkElement } from '@/components/plate-ui/link-element'
import { LinkFloatingToolbar } from '@/components/plate-ui/link-floating-toolbar'
import { ColumnGroupElement } from '@/components/plate-ui/column-group-element'
import { ColumnElement } from '@/components/plate-ui/column-element'
import { HeadingElement } from '@/components/plate-ui/heading-element'
import { MentionElement } from '@/components/plate-ui/mention-element'
import { MentionInputElement } from '@/components/plate-ui/mention-input-element'
import { ParagraphElement } from '@/components/plate-ui/paragraph-element'
import { TableElement } from '@/components/plate-ui/table-element'
import { TableRowElement } from '@/components/plate-ui/table-row-element'
import { TableCellElement, TableCellHeaderElement } from '@/components/plate-ui/table-cell-element'
import { TodoListElement } from '@/components/plate-ui/todo-list-element'
import { DateElement } from '@/components/plate-ui/date-element'
import { CodeLeaf } from '@/components/plate-ui/code-leaf'
import { HighlightLeaf } from '@/components/plate-ui/highlight-leaf'
import { Editor } from '@/components/plate-ui/editor'
import { FixedToolbar } from '@/components/plate-ui/fixed-toolbar'
import { FixedToolbarButtons } from '@/components/plate-ui/fixed-toolbar-buttons'
import { FloatingToolbar } from '@/components/plate-ui/floating-toolbar'
import { FloatingToolbarButtons } from '@/components/plate-ui/floating-toolbar-buttons'
import { withPlaceholders } from '@/components/plate-ui/placeholder'
import { withDraggables } from '@/components/plate-ui/with-draggables'
import { Variant, VariantPlugin } from '@/lib/variant-plugin.ts'
import { parseContentToHTML } from '../../../../../scripts/parseContentToHtml'

const plateEditor = createPlateEditor({
    plugins: [
        VariantPlugin(Variant.WIKI),
        ParagraphPlugin,
        BlockquotePlugin,
        CodeBlockPlugin,
        HeadingPlugin,
        HorizontalRulePlugin,
        LinkPlugin.configure({
            render: { afterEditable: () => <LinkFloatingToolbar /> },
        }),
        MentionPlugin,
        TodoListPlugin,
        ColumnPlugin,
        TablePlugin,
        DatePlugin,
        BoldPlugin,
        ItalicPlugin,
        UnderlinePlugin,
        StrikethroughPlugin,
        CodePlugin,
        SubscriptPlugin,
        SuperscriptPlugin,
        HighlightPlugin,
        AlignPlugin.configure({
            inject: { targetPlugins: ['p', 'h1', 'h2', 'h3'] },
        }),
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
        EmojiPlugin,
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
        DeletePlugin,
        DocxPlugin,
        CsvPlugin,
        MarkdownPlugin,
        JuicePlugin,
    ],
    override: {
        components: withDraggables(
            withPlaceholders({
                [BlockquotePlugin.key]: BlockquoteElement,
                [CodeBlockPlugin.key]: CodeBlockElement,
                [CodeLinePlugin.key]: CodeLineElement,
                [CodeSyntaxPlugin.key]: CodeSyntaxLeaf,
                [HorizontalRulePlugin.key]: HrElement,
                [LinkPlugin.key]: LinkElement,
                [ColumnPlugin.key]: ColumnGroupElement,
                [ColumnItemPlugin.key]: ColumnElement,
                [HEADING_KEYS.h1]: withProps(HeadingElement, { variant: 'h1' }),
                [HEADING_KEYS.h2]: withProps(HeadingElement, { variant: 'h2' }),
                [HEADING_KEYS.h3]: withProps(HeadingElement, { variant: 'h3' }),
                [HEADING_KEYS.h4]: withProps(HeadingElement, { variant: 'h4' }),
                [HEADING_KEYS.h5]: withProps(HeadingElement, { variant: 'h5' }),
                [HEADING_KEYS.h6]: withProps(HeadingElement, { variant: 'h6' }),
                [MentionPlugin.key]: MentionElement,
                [MentionInputPlugin.key]: MentionInputElement,
                [ParagraphPlugin.key]: ParagraphElement,
                [TablePlugin.key]: TableElement,
                [TableRowPlugin.key]: TableRowElement,
                [TableCellPlugin.key]: TableCellElement,
                [TableCellHeaderPlugin.key]: TableCellHeaderElement,
                [TodoListPlugin.key]: TodoListElement,
                [DatePlugin.key]: DateElement,
                [BoldPlugin.key]: withProps(PlateLeaf, { as: 'strong' }),
                [CodePlugin.key]: CodeLeaf,
                [HighlightPlugin.key]: HighlightLeaf,
                [ItalicPlugin.key]: withProps(PlateLeaf, { as: 'em' }),
                [StrikethroughPlugin.key]: withProps(PlateLeaf, { as: 's' }),
                [SubscriptPlugin.key]: withProps(PlateLeaf, { as: 'sub' }),
                [SuperscriptPlugin.key]: withProps(PlateLeaf, { as: 'sup' }),
                [UnderlinePlugin.key]: withProps(PlateLeaf, { as: 'u' }),
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
