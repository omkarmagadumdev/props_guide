import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { useThemeContext } from './context/useThemeContext.js'

createRoot(document.getElementById('root')).render(

  <useThemeContext.Provider>

  <StrictMode>
    <App />
  </StrictMode>

  </useThemeContext.Provider>
)
