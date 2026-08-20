// import React from 'react';
// import { motion } from 'framer-motion';

// const Skills = ({ fadeInUp, stagger }) => {
//   const skills = [
//     { name: 'HTML', level: 90, span: 'md:col-span-2' },
//     { name: 'CSS', level: 85, span: '' },
//     { name: 'JavaScript', level: 80, span: 'md:col-span-2' },
//     { name: 'React.js', level: 85, span: '' },
//     { name: 'Tailwind CSS', level: 90, span: '' },
//     { name: 'Bootstrap', level: 50, span: '' },
//     { name: 'Framer Motion', level: 75, span: 'md:col-span-2' },
//     { name: 'MongoDB', level: 60, span: '' },
//     { name: 'Express.js', level: 40, span: '' },
//     { name: 'Node.js', level: 20, span: 'md:col-span-1' },
//   ];

//   const getLabel = (level) => {
//     if (level >= 85) return 'Expert';
//     if (level >= 65) return 'Advanced';
//     if (level >= 40) return 'Intermediate';
//     return 'Learning';
//   };

//   const getRingColor = (level) => {
//     if (level >= 85) return 'stroke-emerald-400';
//     if (level >= 65) return 'stroke-blue-400';
//     if (level >= 40) return 'stroke-amber-400';
//     return 'stroke-slate-400';
//   };

//   return (
//     <section id="skills" className="relative py-24 bg-white dark:bg-[#0B0D12] overflow-hidden transition-colors duration-300">
//       {/* Subtle animated gradient mesh */}
//       <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(56,189,248,0.08),transparent)] pointer-events-none" />
//       <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_60%_40%_at_80%_80%,rgba(99,102,241,0.06),transparent)] pointer-events-none" />

//       <div className="relative container mx-auto px-6 max-w-5xl">
//         <motion.div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4" {...fadeInUp}>
//           <div>
//             <span className="text-xs font-mono tracking-[0.25em] text-sky-400 uppercase mb-2 block">Capabilities</span>
//             <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">Stack</span></h3>
//           </div>
//           <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md">
//             A curated overview of my core competencies, measured through project delivery, code complexity, and continuous learning.
//           </p>
//         </motion.div>

//         <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4" {...stagger}>
//           {skills.map((skill, index) => (
//             <motion.div
//               key={skill.name}
//               className={`group relative bg-slate-50 dark:bg-[#11141C] border border-black/5 dark:border-white/5 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:border-sky-500/30 hover:bg-slate-100 dark:hover:bg-[#151A25] ${skill.span}`}
//               whileHover={{ y: -4 }}
//               {...fadeInUp}
//             >
//               <div className="flex justify-between items-start mb-6">
//                 <h4 className="text-lg font-semibold text-slate-700 dark:text-slate-100 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
//                   {skill.name}
//                 </h4>
//                 <span className={`text-[10px] font-medium px-2 py-1 rounded-full border ${getRingColor(skill.level).replace('stroke-', 'border-')} text-slate-500 dark:text-slate-300 group-hover:text-slate-700 dark:group-hover:text-white transition-colors`}>
//                   {getLabel(skill.level)}
//                 </span>
//               </div>

//               <div className="flex items-center gap-4">
//                 {/* Circular Progress */}
//                 <div className="relative w-16 h-16 flex-shrink-0">
//                   <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
//                     <circle cx="50" cy="50" r="40" fill="none" className="stroke-slate-200 dark:stroke-[#1e222b]" strokeWidth="6" />
//                     <motion.circle
//                       cx="50" cy="50" r="40" fill="none"
//                       className={getRingColor(skill.level)}
//                       strokeWidth="6"
//                       strokeLinecap="round"
//                       strokeDasharray="251.2"
//                       initial={{ strokeDashoffset: 251.2 }}
//                       whileInView={{ strokeDashoffset: 251.2 - (251.2 * skill.level) / 100 }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 1.4, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
//                     />
//                   </svg>
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <span className="text-sm font-semibold text-slate-900 dark:text-white">{skill.level}%</span>
//                   </div>
//                 </div>

//                 <div className="flex-1">
//                   <div className="h-1 w-full bg-black/5 dark:bg-white/5 rounded-full overflow-hidden mb-2">
//                     <motion.div
//                       className={`h-full rounded-full ${getRingColor(skill.level).replace('stroke-', 'bg-')}`}
//                       initial={{ width: 0 }}
//                       whileInView={{ width: `${skill.level}%` }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 1.4, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
//                     />
//                   </div>
//                   {/* <p className="text-xs text-slate-500 dark:text-slate-400">Applied in {Math.max(3, Math.ceil(skill.level / 10))}+ projects</p> */}
//                 </div>
//               </div>

