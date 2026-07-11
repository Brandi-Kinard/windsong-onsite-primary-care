import React from 'react';
import { practice } from '../content';
import './Page.css';

/* [PLACEHOLDER] Stub legal pages — replace with reviewed policy text
   (the psych site's Privacy/Terms components are a good starting point). */
export default function Legal({ kind }) {
  const isPrivacy = kind === 'privacy';
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>{isPrivacy ? 'Privacy Policy' : 'Terms of Service'}</h1>
        </div>
      </section>
      <section className="section">
        <div className="container legal-body">
          <p>
            This page is a placeholder. The final {isPrivacy ? 'privacy policy' : 'terms of service'} for{' '}
            {practice.name} will be published here before broad promotion of the site.
          </p>
          <p>
            Questions in the meantime? Contact us at{' '}
            <a href={`mailto:${practice.email}`}>{practice.email}</a> or {practice.phone}.
          </p>
        </div>
      </section>
    </>
  );
}
