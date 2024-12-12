import { createPlatePlugin, TPlateEditor } from '@udecode/plate-common/react'

export enum Variant {
    WIKI = 'wiki',
    FULL = 'full',
    BASIC = 'basic',
}

export const VariantPlugin = (variant: Variant) =>
    createPlatePlugin({
        key: 'VariantPlugin',
        options: {
            variantName: variant,
        },
    })

export const isVariant = (editor: TPlateEditor, variant: Variant) => {
    return editor.getOptionsStore(VariantPlugin(variant)).get.variantName() === variant
}
