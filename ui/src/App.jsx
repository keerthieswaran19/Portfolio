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

    const handleHashChange = () => {
      setShowContactPage(window.location.hash === '#contact');
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);

    // Initial check
    handleHashChange();
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const openContact = () => {
    window.location.hash = 'contact';
  };

  const closeContact = () => {
    // If we're at #contact, the browser's back button will take us to the previous state
    // But for the in-app close button, we want to go back or clear hash
    if (window.location.hash === '#contact') {
      window.history.back();
    } else {
      window.location.hash = '';
    }
  };

  if (showContactPage) {
    return <ContactPage onClose={closeContact} />;
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
      <Navbar scrolled={scrolled} onContactClick={openContact} />
      <Hero onContactClick={openContact} />
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
