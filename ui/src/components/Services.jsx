import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Globe, Layers, MessageSquare, Database } from 'lucide-react';
import './Services.css';

const services = [
    {
        icon: <Cpu size={32} />,
        title: "AI Feature Integration",
        description: "Transform your website with RAG systems, AI agents, and custom LLM workflows that handle documentation and customer queries automatically.",
        color: "#4cc9f0"
    },
    {
        icon: <Zap size={32} />,
        title: "Rapid Prototyping",
        description: "Powered by Antigravity AI, I deliver functional, high-fidelity MVPs in days, not months. Perfect for startups and rapid innovation labs.",
        color: "#ffd700"
    },
    {
        icon: <Layers size={32} />,
        title: "SAP BTP Architecture",
        description: "Enterprise-grade cloud solutions using SAP BTP, CAP, and UI5. Secure, scalable, and integrated with your core business data.",
        color: "#ff9900"
    },
    {
        icon: <MessageSquare size={32} />,
        title: "Custom Chatbot Suites",
        description: "Next-gen conversational interfaces that don't just chat—they take actions, schedule meetings, and process business transactions.",
        color: "#25d366"
    }
];

const Services = () => {
    return (
        <section className="section services-section" id="services">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="services-header"
                >
                    <span className="services-badge">Freelance AI Solutions</span>
                    <h2 className="section-title">The Future of <span className="gradient-text">Web Development</span></h2>
                    <p className="section-subtitle">
                        Leveraging human expertise and world-class AI (Antigravity) to build the next generation of intelligent business applications.
                    </p>
                </motion.div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="service-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            style={{ "--service-color": service.color }}
                        >
                            <div className="service-icon-box">
                                {service.icon}
                                <div className="icon-glow"></div>
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.description}</p>
                            <div className="service-footer">
                                <span className="learn-more">Get a Quote &rarr;</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="ai-synergy-banner"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="synergy-content">
                        <div className="synergy-status">
                            <div className="pulse-dot"></div>
                            <span>AI Partner Online: Antigravity-Alpha v3.0</span>
                        </div>
                        <h4>Collaborative Development Advantage</h4>
                        <p>Every project is built in tandem with advanced AI, ensuring error-free logic, optimized performance, and groundbreaking features that common developers can't match.</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
