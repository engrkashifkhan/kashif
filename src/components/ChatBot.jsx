import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaComments, FaTimes, FaPaperPlane, FaRobot, FaUser } from 'react-icons/fa';
import { GoogleGenerativeAI } from '@google/generative-ai';

// ==================== YOUR EXACT DATA & LOGIC (UNCHANGED) ====================
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
      const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash",
        systemInstruction: SYSTEM_PROMPT,
      });

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

  // ==================== UI FIXED (LIGHT + DARK MODE) ====================
  return (
    <div className="fixed bottom-5 right-5 z-50 font-mono">

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 flex items-center justify-center rounded-lg
        bg-white dark:bg-[#1e1e1e]
        border border-black/10 dark:border-white/10
        text-indigo-500 dark:text-[#4ec9b0]
        hover:border-indigo-500 dark:hover:border-[#4ec9b0]
        transition-colors shadow-lg"
      >
        {isOpen ? <FaTimes size={18} /> : <FaComments size={18} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            className="absolute bottom-16 right-0 w-80 sm:w-96 max-h-[500px]
            flex flex-col rounded-lg overflow-hidden shadow-2xl
            bg-white dark:bg-[#1e1e1e]
            border border-black/10 dark:border-white/10"
          >

            {/* Header */}
            <div className="flex justify-between px-4 py-2.5
            bg-gray-100 dark:bg-[#252526]
            border-b border-black/10 dark:border-white/10">
              <span className="text-xs text-gray-700 dark:text-gray-300">
                Kashif AI Assistant
              </span>
              <button onClick={() => setIsOpen(false)}>
                <FaTimes size={12} />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 p-4 overflow-y-auto space-y-3
              bg-white dark:bg-[#1e1e1e]
              text-gray-700 dark:text-[#d4d4d4] text-xs"
            >
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] px-3 py-2 rounded
                    ${msg.role === 'user'
                      ? 'bg-indigo-500 text-white'
                      : 'bg-gray-100 dark:bg-[#2d2d2d] border border-black/10 dark:border-white/10 text-gray-800 dark:text-[#ce9178]'
                    }`}>
                    {msg.text}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 dark:bg-[#2d2d2d] border border-black/10 dark:border-white/10 px-3 py-2 rounded text-xs text-gray-500 dark:text-gray-400">
                    Processing...
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-black/10 dark:border-white/10
            bg-gray-100 dark:bg-[#252526]">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your query..."
                  disabled={isLoading}
                  className="flex-1 bg-transparent text-gray-800 dark:text-white placeholder-gray-400 text-xs focus:outline-none"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="text-indigo-500 dark:text-[#4ec9b0] disabled:text-gray-400"
                >
                  <FaPaperPlane size={12} />
                </button>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;