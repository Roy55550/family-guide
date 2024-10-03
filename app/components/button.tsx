import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: 'default' | 'ghost';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  className = '', 
  variant = 'default',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center px-4 py-2 rounded-md font-semibold text-sm transition-colors duration-300';
  const variantClasses = {
    default: 'bg-[#0F5C5B] text-white hover:bg-[#0A4342]',
    ghost: 'bg-transparent text-[#0F5C5B] hover:bg-[#FFE8D6]'
  };

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};