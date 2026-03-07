import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import { useTranslation } from 'react-i18next';
import './index.css';

function App() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
      </main>

      <footer className="footer" style={{ textAlign: 'center', padding: '3.5rem 5% 2.5rem', borderTop: '1px solid rgba(255,255,255,0.05)', background: '#080b12', color: 'var(--text-secondary)' }}>
        <p style={{ fontSize: '0.95rem' }}>© {new Date().getFullYear()} Tadeáš Bendák - YourChess</p>
      </footer>
    </>
  );
}

export default App;
