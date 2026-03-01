import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Shield, Cpu, Brain, Database, Workflow, Cloud, Award, Zap, Boxes, Compass, Ruler, Maximize2 } from 'lucide-react';
import { certificationsDetails } from '../data';
import Navbar from './Navbar';
import Signature from './Signature';
import './CertificationsShowcase.css';

const BlueprintMesh = () => (
    <div className="blueprint-overlay-v5">
        <div className="grid-layer"></div>
        <div className="axis-layer">
            <div className="axis-x"></div>
            <div className="axis-y"></div>
        </div>
        <div className="corner-markers">
            <div className="marker tl">+</div><div className="marker tr">+</div>
            <div className="marker bl">+</div><div className="marker br">+</div>
        </div>
    </div>
);

const SchemaMagnify = ({ active, cert, style }) => {
    if (!active) return null;
    return (
        <motion.div
            className="schema-magnify-overlay"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
        >
            <div className="magnify-window" style={{ borderColor: style.color }}>
                <div className="window-header">TECHNICAL_SPECIFICATION_v5.0.{cert.id || 'x'}</div>
                <div className="window-content">
                    <div className="spec-diagram">
                        <svg width="200" height="200" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="40" stroke={style.color} fill="none" strokeWidth="0.5" strokeDasharray="2 2" />
                            <motion.path
                                d="M50 10V90M10 50H90"
                                stroke={style.color}
                                strokeWidth="0.2"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                            />
                            <rect x="30" y="30" width="40" height="40" stroke={style.color} fill={`${style.color}05`} />
                        </svg>
                    </div>
                    <div className="spec-data">
                        <div className="data-row"><span>UID:</span><span>{cert.credentialId.slice(0, 8)}...</span></div>
                        <div className="data-row"><span>STABILITY:</span><span className="green">OPTIMAL</span></div>
                        <div className="data-row"><span>LOAD_CAP:</span><span>L3_MASTER</span></div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const CertificationsShowcase = ({ onClose }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const getIconFusion = (name) => {
        const n = name.toLowerCase();
        if (n.includes('sap')) return { main: <Shield size={24} />, frame: <Cpu size={80} />, color: '#0088ff' };
        if (n.includes('generative ai')) return { main: <Brain size={24} />, frame: <Boxes size={80} />, color: '#ffaa00' };
        if (n.includes('cloud')) return { main: <Cloud size={24} />, frame: <Database size={80} />, color: '#00bbcc' };
        if (n.includes('python')) return { main: <Zap size={24} />, frame: <Cpu size={80} />, color: '#4477ff' };
        if (n.includes('power bi')) return { main: <Workflow size={24} />, frame: <Boxes size={80} />, color: '#ffcc00' };
        return { main: <Award size={24} />, frame: <Shield size={80} />, color: '#ffbb00' };
    };

    return (
        <div className="showcase-page blueprint-page-v5">
            <Navbar scrolled={true} onContactClick={() => window.location.hash = 'contact'} />
            <BlueprintMesh />

            <motion.button
                className="secure-exit-btn"
                onClick={onClose}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
            >
                <ArrowLeft size={18} />
                <span>Secure Exit</span>
            </motion.button>

            <div className="blueprint-container-v5">
                <header className="blueprint-hero-v5">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="blueprint-tag">ARCHIVE_CLASSIFIED_77B</div>
                        <h1 className="blueprint-title-v5">NEURAL <span className="blue-tint">SCHEMA</span></h1>
                        <p className="blueprint-subtitle-v5">DECRYPTION OF TECHNICAL MASTERY [v2025.03]</p>
                        <div className="blueprint-header-ornament">
                            <Compass size={20} className="spinner" />
                            <div className="ornament-line"></div>
                        </div>
                    </motion.div>
                </header>

                <div className="blueprint-dossier-grid">
                    {certificationsDetails.map((cert, idx) => {
                        const style = getIconFusion(cert.name);
                        return (
                            <motion.div
                                key={idx}
                                className="dossier-blueprint-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                onMouseEnter={() => setHoveredIndex(idx)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                style={{ '--blueprint-color': style.color }}
                            >
                                <div className="card-blueprint-bg"></div>
                                <div className="card-edge-markers">
                                    <Ruler size={10} className="ruler-icon" />
                                    <span>MEASURED_L3</span>
                                </div>

                                <div className="card-main-v5">
                                    <div className="visual-side">
                                        <div className="blueprint-symbol-synthesis">
                                            <div className="outer-frame">{style.frame}</div>
                                            <div className="inner-icon">{style.main}</div>
                                            <motion.div
                                                className="scan-beam-v5"
                                                animate={{ top: ['0%', '100%', '0%'] }}
                                                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                                            />
                                        </div>
                                        <div className="symbol-id">SYMB_0x{idx + 1}</div>
                                    </div>

                                    <div className="data-side">
                                        <div className="entry-header-v5">
                                            <span className="issuer-v5">{cert.issuer}</span>
                                            <h3 className="title-v5">{cert.name}</h3>
                                        </div>

                                        <div className="tag-group-v5">
                                            <div className="meta-tag-blue">
                                                <Maximize2 size={10} />
                                                <span>{cert.type}</span>
                                            </div>
                                        </div>

                                        <p className="description-v5">{cert.description}</p>

                                        <div className="credential-block-v5">
                                            <span className="label">SECURE_HASH</span>
                                            <span className="value">{cert.credentialId}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="blueprint-stamp-v5">VERIFIED_L3</div>

                                <AnimatePresence>
                                    <SchemaMagnify active={hoveredIndex === idx} cert={cert} style={style} />
                                </AnimatePresence>
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
