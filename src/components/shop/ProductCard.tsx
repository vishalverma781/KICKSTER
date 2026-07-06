import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { useWishlist } from '../../context/WishlistContext';
import './ProductCard.css';

interface Product {
  id: number;
  title: string;
  vendor: string;
  price: number;
  compareAtPrice: number | null;
  images: string[];
  isSoldOut: boolean;
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  
  const isLiked = isInWishlist(product.id);
  
  const primaryImage = product.images[0];
  const secondaryImage = product.images[1] || primaryImage;
  
  const isSale = product.compareAtPrice && product.compareAtPrice > product.price;

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isLiked) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div 
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-image-container">
        {/* Badges */}
        <div className="product-badges">
          {product.isSoldOut && <Badge text="Sold Out" variant="soldOut" />}
          {isSale && !product.isSoldOut && <Badge text="Sale" variant="sale" />}
        </div>
        
        {/* Wishlist Button */}
        <button 
          className="wishlist-btn" 
          onClick={handleLike}
          aria-label="Add to wishlist"
        >
          <Heart 
            size={16} 
            fill={isLiked ? "currentColor" : "none"} 
            className={isLiked ? "liked" : ""}
          />
        </button>
        
        {/* Images */}
        <img 
          src={primaryImage} 
          alt={product.title} 
          className={`product-image primary ${isHovered ? 'hidden' : 'visible'}`}
        />
        <img 
          src={secondaryImage} 
          alt={`${product.title} alternate`} 
          className={`product-image secondary ${isHovered ? 'visible' : 'hidden'}`}
        />
      </div>
      
      <div className="product-info">
        <h3 className="product-vendor">{product.vendor}</h3>
        <h2 className="product-title font-heading">{product.title}</h2>
        <div className="product-price">
          <span className="current-price">MRP ₹{product.price.toLocaleString('en-IN')}</span>
          {isSale && (
            <span className="compare-price line-through text-gray">
              MRP ₹{product.compareAtPrice?.toLocaleString('en-IN')}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
