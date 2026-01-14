import React from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = ({ darkMode, setDarkMode, menuOpen, setMenuOpen, handleScroll }) => {
  return (
    <header className="fixed top-0 w-full bg-black text-white shadow-lg z-60">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.h1
          className="text-3xl font-bold text-blue-400 cursor-pointer"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => handleScroll('about')}
        >
          Kashif Khan
        </motion.h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6">
          <button onClick={() => handleScroll('about')} className="hover:text-blue-400 transition-colors">About</button>
          <button onClick={() => handleScroll('skills')} className="hover:text-blue-400 transition-colors">Skills</button>
          <button onClick={() => handleScroll('experience')} className="hover:text-blue-400 transition-colors">Experience</button>
          <button onClick={() => handleScroll('projects')} className="hover:text-blue-400 transition-colors">Projects</button>
          <button onClick={() => handleScroll('contact')} className="hover:text-blue-400 transition-colors">Contact</button>
        </div>

        {/* Mobile Burger Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-blue-400">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          className="md:hidden bg-black text-white absolute top-full left-0 w-full shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <div className="flex flex-col space-y-4 p-6">
            <button onClick={() => handleScroll('about')} className="hover:text-blue-400 transition-colors text-left">About</button>
            <button onClick={() => handleScroll('skills')} className="hover:text-blue-400 transition-colors text-left">Skills</button>
            <button onClick={() => handleScroll('experience')} className="hover:text-blue-400 transition-colors text-left">Experience</button>
            <button onClick={() => handleScroll('projects')} className="hover:text-blue-400 transition-colors text-left">Projects</button>
            <button onClick={() => handleScroll('contact')} className="hover:text-blue-400 transition-colors text-left">Contact</button>
            <button onClick={() => setDarkMode(!darkMode)} className="text-xl text-blue-400 text-left">
              {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
