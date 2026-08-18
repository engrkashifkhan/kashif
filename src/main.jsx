import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Safety net: this site currently has no light/dark toggle, so it should
// always render dark. Applying the class here (in addition to index.html)
// guarantees the theme is correct even if a stale/cached HTML file is ever
// served without the "dark" class on <html>.
document.documentElement.classList.add('dark')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
