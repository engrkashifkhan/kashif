import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaComments, FaTimes, FaPaperPlane, FaRobot, FaUser } from 'react-icons/fa';
import { GoogleGenerativeAI } from '@google/generative-ai';

const portfolioData = {
  name: "Kashif Khan",
  role: "MERN Stack Developer",
  summary: "Passionate MERN Stack Developer currently working as an Intern at EncoderBytes Software House, skilled in building responsive and scalable web applications using React.js, Node.js, Express.js, and MongoDB.",
  education: "BS Software Engineering from Islamia College Peshawar (2020 – 2024)",
  skills: [
    "HTML (90%)", "CSS (85%)", "JavaScript (80%)", "React.js (85%)",
    "Tailwind CSS (90%)", "Bootstrap (50%)", "Framer Motion (75%)",
    "MongoDB (60%)", "Express.js (40%)", "Node.js (20%)"
  ],
  experience: [
    {
      title: "MERN Stack Development (PSEB Internship)",
      company: "EncoderBytes Software House",
      period: "March 2026 - Present",
      details: ["Developing full-stack web applications using MERN stack", "Building RESTful APIs", "Focusing on scalability and performance"]
    },
    {
      title: "Frontend Development Internship",
      company: "DevelopersHub Corporation (Remote)",
      period: "June 10 - July 26, 2025",
      details: ["Developed e-commerce frontend with animations", "Implemented search, filtering, and cart features"]
    },
    {
      title: "Web Development Trainee (NAVTTC)",
      company: "Encoder Bytes Software House",
      period: "3 Months",
      details: ["Completed NAVTTC-certified training", "Developed NFT Marketplace and TRIPSY travel website"]
    }
  ],
  projects: [
    { title: "Tripsy Website", tech: "React.js, Tailwind CSS, Zustand", desc: "Practice-based travel website", link: "https://tripsiy.vercel.app/" },
    { title: "E-commerce Website", tech: "React.js, Tailwind, Framer Motion", desc: "Search, filtering, cart, wishlist & animations", link: "https://ecommerce-web-design-weld.vercel.app/" },
    { title: "Portfolio Website", tech: "React.js, Tailwind CSS", desc: "Personal portfolio to showcase frontend skills", link: "https://intern-intelligence-portfolio-delta.vercel.app/" },
    { title: "EncoderBytes Website", tech: "Next.js, Tailwind CSS", desc: "Homepage developed during training", link: "https://encoder-byte-q6rj.vercel.app/" }
  ],
  contact: {
    mobile: "03339447275",
    email: "kashifkhn6464ak@gmail.com",
    address: "Peshawar, Pakistan",
    linkedin: "https://linkedin.com",
    github: "https://github.com"
  }
};

const SYSTEM_PROMPT = `You are the official AI assistant for Kashif Khan's portfolio. Your mission is to provide accurate, professional, and very brief information about Kashif's skills, projects, and experience.

Strict Requirements:
1. ONLY use the information provided in the context below. 
2. Be extremely concise: limit your response to 1-2 powerful sentences. 
3. COMPLETENESS: Never stop mid-sentence. Always finish your thought within the sentence limit.
4. If a query is unrelated to Kashif's portfolio, politely say something formal, friendly and professional and in natural language.
5. Tone: Professional, helpful, and direct.

Context: ${JSON.stringify(portfolioData)}`;


const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hi! I\'m Kashif\'s assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const apiKey = import.meta.env.VITE_GEMINI_API_KEY || "";

    if (!apiKey) {
      setMessages(prev => [...prev,
      { role: 'user', text: input },
      { role: 'bot', text: 'Please set a valid Gemini API Key in your .env file.' }
      ]);
      setInput('');
      return;
    }

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const genAI = new GoogleGenerativeAI(apiKey.trim());
      // Try gemini-1.5-flash-latest as it is more likely to exist in v1beta than the exact version for some keys
      const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash",
        systemInstruction: SYSTEM_PROMPT,
      });


      // Filter out the initial bot greeting and map to Gemini format
      const history = messages
        .filter(msg => msg.text !== 'Hi! I\'m Kashif\'s assistant. How can I help you today?')
        .map(msg => ({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.text }],
        }));

      const chat = model.startChat({
        history: history,
        generationConfig: {
          maxOutputTokens: 500,
        },

      });

      const result = await chat.sendMessage(userMessage);
      const response = await result.response;
      const text = response.text();

      setMessages(prev => [...prev, { role: 'bot', text }]);
    } catch (error) {
      console.error("Chatbot Error Detail:", error);
      // To help the user debug, I'll show a more descriptive message if possible
      let errorMessage = "Sorry, I'm having trouble connecting right now. ";
      if (error.message?.includes("API_KEY_INVALID")) {
        errorMessage += "Your API key seems to be invalid.";
      } else if (error.message?.includes("429")) {
        errorMessage += "Rate limit exceeded. Please wait a moment.";
      } else {
        errorMessage += "Please check your console for details or try again later.";
      }

      setMessages(prev => [...prev, { role: 'bot', text: errorMessage }]);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-gray-900 border border-blue-500/30 rounded-2xl shadow-2xl w-80 sm:w-96 overflow-hidden mb-4 flex flex-col max-h-[500px]"
          >
            {/* Header */}
            <div className="bg-blue-600 p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <FaRobot className="text-white text-xl" />
                <span className="text-white font-bold">Kashif AI</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200 transition">
                <FaTimes />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 p-4 overflow-y-auto space-y-4 min-h-[300px] bg-black/40"
            >
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.role === 'user'
                    ? 'bg-blue-600 text-white rounded-br-none'
                    : 'bg-gray-800 text-gray-200 rounded-bl-none'
                    }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-800 text-gray-200 p-3 rounded-2xl rounded-bl-none text-sm animate-pulse">
                    Thinking...
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-800 bg-gray-900">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me something..."
                  className="w-full bg-gray-800 text-white rounded-full py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading}
                  className="absolute right-2 text-blue-500 hover:text-blue-400 disabled:text-gray-600 transition"
                >
                  <FaPaperPlane />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 transition-colors flex items-center justify-center"
      >
        {isOpen ? <FaTimes size={24} /> : <FaComments size={24} />}
      </motion.button>
    </div>
  );
};

export default Chatbot;
