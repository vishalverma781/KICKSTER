import './LandingPage.css';
import { ArrowRight, ShoppingBag, Eye } from 'lucide-react';

interface LandingPageProps {
  onEnterWebsite: () => void;
}

export function LandingPage({ onEnterWebsite }: LandingPageProps) {
  const categories = [
    {
      id: 'footwear',
      title: 'Footwear Collection',
      subtitle: 'View the latest SS25 Footwear Catalogue',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800',
      pdfUrl: '/ASICS_Catalog_FTW_Mykickster(1).pdf',
      color: '#ff4d4d'
    },
    {
      id: 'apparel',
      title: 'Apparel Collection',
      subtitle: 'Explore the SS25 Apparel Line',
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800',
      pdfUrl: '/ASICS_Catalog_APPAREL_Mykickster.pdf',
      color: '#4d79ff'
    },
    {
      id: 'perfume',
      title: 'Premium Fragrances',
      subtitle: 'Discover our exclusive scents',
      image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800',
      pdfUrl: '/Perfume_Discount_Mykickster.com.pdf',
      color: '#ffb84d'
    }
  ];

  return (
    <div className="landing-wrapper">
      <div className="landing-background">
        <div className="gradient-blob blob-1"></div>
        <div className="gradient-blob blob-2"></div>
      </div>

      <div className="landing-content">
        <header className="landing-header">
          <h1 className="landing-logo font-heading">KICKSTER</h1>
          <h2 className="font-heading" style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem', letterSpacing: '0.05em' }}>
            by Rajat & Hansraj
          </h2>
          <p className="landing-tagline">Discover the new standard of premium</p>
        </header>

        <div className="options-grid">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="option-card group"
              onClick={() => window.open(category.pdfUrl, '_blank')}
            >
              <div className="card-bg" style={{ backgroundImage: `url(${category.image})` }}></div>
              <div className="card-overlay"></div>
              <div className="card-content">
                <div className="card-icon" style={{ backgroundColor: category.color }}>
                  <Eye size={24} color="white" />
                </div>
                <h2 className="font-heading uppercase">{category.title}</h2>
                <p>{category.subtitle}</p>
                <div className="view-btn group-hover:translate-x-2 transition-transform duration-300">
                  <span>View Catalogue</span>
                  <ArrowRight size={18} />
                </div>
              </div>
            </div>
          ))}

          <div className="option-card website-card group" onClick={onEnterWebsite}>
            <div className="card-bg website-bg"></div>
            <div className="card-overlay website-overlay"></div>
            <div className="card-content">
              <div className="card-icon" style={{ backgroundColor: '#1a1a1a' }}>
                <ShoppingBag size={24} color="white" />
              </div>
              <h2 className="font-heading uppercase">Website View</h2>
              <p>Enter the full interactive store experience</p>
              <div className="view-btn group-hover:translate-x-2 transition-transform duration-300">
                <span>Enter Store</span>
                <ArrowRight size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
