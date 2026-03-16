import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import EventList from '../components/EventList';
import ArtistShowcase from '../components/ArtistShowcase';
import MerchSection from '../components/MerchSection';
import SocialFeed from '../components/SocialFeed';
import YoutubeSection from '../components/YoutubeSection';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';

export default function Page() {
  return (
    <div className="bg-canvas min-h-screen text-paint font-sans selection:bg-brand selection:text-canvas">
      <Navbar />
      <Hero />
      <div className="relative z-10 bg-canvas border-t border-white/5">
        <div className="container mx-auto px-6 py-32 grid grid-cols-1 md:grid-cols-12 gap-12">
           <div className="md:col-span-4">
              <ScrollReveal delay={0.1}>
                 <span className="text-brand font-mono text-sm tracking-widest uppercase">The Philosophy</span>
              </ScrollReveal>
           </div>
           <div className="md:col-span-8">
              <ScrollReveal delay={0.2}>
                 <p className="text-2xl md:text-4xl font-display leading-tight text-paint">
                   We are a collective dedicated to the <span className="text-brand">underground</span>. 
                   From the deep jungles of Ubud to the concrete warehouses of Berlin, we curate spaces where time dissolves.
                 </p>
              </ScrollReveal>
           </div>
        </div>
        <EventList />
        <ArtistShowcase />
        <YoutubeSection />
        <MerchSection />
        <SocialFeed />
      </div>
      <Footer />
    </div>
  );
}
