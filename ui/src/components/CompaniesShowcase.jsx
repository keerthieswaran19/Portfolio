import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Briefcase, Cpu, Shield, Terminal, Settings, Activity, HardDrive } from 'lucide-react';
import { companiesTimeline } from '../data';
import Navbar from './Navbar';
import Signature from './Signature';
import './CompaniesShowcase.css';

const WireframeDiagram = ({ type, color }) => {
    // Renders different SVG wireframes based on "type"
    return (
        <div className="wireframe-container">
            <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none">
                <motion.path
                    d="M50 50L350 50L350 350L50 350Z"
                    stroke={color} strokeWidth="1" strokeDasharray="5 5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 10, repeat: Infinity }}
                />
                <circle cx="200" cy="200" r="100" stroke={color} strokeWidth="0.5" opacity="0.3" />
                <path d="M200 50V350M50 200H350" stroke={color} strokeWidth="0.5" opacity="0.2" />
                {/* Node Points */}
                {[50, 200, 350].map(x => [50, 200, 350].map(y => (
                    <motion.rect
                        key={`${x}-${y}`}
                        x={x - 2} y={y - 2} width="4" height="4"
                        fill={color}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: Math.random() * 2 }}
                    />
                )))}
                {/* Binary HUD */}
                <text x="60" y="340" fill={color} fontSize="8" fontFamily="monospace" opacity="0.4">
                    SYS_LOAD: 42% | MEM: 8.2GB | ADDR: 0x7F
                </text>
            </svg>
        </div>
    );
};

const CompaniesShowcase = ({ onClose }) => {
    return (
        <div className="showcase-page mission-log-page">
            <Navbar scrolled={true} onContactClick={() => window.location.hash = 'contact'} />

            <motion.button
                className="secure-exit-btn"
                onClick={onClose}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
            >
                <ArrowLeft size={18} />
                <span>Secure Exit</span>
            </motion.button>

            <div className="mission-container">
                {/* System Init Sequence */}
                <section className="init-sequence-hero">
                    <motion.div
                        className="init-hud"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <div className="init-header">SYSTEM_BOOT_SEQUENCE [v9.0.4]</div>
                        <div className="init-terminal">
                            <motion.div animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }}>_</motion.div>
                            <p>AUTHENTICATING ROLE: AI_ENGINEER...</p>
                            <p className="success">ACCESS_GRANTED: PROFESSIONAL_LOGS_v2025</p>
                            <div className="loading-bar"><motion.div className="progress" initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 2 }}></motion.div></div>
                        </div>
                    </motion.div>
                </section>

                {/* Mission Entries */}
                {companiesTimeline.map((item, idx) => (
                    <section key={idx} className={`mission-section ${idx % 2 === 0 ? 'layout-left' : 'layout-right'}`}>
                        {/* THE BALANCER: Architectural Wireframe on opposite side */}
                        <div className="mission-wireframe-side">
                            <WireframeDiagram color={item.color} />
                            <div className="code-snapshot-overlay">
                                <pre><code>{`
for module in ${item.company.split(' ')[0].toLowerCase()}_core:
    init_rag(vector_db)
    optimize_latency(target=20ms)
    secure_handshake(L3_PROTO)
                                `}</code></pre>
                            </div>
                        </div>

                        <div className="mission-hud-side">
                            <motion.div
                                className="mission-hud-card"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                style={{ '--mission-color': item.color }}
                            >
                                <div className="card-top-bar">
                                    <div className="mission-id">LOG_MN: {idx + 1}</div>
                                    <div className="mission-period">[{item.period}]</div>
                                </div>

                                <div className="card-header">
                                    <div className="company-logo-v4" style={{ borderColor: item.color }}>
                                        <Shield size={24} style={{ color: item.color }} />
                                    </div>
                                    <h2 className="company-name-v4">{item.company}</h2>
                                </div>

                                <div className="card-meta-row">
                                    <div className="meta-item-v4">
                                        <Activity size={14} />
                                        <span>{item.type}</span>
                                    </div>
                                    <div className="meta-item-v4">
                                        <Settings size={14} />
                                        <span>{item.role}</span>
                                    </div>
                                </div>

                                <div className="card-content-v4">
                                    <p className="description-v4">{item.description}</p>
                                    <div className="capabilities-grid">
                                        {item.highlights.map((h, i) => (
                                            <div key={i} className="capability-tag" style={{ borderLeft: `2px solid ${item.color}40` }}>
                                                {h}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="card-status-v4">
                                    <div className="status-label">STATUS: ARCHIVED_SUCCESS</div>
                                    <div className="status-id">HASH: 0x{idx}F{idx * 7}E{idx}</div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Massive Sidebar Header */}
                        <div className="sidebar-header" style={{ color: `${item.color}15` }}>
                            {item.company}
                        </div>
                    </section>
                ))}
            </div>
            <Signature />
        </div>
    );
};

export default CompaniesShowcase;
