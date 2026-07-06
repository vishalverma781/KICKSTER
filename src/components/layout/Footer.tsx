import React from 'react';
import { ChevronRight } from 'lucide-react';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">

        <div className="footer-links">
          {/* Column 1 */}
          <div className="link-column">
            <h3 className="font-heading mb-4 text-white">KNOW MORE</h3>
            <ul>
              <li><a href="#">ABOUT KICKSTER</a></li>
              <li><a href="#">GIFT CARD</a></li>
              <li><a href="#">STORE LOCATOR</a></li>
              <li><a href="#">TRACK MY ORDER</a></li>
              <li><a href="#">CONTACT US</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">CAREERS</a></li>
              <li><a href="#">BLOGS</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="link-column">
            <h3 className="font-heading mb-4 text-white">FOR ORDER INQUIRIES</h3>
            <ul>
              <li className="text-gray mb-1">care@kickster.com</li>
              <li className="text-gray mb-1">Timings : 12PM - 8PM</li>
              <li className="text-gray mb-1">Days : Mon-Sat</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="link-column">
            <h3 className="font-heading mb-4 text-white">FOR RETAIL STORES</h3>
            <ul>
              <li className="text-gray">Contact : +91 xxxxxxxxxx</li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div className="newsletter-section">
            <h2 className="font-heading mb-4 text-white">Sign up to our newsletter</h2>
            <div className="newsletter-input-group">
              <input
                type="email"
                placeholder="E-mail"
                className="newsletter-input"
              />
              <button className="newsletter-submit" aria-label="Submit">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Column 5 */}
          <div className="link-column">
            <h3 className="font-heading mb-4 text-white">POLICIES</h3>
            <ul>
              <li><a href="#">PRIVACY</a></li>
              <li><a href="#">SHIPPING</a></li>
              <li><a href="#">TERMS & CONDITIONS</a></li>
              <li><a href="#">RETURN POLICY</a></li>
              <li><a href="#">EXCHANGE YOUR ORDER</a></li>
              <li><a href="#">GRIEVANCE</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-copyright" style={{
          marginTop: '40px',
          paddingTop: '20px',
          borderTop: '1px solid rgba(255,255,255,0.15)',
          color: '#888',
          fontSize: '0.85rem',
          textAlign: 'center',
          letterSpacing: '0.05em',
          fontFamily: 'var(--font-body)'
        }}>
          <p>&copy; 2026 Kickster. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
};
