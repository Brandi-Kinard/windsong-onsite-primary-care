import React, { useState } from 'react';
import { practice, locations } from '../content';
import './Page.css';

export default function Contact() {
  const [sent, setSent] = useState(false);

  // NOTE: This form currently opens the user's email client (mailto).
  // Swap in EmailJS (same pattern as the psych site) once a template
  // and destination inbox are confirmed.
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\nPhone: ${data.get('phone')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`
    );
    window.location.href = `mailto:${practice.email}?subject=${encodeURIComponent('Appointment request — website')}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Contact</span>
          <h1>We'd love to hear from you</h1>
          <p>Call, email, or send a request — we'll get back to you promptly.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div>
            <h2>Get in touch</h2>
            <p className="contact-line"><strong>Phone:</strong> <a href={`tel:${practice.phone.replace(/[^0-9]/g, '')}`}>{practice.phone}</a></p>
            <p className="contact-line"><strong>Fax:</strong> {practice.fax}</p>
            <p className="contact-line"><strong>Email:</strong> <a href={`mailto:${practice.email}`}>{practice.email}</a></p>

            <h3 className="contact-subhead">Locations</h3>
            {locations.map((loc) => (
              <p className="contact-line" key={loc.name}>
                <strong>{loc.name}</strong><br />
                {loc.address.split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}
                <a href={loc.maps} target="_blank" rel="noopener noreferrer">Get directions →</a>
              </p>
            ))}

            <p className="emergency-note">
              If you are experiencing a medical emergency, call 911 or go to your nearest
              emergency room.
            </p>
          </div>

          <div className="contact-form-wrap">
            <h2>Request an appointment</h2>
            {sent && <p className="form-sent">Thank you — your email draft has been opened. If it didn't, please email us directly.</p>}
            <form onSubmit={handleSubmit} className="contact-form">
              <label>
                Full name
                <input name="name" type="text" required autoComplete="name" />
              </label>
              <label>
                Phone
                <input name="phone" type="tel" required autoComplete="tel" />
              </label>
              <label>
                Email
                <input name="email" type="email" required autoComplete="email" />
              </label>
              <label>
                How can we help?
                <textarea name="message" rows="5" required />
              </label>
              <button type="submit" className="btn btn--primary">Send request</button>
              <p className="form-privacy">
                Please do not include sensitive medical details in this form.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
