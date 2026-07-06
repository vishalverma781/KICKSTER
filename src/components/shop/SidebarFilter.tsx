import React, { useState } from 'react';
import { ChevronDown, ChevronUp, X } from 'lucide-react';
import './SidebarFilter.css';

const FilterSection: React.FC<{ title: string; items?: string[] }> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="filter-section">
      <button 
        className="filter-header w-full flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="filter-title-text">{title}</span>
        <div className="icon-circle">
          {isOpen ? <ChevronUp size={14} strokeWidth={3} /> : <ChevronDown size={14} strokeWidth={3} />}
        </div>
      </button>
      
      {isOpen && items && (
        <ul className="filter-list">
          {items.map((item, index) => (
            <li key={index} className="filter-item">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="filter-checkbox" />
                <span className="filter-label">{item}</span>
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export const SidebarFilter: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <aside className="sidebar-filter-container">
      <div className="filter-main-header">
        <h2 className="filter-main-title">FILTERS</h2>
        <button className="close-btn" onClick={onClose}><X size={20} /></button>
      </div>
      
      <div className="filter-sections-scroll">
        <FilterSection title="SORT BY" items={['Most relevant', 'Price: Low to High', 'Price: High to Low', 'Newest']} />
        <FilterSection title="GENDER" items={['Men', 'Women', 'Unisex']} />
        <FilterSection title="CATEGORY" items={['Sneakers', 'Streetwear', 'Accessories']} />
        <FilterSection title="FOR" items={['Adult', 'Kids']} />
        <FilterSection title="SIZE" items={['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11']} />
        <FilterSection title="PRICE" items={['Under ₹10,000', '₹10,000 - ₹20,000', 'Over ₹20,000']} />
        <FilterSection title="BRAND" items={['NIKE', 'ADIDAS', 'JORDAN', 'NEW BALANCE']} />
      </div>

      <div className="filter-footer">
        <div className="in-stock-toggle flex items-center justify-between">
          <span className="in-stock-text">In stock only</span>
          <button 
            className={`toggle-switch ${inStockOnly ? 'active' : ''}`}
            onClick={() => setInStockOnly(!inStockOnly)}
          >
            <div className="toggle-knob"></div>
          </button>
        </div>
        <button className="apply-btn uppercase tracking-wider">
          APPLY (1)
        </button>
      </div>
    </aside>
  );
};
