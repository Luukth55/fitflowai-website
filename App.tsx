import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import AIServicesBlock from './components/AIServicesBlock';
import AIScanBlock from './components/AIScanBlock';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIScanTool from './components/AIScanTool';
import AIScanConfirmation from './components/AIScanConfirmation';
import AIScanThankYou from './components/AIScanThankYou';
import ServicesPage from './components/ServicesPage';
import SolutionsPage from './components/SolutionsPage';
import TermsPage from './components/TermsPage';
import PrivacyPage from './components/PrivacyPage';
import CookiePage from './components/CookiePage';
import CookieBanner from './components/CookieBanner';

const HomePageReordered = () => (
  <>
    <Hero />
    <AIServicesBlock />
    <AIScanBlock />
    <Services />
    <About />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePageReordered />} />
          <Route path="/ai-scan" element={<AIScanTool />} />
          <Route path="/ai-scan-bevestiging" element={<AIScanConfirmation />} />
          <Route path="/ai-scan-bedankt" element={<AIScanThankYou />} />
          <Route path="/onze-aanpak" element={<ServicesPage />} />
          <Route path="/oplossingen" element={<SolutionsPage />} />
          <Route path="/algemene-voorwaarden" element={<TermsPage />} />
          <Route path="/privacybeleid" element={<PrivacyPage />} />
          <Route path="/cookiebeleid" element={<CookiePage />} />
        </Routes>
        <Footer />
        <CookieBanner />
      </div>
    </Router>
  );
}

export default App;