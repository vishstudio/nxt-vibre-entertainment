import React from 'react';
import { ARTISTS } from '../constants';
import ScrollReveal from './ScrollReveal';
import Carousel from './Carousel';
import SectionHeader from './SectionHeader';
import ArtistCard from './ArtistCard';

const ArtistShowcase: React.FC = () => {
  return (
    <section id="artists" className="py-32 bg-canvas">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeader 
          title={<>THE <span className="text-brand">ARCHITECTS</span></>}
          align="right"
        />

        <Carousel>
          {ARTISTS.map((artist, index) => (
            <ScrollReveal key={artist.id} delay={index * 0.15}>
              <ArtistCard artist={artist} index={index} />
            </ScrollReveal>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default ArtistShowcase;