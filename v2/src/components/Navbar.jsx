import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setIsOpen(false);
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0b0f19]/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`} style={{
            position: 'fixed', top: 0, width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: scrolled ? '1rem 5%' : '1.5rem 5%', zIndex: 1000,
            background: scrolled ? 'rgba(11, 15, 25, 0.8)' : 'transparent',
            backdropFilter: scrolled ? 'blur(20px)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
            boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none',
            transition: 'all 0.3s ease'
        }}>
            <a href="#" className="logo" style={{ textDecoration: 'none' }}>YourChess</a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                <ul style={{ listStyle: 'none', display: 'flex', gap: '2rem', margin: 0, padding: 0 }}>
                    <li><a href="#who-for" style={{ color: 'var(--text-secondary)', fontWeight: 700, fontSize: '1rem' }} className="hover:text-white transition-colors">{t('nav_who_for')}</a></li>
                    <li><a href="#package" style={{ color: 'var(--text-secondary)', fontWeight: 700, fontSize: '1rem' }} className="hover:text-white transition-colors">{t('nav_package')}</a></li>
                    <li><a href="#support" style={{ color: 'var(--text-secondary)', fontWeight: 700, fontSize: '1rem' }} className="hover:text-white transition-colors">{t('nav_support')}</a></li>
                    <li><a href="#video-promo" style={{ color: 'var(--text-secondary)', fontWeight: 700, fontSize: '1rem' }} className="hover:text-white transition-colors">{t('nav_video')}</a></li>
                    <li><a href="#vision" style={{ color: 'var(--text-secondary)', fontWeight: 700, fontSize: '1rem' }} className="hover:text-white transition-colors">{t('nav_vision')}</a></li>
                </ul>
                <div style={{ display: 'flex', gap: '0.5rem', fontWeight: 700, fontSize: '0.95rem' }}>
                    <button onClick={() => changeLanguage('cs')} style={{ background: 'none', border: 'none', color: i18n.language === 'cs' ? 'var(--accent-gold)' : 'var(--text-secondary)', cursor: 'pointer', borderBottom: i18n.language === 'cs' ? '2px solid var(--accent-gold)' : 'none' }}>CZ</button>
                    <span style={{ color: 'var(--text-secondary)' }}>|</span>
                    <button onClick={() => changeLanguage('en')} style={{ background: 'none', border: 'none', color: i18n.language === 'en' ? 'var(--accent-gold)' : 'var(--text-secondary)', cursor: 'pointer', borderBottom: i18n.language === 'en' ? '2px solid var(--accent-gold)' : 'none' }}>EN</button>
                </div>
            </div>

            {/* Mobile Menu Button - simplified logic for modular CSS */}
            <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)} style={{ display: 'none', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }} id="mobile-menu-btn">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            <style>{`
        @media (max-width: 900px) {
            #mobile-menu-btn { display: block !important; }
            .md\\:flex { display: none !important; }
        }
      `}</style>
        </nav>
    );
}
