import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Code, Briefcase, Award, Mail } from 'lucide-react';

const SetupScreen = ({ onComplete }) => {
    const [step, setStep] = useState(1);
    const [preferences, setPreferences] = useState([]);

    const togglePreference = (pref) => {
        if (preferences.includes(pref)) {
            setPreferences(preferences.filter(p => p !== pref));
        } else {
            setPreferences([...preferences, pref]);
        }
    };

    const handleNext = () => {
        if (step === 1) setStep(2);
        else onComplete(preferences);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 relative z-20">
            <motion.div
                className="glass-panel p-8 max-w-md w-full text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                {step === 1 ? (
                    <div className="flex flex-col items-center space-y-6">
                        <h2 className="text-2xl font-bold text-[var(--neon-cyan)]">Identity Verified</h2>
                        <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-[var(--neon-magenta)] shadow-[0_0_20px_var(--neon-magenta)]">
                            <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
                        </div>
                        <p className="text-gray-300">Proceed as Keerthieswaran's Guest?</p>
                        <button
                            onClick={handleNext}
                            className="px-8 py-3 bg-[var(--neon-cyan)] text-black font-bold rounded-full hover:shadow-[0_0_20px_var(--neon-cyan)] transition-all transform hover:scale-105"
                        >
                            Initialize Sync
                        </button>
                    </div>
                ) : (
                    <div className="flex flex-col items-center space-y-6">
                        <h2 className="text-2xl font-bold text-[var(--neon-cyan)]">Select Modules</h2>
                        <p className="text-sm text-gray-400">What data streams do you wish to access?</p>

                        <div className="grid grid-cols-2 gap-3 w-full">
                            {[
                                { id: 'skills', label: 'Skills', icon: Code },
                                { id: 'projects', label: 'Projects', icon: User }, // User icon as placeholder or appropriate one
                                { id: 'experience', label: 'Experience', icon: Briefcase },
                                { id: 'certifications', label: 'Certifications', icon: Award },
                                { id: 'contact', label: 'Contact', icon: Mail }
                            ].map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => togglePreference(item.id)}
                                    className={`p-3 rounded-lg border flex flex-col items-center justify-center transition-all ${preferences.includes(item.id)
                                            ? 'bg-[rgba(0,243,255,0.2)] border-[var(--neon-cyan)] text-[var(--neon-cyan)] shadow-[0_0_10px_var(--neon-cyan)]'
                                            : 'bg-transparent border-gray-700 text-gray-500 hover:border-gray-500'
                                        }`}
                                >
                                    <item.icon size={20} className="mb-2" />
                                    <span className="text-xs">{item.label}</span>
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() => onComplete(preferences)}
                            className="w-full py-3 mt-4 bg-[var(--neon-magenta)] text-white font-bold rounded-full hover:shadow-[0_0_20px_var(--neon-magenta)] transition-all transform hover:scale-105"
                        >
                            Enter System
                        </button>
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default SetupScreen;
