import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Layers, Briefcase, Award, Wifi } from 'lucide-react';
import { resumeData } from '../data';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceSection from './sections/ExperienceSection';
import CertificationsSection from './sections/CertificationsSection';
import ContactSection from './sections/ContactSection';
import Profile3D from './Profile3D';
import './CyberpunkDashboard.css';

const CyberpunkDashboard = () => {
    const [activeSection, setActiveSection] = useState('profile');

    const menuItems = [
        { id: 'profile', label: 'PROFILE.SYS', icon: Terminal, color: '#00f3ff' },
        { id: 'skills', label: 'SKILLS.DB', icon: Layers, color: '#00ff41' },
        { id: 'projects', label: 'PROJECTS.EXE', icon: Terminal, color: '#ff00ff' },
        { id: 'experience', label: 'HISTORY.LOG', icon: Briefcase, color: '#00f3ff' },
        { id: 'certs', label: 'CERTS.BIN', icon: Award, color: '#ff00ff' },
        { id: 'contact', label: 'CONNECT.NET', icon: Wifi, color: '#00ff41' }
    ];

    const renderContent = () => {
        switch (activeSection) {
            case 'profile': return <Profile3D />;
            case 'skills': return <SkillsSection data={resumeData.skills} />;
            case 'projects': return <ProjectsSection data={resumeData.projects} />;
            case 'experience': return <ExperienceSection data={resumeData.experience} />;
            case 'certs': return <CertificationsSection data={resumeData.certifications} />;
            case 'contact': return <ContactSection />;
            default: return <Profile3D />;
        }
    };

    return (
        <div className="cyberpunk-dashboard">
            {/* Side Navigation */}
            <motion.nav
                className="cyber-nav"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <div className="nav-header">
                    <div className="status-indicator pulse"></div>
                    <span className="nav-title">SYSTEM_MENU</span>
                </div>
                {menuItems.map((item, index) => (
                    <motion.button
                        key={item.id}
                        onClick={() => setActiveSection(item.id)}
                        className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                        style={{ '--item-color': item.color }}
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        whileHover={{ x: 10, scale: 1.05 }}
                    >
                        <item.icon size={20} />
                        <span className="nav-label">{item.label}</span>
                        <div className="nav-indicator"></div>
                    </motion.button>
                ))}
            </motion.nav>

            {/* Main Content Area */}
            <main className="cyber-main">
                <div className="scanlines"></div>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeSection}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                        className="content-wrapper"
                    >
                        {renderContent()}
                    </motion.div>
                </AnimatePresence>
            </main>

            {/* Corner Decorations */}
            <div className="corner-decoration top-left"></div>
            <div className="corner-decoration top-right"></div>
            <div className="corner-decoration bottom-left"></div>
            <div className="corner-decoration bottom-right"></div>
        </div>
    );
};

export default CyberpunkDashboard;
