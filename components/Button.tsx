import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'rounded';
  href?: string;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  href, 
  icon,
  className = '',
  ...props 
}) => {
  const baseStyles = "font-mono uppercase tracking-widest transition-all duration-300 ease-out inline-flex items-center justify-center gap-4";
  
  const variants = {
    primary: "group relative px-8 py-4 bg-brand text-canvas font-bold overflow-hidden",
    outline: "px-8 py-4 border border-white/20 text-paint font-bold hover:bg-white/5",
    rounded: "group relative px-8 py-4 bg-transparent border border-white/20 rounded-full hover:border-brand text-xs tracking-[0.2em] text-paint"
  };

  const content = (
    <>
      {variant === 'primary' ? (
        <>
          <span className="relative z-10">{children}</span>
          <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
        </>
      ) : variant === 'rounded' ? (
        <>
          <span className="group-hover:text-brand transition-colors">{children}</span>
          {icon && <span className="group-hover:text-brand transition-colors">{icon}</span>}
        </>
      ) : (
        <>
          {children}
          {icon}
        </>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {content}
    </button>
  );
};

export default Button;
