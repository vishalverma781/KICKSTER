import React, { createContext, useContext, useState, useEffect } from 'react';
import initialProducts from '../data/products.json';

export interface Product {
  id: number;
  title: string;
  vendor: string;
  price: number;
  compareAtPrice: number | null;
  images: string[];
  isSoldOut: boolean;
}

interface ProductsContextType {
  products: Product[];
  addProduct: (product: Omit<Product, 'id'>) => void;
  removeProduct: (id: number) => void;
}

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

export const ProductsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  // Load products from localStorage or fallback to initial JSON
  useEffect(() => {
    const saved = localStorage.getItem('kickster_products');
    if (saved) {
      try {
        setProducts(JSON.parse(saved));
      } catch (e) {
        setProducts(initialProducts);
      }
    } else {
      setProducts(initialProducts);
      localStorage.setItem('kickster_products', JSON.stringify(initialProducts));
    }
  }, []);

  const addProduct = (productData: Omit<Product, 'id'>) => {
    const newProduct = {
      ...productData,
      id: Date.now() // Simple unique ID
    };
    
    setProducts(prev => {
      const updated = [newProduct, ...prev];
      localStorage.setItem('kickster_products', JSON.stringify(updated));
      return updated;
    });
  };

  const removeProduct = (id: number) => {
    setProducts(prev => {
      const updated = prev.filter(p => p.id !== id);
      localStorage.setItem('kickster_products', JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <ProductsContext.Provider value={{ products, addProduct, removeProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }
  return context;
};
