import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/appStore.js';

const QUICK_CATEGORIES = [
  { icon: '🍎', label: 'Food Assistance', desc: 'SNAP, WIC, food banks', path: '/search?cat=food' },
  { icon: '🏠', label: 'Housing Aid', desc: 'Rent help, Section 8, emergency shelter', path: '/search?cat=housing' },
  { icon: '🏥', label: 'Healthcare', desc: 'Medicaid, CHIP, free clinics', path: '/search?cat=healthcare' },
  { icon: '⚡', label: 'Utilities', desc: 'Heating, electric, LIHEAP', path: '/search?cat=utilities' },
  { icon: '♿', label: 'Disability', desc: 'SSDI, SSI, ADA support', path: '/search?cat=disability' },
  { icon: '🎖️', label: 'Veterans', desc: 'VA benefits, housing, healthcare', path: '/search?cat=veterans' },
  { icon: '👶', label: 'Childcare', desc: 'Head Start, WIC, CHIP for kids', path: '/search?cat=childcare' },
  { icon: '💼', label: 'Unemployment', desc: 'UI benefits, job training', path: '/search?cat=workforce' },
  { icon: '🎓', label: 'Education', desc: 'Pell Grants, scholarships', path: '/search?cat=education' },
  { icon: '💰', label: 'Tax Credits', desc: 'EITC, CTC, state credits', path: '/search?cat=tax' },
  { icon: '🚨', label: 'Emergency Aid', desc: 'Crisis assistance, shelters', path: '/search?cat=emergency' },
  { icon: '⚖️', label: 'Legal Aid', desc: 'Free legal services', path: '/search?cat=legal' },
];

const STATES = [
  { abbr: 'CT', name: 'Connecticut' }, { abbr: 'DE', name: 'Delaware' },
  { abbr: 'MA', name: 'Massachusetts' }, { abbr: 'MD', name: 'Maryland' },
  { abbr: 'ME', name: 'Maine' }, { abbr: 'NH', name: 'New Hampshire' },
  { abbr: 'NJ', name: 'New Jersey' }, { abbr: 'NY', name: 'New York' },
  { abbr: 'PA', name: 'Pennsylvania' }, { abbr: 'RI', name: 'Rhode Island' },
  { abbr: 'VT', name: 'Vermont' }, { abbr: 'DC', name: 'Washington DC' },
];

