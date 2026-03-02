import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function Button({ children, onClick, variant = 'primary', className = '' }: ButtonProps) {
  const baseStyles = "px-8 py-4 rounded-full font-medium text-lg transition-all hover:scale-105 active:scale-95";
  const variantStyles = {
    primary: "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:shadow-xl",
    secondary: "bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-50"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
