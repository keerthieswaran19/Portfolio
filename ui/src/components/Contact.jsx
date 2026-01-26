import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Github, Linkedin, Mail, CheckCircle, Phone } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formStatus, setFormStatus] = useState('idle');
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('sending');

        try {
            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams({
                    'form-name': 'contact',
                    ...formData
                }).toString()
            });

            if (response.ok) {
                setFormStatus('sent');
                setFormData({ name: '', email: '', message: '' }); // Reset form
                setTimeout(() => setFormStatus('idle'), 3000);
            } else {
                setFormStatus('idle');
                alert('Error sending message. Please try again.');
            }
        } catch (error) {
            setFormStatus('idle');
            alert('Error sending message. Please try again.');
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section className="section contact-section" id="contact">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <p className="section-subtitle">
                        Let's create something amazing together
                    </p>
                </motion.div>

                <div className="contact-content">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="contact-info-title">Let's talk about everything!</h3>
                        <p className="contact-info-text">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>

                        <div className="contact-socials">
                            <a href="mailto:keerthiprathap19@gmail.com" className="contact-social-link">
                                <Mail size={20} />
                                <span>keerthiprathap19@gmail.com</span>
                            </a>
                            <a href="tel:+918939431717" className="contact-social-link">
                                <Phone size={20} />
                                <span>+91 8939431717</span>
                            </a>
                            <a href="https://github.com/keerthieswaran19" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                                <Github size={20} />
                                <span>github.com/keerthieswaran19</span>
                            </a>
                            <a href="https://www.linkedin.com/in/keerthieswaran-prathaban-87a809273" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                                <Linkedin size={20} />
                                <span>linkedin.com/in/keerthieswaran-prathaban</span>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        className="contact-form-wrapper"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <form className="contact-form glass-dark" name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
                            <input type="hidden" name="form-name" value="contact" />

                            <div className="form-group">
                                <label htmlFor="name">Name <span className="required">*</span></label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email <span className="required">*</span></label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message <span className="required">*</span></label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn-primary submit-btn" disabled={formStatus === 'sending'}>
                                {formStatus === 'idle' && (
                                    <>
                                        <Send size={20} />
                                        <span>Send Message</span>
                                    </>
                                )}
                                {formStatus === 'sending' && <span>Sending...</span>}
                                {formStatus === 'sent' && (
                                    <>
                                        <CheckCircle size={20} />
                                        <span>Message Sent!</span>
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
