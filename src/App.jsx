import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RealtorIntro from './components/RealtorIntro';
import SalesAchievement from './components/SalesAchievement';
import BuyerSellerGuidance from './components/BuyerSellerGuidance';
import PropertySearch from './components/PropertySearch';
import PhotoGallery from './components/PhotoGallery';
import Services from './components/Services';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CookieNotice from './components/CookieNotice';

const COOKIE_STORAGE_KEY = 'marci_metzger_cookie_consent_v1';

export default function App() {
  const [prefilledContactMessage, setPrefilledContactMessage] = useState('');
  const [cookieBannerVisible, setCookieBannerVisible] = useState(false);

  useEffect(() => {
    try {
      const storedConsent = window.localStorage.getItem(COOKIE_STORAGE_KEY);
      if (storedConsent !== 'accepted') {
        setCookieBannerVisible(true);
      }
    } catch {
      setCookieBannerVisible(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    try {
      window.localStorage.setItem(COOKIE_STORAGE_KEY, 'accepted');
    } catch {
      // Ignore storage errors in private browsing modes
    }
    setCookieBannerVisible(false);
  };

  const handleReopenCookieNotice = () => {
    setCookieBannerVisible(true);
  };

  const handleClearPrefilledMessage = useCallback(() => {
    setPrefilledContactMessage('');
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Section A: Header and navigation */}
      <Header />

      <main id="main-content">
        {/* Section B: Hero section */}
        <Hero />

        {/* Section C: Realtor introduction and sales achievement */}
        <RealtorIntro />
        <SalesAchievement />

        {/* Section D: Seller and buyer guidance */}
        <BuyerSellerGuidance onSelectTopic={setPrefilledContactMessage} />

        {/* Section E: Property search */}
        <PropertySearch onApplyCriteriaToContact={setPrefilledContactMessage} />

        {/* Section F: Photo gallery */}
        <PhotoGallery />

        {/* Section G: Our services */}
        <Services />

        {/* Section H: Contact section */}
        <ContactSection
          prefilledMessage={prefilledContactMessage}
          onClearPrefilledMessage={handleClearPrefilledMessage}
        />
      </main>

      {/* Section I: Footer and cookie notice */}
      <Footer onReopenCookieNotice={handleReopenCookieNotice} />
      <CookieNotice
        isVisible={cookieBannerVisible}
        onAccept={handleAcceptCookies}
      />
    </>
  );
}
