import React from 'react';
import { Link } from 'react-router-dom';

const s = {
  footer: {
    background: 'var(--forest-900)',
    color: 'var(--forest-200)',
    padding: 'var(--space-12) 0 var(--space-8)',
    marginTop: 'auto',
  },
  inner: {
    maxWidth: 'var(--max-width)',
    margin: '0 auto',
    padding: '0 var(--space-6)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: 'var(--space-8)',
    marginBottom: 'var(--space-10)',
  },
  brand: { gridColumn: 'span 1' },
  brandName: {
    fontFamily: 'var(--font-display)',
    fontSize: '1.5rem',
    fontWeight: 800,
    color: 'var(--forest-200)',
    display: 'block',
    marginBottom: 'var(--space-2)',
  },
  brandSub: {
    fontSize: '0.75rem',
    color: 'var(--forest-500)',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    display: 'block',
    marginBottom: 'var(--space-4)',
  },
  brandDesc: { fontSize: '0.875rem', color: 'var(--forest-400)', lineHeight: 1.6 },
  colTitle: {
    fontSize: '0.75rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: 'var(--forest-500)',
    marginBottom: 'var(--space-4)',
  },
  linkList: { listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' },
  footerLink: {
    color: 'var(--forest-300)',
    textDecoration: 'none',
    fontSize: '0.875rem',
    transition: 'color var(--transition-fast)',
  },
  divider: {
    border: 'none',
    borderTop: '1px solid var(--forest-800)',
    margin: '0 0 var(--space-6)',
  },
  bottom: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 'var(--space-4)',
    alignItems: 'flex-start',
  },
  disclaimer: {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid var(--forest-700)',
    borderLeft: '4px solid var(--gold-500)',
    borderRadius: 'var(--radius-md)',
    padding: 'var(--space-4) var(--space-5)',
    fontSize: '0.8rem',
    color: 'var(--forest-300)',
    lineHeight: 1.6,
    maxWidth: '680px',
    marginBottom: 'var(--space-6)',
  },
  copyright: { fontSize: '0.8rem', color: 'var(--forest-600)' },
};

export default function Footer() {
  return (
    <footer style={s.footer} role="contentinfo">
      <div style={s.inner}>
        <div style={s.grid}>
          <div style={s.brand}>
            <span style={s.brandName}>GP EconWatch</span>
            <span style={s.brandSub}>Designed for the Germination Project</span>
            <p style={s.brandDesc}>
              A civic-technology platform helping residents of the Northeastern United States
              navigate financial assistance programs they may qualify for.
            </p>
          </div>

          <div>
            <p style={s.colTitle}>Navigate</p>
            <ul style={s.linkList}>
              {[
                ['/', 'Home'],
                ['/search', 'Find Benefits'],
                ['/results', 'My Results'],
                ['/dashboard', 'Dashboard'],
                ['/about', 'About'],
              ].map(([to, label]) => (
                <li key={to}><Link to={to} style={s.footerLink}>{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <p style={s.colTitle}>Resources</p>
            <ul style={s.linkList}>
              {[
                ['https://www.benefits.gov', 'Benefits.gov'],
                ['https://www.211.org', 'Dial 2-1-1'],
                ['https://www.healthcare.gov', 'Healthcare.gov'],
                ['https://www.ssa.gov', 'Social Security'],
                ['https://www.va.gov', 'Veterans Affairs'],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} target="_blank" rel="noopener noreferrer" style={s.footerLink}>
                    {label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p style={s.colTitle}>States Covered</p>
            <p style={{ fontSize: '0.8rem', color: 'var(--forest-400)', lineHeight: 2 }}>
              CT · DE · MA · MD · ME · NH · NJ · NY · PA · RI · VT · DC
            </p>
            <p style={s.colTitle} className="mt-4">Contact</p>
            <a href="tel:211" style={{ ...s.footerLink, display: 'block', marginBottom: 8 }}>
              Dial 2-1-1 for local help
            </a>
          </div>
        </div>

        <div style={s.disclaimer}>
          <strong style={{ color: 'var(--gold-300)' }}>⚠ Educational Guidance Only</strong>
          <br />
          GP EconWatch provides educational information to help you understand programs you may qualify for.
          This platform does NOT make official eligibility determinations, provide legal advice, or submit applications.
          Final eligibility is determined by the official agencies administering each program.
          Always verify information at official program websites.
        </div>

        <hr style={s.divider} />
        <div style={s.bottom}>
          <p style={s.copyright}>
            © {new Date().getFullYear()} GP EconWatch — Designed for the Germination Project.
            All program information is for educational purposes only.
          </p>
          <p style={{ ...s.copyright, textAlign: 'right' }}>
            Anonymous usage · No data sold · Privacy first
          </p>
        </div>
      </div>
    </footer>
  );
}