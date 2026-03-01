import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Cpu, Brain, Database, Workflow, Cloud, Award, Zap, Boxes } from 'lucide-react';
import { certificationsDetails } from '../data';
import Navbar from './Navbar';
import Signature from './Signature';
import './CertificationsShowcase.css';

const CircuitTraces = () => (
    <div className="circuit-traces-bg">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
                d="M0 100H200L250 150H500L550 100H800L850 50H1000"
                stroke="rgba(255, 215, 0, 0.05)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <motion.path
                d="M1000 900H800L750 850H500L450 900H200L150 950H0"
                stroke="rgba(255, 215, 0, 0.05)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            <path d="M300 0V300L350 350V700L300 750V1000" stroke="rgba(255, 215, 0, 0.03)" strokeWidth="1" />
            <path d="M700 1000V700L650 650V300L700 250V0" stroke="rgba(255, 215, 0, 0.03)" strokeWidth="1" />
        </svg>
    </div>
);

const CertificationsShowcase = ({ onClose }) => {
    // Advanced Icon Fusion sets
    const getIconFusion = (name) => {
        const n = name.toLowerCase();
        if (n.includes('sap')) return { main: <Shield size={32} />, outer: <Cpu size={64} />, color: '#0070f3' };
        if (n.includes('generative ai')) return { main: <Brain size={32} />, outer: <Boxes size={64} />, color: '#f59e0b' };
        if (n.includes('cloud')) return { main: <Cloud size={32} />, outer: <Database size={64} />, color: '#06b6d4' };
        if (n.includes('python')) return { main: <Zap size={32} />, outer: <Cpu size={64} />, color: '#3776ab' };
        if (n.includes('power bi')) return { main: <Workflow size={32} />, outer: <Boxes size={64} />, color: '#f2c811' };
        return { main: <Award size={32} />, outer: <Shield size={64} />, color: '#fbbf24' };
    };

    return (
        <div className="showcase-page neural-vault-page">
            <Navbar scrolled={true} onContactClick={() => window.location.hash = 'contact'} />
            <CircuitTraces />

            <motion.button
                className="floating-back-btn"
                onClick={onClose}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
            >
                <ArrowLeft size={20} />
                <span>Secure Exit</span>
            </motion.button>

            <div className="vault-container">
                <header className="vault-hero">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="sc-label">ENCRYPTED_ARCHIVE</span>
                        <h1 className="vault-title-v3">NEURAL <span className="gold">VAULT</span></h1>
                        <div className="vault-stats-row">
                            <div className="v-stat">STATUS: <span className="green">VERIFIED</span></div>
                            <div className="v-stat">NODES: <span className="white">{certificationsDetails.length}</span></div>
                            <div className="v-stat">TYPE: <span className="white">MASTERY_BLOCK</span></div>
                        </div>
                    </motion.div>
                </header>

                <div className="circuit-grid">
                    {certificationsDetails.map((cert, idx) => {
                        const fusion = getIconFusion(cert.name);
                        return (
                            <motion.div
                                key={idx}
                                className="micro-module-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                style={{ '--module-color': fusion.color }}
                            >
                                <div className="module-scanner"></div>
                                <div className="module-header">
                                    <div className="icon-fusion-container">
                                        <div className="fusion-outer-ring">{fusion.outer}</div>
                                        <div className="fusion-main-icon">{fusion.main}</div>
                                        <div className="fusion-pulse"></div>
                                    </div>
                                    <div className="module-serial">MOD_v7.3.{idx}</div>
                                </div>

                                <div className="module-content">
                                    <div className="module-issuer">{cert.issuer}</div>
                                    <h3 className="module-name">{cert.name}</h3>
                                    <div className="module-divider"></div>
                                    <div className="module-meta">
                                        <div className="meta-tag">
                                            <span className="tag-key">SCOPE:</span>
                                            <span className="tag-val">{cert.type}</span>
                                        </div>
                                        <div className="meta-tag">
                                            <span className="tag-key">CRED_ID:</span>
                                            <span className="tag-val">0x{cert.credentialId.slice(-4)}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="module-footer">
                                    <motion.div
                                        className="access-btn"
                                        whileHover={{ backgroundColor: `${fusion.color}20` }}
                                    >
                                        VERIFY_LEGITIMACY
                                    </motion.div>
                                </div>

                                <div className="corner-bracket tr"></div>
                                <div className="corner-bracket bl"></div>
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
