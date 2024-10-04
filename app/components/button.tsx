import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, className, variant }) => {
  const variantClasses = variant === 'ghost' ? 'bg-transparent' : 'bg-primary';

  return (
    <button
      onClick={onClick}
      className={`${variantClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;