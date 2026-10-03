import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: 'arrow-right' | 'arrow-up-right' | 'none';
  children: React.ReactNode;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon = 'arrow-right',
  children,
  className = '',
  href,
  ...props
}) => {
  const getStyles = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      fontWeight: 700,
      fontFamily: 'var(--font-sans)',
      borderRadius: 'var(--radius-full)',
      cursor: 'pointer',
      textDecoration: 'none',
      letterSpacing: '0.01em',
      transition: 'all var(--motion-micro)',
      position: 'relative',
      overflow: 'hidden',
    };

    // Sizes
    if (size === 'sm') {
      base.padding = '8px 18px';
      base.fontSize = '0.85rem';
    } else if (size === 'lg') {
      base.padding = '16px 36px';
      base.fontSize = '1.05rem';
    } else {
      base.padding = '12px 26px';
      base.fontSize = '0.95rem';
    }

    // Variants
    if (variant === 'primary') {
      base.backgroundColor = 'var(--color-yellow)';
      base.color = 'var(--color-black)';
      base.boxShadow = '0 4px 18px -4px rgba(255, 214, 0, 0.4)';
    } else if (variant === 'secondary') {
      base.backgroundColor = 'var(--color-charcoal-light)';
      base.color = 'var(--color-offwhite)';
      base.border = '1px solid var(--color-charcoal-border)';
    } else if (variant === 'outline') {
      base.backgroundColor = 'transparent';
      base.color = 'var(--color-offwhite)';
      base.border = '1px solid rgba(255, 255, 255, 0.2)';
    } else {
      base.backgroundColor = 'transparent';
      base.color = 'var(--color-yellow)';
    }

    return base;
  };

  const renderIcon = () => {
    if (icon === 'arrow-up-right') {
      return <ArrowUpRight size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} className="btn-icon" />;
    }
    if (icon === 'arrow-right') {
      return <ArrowRight size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} className="btn-icon" />;
    }
    return null;
  };

  if (href) {
    return (
      <a
        href={href}
        className={`custom-button btn-${variant} ${className}`}
        style={getStyles()}
      >
        <span>{children}</span>
        {renderIcon()}
      </a>
    );
  }

  return (
    <button
      className={`custom-button btn-${variant} ${className}`}
      style={getStyles()}
      {...props}
    >
      <span>{children}</span>
      {renderIcon()}
    </button>
  );
};
