"use client";
import React, { useState } from 'react';
import { getVibeRecommendation } from '../services/geminiService';
import { Sparkles, Send, Loader2, X, MessageSquare } from 'lucide-react';

const VibeCurator: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleCurate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsLoading(true);
    setResponse(null);
    
    const result = await getVibeRecommendation(prompt);
    setResponse(result);
    setIsLoading(false);
  };

  return (
    <>
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-40 bg-paint hover:bg-brand text-canvas p-4 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 group hover:scale-110"
      >
        <MessageSquare className="group-hover:hidden" />
        <Sparkles className="hidden group-hover:block animate-pulse" />
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-canvas/90 backdrop-blur-md">
          <div className="bg-surface w-full max-w-md p-1 relative shadow-2xl border border-white/10">
            {/* Inner Content */}
            <div className="bg-canvas p-8 h-full w-full">
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-paint/50 hover:text-brand transition-colors"
              >
                <X size={20} />
              </button>

              <div className="mb-8">
                <span className="text-brand font-mono text-xs tracking-widest uppercase mb-2 block">AI Assistant</span>
                <h3 className="font-display text-3xl text-paint">VIBE CHECK</h3>
              </div>

              <div className="min-h-[100px] mb-6">
                {response ? (
                   <p className="text-paint text-lg leading-relaxed animate-fade-in">
                     <span className="text-brand mr-2">›</span>
                     {response}
                   </p>
                ) : (
                   <p className="text-paint/40 text-sm">
                     "I need heavy techno in a dark room."<br/>
                     "Something spiritual for sunset."<br/>
                     "High energy Afrotech."
                   </p>
                )}
              </div>

              <form onSubmit={handleCurate} className="relative">
                <input 
                  type="text" 
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="How are you feeling?"
                  className="w-full bg-surface border-b border-white/20 text-paint p-4 pr-12 focus:outline-none focus:border-brand focus:bg-white/5 transition-colors font-sans placeholder:text-paint/20"
                />
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-brand disabled:text-paint/20"
                >
                  {isLoading ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VibeCurator;