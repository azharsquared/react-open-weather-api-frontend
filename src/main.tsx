import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import OpenWhether from './OpenWhether.tsx'
import './index.css'
import Github from './github.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Github />
  </StrictMode>,
)
