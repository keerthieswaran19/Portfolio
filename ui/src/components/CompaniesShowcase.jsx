import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, Briefcase, Cpu, Layers, Terminal, Database, Activity } from 'lucide-react';
import { companiesTimeline } from '../data';
import Navbar from './Navbar';
import Signature from './Signature';
import './CompaniesShowcase.css';

const TechStream = ({ side, color }) => {
    const dataStrings = [
        "0x4F2A_DECRYPT", "MEM_ALLOC_SYNC", "RAG_NODE_ACTIVE",
        "LOAD_BALANCER_v2", "QUERY_LATENCY_0.02ms", "BUFFER_OVERFLOW_GUARD",
        "STP_HANDSHAKE_OK", "MOD_RELOAD_77%", "CACHE_HIT_99.1%"
    ];

    return (
        <div className={`tech-stream ${side}`}>
            <div className="stream-line" style={{ background: `linear-gradient(to bottom, transparent, ${color}40, transparent)` }}></div>
            <div className="stream-data">
                {Array.from({ length: 15 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="data-bit"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: [0, 1, 0], y: -500 }}
                        transition={{
                            duration: 5 + Math.random() * 5,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "linear"
                        }}
                    >
                        {dataStrings[Math.floor(Math.random() * dataStrings.length)]}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

const CompaniesShowcase = ({ onClose }) => {
    return (
        <div className="showcase-page cinematic-journey-page">
            <Navbar scrolled={true} onContactClick={() => window.location.hash = 'contact'} />

            {/* Floating Back Button */}
            <motion.button
                className="floating-back-btn"
                onClick={onClose}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 215, 0, 0.1)' }}
            >
                <ArrowLeft size={20} />
                <span>Return</span>
            </motion.button>

            <div className="cinematic-container">
                {/* Intro Section */}
                <section className="cinematic-hero">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="hero-content"
                    >
                        <h1 className="giant-text">JOURNEY</h1>
                        <p className="subtitle">5+ Years of Evolution & Impact</p>
                        <div className="neural-scan-line"></div>
                    </motion.div>
                    <div className="scroll-indicator">
                        <div className="mouse"></div>
                        <span>Explore Terminal</span>
                    </div>
                </section>

                {/* Company Sections */}
                {companiesTimeline.map((item, idx) => (
                    <section key={idx} className={`cinematic-section ${idx % 2 === 0 ? 'align-left' : 'align-right'}`}>
                        {/* Background Watermark */}
                        <div className="watermark-text" style={{ color: `${item.color}08` }}>
                            {item.company.split(' ')[0]}
                        </div>

                        {/* THE BALANCER: Technical Stream on opposite side */}
                        <TechStream side={idx % 2 === 0 ? 'right' : 'left'} color={item.color} />

                        <div className="hud-panel-wrapper">
                            <motion.div
                                className="hud-panel"
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-20% 0px" }}
                                transition={{ duration: 0.8, ease: "circOut" }}
                                style={{ '--panel-color': item.color }}
                            >
                                <div className="hud-corner top-left"></div>
                                <div className="hud-glitch-overlay"></div>

                                <div className="hud-header">
                                    <div className="company-logo-mini" style={{ background: `${item.color}20`, border: `1px solid ${item.color}40` }}>
                                        <Briefcase size={20} style={{ color: item.color }} />
                                    </div>
                                    <div className="header-info">
                                        <div className="hud-meta">
                                            <span className="id-tag">REF_ID: 0x{idx + 1}A{idx}</span>
                                            <span className="period-label">{item.period}</span>
                                        </div>
                                        <h2 className="company-title">{item.company}</h2>
                                    </div>
                                </div>

                                <div className="hud-body">
                                    <div className="role-hud-chip" style={{ borderLeft: `3px solid ${item.color}` }}>
                                        <div className="chip-icon"><Cpu size={14} /></div>
                                        <div className="chip-content">
                                            <span className="label">DESIGNATION</span>
                                            <span className="value">{item.role}</span>
                                        </div>
                                    </div>

                                    <p className="description-text">{item.description}</p>

                                    <div className="tech-matrix-v2">
                                        <div className="matrix-label">KEY_CAPABILITIES:</div>
                                        <div className="matrix-grid">
                                            {item.highlights.map((h, i) => (
                                                <div key={i} className="matrix-pill">
                                                    <div className="pill-dot" style={{ background: item.color }}></div>
                                                    <span>{h}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="hud-footer">
                                    <div className="hud-footer-stats">
                                        <div className="status-item">
                                            <Activity size={10} />
                                            <span>ACTIVE: {item.type}</span>
                                        </div>
                                        <div className="status-item">
                                            <Terminal size={10} />
                                            <span>VERIFIED: L3_ARCH</span>
                                        </div>
                                    </div>
                                    <div className="hud-scan-line"></div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Visual Decoration */}
                        <div className="decoration-elements">
                            <div className="beam" style={{ background: `linear-gradient(to bottom, transparent, ${item.color}30, transparent)` }}></div>
                        </div>
                    </section>
                ))}
            </div>
            <Signature />
        </div>
    );
};

export default CompaniesShowcase;
