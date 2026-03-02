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
        if (lowerName.includes('sap')) return <ShieldCheck size={28} />;
        if (lowerName.includes('generative ai')) return <BrainCircuit size={28} />;
        if (lowerName.includes('cloud')) return <Cloud size={28} />;
        if (lowerName.includes('python')) return <FileJson size={28} />;
        if (lowerName.includes('power bi')) return <BarChart3 size={28} />;
        return <Award size={28} />;
    };

    return (
        <div className="showcase-page certs-showcase-page">
            <Navbar scrolled={true} onContactClick={() => window.location.hash = 'contact'} />

            <header className="showcase-header">
                <button className="back-btn" onClick={onClose}>
                    <ArrowLeft size={24} />
                    <span>Back</span>
                </button>
                <h1 className="header-title">Professional Certifications</h1>
            </header>

            <div className="showcase-container">
                <motion.div
                    className="showcase-hero"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="showcase-count">{certificationsDetails.length}+</span>
                    <h2>Verified <span className="gold">Credentials</span></h2>
                    <p>Professional certifications validating technical mastery and industry standards.</p>
                </motion.div>

                <div className="certifications-grid-clean">
                    {certificationsDetails.map((cert, idx) => (
                        <motion.div
                            key={idx}
                            className="clean-cert-card"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                        >
                            <div className="cert-card-top-accent"></div>
                            <div className="cert-header-clean">
                                <div className="cert-icon-clean">
                                    {getIcon(cert.name)}
                                </div>
                                <div className="cert-meta-group">
                                    <span className="cert-issuer-clean">{cert.issuer}</span>
                                </div>
                            </div>

                            <div className="cert-body-clean">
                                <h3>{cert.name}</h3>
                                <p className="cert-type-badge">{cert.type}</p>
                                <p className="cert-description-clean">{cert.description}</p>
                            </div>

                            <div className="cert-footer-clean">
                                <span className="cert-id-clean">ID: {cert.credentialId}</span>
                                <ExternalLink size={16} className="cert-link-icon" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <Signature />
        </div>
    );
};

export default CertificationsShowcase;
