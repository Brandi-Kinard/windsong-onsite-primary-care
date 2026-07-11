import React from 'react';
import { Link } from 'react-router-dom';
import { practice, locations } from '../content';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">
            <span className="brand-script">{practice.brandLine1}</span>
            <span className="brand-rest">{practice.brandLine2}</span>
          </div>
          <p className="footer-tagline">{practice.tagline}</p>
          <p className="footer-sister">
            A sister practice of{' '}
            <a href={practice.sisterSite.url} target="_blank" rel="noopener noreferrer">
              {practice.sisterSite.name}
            </a>
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/meet-felicia-davis">Meet the Provider</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
          </ul>
        </div>

        <div>
          <h4>Locations</h4>
          {locations.map((loc) => (
            <p key={loc.name} className="footer-address">
              <a href={loc.maps} target="_blank" rel="noopener noreferrer">
                {loc.address.split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}
              </a>
            </p>
          ))}
        </div>

        <div>
          <h4>Contact</h4>
          <p>Phone: <a href={`tel:${practice.phone.replace(/[^0-9]/g, '')}`}>{practice.phone}</a></p>
          <p>Fax: {practice.fax}</p>
          <p><a href={`mailto:${practice.email}`}>{practice.email}</a></p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} {practice.legalName}. All rights reserved.</p>
          <p className="footer-disclaimer">
            If you are experiencing a medical emergency, call 911 or go to your nearest emergency room.
          </p>
        </div>
      </div>
    </footer>
  );
}
