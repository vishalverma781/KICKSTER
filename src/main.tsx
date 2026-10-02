import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { WishlistProvider } from './context/WishlistContext.tsx'
import { ProductsProvider } from './context/ProductsContext.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProductsProvider>
      <WishlistProvider>
        <App />
      </WishlistProvider>
    </ProductsProvider>
  </React.StrictMode>,
)
