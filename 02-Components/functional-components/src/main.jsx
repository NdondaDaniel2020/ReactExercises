import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App, Saudacao, Despedida } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Saudacao />
    <App />
    <Despedida />
  </StrictMode>,
)
