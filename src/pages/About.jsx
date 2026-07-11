import React from 'react';
import { Link } from 'react-router-dom';
import SmartImage from '../components/SmartImage';
import { images } from '../content';
import './Page.css';

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Meet the Provider</span>
          <h1>Felicia Davis</h1>
          <p>MSN, PMHNP-BC, FNP-BC — Provider, Windsong Primary Care</p>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div className="about-media">
            <SmartImage image={images.provider} className="about-img" />
          </div>
          <div className="about-copy">
            <h2>Meet Felicia Davis, MSN, PMHNP-BC, FNP-BC</h2>
            <p>
              As a board-certified family nurse practitioner with over 20 years of experience,
              Felicia Davis brings a rare depth of clinical expertise and heart to every patient
              interaction. Her practice is grounded in the comprehensive management of chronic
              and acute health conditions, with particular focus on diabetes, hypertension,
              congestive heart failure, GERD, and chronic pain.
            </p>
            <p>
              Felicia uses a holistic care model that looks beyond isolated symptoms to address
              the full picture of a patient's health — physical, emotional, and lifestyle factors
              alike. This whole-person approach allows her to build individualized treatment
              plans that emphasize prevention, education, and long-term wellness, not just
              symptom management.
            </p>
            <p>
              Over the course of her career, Felicia has provided care to patients across
              diverse clinical settings, building a practice defined by continuity of care,
              careful chronic disease management, and a whole-person approach to health.
              Currently, she practices in an outpatient setting, managing primary care for
              patients of all ages, with a particular emphasis on pediatric and geriatric
              populations.
            </p>
            <p>
              Felicia's educational journey reflects her deep commitment to lifelong learning
              and care excellence. She holds a Bachelor of Arts in Sociology and Criminal Justice
              from Norfolk State University, an Associate's degree from Queens University, and a
              Bachelor of Science in Nursing from Winston-Salem State University. She later
              completed a Master of Science in Nursing at Winston-Salem State, along with
              additional post-graduate certification supporting her broad clinical scope.
            </p>
            <p>
              Felicia founded Windsong Family &amp; Psychiatric Associates with a simple but
              powerful mission: to expand access to compassionate, evidence-based care —
              especially for those who've historically been underserved or overlooked. Her work
              is guided by the belief that every person deserves dignity, attentive care, and
              the opportunity to live well.
            </p>
            <p>
              "All To Thee I Owe" is more than a phrase for Felicia — it's a personal expression
              of gratitude, purpose, and service that continues to shape how she shows up for her
              patients each day.
            </p>
            <div className="page-cta">
              <Link to="/contact" className="btn btn--primary">Request an Appointment</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
