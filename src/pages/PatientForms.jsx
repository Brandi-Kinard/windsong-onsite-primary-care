import React from 'react';
import { Link } from 'react-router-dom';
import './Page.css';

const forms = [
  {
    to: '/telehealth-policy',
    title: 'Telehealth/Telepsychiatry Policy',
    desc: 'Review and acknowledge our privacy and communication policy for telehealth visits.',
  },
  {
    to: '/release-of-information',
    title: 'Authorization for Release of Medical Information',
    desc: 'Authorize us to request and share your medical information for coordinated care.',
  },
  {
    to: '/consent-for-care',
    title: 'Consent for Medical Services',
    desc: 'Provide your consent to medical and psychiatric evaluation and treatment.',
  },
];

export default function PatientForms() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Patient Forms</span>
          <h1>Patient Forms</h1>
          <p>Complete these forms online before your visit to save time.</p>
        </div>
      </section>

      <section className="section">
        <div className="container patient-forms-grid">
          {forms.map((f) => (
            <Link key={f.to} to={f.to} className="patient-form-card">
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
              <span className="patient-form-card-cta">Open form →</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
