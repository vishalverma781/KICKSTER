import { ShoppingBag, Search, User } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export function Header() {
  const { cart, setIsCartOpen } = useShop();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <div className="container header-inner">
        <div className="menu-icon">
          {/* Menu icon for mobile can go here */}
        </div>
        
        <div className="logo">
          KICKSTER
        </div>
        
        <div className="header-actions">
          <Search size={20} strokeWidth={1.5} className="cursor-pointer" />
          <User size={20} strokeWidth={1.5} className="cursor-pointer" />
          <div className="cart-icon-wrapper" onClick={() => setIsCartOpen(true)}>
            <ShoppingBag size={20} strokeWidth={1.5} />
            {totalItems > 0 && (
              <div className="cart-badge">{totalItems}</div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
