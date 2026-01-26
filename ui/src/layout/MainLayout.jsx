import React from 'react';
import Background from '../components/Background';
import { motion } from 'framer-motion';

const MainLayout = ({ children }) => {
    return (
        <div className="relative min-h-screen text-white overflow-hidden">
            <Background />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative z-10"
            >
                {children}
            </motion.div>
        </div>
    );
};

export default MainLayout;
