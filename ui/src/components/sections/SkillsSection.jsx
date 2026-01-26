import React from 'react';
import { motion } from 'framer-motion';

const SkillsSection = ({ data }) => {
    return (
        <div className="section-container">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="section-header"
            >
                <h2 className="section-title glitch" data-text="ARSENAL.DB">
                    <span className="neon-glow">{'>'}</span> ARSENAL.DB
                </h2>
                <p className="section-subtitle">// TECHNICAL CAPABILITIES LOADED</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {data.map((category, index) => (
                    <motion.div
                        key={index}
                        className="cyber-card"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0, 243, 255, 0.4)' }}
                    >
                        <div className="card-header">
                            <category.icon size={28} className="neon-glow" />
                            <h3 className="card-title">{category.category}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {category.items.map((skill, idx) => (
                                <span
                                    key={idx}
                                    className="skill-tag"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                        <div className="card-scan-line"></div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default SkillsSection;
