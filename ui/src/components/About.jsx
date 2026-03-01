import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderKanban, Building2, Award, X, ExternalLink } from 'lucide-react';
import { upcomingProjects, companiesTimeline, certificationsDetails } from '../data';
import './About.css';

const About = () => {
    const [activePanel, setActivePanel] = useState(null);

    const stats = [
        { id: 'projects', value: '10+', label: 'Projects Completed', icon: FolderKanban },
        { id: 'companies', value: '5+', label: 'Companies Worked', icon: Building2 },
        { id: 'certifications', value: '3+', label: 'Certifications', icon: Award },
    ];

    const togglePanel = (id) => {
        if (activePanel === id) {
            setActivePanel(null);
        } else {
            setActivePanel(id);
        }
    };

    return (
        <section className="section about-section" id="about">
            {/* Animated Background */}
            <div className="about-bg">
                <div className="about-shape shape-1"></div>
                <div className="about-shape shape-2"></div>
            </div>

            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">About Me</h2>
                    <p className="section-subtitle">
                        Transforming ideas into intelligent solutions
                    </p>
                </motion.div>

                {/* Stats with Unique Design */}
                <div className="stats-container">
                    {stats.map((stat, index) => {
                        const IconComponent = stat.icon;
                        const isActive = activePanel === stat.id;
                        return (
                            <motion.div
                                key={index}
                                className={`stat-card ${isActive ? 'active' : ''}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: isActive ? 0 : -10 }}
                                onClick={() => togglePanel(stat.id)}
                            >
                                <div className="stat-icon-wrapper">
                                    <div className="stat-icon-bg"></div>
                                    <IconComponent size={32} className="stat-icon" />
                                </div>
                                <h3 className="stat-value">{stat.value}</h3>
                                <p className="stat-label">{stat.label}</p>
                                {isActive && <div className="stat-active-indicator" />}
                            </motion.div>
                        );
                    })}
                </div>

                {/* Interactive Panels */}
                <AnimatePresence mode="wait">
                    {activePanel === 'projects' && (
                        <motion.div
                            key="projects-panel"
                            className="interactive-panel projects-panel"
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: 'auto', marginTop: '2rem' }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="panel-header">
                                <h3>Upcoming Projects <span className="highlight-text">Roadmap</span></h3>
                                <button className="close-panel-btn" onClick={() => setActivePanel(null)}><X size={20} /></button>
                            </div>
                            <div className="roadmap-container">
                                {upcomingProjects.map((proj, idx) => (
                                    <motion.div
                                        className="roadmap-item"
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 + (idx * 0.1) }}
                                    >
                                        <div className="roadmap-icon">{proj.icon}</div>
                                        <div className="roadmap-content">
                                            <div className="roadmap-status">{proj.status}</div>
                                            <h4>{proj.title}</h4>
                                            <p>{proj.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {activePanel === 'companies' && (
                        <motion.div
                            key="companies-panel"
                            className="interactive-panel companies-panel"
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: 'auto', marginTop: '2rem' }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="panel-header">
                                <h3>Professional <span className="highlight-text">Journey</span></h3>
                                <button className="close-panel-btn" onClick={() => setActivePanel(null)}><X size={20} /></button>
                            </div>
                            <div className="timeline-horizontal">
                                {companiesTimeline.map((item, idx) => (
                                    <motion.div
                                        className="timeline-node"
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 + (idx * 0.1) }}
                                    >
                                        <div className="node-dot" style={{ borderColor: item.color, boxShadow: `0 0 10px ${item.color}40` }}></div>
                                        <div className="node-content">
                                            <span className="node-period">{item.period}</span>
                                            <h4 style={{ color: item.color }}>{item.company}</h4>
                                            <p>{item.role}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {activePanel === 'certifications' && (
                        <motion.div
                            key="certifications-panel"
                            className="interactive-panel certifications-panel"
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: 'auto', marginTop: '2rem' }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="panel-header">
                                <h3>Featured <span className="highlight-text">Certifications</span></h3>
                                <button className="close-panel-btn" onClick={() => setActivePanel(null)}><X size={20} /></button>
                            </div>
                            <div className="cert-cards-container">
                                {certificationsDetails.map((cert, idx) => (
                                    <motion.div
                                        className="cert-card-item"
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.2 + (idx * 0.1) }}
                                    >
                                        <div className="cert-badge-icon">{cert.badge}</div>
                                        <div className="cert-info">
                                            <span className="cert-type">{cert.type}</span>
                                            <h4>{cert.name}</h4>
                                            <p className="cert-meta">{cert.issuer} • {cert.date}</p>
                                        </div>
                                        <div className="cert-link-icon"><ExternalLink size={16} /></div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* About Text */}
                <motion.div
                    className="about-content"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div className="about-text">
                        <p>
                            I'm a passionate <strong>AI Engineer</strong> and <strong>SAP BTP Specialist</strong> with expertise in building intelligent,
                            data-driven applications. My journey in technology has led me to work with cutting-edge tools like
                            Generative AI, LangChain, SAP CAP, and modern web frameworks.
                        </p>
                        <p>
                            Currently, I'm focused on creating innovative solutions that bridge the gap between artificial intelligence
                            and enterprise applications. I love solving complex problems and turning them into elegant, scalable solutions.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;

