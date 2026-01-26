import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import './Navbar.css';

const Navbar = ({ scrolled, onContactClick }) => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
    ];

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container navbar-container">
                {/* Logo / Name - Always on Left */}
                <a href="#home" className="logo">
                    {scrolled ? 'Keerthieswaran' : <><span className="gold-text">K</span>eerthieswaran</>}
                </a>

                {/* Desktop Menu - Always on Right */}
                <ul className="nav-menu desktop-menu">
                    {navItems.map((item, index) => (
                        <motion.li
                            key={item.name}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <a href={item.href} className="nav-link">
                                {item.name}
                            </a>
                        </motion.li>
                    ))}
                    <motion.li
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: navItems.length * 0.1 }}
                    >
                        <button onClick={onContactClick} className="nav-link nav-contact-btn">
                            Contact
                        </button>
                    </motion.li>
                </ul>

                {/* Mobile Toggle */}
                <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <motion.ul
                        className="nav-menu mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <a href={item.href} className="nav-link" onClick={() => setIsOpen(false)}>
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </motion.ul>
                )}
            </div>
        </motion.nav>
    );
};

export default Navbar;
