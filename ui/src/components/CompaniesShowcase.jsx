import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Briefcase, Globe, Award, Zap } from 'lucide-react';
import { companiesTimeline } from '../data';
import Navbar from './Navbar';
import Signature from './Signature';
import './CompaniesShowcase.css';

const CompaniesShowcase = ({ onClose }) => {
    return (
        <div className="showcase-page companies-showcase-page">
            <Navbar scrolled={true} onContactClick={() => window.location.hash = 'contact'} />

            <header className="showcase-header">
                <button className="back-btn" onClick={onClose}>
                    <ArrowLeft size={24} />
                    <span>Back</span>
                </button>
                <h1 className="header-title">Professional Journey</h1>
            </header>

            <div className="showcase-container">
                <motion.div
                    className="showcase-hero"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="showcase-count">{companiesTimeline.length}+</span>
                    <h2>Orbital <span className="gold">Relay</span></h2>
                    <p>A sophisticated timeline of my career milestones and expertise</p>
                </motion.div>

                <div className="orbital-relay">
                    <div className="relay-core-line"></div>

                    {companiesTimeline.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className={`relay-node ${idx % 2 === 0 ? 'left' : 'right'}`}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "circOut" }}
                        >
                            <div className="orbital-path">
                                <motion.div
                                    className="orbital-orb"
                                    style={{ '--accent-glow': item.color }}
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                >
                                    <div className="orb-satellite"></div>
                                </motion.div>
                            </div>

                            <div className="relay-content-box" style={{ '--node-color': item.color }}>
                                <div className="node-glitch-border"></div>
                                <div className="node-header">
                                    <div className="node-icon-sphere" style={{ background: `${item.color}20` }}>
                                        <Briefcase size={20} style={{ color: item.color }} />
                                    </div>
                                    <div className="node-title-group">
                                        <h3 style={{ color: item.color }}>{item.company}</h3>
                                        <span className="node-role">{item.role}</span>
                                    </div>
                                </div>

                                <div className="node-body">
                                    <div className="node-stats-row">
                                        <div className="node-stat">
                                            <Zap size={12} />
                                            <span>{item.type}</span>
                                        </div>
                                        <div className="node-stat">
                                            <Globe size={12} />
                                            <span>{item.period}</span>
                                        </div>
                                    </div>
                                    <p className="node-description">{item.description}</p>
                                    <div className="node-tech-pills">
                                        {item.highlights.map((h, i) => (
                                            <span key={i} className="tech-pill" style={{ borderColor: `${item.color}40` }}>
                                                {h}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <Signature />
        </div>
    );
};

export default CompaniesShowcase;
