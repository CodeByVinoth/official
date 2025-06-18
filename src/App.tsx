import { useState, useRef } from 'react';
import { Mail, Phone, Instagram, FileText } from 'lucide-react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Careers } from './components/Careers'; // Make sure this matches your file name

function App() {
  const [currentSection, setCurrentSection] = useState<string>('hero');
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const careersRef = useRef<HTMLDivElement>(null); // Fixed spelling to match component name

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>, section: string) => {
    setCurrentSection(section);
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header 
        onNavClick={(section) => {
          setCurrentSection(section);
          const refs = {
            'hero': heroRef,
            'about': aboutRef,
            'services': servicesRef,
            'projects': projectsRef,
            'contact': contactRef,
            'careers': careersRef // Fixed to match the section key
          };
          refs[section as keyof typeof refs]?.current?.scrollIntoView({ behavior: 'smooth' });
        }} 
        currentSection={currentSection} 
      />

      <div ref={heroRef}>
        <Hero 
          onContactClick={() => scrollToSection(contactRef, 'contact')}
          onExploreClick={() => scrollToSection(servicesRef, 'services')}
          onAboutClick={() => scrollToSection(aboutRef, 'about')}
        />
      </div>

      <div ref={aboutRef}>
        <About />
      </div>

      <div ref={servicesRef}>
        <Services />
      </div>

      <div ref={projectsRef}>
        <Projects />
      </div>

      <div ref={careersRef}>
        <Careers />
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;