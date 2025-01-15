import '../../styles.css'
import { StrictMode, useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { createRoot } from 'react-dom/client'
import { parseContentToHTML } from '../../../../../scripts/parseContentToHtml'

export default function App() {
    const editorRef = useRef<Editor>(null)

    return (
        <>
            <Editor
                apiKey="2irvdgkv2qh7wlkymza35kf8pvw7wzwikexz0t9j479b3bss"
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
                    ],
                    toolbar: 'undo redo | bold italic | bullist numlist | help',
                    content_style:
                        'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
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
