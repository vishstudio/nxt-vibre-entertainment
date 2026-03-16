import React from 'react';
import { EVENTS } from '../constants';
import ScrollReveal from './ScrollReveal';
import Carousel from './Carousel';
import SectionHeader from './SectionHeader';
import EventCard from './EventCard';

const EventList: React.FC = () => {
  return (
    <section id="events" className="py-32 bg-surface relative z-10">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeader 
          title={<>UPCOMING<span className="text-brand">.</span></>}
          label="[04] EVENTS DETECTED"
          align="left"
        />

        <Carousel>
          {EVENTS.map((event, idx) => (
            <ScrollReveal key={event.id} delay={idx * 0.1}>
              <EventCard event={event} />
            </ScrollReveal>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default EventList;