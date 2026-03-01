import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Cpu, Brain, Database, Workflow, Cloud, Award, ExternalLink } from 'lucide-react';
import { certificationsDetails } from '../data';
import Navbar from './Navbar';
import Signature from './Signature';
import './CertificationsShowcase.css';

const CertificationsShowcase = ({ onClose }) => {
    // Custom Icon Clusters (Icon + Background Support Icon)
    const getIconCluster = (name) => {
        const n = name.toLowerCase();
        if (n.includes('sap')) return { main: <Shield size={32} />, sub: <Cpu size={24} />, color: '#0070f3' };
        if (n.includes('generative ai')) return { main: <Brain size={32} />, sub: <Cpu size={24} />, color: '#f59e0b' };
        if (n.includes('cloud')) return { main: <Cloud size={32} />, sub: <Database size={24} />, color: '#06b6d4' };
        if (n.includes('python')) return { main: <Database size={32} />, sub: <Workflow size={24} />, color: '#3776ab' };
        if (n.includes('power bi')) return { main: <Workflow size={32} />, sub: <Database size={24} />, color: '#f2c811' };
        return { main: <Award size={32} />, sub: <Shield size={24} />, color: '#fbbf24' };
    };

    return (
        <div className="showcase-page hex-vault-page">
            <Navbar scrolled={true} onContactClick={() => window.location.hash = 'contact'} />

            <header className="showcase-header">
                <button className="back-btn" onClick={onClose}>
                    <ArrowLeft size={24} />
                    <span>Back</span>
                </button>
            </header>

            <div className="vault-container">
                <motion.div
                    className="vault-hero"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="vault-title">TECH <span className="gold">VAULT</span></h1>
                    <p className="vault-subtitle">DECRYPTING TECHNICAL MASTERY</p>
                </motion.div>

                <div className="hex-grid">
                    {certificationsDetails.map((cert, idx) => {
                        const iconSet = getIconCluster(cert.name);
                        return (
                            <motion.div
                                key={idx}
                                className="hex-item-wrapper"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                            >
                                <div className="hex-outer" style={{ '--hex-color': iconSet.color }}>
                                    <div className="hex-inner">
                                        <div className="hex-content">
                                            <div className="icon-cluster">
                                                <div className="sub-icon">{iconSet.sub}</div>
                                                <div className="main-icon">{iconSet.main}</div>
                                            </div>

                                            <div className="hex-hover-reveal">
                                                <span className="issuer-tag">{cert.issuer}</span>
                                                <h3 className="cert-name">{cert.name}</h3>
                                                <div className="liquid-divider"></div>
                                                <p className="cert-id">MD:{cert.credentialId}</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Ornamental Corner Text */}
                                    <div className="hex-id-stamp">0x{idx + 1}7F</div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
            <Signature />
        </div>
    );
};

export default CertificationsShowcase;
