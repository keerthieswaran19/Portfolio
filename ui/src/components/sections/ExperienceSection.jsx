import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const ExperienceSection = ({ data }) => {
    return (
        <div className="section-container">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="section-header"
            >
                <h2 className="section-title glitch" data-text="HISTORY.LOG">
                    <span className="neon-glow">{'>'}</span> HISTORY.LOG
                </h2>
                <p className="section-subtitle">// CAREER TRAJECTORY</p>
            </motion.div>

            <div className="timeline-container">
                {data.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="timeline-item"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                    >
                        <div className="timeline-marker">
                            <Clock size={20} className="neon-glow" />
                        </div>

                        <div className="timeline-content cyber-card">
                            <span className="timeline-period">{exp.period}</span>
                            <h3 className="timeline-role">{exp.role}</h3>
                            <h4 className="timeline-company">{exp.company}</h4>
                            <p className="timeline-details">{exp.details}</p>
                            <div className="card-scan-line"></div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ExperienceSection;
