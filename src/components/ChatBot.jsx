import { useState, useEffect, useRef } from 'react';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "👋 Hi! I'm Kashif's AI assistant. Ask about his MERN stack skills, projects like Tripsy, work at EncoderBytes, or how to contact him!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiStatus, setApiStatus] = useState('checking');
  const messagesEndRef = useRef(null);

  // Test API connection on mount
  useEffect(() => {
    const testAPI = async () => {
      try {
        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: [] })
        });
        setApiStatus(res.ok ? 'online' : 'offline');
      } catch {
        setApiStatus('offline');
      }
    };
    testAPI();
  }, []);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Load chat history from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('kashif-portfolio-chat');
    if (saved) {
      try { setMessages(JSON.parse(saved)); } catch (e) { console.warn('Failed to load chat history'); }
    }
  }, []);

  // Save chat history to localStorage
  useEffect(() => {
    if (messages.length > 1) {
      localStorage.setItem('kashif-portfolio-chat', JSON.stringify(messages));
    }
  }, [messages]);

  // 🎯 ACCURATE FALLBACK RESPONSES (when AI is unavailable)
  const getFallbackResponse = (userInput) => {
    const lower = userInput.toLowerCase();
    
    // Skills & proficiency
    if (lower.match(/skill|proficiency|percentage|tailwind|react|html|css|javascript|node|mongo|express|framer/)) {
      return "Kashif's technical skills:\n🎨 Tailwind CSS: 90% ⭐\n📄 HTML: 90%\n💅 CSS: 85%\n⚛️ React.js: 85%\n💡 JavaScript: 80%\n✨ Framer Motion: 75%\n🗄️ MongoDB: 60%\n🔄 Express.js: 40%\n🟢 Node.js: 20% (learning)\n\nHe specializes in frontend with React + Tailwind!";
    }
    
    // Projects
    if (lower.match(/project|tripsy|ecommerce|portfolio|nft|encoderbytes website|built|created/)) {
      return "Kashif's projects:\n🚀 Tripsy - Travel app (React+Tailwind+Zustand)\n🛒 E-commerce Site - Search, cart, animations (React+Tailwind+Framer Motion)\n👨‍💻 Portfolio - This site! (React+Tailwind)\n🏢 EncoderBytes Homepage (Next.js+Tailwind)\n🖼️ NFT Marketplace (NAVTTC training)\n\nAll built with modern, responsive design!";
    }
    
    // Contact info
    if (lower.match(/contact|email|phone|reach|hire|connect|linkedin|github|location|peshawar/)) {
      return "📧 Email: kashifkhn6464ak@gmail.com\n📱 Phone: 03339447275\n📍 Location: Peshawar, Pakistan\n\nYou can also use the contact form on his portfolio or connect on LinkedIn/GitHub. Kashif typically responds within 24-48 hours!";
    }
    
    // Work experience
    if (lower.match(/experience|work|intern|encoder|developer|job|pseb|navttc|developerhub/)) {
      return "Kashif's experience:\n💼 MERN Stack Intern @ EncoderBytes (Mar 2026-Present) - Building full-stack apps, REST APIs\n🖥️ Frontend Intern @ DevelopersHub (Remote, Jun-Jul 2025) - E-commerce frontend with animations\n🎓 NAVTTC Trainee @ EncoderBytes (3 months) - Certified training, built Tripsy & NFT Marketplace";
    }
    
    // Education
    if (lower.match(/education|degree|college|university|study|islamia|software engineering/)) {
      return "Kashif earned his BS in Software Engineering from Islamia College Peshawar (2020-2024), combining formal education with hands-on development experience in modern web technologies!";
    }
    
    // Availability / Hiring
    if (lower.match(/available|hire|freelance|job|opportunity|work together|collaborate|project/)) {
      return "Yes! 🎉 Kashif is currently interning at EncoderBytes and is open to freelance projects or full-time opportunities. He specializes in React.js + Tailwind CSS frontend development. Reach out at kashifkhn6464ak@gmail.com or 03339447275 to discuss your project!";
    }
    
    // What is MERN
    if (lower.match(/mern|stack|what is|explain/)) {
      return "MERN stands for MongoDB, Express.js, React.js, and Node.js - a full JavaScript stack for building web applications. Kashif is currently strengthening his MERN skills as an intern at EncoderBytes, with strong expertise in the React (frontend) portion!";
    }
    
    // Default helpful response
    return "Great question! 💡 For detailed info, check Kashif's portfolio sections: Skills, Projects, or Experience. Or contact him directly at kashifkhn6464ak@gmail.com. He'd love to hear from you! 😊";
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input.trim() };
    const newMessages = [...messages, userMessage];
    
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages })
      });

      const responseText = await res.text();
      
      if (!res.ok) {
        console.error('❌ API Error:', res.status, responseText);
        throw new Error(`API failed: ${res.status}`);
      }
      
      let data;
      try {
        data = JSON.parse(responseText);
      } catch (parseError) {
        console.error('❌ JSON Parse Error:', parseError);
        throw new Error('Invalid API response format');
      }
      
      if (data.error) {
        console.error('❌ API returned error:', data.error);
        throw new Error(data.error);
      }
      
      if (!data.reply) {
        throw new Error('No reply in API response');
      }
      
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
      setApiStatus('online');
      
    } catch (error) {
      console.error('💬 Chat error:', error.message);
      
      // Use accurate fallback
      const fallbackReply = getFallbackResponse(userMessage.content);
      setMessages(prev => [...prev, { role: 'assistant', content: fallbackReply }]);
      setApiStatus('offline');
      
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([{ 
      role: 'assistant', 
      content: "👋 Chat cleared! I'm Kashif's assistant. Ask about his MERN skills, Tripsy project, EncoderBytes internship, or contact info!" 
    }]);
    localStorage.removeItem('kashif-portfolio-chat');
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-purple-600 
                   text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 
                   hover:scale-105 hover:rotate-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label={isOpen ? 'Close chat' : 'Open chat with Kashif\'s assistant'}
      >
        {isOpen ? (
          <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <div className="relative">
            <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            {apiStatus === 'offline' && (
              <span className="absolute -top-1 -right-1 size-3 bg-yellow-400 rounded-full border-2 border-white animate-pulse" title="Using quick responses" />
            )}
          </div>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-50 w-80 sm:w-96 bg-white dark:bg-gray-800 
                        rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 
                        overflow-hidden animate-fade-in-up flex flex-col max-h-[32rem]">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-white/20 flex items-center justify-center text-lg">🤖</div>
              <div>
                <h3 className="font-semibold leading-tight">Kashif's Assistant</h3>
                <p className="text-xs opacity-90 flex items-center gap-1">
                  <span className={`size-2 rounded-full animate-pulse ${apiStatus === 'online' ? 'bg-green-400' : 'bg-yellow-400'}`} />
                  {apiStatus === 'online' ? 'AI Mode' : 'Quick Mode'}
                </p>
              </div>
            </div>
            <button onClick={clearChat} className="p-2 hover:bg-white/20 rounded-lg transition-colors" aria-label="Clear chat">
              <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50 dark:bg-gray-900">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-slide-in`}>
                <div className={`max-w-[85%] p-3 rounded-2xl ${
                  msg.role === 'user' 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-br-md' 
                    : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 rounded-bl-md shadow-sm'
                }`}>
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isLoading && (
              <div className="flex justify-start animate-slide-in">
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl rounded-bl-md p-3 shadow-sm">
                  <div className="flex gap-1">
                    <span className="size-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="size-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="size-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-3 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about MERN skills, Tripsy, EncoderBytes, or contact..."
                disabled={isLoading}
                className="flex-1 px-4 py-2.5 text-sm border border-gray-300 dark:border-gray-600 
                           rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 
                           bg-gray-50 dark:bg-gray-700 dark:text-white placeholder-gray-400
                           disabled:opacity-50 transition-all"
                aria-label="Type your message"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white 
                           rounded-full hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 
                           disabled:cursor-not-allowed transition-all flex items-center justify-center"
                aria-label="Send message"
              >
                {isLoading ? (
                  <svg className="size-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                ) : (
                  <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                )}
              </button>
            </div>
            <p className="text-[10px] text-center text-gray-400 mt-2">
              {apiStatus === 'online' ? '✨ AI-powered • Based on your portfolio' : '⚡ Quick responses • AI unavailable'}
            </p>
          </form>
        </div>
      )}
    </>
  );
}

