import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Box, Hexagon, Circle, Triangle } from 'lucide-react';
import { companiesTimeline } from '../data';
import Navbar from './Navbar';
import Signature from './Signature';
import './CompaniesShowcase.css';

// Abstract CSS Hologram Components to fill blank space uniquely without text clutter
const HologramSphere = ({ color }) => (
    <div className="holo-container">
        <div className="holo-sphere" style={{ '--color': color }}>
            <div className="ring r1"></div>
            <div className="ring r2"></div>
            <div className="ring r3"></div>
            <div className="core"><Circle size={32} /></div>
        </div>
    </div>
);

const HologramCube = ({ color }) => (
    <div className="holo-container">
        <div className="holo-cube" style={{ '--color': color }}>
            <div className="face f-front"></div>
            <div className="face f-back"></div>
            <div className="face f-right"></div>
            <div className="face f-left"></div>
            <div className="face f-top"></div>
            <div className="face f-bottom"></div>
            <div className="core"><Box size={32} /></div>
        </div>
    </div>
);

const HologramHex = ({ color }) => (
    <div className="holo-container">
        <div className="holo-hex" style={{ '--color': color }}>
            <Hexagon size={150} strokeWidth={0.5} className="hex-outer" />
            <Hexagon size={100} strokeWidth={1} className="hex-mid" />
            <Hexagon size={50} strokeWidth={2} className="hex-inner" />
            <div className="core"><Triangle size={24} /></div>
        </div>
    </div>
);

const CompaniesShowcase = ({ onClose }) => {
    // Alternate holograms based on index
    const getHologram = (idx, color) => {
        if (idx % 3 === 0) return <HologramSphere color={color} />;
        if (idx % 3 === 1) return <HologramCube color={color} />;
        return <HologramHex color={color} />;
    };

    return (
        <div className="showcase-page holographic-journey-page">
            <Navbar scrolled={true} onContactClick={() => window.location.hash = 'contact'} />

            <motion.button
                className="secure-exit-btn"
                onClick={onClose}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
            >
                <ArrowLeft size={18} />
                <span>Secure Exit</span>
            </motion.button>

            {/* Restored JOURNEY Title Background */}
            <div className="massive-bg-title">JOURNEY</div>

            <div className="journey-container-v6">

                <header className="v6-hero">
                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        PROFESSIONAL <br />
                        <span className="gold-focus">ARCHIVE</span>
                    </motion.h1>
                    <motion.div className="scroll-indicator" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                        <span>SCROLL TO EXPLORE</span>
                        <div className="line"></div>
                    </motion.div>
                </header>

                <div className="v6-timeline">
                    {companiesTimeline.map((item, idx) => (
                        <section key={idx} className={`v6-section ${idx % 2 === 0 ? 'align-left' : 'align-right'}`}>

                            {/* Hologram Side (Fills blank space uniquely) */}
                            <div className="hologram-side">
                                {getHologram(idx, item.color)}
                            </div>

                            {/* Minimalist Data Side */}
                            <div className="data-side">
                                <motion.div
                                    className="v6-glass-card"
                                    initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-10%" }}
                                    style={{ '--card-color': item.color }}
                                >
                                    <div className="card-top">
                                        <div className="period-badge">{item.period}</div>
                                        <div className="type-badge"><Shield size={12} /> {item.type}</div>
                                    </div>

                                    <h2 className="company-text">{item.company}</h2>
                                    <h3 className="role-text">{item.role}</h3>

                                    {/* Streamlined description */}
                                    <p className="minimal-desc">{item.description}</p>

                                    {/* Minimal Highlights (Just names, not blocks) */}
                                    <div className="keywords-row">
                                        {item.highlights.slice(0, 3).map((h, i) => (
                                            <span key={i} className="keyword" style={{ color: item.color }}>• {h.split(' ')[0]}</span>
                                        ))}
                                    </div>

                                    <div className="aesthetic-bar"></div>
                                </motion.div>
                            </div>

                        </section>
                    ))}
                </div>
            </div>
            <Signature />
        </div>
    );
};

export default CompaniesShowcase;
