import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`
        bg-gray-800/50 backdrop-blur-sm
        border border-gray-700/50
        rounded-xl shadow-xl
        p-6
        ${hover ? 'hover:bg-gray-800/70 transition-all duration-300 hover:scale-[1.02]' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

interface BadgeProps {
  children: React.ReactNode;
  color?: 'blue' | 'green' | 'yellow' | 'red' | 'purple';
  size?: 'sm' | 'md';
}

export function Badge({ children, color = 'blue', size = 'md' }: BadgeProps) {
  const colors = {
    blue: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    green: 'bg-green-500/20 text-green-300 border-green-500/30',
    yellow: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
    red: 'bg-red-500/20 text-red-300 border-red-500/30',
    purple: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  };

  const sizes = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-3 py-1',
  };

  return (
    <span
      className={`
        inline-flex items-center
        rounded-full
        border
        font-medium
        ${colors[color]}
        ${sizes[size]}
      `}
    >
      {children}
    </span>
  );
}

interface DropdownProps {
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function Dropdown({ label, options, value, onChange, className = '' }: DropdownProps) {
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-gray-300 mb-1">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full
          bg-gray-800
          border border-gray-700
          text-white
          rounded-lg
          py-2 px-3
          appearance-none
          focus:outline-none focus:ring-2 focus:ring-blue-500
          hover:bg-gray-700/50
          transition-colors
        "
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}