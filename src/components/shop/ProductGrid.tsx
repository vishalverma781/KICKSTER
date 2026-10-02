import React from 'react';
import { ProductCard } from './ProductCard';
import { useProducts } from '../../context/ProductsContext';

export const ProductGrid: React.FC = () => {
  const { products } = useProducts();

  return (
    <div className="product-grid-container w-full">
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-gray">{products.length} products</p>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product as any} />
        ))}
      </div>
    </div>
  );
};
