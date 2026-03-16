"use client";
import React from 'react';
import { MERCH_ITEMS } from '../../constants';
import MerchCard from '../../components/MerchCard';
import SectionHeader from '../../components/SectionHeader';
import ScrollReveal from '../../components/ScrollReveal';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function ShopPage() {
  return (
    <div className="bg-canvas min-h-screen text-paint font-sans selection:bg-brand selection:text-canvas">
      <Navbar />
      
      {/* Shop LP Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] w-full bg-black flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1617142107351-1402324b1720?auto=format&fit=crop&q=80&w=2000" 
            alt="Vibré Apparel" 
            className="w-full h-full object-cover opacity-40 grayscale animate-hero-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-canvas/60 to-canvas"></div>
          <div className="absolute inset-0 bg-grain opacity-20"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 flex flex-col items-center">
          <div className="overflow-hidden">
            <h1 className="font-display font-black text-5xl md:text-8xl text-white mb-4 animate-swipe-up leading-none tracking-tighter">
              VIBRÉ APPAREL
            </h1>
          </div>
          <p 
            className="font-mono text-xs md:text-sm text-brand uppercase tracking-[0.4em] animate-fade-in-up opacity-0" 
            style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
          >
            The Uniform of the Underground
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
           <div className="w-[1px] h-16 bg-gradient-to-b from-brand to-transparent relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-white shadow-[0_0_10px_#fff] animate-drop-scroll"></div>
           </div>
        </div>
      </section>

      <main className="pb-24 relative overflow-hidden">
        {/* Decorative Marquee */}
        <div className="w-full overflow-hidden py-4 border-y border-white/5 opacity-30 select-none pointer-events-none z-0 bg-surface/30 mb-24">
           <div className="whitespace-nowrap animate-marquee font-mono text-xs md:text-sm text-paint uppercase tracking-[0.2em]">
              Limited Edition /// Global Shipping /// The Uniform of the Underground /// VIBRÉ Apparel /// 
              Limited Edition /// Global Shipping /// The Uniform of the Underground /// VIBRÉ Apparel ///
           </div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <SectionHeader 
            title={<>THE <span className="text-brand">UNIFORM</span></>}
            label="All Collections"
            description="High-quality garments engineered for the club and the streets. Strictly limited runs designed in Berlin. Call to order."
            className="mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {MERCH_ITEMS.map((item, index) => (
              <ScrollReveal key={item.id} delay={index * 0.1}>
                <MerchCard item={item} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </main>
      <Footer />

      <style>{`
        @keyframes swipe-up {
           0% { transform: translateY(100%); opacity: 0; }
           100% { transform: translateY(0); opacity: 1; }
        }
        .animate-swipe-up {
           animation: swipe-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes fade-in-up {
           0% { opacity: 0; transform: translateY(20px); }
           100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
           animation: fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes hero-zoom {
           0% { transform: scale(1.1); }
           100% { transform: scale(1); }
        }
        .animate-hero-zoom {
           animation: hero-zoom 3s ease-out forwards;
        }

        @keyframes drop-scroll {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        .animate-drop-scroll {
          animation: drop-scroll 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
        }
      `}</style>
    </div>
  );
}
