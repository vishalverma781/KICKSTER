import React, { useState, useEffect } from 'react';
import { useProducts } from '../../context/ProductsContext';
import { ImagePlus, Package, LogOut, Lock, User as UserIcon, KeyRound, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';
import './SellerDashboard.css';

export const SellerDashboard: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const { addProduct } = useProducts();

  // Add Product Form State
  const [title, setTitle] = useState('');
  const [vendor, setVendor] = useState('NIKE');
  const [price, setPrice] = useState('');
  const [comparePrice, setComparePrice] = useState('');
  const [images, setImages] = useState<string[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [successMsg, setSuccessMsg] = useState('');

  // Check for existing "secure" session
  useEffect(() => {
    const token = localStorage.getItem('kickster_seller_token');
    const storedUser = localStorage.getItem('kickster_seller_user');
    if (token === 'secure_session_token_123' && storedUser) {
      setUsername(storedUser);
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthenticating(true);
    setError('');
    
    // Fake authentication delay for "security" feel
    setTimeout(() => {
      if (username.length > 3 && password.length > 3) {
        setIsLoggedIn(true);
        localStorage.setItem('kickster_seller_token', 'secure_session_token_123');
        localStorage.setItem('kickster_seller_user', username);
      } else {
        setError('Invalid credentials. Requires at least 4 characters.');
      }
      setIsAuthenticating(false);
    }, 1200);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    localStorage.removeItem('kickster_seller_token');
    localStorage.removeItem('kickster_seller_user');
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setImages(prev => [...prev, base64String]);
        setPreviewImages(prev => [...prev, base64String]);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !price || images.length === 0) {
      alert("Please fill all required fields and upload at least one image.");
      return;
    }

    addProduct({
      title,
      vendor,
      price: parseInt(price),
      compareAtPrice: comparePrice ? parseInt(comparePrice) : null,
      images,
      isSoldOut: false
    });

    setSuccessMsg('Product securely published to live store!');
    setTimeout(() => setSuccessMsg(''), 4000);
    
    // Reset form
    setTitle('');
    setPrice('');
    setComparePrice('');
    setImages([]);
    setPreviewImages([]);
  };

  if (!isLoggedIn) {
    return (
      <div className="admin-login-container relative">
        {/* Decorative background elements for premium feel */}
        <div style={{ position: 'absolute', top: '10%', left: '10%', width: '300px', height: '300px', background: 'rgba(255,255,255,0.4)', borderRadius: '50%', filter: 'blur(80px)' }}></div>
        <div style={{ position: 'absolute', bottom: '10%', right: '10%', width: '400px', height: '400px', background: 'rgba(0,0,0,0.05)', borderRadius: '50%', filter: 'blur(100px)' }}></div>
        
        <div className="admin-login-card relative z-10">
          <div className="admin-login-header">
            <div className="admin-login-icon">
              <Lock size={28} />
            </div>
            <h2 className="font-heading" style={{ fontSize: '2.2rem', marginBottom: '5px' }}>SELLER PORTAL</h2>
            <div className="flex items-center justify-center gap-2 text-sm text-gray font-body">
              <ShieldCheck size={16} className="text-green-600" />
              <span>Secure 256-bit Encrypted Connection</span>
            </div>
          </div>
          
          <form onSubmit={handleLogin} className="flex flex-col font-body">
            {error && (
              <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg mb-4 text-sm" style={{ color: '#d93025', backgroundColor: '#fce8e6' }}>
                <AlertCircle size={16} />
                <span>{error}</span>
              </div>
            )}
            
            <div className="admin-input-group">
              <UserIcon size={18} className="admin-input-icon" />
              <input 
                type="text" 
                placeholder="Seller ID / Username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="admin-input"
                required
              />
            </div>

            <div className="admin-input-group">
              <KeyRound size={18} className="admin-input-icon" />
              <input 
                type="password" 
                placeholder="Secure Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="admin-input"
                required
              />
            </div>
            
            <button 
              type="submit" 
              className="admin-btn mt-4" 
              disabled={isAuthenticating}
            >
              {isAuthenticating ? (
                <span>AUTHENTICATING...</span>
              ) : (
                <>
                  <Lock size={18} />
                  <span>SECURE LOGIN</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-dashboard-container font-body">
      <div className="container">
        <div className="admin-dashboard-header">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <ShieldCheck size={24} color="#2e7d32" />
              <h1 className="font-heading" style={{ fontSize: '2.5rem', lineHeight: 1 }}>SELLER DASHBOARD</h1>
            </div>
            <p className="text-gray flex items-center gap-2">
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#2e7d32', display: 'inline-block' }}></span>
              Secure session active as <strong>{username}</strong>
            </p>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 text-gray hover:text-black transition-colors"
            style={{ padding: '10px 20px', border: '1px solid #ddd', borderRadius: '8px', background: '#fff' }}
          >
            <LogOut size={16} />
            <span className="font-bold text-sm uppercase">Sign Out</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form Area */}
          <div className="lg:col-span-2 admin-card">
            <div className="flex items-center justify-between mb-8 pb-4 border-b">
              <div className="flex items-center gap-3">
                <Package size={24} />
                <h2 className="font-heading" style={{ fontSize: '1.5rem' }}>INVENTORY MANAGEMENT</h2>
              </div>
              <span className="text-xs bg-black text-white px-3 py-1 rounded-full uppercase font-bold">New Listing</span>
            </div>
            
            {successMsg && (
              <div className="flex items-center gap-3 bg-green-50 text-green-800 p-4 rounded-lg mb-6" style={{ background: '#e6f4ea', color: '#137333', border: '1px solid #ceead6' }}>
                <CheckCircle2 size={20} />
                <span className="font-bold">{successMsg}</span>
              </div>
            )}

            <form onSubmit={handleAddProduct}>
              <div className="admin-form-group">
                <label className="admin-label">Product Title <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  required
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  className="admin-form-input"
                  placeholder="e.g. Nike Air Max Plus TN"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="admin-form-group">
                  <label className="admin-label">Brand / Category <span className="text-red-500">*</span></label>
                  <select 
                    value={vendor}
                    onChange={e => setVendor(e.target.value)}
                    className="admin-form-input"
                    style={{ backgroundColor: '#fff' }}
                  >
                    <option value="NIKE">Nike</option>
                    <option value="ADIDAS">Adidas</option>
                    <option value="NEW BALANCE">New Balance</option>
                    <option value="JORDAN">Jordan</option>
                    <option value="ASICS">Asics</option>
                    <option value="PUMA">Puma</option>
                    <option value="OTHER">Other</option>
                  </select>
                </div>
                
                <div className="admin-form-group">
                  <label className="admin-label">Selling Price (₹) <span className="text-red-500">*</span></label>
                  <input 
                    type="number" 
                    required
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                    className="admin-form-input"
                    placeholder="e.g. 15999"
                  />
                </div>
              </div>

              <div className="admin-form-group">
                <label className="admin-label">Compare At Price (Optional)</label>
                <input 
                  type="number" 
                  value={comparePrice}
                  onChange={e => setComparePrice(e.target.value)}
                  className="admin-form-input"
                  placeholder="Retail / Original MRP (Shows as crossed out)"
                />
              </div>

              <div className="admin-form-group mt-8">
                <label className="admin-label flex items-center justify-between">
                  <span>Product Images <span className="text-red-500">*</span></span>
                  <span className="text-xs text-gray font-normal normal-case">High-res JPEGs or PNGs</span>
                </label>
                <div className="admin-upload-area">
                  <input 
                    type="file" 
                    multiple 
                    accept="image/*"
                    onChange={handleImageUpload}
                    style={{ opacity: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', cursor: 'pointer' }} 
                  />
                  <ImagePlus size={40} style={{ margin: '0 auto 16px', color: '#000' }} />
                  <p className="font-heading uppercase" style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Drag & Drop Media</p>
                  <p className="text-sm text-gray">or click to browse local files (Max 5MB per image)</p>
                </div>

                {previewImages.length > 0 && (
                  <div className="mt-6">
                    <p className="text-xs font-bold text-gray uppercase mb-3">Upload Preview ({previewImages.length})</p>
                    <div className="flex gap-4 flex-wrap">
                      {previewImages.map((src, i) => (
                        <div key={i} style={{ width: '90px', height: '90px', border: '1px solid #eaeaea', borderRadius: '8px', overflow: 'hidden', position: 'relative' }}>
                          <img src={src} alt="preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          {i === 0 && <span style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(0,0,0,0.7)', color: '#fff', fontSize: '10px', textAlign: 'center', padding: '2px 0' }}>MAIN</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-10 pt-6 border-t flex justify-end">
                <button type="submit" className="admin-btn" style={{ width: 'auto', padding: '16px 40px' }}>
                  <Lock size={16} />
                  PUBLISH TO STOREFRONT
                </button>
              </div>
            </form>
          </div>

          {/* Guidelines Sidebar */}
          <div className="lg:col-span-1">
            <div className="admin-guidelines-card">
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck size={28} />
                <h3 className="font-heading" style={{ fontSize: '1.5rem', margin: 0 }}>SECURITY & COMPLIANCE</h3>
              </div>
              <p className="text-sm mb-8" style={{ color: '#aaa', lineHeight: 1.6 }}>
                You are accessing the secure vendor portal. All product uploads are monitored and authenticated.
              </p>
              
              <ul className="admin-guidelines-list">
                <li>
                  <CheckCircle2 size={18} />
                  <span>Use clean, white background images for standardisation.</span>
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  <span>Ensure MRP is accurate and complies with Indian retail laws.</span>
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  <span>Images are automatically compressed and secured on upload.</span>
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  <span>Data is end-to-end encrypted during the upload process.</span>
                </li>
              </ul>

              <div className="mt-10 pt-6 border-t border-gray-800">
                <p className="text-xs text-center" style={{ color: '#666' }}>
                  Kickster Internal System<br/>v2.4.1 (Secure Build)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
