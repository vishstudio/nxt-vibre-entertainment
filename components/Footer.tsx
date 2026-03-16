"use client";
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-canvas relative z-10 pt-0 border-t border-white/10">
       {/* 1. Marquee Strip */}
       <div className="border-b border-white/10 overflow-hidden py-3 bg-surface/50 backdrop-blur-sm">
          <div className="animate-marquee whitespace-nowrap flex gap-8 text-[10px] font-mono uppercase tracking-[0.2em] text-paint/30">
             <span>Sonic Architecture</span>
             <span className="text-brand">///</span>
             <span>Berlin Est. 2024</span>
             <span className="text-brand">///</span>
             <span>Deep Frequencies</span>
             <span className="text-brand">///</span>
             <span>Sonic Architecture</span>
             <span className="text-brand">///</span>
             <span>Berlin Est. 2024</span>
             <span className="text-brand">///</span>
             <span>Deep Frequencies</span>
             <span className="text-brand">///</span>
             <span>Sonic Architecture</span>
             <span className="text-brand">///</span>
             <span>Berlin Est. 2024</span>
             <span className="text-brand">///</span>
             <span>Deep Frequencies</span>
          </div>
       </div>

       {/* 2. Main Content Grid */}
       <div className="container mx-auto px-6 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-12">
             
             {/* Brand & Philosophy - Spans 5 cols */}
             <div className="md:col-span-5 md:border-r border-white/10 py-16 md:pr-12 md:pl-6">
                <ScrollReveal>
                   <span className="font-display font-black text-3xl text-white mb-8 block tracking-tight">VIBRÉ ENT.</span>
                   <p className="text-paint/60 text-lg md:text-xl font-light leading-relaxed max-w-md">
                      We design experiences that transcend the ordinary. Music is not just sound; it is the architecture of the soul.
                   </p>
                   <div className="mt-12 flex items-center gap-3">
                      <div className="relative">
                        <div className="w-2 h-2 bg-brand rounded-full animate-pulse relative z-10"></div>
                        <div className="absolute inset-0 bg-brand/50 rounded-full animate-ping"></div>
                      </div>
                      <span className="font-mono text-xs text-brand/80 uppercase tracking-widest">System Online</span>
                   </div>
                </ScrollReveal>
             </div>

             {/* Links Column 1 - Socials - Spans 2 cols */}
             <div className="md:col-span-2 md:border-r border-white/10 py-16 md:px-8 pl-6 border-t md:border-t-0 border-white/10">
                <ScrollReveal delay={0.1}>
                   <h4 className="font-mono text-xs text-brand uppercase tracking-widest mb-8 opacity-70">[Socials]</h4>
                   <ul className="flex flex-col gap-5">
                      {['Facebook', 'Instagram', 'TikTok'].map((item) => (
                         <li key={item}>
                            <a href="#" className="group flex items-center gap-2 text-paint/60 hover:text-white transition-colors">
                               <span className="text-sm font-medium tracking-wide">{item}</span>
                               <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-brand" />
                            </a>
                         </li>
                      ))}
                   </ul>
                </ScrollReveal>
             </div>

             {/* Links Column 2 - Streaming - Spans 3 cols */}
             <div className="md:col-span-3 md:border-r border-white/10 py-16 md:px-8 pl-6 border-t md:border-t-0 border-white/10">
                <ScrollReveal delay={0.15}>
                   <h4 className="font-mono text-xs text-brand uppercase tracking-widest mb-8 opacity-70">[Streaming]</h4>
                   <ul className="flex flex-col gap-5">
                      {['YouTube', 'SoundCloud', 'Spotify'].map((item) => (
                         <li key={item}>
                            <a href="#" className="group flex items-center gap-2 text-paint/60 hover:text-white transition-colors">
                               <span className="text-sm font-medium tracking-wide">{item}</span>
                               <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-brand" />
                            </a>
                         </li>
                      ))}
                   </ul>
                </ScrollReveal>
             </div>

             {/* Links Column 3 - Sitemap - Spans 2 cols */}
             <div className="md:col-span-2 py-16 md:px-8 pl-6 border-t md:border-t-0 border-white/10">
                <ScrollReveal delay={0.2}>
                   <h4 className="font-mono text-xs text-brand uppercase tracking-widest mb-8 opacity-70">[Index]</h4>
                   <ul className="flex flex-col gap-5">
                      {['Events', 'Artists', 'Merch', 'About', 'Contact'].map((item) => (
                         <li key={item}>
                            <a href={`#${item.toLowerCase()}`} className="text-paint/60 hover:text-white transition-colors uppercase font-medium text-sm tracking-wider hover:pl-2 transition-all duration-300">
                               {item}
                            </a>
                         </li>
                      ))}
                   </ul>
                </ScrollReveal>
             </div>

          </div>
       </div>

       {/* 3. Big Email Action Area */}
       <div className="border-t border-b border-white/10 group relative overflow-hidden">
          <div className="absolute inset-0 bg-brand/0 group-hover:bg-brand/10 transition-colors duration-500"></div>
          <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none"></div>
          
          <a href="mailto:info@vibre.ent" className="w-full py-24 md:py-32 flex justify-center items-center relative z-10 overflow-hidden">
             <ScrollReveal delay={0.3} className="w-full text-center">
                <span className="font-display font-black text-[12vw] md:text-[14vw] leading-[0.8] text-transparent text-outline group-hover:text-white transition-all duration-700 select-none block hover:scale-105 transform origin-center">
                   INFO@VIBRE.ENT
                </span>
                <span className="block mt-4 font-mono text-xs md:text-sm text-brand uppercase tracking-[0.5em] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                   Initiate Contact
                </span>
             </ScrollReveal>
          </a>
       </div>

       {/* 4. Bottom Technical Bar */}
       <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
          <p className="font-mono text-[10px] text-paint/30 uppercase tracking-widest text-center md:text-left">
             © 2025 <span className="text-brand">VISH Studio</span>. <br className="md:hidden"/> All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
             <a href="#" className="font-mono text-[10px] text-paint/30 hover:text-brand uppercase tracking-widest transition-colors">Privacy Policy</a>
             <a href="#" className="font-mono text-[10px] text-paint/30 hover:text-brand uppercase tracking-widest transition-colors">Terms of Service</a>
             <button onClick={scrollToTop} className="font-mono text-[10px] text-paint/30 hover:text-white uppercase tracking-widest transition-colors flex items-center gap-1 group">
                <span className="group-hover:-translate-y-1 transition-transform duration-300">↑</span> Back to Top
             </button>
          </div>
       </div>
    </footer>
  );
};

export default Footer;