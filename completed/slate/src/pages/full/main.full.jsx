import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../../index.css';
import RichTextExample from './editor.full';
createRoot(document.getElementById('root')).render(<StrictMode>
        <div className="container editor-body">
            <RichTextExample />
        </div>
    </StrictMode>);
