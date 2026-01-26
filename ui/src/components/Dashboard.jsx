import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, User, Briefcase, Award, Mail, Menu } from 'lucide-react';
import { resumeData } from '../data';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceSection from './sections/ExperienceSection';
import CertificationsSection from './sections/CertificationsSection';
import ContactSection from './sections/ContactSection';

const Dashboard = ({ preferences }) => {
    const [activeTab, setActiveTab] = useState(preferences[0] || 'skills');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { id: 'skills', label: 'Skills', icon: Code },
        { id: 'projects', label: 'Projects', icon: User },
        { id: 'experience', label: 'Experience', icon: Briefcase },
        { id: 'certifications', label: 'Certifications', icon: Award },
        { id: 'contact', label: 'Contact', icon: Mail }
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'skills': return <SkillsSection data={resumeData.skills} />;
            case 'projects': return <ProjectsSection data={resumeData.projects} />;
            case 'experience': return <ExperienceSection data={resumeData.experience} />;
            case 'certifications': return <CertificationsSection data={resumeData.certifications} />;
            case 'contact': return <ContactSection />;
            default: return <SkillsSection data={resumeData.skills} />;
        }
    };

    return (
        <div className="relative w-full min-h-screen py-20 px-4 md:px-20 overflow-y-auto">
            {/* Floating Navigation */}
            <motion.div
                className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 glass-panel px-6 py-3 flex items-center space-x-6"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                {menuItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`flex items-center space-x-2 transition-colors ${activeTab === item.id ? 'text-[var(--neon-cyan)]' : 'text-gray-400 hover:text-white'
                            }`}
                    >
                        <item.icon size={18} />
                        <span className="hidden md:inline text-sm font-medium">{item.label}</span>
                    </button>
                ))}
            </motion.div>

            {/* Main Content Area */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="w-full max-w-5xl mx-auto"
                >
                    {renderContent()}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Dashboard;
