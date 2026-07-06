import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { WishlistProvider } from './context/WishlistContext.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WishlistProvider>
      <App />
    </WishlistProvider>
  </React.StrictMode>,
)
