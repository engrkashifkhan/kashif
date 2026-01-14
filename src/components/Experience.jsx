import React from 'react';
import { motion } from 'framer-motion';

const Experience = ({ fadeInUp, stagger }) => {
  return (
    <section id="experience" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <motion.h3
          className="text-4xl font-bold text-center mb-12 text-blue-400"
          {...fadeInUp}
        >
          Work Experience
        </motion.h3>

        <div className="relative">
          {/* Center line — desktop only */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-600 h-full"></div>

          <motion.div className="space-y-12" {...stagger}>

            {/* Experience 1 */}
            <motion.div
              className="flex flex-col md:flex-row items-start md:items-center w-full"
              {...fadeInUp}
            >
              <div className="w-full md:w-1/2 md:pr-8 text-left md:text-right mb-4 md:mb-0">
                <h4 className="text-2xl font-semibold text-blue-400">
                  Frontend Web Development (Personal Projects)
                </h4>
                <p className="text-gray-400">Aug 2024 - Present</p>
              </div>

              <div className="hidden md:block w-4 h-4 bg-blue-600 rounded-full border-4 border-black shadow-lg"></div>

              <div className="w-full md:w-1/2 md:pl-8">
                <ul className="list-disc list-inside text-gray-300">
                  <li>Developed multiple frontend applications using React.js and Tailwind CSS.</li>
                  <li>Built responsive websites with optimal performance.</li>
                  <li>Integrated APIs for smooth data flow.</li>
                </ul>
              </div>
            </motion.div>

            {/* Experience 2 */}
            <motion.div
              className="flex flex-col md:flex-row items-start md:items-center w-full"
              {...fadeInUp}
            >
              <div className="w-full md:w-1/2 md:pr-8 text-left md:text-right mb-4 md:mb-0">
                <h4 className="text-2xl font-semibold text-blue-400">
                  Frontend Development Internship
                </h4>
                <p className="text-gray-400">
                  DevelopersHub Corporation (Remote) | June 10 - July 26, 2025
                </p>
              </div>

              <div className="hidden md:block w-4 h-4 bg-blue-600 rounded-full border-4 border-black shadow-lg"></div>

              <div className="w-full md:w-1/2 md:pl-8">
                <ul className="list-disc list-inside text-gray-300">
                  <li>Developed e-commerce frontend with animations.</li>
                  <li>Implemented search, filtering, and cart features.</li>
                </ul>
              </div>
            </motion.div>

            {/* Experience 3 — NAVTTC */}
            <motion.div
              className="flex flex-col md:flex-row items-start md:items-center w-full"
              {...fadeInUp}
            >
              <div className="w-full md:w-1/2 md:pr-8 text-left md:text-right mb-4 md:mb-0">
                <h4 className="text-2xl font-semibold text-blue-400">
                  Web Development Trainee (NAVTTC)
                </h4>
                <p className="text-gray-400">
                  Encoder Bytes Software House | 3 Months
                </p>
              </div>

              <div className="hidden md:block w-4 h-4 bg-blue-600 rounded-full border-4 border-black shadow-lg"></div>

              <div className="w-full md:w-1/2 md:pl-8">
                <ul className="list-disc list-inside text-gray-300">
                  <li>Completed a NAVTTC-certified Web Development training program.</li>
                  <li>Enhanced practical web development skills through hands-on projects.</li>
                  <li>Developed NFT Marketplace and TRIPSY travel website.</li>
                  <li>Built responsive, dynamic, and user-friendly web applications.</li>
                  <li>Worked on real-world development workflows.</li>
                </ul>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
