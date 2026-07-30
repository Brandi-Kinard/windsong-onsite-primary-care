import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { practice } from '../../content';
import '../Page.css';

// EmailJS configuration — shared Windsong account/service, with a dedicated
// template for the Consent for Care form whose "Reply To" is the {{email}} tag.
const EMAILJS_SERVICE_ID = 'service_idvcxum';
const EMAILJS_TEMPLATE_ID = 'template_qymklpf';
const EMAILJS_PUBLIC_KEY = 'wFQLtLxDwWnkGF0TF';
const RECIPIENT_EMAIL = 'contact@windsongonsite.com';

export default function ConsentForCareForm() {
  const today = new Date().toLocaleDateString('en-US');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [printedName, setPrintedName] = useState('');
  const [signature, setSignature] = useState('');
  const [guardian, setGuardian] = useState(false);
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);

    try {
      emailjs.init(EMAILJS_PUBLIC_KEY);

      const now = new Date();
      const patientEmail = email.trim();
      const templateParams = {
        to_email: RECIPIENT_EMAIL,
        email: patientEmail || RECIPIENT_EMAIL,
        name,
        dob,
        printed_name: printedName,
        signature,
        guardian_note: guardian ? 'Yes' : 'No',
        date: today,
        submissionDate: now.toLocaleDateString(),
        submissionTime: now.toLocaleTimeString(),
      };

      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
      setSent(true);
    } catch (err) {
      console.error('Error sending Consent for Care form:', err);
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Patient Forms</span>
          <h1>Consent for Medical Services</h1>
        </div>
      </section>

      <section className="section">
        <div className="container legal-body">
          <h3>{practice.legalName} — Comprehensive Care</h3>

          <h3>Consent to Treatment</h3>
          <ul>
            <li>
              I consent to medical and psychiatric evaluation, treatment, diagnostic procedures, and testing
              as determined by clinical necessity. Any proposed treatment, medication, or procedure will be
              explained in plain language, and I may refuse any treatment I am not comfortable receiving.
            </li>
            <li>
              I understand that services may be delivered in-person or via telehealth when appropriate. I have
              been offered a copy of Windsong's Telehealth Policy and Notice of Privacy Practices.
            </li>
            <li>
              I authorize release of my medical information to my insurance company, Medicare/Medicaid, or
              their agents to determine benefits for requested services. I request that authorized insurance
              benefits be paid directly to {practice.legalName}. A portion of the bill may be assigned as
              patient liability.
            </li>
            <li>
              I authorize release of my health information to attending physicians and/or facilities for care
              coordination. My records are subject to all applicable HIPAA guidelines. This consent remains in
              effect until services are discontinued by the provider or patient.
            </li>
          </ul>

          <h3>Patient Rights &amp; Acknowledgment</h3>
          <ul>
            <li>
              I have been informed of my right to consent to or refuse treatment, to receive information about
              my condition in understandable terms, and to file a grievance without impact on my care.
            </li>
            <li>
              I acknowledge receipt of or opportunity to review {practice.legalName}'s Notice of Privacy
              Practices, Patient Rights, and Grievance Policy.
            </li>
          </ul>

          {sent ? (
            <p className="form-sent">Thank you — your form has been submitted.</p>
          ) : (
            <form onSubmit={handleSubmit} className="patient-form">
              {error && (
                <p className="form-error">
                  Sorry, something went wrong submitting your form. Please try again, or call us at{' '}
                  <a href={`tel:${practice.phone.replace(/[^0-9]/g, '')}`}>{practice.phone}</a>.
                </p>
              )}
              <label>
                Patient Name
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                  required
                />
              </label>
              <label>
                Email (optional)
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
                <span className="form-helper">So we can follow up if needed.</span>
              </label>
              <label>
                Date of Birth
                <input
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  required
                />
              </label>
              <label>
                Printed Name
                <input
                  type="text"
                  value={printedName}
                  onChange={(e) => setPrintedName(e.target.value)}
                  required
                />
              </label>
              <label>
                Signature
                <input
                  type="text"
                  value={signature}
                  onChange={(e) => setSignature(e.target.value)}
                  placeholder="Type your full name as signature"
                  required
                />
              </label>
              <label className="form-checkbox">
                <input
                  type="checkbox"
                  checked={guardian}
                  onChange={(e) => setGuardian(e.target.checked)}
                />
                I am signing as Legal Guardian or Power of Attorney (proof of authority required)
              </label>
              <label>
                Date
                <input type="text" value={today} readOnly />
              </label>
              <p className="form-note">
                If signing as Legal Guardian or POA, proof of authority is required.
              </p>
              <button type="submit" className="btn btn--primary" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting…' : 'Submit'}
              </button>
            </form>
          )}

          <p className="form-note">This consent is valid until discontinued by provider or patient.</p>
        </div>
      </section>
    </>
  );
}
