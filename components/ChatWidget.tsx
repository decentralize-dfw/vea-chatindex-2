import React, { useState, useRef, useEffect } from 'react';
import { GenerateContentResponse } from "@google/genai";
import { createChatSession } from '../services/ai';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'VEA Spatial Intelligence online. I am ready to discuss our architectural vision, services, and projects.' }
  ]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  
  // Create a chat session reference to persist across renders
  const chatSessionRef = useRef(createChatSession());

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleTransmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const query = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: query }]);
    setLoading(true);

    try {
      // Use the SDK's sendMessage method
      const result: GenerateContentResponse = await chatSessionRef.current.sendMessage({ 
        message: query 
      });

      const responseText = result.text || "No data returned from the spatial engine.";

      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      console.error("AI Communication Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Connection interrupted. Please retry your query." }]);
      
      // Reset session on error to clear potentially bad state
      chatSessionRef.current = createChatSession();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-12 right-6 z-[20000] flex flex-col items-end font-telegrama">
      {/* TERMINAL UI */}
      <div 
        className={`
          w-[290px] sm:w-[360px] bg-white border border-black rounded-2xl overflow-hidden flex flex-col shadow-2xl 
          transition-all duration-300 origin-bottom-right mb-4
          ${isOpen ? 'h-[500px] opacity-100 scale-100' : 'h-0 opacity-0 scale-90 pointer-events-none'}
        `}
      >
        <div className="p-4 border-b border-black/5 bg-gray-50 flex justify-between items-center text-[9px] font-bold tracking-widest uppercase">
          <span>VEA_TERMINAL_CORE_V3.8</span>
          <button onClick={() => setIsOpen(false)} className="opacity-50 hover:opacity-100">CLOSE</button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-4 text-[11px] bg-white">
          {messages.map((m, i) => (
            <div 
              key={i} 
              className={`
                p-3 rounded-xl leading-relaxed break-words max-w-[90%] normal-case
                ${m.role === 'user' 
                  ? 'bg-black text-white ml-auto rounded-tr-none' 
                  : 'bg-gray-100 text-black mr-auto rounded-tl-none'}
              `}
            >
              {m.text}
            </div>
          ))}
          {loading && (
            <div className="text-[8px] animate-pulse text-gray-400 font-bold uppercase">
              COMPUTING...
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        <form onSubmit={handleTransmit} className="p-3 border-t border-black/5 bg-white flex gap-2">
          <input 
            className="flex-1 text-[11px] outline-none placeholder:opacity-30 p-1 bg-transparent normal-case" 
            value={input} 
            onChange={e => setInput(e.target.value)} 
            placeholder="Ask a question..." 
          />
          <button 
            disabled={loading} 
            className="bg-black text-white text-[9px] px-4 py-2 rounded-lg font-bold hover:opacity-80 transition-opacity disabled:opacity-50 uppercase"
          >
            SEND
          </button>
        </form>
      </div>

      {/* TRIGGER BUTTON */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-12 h-12 bg-black rounded-full flex items-center justify-center cursor-pointer shadow-xl transition-transform duration-300 hover:scale-110 border-none outline-none"
      >
        <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse-custom"></div>
      </button>
    </div>
  );
};

export default ChatWidget;