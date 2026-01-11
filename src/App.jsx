

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaDownload, FaBars, FaTimes } from 'react-icons/fa';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for burger menu
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const formRef = useRef();

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };

  const stagger = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { staggerChildren: 0.2 },
  };

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false); // Close menu after navigation
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        'service_9g975sf', // Replace with your EmailJS service ID
        '9g975sf', // Replace with your EmailJS template ID
        formRef.current,
        '1dmtECDsd_Cqla7C9' // Replace with your EmailJS public key
      );
      setSubmitMessage('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitMessage('Failed to send message. Please try again.');
    }
    setIsSubmitting(false);
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf'; // Replace with your CV file path in public folder
    link.download = 'Kashif_Khan_CV.pdf';
    link.click();
  };

  return (
    <div className={`${darkMode ? 'bg-black text-white' : 'bg-white text-black'} min-h-screen overflow-x-hidden`}>
      {/* Header */}
      <header className="fixed top-0 w-full bg-black text-white shadow-lg z-60">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.h1
            className="text-3xl font-bold text-blue-400 cursor-pointer"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => handleScroll('about')}
          >
            Kashif Khan
          </motion.h1>
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6">
            <button onClick={() => handleScroll('about')} className="hover:text-blue-400 transition-colors">About</button>
            <button onClick={() => handleScroll('skills')} className="hover:text-blue-400 transition-colors">Skills</button>
            <button onClick={() => handleScroll('experience')} className="hover:text-blue-400 transition-colors">Experience</button>
            <button onClick={() => handleScroll('projects')} className="hover:text-blue-400 transition-colors">Projects</button>
            <button onClick={() => handleScroll('contact')} className="hover:text-blue-400 transition-colors">Contact</button>
          
          </div>
          {/* Mobile Burger Icon */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-blue-400">
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>
        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            className="md:hidden bg-black text-white absolute top-full left-0 w-full shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="flex flex-col space-y-4 p-6">
              <button onClick={() => handleScroll('about')} className="hover:text-blue-400 transition-colors text-left">About</button>
              <button onClick={() => handleScroll('skills')} className="hover:text-blue-400 transition-colors text-left">Skills</button>
              <button onClick={() => handleScroll('experience')} className="hover:text-blue-400 transition-colors text-left">Experience</button>
              <button onClick={() => handleScroll('projects')} className="hover:text-blue-400 transition-colors text-left">Projects</button>
              <button onClick={() => handleScroll('contact')} className="hover:text-blue-400 transition-colors text-left">Contact</button>
              <button onClick={() => setDarkMode(!darkMode)} className="text-xl text-blue-400 text-left">
                {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
              </button>
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
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
                // src="/assets/profile.jpg"
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

      {/* Skills Section */}
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

      {/* Work Experience Section */}
    
     <section id="experience" className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <motion.h3 className="text-4xl font-bold text-center mb-12 text-blue-400" {...fadeInUp}>
            Work Experience
          </motion.h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-600 h-full"></div>
            <motion.div className="space-y-12" {...stagger}>
              <motion.div className="flex items-center w-full" {...fadeInUp}>
                <div className="w-1/2 pr-8 text-right">
                  <h4 className="text-2xl font-semibold text-blue-400">Frontend Web Development (Personal Projects)</h4>
                  <p className="text-gray-400">Aug 2024 - Present</p>
                </div>
                <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-black shadow-lg"></div>
                <div className="w-1/2 pl-8">
                  <ul className="list-disc list-inside">
                    <li>Developed multiple frontend applications using React.js and Tailwind CSS.</li>
                    <li>Built responsive websites with optimal performance.</li>
                    <li>Integrated APIs for smooth data flow.</li>
                  </ul>
                </div>
              </motion.div>
              <motion.div className="flex items-center w-full" {...fadeInUp}>
                <div className="w-1/2 pr-8 text-right">
                  <h4 className="text-2xl font-semibold text-blue-400">Frontend Development Internship</h4>
                  <p className="text-gray-400">DevelopersHub Corporation (Remote) | June 10 - July 26, 2025</p>
                </div>
                <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-black shadow-lg"></div>
                <div className="w-1/2 pl-8">
                  <ul className="list-disc list-inside">
                    <li>Developed e-commerce frontend with animations.</li>
                    <li>Implemented search, filtering, and cart features.</li>
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section> 
      <section>
        <motion.div className="flex items-center w-full bg-black pb-8" {...fadeInUp}>
  <div className="w-1/2 pr-8 text-right">
    <h4 className="text-2xl font-semibold text-blue-400">
      Web Development Trainee (NAVTTC)
    </h4>
    <p className="text-gray-400">
      Encoder Bytes Software House | 3 Months
    </p>
  </div>

  <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-black shadow-lg"></div>

  <div className="w-1/2 pl-8">
    <ul className="list-disc list-inside text-gray-300">
      <li>Completed a NAVTTC-certified Web Development training program.</li>
      <li>Enhanced practical web development skills through hands-on projects.</li>
      <li>Developed fully functional websites including an NFT Marketplace and TRIPSY travel website.</li>
      <li>Built responsive, dynamic, and user-friendly web applications.</li>
      <li>Worked on real-world project workflows, improving problem-solving and coding practices.</li>
    </ul>
  </div>
</motion.div>

      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-800 text-black">
        <div className="container mx-auto px-6">
          <motion.h3 className="text-4xl font-bold text-center mb-12 text-white" {...fadeInUp}>
            Education
          </motion.h3>
          <motion.div
            className="bg-black text-white p-8 rounded-lg shadow-lg text-center max-w-2xl mx-auto"
            {...fadeInUp}
          >
            <h4 className="text-3xl font-semibold mb-4 text-white">BS Software Engineering</h4>
            <p className="text-xl text-gray-400">Islamia College Peshawar | 2020 - 2024</p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <motion.h3 className="text-4xl font-bold text-center mb-12 text-white" {...fadeInUp}>
            Projects
          </motion.h3>
          <motion.div className="grid md:grid-cols-2 gap-8" {...stagger}>
            <motion.div
              className="bg-gray-900 text-white  p-6 rounded-lg shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              {...fadeInUp}
            >
              <img src="tripsy.PNG" alt="EchoRead" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h4 className="text-2xl font-semibold mb-2 text-blue-600">Tripsy website</h4>
              <p className="text-gray-600 mb-4">React.js , Tailwind CSS, Zustand</p>
<p>Built Tripsy, a practice-based travel website during EncoderBytes training to strengthen frontend development skills using React.js, Tailwind CSS, and responsive UI principles. and it was real world project</p>            </motion.div>
            <motion.div
              className="bg-gray-900 text-white  p-6 rounded-lg shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05, rotateY: -5 }}
              {...fadeInUp}
            >
              <img src="ecommerce.PNG" alt="E-commerce" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h4 className="text-2xl font-semibold mb-2 text-blue-600">E-commerce Website</h4>
              <p className="text-gray-600 mb-4">Internship Project | React.js, Tailwind CSS, Framer Motion</p>
              <p>Built interactive UI with search, filtering,  add to cart, Product Detail page, WishList and smooth animations.</p>
            </motion.div>
             <motion.div
              className="bg-gray-900 text-white p-6 rounded-lg shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05, rotateY: -5 }}
              {...fadeInUp}
            >
              <img src="portfolio.PNG" alt="E-commerce" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h4 className="text-2xl font-semibold mb-2 text-blue-600">Portfolio Website</h4>
              <p className="text-gray-600 mb-4">React.js, Tailwind CSS, Framer Motion</p>
              <p>Designed and developed a personal portfolio website as a practice project to demonstrate frontend development skills and UI design..</p>
            </motion.div>
             <motion.div
              className="bg-gray-900 text-white p-6 rounded-lg shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05, rotateY: -5 }}
              {...fadeInUp}
            >
              <img src="Encoder.PNG" alt="E-commerce" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h4 className="text-2xl font-semibold mb-2 text-blue-600">EncoderBytes Website</h4>
              <p className="text-gray-600 mb-4">Next.js Tailwind CSS</p>
              <p>Developed this project only Homepage as part of hands-on web development training at EncoderBytes. The application was created for learning and practice purposes, focusing on responsive design, modern UI implementation, and frontend functionality using Next.js and Tailwind CSS,</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

     
       {/* contact Section  */}
      <section id="contact" className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-6 text-center">
         <motion.h3 className="text-4xl font-bold mb-12 " {...fadeInUp}>
           Contact           </motion.h3>
         <div className="grid md:grid-cols-2 gap-8">
          <motion.div {...fadeInUp}>
              <h4 className="text-2xl font-semibold mb-4">Get in Touch</h4>
             <div className="space-y-4">
               <div className="flex items-center justify-center">
                  <FaPhone className="mr-3 text-blue-600" /> 03339447275
                </div>
                <div className="flex items-center justify-center">
                  <FaEnvelope className="mr-3 text-blue-600" /><a href="https://kashifkhn6464ak@gmail.com">kashifkhn6464ak@gmail.com</a>
                 </div>
               <div className="flex items-center justify-center">
                  <FaMapMarkerAlt className="mr-3 text-blue-600" /> Tehkal Bala, Peshawar, Pakistan
                </div>
                <div className="flex space-x-4 justify-center">
                   <a href="https://www.linkedin.com/in/kashif-khan-malik/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-600 transition-colors">
                     <FaLinkedin />
                  </a>
                   <a href="https://github.com/engrkashifkhan" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-600 transition-colors">
                     <FaGithub />
                   </a>
                 </div>
               </div>
             </motion.div>
             <motion.form
              ref={formRef}
              onSubmit={handleFormSubmit}
              className="bg-black text-white p-6 rounded-lg shadow-lg"
              {...fadeInUp}
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleFormChange}
                required
                className="w-full p-3 mb-4 rounded-lg border border-gray-600 bg-gray-800 text-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleFormChange}
                required
                className="w-full p-3 mb-4 rounded-lg border border-gray-600 bg-gray-800 text-white"
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleFormChange}
                required
                className="w-full p-3 mb-4 rounded-lg border border-gray-600 bg-gray-800 text-white h-32"
              ></textarea>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {submitMessage && <p className="mt-4 text-blue-400">{submitMessage}</p>}
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-black text-white text-center">
        <p>&copy; 2023 Kashif Khan. All rights reserved. | <button onClick={downloadCV} className="hover:text-blue-400"><FaDownload className="inline mr-1" /> Download CV</button></p>
      </footer>
    </div>
  );
}

export default App;