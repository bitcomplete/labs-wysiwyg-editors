import { ReactRenderer } from '@tiptap/react'
import tippy, { Instance, Props } from 'tippy.js'
import { Editor } from '@tiptap/core'
import MentionList, { MentionListRef } from './MentionList'

interface SuggestionProps {
    query: string
    clientRect: DOMRect | (() => DOMRect)
    editor: Editor
    event: KeyboardEvent
}

interface MentionState {
    component: ReactRenderer<MentionListRef> | null
    popup: Instance<Props>[] | null
}

export default {
    items: ({ query }: { query: string }) => {
        return ['Lea Thompson', 'Tom Cruise', 'Jennifer Grey', 'Mickey Rourke']
            .filter((item) => item.toLowerCase().startsWith(query.toLowerCase()))
            .slice(0, 5)
    },

    render: () => {
        let state: MentionState = {
            component: null,
            popup: null,
        }

        return {
            onStart: (props: SuggestionProps) => {
                state.component = new ReactRenderer(MentionList, {
                    props,
                    editor: props.editor,
                })

                if (!props.clientRect) {
                    return
                }

                state.popup = [
                    tippy(document.body, {
                        getReferenceClientRect: () =>
                            typeof props.clientRect === 'function'
                                ? props.clientRect()
                                : props.clientRect,
                        appendTo: () => document.body,
                        content: state.component.element,
                        showOnCreate: true,
                        interactive: true,
                        trigger: 'manual',
                        placement: 'bottom-start',
                    }),
                ]
            },

            onUpdate(props: SuggestionProps) {
                state.component?.updateProps(props)

                if (!props.clientRect) {
                    return
                }

                state.popup?.[0].setProps({
                    getReferenceClientRect: () =>
                        typeof props.clientRect === 'function'
                            ? props.clientRect()
                            : props.clientRect,
                })
            },

            onKeyDown(props: SuggestionProps) {
                if (props.event.key === 'Escape') {
                    state.popup?.[0].hide()
                    return true
                }

                return state.component?.ref?.onKeyDown({ event: props.event }) ?? false
            },

            onExit() {
                state.popup?.[0].destroy()
                state.component?.destroy()
            },
        }
    },
}
