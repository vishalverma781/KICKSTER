import { type Product } from '../data/products';
import { useShop } from '../context/ShopContext';

export function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useShop();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        {product.isNew && <div className="product-badge">New</div>}
        <img src={product.image} alt={product.name} className="product-image main-img" />
        <img src={product.hoverImage} alt={product.name} className="product-image hover-img" />
        
        <button 
          className="btn-primary quick-add"
          onClick={() => addToCart(product)}
        >
          Quick Add
        </button>
      </div>
      
      <div className="product-info">
        <div className="product-brand">{product.brand}</div>
        <div className="product-name">{product.name}</div>
        <div className="product-price">
          {product.originalPrice && (
            <span className="original-price">{formatPrice(product.originalPrice)}</span>
          )}
          <span className={product.originalPrice ? 'sale-price' : ''} style={{ color: product.originalPrice ? 'var(--sale-color)' : 'inherit' }}>
            {formatPrice(product.price)}
          </span>
        </div>
      </div>
    </div>
  );
}
