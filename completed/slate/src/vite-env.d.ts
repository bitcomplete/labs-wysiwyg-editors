/// <reference types="vite/client" />
// This example is for an Editor with `ReactEditor` and `HistoryEditor`
import { BaseEditor } from 'slate'
import { ReactEditor } from 'slate-react'
import { HistoryEditor } from 'slate-history'

type CustomElement = { type: 'paragraph' | 'block-quote' ; children: CustomText[]; align?: string }
type CustomText = { text: string; bold?: boolean; italic?: boolean; underline?: boolean; code?: boolean }

declare module 'slate' {
    interface CustomTypes {
        Editor: BaseEditor & ReactEditor & HistoryEditor
        Element: CustomElement
        Text: CustomText
    }
}