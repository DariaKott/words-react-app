import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'
import './assets/global.scss';
import { WordProvider } from './assets/presentation/components/Context/WordContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <WordProvider>
    <App />
  </WordProvider>
  </React.StrictMode>,
)
