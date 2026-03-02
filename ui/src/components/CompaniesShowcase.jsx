import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Briefcase, Calendar, MapPin } from 'lucide-react';
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
                    <h2>Career <span className="gold">Timeline</span></h2>
                    <p>A detailed overview of my professional experience and technical growth.</p>
                </motion.div>

                <div className="professional-roadmap">
                    <div className="roadmap-core-line"></div>

                    {companiesTimeline.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="roadmap-node"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <div className="timeline-dot">
                                <div className="timeline-dot-inner"></div>
                            </div>

                            <div className="timeline-content-card">
                                <div className="card-header">
                                    <div className="company-info">
                                        <h3>{item.company}</h3>
                                        <span className="role-badge">{item.role}</span>
                                    </div>
                                    <div className="card-meta">
                                        <div className="meta-item">
                                            <Calendar size={14} />
                                            <span>{item.period}</span>
                                        </div>
                                        <div className="meta-item">
                                            <MapPin size={14} />
                                            <span>{item.type}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-body">
                                    <p className="description-text">{item.description}</p>
                                    <div className="tech-stack-row">
                                        {item.highlights.map((h, i) => (
                                            <span key={i} className="skill-tag">
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