//               {/* Hover glow line */}
//               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent group-hover:w-3/4 transition-all duration-500" />
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
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative py-24 bg-white dark:bg-[#0B0D12] overflow-hidden transition-colors duration-300"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(56,189,248,0.08),transparent)] pointer-events-none"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_60%_40%_at_80%_80%,rgba(99,102,241,0.06),transparent)] pointer-events-none"
      />

      <div className="relative container mx-auto px-6 max-w-5xl">

        {/* Section heading */}
        <motion.div
          className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          {...fadeInUp}
        >
          <div>
            <span className="text-xs font-mono tracking-[0.25em] text-sky-400 uppercase mb-2 block">
              Capabilities
            </span>

            {/* IMPORTANT: H2 */}
            <h2
              id="skills-heading"
              className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight"
            >
              Skills &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">
                Expertise
              </span>
            </h2>
          </div>

          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md leading-relaxed">
            My technical expertise covers software engineering, AI engineering,
            modern web development and MERN Stack development. I use these
            technologies to build responsive, scalable and user-focused
            applications.
          </p>
        </motion.div>

        {/* SEO-friendly expertise summary */}
        <motion.div
          className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6"
          {...fadeInUp}
        >
          <div className="rounded-2xl border border-black/5 dark:border-white/5 bg-slate-50 dark:bg-[#11141C] p-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
              Software & Web Development
            </h3>

            <p className="text-sm leading-7 text-slate-500 dark:text-slate-400">
              As a Software Engineer and Web Developer, I work with JavaScript,
              React.js, HTML, CSS, Tailwind CSS and modern frontend technologies
              to create responsive interfaces and practical web applications.
              I also work with Node.js, Express.js and MongoDB for full-stack
              and MERN Stack development.
            </p>
          </div>

          <div className="rounded-2xl border border-black/5 dark:border-white/5 bg-slate-50 dark:bg-[#11141C] p-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
              AI Engineering & Prompt Engineering
            </h3>

            <p className="text-sm leading-7 text-slate-500 dark:text-slate-400">
              My interests also include AI Engineering, Artificial Intelligence
              applications and Prompt Engineering. I explore ways to integrate
              AI capabilities into software products and build useful
              AI-powered experiences for real-world problems.
            </p>
          </div>
        </motion.div>

        {/* Technical stack */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          {...stagger}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className={`group relative bg-slate-50 dark:bg-[#11141C] border border-black/5 dark:border-white/5 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:border-sky-500/30 hover:bg-slate-100 dark:hover:bg-[#151A25] ${skill.span}`}
              whileHover={{ y: -4 }}
              {...fadeInUp}
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-100 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                  {skill.name}
                </h3>

                <span
                  className={`text-[10px] font-medium px-2 py-1 rounded-full border ${getRingColor(
                    skill.level
                  ).replace(
                    'stroke-',
                    'border-'
                  )} text-slate-500 dark:text-slate-300`}
                >
                  {getLabel(skill.level)}
                </span>
              </div>

              <div className="flex items-center gap-4">

                {/* Circular progress */}
                <div
                  className="relative w-16 h-16 flex-shrink-0"
                  aria-label={`${skill.name} skill level ${skill.level}%`}
                >
                  <svg
                    className="w-full h-full -rotate-90"
                    viewBox="0 0 100 100"
                    role="img"
                    aria-hidden="true"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      className="stroke-slate-200 dark:stroke-[#1e222b]"
                      strokeWidth="6"
                    />

                    <motion.circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      className={getRingColor(skill.level)}
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeDasharray="251.2"
                      initial={{ strokeDashoffset: 251.2 }}
                      whileInView={{
                        strokeDashoffset:
                          251.2 - (251.2 * skill.level) / 100,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.4,
                        delay: index * 0.06,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  </svg>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">
                      {skill.level}%
                    </span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="flex-1">
                  <div
                    className="h-1 w-full bg-black/5 dark:bg-white/5 rounded-full overflow-hidden mb-2"
                    aria-hidden="true"
                  >
                    <motion.div
                      className={`h-full rounded-full ${getRingColor(
                        skill.level
                      ).replace('stroke-', 'bg-')}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.4,
                        delay: index * 0.06,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  </div>

                  <span className="sr-only">
                    {skill.name} proficiency: {skill.level} percent.
                  </span>
                </div>
              </div>

              {/* Hover glow */}
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent group-hover:w-3/4 transition-all duration-500"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;