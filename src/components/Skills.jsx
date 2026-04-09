// import React from 'react';
// import { motion } from 'framer-motion';

// const Skills = ({ fadeInUp, stagger }) => {
//   const skills = [
//     { name: 'HTML', level: 90 },
//     { name: 'CSS', level: 85 },
//     { name: 'JavaScript', level: 80 },
//     { name: 'React.js', level: 85 },
//     { name: 'Tailwind CSS', level: 90 },
//     { name: 'Bootstrap', level: 50 },
//     { name: 'Framer Motion', level: 75 },
//     { name: 'MongoDB', level: 60 },
//     { name: 'Express.js', level: 40 },
//     { name: 'Node.js', level: 20 },
//   ];

//   return (
//     <section id="skills" className="relative py-24 bg-[#0B0F19] overflow-hidden">
//       {/* Soft radial background glow */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/8 rounded-full blur-[120px] -z-10 pointer-events-none" />
      
//       <div className="container mx-auto px-6 relative z-10">
//         <motion.h3 
//           className="text-3xl md:text-4xl font-bold text-center mb-16 tracking-tight"
//           {...fadeInUp}
//         >
//           <span className="text-white">Technical </span>
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-300">
//             Proficiency
//           </span>
//         </motion.h3>

//         <motion.div 
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" 
//           {...stagger}
//         >
//           {skills.map((skill, index) => (
//             <motion.div
//               key={skill.name}
//               className="group relative bg-[#111827] border border-gray-800 rounded-xl p-5 transition-all duration-300 hover:border-indigo-500/40 hover:bg-[#151C2C] hover:shadow-[0_8px_30px_-12px_rgba(99,102,241,0.15)]"
//               whileHover={{ y: -4 }}
//               {...fadeInUp}
//             >
//               <div className="flex justify-between items-center mb-3">
//                 <h4 className="text-base font-semibold text-gray-100 tracking-wide">
//                   {skill.name}
//                 </h4>
//                 <span className="text-xs font-mono text-indigo-300/80 bg-indigo-500/10 px-2 py-0.5 rounded">
//                   {skill.level}%
//                 </span>
//               </div>

//               <div className="relative w-full bg-gray-800/60 rounded-full h-1.5 overflow-hidden">
//                 <motion.div
//                   className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400"
//                   initial={{ width: 0 }}
//                   whileInView={{ width: `${skill.level}%` }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 1.1, delay: index * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
//                 />
//                 {/* Animated tip dot */}
//                 <motion.div
//                   className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.6)]"
//                   initial={{ left: 0, opacity: 0 }}
//                   whileInView={{ left: `${skill.level}%`, opacity: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 1.1, delay: index * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
//                 />
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Skills;














import React from 'react';
import { motion } from 'framer-motion';

const Skills = ({ fadeInUp, stagger }) => {
  const skills = [
    { name: 'HTML', level: 90, span: 'md:col-span-2' },
    { name: 'CSS', level: 85, span: '' },
    { name: 'JavaScript', level: 80, span: 'md:col-span-2' },
    { name: 'React.js', level: 85, span: '' },
    { name: 'Tailwind CSS', level: 90, span: '' },
    { name: 'Bootstrap', level: 50, span: '' },
    { name: 'Framer Motion', level: 75, span: 'md:col-span-2' },
    { name: 'MongoDB', level: 60, span: '' },
    { name: 'Express.js', level: 40, span: '' },
    { name: 'Node.js', level: 20, span: 'md:col-span-1' },
  ];

  const getLabel = (level) => {
    if (level >= 85) return 'Expert';
    if (level >= 65) return 'Advanced';
    if (level >= 40) return 'Intermediate';
    return 'Learning';
  };

  const getRingColor = (level) => {
    if (level >= 85) return 'stroke-emerald-400';
    if (level >= 65) return 'stroke-blue-400';
    if (level >= 40) return 'stroke-amber-400';
    return 'stroke-slate-400';
  };

  return (
    <section id="skills" className="relative py-24 bg-[#0B0D12] overflow-hidden">
      {/* Subtle animated gradient mesh */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(56,189,248,0.08),transparent)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_60%_40%_at_80%_80%,rgba(99,102,241,0.06),transparent)] pointer-events-none" />

      <div className="relative container mx-auto px-6 max-w-5xl">
        <motion.div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4" {...fadeInUp}>
          <div>
            <span className="text-xs font-mono tracking-[0.25em] text-sky-400 uppercase mb-2 block">Capabilities</span>
            <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">Stack</span></h3>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            A curated overview of my core competencies, measured through project delivery, code complexity, and continuous learning.
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4" {...stagger}>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className={`group relative bg-[#11141C] border border-white/5 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:border-sky-500/30 hover:bg-[#151A25] ${skill.span}`}
              whileHover={{ y: -4 }}
              {...fadeInUp}
            >
              <div className="flex justify-between items-start mb-6">
                <h4 className="text-lg font-semibold text-slate-100 group-hover:text-white transition-colors">
                  {skill.name}
                </h4>
                <span className={`text-[10px] font-medium px-2 py-1 rounded-full border ${getRingColor(skill.level).replace('stroke-', 'border-')} text-slate-300 group-hover:text-white transition-colors`}>
                  {getLabel(skill.level)}
                </span>
              </div>

              <div className="flex items-center gap-4">
                {/* Circular Progress */}
                <div className="relative w-16 h-16 flex-shrink-0">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#1e222b" strokeWidth="6" />
                    <motion.circle
                      cx="50" cy="50" r="40" fill="none"
                      className={getRingColor(skill.level)}
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeDasharray="251.2"
                      initial={{ strokeDashoffset: 251.2 }}
                      whileInView={{ strokeDashoffset: 251.2 - (251.2 * skill.level) / 100 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-semibold text-white">{skill.level}%</span>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden mb-2">
                    <motion.div
                      className={`h-full rounded-full ${getRingColor(skill.level).replace('stroke-', 'bg-')}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                  <p className="text-xs text-slate-400">Applied in {Math.max(3, Math.ceil(skill.level / 10))}+ projects</p>
                </div>
              </div>

              {/* Hover glow line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent group-hover:w-3/4 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;