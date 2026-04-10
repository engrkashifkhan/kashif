import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef();

  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        "service_9g975sf",        // ✅ your service ID
        "template_232gsyj",      // ❗ REPLACE with your real template ID
        formRef.current,
        "1dmtECDsd_Cqla7C9"      // ✅ your public key
        
      );

      console.log(result.text);
      setStatus("✅ Message sent successfully!");

      // Reset form
      formRef.current.reset();

    } catch (error) {
      console.error(error);
      setStatus("❌ Failed to send message.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-gray-800 text-slate-900 dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8">

        {/* Left Side */}
        
        <div className="space-y-4 text-center">
          <h3 className="text-4xl font-bold mb-6">Contact</h3>
          <p><FaPhone className="inline mr-2" /> 03339447275</p>
          <p><FaEnvelope className="inline mr-2" /> kashifkhn6464ak@gmail.com</p>
          <p><FaMapMarkerAlt className="inline mr-2" /> Peshawar, Pakistan</p>

          <div className="flex justify-center space-x-4 text-2xl">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Right Side Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-white dark:bg-black p-6 rounded-2xl shadow-xl border border-black/5 dark:border-white/5"
        >
          <input
            type="text"
            name="user_name"   // ✅ REQUIRED for EmailJS
            placeholder="Name"
            required
            className="w-full p-3 mb-4 bg-slate-50 dark:bg-gray-800 border border-black/10 dark:border-white/10 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            name="user_email"  // ✅ REQUIRED
            placeholder="Email"
            required
            className="w-full p-3 mb-4 bg-slate-50 dark:bg-gray-800 border border-black/10 dark:border-white/10 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            // name="message"     // ✅ REQUIRED
            name="user_message" 
            placeholder="Message"
            required
            className="w-full p-3 mb-4 bg-slate-50 dark:bg-gray-800 border border-black/10 dark:border-white/10 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
          />

          <button className="w-full bg-blue-600 py-3 rounded hover:bg-blue-700 transition">
            Send Message
          </button>

          {status && (
            <p className="mt-3 text-center text-blue-400">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;






