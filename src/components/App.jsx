import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Skills from './Skills/Skills';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData, contactData, footerData, skillsData } from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [skills, setSkills] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setSkills({ ...skillsData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer, skills }}>
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
