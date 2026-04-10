import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ fadeInUp, handleScroll }) => {
  return (
    <section id="about" className="relative min-h-screen flex items-center bg-white dark:bg-[#0A0A0A] overflow-hidden transition-colors duration-300">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      
      {/* Ambient accent blurs */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div className="order-2 lg:order-1" {...fadeInUp}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-xs font-mono tracking-wider text-emerald-400 bg-emerald-400/10 rounded-full border border-emerald-400/20">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              OPEN TO OPPORTUNITIES
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
              Kashif <span className="text-slate-400 dark:text-slate-500">Khan</span>
            </h1>

            <div className="h-0.5 w-16 bg-gradient-to-r from-emerald-400 to-blue-500 mb-6" />

            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-medium mb-4">
              MERN Stack Developer
            </p>

            {/* Your exact description */}
            <p className="text-slate-500 dark:text-slate-400 max-w-xl text-base md:text-lg leading-relaxed mb-8">
              Passionate MERN Stack Developer currently working as an Intern at EncoderBytes Software House, skilled in building responsive and scalable web applications using React.js, Node.js, Express.js, and MongoDB
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                onClick={() => handleScroll('contact')}
                className="px-8 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-black font-semibold rounded-lg hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors shadow-lg shadow-black/5 dark:shadow-white/5"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get In Touch
              </motion.button>
              <motion.button
                onClick={() => handleScroll('skills')}
                className="px-8 py-3.5 text-slate-600 dark:text-slate-300 font-medium rounded-lg border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Tech Stack
              </motion.button>
            </div>
          </motion.div>

          {/* Right: Image & Decor */}
          <motion.div 
            className="order-1 lg:order-2 relative flex justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {/* Image Frame */}
            <div className="relative bg-slate-50 dark:bg-[#111] p-2 rounded-2xl border border-black/5 dark:border-white/10 shadow-2xl shadow-slate-200 dark:shadow-black/50">
              <img
                src="kashif1.jpeg"
                alt="Kashif Khan"
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-xl"
              />
              {/* Corner Accents */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-emerald-400 rounded-tl-lg" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-blue-500 rounded-br-lg" />
            </div>

            {/* Floating Status Card */}
            <motion.div
              className="absolute -bottom-6 left-0 md:-left-8 bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-white/10 px-5 py-4 rounded-xl shadow-xl backdrop-blur-sm"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
            >
              <div className="text-[10px] font-mono text-slate-500 mb-1">CURRENTLY</div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                </span>
                Intern @ EncoderBytes
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Prompt */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400 dark:text-slate-500">Scroll</span>
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;