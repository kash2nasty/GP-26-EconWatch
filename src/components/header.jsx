import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAppStore } from '../../store/appStore.js';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/search', label: 'Find Benefits' },
  { to: '/results', label: 'My Results' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/about', label: 'About' },
];

const styles = {
  header: {
    background: 'var(--forest-800)',
    borderBottom: '1px solid var(--forest-700)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    height: 'var(--header-height)',
  },
  inner: {
    maxWidth: 'var(--max-width)',
    margin: '0 auto',
    padding: '0 var(--space-6)',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 'var(--space-6)',
  },
  logoGroup: {
    display: 'flex',
    flexDirection: 'column',
    textDecoration: 'none',
  },
  logoName: {
    fontFamily: 'var(--font-display)',
    fontSize: '1.4rem',
    fontWeight: 800,
    color: 'var(--forest-200)',
    letterSpacing: '-0.02em',
    lineHeight: 1,
  },
  logoSub: {
    fontSize: '0.65rem',
    color: 'var(--forest-400)',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    fontWeight: 500,
  },
  nav: {
    display: 'flex',
    gap: 'var(--space-1)',
    alignItems: 'center',
  },
  navLink: (active) => ({
    padding: '6px 14px',
    borderRadius: 'var(--radius-full)',
    fontSize: '0.875rem',
    fontWeight: 500,
    color: active ? 'var(--white)' : 'var(--forest-200)',
    background: active ? 'var(--forest-600)' : 'transparent',
    textDecoration: 'none',
    transition: 'all var(--transition-fast)',
  }),
  actions: {
    display: 'flex',
    gap: 'var(--space-2)',
    alignItems: 'center',
  },
  chatBtn: {
    background: 'var(--forest-500)',
    color: 'white',
    border: 'none',
    borderRadius: 'var(--radius-full)',
    padding: '8px 16px',
    fontSize: '0.8rem',
    fontWeight: 600,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    transition: 'background var(--transition-fast)',
  },
  langBtn: {
    background: 'transparent',
    border: '1px solid var(--forest-600)',
    color: 'var(--forest-200)',
    borderRadius: 'var(--radius-full)',
    padding: '6px 12px',
    fontSize: '0.8rem',
    cursor: 'pointer',
  },
  mobileMenuBtn: {
    background: 'transparent',
    border: 'none',
    color: 'var(--forest-200)',
    cursor: 'pointer',
    padding: '8px',
    fontSize: '1.5rem',
    display: 'none',
  },
};

export default function Header() {
  const location = useLocation();
  const { language, setLanguage, toggleChat } = useAppStore();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header style={styles.header} role="banner">
        <div style={styles.inner}>
          <Link to="/" style={styles.logoGroup} aria-label="GP EconWatch Home">
            <span style={styles.logoName}>GP EconWatch</span>
            <span style={styles.logoSub}>Designed for the Germination Project</span>
          </Link>

          <nav style={styles.nav} aria-label="Main navigation">
            {NAV_LINKS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                style={styles.navLink(location.pathname === to)}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div style={styles.actions}>
            <button
              style={styles.langBtn}
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              aria-label={`Switch to ${language === 'en' ? 'Spanish' : 'English'}`}
            >
              {language === 'en' ? 'ES' : 'EN'}
            </button>
            <button
              style={styles.chatBtn}
              onClick={toggleChat}
              aria-label="Open AI assistant"
            >
              <span>💬</span>
              <span>Ask AI</span>
            </button>
          </div>
        </div>
      </header>

      <style>{`
        @media (max-width: 768px) {
          nav { display: none !important; }
        }
      `}</style>
    </>
  );
}