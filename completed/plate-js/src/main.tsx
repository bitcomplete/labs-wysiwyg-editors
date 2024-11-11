import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PlateEditor from './PlateEditor'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PlateEditor />
  </StrictMode>,
)
