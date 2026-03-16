import React from 'react';
import ScrollReveal from './ScrollReveal';

interface SectionHeaderProps {
  title: React.ReactNode;
  label?: string;
  description?: string;
  align?: 'left' | 'right';
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  label,
  description,
  align = 'left',
  className = ''
}) => {
  if (align === 'right' && !label && !description) {
    return (
      <ScrollReveal className={`mb-20 text-right ${className}`}>
        <h2 className="font-display font-black text-4xl md:text-7xl text-paint leading-[0.9]">
          {title}
        </h2>
      </ScrollReveal>
    );
  }

  if (align === 'left' && !description && label) {
    return (
      <ScrollReveal className={`flex items-center justify-between mb-16 ${className}`}>
        <h2 className="font-display font-black text-4xl md:text-7xl text-paint leading-[0.9]">
          {title}
        </h2>
        <span className="hidden md:block text-paint/40 font-mono text-sm">{label}</span>
      </ScrollReveal>
    );
  }

  return (
    <div className={`flex flex-col md:flex-row justify-between items-end mb-20 gap-8 ${className}`}>
      <ScrollReveal>
        <h2 className="font-display font-black text-4xl md:text-7xl text-paint leading-[0.9]">
          {title}
        </h2>
      </ScrollReveal>
      
      {(label || description) && (
        <ScrollReveal delay={0.1} className="flex flex-col items-start md:items-end">
          {label && <span className="font-mono text-xs text-brand uppercase tracking-widest mb-2">{label}</span>}
          {description && (
            <p className="text-paint/50 text-sm max-w-xs md:text-right leading-relaxed">
              {description}
            </p>
          )}
        </ScrollReveal>
      )}
    </div>
  );
};

export default SectionHeader;
