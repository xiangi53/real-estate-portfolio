import React from 'react';
import { SERVICES_CONTENT } from '../data/siteContent';

export default function Services() {
  return (
    <section
      id="services"
      className="section services-section"
      aria-labelledby="services-section-heading"
    >
      <div className="container">
        <div className="section-header section-header--split">
          <div>
            <span className="eyebrow">Full-Service Brokerage</span>
            <h2 id="services-section-heading">{SERVICES_CONTENT.sectionHeading}</h2>
          </div>
          <a href="#contact" className="btn btn-outline-dark">
            <span>Connect With Our Team</span>
          </a>
        </div>

        <div className="services-grid">
          {SERVICES_CONTENT.items.map((service) => (
            <article key={service.id} className="service-card">
              <div className="service-media">
                <img
                  src={service.image.src}
                  alt={service.image.alt}
                  loading="lazy"
                />
              </div>

              <div className="service-body">
                {service.subheading && (
                  <p className="service-subtitle">{service.subheading}</p>
                )}
                <h3>{service.heading}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
