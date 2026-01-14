import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ fadeInUp, handleScroll }) => {
  return (
    <section id="about" className="relative pt-20 pb-20 bg-black text-white overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-900 to-black opacity-50"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
      ></motion.div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div {...fadeInUp}>
          <div className="relative my-6">
            <img
              src="kashif1.jpeg"
              alt="Kashif Khan"
              className="w-50 h-50 object-cover rounded-full mx-auto border-4 border-blue-400 shadow-2xl"
            />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-blue-400"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            ></motion.div>
          </div>

          <h2 className="text-6xl font-extrabold mb-4 text-blue-400">Kashif Khan</h2>
          <p className="text-2xl mb-6">Frontend Web Developer</p>

          <p className="max-w-3xl mx-auto text-lg leading-relaxed mb-8">
            A passionate and dedicated Frontend Web Developer with hands-on experience in building dynamic and responsive web applications using React.js and Tailwind CSS. Skilled in designing efficient user interfaces and delivering solutions with a focus on performance and user experience.
          </p>

          <motion.button
            onClick={() => handleScroll('contact')}
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
