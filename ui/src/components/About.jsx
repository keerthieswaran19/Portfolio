import React from 'react';
import { motion } from 'framer-motion';
import { FolderKanban, Building2, Award } from 'lucide-react';
import './About.css';

const About = () => {
    const stats = [
        { id: 'projects', value: '10+', label: 'Projects Completed', icon: FolderKanban, hash: '#showcase-projects' },
        { id: 'companies', value: '5+', label: 'Companies Worked', icon: Building2, hash: '#showcase-companies' },
        { id: 'certifications', value: '3+', label: 'Certifications', icon: Award, hash: '#showcase-certifications' },
    ];

    const handleStatClick = (hash) => {
        window.location.hash = hash;
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
                        return (
                            <motion.div
                                key={index}
                                className="stat-card clickable"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                onClick={() => handleStatClick(stat.hash)}
                            >
                                <div className="stat-icon-wrapper">
                                    <div className="stat-icon-bg"></div>
                                    <IconComponent size={32} className="stat-icon" />
                                </div>
                                <h3 className="stat-value">{stat.value}</h3>
                                <p className="stat-label">{stat.label}</p>
                                <span className="stat-explore-hint">Tap to explore →</span>
                            </motion.div>
                        );
                    })}
                </div>

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
