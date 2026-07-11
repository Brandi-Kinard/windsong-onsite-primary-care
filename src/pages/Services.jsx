import React from 'react';
import { Link } from 'react-router-dom';
import SmartImage from '../components/SmartImage';
import { services, images, testimonials } from '../content';
import './Page.css';

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Our Services</span>
          <h1>Primary care for every stage of older adulthood</h1>
          <p>
            From annual wellness visits to day-to-day management of chronic conditions,
            we provide steady, coordinated care. {/* [PLACEHOLDER copy] */}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container services-detail-grid">
          {services.map((s) => (
            <div className="service-card" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section--tint">
        <div className="container testimonial-list">
          {testimonials.map((t) => (
            <div className="testimonial-body" key={t.name}>
              <div className="testimonial-stars" aria-label={`${t.stars} out of 5 stars`}>
                {'★'.repeat(t.stars)}
              </div>
              <blockquote className="testimonial-quote">
                “{t.quote}”
              </blockquote>
              <p className="testimonial-name">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div className="about-copy">
            <h2>Care that connects the dots</h2>
            <p>
              Older adults often see several specialists. We serve as the home base — keeping
              the full picture in view, coordinating referrals, reconciling medications, and
              making sure nothing falls through the cracks. {/* [PLACEHOLDER] */}
            </p>
            <p>
              And because Windsong Onsite Primary Care is a sister practice of Windsong Family &amp;
              Psychiatric Associates, whole-person care — physical and mental — stays in the family.
            </p>
            <div className="page-cta">
              <Link to="/contact" className="btn btn--primary">Get in Touch</Link>
            </div>
          </div>
          <div className="about-media">
            <SmartImage image={images.services} className="about-img" />
          </div>
        </div>
      </section>
    </>
  );
}
