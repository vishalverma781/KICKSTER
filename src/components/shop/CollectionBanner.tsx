import React from 'react';
import './CollectionBanner.css';

export const CollectionBanner: React.FC = () => {
  return (
    <div className="collection-banner-container">
      <div className="collection-banner-purple">
        <h1 className="collection-title font-heading">KICKSTER PRODUCTS</h1>

        {/* Decorative elements to mimic the screenshot */}
        <div className="deco-item deco-notebook">
          <div className="madness-badge font-heading">
            MID<br />YEAR<br />MAD<br />NESS
          </div>
        </div>
        <div className="deco-item deco-headphones">🎧</div>
        <div className="deco-item deco-smiley">🙂</div>
        <div className="deco-item deco-skateboard">🛹</div>
      </div>

      <div className="collection-banner-black">
        <div className="promo-text-main font-heading">
          GET <span className="text-red">₹500</span> SHIPPING WAIVED OFF
        </div>
        <div className="promo-text-sub font-heading">
          BY ADDING KICKSTER SNEAKER WIPES
        </div>
      </div>
    </div>
  );
};
