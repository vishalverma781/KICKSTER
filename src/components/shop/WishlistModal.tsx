import React from 'react';
import { Heart, X, Trash2, Share2, LogIn } from 'lucide-react';
import { useWishlist } from '../../context/WishlistContext';
import './WishlistModal.css';

export const WishlistModal: React.FC = () => {
  const { wishlistItems, isWishlistOpen, setIsWishlistOpen, removeFromWishlist, clearWishlist } = useWishlist();

  if (!isWishlistOpen) return null;

  const todayDate = new Date().toLocaleDateString('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric'
  });

  return (
    <>
      <div className="wishlist-overlay" onClick={() => setIsWishlistOpen(false)}></div>
      <div className="wishlist-modal-container">
        <div className="wishlist-modal">
          
          <div className="wishlist-header">
            <div className="flex items-center gap-3">
              <Heart size={28} fill="#111" />
              <h2 className="wishlist-title font-body">My Wishlist</h2>
            </div>
            <button className="wishlist-close" onClick={() => setIsWishlistOpen(false)}>
              <X size={24} />
            </button>
          </div>

          <div className="wishlist-login-banner">
            <LogIn size={18} className="mr-2 text-gray" />
            <span className="text-gray">Please login to save your wishlist across devices.</span>
            <a href="#" className="login-link ml-2 font-bold text-black">LOGIN</a>
          </div>

          <div className="wishlist-body">
            {wishlistItems.length === 0 ? (
              <div className="empty-wishlist text-center py-12">
                <p className="text-gray mb-4">Your wishlist is empty</p>
                <button 
                  className="bg-black text-white px-6 py-3 font-bold rounded"
                  onClick={() => setIsWishlistOpen(false)}
                >
                  CONTINUE SHOPPING
                </button>
              </div>
            ) : (
              <div className="wishlist-grid">
                {wishlistItems.map((item) => (
                  <div key={item.id} className="wishlist-item-card">
                    <div className="wishlist-item-info">
                      <h4 className="wishlist-item-title">{item.title}</h4>
                      <span className="wishlist-item-date">{todayDate}</span>
                    </div>
                    <div className="wishlist-item-image-wrapper">
                      <img src={item.images[0]} alt={item.title} className="wishlist-item-image" />
                    </div>
                    <div className="wishlist-item-price">
                      ₹{item.price.toLocaleString('en-IN')}.00
                    </div>
                    <div className="wishlist-item-actions flex items-center justify-between">
                      <button className="wishlist-add-cart w-full bg-black text-white py-2 px-4 font-bold text-sm">
                        ADD TO CART
                      </button>
                      <button 
                        className="wishlist-remove-btn ml-3 p-2"
                        onClick={() => removeFromWishlist(item.id)}
                      >
                        <Trash2 size={18} className="text-gray" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {wishlistItems.length > 0 && (
            <div className="wishlist-actions-footer">
              <button className="wishlist-action-btn font-bold uppercase">Add all to cart</button>
              <button className="wishlist-action-btn text-gray uppercase ml-6" onClick={clearWishlist}>
                Remove all from wishlist
              </button>
            </div>
          )}
          
          <div className="wishlist-share-footer flex justify-end">
            <button className="flex items-center gap-2 font-bold text-sm">
              <Share2 size={16} /> SHARE WISHLIST
            </button>
          </div>
          
        </div>
      </div>
    </>
  );
};
