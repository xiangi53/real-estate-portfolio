import React from 'react';
import { Phone } from 'lucide-react';
import { BRAND_INFO, REALTOR_CONTENT, AFFILIATIONS } from '../data/siteContent';

export default function RealtorIntro() {
  return (
    <section
      id="about-us"
      className="section realtor-intro-section"
      aria-labelledby="realtor-intro-heading"
    >
      <div className="container">
        <div className="realtor-profile-grid">
          <div className="realtor-bio-content">
            <span className="eyebrow">The Ridge Realty Group &bull; Pahrump Realtor</span>
            <h2 id="realtor-intro-heading" className="realtor-name-heading">
              {REALTOR_CONTENT.heading}
            </h2>
            <p className="realtor-credential">{REALTOR_CONTENT.subheading}</p>

            <div className="realtor-bio-verbiage">
              <p>
                {REALTOR_CONTENT.achievement.description}
              </p>
              <p>
                With nearly three decades of real estate experience, Marci Metzger and The Ridge
                Realty Group provide dedicated representation for residential and commercial buyers,
                sellers, and investors throughout Pahrump, Nevada.
              </p>
            </div>

            <div className="realtor-cta-bar">
              <a href={BRAND_INFO.phoneHref} className="btn btn-primary">
                <Phone size={14} aria-hidden="true" />
                <span>CALL NOW</span>
              </a>
              <a href={BRAND_INFO.phoneHref} className="realtor-phone-number">
                {REALTOR_CONTENT.phone}
              </a>
            </div>
          </div>

          <div className="realtor-portrait-frame">
            <img
              src={REALTOR_CONTENT.portrait.src}
              alt={REALTOR_CONTENT.portrait.alt}
              className="realtor-portrait-img"
              width="529"
              height="640"
              loading="lazy"
            />
          </div>
        </div>

        <div className="affiliation-bar" aria-label="Brokerage and Industry Affiliations">
          <p className="affiliation-title">Brokerage &amp; Professional Affiliations</p>
          <div className="affiliation-logos">
            {AFFILIATIONS.map((partner) => (
              <div key={partner.id} className="affiliation-logo-item">
                <img
                  src={partner.src}
                  alt={partner.alt}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
