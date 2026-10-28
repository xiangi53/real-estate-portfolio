import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { GALLERY_IMAGES } from '../data/siteContent';

export default function PhotoGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const totalImages = GALLERY_IMAGES.length;
  const activeImage = GALLERY_IMAGES[activeIndex];
  const prevIndex = (activeIndex - 1 + totalImages) % totalImages;
  const nextIndex = (activeIndex + 1) % totalImages;

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalImages) % totalImages);
  }, [totalImages]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalImages);
  }, [totalImages]);

  useEffect(() => {
    if (!lightboxOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setLightboxOpen(false);
      } else if (event.key === 'ArrowLeft') {
        handlePrev();
      } else if (event.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, handlePrev, handleNext]);

  const handleStageKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      handlePrev();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      handleNext();
    }
  };

  const formatIndex = (idx) => String(idx + 1).padStart(2, '0');
  const [propertyName, propertyDetail] = activeImage.title.split(' — ');

  return (
    <section
      id="gallery"
      className="section gallery-section"
      aria-labelledby="photo-gallery-heading"
    >
      {/* Top Editorial Header */}
      <div className="container">
        <div className="section-header section-header--split section-header--split-dark">
          <div>
            <span className="eyebrow eyebrow--light">Pahrump Homes &amp; Communities</span>
            <h2 id="photo-gallery-heading">Photo Gallery</h2>
          </div>

          <div className="gallery-header-controls">
            <div className="gallery-progress-meta" aria-live="polite">
              <span className="gallery-progress-num">{formatIndex(activeIndex)}</span>
              <span className="gallery-progress-bar">
                <span
                  className="gallery-progress-fill"
                  style={{ width: `${((activeIndex + 1) / totalImages) * 100}%` }}
                />
              </span>
              <span className="gallery-progress-total">{formatIndex(totalImages - 1)}</span>
            </div>

            <div className="gallery-top-arrows">
              <button
                type="button"
                className="gallery-nav-btn prev"
                onClick={handlePrev}
                aria-label="Previous gallery photograph"
              >
                <ChevronLeft size={18} aria-hidden="true" />
              </button>
              <button
                type="button"
                className="gallery-nav-btn next"
                onClick={handleNext}
                aria-label="Next gallery photograph"
              >
                <ChevronRight size={18} aria-hidden="true" />
              </button>
            </div>

            <button
              type="button"
              className="btn btn-outline-light gallery-fullscreen-trigger"
              onClick={() => setLightboxOpen(true)}
            >
              <Maximize2 size={13} aria-hidden="true" />
              <span>Fullscreen</span>
            </button>
          </div>
        </div>
      </div>

      {/* Full-Bleed Center-Stage Peek Carousel */}
      <div
        className="gallery-showcase"
        tabIndex={0}
        onKeyDown={handleStageKeyDown}
        aria-roledescription="carousel"
        aria-label="Featured Pahrump Property Photographs"
      >
        <div className="gallery-peek-viewport">
          {/* Left Peek Slide (Previous) */}
          <div
            className="gallery-peek-card gallery-peek-card--prev"
            onClick={handlePrev}
            aria-hidden="true"
            title="View previous photograph"
          >
            <img
              src={GALLERY_IMAGES[prevIndex].src}
              alt=""
              loading="lazy"
            />
            <div className="gallery-peek-dimmer">
              <span className="gallery-peek-hint">
                <ChevronLeft size={20} />
              </span>
            </div>
          </div>

          {/* Center Active Stage */}
          <div className="gallery-main-stage">
            <img
              key={activeImage.id}
              src={activeImage.src}
              alt={activeImage.alt}
              className="gallery-main-image"
              onClick={() => setLightboxOpen(true)}
            />

            <button
              type="button"
              className="gallery-expand-btn"
              onClick={() => setLightboxOpen(true)}
              aria-label={`View full-size photograph: ${activeImage.title}`}
            >
              <Maximize2 size={13} aria-hidden="true" />
              <span>Expand Photo</span>
            </button>
          </div>

          {/* Right Peek Slide (Next) */}
          <div
            className="gallery-peek-card gallery-peek-card--next"
            onClick={handleNext}
            aria-hidden="true"
            title="View next photograph"
          >
            <img
              src={GALLERY_IMAGES[nextIndex].src}
              alt=""
              loading="lazy"
            />
            <div className="gallery-peek-dimmer">
              <span className="gallery-peek-hint">
                <ChevronRight size={20} />
              </span>
            </div>
          </div>
        </div>

        {/* Below-Stage Editorial Caption */}
        <div className="container">
          <div className="gallery-editorial-footer">
            <div className="gallery-caption-bar" aria-live="polite" style={{ borderBottom: 'none', marginBottom: 0, paddingBottom: 0 }}>
              <span className="gallery-caption-index">{formatIndex(activeIndex)}</span>
              <div className="gallery-caption-body">
                <p className="gallery-caption-text">{activeImage.title}</p>
                <span className="gallery-caption-sub">
                  {propertyDetail ? `${propertyName} • ${activeImage.location}` : activeImage.location}
                </span>
              </div>
              <span className="gallery-counter">
                {activeIndex + 1} / {totalImages}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="lightbox-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={`Full-screen photo viewer: ${activeImage.title}`}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setLightboxOpen(false);
            }
          }}
        >
          <div className="lightbox-header">
            <span className="lightbox-meta">
              Photo {formatIndex(activeIndex)} / {formatIndex(totalImages - 1)} &mdash; {activeImage.location}
            </span>
            <button
              type="button"
              className="lightbox-close-btn"
              onClick={() => setLightboxOpen(false)}
              aria-label="Close full-screen photo viewer"
            >
              <X size={15} aria-hidden="true" />
              <span>Close (Esc)</span>
            </button>
          </div>

          <div className="lightbox-stage">
            <button
              type="button"
              className="lightbox-arrow prev"
              onClick={handlePrev}
              aria-label="Previous photo in lightbox"
            >
              <ChevronLeft size={22} aria-hidden="true" />
            </button>

            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="lightbox-img"
            />

            <button
              type="button"
              className="lightbox-arrow next"
              onClick={handleNext}
              aria-label="Next photo in lightbox"
            >
              <ChevronRight size={22} aria-hidden="true" />
            </button>
          </div>

          <div className="lightbox-caption">
            <p>{activeImage.title}</p>
          </div>
        </div>
      )}
    </section>
  );
}
