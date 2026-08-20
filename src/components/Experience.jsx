import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiCheck } from 'react-icons/fi';

const Experience = ({ fadeInUp, stagger }) => {
  const experiences = [
    {
      type: 'Current Role',
      title: 'Web Developer',
      company: 'EncoderBytes Software House',
      date: 'March 2026 - Present',
      description:
        'Working as a Web Developer, building modern web applications and developing practical full-stack solutions using contemporary JavaScript technologies.',
      points: [
        'Developing full-stack web applications using MongoDB, Express.js, React.js, and Node.js.',
        'Building responsive and user-friendly interfaces with React.js, JavaScript, HTML, CSS, and Tailwind CSS.',
        'Developing and integrating RESTful APIs for dynamic data handling and application functionality.',
        'Working on real-world software projects with a focus on scalability, performance, and maintainable code.',
        'Collaborating with team members and following modern software development practices.',
      ],
      featured: true,
    },

    {
      type: 'Internship',
      title: 'Frontend Development Intern',
      company: 'DevelopersHub Corporation',
      date: 'June 10 - July 26, 2025 · Remote',
      description:
        'Completed a frontend development internship focused on building modern, responsive web interfaces and interactive e-commerce functionality.',
      points: [
        'Developed a responsive e-commerce frontend using React.js and modern frontend technologies.',
        'Implemented product search, filtering, shopping cart, wishlist, and product detail functionality.',
        'Created interactive user interfaces with animations and responsive layouts.',
        'Worked with component-based React architecture and reusable UI patterns.',
      ],
      featured: false,
    },

    {
      type: 'Training',
      title: 'Web Development Trainee',
      company: 'Encoder Bytes Software House · NAVTTC',
      date: '3 Months',
      description:
        'Completed practical web development training focused on modern frontend and full-stack development through hands-on projects.',
      points: [
        'Completed a NAVTTC-certified Web Development training program.',
        'Strengthened practical skills in HTML, CSS, JavaScript, React.js, and modern web development.',
        'Developed an NFT Marketplace project as part of practical development work.',
        'Developed the TRIPSY travel website with a focus on responsive and user-friendly design.',
        'Worked with real-world development workflows and project-based learning.',
      ],
      featured: false,
    },
  ];

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative py-24 bg-white dark:bg-[#0A0A0A] overflow-hidden transition-colors duration-300"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"
      />

      <div
        aria-hidden="true"
        className="absolute top-1/4 right-10 w-72 h-72 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">

        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          {...fadeInUp}
        >
          <span className="block text-xs font-mono tracking-[0.25em] text-indigo-400 uppercase mb-3">
            Career Journey
          </span>

          {/* H2 — correct hierarchy */}
          <h2
            id="experience-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight"
          >
            <span className="text-slate-900 dark:text-white">
              Professional{' '}
            </span>

            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-300">
              Experience
            </span>
          </h2>

          <p className="max-w-2xl mx-auto mt-5 text-sm md:text-base leading-7 text-slate-500 dark:text-slate-400">
            My professional experience includes web development, frontend
            engineering, MERN Stack development, and practical software
            development projects. I have worked on responsive websites,
            full-stack applications, REST APIs, and interactive digital
            products.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <motion.div
          className="space-y-6"
          {...stagger}
        >
          {experiences.map((experience, index) => (
            <motion.article
              key={`${experience.title}-${index}`}
              className="group relative bg-slate-50 dark:bg-[#11141C] border border-black/5 dark:border-white/5 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1"
              {...fadeInUp}
            >

              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5 mb-6">

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <FiBriefcase
                      className={
                        experience.featured
                          ? 'text-indigo-400'
                          : 'text-slate-400'
                      }
                      size={18}
                      aria-hidden="true"
                    />

                    <span
                      className={`text-xs font-mono tracking-wider uppercase ${
                        experience.featured
                          ? 'text-indigo-400'
                          : 'text-slate-400'
                      }`}
                    >
                      {experience.type}
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                    {experience.title}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-indigo-500 dark:text-indigo-300">
                    {experience.company}
                  </p>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 px-4 py-2 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-full text-sm text-slate-600 dark:text-slate-300 shrink-0">
                  <FiCalendar
                    size={14}
                    aria-hidden="true"
                  />

                  <span className="font-mono">
                    {experience.date}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm md:text-base leading-7 text-slate-500 dark:text-slate-400 mb-6 max-w-3xl">
                {experience.description}
              </p>

              {/* Responsibilities */}
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                {experience.points.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed"
                  >
                    <FiCheck
                      className="w-4 h-4 text-indigo-400/70 mt-1 flex-shrink-0"
                      aria-hidden="true"
                    />

                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Bottom animation */}
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-cyan-400 group-hover:w-full transition-all duration-500 rounded-b-2xl"
              />
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;