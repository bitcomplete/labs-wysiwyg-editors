/// <reference types="vite/client" />
// This example is for an Editor with `ReactEditor` and `HistoryEditor`
import { BaseEditor } from 'slate'
import { ReactEditor } from 'slate-react'
import { HistoryEditor } from 'slate-history'

export type LinkElement = { type: 'link'; url: string; children: Descendant[] }

type CustomElement =
    | {
          type: 'paragraph' | 'block-quote' | 'link'
          children: CustomText[]
          align?: string
      }
    | LinkElement
type CustomText = {
    text: string
    bold?: boolean
    italic?: boolean
    underline?: boolean
    code?: boolean
    url?: string
}

declare module 'slate' {
    interface CustomTypes {
        Editor: BaseEditor & ReactEditor & HistoryEditor
        Element: CustomElement
        Text: CustomText
    }
}
