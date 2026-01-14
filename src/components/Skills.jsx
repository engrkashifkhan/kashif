import React from 'react';
import { motion } from 'framer-motion';

const Skills = ({ fadeInUp, stagger }) => {
  return (
    <section id="skills" className="py-20 bg-gray-800 text-black">
      <div className="container mx-auto px-6">
        <motion.h3 className="text-4xl font-bold text-center mb-12 text-blue-600" {...fadeInUp}>
          Skills
        </motion.h3>

        <motion.div className="grid md:grid-cols-2 gap-8" {...stagger}>
          {[
            { name: 'HTML', level: 90 },
            { name: 'CSS', level: 85 },
            { name: 'JavaScript', level: 80 },
            { name: 'React.js', level: 85 },
            { name: 'Tailwind CSS', level: 90 },
            { name: 'Bootstrap', level: 50 },
            { name: 'Framer Motion', level: 75 },
            { name: 'MongoDB', level: 60 },
            { name: 'Express.js', level: 40 },
            { name: 'Node.js', level: 20 },
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="bg-black text-white p-6 rounded-lg shadow-lg"
              whileHover={{ y: -10 }}
              {...fadeInUp}
            >
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-blue-400">{skill.name}</span>
                <span>{skill.level}%</span>
              </div>

              <div className="w-full bg-gray-700 rounded-full h-4">
                <motion.div
                  className="bg-blue-600 h-4 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, delay: index * 0.1 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
