import React from 'react';
import { MERCH_ITEMS } from '../constants';
import ScrollReveal from './ScrollReveal';
import Carousel from './Carousel';
import SectionHeader from './SectionHeader';
import MerchCard from './MerchCard';
import Button from './Button';

const MerchSection: React.FC = () => {
  return (
    <section id="shop" className="py-32 bg-surface border-t border-white/5 relative overflow-hidden">
      {/* Decorative Marquee */}
      <div className="absolute top-0 left-0 w-full overflow-hidden py-4 border-b border-white/5 opacity-30 select-none pointer-events-none">
         <div className="whitespace-nowrap animate-marquee font-mono text-xs md:text-sm text-paint uppercase tracking-[0.2em]">
            Limited Edition /// Global Shipping /// The Uniform of the Underground /// VIBRÉ Apparel /// 
            Limited Edition /// Global Shipping /// The Uniform of the Underground /// VIBRÉ Apparel ///
         </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 mt-12">
        <SectionHeader 
          title={<>THE <span className="text-brand">UNIFORM</span></>}
          label="Collection 001"
          description="High-quality garments engineered for the club and the streets. Strictly limited runs designed in Berlin."
        />

        <Carousel>
           {MERCH_ITEMS.slice(0, 4).map((item, index) => (
              <ScrollReveal key={item.id} delay={index * 0.1}>
                <MerchCard item={item} />
              </ScrollReveal>
           ))}
        </Carousel>

        <ScrollReveal delay={0.4} className="mt-16 flex justify-center">
           <Button variant="outline" href="/shop">
              View Entire Collection
           </Button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default MerchSection;