import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'yellow' | 'dark' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'yellow',
  size = 'md',
  className = '',
}) => {
  const getStyles = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      borderRadius: 'var(--radius-full)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      fontSize: size === 'sm' ? '0.7rem' : '0.78rem',
      padding: size === 'sm' ? '4px 10px' : '6px 14px',
    };

    if (variant === 'yellow') {
      base.backgroundColor = 'var(--color-yellow)';
      base.color = 'var(--color-black)';
    } else if (variant === 'dark') {
      base.backgroundColor = 'var(--color-charcoal-light)';
      base.color = 'var(--color-yellow)';
      base.border = '1px solid var(--color-charcoal-border)';
    } else {
      base.backgroundColor = 'transparent';
      base.color = 'var(--color-offwhite)';
      base.border = '1px solid rgba(255, 255, 255, 0.15)';
    }

    return base;
  };

  return (
    <span className={`custom-badge ${className}`} style={getStyles()}>
      {children}
    </span>
  );
};
