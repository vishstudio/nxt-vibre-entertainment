"use client";
import React, { useRef, useEffect, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay in seconds
  threshold?: number; // 0 to 1
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  className = '', 
  delay = 0, 
  threshold = 0.1 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only trigger once
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before element leaves bottom
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}s` }}
      className={`transform transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[opacity,transform] ${
        isVisible 
          ? 'opacity-100 translate-y-0 blur-0' 
          : 'opacity-0 translate-y-12 blur-sm'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;