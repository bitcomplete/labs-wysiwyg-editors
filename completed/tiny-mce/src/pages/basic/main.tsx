import '../../styles.css'
import { StrictMode, useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { createRoot } from 'react-dom/client'
import { parseContentToHTML } from '../../../../../scripts/parseContentToHtml'
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
                        'autolink',
                        'lists',
                        'link',
                        'preview',
                        'code',
                        'fullscreen',
                        'code',
                        'help',
                        'wordcount',
                        'autoresize',
                    ],
                    toolbar: 'undo redo | bold italic | bullist numlist | help',
                    content_style:
                        'body { font-family:Helvetica,Arial,sans-serif; font-size:14px } a { color: #0969da }',
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
