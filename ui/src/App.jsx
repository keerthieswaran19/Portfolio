import React, { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import ContactPage from './components/ContactPage';
import ProjectsShowcase from './components/ProjectsShowcase';
import CompaniesShowcase from './components/CompaniesShowcase';
import CertificationsShowcase from './components/CertificationsShowcase';
import Navbar from './components/Navbar';
import Signature from './components/Signature';
import ChatBot from './components/ChatBot';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activePage, setActivePage] = useState(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#contact') setActivePage('contact');
      else if (hash === '#showcase-projects') setActivePage('showcase-projects');
      else if (hash === '#showcase-companies') setActivePage('showcase-companies');
      else if (hash === '#showcase-certifications') setActivePage('showcase-certifications');
      else setActivePage(null);
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

  const closePage = () => {
    if (window.location.hash) {
      window.history.back();
    } else {
      window.location.hash = '';
    }
  };

  if (activePage === 'contact') return <ContactPage onClose={closePage} />;
  if (activePage === 'showcase-projects') return <ProjectsShowcase onClose={closePage} />;
  if (activePage === 'showcase-companies') return <CompaniesShowcase onClose={closePage} />;
  if (activePage === 'showcase-certifications') return <CertificationsShowcase onClose={closePage} />;

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

