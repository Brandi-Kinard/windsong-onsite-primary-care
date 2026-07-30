import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { practice } from '../../content';
import '../Page.css';

// EmailJS configuration — shared Windsong account/service, with a dedicated
// template for the Telehealth Policy form whose "Reply To" is the {{email}} tag.
const EMAILJS_SERVICE_ID = 'service_idvcxum';
const EMAILJS_TEMPLATE_ID = 'template_hmbmml8';
const EMAILJS_PUBLIC_KEY = 'wFQLtLxDwWnkGF0TF';
const RECIPIENT_EMAIL = 'contact@windsongonsite.com';

export default function TelehealthPolicyForm() {
  const today = new Date().toLocaleDateString('en-US');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
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
        signature,
        date: today,
        submissionDate: now.toLocaleDateString(),
        submissionTime: now.toLocaleTimeString(),
      };

      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
      setSent(true);
    } catch (err) {
      console.error('Error sending Telehealth Policy form:', err);
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
          <h1>Telehealth/Telepsychiatry Policy</h1>
        </div>
      </section>

      <section className="section">
        <div className="container legal-body">
          <h3>Privacy and Communication Policy</h3>

          <h3>Purpose</h3>
          <p>
            This policy establishes standards for the safe, confidential, and clinically appropriate
            delivery of psychiatric and medical services via telehealth (live, interactive audio-video
            technology) by {practice.legalName} ("Windsong").
          </p>

          <h3>Scope &amp; Eligibility</h3>
          <p>
            Applies to all providers and staff delivering telehealth services. Patients must be physically
            located in a state where the treating provider is licensed (SC, NC, MD, VA, DC, FL, or GA) at the
            time of service. The provider determines, at each visit, whether telehealth is clinically
            appropriate; patients may be required to present in person when an examination, clinical acuity,
            or regulation requires it.
          </p>

          <h3>Technology &amp; Privacy</h3>
          <p>
            Visits are conducted through a HIPAA-compliant, encrypted platform from a private setting.
            Providers will verify the patient's identity and physical location at the start of each session.
            Sessions are not video- or audio-recorded for retention by Windsong, and patients may not record
            sessions without written consent of all parties. Windsong may use HIPAA-compliant, AI-assisted
            clinical documentation tools that transcribe or summarize the visit solely to support the
            provider's documentation. Patients will be informed when such tools are in use and may decline
            without affecting their care; all AI-generated content is reviewed and verified by the provider
            before entry into the medical record, and transcript data is protected, retained, and disposed of
            in accordance with HIPAA and applicable Business Associate Agreements. Students and trainees under
            provider supervision may be present during telehealth visits for educational and training
            purposes; patients will be informed of their presence and may decline without affecting their
            care. Technical failure procedures: if connection is lost, the provider will attempt to reconnect
            or contact the patient by phone; the visit may be completed by phone or rescheduled as clinically
            appropriate.
          </p>

          <h3>Informed Consent</h3>
          <p>
            Prior to the first telehealth visit, patients (or their legal representative/guardian) must
            receive an explanation of the benefits, limitations, and risks of telehealth and provide written
            or verbal documented consent. Consent is voluntary and may be withdrawn at any time without
            affecting the right to future care.
          </p>

          <h3>Prescribing</h3>
          <p>
            Prescriptions issued via telehealth require an appropriate evaluation and must comply with all
            federal and state laws, including DEA requirements for controlled substances. Providers may
            require periodic in-person evaluations, PDMP review, urine drug screening, or treatment agreements
            as a condition of continued prescribing.
          </p>

          <h3>Emergencies &amp; Safety</h3>
          <ul>
            <li>At each visit, the provider confirms the patient's current location and an emergency contact.</li>
            <li>
              If a psychiatric or medical emergency arises during a session, the provider will activate local
              emergency services (911 or local crisis resources) based on the patient's verified location and
              remain engaged with the patient until help arrives, when feasible.
            </li>
            <li>
              Telehealth is not appropriate for active emergencies; patients in crisis are directed to call
              988 or 911.
            </li>
          </ul>

          <h3>Documentation &amp; Billing</h3>
          <p>
            All telehealth encounters are documented in the EHR to the same standard as in-person visits,
            including consent, modality, patient location, and provider location. Services are billed using
            applicable telehealth codes and modifiers in accordance with payer and state requirements;
            patients are informed of any cost-sharing responsibility.
          </p>

          <h3>Compliance</h3>
          <p>
            All telehealth services comply with HIPAA, 42 CFR Part 2 (where applicable), state telehealth and
            licensure laws, and professional board standards. This policy is reviewed at least annually.
          </p>

          <p className="form-note">
            <strong>Acknowledgment:</strong> I have read and understand this Telehealth/Telepsychiatry Policy
            and agree to receive services under its terms.
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
