import React from 'react';
import { SOCIAL_POSTS } from '../constants';
import { Instagram } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import Carousel from './Carousel';
import SectionHeader from './SectionHeader';
import SocialCard from './SocialCard';
import Button from './Button';

const SocialFeed: React.FC = () => {
  return (
    <section className="py-32 bg-canvas relative z-10 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <SectionHeader 
          title={<>JOIN THE <br/> <span className="text-brand">COLLECTIVE</span></>}
          label="@VIBRE.ENT"
          description="Behind the scenes, early access to tickets, and the sounds that define us."
        />

        <Carousel itemClassName="w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] max-w-[320px]">
          {SOCIAL_POSTS.map((post, index) => (
            <ScrollReveal key={post.id} delay={index * 0.1}>
              <SocialCard post={post} />
            </ScrollReveal>
          ))}
        </Carousel>

        {/* Footer Link */}
        <ScrollReveal delay={0.4} className="mt-16 flex justify-center">
           <Button variant="rounded" href="#" icon={<Instagram size={16} />}>
              Follow on Instagram
           </Button>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default SocialFeed;