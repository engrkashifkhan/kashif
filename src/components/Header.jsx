import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';

const Header = ({ darkMode, setDarkMode, menuOpen, setMenuOpen, handleScroll }) => {
  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Scroll Progress Indicator */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-transparent">
        <motion.div
          className="h-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500"
          initial={{ width: '0%' }}
          whileInView={{ width: '100%' }}
          viewport={{ once: false }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Glassmorphic Base */}
      <div className="absolute inset-0 bg-white/80 dark:bg-[#0A0A0A]/85 backdrop-blur-xl border-b border-black/5 dark:border-white/5" />

      <nav className="relative container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.button
          onClick={() => handleScroll('about')}
          className="flex items-center gap-3 group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center">
            <span className="text-xs font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">KK</span>
          </div>
          <span className="text-lg font-semibold text-slate-900 dark:text-white tracking-tight hidden sm:block">
            Kashif Khan
          </span>
        </motion.button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 bg-slate-100/50 dark:bg-white/5 px-2 py-1.5 rounded-full border border-black/5 dark:border-white/5">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="relative px-4 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors rounded-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </motion.button>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3 ">
          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 hidden rounded-full text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-all"
            whileHover={{ rotate: 15, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle theme"
          >
            {darkMode ? <FaSun size={16} /> : <FaMoon size={16} />}
          </motion.button>

          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-full text-slate-500 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-all"
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            {/* Slide Panel */}
            <motion.div
              className="fixed top-16 right-0 w-72 h-[calc(100vh-4rem)] bg-white dark:bg-[#0A0A0A] border-l border-black/10 dark:border-white/10 z-50 p-6 md:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex flex-col gap-2 mt-4">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.id}
                    onClick={() => {
                      handleScroll(item.id);
                      setMenuOpen(false);
                    }}
                    className="text-left px-4 py-3 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/5 rounded-lg transition-colors font-medium text-lg"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
                <div className="hidden mt-6 pt-6 border-t border-black/10 dark:border-white/10">
                  <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="flex items-center gap-3 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors px-4 py-2 w-full"
                  >
                    {darkMode ? <FaSun size={16} /> : <FaMoon size={16} />}
                    <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;