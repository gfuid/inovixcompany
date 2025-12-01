import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// 1. Ye line add karo
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 2. App ko HelmetProvider ke andar wrap karo */}
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)