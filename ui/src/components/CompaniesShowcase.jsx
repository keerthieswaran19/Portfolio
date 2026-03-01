import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Briefcase, Zap, Globe, Cpu, Layers } from 'lucide-react';
import { companiesTimeline } from '../data';
import Navbar from './Navbar';
import Signature from './Signature';
import './CompaniesShowcase.css';

const CompaniesShowcase = ({ onClose }) => {
    return (
        <div className="showcase-page cinematic-journey-page">
            <Navbar scrolled={true} onContactClick={() => window.location.hash = 'contact'} />

            <header className="showcase-header">
                <button className="back-btn" onClick={onClose}>
                    <ArrowLeft size={24} />
                    <span>Back</span>
                </button>
            </header>

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
                    </motion.div>
                    <div className="scroll-indicator">
                        <div className="mouse"></div>
                        <span>Scroll Discovery</span>
                    </div>
                </section>

                {/* Company Sections */}
                {companiesTimeline.map((item, idx) => (
                    <section key={idx} className={`cinematic-section ${idx % 2 === 0 ? 'align-left' : 'align-right'}`}>
                        <div className="watermark-text" style={{ color: `${item.color}08` }}>
                            {item.company.split(' ')[0]}
                        </div>

                        <div className="hud-panel-wrapper">
                            <motion.div
                                className="hud-panel"
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-20% 0px" }}
                                transition={{ duration: 0.8 }}
                                style={{ '--panel-color': item.color }}
                            >
                                <div className="hud-corner top-left"></div>
                                <div className="hud-header">
                                    <div className="company-logo-mini" style={{ background: item.color }}>
                                        <Briefcase size={20} color="#fff" />
                                    </div>
                                    <div className="header-info">
                                        <span className="period-label">{item.period}</span>
                                        <h2 className="company-title">{item.company}</h2>
                                    </div>
                                </div>

                                <div className="hud-body">
                                    <div className="role-chip">
                                        <Cpu size={14} />
                                        <span>{item.role}</span>
                                    </div>

                                    <p className="description-text">{item.description}</p>

                                    <div className="tech-matrix">
                                        {item.highlights.map((h, i) => (
                                            <div key={i} className="matrix-item">
                                                <Layers size={12} style={{ color: item.color }} />
                                                <span>{h}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="hud-footer">
                                    <div className="status-indicator">
                                        <div className="pulse-dot" style={{ backgroundColor: item.color }}></div>
                                        <span>SYSTEM_STABLE: {item.type}</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Visual Decoration */}
                        <div className="decoration-elements">
                            <div className="beam" style={{ background: `linear-gradient(to bottom, transparent, ${item.color}, transparent)` }}></div>
                            <div className="floating-data-chips">
                                {[1, 2, 3].map(n => <div key={n} className="data-chip" style={{ borderColor: `${item.color}40` }}></div>)}
                            </div>
                        </div>
                    </section>
                ))}
            </div>
            <Signature />
        </div>
    );
};

export default CompaniesShowcase;
