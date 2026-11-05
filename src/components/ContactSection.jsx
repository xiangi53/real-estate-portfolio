import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  ChevronDown,
  ChevronUp,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  ArrowUpRight,
} from 'lucide-react';
import { BRAND_INFO, OFFICE_HOURS, REALTOR_CONTENT } from '../data/siteContent';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const INQUIRY_TOPICS = [
  'Buying a Home',
  'Selling a Property',
  'Private Showing',
  'Market Valuation',
];

export default function ContactSection({ prefilledMessage, onClearPrefilledMessage }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [selectedTopic, setSelectedTopic] = useState('Buying a Home');
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showAllHours, setShowAllHours] = useState(false);

  const currentDayIndex = new Date().getDay();

  useEffect(() => {
    if (prefilledMessage) {
      setFormData((prev) => ({ ...prev, message: prefilledMessage }));
      setErrors((prev) => ({ ...prev, message: '' }));
      setSubmitStatus(null);
      if (onClearPrefilledMessage) {
        onClearPrefilledMessage();
      }
    }
  }, [prefilledMessage, onClearPrefilledMessage]);

  const validateForm = () => {
    const nextErrors = {};
    if (!formData.name.trim()) {
      nextErrors.name = 'Please enter your name.';
    }
    if (!formData.email.trim()) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!EMAIL_REGEX.test(formData.email.trim())) {
      nextErrors.email = 'Please enter a valid email address (e.g. name@example.com).';
    }
    if (!formData.message.trim()) {
      nextErrors.message = 'Please enter a message so we know how to help.';
    }
    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitStatus({
        type: 'error',
        title: 'Please check the highlighted fields below.',
        detail: 'Name, a valid Email address, and Message are required.',
      });
      return;
    }

    setErrors({});
    setSubmitStatus({
      type: 'success',
      submittedName: formData.name.trim(),
      submittedEmail: formData.email.trim(),
      submittedMessage: formData.message.trim(),
      submittedTopic: selectedTopic,
    });
  };

  const mailtoFallbackHref = `mailto:?subject=${encodeURIComponent(
    `${selectedTopic} Inquiry from ${formData.name || 'Website Visitor'}`
  )}&body=${encodeURIComponent(
    `Topic: ${selectedTopic}\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'Not provided'}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section
      id="contact"
      className="section contact-section"
      aria-labelledby="contact-section-heading"
    >
      <div className="container">
        <div className="contact-editorial-intro">
          <div>
            <span className="eyebrow">Get in Touch</span>
            <h2 id="contact-section-heading">Call or Visit</h2>
          </div>
          <p className="contact-editorial-lead">
            Available daily for private property tours, residential and commercial consultations,
            and comprehensive Pahrump market valuations.
          </p>
        </div>

        {/* Two-Tone Architectural Monolith: Dark Concierge Dossier + Crisp White Inquiry Salon */}
        <div className="contact-monolith">
          {/* Left Panel: Dark Charcoal Concierge Dossier & Interactive Map */}
          <div className="contact-dossier">
            <div className="contact-dossier-top">
              <div className="contact-agent-badge">
                <img
                  src={REALTOR_CONTENT.portrait.src}
                  alt={REALTOR_CONTENT.portrait.alt}
                  className="contact-agent-avatar"
                  loading="lazy"
                />
                <div>
                  <span className="contact-dossier-kicker">Private Client Concierge</span>
                  <h3>{BRAND_INFO.businessName}</h3>
                </div>
              </div>

              {/* Statement Direct Line Block */}
              <div className="contact-direct-highlight">
                <span className="contact-direct-label">Direct Line &amp; Text</span>
                <a href={BRAND_INFO.phoneHref} className="contact-direct-number">
                  {BRAND_INFO.phoneFormatted}
                </a>
                <div className="contact-direct-actions">
                  <a href={BRAND_INFO.phoneHref} className="contact-pill-action primary">
                    <Phone size={13} aria-hidden="true" />
                    <span>Call Direct</span>
                  </a>
                  <a
                    href={BRAND_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-pill-action"
                  >
                    <MessageCircle size={13} aria-hidden="true" />
                    <span>Message on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Hairline Metadata Cells: Office Address & Office Hours */}
              <div className="contact-dossier-meta-grid">
                <div className="contact-meta-block">
                  <div className="contact-meta-heading">
                    <MapPin size={14} aria-hidden="true" />
                    <span>Office Location</span>
                  </div>
                  <p className="contact-meta-text">{BRAND_INFO.address}</p>
                  <a
                    href={BRAND_INFO.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-inline-link"
                  >
                    <span>Get Directions</span>
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                </div>

                <div className="contact-meta-block">
                  <div className="contact-meta-heading">
                    <Clock size={14} aria-hidden="true" />
                    <span>Office Hours</span>
                  </div>
                  <p className="contact-meta-text">
                    <strong>{BRAND_INFO.hoursSummary}</strong>
                  </p>
                  <p className="contact-meta-subnote">{BRAND_INFO.hoursNote}</p>

                  <button
                    type="button"
                    className="contact-hours-trigger"
                    aria-expanded={showAllHours}
                    onClick={() => setShowAllHours((prev) => !prev)}
                  >
                    <span>{showAllHours ? 'Hide Weekly Hours' : 'View Weekly Schedule'}</span>
                    {showAllHours ? (
                      <ChevronUp size={13} aria-hidden="true" />
                    ) : (
                      <ChevronDown size={13} aria-hidden="true" />
                    )}
                  </button>
                </div>
              </div>

              {showAllHours && (
                <ul className="contact-dark-hours-list" aria-label="Weekly office hours">
                  {OFFICE_HOURS.map((item) => {
                    const isToday = item.dayIndex === currentDayIndex;
                    return (
                      <li
                        key={item.day}
                        className={`contact-dark-hours-row${isToday ? ' today' : ''}`}
                      >
                        <span>
                          {item.day} {isToday ? '(Today)' : ''}
                        </span>
                        <span>{item.hours}</span>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            {/* Integrated Interactive Map Window */}
            <div className="contact-map-showcase">
              <iframe
                title="Office Location Map — 3190 HW-160, Suite F, Pahrump, NV 89048"
                src={BRAND_INFO.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="contact-map-iframe"
              />
              <a
                href={BRAND_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-map-floating-btn"
              >
                <Navigation size={13} aria-hidden="true" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>

          {/* Right Panel: Crisp White Bespoke Inquiry Salon */}
          <div className="contact-salon">
            <div className="contact-salon-header">
              <span className="eyebrow">Direct Inquiry</span>
              <h3>Send Message</h3>
              <p className="contact-form-intro">
                Select a topic below and share a few details about your goals—Marci responds
                personally to every inquiry.
              </p>
            </div>

            {/* Interactive Topic Selector Pills */}
            <div className="contact-topic-group" role="group" aria-label="Inquiry Topic">
              {INQUIRY_TOPICS.map((topic) => (
                <button
                  key={topic}
                  type="button"
                  onClick={() => setSelectedTopic(topic)}
                  className={`contact-topic-pill${selectedTopic === topic ? ' active' : ''}`}
                >
                  {topic}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} noValidate aria-label="Contact Marci Metzger">
              <div className="contact-form-stack">
                <div className="contact-form-row-2col">
                  <div className="form-group">
                    <label htmlFor="contact-name" className="form-label">
                      Name <span className="required-star" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Your full name"
                      className={`form-input${errors.name ? ' input-error' : ''}`}
                      value={formData.name}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'contact-name-error' : undefined}
                    />
                    {errors.name && (
                      <span id="contact-name-error" className="field-error-msg" role="alert">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-phone" className="form-label">
                      Phone <span style={{ fontWeight: 400, color: 'var(--color-muted)' }}>(Optional)</span>
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="(206) 555-0199"
                      className="form-input"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">
                    Email <span className="required-star" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className={`form-input${errors.email ? ' input-error' : ''}`}
                    value={formData.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'contact-email-error' : undefined}
                  />
                  {errors.email && (
                    <span id="contact-email-error" className="field-error-msg" role="alert">
                      {errors.email}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">
                    Message <span className="required-star" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell Marci how she can help with your real estate goals..."
                    className={`form-textarea${errors.message ? ' input-error' : ''}`}
                    value={formData.message}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'contact-message-error' : undefined}
                  />
                  {errors.message && (
                    <span id="contact-message-error" className="field-error-msg" role="alert">
                      {errors.message}
                    </span>
                  )}
                </div>

                <button type="submit" className="btn btn-primary contact-submit-btn">
                  <Send size={15} aria-hidden="true" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>

            {submitStatus?.type === 'error' && (
              <div className="form-status-alert error" role="alert">
                <p>
                  <AlertCircle
                    size={16}
                    aria-hidden="true"
                    style={{ display: 'inline', verticalAlign: 'text-bottom', marginRight: '0.4rem' }}
                  />
                  <strong>{submitStatus.title}</strong>
                </p>
                <p>{submitStatus.detail}</p>
              </div>
            )}

            {submitStatus?.type === 'success' && (
              <div className="form-status-alert success" role="status" aria-live="polite">
                <p>
                  <CheckCircle2
                    size={17}
                    aria-hidden="true"
                    style={{ display: 'inline', verticalAlign: 'text-bottom', marginRight: '0.4rem' }}
                  />
                  <strong>Thank you, {submitStatus.submittedName}</strong>
                </p>
                <p style={{ marginTop: '0.35rem' }}>
                  Your <strong>{submitStatus.submittedTopic}</strong> inquiry is ready. To connect
                  immediately with Marci Metzger, call{' '}
                  <a
                    href={BRAND_INFO.phoneHref}
                    style={{ fontWeight: 700, textDecoration: 'underline' }}
                  >
                    {BRAND_INFO.phoneFormatted}
                  </a>{' '}
                  or{' '}
                  <a
                    href={mailtoFallbackHref}
                    style={{ fontWeight: 700, textDecoration: 'underline' }}
                  >
                    dispatch via email
                  </a>
                  .
                </p>
              </div>
            )}

            <p className="recaptcha-disclaimer">
              This site is protected by reCAPTCHA and the Google{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>{' '}
              and{' '}
              <a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms of Service
              </a>{' '}
              apply.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
