import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import PatientForms from './pages/PatientForms';
import TelehealthPolicyForm from './pages/forms/TelehealthPolicyForm';
import ReleaseOfInfoForm from './pages/forms/ReleaseOfInfoForm';
import ConsentForCareForm from './pages/forms/ConsentForCareForm';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meet-felicia-davis" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/patient-forms" element={<PatientForms />} />
          <Route path="/telehealth-policy" element={<TelehealthPolicyForm />} />
          <Route path="/release-of-information" element={<ReleaseOfInfoForm />} />
          <Route path="/consent-for-care" element={<ConsentForCareForm />} />
          <Route path="/privacy" element={<Legal kind="privacy" />} />
          <Route path="/terms" element={<Legal kind="terms" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
