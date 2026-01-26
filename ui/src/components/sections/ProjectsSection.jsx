import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Zap } from 'lucide-react';

const ProjectsSection = ({ data }) => {
    return (
        <div className="section-container">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="section-header"
            >
                <h2 className="section-title glitch" data-text="PROJECTS.EXE">
                    <span className="neon-glow">{'>'}</span> PROJECTS.EXE
                </h2>
                <p className="section-subtitle">// DEPLOYED SYSTEMS</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {data.map((project, index) => (
                    <motion.div
                        key={index}
                        className="cyber-card project-card"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.15 }}
                    >
                        <div className="flex items-start justify-between mb-3">
                            <Zap className="neon-glow-magenta" size={24} />
                            <span className="tech-badge">{project.tech}</span>
                        </div>

                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-desc">{project.description}</p>

                        <a
                            href={project.link}
                            className="project-link"
                        >
                            <span>ACCESS_SYSTEM</span>
                            <ExternalLink size={16} />
                        </a>

                        <div className="card-scan-line"></div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsSection;
