import React from 'react';
import { motion } from 'framer-motion';

const Education = ({ fadeInUp }) => {
  return (
    <section id="education" className="relative py-24 bg-white dark:bg-[#0A0A0A] overflow-hidden transition-colors duration-300">
      {/* Subtle ambient background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <motion.h3 
          className="text-3xl md:text-4xl font-bold text-center mb-16 tracking-tight" 
          {...fadeInUp}
        >
          <span className="text-slate-900 dark:text-white">Education </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">Background</span>
        </motion.h3>

        <motion.div
          className="relative bg-slate-50 dark:bg-[#11141C] border border-black/5 dark:border-white/5 rounded-2xl p-8 md:p-10 overflow-hidden group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -4 }}
        >
          {/* Top accent line */}
          <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 group-hover:w-full transition-all duration-500" />

          <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-8 md:gap-12">
            {/* Left: Main Info */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 text-xs font-mono font-semibold tracking-wider text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                  BACHELOR'S
                </span>
                <span className="text-xs font-mono text-slate-500">2020 — 2024</span>
              </div>
              
              <h4 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
                BS Software Engineering
              </h4>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 flex items-center gap-2">
                <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Islamia College Peshawar
              </p>

              <p className="text-slate-500 leading-relaxed">
                Focused on core software engineering principles, full-stack development, algorithms, and system architecture. 
                Built a strong foundation in modern web technologies, version control, and collaborative development workflows.
              </p>
            </div>

            {/* Right: Metadata Panel */}
            <div className="flex flex-col gap-6 md:border-l md:border-black/5 dark:md:border-white/5 md:pl-8">
              <div>
                <h5 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">Duration</h5>
                <p className="text-slate-900 dark:text-white font-medium">4 Years (8 Semesters)</p>
              </div>
              
              <div>
                <h5 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">Status</h5>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-300 font-medium">Graduated</span>
                </div>
              </div>

              <div>
                <h5 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-3">Core Focus</h5>
                <div className="flex flex-wrap gap-2">
                  {['Web Development', 'System Design', 'Algorithms', 'Databases'].map((tag) => (
                    <span key={tag} className="px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-lg hover:bg-slate-200 dark:hover:bg-white/10 hover:border-emerald-500/30 transition-colors cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;