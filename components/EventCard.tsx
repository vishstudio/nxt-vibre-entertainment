import React from 'react';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { Event } from '../types';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="group relative bg-canvas border border-white/5 hover:border-brand/40 hover:shadow-[0_10px_40px_rgba(255,77,0,0.15)] overflow-hidden cursor-pointer h-[380px] md:h-[420px] flex flex-col transition-all duration-500 hover:-translate-y-2">
      {/* Image */}
      <div className="relative h-1/2 overflow-hidden">
        <img 
          src={event.imageUrl} 
          alt={event.title} 
          className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/20 to-transparent opacity-100 group-hover:opacity-60 transition-opacity duration-500"></div>
        <div className="absolute top-4 right-4 bg-brand text-canvas text-[10px] font-bold px-3 py-1 uppercase tracking-wider shadow-[0_0_15px_rgba(255,77,0,0.5)] group-hover:scale-105 transition-transform duration-300">
          {event.ticketPrice}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow justify-between relative z-10 bg-canvas transition-colors duration-500">
        <div>
          <div className="flex justify-between items-start mb-3">
            <span className="text-brand font-mono text-xs tracking-wider">{event.date}</span>
            <span className="text-paint/50 text-[10px] uppercase tracking-widest group-hover:text-paint/80 transition-colors duration-300">{event.genre}</span>
          </div>
          <h3 className="font-display text-2xl text-paint group-hover:text-brand transition-colors duration-300 mb-2">
            {event.title}
          </h3>
          <div className="flex items-center gap-2 text-paint/60 group-hover:text-paint/90 transition-colors duration-300">
            <MapPin size={14} className="group-hover:text-brand transition-colors duration-300" />
            <span className="text-xs">{event.location}</span>
          </div>
        </div>
        
        <div className="flex justify-end mt-4 overflow-hidden">
          <div className="flex items-center bg-surface border border-white/10 text-paint p-2 rounded-full group-hover:bg-brand group-hover:text-canvas group-hover:border-brand transition-all duration-500 ease-out">
            <span className="text-[10px] font-bold uppercase tracking-wider max-w-0 overflow-hidden opacity-0 group-hover:max-w-[100px] group-hover:opacity-100 group-hover:px-3 transition-all duration-500 ease-out whitespace-nowrap">
              Get Tickets
            </span>
            <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform duration-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
