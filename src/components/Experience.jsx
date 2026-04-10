import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiCheck } from 'react-icons/fi';

const Experience = ({ fadeInUp, stagger }) => {
  return (
    <section id="experience" className="relative py-24 bg-[#0A0A0A] overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        {/* Section Title */}
        <motion.h3 className="text-3xl md:text-4xl font-bold text-center mb-16 tracking-tight" {...fadeInUp}>
          <span className="text-white">Work </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-300">Experience</span>
        </motion.h3>

        {/* Experience Stack */}
        <motion.div className="space-y-6" {...stagger}>

          {/* Experience 1 */}
          <motion.div className="group relative bg-[#11141C] border border-white/5 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1" {...fadeInUp}>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <FiBriefcase className="text-indigo-400" size={18} />
                  <span className="text-xs font-mono tracking-wider text-indigo-400 uppercase">Current Role</span>
                </div>
                <h4 className="text-2xl font-semibold text-white">
                  MERN Stack Development (PSEB Internship)
                </h4>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-slate-300">
                <FiCalendar size={14} />
                <span className="font-mono">March 2026 - Present</span>
              </div>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
              {[
                "Developing full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
                "Building and integrating RESTful APIs for dynamic data handling.",
                "Working on real-world projects with focus on scalability and performance.",
                "Collaborating in a team environment and following modern development practices."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                  <FiCheck className="w-4 h-4 text-indigo-400/60 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Hover accent line */}
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-cyan-400 group-hover:w-full transition-all duration-500 rounded-b-2xl" />
          </motion.div>

          {/* Experience 2 */}
          <motion.div className="group relative bg-[#11141C] border border-white/5 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1" {...fadeInUp}>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <FiBriefcase className="text-slate-400" size={18} />
                  <span className="text-xs font-mono tracking-wider text-slate-400 uppercase">Internship</span>
                </div>
                <h4 className="text-2xl font-semibold text-white">
                  Frontend Development Internship
                </h4>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-slate-300">
                <FiCalendar size={14} />
                <span className="font-mono">DevelopersHub Corporation (Remote) | June 10 - July 26, 2025</span>
              </div>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
              {[
                "Developed e-commerce frontend with animations.",
                "Implemented search, filtering, and cart features."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                  <FiCheck className="w-4 h-4 text-indigo-400/60 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-cyan-400 group-hover:w-full transition-all duration-500 rounded-b-2xl" />
          </motion.div>

          {/* Experience 3 */}
          <motion.div className="group relative bg-[#11141C] border border-white/5 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1" {...fadeInUp}>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <FiBriefcase className="text-slate-400" size={18} />
                  <span className="text-xs font-mono tracking-wider text-slate-400 uppercase">Training</span>
                </div>
                <h4 className="text-2xl font-semibold text-white">
                  Web Development Trainee (NAVTTC)
                </h4>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-slate-300">
                <FiCalendar size={14} />
                <span className="font-mono">Encoder Bytes Software House | 3 Months</span>
              </div>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
              {[
                "Completed a NAVTTC-certified Web Development training program.",
                "Enhanced practical web development skills through hands-on projects.",
                "Developed NFT Marketplace and TRIPSY travel website.",
                "Built responsive, dynamic, and user-friendly web applications.",
                "Worked on real-world development workflows."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                  <FiCheck className="w-4 h-4 text-indigo-400/60 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-cyan-400 group-hover:w-full transition-all duration-500 rounded-b-2xl" />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Experience;