"use client";
import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  children: React.ReactNode;
  itemClassName?: string;
}

const Carousel: React.FC<CarouselProps> = ({ 
  children, 
  itemClassName = 'w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-[400px]' 
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [thumbWidth, setThumbWidth] = useState(100);
  const [thumbLeft, setThumbLeft] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      const maxScroll = scrollWidth - clientWidth;
      setCanScrollRight(Math.ceil(scrollLeft) < maxScroll - 1);
      
      const widthPct = (clientWidth / scrollWidth) * 100;
      setThumbWidth(widthPct);
      const leftPct = (scrollLeft / scrollWidth) * 100;
      setThumbLeft(leftPct);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [children]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current && scrollRef.current.firstElementChild) {
      const itemWidth = scrollRef.current.firstElementChild.clientWidth;
      const gap = window.innerWidth >= 768 ? 24 : 16; // md:gap-6 is 24px, gap-4 is 16px
      const scrollAmount = itemWidth + gap;
      
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Auto-loop functionality
  useEffect(() => {
    if (isHovered) return;

    const intervalId = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;
        
        // If we are at the end (or very close to it), scroll back to start
        if (Math.ceil(scrollLeft) >= maxScroll - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scroll('right');
        }
      }
    }, 3500);

    return () => clearInterval(intervalId);
  }, [isHovered]);

  return (
    <div 
      className="relative group/carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      {/* Controls - Visible on mobile, visible on hover on desktop */}
      <div className="flex absolute top-1/2 -translate-y-1/2 left-2 right-2 md:-left-6 md:-right-6 justify-between pointer-events-none z-20 opacity-100 md:opacity-0 md:group-hover/carousel:opacity-100 transition-opacity duration-300">
        <button 
          onClick={() => scroll('left')} 
          disabled={!canScrollLeft}
          className={`pointer-events-auto p-3 md:p-4 rounded-full bg-surface/90 border border-white/10 text-paint hover:text-brand hover:border-brand transition-all backdrop-blur-md ${!canScrollLeft ? 'opacity-0 cursor-default' : 'opacity-100 shadow-2xl hover:scale-110'}`}
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={() => scroll('right')} 
          disabled={!canScrollRight}
          className={`pointer-events-auto p-3 md:p-4 rounded-full bg-surface/90 border border-white/10 text-paint hover:text-brand hover:border-brand transition-all backdrop-blur-md ${!canScrollRight ? 'opacity-0 cursor-default' : 'opacity-100 shadow-2xl hover:scale-110'}`}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div 
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-6 pb-4 hide-scrollbar"
      >
        {React.Children.map(children, (child, index) => (
          <div key={index} className={`shrink-0 snap-start ${itemClassName}`}>
            {child}
          </div>
        ))}
      </div>

      {/* Elegant Progress/Scrollbar */}
      {thumbWidth < 100 && (
        <div className="mt-6 h-[1px] w-full bg-white/10 relative overflow-hidden">
          <div
            className="absolute top-0 bottom-0 bg-brand transition-all duration-150 ease-out"
            style={{
              width: `${thumbWidth}%`,
              left: `${thumbLeft}%`
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Carousel;
