import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "font-display font-semibold uppercase tracking-wider py-3 px-8 transition-all duration-300 transform clip-path-polygon";
  
  const variants = {
    primary: "bg-safety text-navy-900 hover:bg-white hover:text-navy-900 border border-safety hover:border-white shadow-[0_0_15px_rgba(252,163,17,0.3)]",
    secondary: "bg-navy-700 text-white hover:bg-navy-600 border border-navy-600",
    outline: "bg-transparent text-safety border border-safety hover:bg-safety/10"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};