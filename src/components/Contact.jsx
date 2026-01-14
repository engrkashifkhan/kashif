import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Contact = ({ formRef }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        "service_9g975sf",
        "9g975sf",
        formRef.current,
        "1dmtECDsd_Cqla7C9"
      );
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("Failed to send message.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8">
        <div className="space-y-4 text-center">
          <h3 className="text-4xl font-bold mb-6">Contact</h3>
          <p><FaPhone className="inline mr-2" /> 03339447275</p>
          <p><FaEnvelope className="inline mr-2" /> kashifkhn6464ak@gmail.com</p>
          <p><FaMapMarkerAlt className="inline mr-2" /> Peshawar, Pakistan</p>

          <div className="flex justify-center space-x-4 text-2xl">
            <a href="https://linkedin.com" target="_blank"><FaLinkedin /></a>
            <a href="https://github.com" target="_blank"><FaGithub /></a>
          </div>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="bg-black p-6 rounded-lg">
          <input className="w-full p-3 mb-4 bg-gray-800" placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })} />

          <input className="w-full p-3 mb-4 bg-gray-800" placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })} />

          <textarea className="w-full p-3 mb-4 bg-gray-800 h-32" placeholder="Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })} />

          <button className="w-full bg-blue-600 py-3 rounded">Send Message</button>
          {status && <p className="mt-3 text-blue-400">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
