import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
};

export default function Features() {
    const { t } = useTranslation();

    return (
        <div className="w-full">
            {/* Intro Section */}
            <section id="intro" className="section" style={{ padding: '5rem 5%', maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
                <motion.div
                    className="content-card"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUp}
                    transition={{ duration: 0.6 }}
                >
                    <p style={{ fontSize: '1.2em', color: 'var(--text-primary)', fontWeight: 500, marginBottom: '1.5rem', lineHeight: 1.7 }}>
                        {t('intro_p1')}
                    </p>
                    <p dangerouslySetInnerHTML={{ __html: t('intro_p2') }} style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }} />
                </motion.div>
            </section>

            {/* Package Section */}
            <section id="package" className="section darker-surface">
                <motion.div
                    className="content-card"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUp}
                    transition={{ duration: 0.6 }}
                >
                    <h2 dangerouslySetInnerHTML={{ __html: t('package_title') }} />
                    <p>{t('package_intro')}</p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', marginTop: '3rem' }}>
                        {/* Item 1 */}
                        <motion.div
                            whileHover={{ y: -8, scale: 1.02 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                            style={{
                                background: 'rgba(21, 27, 43, 0.6)', border: '1px solid var(--border-color)',
                                padding: '2.5rem', borderRadius: '16px', backdropFilter: 'blur(10px)',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                            }}
                        >
                            <h3 dangerouslySetInnerHTML={{ __html: t('package_item1_title') }} />
                            <p style={{ marginBottom: 0 }}>{t('package_item1_desc')}</p>
                        </motion.div>

                        {/* Item 2 */}
                        <motion.div
                            whileHover={{ y: -8, scale: 1.02 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                            style={{
                                background: 'rgba(21, 27, 43, 0.6)', border: '1px solid var(--border-color)',
                                padding: '2.5rem', borderRadius: '16px', backdropFilter: 'blur(10px)',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                            }}
                        >
                            <h3 dangerouslySetInnerHTML={{ __html: t('package_item2_title') }} />
                            <p style={{ marginBottom: 0 }}>{t('package_item2_desc')}</p>
                        </motion.div>

                        {/* Item 3 */}
                        <motion.div
                            whileHover={{ y: -8, scale: 1.02 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                            style={{
                                background: 'rgba(21, 27, 43, 0.6)', border: '1px solid var(--border-color)',
                                padding: '2.5rem', borderRadius: '16px', backdropFilter: 'blur(10px)',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                            }}
                        >
                            <h3 dangerouslySetInnerHTML={{ __html: t('package_item3_title') }} />
                            <p style={{ marginBottom: 0 }}>{t('package_item3_desc')}</p>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* Video Promo Section */}
            <section id="video-promo" className="section">
                <motion.div
                    className="content-card"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUp}
                    transition={{ duration: 0.6 }}
                >
                    <h2 dangerouslySetInnerHTML={{ __html: t('video_title') }} />
                    <p>{t('video_intro')}</p>
                    <div style={{ margin: '3rem 0' }}>
                        <div style={{
                            position: 'relative', width: '100%', paddingBottom: '56.25%', height: 0,
                            overflow: 'hidden', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
                        }}>
                            <iframe src="https://youtube.com/embed/03WkcMXqUA4?si=jJC3mrTeufQrpWy5" title="Ukázka YourChess Prototypu"
                                frameBorder="0" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Vision Section */}
            <section id="vision" className="section">
                <motion.div
                    className="content-card"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUp}
                    transition={{ duration: 0.6 }}
                >
                    <div className="content-with-image">
                        <div className="text-content">
                            <h2 dangerouslySetInnerHTML={{ __html: t('vision_title') }} />
                            <p dangerouslySetInnerHTML={{ __html: t('vision_p1') }} />
                            <p>{t('vision_p2')}</p>
                            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                                <li style={{ paddingLeft: '2.2em', position: 'relative', marginBottom: '1.2em', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-gold)', fontWeight: 800 }}>✓</span>
                                    <span dangerouslySetInnerHTML={{ __html: t('vision_item1') }} />
                                </li>
                                <li style={{ paddingLeft: '2.2em', position: 'relative', marginBottom: '1.2em', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-gold)', fontWeight: 800 }}>✓</span>
                                    <span dangerouslySetInnerHTML={{ __html: t('vision_item2') }} />
                                </li>
                                <li style={{ paddingLeft: '2.2em', position: 'relative', marginBottom: '1.2em', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-gold)', fontWeight: 800 }}>✓</span>
                                    <span dangerouslySetInnerHTML={{ __html: t('vision_item3') }} />
                                </li>
                            </ul>
                        </div>
                        <div className="image-container" style={{
                            background: 'rgba(15, 20, 31, 0.8)', borderRadius: '16px', padding: '1rem',
                            border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 15px 40px rgba(0,0,0,0.4)',
                            overflow: 'hidden'
                        }}>
                            <img src="image/prototype2.jpg" alt="Vize YourChess v2.0" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }} />
                        </div>
                    </div>
                </motion.div>
            </section>

        </div>
    );
}
