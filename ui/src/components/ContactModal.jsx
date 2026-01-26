import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle } from 'lucide-react';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose }) => {
    const [formStatus, setFormStatus] = useState('idle');
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('sending');

        const formElement = e.target;
        const data = new FormData(formElement);

        try {
            const response = await fetch('/', {
                method: 'POST',
                body: data
            });

            if (response.ok) {
                setFormStatus('sent');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => {
                    setFormStatus('idle');
                    onClose();
                }, 2000);
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            setFormStatus('error');
            setTimeout(() => setFormStatus('idle'), 3000);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="contact-modal-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="contact-modal-content"
                        initial={{ scale: 0.9, y: 50 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 50 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="contact-modal-close" onClick={onClose}>
                            <X size={24} />
                        </button>

                        <h2 className="contact-modal-title">Get In Touch</h2>
                        <p className="contact-modal-subtitle">Let's create something amazing together</p>

                        <form
                            className="contact-modal-form"
                            name="contact"
                            method="POST"
                            data-netlify="true"
                            netlify-honeypot="bot-field"
                            onSubmit={handleSubmit}
                        >
                            <input type="hidden" name="form-name" value="contact" />
                            <input type="hidden" name="bot-field" />

                            <div className="form-group">
                                <label htmlFor="modal-name">Name <span className="required">*</span></label>
                                <input
                                    type="text"
                                    id="modal-name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="modal-email">Email <span className="required">*</span></label>
                                <input
                                    type="email"
                                    id="modal-email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="modal-message">Message <span className="required">*</span></label>
                                <textarea
                                    id="modal-message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="btn-primary submit-btn"
                                disabled={formStatus === 'sending'}
                            >
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
                                {formStatus === 'error' && <span>Error! Try Again</span>}
                            </button>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ContactModal;
