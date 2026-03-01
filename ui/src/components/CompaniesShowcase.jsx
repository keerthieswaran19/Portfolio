import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowLeft, Briefcase, Cpu, Shield, Terminal, Settings, Activity, HardDrive, Share2, Code2 } from 'lucide-react';
import { companiesTimeline } from '../data';
import Navbar from './Navbar';
import Signature from './Signature';
import './CompaniesShowcase.css';

const ImpactTicker = ({ value, label, color }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = parseInt(value.replace(/[^0-9]/g, "")) || 100;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [value]);

    return (
        <div className="impact-ticker">
            <div className="ticker-value" style={{ color }}>{count}{value.includes('%') ? '%' : '+'}</div>
            <div className="ticker-label">{label}</div>
        </div>
    );
};

const ArchitectureNode = ({ color }) => (
    <div className="node-map">
        <svg width="100%" height="80" viewBox="0 0 200 80">
            <motion.path d="M20 40H60M140 40H180" stroke={color} strokeWidth="1" strokeDasharray="4 2" />
            <motion.rect x="60" y="20" width="80" height="40" rx="4" stroke={color} fill={`${color}10`} />
            <circle cx="20" cy="40" r="4" fill={color} />
            <circle cx="180" cy="40" r="4" fill={color} />
            <text x="70" y="45" fill={color} fontSize="8" fontFamily="monospace">CORE_ENGINE</text>
        </svg>
    </div>
);

const CompaniesShowcase = ({ onClose }) => {
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    return (
        <div className="showcase-page matrix-pipeline-page">
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

            {/* Central Data Pipeline Spine */}
            <div className="central-pipeline-spine">
                <motion.div className="pipeline-line" style={{ scaleY }}></motion.div>
                <div className="pipeline-glow"></div>
            </div>

            <div className="pipeline-container">
                {/* Boot Sequence Header */}
                <section className="pipeline-hero">
                    <motion.div className="boot-terminal-v5" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="terminal-header">
                            <div className="dots"><span className="red"></span><span className="yellow"></span><span className="green"></span></div>
                            <div className="title">professional_logs.sh</div>
                        </div>
                        <div className="terminal-body-v5">
                            <p className="cmd">{'>>'} sudo access --career-matrix</p>
                            <p className="response">[OK] AUTH_TOKEN_VALIDATED</p>
                            <p className="response">[OK] DECRYPTING_MILESTONES...</p>
                            <div className="load-sequence">
                                <motion.div className="bar" initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 1.5 }}></motion.div>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Career Nodes */}
                {companiesTimeline.map((item, idx) => (
                    <section key={idx} className={`pipeline-node-section ${idx % 2 === 0 ? 'node-left' : 'node-right'}`}>
                        {/* Data Connection Point */}
                        <div className="node-connection-point">
                            <div className="point-outer" style={{ borderColor: item.color }}>
                                <div className="point-inner" style={{ backgroundColor: item.color }}></div>
                            </div>
                        </div>

                        <div className="node-content-side">
                            <motion.div
                                className="matrix-card-v5"
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                style={{ '--node-color': item.color }}
                            >
                                <div className="card-glitch-edge"></div>

                                <div className="node-header-v5">
                                    <div className="node-period-chip">
                                        <Activity size={12} />
                                        <span>EST: {item.period}</span>
                                    </div>
                                    <div className="node-id-chip">#NODE_00{idx + 1}</div>
                                </div>

                                <div className="node-main-v5">
                                    <div className="node-title-group">
                                        <h2 className="node-company">{item.company}</h2>
                                        <div className="node-role-tag">
                                            <Code2 size={14} />
                                            <span>{item.role}</span>
                                        </div>
                                    </div>

                                    <p className="node-description">{item.description}</p>

                                    {/* Real Impact Metrics */}
                                    <div className="node-impact-row">
                                        <ImpactTicker value="40%" label="EFFICIENCY_BOOST" color={item.color} />
                                        <ImpactTicker value="12" label="SYSTEMS_DEPLOYED" color={item.color} />
                                    </div>

                                    {/* Architecture Visualization */}
                                    <div className="node-sub-details">
                                        <div className="detail-block">
                                            <div className="detail-label">CORE_ARCHITECTURE</div>
                                            <ArchitectureNode color={item.color} />
                                        </div>
                                        <div className="detail-block">
                                            <div className="detail-label">TECH_STACK_SYNC</div>
                                            <div className="tech-matrix-v5">
                                                {item.highlights.map((h, i) => (
                                                    <div key={i} className="tech-pill-v5">
                                                        <div className="pill-status" style={{ background: item.color }}></div>
                                                        {h}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="node-footer-v5">
                                    <div className="system-status">
                                        <Terminal size={12} />
                                        <span>EXEC_SUCCESS_0x{idx}</span>
                                    </div>
                                    <div className="node-type-label">{item.type}</div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Dynamic Project Sidebar */}
                        <div className="node-sidebar-v5">
                            <div className="sidebar-inner" style={{ color: `${item.color}20` }}>
                                <div className="vert-text">{item.company.toUpperCase()}</div>
                                <div className="sidebar-icons">
                                    <Share2 size={24} />
                                    <HardDrive size={24} />
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </div>
            <Signature />
        </div>
    );
};

export default CompaniesShowcase;
