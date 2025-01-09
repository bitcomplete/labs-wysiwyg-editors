import { createRoot } from 'react-dom/client'
import { useState, useEffect, useRef, StrictMode } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import { parseContentToHTML } from '../../../../../scripts/parseContentToHtml.ts'

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
            '<b>Congratulations on setting up CKEditor 5! 🎉</b>\n<p>\n    You\'ve successfully created a CKEditor 5 project. This powerful text editor will enhance your application, enabling rich text editing\n    capabilities that are customizable and easy to use.\n</p>\n<b>What\'s next?</b>\n<ol>\n    <li>\n        <strong>Integrate into your app</strong>: time to bring the editing into your application. Take the code you created and add to your\n        application.\n    </li>\n    <li>\n        <strong>Explore features:</strong> Experiment with different plugins and toolbar options to discover what works best for your needs.\n    </li>\n    <li>\n        <strong>Customize your editor:</strong> Tailor the editor\'s configuration to match your application\'s style and requirements. Or even\n        write your plugin!\n    </li>\n</ol>\n<p>\n    Keep experimenting, and don\'t hesitate to push the boundaries of what you can achieve with CKEditor 5. Your feedback is invaluable to us\n    as we strive to improve and evolve. Happy editing!\n</p>\n<h3>Helpful resources</h3>\n<ul>\n    <li>📝 <a href="https://orders.ckeditor.com/trial/premium-features">Trial sign up</a>,</li>\n    <li>📕 <a href="https://ckeditor.com/docs/ckeditor5/latest/installation/index.html">Documentation</a>,</li>\n    <li>⭐️ <a href="https://github.com/ckeditor/ckeditor5">GitHub</a> (star us if you can!),</li>\n    <li>🏠 <a href="https://ckeditor.com">CKEditor Homepage</a>,</li>\n    <li>🧑‍💻 <a href="https://ckeditor.com/ckeditor-5/demo/">CKEditor 5 Demos</a>,</li>\n</ul>\n<b>Need help?</b>\n<p>\n    See this text, but the editor is not starting up? Check the browser\'s console for clues and guidance. It may be related to an incorrect\n    license key if you use premium features or another feature-related requirement. If you cannot make it work, file a GitHub issue, and we\n    will help as soon as possible!\n</p>\n',
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
                    <div className="editor-container__editor">
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
