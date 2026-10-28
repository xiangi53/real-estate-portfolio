import React from 'react';
import { ArrowRight } from 'lucide-react';
import { GUIDANCE_BLOCKS } from '../data/siteContent';

export default function BuyerSellerGuidance({ onSelectTopic }) {
  const handleGuidanceClick = (block) => {
    if (onSelectTopic) {
      onSelectTopic(
        block.id === 'seller-guidance'
          ? "Hello Marci, I'm interested in selling my home and learning more about your marketing strategy."
          : "Hello Marci, I'm looking to buy a property in the Pahrump area and would love a market analysis."
      );
    }
  };

  return (
    <section
      id="lets-move"
      className="section guidance-section"
      aria-labelledby="guidance-section-heading"
    >
      <div className="container">
        <div className="section-header section-header--split">
          <div>
            <span className="eyebrow">Dedicated Client Representation</span>
            <h2 id="guidance-section-heading">Seller &amp; Buyer Guidance</h2>
          </div>
          <a href="#contact" className="btn btn-outline-dark">
            <span>Schedule a Consultation</span>
          </a>
        </div>

        <div className="guidance-grid">
          {GUIDANCE_BLOCKS.map((block) => (
            <article key={block.id} className="guidance-card">
              <div className="guidance-media">
                <img
                  src={block.image.src}
                  alt={block.image.alt}
                  loading="lazy"
                />
              </div>

              <div className="guidance-content">
                <span className="guidance-badge">{block.audience}</span>
                <h3>{block.heading}</h3>
                {block.subheading && (
                  <p className="guidance-subheading">{block.subheading}</p>
                )}
                <p className="guidance-text">{block.description}</p>

                <div className="guidance-footer">
                  <a
                    href={block.ctaHref}
                    className="btn btn-outline-dark"
                    onClick={() => handleGuidanceClick(block)}
                  >
                    <span>{block.ctaText}</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
