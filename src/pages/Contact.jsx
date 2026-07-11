import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { practice, locations } from '../content';
import './Page.css';

// EmailJS configuration — uses the shared Windsong account/service, with a
// dedicated "Windsong Onsite Primary Care Contact Us" template scoped to this
// form's fields and its "To Email" set to {{to_email}} (RECIPIENT_EMAIL below).
const EMAILJS_SERVICE_ID = 'service_idvcxum';
const EMAILJS_TEMPLATE_ID = 'template_znq7ap5';
const EMAILJS_PUBLIC_KEY = 'wFQLtLxDwWnkGF0TF';
const RECIPIENT_EMAIL = 'contact@windsongonsite.com';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    setIsSubmitting(true);
    setError(false);

    try {
      emailjs.init(EMAILJS_PUBLIC_KEY);

      const templateParams = {
        to_email: RECIPIENT_EMAIL,
        reply_to: data.get('email'),
        name: data.get('name'),
        email: data.get('email'),
        phone: data.get('phone'),
        message: data.get('message'),
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
      };

      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);

      form.reset();
      setSent(true);
    } catch (err) {
      console.error('Error sending contact form:', err);
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
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
            <h2>Get in touch</h2>
            {sent && <p className="form-sent">Thank you — your message has been sent. We'll get back to you promptly.</p>}
            {error && (
              <p className="form-error">
                Sorry, something went wrong sending your message. Please call us at{' '}
                <a href={`tel:${practice.phone.replace(/[^0-9]/g, '')}`}>{practice.phone}</a> or email{' '}
                <a href={`mailto:${practice.email}`}>{practice.email}</a> directly.
              </p>
            )}
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
              <button type="submit" className="btn btn--primary" disabled={isSubmitting}>
                {isSubmitting ? 'Sending…' : 'Send'}
              </button>
              <p className="form-privacy">
                Please do not include sensitive medical details in this form. This form is not a
                secure channel for protected health information. See our{' '}
                <Link to="/privacy">Privacy Policy</Link> for how we handle your information under HIPAA.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
