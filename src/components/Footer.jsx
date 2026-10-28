import React from 'react';
import { BRAND_INFO, NAV_LINKS, SOCIAL_LINKS } from '../data/siteContent';

function SocialIcon({ id }) {
  switch (id) {
    case 'facebook':
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      );
    case 'yelp':
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M11.14 11.46 7.05 4.28c-.26-.46-.09-1.05.38-1.31.95-.52 2.41-.97 3.48-.97.54 0 .97.43.98.97l.17 8.15c.01.66-.65.94-.92.34zm-.95 2.48-4.7 1.88c-.5.2-1.07-.05-1.26-.56-.37-.97-.61-2.32-.49-3.32.06-.52.54-.89 1.06-.82l5.33.76c.65.09.72 1.8.06 2.06zm1.58 1.37-1.17 4.9c-.13.52-.66.84-1.18.7-.99-.26-2.23-.88-2.96-1.56-.39-.36-.4-.97-.02-1.35l3.78-3.8c.46-.46 1.71.43 1.55 1.11zm1.89-1.03 4.82 1.42c.51.15.8.7.64 1.21-.31.98-1.03 2.17-1.76 2.84-.39.36-.99.33-1.35-.07l-3.49-3.96c-.43-.49.47-1.64 1.14-1.44zm-.22-2.17 3.74-3.71c.39-.38 1.01-.37 1.39.03.71.75 1.38 1.97 1.65 2.96.14.52-.17 1.06-.69 1.19l-5.11 1.29c-.64.16-1.44-1.3-.98-1.76z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Footer({ onReopenCookieNotice }) {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand-col">
            <img
              src={BRAND_INFO.logo.src}
              alt={BRAND_INFO.logo.alt}
              className="footer-logo-inverted"
              width="210"
              height="58"
              loading="lazy"
            />
            <p className="footer-brand-desc">
              {BRAND_INFO.businessName}. Serving Pahrump and Southern Nevada buyers, sellers, and
              investors for nearly three decades.
            </p>
          </div>

          <div className="footer-col">
            <h4>Navigation</h4>
            <ul className="footer-nav-list">
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
              <li>
                <a href="#gallery">Photo Gallery</a>
              </li>
              <li>
                <a href="#services">Our Services</a>
              </li>
              <li>
                <a href="#contact">Call or Visit</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Office &amp; Connect</h4>
            <ul className="footer-contact-list">
              <li>{BRAND_INFO.address}</li>
              <li>
                <a href={BRAND_INFO.phoneHref}>{BRAND_INFO.phoneFormatted}</a>
              </li>
              <li>{BRAND_INFO.hoursSummary}</li>
            </ul>

            <div
              className="social-links-row"
              style={{ marginTop: '1.25rem' }}
              aria-label="Social media profiles"
            >
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                  aria-label={`Visit Marci Metzger on ${social.label}`}
                >
                  <SocialIcon id={social.id} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">{BRAND_INFO.copyright}</p>

          <button
            type="button"
            className="footer-cookie-trigger"
            onClick={onReopenCookieNotice}
          >
            Cookie Notice &amp; Privacy Preferences
          </button>
        </div>
      </div>
    </footer>
  );
}
