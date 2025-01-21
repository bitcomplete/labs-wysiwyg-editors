import { createRoot } from 'react-dom/client'
import { useState, useEffect, useRef, StrictMode } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import { parseContentToHTML } from '../../../../../scripts/parseContentToHtml.ts'
import getLicenseKey from '../../license-key.ts'

import {
    ClassicEditor,
    AutoLink,
    Autosave,
    BalloonToolbar,
    BlockQuote,
    Bold,
    Code,
    EditorConfig,
    Essentials,
    GeneralHtmlSupport,
    Italic,
    Link,
    List,
    ListProperties,
    Markdown,
    Paragraph,
    PasteFromMarkdownExperimental,
    PasteFromOffice,
    RemoveFormat,
    SelectAll,
    Strikethrough,
    TextTransformation,
    Underline,
} from 'ckeditor5'

import 'ckeditor5/ckeditor5.css'
import '../../index.css'


function App() {
    const editorContainerRef = useRef(null)
    const editorRef = useRef(null)
    const [isLayoutReady, setIsLayoutReady] = useState(false)

    useEffect(() => {
        setIsLayoutReady(true)

        return () => setIsLayoutReady(false)
    }, [])

    const editorConfig: EditorConfig = {
        licenseKey: getLicenseKey() ,
        toolbar: {
            items: ['bold', 'italic', 'underline', '|', 'link', 'bulletedList', 'numberedList'],
            shouldNotGroupWhenFull: false,
        },
        plugins: [
            AutoLink,
            Autosave,
            BalloonToolbar,
            BlockQuote,
            Bold,
            Code,
            Essentials,
            GeneralHtmlSupport,
            Italic,
            Link,
            List,
            ListProperties,
            Markdown,
            Paragraph,
            PasteFromMarkdownExperimental,
            PasteFromOffice,
            RemoveFormat,
            SelectAll,
            Strikethrough,
            TextTransformation,
            Underline,
        ],
        balloonToolbar: ['bold', 'italic', '|', 'link', '|', 'bulletedList', 'numberedList'],
        htmlSupport: {
            allow: [
                {
                    name: /^.*$/,
                    styles: true,
                    attributes: true,
                    classes: true,
                },
            ],
        },
        initialData:
            parseContentToHTML() +
            '<ul>\n    <li>📝 <a href="https://orders.ckeditor.com/trial/premium-features">Trial sign up</a>,</li>\n    <li>📕 <a href="https://ckeditor.com/docs/ckeditor5/latest/installation/index.html">Documentation</a>,</li>\n    <li>⭐️ <a href="https://github.com/ckeditor/ckeditor5">GitHub</a>,</li>\n    <li>🏠 <a href="https://ckeditor.com">CKEditor Homepage</a>,</li>\n    <li>🧑‍💻 <a href="https://ckeditor.com/ckeditor-5/demo/">CKEditor 5 Demos</a>,</li>\n</ul>\n',
        link: {
            addTargetToExternalLinks: true,
            defaultProtocol: 'https://',
            decorators: {
                toggleDownloadable: {
                    mode: 'manual',
                    label: 'Downloadable',
                    attributes: {
                        download: 'file',
                    },
                },
            },
        },
        list: {
            properties: {
                styles: false,
                startIndex: false,
                reversed: false,
            },
        },
        menuBar: {
            isVisible: true,
        },
        placeholder: 'Type or paste your content here!',
    }

    return (
        <div>
            <div className="main-container">
                <div
                    className="editor-container editor-container_classic-editor editor-container_include-style"
                    ref={editorContainerRef}
                >
                    <div className="editor-container__editor editor-body">
                        <div ref={editorRef}>
                            {isLayoutReady && (
                                <CKEditor editor={ClassicEditor} config={editorConfig} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
