import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../index.css'
import PlateEditor from './editor.wiki'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <PlateEditor />
    </StrictMode>,
)
