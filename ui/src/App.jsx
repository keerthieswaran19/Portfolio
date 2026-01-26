import React, { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import ContactPage from './components/ContactPage';
import Navbar from './components/Navbar';
import Signature from './components/Signature';
import ChatBot from './components/ChatBot';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [showContactPage, setShowContactPage] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (showContactPage) {
    return <ContactPage onClose={() => setShowContactPage(false)} />;
  }

  return (
    <div className="app">
      <div className="bg-squares">
        <div className="square sq-1"></div>
        <div className="square sq-2"></div>
        <div className="square sq-3"></div>
        <div className="square sq-4"></div>
        <div className="square sq-5"></div>
      </div>
      <Navbar scrolled={scrolled} onContactClick={() => setShowContactPage(true)} />
      <Hero onContactClick={() => setShowContactPage(true)} />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Signature />
      <ChatBot />
    </div>
  );
}

export default App;
