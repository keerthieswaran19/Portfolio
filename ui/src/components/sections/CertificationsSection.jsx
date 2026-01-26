import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield } from 'lucide-react';

const CertificationsSection = ({ data }) => {
    return (
        <div className="section-container">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="section-header"
            >
                <h2 className="section-title glitch" data-text="CERTS.BIN">
                    <span className="neon-glow">{'>'}</span> CERTS.BIN
                </h2>
                <p className="section-subtitle">// VERIFIED CREDENTIALS</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {data.map((cert, index) => (
                    <motion.div
                        key={index}
                        className="cyber-card cert-card holographic"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -10, boxShadow: '0 0 40px rgba(0, 243, 255, 0.3)' }}
                    >
                        <div className="cert-icon-wrapper">
                            <Award size={40} className="neon-glow" />
                            <Shield size={20} className="cert-badge" />
                        </div>

                        <h3 className="cert-title">{cert.name}</h3>
                        <p className="cert-issuer">
                            <span className="neon-glow-magenta">{'> '}</span>
                            {cert.issuer}
                        </p>

                        <div className="card-scan-line"></div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default CertificationsSection;
