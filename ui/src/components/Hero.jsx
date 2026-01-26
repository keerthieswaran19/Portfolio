import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import './Hero.css';

const Hero = ({ onContactClick }) => {
    const roles = ['AI Engineer', 'SAP BTP Specialist'];
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero" id="home">
            <div className="container hero-container">

                {/* Left Side - Text */}
                <div className="hero-text-side">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="hero-greeting">Hello, I am</span>
                        <h1 className="hero-name">Keerthieswaran</h1>

                        <div className="role-container">
                            <span className="role-prefix">I am a </span>
                            <motion.span
                                key={roleIndex}
                                className="hero-role"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                {roles[roleIndex]}
                            </motion.span>
                        </div>

                        <p className="hero-description">
                            Building intelligent solutions with AI, SAP BTP, and modern web technologies.
                            Turning complex problems into elegant, scalable applications.
                        </p>

                        <div className="hero-buttons">
                            <button onClick={onContactClick} className="btn-primary hero-btn">
                                Contact Me
                            </button>

                            <div className="social-links">
                                <a href="https://github.com/keerthieswaran19" target="_blank" rel="noopener noreferrer" className="social-link"><Github size={20} /></a>
                                <a href="https://www.linkedin.com/in/keerthieswaran-prathaban-87a809273" target="_blank" rel="noopener noreferrer" className="social-link"><Linkedin size={20} /></a>
                                <a href="mailto:keerthiprathap19@gmail.com" className="social-link"><Mail size={20} /></a>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Side - Image with Unique Shape */}
                <div className="hero-image-side">
                    <div className="image-shape-wrapper">
                        <div className="shape-bg"></div>
                        <img src="/profile.jpg" alt="Keerthieswaran" className="hero-img" />

                        {/* Floating Badge 1 - AI Focused */}
                        <motion.div
                            className="floating-badge badge-1"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className="badge-icon">AI</div>
                            <div className="badge-text-group">
                                <span className="badge-text">AI Engineer</span>
                            </div>
                        </motion.div>

                        {/* Floating Badge 2 - Enterprise Focused */}
                        <motion.div
                            className="floating-badge badge-2"
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className="badge-icon">SAP</div>
                            <div className="badge-text-group">
                                <span className="badge-text">SAP BTP Specialist</span>
                            </div>
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
