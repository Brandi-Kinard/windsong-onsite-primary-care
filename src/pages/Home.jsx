import React from 'react';
import { Link } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import SmartImage from '../components/SmartImage';
import Insurance from '../components/Insurance';
import { practice, locations, images, carouselImages } from '../content';
import './Home.css';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <h1>{practice.tagline}</h1>
            <p>
              Windsong Onsite Primary Care offers attentive, unhurried primary care with a special
              focus on the health of older adults — from prevention and wellness to managing
              the conditions that come with time. {/* [PLACEHOLDER copy] */}
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn--primary">Get in Touch</Link>
              <Link to="/services" className="btn btn--outline">Explore Services</Link>
            </div>
          </div>
          <div className="hero-media">
            <SmartImage image={images.hero} className="hero-img" />
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="trustbar">
        <div className="container trustbar-grid">
          <div><strong>Older-Adult Focused</strong><span>Geriatric-centered primary care</span></div>
          <div><strong>In-Person & Telehealth</strong><span>Care that fits your life</span></div>
          <div><strong>Most Insurance Accepted</strong><span>Including Medicare {/* [PLACEHOLDER] confirm */}</span></div>
          <div><strong>Coordinated Care</strong><span>Working with your specialists</span></div>
        </div>
      </section>

      {/* Insurance acceptance */}
      <Insurance />

      {/* Services preview — auto-scrolling image carousel */}
      <section className="section">
        <div className="container">
          <span className="section-label">What We Do</span>
          <h2 className="section-title">Primary care built around you</h2>
          <p className="section-intro">
            From annual wellness visits and preventive care to chronic condition management,
            medication review, memory screening, and telehealth — steady, whole-person care
            with the time and attention older adults deserve. {/* [PLACEHOLDER copy] */}
          </p>
        </div>
        <div className="carousel" aria-hidden="true">
          <div className="carousel-track">
            {/* list duplicated for a seamless continuous loop */}
            {[...carouselImages, ...carouselImages].map((img, i) => (
              <div className="carousel-card" key={i}>
                <SmartImage image={img} className="carousel-img" />
              </div>
            ))}
          </div>
        </div>
        <div className="container center-cta">
          <Link to="/services" className="btn btn--outline">See all services</Link>
        </div>
      </section>

      {/* Provider */}
      <section className="section section--tint">
        <div className="container provider-grid">
          <div className="provider-media">
            <SmartImage image={images.provider} className="provider-img" />
          </div>
          <div>
            <span className="section-label">Meet the Provider</span>
            <h2 className="section-title">Felicia Davis</h2>
            <p className="section-intro">
              Felicia Davis brings over a decade of clinical experience and a deeply personal
              approach to caring for older adults and their families. {/* [PLACEHOLDER bio copy] */}
            </p>
            <Link to="/meet-felicia-davis" className="btn btn--primary">Meet Felicia Davis →</Link>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="section">
        <div className="container">
          <span className="section-label">Where We Are</span>
          <h2 className="section-title">Our locations</h2>
          <div className="locations-grid">
            {locations.map((loc) => (
              <div className="location-card" key={loc.name}>
                <h3>{loc.name}</h3>
                <p>{loc.address.split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}</p>
                <a href={loc.maps} target="_blank" rel="noopener noreferrer">Get directions →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — centered, hero-style background, tree beneath the content */}
      <section className="cta-band">
        <div className="container cta-inner">
          <h2>Ready to get started?</h2>
          <p>New patients are welcome. Call us or send a request — we'll take it from there.</p>
          <div className="cta-actions">
            <a href={`tel:${practice.phone.replace(/[^0-9]/g, '')}`} className="btn btn--primary">Call {practice.phone}</a>
            <Link to="/contact" className="btn btn--outline">Get in Touch</Link>
          </div>
          <div className="cta-tree" aria-hidden="true">
            {/* Brown falling-leaves tree — same asset as the psych site navbar */}
            <DotLottieReact
              src="https://lottie.host/19b9ab05-06a8-4f8a-bda3-2ea9c9390a67/kAmZcU6xAF.lottie"
              loop
              autoplay
              className="cta-tree-animation"
            />
          </div>
        </div>
      </section>
    </>
  );
}
