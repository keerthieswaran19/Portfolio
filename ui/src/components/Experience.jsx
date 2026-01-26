import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import './Experience.css';

const experiences = [
    {
        company: "IT Resonance Inc",
        role: "Gen AI with SAP BTP Program",
        period: "04/2025 - 08/2025",
        location: "Internship",
        description: "Researched and developed innovative Gen AI use cases for enterprise applications, focusing on SAP ecosystem integration.",
        achievements: [
            "Designed AI-powered modules such as career path advisors, job match scoring engines, and conversational job bots",
            "Integrated AI workflows with SAP CAP, UI5, and HANA Cloud for end-to-end enterprise solutions",
            "Conducted performance testing, prompt optimization, and model fine-tuning to improve output accuracy"
        ],
        tech: ["SAP BTP", "Gen AI", "CAP", "UI5", "HANA Cloud"]
    },
    {
        company: "Williams Lea",
        role: "Infographics & Presentation Design",
        period: "12/2024 - 03/2025",
        location: "Internship",
        description: "Selected to work on creating professional infographics and impactful presentation materials for corporate communication.",
        achievements: [
            "Collaborate with design teams to transform complex information into visually compelling formats",
            "Gain hands-on experience in creative design, branding consistency, and business storytelling"
        ],
        tech: ["Design", "Branding", "Infographics", "Storytelling"]
    },
    {
        company: "Access Healthcare",
        role: "Assistant Client Partner",
        period: "07/2022 - 06/2023",
        location: "Full-time",
        description: "Maintaining the Client data with Privacy and Processing their claims with accurate data flows.",
        achievements: [
            "Communicating with technical leads and customers to close the risks factors and obtaining results for the raised issues",
            "Collections the suitable factors and solutions to avoid data risks and policy regulations"
        ],
        tech: ["Claims Processing", "Data Privacy", "Client Relations"]
    },
    {
        company: "Transteel Seating Technologies",
        role: "Furniture Consultant",
        period: "08/2021 - 02/2022",
        location: "Full-time",
        description: "Collaborated with stakeholders to understand business requirements, and translate them into scalable BI solutions.",
        achievements: [
            "Integrated Power BI with various data sources, including Salesforce, TCS ION, and OMS software, to retrieve and store valuable datasets"
        ],
        tech: ["Power BI", "Stakeholder Management", "Data Integration"]
    }
];

const Experience = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="section experience-section" id="experience">
            <div className="section-experience-bg"></div>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Work Experience</h2>
                    <p className="section-subtitle">My professional journey in various industries</p>
                </motion.div>

                <div className="experience-wrapper">
                    {/* Role Tabs - Left side */}
                    <div className="experience-tabs">
                        {experiences.map((exp, index) => (
                            <button
                                key={index}
                                className={`tab-btn ${activeTab === index ? 'active' : ''}`}
                                onClick={() => setActiveTab(index)}
                            >
                                <span className="tab-role">{exp.role}</span>
                                <span className="tab-company">{exp.company}</span>
                            </button>
                        ))}
                    </div>

                    {/* Content Area - Right side */}
                    <div className="experience-content-box">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                                className="exp-details"
                            >
                                <div className="exp-header">
                                    <div className="exp-title-row">
                                        <h3 className="exp-role">{experiences[activeTab].role}</h3>
                                        <span className="exp-company-pill">{experiences[activeTab].company}</span>
                                    </div>
                                    <div className="exp-info">
                                        <span className="info-item"><Calendar size={14} /> {experiences[activeTab].period}</span>
                                        <span className="info-item"><MapPin size={14} /> {experiences[activeTab].location}</span>
                                    </div>
                                </div>

                                <p className="exp-desc">{experiences[activeTab].description}</p>

                                <ul className="achievements-list">
                                    {experiences[activeTab].achievements.map((item, i) => (
                                        <li key={i}>
                                            <ChevronRight size={16} className="bullet" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <div className="tech-stack-exp">
                                    {experiences[activeTab].tech.map((t, i) => (
                                        <span key={i} className="tech-tag">{t}</span>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
