import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ShieldCheck, BrainCircuit, Cloud, FileJson, BarChart3, Award, ExternalLink } from 'lucide-react';
import { certificationsDetails } from '../data';
import Navbar from './Navbar';
import Signature from './Signature';
import './CertificationsShowcase.css';

const CertificationsShowcase = ({ onClose }) => {
    const getIcon = (name) => {
        const lowerName = name.toLowerCase();
        if (lowerName.includes('sap')) return <ShieldCheck size={32} />;
        if (lowerName.includes('generative ai')) return <BrainCircuit size={32} />;
        if (lowerName.includes('cloud')) return <Cloud size={32} />;
        if (lowerName.includes('python')) return <FileJson size={32} />;
        if (lowerName.includes('power bi')) return <BarChart3 size={32} />;
        return <Award size={32} />;
    };

    return (
        <div className="showcase-page certs-showcase-page">
            <Navbar scrolled={true} onContactClick={() => window.location.hash = 'contact'} />

            <header className="showcase-header">
                <button className="back-btn" onClick={onClose}>
                    <ArrowLeft size={24} />
                    <span>Back</span>
                </button>
                <h1 className="header-title">Holographic Credentials</h1>
            </header>

            <div className="showcase-container">
                <motion.div
                    className="showcase-hero"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="showcase-count">{certificationsDetails.length}+</span>
                    <h2>Verified <span className="gold">Excellence</span></h2>
                    <p>Professional certifications validating technical mastery and industry standards</p>
                </motion.div>

                <div className="holographic-certs-grid">
                    {certificationsDetails.map((cert, idx) => (
                        <motion.div
                            key={idx}
                            className="holo-cert-card"
                            initial={{ opacity: 0, rotateY: 45, y: 50 }}
                            whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
                        >
                            <div className="holo-seal-container">
                                <div className="holo-shimmer"></div>
                                <div className="holo-icon-wrapper">
                                    {getIcon(cert.name)}
                                </div>
                                <div className="holo-seal-text">VERIFIED</div>
                            </div>

                            <div className="cert-content">
                                <span className="cert-issuer">{cert.issuer}</span>
                                <h3>{cert.name}</h3>
                                <p className="cert-type-label">{cert.type}</p>
                                <div className="cert-divider"></div>
                                <p className="cert-description">{cert.description}</p>
                                <div className="cert-footer-row">
                                    <span className="cert-id-tag">ID: {cert.credentialId}</span>
                                    <span className="cert-date-tag">{cert.date}</span>
                                </div>
                            </div>

                            <div className="cert-corner-accent"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <Signature />
        </div>
    );
};

export default CertificationsShowcase;
