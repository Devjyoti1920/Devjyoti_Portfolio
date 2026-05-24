import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechnicalGrid from './components/TechnicalGrid';
import ProjectSection from './components/ProjectSection';
import HardwareSystems from './components/HardwareSystems';
import NonTechnical from './components/NonTechnical';
import ContactFooter from './components/ContactFooter';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      const sections = ['about', 'fullstack', 'aiml', 'cloud', 'hardware', 'projects', 'nontech', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gray-950 text-gray-200 min-h-screen selection:bg-purple-900/60 selection:text-purple-200">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <div id="fullstack" className="relative h-1" />
        <div id="aiml" className="relative h-1" />
        <div id="cloud" className="relative h-1" />
        <TechnicalGrid />
        <HardwareSystems />
        <ProjectSection />
        <NonTechnical />
      </main>
      <ContactFooter />
    </div>
  );
}
