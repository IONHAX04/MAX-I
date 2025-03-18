import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MetaPixel from "./assets/MetaPixel/MetaPixel.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MetaPixel />
    <App />
  </StrictMode>
)
