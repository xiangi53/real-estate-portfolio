import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { BRAND_INFO, NAV_LINKS } from '../data/siteContent';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('#home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 36);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (href) => {
    setActiveHash(href);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`site-header${isScrolled ? ' is-scrolled' : ''}${mobileMenuOpen ? ' menu-open' : ''}`}
      role="banner"
    >
      <div className="container header-inner">
        <a
          href="#home"
          className="brand-logo-link"
          aria-label="Marci Metzger - The Ridge Realty Group Home"
          onClick={() => handleNavClick('#home')}
        >
          <img
            src={BRAND_INFO.logo.src}
            alt={BRAND_INFO.logo.alt}
            className="brand-logo"
            width="220"
            height="46"
          />
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <ul className="nav-list">
            {NAV_LINKS.map((item) => {
              const isActive = activeHash === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`nav-link${isActive ? ' active' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={() => handleNavClick(item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="header-actions">
          <a
            href={BRAND_INFO.phoneHref}
            className="btn header-call-btn"
            aria-label={`Call Now at ${BRAND_INFO.phoneDisplay}`}
          >
            <Phone size={14} aria-hidden="true" />
            <span>CALL NOW</span>
          </a>

          <button
            type="button"
            className="mobile-menu-toggle"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? (
              <X size={20} aria-hidden="true" />
            ) : (
              <Menu size={20} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="mobile-nav-drawer"
          role="dialog"
          aria-modal="false"
          aria-label="Mobile navigation"
        >
          <nav aria-label="Mobile primary navigation">
            <ul className="mobile-nav-list">
              {NAV_LINKS.map((item) => {
                const isActive = activeHash === item.href;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={`mobile-nav-link${isActive ? ' active' : ''}`}
                      aria-current={isActive ? 'page' : undefined}
                      onClick={() => handleNavClick(item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mobile-nav-footer">
            <span className="mobile-nav-phone-meta">
              Direct Office Line &bull; {BRAND_INFO.phoneFormatted}
            </span>
            <a
              href={BRAND_INFO.phoneHref}
              className="btn btn-outline-light"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Phone size={15} aria-hidden="true" />
              <span>CALL NOW &mdash; {BRAND_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
