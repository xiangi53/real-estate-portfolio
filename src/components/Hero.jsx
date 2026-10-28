import React from 'react';
import { HERO_CONTENT } from '../data/siteContent';

export default function Hero() {
  return (
    <section id="home" className="hero-section" aria-label="Hero introduction">
      <div className="hero-media" aria-hidden="true">
        <img
          src={HERO_CONTENT.image.src}
          alt={HERO_CONTENT.image.alt}
          fetchPriority="high"
        />
        <div className="hero-overlay" />
      </div>

      <div className="container hero-content-wrapper">
        <div className="hero-editorial-stage">
          <p className="hero-eyebrow">{HERO_CONTENT.eyebrow}</p>
          <h1 className="hero-title">{HERO_CONTENT.heading}</h1>
          <p className="hero-subtitle" style={{ marginBottom: 0 }}>
            {HERO_CONTENT.subheading} &bull; THE RIDGE REALTY GROUP
          </p>
        </div>
      </div>
    </section>
  );
}
