import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Briefcase } from 'lucide-react';
import { companiesTimeline } from '../data';
import './CompaniesShowcase.css';

const CompaniesShowcase = ({ onClose }) => {
    return (
        <div className="showcase-page companies-showcase-page">
            <header className="showcase-header">
                <button className="back-btn" onClick={onClose}>
                    <ArrowLeft size={24} />
                    <span>Back</span>
                </button>
                <h1 className="header-title">Companies</h1>
            </header>

            <div className="showcase-container">
                {/* Hero Banner */}
                <motion.div
                    className="showcase-hero"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="showcase-count">{companiesTimeline.length}+</span>
                    <h2>Professional <span className="gold">Journey</span></h2>
                    <p>A timeline of organizations where I've contributed and grown</p>
                </motion.div>

                {/* Vertical Journey Timeline */}
                <div className="journey-timeline">
                    <div className="journey-line"></div>
                    {companiesTimeline.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className={`journey-card ${idx % 2 === 0 ? 'left' : 'right'}`}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.15, duration: 0.5 }}
                        >
                            <div className="journey-dot" style={{ borderColor: item.color, boxShadow: `0 0 15px ${item.color}50` }}></div>
                            <div className="journey-content" style={{ '--company-color': item.color }}>
                                <div className="journey-top-row">
                                    <span className="journey-type" style={{ background: `${item.color}20`, color: item.color }}>{item.type}</span>
                                    <span className="journey-period">{item.period}</span>
                                </div>
                                <h3 style={{ color: item.color }}>{item.company}</h3>
                                <span className="journey-role"><Briefcase size={14} /> {item.role}</span>
                                <p className="journey-desc">{item.description}</p>
                                <div className="journey-highlights">
                                    {item.highlights.map((h, i) => (
                                        <span key={i} className="highlight-pill" style={{ borderColor: `${item.color}40` }}>{h}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CompaniesShowcase;
