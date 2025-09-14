import React from 'react';

interface BtnPrimaryProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export default function BtnPrimary({ 
  href, 
  onClick, 
  children, 
  size = 'md',
  fullWidth = false 
}: BtnPrimaryProps) {
  const sizes = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-2',
    lg: 'px-8 py-3 text-lg',
  };

  const className = `
    inline-flex items-center justify-center
    bg-gradient-to-r from-blue-600 to-blue-500
    hover:from-blue-500 hover:to-blue-400
    text-white font-semibold
    rounded-lg
    transition-all duration-200
    shadow-lg shadow-blue-500/25
    hover:shadow-blue-500/40
    hover:scale-[1.02]
    focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${sizes[size]}
    ${fullWidth ? 'w-full' : ''}
  `;

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}
