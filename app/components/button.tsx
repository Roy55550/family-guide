import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'ghost';
  asChild?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  className = '', 
  variant = 'default', 
  asChild = false,
  ...props 
}) => {
  const variantClasses = {
    default: 'bg-[#0F5C5B] text-white',
    ghost: 'bg-transparent text-[#0F5C5B]'
  };

  const Comp = asChild ? 'span' : 'button';

  return (
    <Comp 
      className={`${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
};