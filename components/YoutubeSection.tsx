import React from 'react';
import { YOUTUBE_VIDEOS } from '../constants';
import ScrollReveal from './ScrollReveal';
import Carousel from './Carousel';
import SectionHeader from './SectionHeader';
import VideoCard from './VideoCard';

const YoutubeSection: React.FC = () => {
  return (
    <section className="py-32 bg-surface relative z-10 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <SectionHeader 
          title={<>THE <span className="text-brand">ARCHIVE</span></>}
          label="VIBRÉ TV"
          description="Relive the most iconic moments from our global events. Full sets, aftermovies, and exclusive interviews."
        />

        <Carousel itemClassName="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-[480px]">
          {YOUTUBE_VIDEOS.map((video, index) => (
            <ScrollReveal key={video.id} delay={index * 0.1}>
              <VideoCard video={video} />
            </ScrollReveal>
          ))}
        </Carousel>

      </div>
    </section>
  );
};

export default YoutubeSection;
