import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TerminalIntro = ({ onComplete }) => {
    const [lines, setLines] = useState([]);
    const [currentLine, setCurrentLine] = useState(0);

    const terminalLines = [
        '> INITIALIZING SECURE CONNECTION...',
        '> CONNECTION ESTABLISHED',
        '> LOADING PROFILE DATA...',
        '> DECRYPTING FILES...',
        '> ACCESS GRANTED',
        '',
        '> WELCOME TO',
        '> KEERTHIESWARAN.SYS',
        '',
        '> TYPE "START" TO CONTINUE...',
    ];

    useEffect(() => {
        if (currentLine < terminalLines.length) {
            const timer = setTimeout(() => {
                setLines(prev => [...prev, terminalLines[currentLine]]);
                setCurrentLine(currentLine + 1);
            }, currentLine === 0 ? 500 : 300);
            return () => clearTimeout(timer);
        } else {
            const autoStart = setTimeout(() => {
                onComplete();
            }, 2000);
            return () => clearTimeout(autoStart);
        }
    }, [currentLine]);

    return (
        <motion.div
            className="fixed inset-0 bg-black z-50 flex items-center justify-center p-8"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="w-full max-w-3xl">
                {lines.map((line, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className={`font-mono mb-2 ${line.includes('KEERTHIESWARAN')
                                ? 'text-4xl font-bold neon-glow text-center my-4'
                                : line.includes('WELCOME') || line.includes('TYPE')
                                    ? 'text-xl neon-glow-magenta'
                                    : 'text-green-400'
                            }`}
                    >
                        {line}
                        {index === lines.length - 1 && (
                            <span className="terminal-cursor" />
                        )}
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default TerminalIntro;