export default function HomePage() {
  const navigate = useNavigate();
  const { updateProfile, profile, language } = useAppStore();

  const t = language === 'es' ? {
    headline: 'Encuentre Beneficios Para Los Que Podría Calificar',
    sub: 'Una guía educativa gratuita de asistencia financiera, vivienda, atención médica y más en el noreste de EE.UU.',
    cta: 'Buscar Beneficios',
    quick: 'Inicio Rápido',
    howTitle: '¿Cómo funciona?',
    disclaimer: 'Esta plataforma proporciona orientación educativa solamente. Las determinaciones finales de elegibilidad son realizadas por las agencias oficiales.',
  } : {
    headline: 'Find Benefits You May Qualify For',
    sub: 'A free educational guide to financial assistance, housing, healthcare, and more across the Northeastern United States.',
    cta: 'Find My Benefits',
    quick: 'Quick Start',
    howTitle: 'How It Works',
    disclaimer: 'This platform provides educational guidance only. Final eligibility determinations are made by the official agencies administering each program.',
  };

  return (
    <div>
      {/* HERO */}
      <section style={{
        background: 'linear-gradient(160deg, var(--forest-800) 0%, var(--forest-700) 50%, var(--forest-600) 100%)',
        padding: 'var(--space-20) 0 var(--space-16)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background texture */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.06,
          backgroundImage: 'radial-gradient(circle at 20% 50%, #fff 1px, transparent 1px), radial-gradient(circle at 80% 20%, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} aria-hidden="true" />

        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          {/* Germination Project badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(255,255,255,0.1)', borderRadius: 'var(--radius-full)',
            border: '1px solid rgba(255,255,255,0.2)',
            padding: '6px 16px', marginBottom: 'var(--space-6)',
          }}>
            <span style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase',
              color: 'var(--forest-200)', fontWeight: 600 }}>
              🌱 Designed for the Germination Project
            </span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.2rem, 6vw, 4rem)',
            color: 'var(--white)',
            fontWeight: 800,
            lineHeight: 1.1,
            maxWidth: 800,
            margin: '0 auto var(--space-6)',
            animation: 'fadeInUp 0.6s ease forwards',
          }}>
            {t.headline}
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: 'var(--forest-100)',
            maxWidth: 640,
            margin: '0 auto var(--space-8)',
            lineHeight: 1.7,
            animation: 'fadeInUp 0.7s 0.1s ease both',
          }}>
            {t.sub}
          </p>

          {/* Quick state selector + CTA */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)',
            justifyContent: 'center', alignItems: 'center',
            animation: 'fadeInUp 0.7s 0.2s ease both',
          }}>
            <select
              value={profile.state}
              onChange={e => updateProfile({ state: e.target.value })}
              style={{
                padding: '14px 20px', fontSize: '1rem',
                borderRadius: 'var(--radius-lg)', border: 'none',
                background: 'rgba(255,255,255,0.95)',
                color: 'var(--slate-900)', fontFamily: 'var(--font-body)',
                minWidth: 200, cursor: 'pointer', fontWeight: 500,
              }}
              aria-label="Select your state"
            >
              <option value="">Select your state…</option>
              {STATES.map(s => (
                <option key={s.abbr} value={s.abbr}>{s.name}</option>
              ))}
            </select>

            <button
              onClick={() => navigate('/search')}
              style={{
                background: 'var(--forest-400)',
                color: 'white',
                border: 'none',
                padding: '14px 32px',
                fontSize: '1rem',
                fontWeight: 700,
                borderRadius: 'var(--radius-lg)',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)',
                boxShadow: 'var(--shadow-green)',
                letterSpacing: '0.01em',
              }}
            >
              {t.cta} →
            </button>
          </div>

          {/* Stats strip */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: 'var(--space-8)',
            justifyContent: 'center', marginTop: 'var(--space-12)',
            animation: 'fadeInUp 0.8s 0.3s ease both',
          }}>
            {[
              ['50+', 'Federal programs'],
              ['12', 'Northeastern states + DC'],
              ['100%', 'Free & anonymous'],
              ['200+', 'Programs in database'],
            ].map(([num, label]) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--forest-300)',
                  fontFamily: 'var(--font-display)' }}>{num}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--forest-300)', opacity: 0.8 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DISCLAIMER BOX */}
      <div style={{ background: 'var(--gold-100)', borderBottom: '1px solid var(--gold-300)' }}>
        <div className="container" style={{ padding: 'var(--space-4) var(--space-6)' }}>
          <p style={{ fontSize: '0.85rem', color: 'var(--earth-700)', textAlign: 'center', margin: 0 }}>
            <strong>⚠️ Educational Guidance Only:</strong> {t.disclaimer}
          </p>
        </div>
      </div>

      {/* QUICK CATEGORY GRID */}
      <section style={{ padding: 'var(--space-16) 0', background: 'var(--white)' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-3)', color: 'var(--forest-800)' }}>
            {t.quick}
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--slate-400)', marginBottom: 'var(--space-10)', fontSize: '0.95rem' }}>
            Browse by category, or <a href="/search">answer a few questions</a> for personalized results
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
            gap: 'var(--space-4)',
          }}>
            {QUICK_CATEGORIES.map(cat => (
              <button
                key={cat.label}
                onClick={() => navigate(cat.path)}
                style={{
                  background: 'var(--slate-50)',
                  border: '1px solid var(--slate-100)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-5)',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all var(--transition-fast)',
                  ':hover': { borderColor: 'var(--forest-300)', background: 'var(--forest-50)' },
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--forest-300)';
                  e.currentTarget.style.background = 'var(--forest-50)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--slate-100)';
                  e.currentTarget.style.background = 'var(--slate-50)';
                  e.currentTarget.style.transform = '';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <div style={{ fontSize: '1.8rem', marginBottom: 'var(--space-2)' }}>{cat.icon}</div>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--forest-800)',
                  marginBottom: 'var(--space-1)' }}>{cat.label}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--slate-400)', lineHeight: 1.4 }}>{cat.desc}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: 'var(--space-16) 0', background: 'var(--forest-50)' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-10)', color: 'var(--forest-800)' }}>
            {t.howTitle}
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 'var(--space-6)',
          }}>
            {[
              { step: '1', icon: '🔒', title: 'Anonymous & Private', desc: 'No account required. Enter only what you\'re comfortable sharing. We never sell or store your personal data.' },
              { step: '2', icon: '📝', title: 'Tell Us Your Situation', desc: 'Answer a few simple questions about your household, income, and needs. Takes about 3 minutes.' },
              { step: '3', icon: '🔍', title: 'See Matching Programs', desc: 'Our system estimates which programs you\'re likely or potentially eligible for across all levels of government.' },
              { step: '4', icon: '🚀', title: 'Apply with Confidence', desc: 'Get plain-language explanations, required documents, and direct links to official application portals.' },
            ].map(item => (
              <div key={item.step} style={{
                background: 'var(--white)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-8)',
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid var(--forest-100)',
                position: 'relative',
              }}>
                <div style={{
                  position: 'absolute', top: -14, left: 24,
                  background: 'var(--forest-500)', color: 'white',
                  width: 28, height: 28, borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.8rem', fontWeight: 800,
                }}>{item.step}</div>
                <div style={{ fontSize: '2rem', marginBottom: 'var(--space-3)', marginTop: 'var(--space-2)' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: 'var(--space-2)', color: 'var(--forest-800)' }}>{item.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--slate-400)', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATES COVERAGE */}
      <section style={{ padding: 'var(--space-12) 0', background: 'var(--white)', borderTop: '1px solid var(--slate-100)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ color: 'var(--slate-400)', fontSize: '0.85rem', marginBottom: 'var(--space-4)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
            Currently covering
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)', justifyContent: 'center' }}>
            {STATES.map(s => (
              <button
                key={s.abbr}
                onClick={() => { updateProfile({ state: s.abbr }); navigate('/search'); }}
                style={{
                  background: 'var(--forest-50)',
                  border: '1px solid var(--forest-200)',
                  borderRadius: 'var(--radius-md)',
                  padding: '6px 14px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: 'var(--forest-700)',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--forest-200)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--forest-50)'; }}
              >
                {s.abbr} · {s.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{
        background: 'linear-gradient(135deg, var(--forest-700), var(--forest-500))',
        padding: 'var(--space-16) 0',
        textAlign: 'center',
      }}>
        <div className="container">
          <h2 style={{ color: 'white', marginBottom: 'var(--space-4)', fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
            You may be leaving money on the table
          </h2>
          <p style={{ color: 'var(--forest-100)', marginBottom: 'var(--space-8)', maxWidth: 520, margin: '0 auto var(--space-8)' }}>
            Millions of eligible residents don't receive benefits they qualify for.
            It takes about 3 minutes to find out what you may be eligible for.
          </p>
          <button
            onClick={() => navigate('/search')}
            style={{
              background: 'white', color: 'var(--forest-700)',
              border: 'none', padding: '16px 40px',
              fontSize: '1.1rem', fontWeight: 700,
              borderRadius: 'var(--radius-full)',
              cursor: 'pointer', boxShadow: 'var(--shadow-xl)',
            }}
          >
            Start Free Benefits Check →
          </button>
          <p style={{ color: 'var(--forest-200)', fontSize: '0.8rem', marginTop: 'var(--space-4)' }}>
            100% free · Anonymous · No account required
          </p>
        </div>
      </section>
    </div>
  );
}