import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Cpu, Brain, Database, Workflow, Cloud, Award, Zap, Boxes, Ruler, Compass } from 'lucide-react';
import { certificationsDetails } from '../data';
import Navbar from './Navbar';
import Signature from './Signature';
import './CertificationsShowcase.css';

const BlueprintGrid = () => (
    <div className="blueprint-mesh">
        <div className="vertical-lines"></div>
        <div className="horizontal-lines"></div>
        <div className="ruler top"></div>
        <div className="ruler left"></div>
    </div>
);

const CertificationsShowcase = ({ onClose }) => {
    // Mission Icon Synthesis
    const getSynthesisIcon = (name) => {
        const n = name.toLowerCase();
        if (n.includes('sap')) return { main: <Shield size={28} />, frame: <Cpu size={80} />, color: '#0066cc' };
        if (n.includes('generative ai')) return { main: <Brain size={28} />, frame: <Boxes size={80} />, color: '#cc9900' };
        if (n.includes('cloud')) return { main: <Cloud size={28} />, frame: <Database size={80} />, color: '#0099aa' };
        if (n.includes('python')) return { main: <Zap size={28} />, frame: <Cpu size={80} />, color: '#3366ff' };
        if (n.includes('power bi')) return { main: <Workflow size={28} />, frame: <Boxes size={80} />, color: '#ccaa00' };
        return { main: <Award size={28} />, frame: <Shield size={80} />, color: '#aa8800' };
    };

    return (
        <div className="showcase-page blueprint-vault-page">
            <Navbar scrolled={true} onContactClick={() => window.location.hash = 'contact'} />
            <BlueprintGrid />

            <motion.button
                className="secure-exit-btn"
                onClick={onClose}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
            >
                <ArrowLeft size={18} />
                <span>Secure Exit</span>
            </motion.button>

            <div className="dossier-container">
                <header className="dossier-hero">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h1 className="dossier-title">TACTICAL <span className="blue-tint">CREDENTIALS</span></h1>
                        <p className="dossier-subtitle">TECHNICAL_MASTERY_SPECIFICATIONS [VERIFIED]</p>
                        <div className="dossier-divider">
                            <Compass size={16} className="orbit-icon" />
                        </div>
                    </motion.div>
                </header>

                <div className="blueprint-stack">
                    {certificationsDetails.map((cert, idx) => {
                        const style = getSynthesisIcon(cert.name);
                        return (
                            <motion.div
                                key={idx}
                                className="blueprint-card"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: idx * 0.1 }}
                                style={{ '--blueprint-color': style.color }}
                            >
                                <div className="card-blueprint-overlay"></div>

                                <div className="card-layout-v4">
                                    <div className="drawing-side">
                                        <div className="technical-symbol">
                                            <div className="frame-icon">{style.frame}</div>
                                            <div className="center-icon">{style.main}</div>
                                            <div className="measurement-lines">
                                                <div className="line l1"></div>
                                                <div className="line l2"></div>
                                            </div>
                                        </div>
                                        <div className="spec-label">DWG_REF: {idx + 1}04</div>
                                    </div>

                                    <div className="info-side">
                                        <div className="entry-header">
                                            <span className="issuer-v4">{cert.issuer}</span>
                                            <h3 className="title-v4">{cert.name}</h3>
                                        </div>
                                        <div className="entry-body">
                                            <div className="tag-v4">
                                                <Ruler size={10} />
                                                <span>{cert.type}</span>
                                            </div>
                                            <p className="desc-v4">{cert.description}</p>
                                        </div>
                                        <div className="entry-footer">
                                            <div className="credential-chip">
                                                <span className="label">CRED_UUID</span>
                                                <span className="value">{cert.credentialId}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="blueprint-stamp">APPROVED</div>
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
