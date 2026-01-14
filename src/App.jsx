import React, { useState, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const formRef = useRef();

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };

  const stagger = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { staggerChildren: 0.2 },
  };

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV.pdf';
    link.download = 'Kashif_Khan_CV.pdf';
    link.click();
  };

  return (
    <div className={`${darkMode ? 'bg-black text-white' : 'bg-white text-black'} min-h-screen overflow-x-hidden`}>
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        handleScroll={handleScroll}
      />

      <Hero fadeInUp={fadeInUp} handleScroll={handleScroll} />

      <Skills fadeInUp={fadeInUp} stagger={stagger} />

      <Experience fadeInUp={fadeInUp} stagger={stagger} />

      <Education fadeInUp={fadeInUp} />

      <Projects fadeInUp={fadeInUp} stagger={stagger} />

      <Contact
        fadeInUp={fadeInUp}
        formRef={formRef}
        formData={formData}
        setFormData={setFormData}
        isSubmitting={isSubmitting}
        setIsSubmitting={setIsSubmitting}
        submitMessage={submitMessage}
        setSubmitMessage={setSubmitMessage}
      />

      <Footer downloadCV={downloadCV} />
    </div>
  );
}

export default App;
