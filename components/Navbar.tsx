"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const navLinks = [
    { label: 'HOME', href: '/', desc: 'Main Frequency' },
    { label: 'EVENTS', href: '/#events', desc: 'Upcoming Rituals' },
    { label: 'ARTISTS', href: '/#artists', desc: 'Sonic Architects' },
    { label: 'SHOP', href: '/shop', desc: 'The Uniform' },
    { label: 'CONTACT', href: '#footer', desc: 'Signal Us' }
  ];

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const buildHref = (href: string) => {
    if (!basePath) return href;
    if (href.startsWith('#')) return `${basePath}/${href}`;
    return `${basePath}${href}`;
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 opacity-0 animate-nav-entrance ${isScrolled
          ? 'py-4 bg-black/50 backdrop-blur-md border-b border-white/5'
          : 'py-6 md:py-8 bg-transparent'
          }`}
        style={{ animationDelay: isHome ? '2.4s' : '0.2s' }}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">

          {/* Logo */}
          <a href={buildHref('/')} className="relative z-50 group mix-blend-difference text-white">
            <span className="font-display font-black text-2xl tracking-tighter block leading-none">VIBRÉ</span>
          </a>

          {/* Desktop Nav - Minimal Mono Style */}
          <div className="hidden md:flex items-center gap-12 mix-blend-difference text-white">
            {/* Nav Items as technical labels */}
            <div className={`flex gap-12 text-[10px] font-mono font-bold tracking-[0.2em] uppercase transition-all duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0 translate-x-10 pointer-events-none'}`}>
              <a href={buildHref('/#events')} className="hover:text-brand transition-colors">[Events]</a>
              <a href={buildHref('/#artists')} className="hover:text-brand transition-colors">[Artists]</a>
              <a href={buildHref('/shop')} className="hover:text-brand transition-colors">[Merch]</a>
            </div>

            {/* Menu Trigger */}
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-3 group hover:cursor-pointer pl-8 border-l border-white/30"
            >
              <div className="flex flex-col items-end gap-[4px]">
                <span className="w-8 h-[1px] bg-white group-hover:w-10 transition-all duration-300"></span>
                <span className="w-5 h-[1px] bg-white group-hover:w-10 transition-all duration-300 delay-75"></span>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest font-bold group-hover:text-brand transition-colors">Menu</span>
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden z-50 text-white mix-blend-difference p-2"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* === FULL SCREEN MENU === */}

      <div
        className={`fixed inset-0 z-[60] bg-[#050404] transition-all duration-500 ease-[cubic-bezier(0.86,0,0.07,1)] ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible delay-200'
          }`}
      >
        {/* Background Texture */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-grain opacity-20"></div>
          {/* Subtle Gradient Spot */}
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand/5 rounded-full blur-[100px] pointer-events-none"></div>
        </div>

        <div className="relative z-10 w-full h-full flex flex-col">

          {/* Header / Close */}
          <div className="w-full flex justify-between items-center p-6 md:p-12">
            <div className="opacity-0">Placeholder</div> {/* Spacer */}
            <button
              onClick={() => setIsOpen(false)}
              className={`group flex items-center gap-4 text-white hover:text-brand hover:cursor-pointer transition-all duration-300 ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}
            >
              <span className="hidden md:block font-mono text-xs tracking-widest uppercase opacity-50 group-hover:opacity-100">Close</span>
              <X size={32} className="group-hover:rotate-90 transition-transform duration-500" />
            </button>
          </div>

          {/* Main Content Grid */}
          <div className="container mx-auto px-6 md:px-12 flex-grow flex flex-col md:flex-row">

            {/* Left Column: Navigation Items */}
            <div className="w-full md:w-2/3 flex flex-col justify-center gap-2 md:gap-0">
              {navLinks.map((link, idx) => (
                <a
                  key={link.label}
                  href={buildHref(link.href)}
                  onClick={() => setIsOpen(false)}
                  className="group relative flex items-center md:py-4"
                >
                  {/* Index Number */}
                  <span className={`font-mono text-xs md:text-sm text-brand/50 w-8 md:w-16 transition-all duration-500 ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} style={{ transitionDelay: `${idx * 50}ms` }}>
                    0{idx + 1}
                  </span>

                  {/* Text */}
                  <div className="relative overflow-hidden">
                    <span
                      className={`block font-display font-black text-5xl md:text-8xl leading-none transition-all duration-500 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                        } text-transparent text-outline group-hover:text-white transition-colors`}
                      style={{ transitionDelay: `${idx * 50}ms` }}
                    >
                      {link.label}
                    </span>
                  </div>

                  {/* Hover Arrow (Desktop) */}
                  <div className="hidden md:block opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-300 ml-6 text-brand">
                    <ArrowUpRight size={48} />
                  </div>
                </a>
              ))}
            </div>

            {/* Right Column: Info & Details (Desktop Only) */}
            <div className={`hidden md:flex w-1/3 flex-col justify-center border-l border-white/10 pl-16 transition-all duration-700 delay-300 ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>

              <div className="mb-12">
                <h4 className="font-mono text-xs text-brand uppercase tracking-widest mb-4">Headquarters</h4>
                <p className="text-white/60 font-sans text-lg leading-relaxed">
                  Grand Gaube,<br />
                  Cap Malheureux,<br />
                  Mauritius
                </p>
              </div>

              <div className="mb-12">
                <h4 className="font-mono text-xs text-brand uppercase tracking-widest mb-4">Connect</h4>
                <ul className="flex flex-col gap-2">
                  <li><a href="#" className="text-white/40 hover:text-white transition-colors text-sm">Instagram</a></li>
                  <li><a href="#" className="text-white/40 hover:text-white transition-colors text-sm">SoundCloud</a></li>
                  <li><a href="#" className="text-white/40 hover:text-white transition-colors text-sm">Resident Advisor</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-mono text-xs text-brand uppercase tracking-widest mb-4">Inquiries</h4>
                <a href="mailto:info@vibre.ent" className="text-white font-display text-2xl hover:text-brand transition-colors">info@vibre.ent</a>
              </div>

            </div>
          </div>

          {/* Mobile Footer Info */}
          <div className={`md:hidden p-6 pb-12 flex justify-between items-end transition-all duration-500 delay-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div>
              <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest mb-1">Based in</p>
              <p className="text-white">Mauritius, MU</p>
            </div>
            <div className="text-right">
              <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest mb-1">Est.</p>
              <p className="text-white">2024</p>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes nav-entrance {
           to { opacity: 1; transform: translateY(0); }
        }
        .animate-nav-entrance {
           transform: translateY(-20px);
           animation: nav-entrance 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
        }
      `}</style>
    </>
  );
};

export default Navbar;