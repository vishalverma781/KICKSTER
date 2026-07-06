import React from 'react';
import { X } from 'lucide-react';
import './SearchDrawer.css';

interface SearchDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const img1 = 'https://cdn.shopify.com/s/files/1/0360/6491/9692/files/1_37e7595e-bde4-4c30-ba5e-080fce96859e.png?v=1755093739';
const img2 = 'https://cdn.shopify.com/s/files/1/0360/6491/9692/files/hlk.png?v=1765794753';

const popularChoices = [
  { id: 1, text: 'SNEAKERS UNDER 10K', image: img1 },
  { id: 2, text: 'SNEAKER UNDER 20K', image: img2 },
  { id: 3, text: 'ON RUNNING', image: img1 },
  { id: 4, text: 'NIKE MIND', image: img1 },
  { id: 5, text: 'RUNNING SNEAKERS', image: img2 },
  { id: 6, text: 'ASICS KAYANO', image: img2 },
  { id: 7, text: 'JORDAN HIGH', image: img1 },
  { id: 8, text: 'YEEZY BOOST', image: img2 }
];

export const SearchDrawer: React.FC<SearchDrawerProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="search-overlay" onClick={onClose}></div>
      <div className={`search-drawer ${isOpen ? 'open' : ''}`}>
        <div className="search-header">
          <input 
            type="text" 
            placeholder="Search for..." 
            className="search-input"
            autoFocus
          />
          <button className="search-close-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </div>
        
        <div className="search-body">
          <h3 className="popular-title">POPULAR CHOICES</h3>
          
          <div className="popular-grid">
            {popularChoices.map((choice) => (
              <a href="/" key={choice.id} className="popular-card">
                <img src={choice.image} alt={choice.text} className="popular-image-placeholder" />
                <span className="popular-text">{choice.text}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
