import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ReduxProvider from './ReduxProvider/index.tsx'
import { KeyBindingProvider } from './keybindings/KeyBindingContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider>
      <KeyBindingProvider>
        <App />
      </KeyBindingProvider>
    </ReduxProvider>
  </React.StrictMode>,
)
