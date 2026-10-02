import { useState, useRef, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { SidebarFilter } from './components/shop/SidebarFilter';
import { ProductGrid } from './components/shop/ProductGrid';
import { CollectionBanner } from './components/shop/CollectionBanner';
import { WishlistModal } from './components/shop/WishlistModal';
import { SellerDashboard } from './components/admin/SellerDashboard';
import { LandingPage } from './components/layout/LandingPage';
import { SlidersHorizontal, ChevronDown, ChevronUp } from 'lucide-react';

function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'shop' | 'admin'>('landing');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('Most relevant');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const sortOptions = [
    'Most relevant',
    'Best selling',
    'Alphabetically, A-Z',
    'Alphabetically, Z-A',
    'Price, low to high',
    'Price, high to low',
    'Date, old to new',
    'Date, new to old'
  ];

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsSortOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (currentView === 'landing') {
    return <LandingPage onEnterWebsite={() => setCurrentView('shop')} />;
  }

  return (
    <div className="app-container relative">
      <Header setView={setCurrentView as any} />
      
      {currentView === 'admin' ? (
        <SellerDashboard />
      ) : (
        <>
          <CollectionBanner />
          <main className="container" style={{ marginTop: 'var(--spacing-8)' }}>

            {/* Filter Toolbar */}
            <div className="filter-toolbar flex items-center justify-between" style={{ paddingBottom: '20px', borderBottom: '1px solid #eaeaea', marginBottom: '30px' }}>
              <button
                className="flex items-center gap-2 font-body"
                onClick={() => setIsFilterOpen(true)}
              >
                <SlidersHorizontal size={18} />
                <span className="font-bold text-[0.95rem]">Filters</span>
              </button>

              <div className="sort-dropdown-container relative font-body text-[0.95rem]" ref={dropdownRef}>
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => setIsSortOpen(!isSortOpen)}>
                  <span className="font-bold text-[#111]">Sort by:</span>
                  <span className="text-[#333]">{selectedSort}</span>
                  <div style={{ width: '24px', height: '24px', background: isSortOpen ? '#111' : '#f0f0f0', color: isSortOpen ? 'white' : '#555', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}>
                    {isSortOpen ? <ChevronUp size={14} strokeWidth={3} /> : <ChevronDown size={14} strokeWidth={3} />}
                  </div>
                </div>

                {isSortOpen && (
                  <div className="sort-dropdown-menu">
                    <ul className="sort-dropdown-list">
                      {sortOptions.map((option, idx) => (
                        <li
                          key={idx}
                          className={`sort-option ${selectedSort === option ? 'selected' : ''}`}
                          onClick={() => {
                            setSelectedSort(option);
                            setIsSortOpen(false);
                          }}
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="font-heading uppercase" style={{ fontSize: '1.8rem', marginBottom: '30px', fontWeight: '400', letterSpacing: '1px' }}>
              KICKSTER PRODUCTS
            </div>

            <div className="page-layout relative">
              {/* Drawer Overlay */}
              {isFilterOpen && (
                <div className="sidebar-overlay" onClick={() => setIsFilterOpen(false)}></div>
              )}

              {/* Drawer */}
              <div className={`sidebar-drawer ${isFilterOpen ? 'open' : ''}`}>
                <SidebarFilter onClose={() => setIsFilterOpen(false)} />
              </div>

              <div className="main-content w-full" style={{ width: '100%' }}>
                <ProductGrid />
              </div>
            </div>
          </main>
        </>
      )}

      <Footer />
      <WishlistModal />
    </div>
  );
}

export default App;
