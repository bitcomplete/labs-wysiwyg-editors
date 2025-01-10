import {
    BoldPlugin,
    CodePlugin,
    ItalicPlugin,
    StrikethroughPlugin,
    UnderlinePlugin,
} from '@udecode/plate-basic-marks/react'
import { useEditorReadOnly, useEditorRef } from '@udecode/plate-common/react'
import { FontBackgroundColorPlugin, FontColorPlugin } from '@udecode/plate-font/react'
import { ListStyleType } from '@udecode/plate-indent-list'
import { BulletedListPlugin, NumberedListPlugin } from '@udecode/plate-list/react'
import { ImagePlugin } from '@udecode/plate-media/react'
import {
    BaselineIcon,
    BoldIcon,
    Code2Icon,
    ItalicIcon,
    PaintBucketIcon,
    SparklesIcon,
    StrikethroughIcon,
    UnderlineIcon,
} from 'lucide-react'

import { AIToolbarButton } from './ai-toolbar-button'
import { AlignDropdownMenu } from './align-dropdown-menu'
import { ColorDropdownMenu } from './color-dropdown-menu'
import { CommentToolbarButton } from './comment-toolbar-button'
import { EmojiDropdownMenu } from './emoji-dropdown-menu'
import { IndentListToolbarButton } from './indent-list-toolbar-button'
import { IndentTodoToolbarButton } from './indent-todo-toolbar-button'
import { IndentToolbarButton } from './indent-toolbar-button'
import { InsertDropdownMenu } from './insert-dropdown-menu'
import { LineHeightDropdownMenu } from './line-height-dropdown-menu'
import { LinkToolbarButton } from './link-toolbar-button'
import { ListToolbarButton } from './list-toolbar-button'
import { MarkToolbarButton } from './mark-toolbar-button'
import { MediaToolbarButton } from './media-toolbar-button'
import { ModeDropdownMenu } from './mode-dropdown-menu'
import { MoreDropdownMenu } from './more-dropdown-menu'
import { OutdentToolbarButton } from './outdent-toolbar-button'
import { TableDropdownMenu } from './table-dropdown-menu'
import { ToggleToolbarButton } from './toggle-toolbar-button'
import { ToolbarGroup } from './toolbar'
import { TurnIntoDropdownMenu } from './turn-into-dropdown-menu'
import { isVariant, Variant } from '@/lib/variant-plugin.ts'

export function FixedToolbarButtons() {
    const readOnly = useEditorReadOnly()
    const editor = useEditorRef()

    return (
        <div className="flex w-full">
            {!readOnly && (
                <>
                    {isVariant(editor, Variant.FULL) && (
                        <ToolbarGroup>
                            <AIToolbarButton
                                className="gap-1.5 text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-500"
                                tooltip="Edit, generate, and more"
                            >
                                <SparklesIcon className="!size-3.5" />
                                Ask AI
                            </AIToolbarButton>
                        </ToolbarGroup>
                    )}

                    {!isVariant(editor, Variant.BASIC) && (
                        <ToolbarGroup>
                            <InsertDropdownMenu />
                            <TurnIntoDropdownMenu />
                        </ToolbarGroup>
                    )}

                    <ToolbarGroup>
                        <MarkToolbarButton nodeType={BoldPlugin.key} tooltip="Bold (⌘+B)">
                            <BoldIcon />
                        </MarkToolbarButton>

                        <MarkToolbarButton nodeType={ItalicPlugin.key} tooltip="Italic (⌘+I)">
                            <ItalicIcon />
                        </MarkToolbarButton>

                        <MarkToolbarButton nodeType={UnderlinePlugin.key} tooltip="Underline (⌘+U)">
                            <UnderlineIcon />
                        </MarkToolbarButton>

                        <MarkToolbarButton
                            nodeType={StrikethroughPlugin.key}
                            tooltip="Strikethrough (⌘+⇧+M)"
                        >
                            <StrikethroughIcon />
                        </MarkToolbarButton>

                        <MarkToolbarButton nodeType={CodePlugin.key} tooltip="Code (⌘+E)">
                            <Code2Icon />
                        </MarkToolbarButton>

                        {isVariant(editor, Variant.FULL) && (
                            <ColorDropdownMenu nodeType={FontColorPlugin.key} tooltip="Text color">
                                <BaselineIcon />
                            </ColorDropdownMenu>
                        )}

                        {!isVariant(editor, Variant.BASIC) && (
                            <ColorDropdownMenu
                                nodeType={FontBackgroundColorPlugin.key}
                                tooltip="Background color"
                            >
                                <PaintBucketIcon />
                            </ColorDropdownMenu>
                        )}
                    </ToolbarGroup>

                    <ToolbarGroup>
                        {!isVariant(editor, Variant.BASIC) && (
                            <>
                                <AlignDropdownMenu />
                                <LineHeightDropdownMenu />
                            </>
                        )}
                        <IndentListToolbarButton nodeType={ListStyleType.Disc} />
                        <IndentListToolbarButton nodeType={ListStyleType.Decimal} />
                        {isVariant(editor, Variant.FULL) && <IndentTodoToolbarButton />}
                        {!isVariant(editor, Variant.BASIC) && (
                            <>
                                <ListToolbarButton nodeType={BulletedListPlugin.key} />
                                <ListToolbarButton nodeType={NumberedListPlugin.key} />
                            </>
                        )}
                        {isVariant(editor, Variant.FULL) && (
                            <>
                                <OutdentToolbarButton />
                                <IndentToolbarButton />
                            </>
                        )}
                    </ToolbarGroup>

                    <ToolbarGroup>
                        {!isVariant(editor, Variant.BASIC) && <LinkToolbarButton />}
                        {isVariant(editor, Variant.FULL) && <ToggleToolbarButton />}
                        {isVariant(editor, Variant.FULL) && (
                            <MediaToolbarButton nodeType={ImagePlugin.key} />
                        )}
                        {!isVariant(editor, Variant.BASIC) && <TableDropdownMenu />}
                        {!isVariant(editor, Variant.BASIC) && <EmojiDropdownMenu />}
                        {isVariant(editor, Variant.FULL) && <MoreDropdownMenu />}
                    </ToolbarGroup>
                </>
            )}

            <div className="grow" />

            {isVariant(editor, Variant.FULL) && (
                <ToolbarGroup>
                    <CommentToolbarButton />
                    <ModeDropdownMenu />
                </ToolbarGroup>
            )}
        </div>
    )
}
