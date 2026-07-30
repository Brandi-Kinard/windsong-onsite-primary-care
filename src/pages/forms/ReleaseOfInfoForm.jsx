import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { practice } from '../../content';
import '../Page.css';

// EmailJS configuration — shared Windsong account/service, with a dedicated
// template for the Release of Information form whose "Reply To" is the {{email}} tag.
const EMAILJS_SERVICE_ID = 'service_idvcxum';
const EMAILJS_TEMPLATE_ID = 'template_qh231m7';
const EMAILJS_PUBLIC_KEY = 'wFQLtLxDwWnkGF0TF';
const RECIPIENT_EMAIL = 'contact@windsongonsite.com';

export default function ReleaseOfInfoForm() {
  const today = new Date().toLocaleDateString('en-US');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [printedName, setPrintedName] = useState('');
  const [signature, setSignature] = useState('');
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
        birthdate,
        printed_name: printedName,
        signature,
        date: today,
        submissionDate: now.toLocaleDateString(),
        submissionTime: now.toLocaleTimeString(),
      };

      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
      setSent(true);
    } catch (err) {
      console.error('Error sending Release of Information form:', err);
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
          <h1>Authorization for Release of Medical Information</h1>
        </div>
      </section>

      <section className="section">
        <div className="container legal-body">
          <ul>
            <li>
              I understand that my records may contain documentation of psychiatric condition, medical history
              and substance use, that this information will be released as part of my record.
            </li>
            <li>
              I understand that if the person or entity receiving this information is not covered by federal
              privacy regulations, this information will no longer be protected and may be redisclosed.
            </li>
            <li>
              I understand that I may revoke this authorization at any time, but revocation will not apply to
              information that has already been released.
            </li>
            <li>
              I understand that a copy, email or FAX of this document is just as valid as the original
              document. A photocopy of this authorization is as valid as the original form and I have a right
              to receive a copy upon request.
            </li>
            <li>
              I understand that my records are protected under the Federal regulations and cannot be disclosed
              without my written consent unless otherwise provided for in the regulations.
            </li>
          </ul>

          <p>
            I permit the following disclosure of information about me to be made in the format requested,
            including by telephone, fax or mail:
          </p>

          <ul>
            <li>
              I permit: Any physician or other medical/care provider, hospital, clinic, therapist and other
              medical related facility or service, pharmacy benefit administrator, insurer, employer,
              government agency, group policyholder, contract holder or benefit plan administrator to disclose
              to {practice.legalName} information about my health.
            </li>
            <li>
              I permit: {practice.legalName} the right to contact my healthcare provider on my behalf to
              obtain clarifying information (subjective to all state laws) for any reason.
            </li>
          </ul>

          <p>
            I understand that the information that is collected and discussed is to be treated with
            confidentiality. However, directly relevant information may be shared with appropriate parties
            that is deemed necessary.
          </p>

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
                Birthdate
                <input
                  type="date"
                  value={birthdate}
                  onChange={(e) => setBirthdate(e.target.value)}
                  required
                />
              </label>
              <label>
                Printed Name of Patient or Representative
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
              <label>
                Date
                <input type="text" value={today} readOnly />
              </label>
              <button type="submit" className="btn btn--primary" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting…' : 'Submit'}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
