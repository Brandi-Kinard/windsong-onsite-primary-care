import React from 'react';
import { practice } from '../content';
import './Page.css';

/* [PLACEHOLDER] Concise starter policies — have counsel review and expand
   (HIPAA Notice of Privacy Practices, state-specific terms) before launch. */
export default function Legal({ kind }) {
  const isPrivacy = kind === 'privacy';

  const privacy = [
    {
      h: 'Overview',
      p: `This policy explains how ${practice.name} handles information collected through this website. It does not replace the Notice of Privacy Practices you receive as a patient, which governs your protected health information.`,
    },
    {
      h: 'Information we collect',
      p: 'When you use our contact or appointment form, we collect the name, phone, email, and message you provide. We may also collect basic, non-identifying usage data (such as pages visited) to keep the site working well.',
    },
    {
      h: 'How we use it',
      p: 'We use your information only to respond to your request, schedule care, and improve the site. We do not sell your personal information.',
    },
    {
      h: 'Protected health information',
      p: 'Please do not send sensitive medical details through this website. Any health information you share as a patient is protected under HIPAA and our Notice of Privacy Practices.',
    },
    {
      h: 'Sharing',
      p: 'We share information only with service providers who help us operate the site, or when required by law. We do not share it for advertising.',
    },
    {
      h: 'Your choices',
      p: 'You may request access to, correction of, or deletion of the information you submitted by contacting us.',
    },
    {
      h: 'HIPAA Notice of Privacy Practices',
      p: `As a healthcare provider, ${practice.name} is required by law to protect your health information and to give you notice of our legal duties and privacy practices regarding it. Our full Notice of Privacy Practices describes how your medical information may be used and disclosed and how you can access it. A copy is available at our offices and upon request. This website summary does not replace that Notice.`,
    },
  ];

  const terms = [
    {
      h: 'Acceptance',
      p: `By using this website, you agree to these terms. If you do not agree, please do not use the site.`,
    },
    {
      h: 'Not medical advice',
      p: 'The content here is for general information only and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified provider with questions about your health.',
    },
    {
      h: 'No emergencies',
      p: 'Do not use this site for medical emergencies. If you are experiencing an emergency, call 911 or go to the nearest emergency room.',
    },
    {
      h: 'Appointments & communications',
      p: 'Submitting a form is a request, not a confirmed appointment. We will follow up to confirm details. Messages sent through the site are not a secure or guaranteed means of communication.',
    },
    {
      h: 'Intellectual property',
      p: `The text, images, and design on this site are owned by ${practice.name} and may not be reused without permission.`,
    },
    {
      h: 'Limitation of liability',
      p: 'This site is provided "as is" without warranties. To the extent permitted by law, we are not liable for damages arising from its use.',
    },
    {
      h: 'Changes',
      p: 'We may update these terms from time to time. Continued use of the site means you accept the current version.',
    },
  ];

  const sections = isPrivacy ? privacy : terms;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>{isPrivacy ? 'Privacy Policy' : 'Terms of Service'}</h1>
        </div>
      </section>
      <section className="section">
        <div className="container legal-body">
          <p className="legal-updated">Last updated: July 2026</p>
          {sections.map((s) => (
            <div key={s.h}>
              <h2>{s.h}</h2>
              <p>{s.p}</p>
            </div>
          ))}
          <h2>Contact</h2>
          <p>
            Questions? Reach us at{' '}
            <a href={`mailto:${practice.email}`}>{practice.email}</a> or {practice.phone}.
          </p>
        </div>
      </section>
    </>
  );
}
