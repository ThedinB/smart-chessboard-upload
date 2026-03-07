import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Scene3D } from './Scene3D';

export default function Hero() {
    const { t } = useTranslation();

    return (
        <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 px-[5%] max-w-[1400px] mx-auto overflow-hidden">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
                <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
                    <ambientLight intensity={0.5} />
                    <Scene3D count={200} />
                </Canvas>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 max-w-[850px]">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="greeting text-xl text-[var(--accent-gold)] font-extrabold mb-4 inline-block tracking-wide uppercase"
                >
                    {t('hero_greeting')}
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl md:text-5xl lg:text-[4rem] font-extrabold leading-tight mb-5 text-white drop-shadow-lg"
                    dangerouslySetInnerHTML={{ __html: t('hero_title') }}
                />

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl text-[var(--text-secondary)] mt-7 mb-12 max-w-[75ch] leading-relaxed"
                >
                    {t('hero_subtitle')}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <a
                        href="https://yourchess.gumroad.com/l/yourchess"
                        target="_blank"
                        rel="noreferrer"
                        className="cta-button"
                        style={{
                            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                            background: 'linear-gradient(135deg, var(--accent-blue) 0%, #2563eb 100%)',
                            color: '#fff', padding: '1.2rem 3rem', borderRadius: '12px', fontSize: '1.15rem',
                            textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 800,
                            boxShadow: '0 8px 25px rgba(59, 130, 246, 0.4), inset 0 1px 1px rgba(255,255,255,0.2)',
                            border: '1px solid rgba(255,255,255,0.1)', textDecoration: 'none'
                        }}
                    >
                        {t('hero_cta')}
                    </a>
                </motion.div>
            </div>

            {/* Glow orb */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[60%] bg-[var(--glow-blue-soft)] blur-[80px] rounded-full z-[-1] opacity-50 pointer-events-none" />
        </section>
    );
}
