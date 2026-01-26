import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Send, CheckCircle, AlertCircle } from 'lucide-react';
import './ContactPage.css';

const ContactPage = ({ onClose }) => {
    const [formStatus, setFormStatus] = useState('idle');

    const handleSubmit = (e) => {
        // We don't prevent default here immediately because we want the native form submission to work
        // But since we want to handle it via AJAX to control the UI, we will preventing default
        // and using fetch with formsubmit.co
        e.preventDefault();
        setFormStatus('sending');

        const formData = new FormData(e.target);

        fetch("https://formsubmit.co/ajax/keerthiprathap19@gmail.com", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(Object.fromEntries(formData))
        })
            .then(response => response.json())
            .then(data => {
                setFormStatus('sent');
                setTimeout(() => {
                    setFormStatus('idle');
                    // Optional: onClose(); 
                }, 4000);
            })
            .catch(error => {
                console.error(error);
                setFormStatus('error');
                setTimeout(() => setFormStatus('idle'), 3000);
            });
    };

    return (
        <div className="contact-page">
            <div className="torch-overlay"></div>

            {/* Header */}
            <header className="contact-header">
                <button className="back-btn" onClick={onClose}>
                    <ArrowLeft size={24} />
                    <span>Back</span>
                </button>
                <h1 className="header-title">Contact Me</h1>
            </header>

            <div className="contact-page-container">
                <motion.div
                    className="contact-form-wrapper"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="form-header">
                        <h2 className="contact-page-title">Get In Touch</h2>
                        <p className="contact-page-subtitle">Submit the form below to send me an email directly.</p>
                    </div>

                    <form className="contact-page-form" onSubmit={handleSubmit}>
                        {/* FormSubmit.co Configuration */}
                        <input type="hidden" name="_subject" value="New Portfolio Contact!" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_captcha" value="false" />

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">NAME <span className="required">*</span></label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="Your Name"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">EMAIL <span className="required">*</span></label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="your@email.com"
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">MESSAGE <span className="required">*</span></label>
                            <textarea
                                id="message"
                                name="message"
                                rows="6"
                                required
                                placeholder="Write your message here..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="submit-btn"
                            disabled={formStatus === 'sending'}
                        >
                            {formStatus === 'idle' && (
                                <>
                                    <Send size={20} />
                                    <span>SEND MESSAGE</span>
                                </>
                            )}
                            {formStatus === 'sending' && <span>SENDING...</span>}
                            {formStatus === 'sent' && (
                                <>
                                    <CheckCircle size={20} />
                                    <span>EMAIL SENT!</span>
                                </>
                            )}
                            {formStatus === 'error' && (
                                <>
                                    <AlertCircle size={20} />
                                    <span>TRY AGAIN</span>
                                </>
                            )}
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactPage;
