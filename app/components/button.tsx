import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'default' | 'ghost';
}

const Button: React.FC<ButtonProps> = ({ children, className, variant = 'default', ...props }) => {
  const baseStyles = "min-h-[44px] min-w-[44px] px-4 py-2 rounded-full font-bold transition-colors duration-300";
  const variantStyles = {
    default: "bg-[#0F5C5B] text-white hover:bg-[#0A4342]",
    ghost: "bg-transparent text-[#0F5C5B] hover:bg-[#0F5C5B] hover:text-white"
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
