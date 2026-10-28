import React from 'react';
import { Cookie } from 'lucide-react';
import { COOKIE_NOTICE } from '../data/siteContent';

export default function CookieNotice({ isVisible, onAccept }) {
  if (!isVisible) return null;

  return (
    <aside
      className="cookie-banner"
      role="region"
      aria-label="Cookie consent notice"
    >
      <h4>
        <Cookie
          size={17}
          aria-hidden="true"
          style={{
            display: 'inline',
            verticalAlign: 'text-bottom',
            marginRight: '0.45rem',
            color: 'var(--color-accent-light)',
          }}
        />
        {COOKIE_NOTICE.heading}
      </h4>
      <p>{COOKIE_NOTICE.description}</p>
      <div className="cookie-banner-actions">
        <button
          type="button"
          className="btn btn-light"
          style={{ minHeight: '38px', padding: '0.5rem 1.25rem', fontSize: '0.78rem' }}
          onClick={onAccept}
        >
          {COOKIE_NOTICE.acceptLabel}
        </button>
      </div>
    </aside>
  );
}
