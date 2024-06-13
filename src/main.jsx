import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../src/App.jsx'
import '../src/main.jsx'
import './i18n/i18n.jsx'; // Importa a configuração do i18next

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
