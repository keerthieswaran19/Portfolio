import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, Monitor, Database, Terminal, BarChart } from 'lucide-react';
import { resumeData } from '../data';
import './Projects.css';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isSimulating, setIsSimulating] = useState(true);
    const [videoReady, setVideoReady] = useState(false);
    const videoRef = useRef(null);

    const handleProjectClick = (project) => {
        const index = resumeData.projects.findIndex(p => p.title === project.title);
        window.location.hash = `project-${index}`;
    };

    useEffect(() => {
        const handleHash = () => {
            const hash = window.location.hash;
            if (hash.startsWith('#project-')) {
                const index = parseInt(hash.replace('#project-', ''));
                if (!isNaN(index) && resumeData.projects[index]) {
                    const project = resumeData.projects[index];
                    setSelectedProject(project);
                    setIsSimulating(true);
                    setVideoReady(false);
                    setTimeout(() => setIsSimulating(false), 400);
                }
            } else if (selectedProject) {
                setSelectedProject(null);
            }
        };

        window.addEventListener('hashchange', handleHash);
        handleHash(); // Check on mount
        return () => window.removeEventListener('hashchange', handleHash);
    }, [selectedProject]);

    const closeProject = () => {
        window.location.hash = 'projects';
    };

    // Get icon based on project tech or title
    const getProjectIcon = (title) => {
        const lowerTitle = title.toLowerCase();
        if (lowerTitle.includes('ai') || lowerTitle.includes('builder')) return <Terminal size={32} />;
        if (lowerTitle.includes('sap') || lowerTitle.includes('job')) return <Database size={32} />;
        if (lowerTitle.includes('tableau') || lowerTitle.includes('dashboard')) return <BarChart size={32} />;
        return <Monitor size={32} />;
    };

    return (
        <section className="section projects-section" id="projects">
            <div className="section-projects-bg"></div>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="section-subtitle">
                        Showcasing my work in AI, SAP BTP, and Data Analytics
                    </p>
                </motion.div>

                <div className="projects-grid">
                    {resumeData.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className={`project-card ${project.featured ? 'featured' : ''}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onClick={() => handleProjectClick(project)}
                            style={{ "--project-theme": project.themeColor }}
                        >
                            {project.featured && (
                                <span className="featured-badge" style={{ backgroundColor: project.themeColor }}>
                                    High Impact
                                </span>
                            )}

                            <div className="project-visual-placeholder">
                                {project.image ? (
                                    <img src={project.image} alt={project.title} className="visual-image" />
                                ) : (
                                    <div className="visual-canvas">
                                        <div className="canvas-mesh"></div>
                                    </div>
                                )}
                                <div className="visual-icon">
                                    {getProjectIcon(project.title)}
                                </div>
                            </div>

                            <div className="project-content">
                                <span className="project-category" style={{ color: project.themeColor }}>{project.subtitle}</span>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>

                                <div className="project-tech">
                                    {project.tech.slice(0, 3).map((tech, idx) => (
                                        <span key={idx} className="tech-tag">
                                            {tech}
                                        </span>
                                    ))}
                                    {project.tech.length > 3 && <span className="tech-tag">+{project.tech.length - 3}</span>}
                                </div>

                                <div className="project-footer">
                                    <div className="btn-details">
                                        Explore Presentation <ChevronRight size={16} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Presentation Mode Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeProject}
                    >
                        <motion.div
                            className="modal-content presentation-mode"
                            initial={{ scale: 0.9, y: 50, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: 50, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            style={{ "--modal-accent": selectedProject.themeColor }}
                        >
                            <button className="modal-close" onClick={closeProject}>
                                <X size={24} />
                            </button>

                            <div className="presentation-header">
                                <div className="pres-visual">
                                    <div className="pres-icon-float">
                                        {getProjectIcon(selectedProject.title)}
                                    </div>
                                    <div className="pres-glow"></div>
                                </div>
                                <div className="pres-info">
                                    <span className="pres-badge" style={{ background: selectedProject.themeColor }}>Case Study</span>
                                    <h2 className="modal-title">{selectedProject.title}</h2>
                                    <p className="modal-subtitle-text">{selectedProject.subtitle}</p>
                                </div>
                            </div>

                            <div className="modal-body presentation-body">
                                {/* Simulation Overlay - Always renders but fades out when ready */}
                                <AnimatePresence>
                                    {isSimulating && (
                                        <motion.div
                                            key="sim"
                                            className="pres-video-sim-overlay"
                                            initial={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <div className="loading-bar"></div>
                                            <div className="sim-content">
                                                <Terminal size={40} className="sim-icon" />
                                                <span>Optimizing Presentation...</span>
                                                <div className="sim-grid">
                                                    {[...Array(9)].map((_, i) => <div key={i} className="sim-pixel" style={{ animationDelay: `${i * 0.1}s` }}></div>)}
                                                </div>
                                            </div>
                                            <div className="pres-overlay-text">LIVE PREVIEW MODE</div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Main Content - Renders immediately but hidden by overlay */}
                                <div className="modal-presentation-wrapper">
                                    <div className="modal-tech-list">
                                        {selectedProject.tech.map((tech, idx) => (
                                            <span key={idx} className="tech-tag-large">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="modal-grid">
                                        <div className="modal-left">
                                            <div className="modal-section">
                                                <h3>Project Overview</h3>
                                                <p>{selectedProject.fullDescription}</p>
                                            </div>

                                            <div className="modal-section">
                                                <h3>Technical Challenges</h3>
                                                <div className="challenge-card">
                                                    <p>{selectedProject.challenges}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="modal-right">
                                            <div className="modal-section">
                                                <h3>Key Features</h3>
                                                <ul className="features-list">
                                                    {selectedProject.features.map((feature, idx) => (
                                                        <li key={idx}>
                                                            <div className="bullet" style={{ background: selectedProject.themeColor }}></div>
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {selectedProject.link && selectedProject.link !== '#' && (
                                        <div className="modal-actions">
                                            <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="modal-cta-btn">
                                                <span>Visit Project Website</span>
                                                <ExternalLink size={20} />
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

// Simple ChevronRight icon implementation to avoid import error if lucide-react version differs
const ChevronRight = ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m9 18 6-6-6-6" />
    </svg>
);

export default Projects;
