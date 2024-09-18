import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
import Alert from 'bootstrap/js/dist/alert';

// or, specify which plugins you need:
import { Tooltip, Toast, Popover } from 'bootstrap';