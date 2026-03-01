import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Rocket, CheckCircle2 } from 'lucide-react';
import { allShowcaseProjects } from '../data';
import Navbar from './Navbar';
import Signature from './Signature';
import './ProjectsShowcase.css';

const ProjectsShowcase = ({ onClose }) => {
    const completed = allShowcaseProjects.filter(p => p.status === 'Completed');
    const upcoming = allShowcaseProjects.filter(p => p.status === 'Upcoming');

    return (
        <div className="showcase-page projects-showcase-page">
            <Navbar scrolled={true} onContactClick={() => window.location.hash = 'contact'} />

            <header className="showcase-header">
                <button className="back-btn" onClick={onClose}>
                    <ArrowLeft size={24} />
                    <span>Back</span>
                </button>
                <h1 className="header-title">All Projects</h1>
            </header>

            <div className="showcase-container">
                {/* Hero Banner */}
                <motion.div
                    className="showcase-hero"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="showcase-count">{allShowcaseProjects.length}+</span>
                    <h2>Projects <span className="gold">Portfolio</span></h2>
                    <p>A comprehensive showcase of completed innovations and upcoming ventures</p>
                </motion.div>

                {/* Completed Projects */}
                <div className="showcase-section">
                    <div className="section-label">
                        <CheckCircle2 size={18} />
                        <span>Completed Projects</span>
                        <div className="label-line"></div>
                    </div>
                    <div className="projects-masonry">
                        {completed.map((project, idx) => (
                            <motion.div
                                key={idx}
                                className="showcase-project-card"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05, duration: 0.4 }}
                                style={{ '--card-accent': project.themeColor }}
                            >
                                <div className="card-image-wrapper">
                                    <img src={project.image} alt={project.title} loading="lazy" />
                                    <div className="card-image-overlay"></div>
                                    <div className="card-status-badge completed">Completed</div>
                                </div>
                                <div className="card-body">
                                    <span className="card-subtitle" style={{ color: project.themeColor }}>{project.subtitle}</span>
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="card-tech-row">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="mini-tag">{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Upcoming Projects */}
                <div className="showcase-section upcoming-section">
                    <div className="section-label upcoming-label">
                        <Rocket size={18} />
                        <span>Upcoming Projects</span>
                        <div className="label-line gold-line"></div>
                    </div>
                    <div className="upcoming-grid">
                        {upcoming.map((project, idx) => (
                            <motion.div
                                key={idx}
                                className="upcoming-card"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 + idx * 0.1, duration: 0.4 }}
                                style={{ '--card-accent': project.themeColor }}
                            >
                                <div className="upcoming-image-wrapper">
                                    <img src={project.image} alt={project.title} loading="lazy" />
                                    <div className="upcoming-overlay">
                                        <span className="upcoming-badge">🚀 Upcoming</span>
                                    </div>
                                </div>
                                <div className="upcoming-body">
                                    <span className="card-subtitle" style={{ color: project.themeColor }}>{project.subtitle}</span>
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="card-tech-row">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="mini-tag gold-tag">{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            <Signature />
        </div>
    );
};

export default ProjectsShowcase;
