import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) return JSON.parse(saved);
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

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
    <div className="min-h-screen bg-white dark:bg-[#0A0A0A] text-slate-900 dark:text-white transition-colors duration-300 overflow-x-hidden">
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        handleScroll={handleScroll}
      />

      <Hero fadeInUp={fadeInUp} handleScroll={handleScroll} />
      <ChatBot />

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