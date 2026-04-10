import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiFolder, FiCode, FiPlay } from 'react-icons/fi';

const projects = [
  {
    img: "tripsy.PNG",
    title: "Tripsy Website",
    tech: "React.js, Tailwind CSS, Zustand",
    desc: "Practice-based travel website built during EncoderBytes training.",
    link: "https://tripsiy.vercel.app/",
  },
  {
    img: "ecommerce.PNG",
    title: "E-commerce Website",
    tech: "React.js, Tailwind, Framer Motion",
    desc: "Search, filtering, cart, wishlist & animations.",
    link: "https://ecommerce-web-design-weld.vercel.app/",
  },
  {
    img: "portfolio.PNG",
    title: "Portfolio Website",
    tech: "React.js, Tailwind CSS",
    desc: "Personal portfolio to showcase frontend skills.",
    link: "https://intern-intelligence-portfolio-delta.vercel.app/",
  },
  {
    img: "Encoder.PNG",
    title: "EncoderBytes Website",
    tech: "Next.js, Tailwind CSS",
    desc: "Homepage developed during training.",
    link: "https://encoder-byte-q6rj.vercel.app/",
  },
];

const Projects = ({ fadeInUp, stagger }) => (
  <section id="projects" className="relative py-24 bg-[#0A0A0A] overflow-hidden">
    {/* Terminal grid background */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
    
    {/* Ambient glow */}
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

    <div className="container mx-auto px-6 relative z-10 max-w-6xl">
      {/* Section Header */}
      <motion.div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12" {...fadeInUp}>
        <div>
          <div className="flex items-center gap-2 mb-3">
            <FiCode className="text-emerald-400" size={18} />
            <span className="text-xs font-mono tracking-[0.2em] text-emerald-400 uppercase">
              /src/projects
            </span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Project <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400">Files</span>
          </h3>
        </div>
        <p className="text-sm text-slate-500 font-mono max-w-md">
          Click any card to <span className="text-emerald-400">npm run dev</span> the live preview →
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4" {...stagger}>
        {projects.map((p, i) => (
          <motion.a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block bg-[#0F1117] border border-white/5 rounded-xl overflow-hidden transition-all duration-300 hover:border-cyan-500/40 hover:bg-[#13161F]"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -3 }}
            {...fadeInUp}
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#0B0D12]">
              <div className="flex items-center gap-2">
                <FiFolder className="text-amber-400" size={14} />
                <span className="text-xs font-mono text-slate-400">{p.title.toLowerCase().replace(/\s+/g, '-')}.jsx</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              {/* Preview Image */}
              <div className="relative h-36 mb-4 rounded-lg overflow-hidden border border-white/5 bg-[#0A0C10]">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                />
                {/* Overlay play button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-3 rounded-full bg-[#0A0A0A]/90 border border-white/10 text-emerald-400">
                    <FiPlay size={18} />
                  </div>
                </div>
              </div>

              {/* Title */}
              <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                {p.title}
              </h4>

              {/* Tech Stack - Syntax Highlighted */}
              <div className="flex flex-wrap gap-1.5 mb-3 font-mono text-[10px]">
                {p.tech.split(', ').map((tech, idx) => (
                  <span 
                    key={idx} 
                    className={`px-2 py-0.5 rounded ${
                      tech.includes('React') ? 'text-cyan-300 bg-cyan-500/10' :
                      tech.includes('Tailwind') ? 'text-sky-300 bg-sky-500/10' :
                      tech.includes('Next') ? 'text-white bg-white/10' :
                      tech.includes('Framer') ? 'text-violet-300 bg-violet-500/10' :
                      'text-slate-400 bg-white/5'
                    } border border-white/5`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                <span className="text-slate-600">// </span>{p.desc}
              </p>

              {/* Footer: Link + Index */}
              <div className="flex items-center justify-between pt-3 border-t border-white/5">
                <span className="text-[10px] font-mono text-slate-600">index.{i + 1}</span>
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 group-hover:gap-2 transition-all">
                  <span>Live Preview</span>
                  <FiExternalLink size={12} />
                </div>
              </div>
            </div>

            {/* Hover glow border */}
            <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-cyan-500/20 transition-colors pointer-events-none" />
          </motion.a>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Projects;