import React, { useState } from 'react';

export default function DisclaimerBanner() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;

  return (
    <div
      role="alert"
      aria-live="polite"
      style={{
        background: 'linear-gradient(135deg, #FFF8E1, #FFF3CD)',
        borderBottom: '2px solid #D4A017',
        padding: '10px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '12px',
        fontSize: '0.825rem',
        color: '#5C3D1A',
        flexWrap: 'wrap',
      }}
    >
      <p style={{ margin: 0, lineHeight: 1.5, flex: 1 }}>
        <strong>📋 Educational Guidance Only:</strong>{' '}
        This platform provides educational guidance only. Final eligibility determinations are made
        by the official agencies administering each program. We do not submit applications or provide legal advice.
      </p>
      <button
        onClick={() => setDismissed(true)}
        aria-label="Dismiss disclaimer"
        style={{
          background: 'transparent',
          border: '1px solid #A06B33',
          borderRadius: '50%',
          width: 28,
          height: 28,
          cursor: 'pointer',
          color: '#A06B33',
          fontSize: '1rem',
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        ×
      </button>
    </div>
  );
}