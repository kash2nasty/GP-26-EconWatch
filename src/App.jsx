import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import DisclaimerBanner from './components/ui/DisclaimerBanner.jsx';
import ChatBot from './components/chatbot/ChatBot.jsx';
import { useAppStore } from './store/appStore.js';

const HomePage = lazy(() => import('./pages/HomePage.jsx'));
const SearchPage = lazy(() => import('./pages/SearchPage.jsx'));
const ResultsPage = lazy(() => import('./pages/ResultsPage.jsx'));
const ProgramDetailPage = lazy(() => import('./pages/ProgramDetailPage.jsx'));
const DashboardPage = lazy(() => import('./pages/DashboardPage.jsx'));
const AboutPage = lazy(() => import('./pages/AboutPage.jsx'));

function LoadingFallback() {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      height: '60vh', flexDirection: 'column', gap: '1rem'
    }}>
      <div style={{ width: 48, height: 48, border: '4px solid var(--forest-100)',
        borderTopColor: 'var(--forest-500)', borderRadius: '50%',
        animation: 'spin 0.8s linear infinite' }} />
      <p style={{ color: 'var(--slate-400)', fontSize: '0.9rem' }}>Loading...</p>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

export default function App() {
  const chatOpen = useAppStore(s => s.chatOpen);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <DisclaimerBanner />
      <Header />
      <main style={{ flex: 1 }}>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/program/:id" element={<ProgramDetailPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      {chatOpen && <ChatBot />}
    </div>
  );
}