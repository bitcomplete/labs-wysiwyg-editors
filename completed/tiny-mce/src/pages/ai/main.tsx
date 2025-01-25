import '../../styles.css'
import { StrictMode, useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { createRoot } from 'react-dom/client'
import { parseContentToHTML } from '../../../../../scripts/parseContentToHtml'
import helpers from '../../helpers'
import API_KEY from '../../api-key'

export default function App() {
    const editorRef = useRef<Editor>(null)

    return (
        <>
            <Editor
                apiKey={API_KEY}
                initialValue={parseContentToHTML(false)}
                ref={editorRef}
                init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        'advlist',
                        'autolink',
                        'lists',
                        'link',
                        'image',
                        'charmap',
                        'preview',
                        'anchor',
                        'searchreplace',
                        'visualblocks',
                        'code',
                        'fullscreen',
                        'insertdatetime',
                        'media',
                        'table',
                        'code',
                        'help',
                        'wordcount',
                        'autoresize',
                        'importword',
                        'exportword',
                        'exportpdf',
                        'ai',
                        'preview',
                        'powerpaste',
                        'revisionhistory',
                    ],
                    toolbar:
                        'undo redo | blocks | ' +
                        'bold italic forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'importword exportword exportpdf |' +
                        'revisionhistory |' +
                        'aidialog aishortcuts |' +
                        'removeformat | help',
                    content_style:
                        'body { font-family:Helvetica,Arial,sans-serif; font-size:14px } a { color: #0969da }',
                    exportpdf_converter_options: {
                        'format': 'Letter',
                        'margin_top': '1in',
                        'margin_right': '1in',
                        'margin_bottom': '1in',
                        'margin_left': '1in'
                        },
                    exportword_converter_options: {
                        document: {
                            size: 'Letter',
                        },
                    },
                    importword_converter_options: {
                        'formatting': {
                            'styles': 'inline',
                            'resets': 'inline',
                            'defaults': 'inline',
                        }
                    },
                    revisionhistory_fetch: helpers.revisionhistory_fetch,
                    ai_request: helpers.ai_request,
                }}
            />
        </>
    )
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
