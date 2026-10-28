import React from 'react';
import { REALTOR_CONTENT } from '../data/siteContent';

export default function SalesAchievement() {
  const { achievement } = REALTOR_CONTENT;

  return (
    <section
      className="section achievement-section"
      aria-labelledby="achievement-section-heading"
    >
      <div className="container">
        <div className="achievement-editorial-grid">
          <div className="achievement-image-wrap">
            <img
              src={achievement.image.src}
              alt={achievement.image.alt}
              loading="lazy"
            />
          </div>

          <div className="achievement-body">
            <span className="eyebrow eyebrow--light">Proven Market Track Record</span>
            <h2 id="achievement-section-heading" className="achievement-section-title">
              {achievement.sectionTitle}
            </h2>
            <h3 className="achievement-headline">{achievement.headline}</h3>

            <div className="achievement-metrics-strip" aria-label="2021 Historical Sales Highlights">
              <div>
                <span className="achievement-metric-num">Nearly 90</span>
                <span className="achievement-metric-caption">Clients Helped in 2021</span>
              </div>
              <div>
                <span className="achievement-metric-num">$28.5M</span>
                <span className="achievement-metric-caption">Closed in 2021 Sales</span>
              </div>
            </div>

            <div className="achievement-stat-callout">
              <p>{achievement.statHighlight}</p>
            </div>

            <p className="achievement-description">{achievement.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
