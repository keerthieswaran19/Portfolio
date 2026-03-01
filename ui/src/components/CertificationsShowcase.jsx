import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Shield } from 'lucide-react';
import { certificationsDetails } from '../data';
import './CertificationsShowcase.css';

const CertificationsShowcase = ({ onClose }) => {
    return (
        <div className="showcase-page certs-showcase-page">
            <header className="showcase-header">
                <button className="back-btn" onClick={onClose}>
                    <ArrowLeft size={24} />
                    <span>Back</span>
                </button>
                <h1 className="header-title">Certifications</h1>
            </header>

            <div className="showcase-container">
                {/* Hero Banner */}
                <motion.div
                    className="showcase-hero"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="showcase-count">{certificationsDetails.length}+</span>
                    <h2>Featured <span className="gold">Certifications</span></h2>
                    <p>Industry-recognized credentials validating my expertise</p>
                </motion.div>

                {/* Certifications Grid */}
                <div className="certs-grid">
                    {certificationsDetails.map((cert, idx) => (
                        <motion.div
                            key={idx}
                            className="cert-showcase-card"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.4 }}
                        >
                            <div className="cert-top">
                                <div className="cert-badge-large">{cert.badge}</div>
                                <div className="cert-issuer-badge">{cert.issuer}</div>
                            </div>
                            <div className="cert-body">
                                <span className="cert-category">{cert.type}</span>
                                <h3>{cert.name}</h3>
                                <p>{cert.description}</p>
                                <div className="cert-bottom-row">
                                    <div className="cert-credential">
                                        <Shield size={14} />
                                        <span>{cert.credentialId}</span>
                                    </div>
                                    <span className="cert-year">{cert.date}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CertificationsShowcase;
