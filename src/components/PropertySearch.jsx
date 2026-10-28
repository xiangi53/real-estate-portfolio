import React, { useState } from 'react';
import { Search, RotateCcw } from 'lucide-react';
import { PROPERTY_SEARCH_CONFIG } from '../data/siteContent';

const INITIAL_FILTERS = {
  location: '',
  type: '',
  sortBy: 'newest',
  bedrooms: '',
  baths: '',
  minPrice: '',
  maxPrice: '',
};

export default function PropertySearch({ onApplyCriteriaToContact }) {
  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const [priceError, setPriceError] = useState('');
  const [submittedCriteria, setSubmittedCriteria] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
    if (name === 'minPrice' || name === 'maxPrice') {
      setPriceError('');
    }
  };

  const formatCurrencyInput = (raw) => {
    const digits = String(raw).replace(/[^0-9]/g, '');
    if (!digits) return null;
    return Number(digits);
  };

  const handleReset = () => {
    setFilters(INITIAL_FILTERS);
    setPriceError('');
    setSubmittedCriteria(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const minVal = formatCurrencyInput(filters.minPrice);
    const maxVal = formatCurrencyInput(filters.maxPrice);

    if (minVal !== null && maxVal !== null && minVal > maxVal) {
      setPriceError('Minimum price cannot exceed maximum price.');
      setSubmittedCriteria(null);
      return;
    }

    setPriceError('');

    const sortLabel =
      PROPERTY_SEARCH_CONFIG.sortOptions.find((opt) => opt.value === filters.sortBy)?.label ||
      'Newest';

    const summaryParts = [
      filters.location || 'All Locations',
      filters.type || 'All Property Types',
      filters.bedrooms ? `${filters.bedrooms} Beds` : 'Any Beds',
      filters.baths ? `${filters.baths} Baths` : 'Any Baths',
      minVal !== null ? `Min $${minVal.toLocaleString()}` : null,
      maxVal !== null ? `Max $${maxVal.toLocaleString()}` : null,
      `Sorted by ${sortLabel}`,
    ].filter(Boolean);

    setSubmittedCriteria(summaryParts.join('  •  '));
  };

  const handleRequestListings = () => {
    if (!submittedCriteria || !onApplyCriteriaToContact) return;
    onApplyCriteriaToContact(
      `Hello Marci, I am interested in properties matching: ${submittedCriteria}. Please let me know what listings are available.`
    );
  };

  return (
    <section
      id="listings"
      className="search-section"
      aria-labelledby="property-search-heading"
    >
      <div className="search-bg-media" aria-hidden="true">
        <img
          src={PROPERTY_SEARCH_CONFIG.backgroundImage.src}
          alt={PROPERTY_SEARCH_CONFIG.backgroundImage.alt}
          loading="lazy"
        />
        <div className="search-bg-overlay" />
      </div>

      <div className="container search-container">
        <div className="search-simple-header">
          <span className="eyebrow eyebrow--light">{PROPERTY_SEARCH_CONFIG.subheading}</span>
          <h2 id="property-search-heading">{PROPERTY_SEARCH_CONFIG.heading}</h2>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="search-simple-form"
          aria-label="Search Listings Form"
        >
          <div className="search-simple-grid">
            <div className="search-simple-field">
              <label htmlFor="search-location" className="search-simple-label">
                Location
              </label>
              <select
                id="search-location"
                name="location"
                className="search-simple-select"
                value={filters.location}
                onChange={handleChange}
              >
                {PROPERTY_SEARCH_CONFIG.locations.map((loc) => (
                  <option key={loc.label} value={loc.value}>
                    {loc.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="search-simple-field">
              <label htmlFor="search-type" className="search-simple-label">
                Property Type
              </label>
              <select
                id="search-type"
                name="type"
                className="search-simple-select"
                value={filters.type}
                onChange={handleChange}
              >
                {PROPERTY_SEARCH_CONFIG.types.map((t) => (
                  <option key={t.label} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="search-simple-field">
              <label htmlFor="search-sort" className="search-simple-label">
                Sort By
              </label>
              <select
                id="search-sort"
                name="sortBy"
                className="search-simple-select"
                value={filters.sortBy}
                onChange={handleChange}
              >
                {PROPERTY_SEARCH_CONFIG.sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="search-simple-field">
              <label htmlFor="search-bedrooms" className="search-simple-label">
                Bedrooms
              </label>
              <select
                id="search-bedrooms"
                name="bedrooms"
                className="search-simple-select"
                value={filters.bedrooms}
                onChange={handleChange}
              >
                {PROPERTY_SEARCH_CONFIG.bedrooms.map((bed) => (
                  <option key={bed.label} value={bed.value}>
                    {bed.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="search-simple-field">
              <label htmlFor="search-baths" className="search-simple-label">
                Baths
              </label>
              <select
                id="search-baths"
                name="baths"
                className="search-simple-select"
                value={filters.baths}
                onChange={handleChange}
              >
                {PROPERTY_SEARCH_CONFIG.baths.map((bath) => (
                  <option key={bath.label} value={bath.value}>
                    {bath.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="search-simple-field">
              <label htmlFor="search-min-price" className="search-simple-label">
                Min Price ($)
              </label>
              <input
                id="search-min-price"
                name="minPrice"
                type="text"
                inputMode="numeric"
                placeholder="No Minimum"
                className="search-simple-input"
                value={filters.minPrice}
                onChange={handleChange}
                aria-invalid={Boolean(priceError)}
              />
            </div>

            <div className="search-simple-field">
              <label htmlFor="search-max-price" className="search-simple-label">
                Max Price ($)
              </label>
              <input
                id="search-max-price"
                name="maxPrice"
                type="text"
                inputMode="numeric"
                placeholder="No Maximum"
                className="search-simple-input"
                value={filters.maxPrice}
                onChange={handleChange}
                aria-invalid={Boolean(priceError)}
              />
            </div>

            <div className="search-simple-actions">
              <button type="submit" className="search-simple-submit">
                <Search size={15} aria-hidden="true" />
                <span>{PROPERTY_SEARCH_CONFIG.buttonLabel}</span>
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="search-simple-reset"
                title="Reset Filters"
              >
                <RotateCcw size={13} aria-hidden="true" />
                <span>Reset</span>
              </button>
            </div>
          </div>

          {priceError && (
            <p className="search-simple-error" role="alert">
              {priceError}
            </p>
          )}

          {submittedCriteria && (
            <div className="search-simple-result" role="status" aria-live="polite">
              <span className="search-simple-result-text">{submittedCriteria}</span>
              <a
                href="#contact"
                className="search-simple-result-link"
                onClick={handleRequestListings}
              >
                Inquire About Matching Properties →
              </a>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
