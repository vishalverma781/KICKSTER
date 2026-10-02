import React, { useState } from 'react';
import { Search, User, Heart, ShoppingBag } from 'lucide-react';
import { SearchDrawer } from './SearchDrawer';
import { useWishlist } from '../../context/WishlistContext';
import './Header.css';

interface HeaderProps {
  setView?: (view: 'shop' | 'admin') => void;
}

export const Header: React.FC<HeaderProps> = ({ setView }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { setIsWishlistOpen, wishlistItems } = useWishlist();

  return (
    <>
      <header className="header">
        <div className="header-top-banner">
          <div className="marquee-track">
            <span className="marquee-text font-heading">
              GET <span className="text-red">₹500</span> SHIPPING WAIVED OFF BY ADDING CDC SNEAKER WIPES
            </span>
            <span className="marquee-text font-heading" aria-hidden="true">
              GET <span className="text-red">₹500</span> SHIPPING WAIVED OFF BY ADDING CDC SNEAKER WIPES
            </span>
            <span className="marquee-text font-heading" aria-hidden="true">
              GET <span className="text-red">₹500</span> SHIPPING WAIVED OFF BY ADDING CDC SNEAKER WIPES
            </span>
          </div>
        </div>
        <div className="header-main container flex items-center justify-between">
          <div className="header-left flex items-center gap-8">
            <a href="#" onClick={(e) => { e.preventDefault(); setView && setView('shop'); }} className="logo-container">
              <span className="logo-title font-heading">KICKSTER</span>
              <span className="logo-subtitle">
                By Rajat & Hansraj
              </span>
            </a>
            <nav className="desktop-nav">
              <ul className="flex items-center gap-8 font-heading">
                <li><a href="#" onClick={(e) => { e.preventDefault(); setView && setView('shop'); }}>Sneakers</a></li>
                <li><a href="#">Streetwear</a></li>
                <li><a href="#">Accessories</a></li>
                <li><a href="#">Sale</a></li>
              </ul>
            </nav>
          </div>
          
          <div className="header-right flex items-center gap-6">
            <button className="icon-btn" aria-label="Search" onClick={() => setIsSearchOpen(true)}>
              <Search size={20} />
            </button>
            <button className="icon-btn" aria-label="Seller Account" onClick={() => setView && setView('admin')} title="Seller Dashboard">
              <User size={20} />
            </button>
            <button className="icon-btn flex items-center gap-1" aria-label="Wishlist" onClick={() => setIsWishlistOpen(true)}>
              <Heart size={20} />
              {wishlistItems.length > 0 && (
                <span className="font-bold text-[18px] leading-none" style={{ fontFamily: 'var(--font-body)' }}>
                  {wishlistItems.length}
                </span>
              )}
            </button>
            <button className="icon-btn" aria-label="Cart">
              <ShoppingBag size={20} />
            </button>
        </div>
      </div>
      </header>
      
      <SearchDrawer isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};
