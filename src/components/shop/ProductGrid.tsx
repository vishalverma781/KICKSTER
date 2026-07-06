import React from 'react';
import { ProductCard } from './ProductCard';
import productsData from '../../data/products.json';

export const ProductGrid: React.FC = () => {
  return (
    <div className="product-grid-container w-full">
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-gray">{productsData.length} products</p>
      </div>

      <div className="product-grid">
        {productsData.map((product) => (
          <ProductCard key={product.id} product={product as any} />
        ))}
      </div>
    </div>
  );
};
