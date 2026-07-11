import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { practice } from '../content';
import './Navbar.css';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/services', label: 'Services' },
  { to: '/meet-felicia-davis', label: 'Meet the Provider' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-brand" onClick={() => setOpen(false)}>
          {/* Brown falling-leaves tree — same asset as the windsongpsych.com navbar */}
          <DotLottieReact
            src="https://lottie.host/19b9ab05-06a8-4f8a-bda3-2ea9c9390a67/kAmZcU6xAF.lottie"
            loop
            autoplay
            className="brand-lottie"
          />
          <span className="brand-script">{practice.brandLine1}</span>
          <span className="brand-rest">{practice.brandLine2}</span>
        </Link>

        <nav className={`navbar-links ${open ? 'is-open' : ''}`}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {l.label}
            </NavLink>
          ))}
          <a href={`tel:${practice.phone.replace(/[^0-9]/g, '')}`} className="btn btn--primary navbar-cta">
            Call {practice.phone}
          </a>
        </nav>

        <button
          className={`navbar-toggle ${open ? 'is-open' : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
