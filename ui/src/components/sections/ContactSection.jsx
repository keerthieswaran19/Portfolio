import React from 'react';
import { motion } from 'framer-motion';
import { Send, Github, Linkedin, Mail, Terminal } from 'lucide-react';

const ContactSection = () => {
    return (
        <div className="section-container">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="section-header"
            >
                <h2 className="section-title glitch" data-text="CONNECT.NET">
                    <span className="neon-glow">{'>'}</span> CONNECT.NET
                </h2>
                <p className="section-subtitle">// INITIALIZE TRANSMISSION</p>
            </motion.div>

            <div className="max-w-2xl mx-auto mt-8">
                <motion.div
                    className="cyber-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <form name="contact" method="POST" data-netlify="true" className="contact-form">
                        <input type="hidden" name="form-name" value="contact" />

                        <div className="form-group">
                            <label className="form-label">
                                <Terminal size={14} />
                                <span>IDENTITY</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="form-input"
                                placeholder="Enter name..."
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">
                                <Terminal size={14} />
                                <span>FREQUENCY</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="form-input"
                                placeholder="Enter email..."
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">
                                <Terminal size={14} />
                                <span>TRANSMISSION</span>
                            </label>
                            <textarea
                                name="message"
                                required
                                rows="4"
                                className="form-input form-textarea"
                                placeholder="Enter message..."
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-btn">
                            <Send size={20} />
                            <span>SEND_TRANSMISSION</span>
                        </button>
                    </form>
                </motion.div>

                <div className="flex justify-center gap-6 mt-8">
                    {[
                        { icon: Github, href: '#', label: 'GitHub' },
                        { icon: Linkedin, href: '#', label: 'LinkedIn' },
                        { icon: Mail, href: 'mailto:contact@keerthie.com', label: 'Email' }
                    ].map((social, idx) => (
                        <motion.a
                            key={idx}
                            href={social.href}
                            className="social-link"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + idx * 0.1 }}
                        >
                            <social.icon size={24} />
                        </motion.a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
