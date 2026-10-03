import React from 'react';
import { CrownMark } from './CrownMark';

export interface LogoProps {
  variant?: 'full' | 'compact' | 'horizontal' | 'icon';
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  theme = 'dark',
  size = 'md',
  className = '',
}) => {
  const textColor = theme === 'dark' ? '#F8F8F5' : '#080808';
  const yellowColor = '#FFD600';

  if (variant === 'icon') {
    const iconSize = size === 'sm' ? 24 : size === 'lg' ? 42 : 32;
    return (
      <div
        className={`brand-logo-icon ${className}`}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
        aria-label="Influencer Weds Marketing"
      >
        <CrownMark size={iconSize} color={yellowColor} tilt={-6} />
      </div>
    );
  }

  if (variant === 'horizontal' || variant === 'compact') {
    const fontSize = size === 'sm' ? '1rem' : size === 'lg' ? '1.4rem' : '1.18rem';
    return (
      <div
        className={`brand-logo-horizontal ${className}`}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          textDecoration: 'none',
          userSelect: 'none',
        }}
        aria-label="Influencer Weds Marketing"
      >
        <CrownMark size={size === 'sm' ? 20 : 26} color={yellowColor} tilt={-8} />
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '5px' }}>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize,
              letterSpacing: '-0.02em',
              color: textColor,
              lineHeight: 1,
            }}
          >
            Influencer
          </span>
          <span
            style={{
              fontFamily: 'var(--font-handwriting)',
              fontWeight: 700,
              fontSize: `calc(${fontSize} * 1.15)`,
              color: yellowColor,
              fontStyle: 'italic',
              lineHeight: 1,
            }}
          >
            Weds
          </span>
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 800,
              fontSize: `calc(${fontSize} * 0.9)`,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              color: textColor,
              lineHeight: 1,
            }}
          >
            Marketing
          </span>
        </div>
      </div>
    );
  }

  // Full stacked signature lockup (as on weds 5.png board 01)
  const baseScale = size === 'sm' ? 0.75 : size === 'lg' ? 1.3 : 1;

  return (
    <div
      className={`brand-logo-full ${className}`}
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        position: 'relative',
        userSelect: 'none',
        transform: `scale(${baseScale})`,
        transformOrigin: 'top left',
      }}
      aria-label="Influencer Weds Marketing"
    >
      {/* Crown over the top */}
      <div style={{ position: 'absolute', top: '-14px', left: '18px', zIndex: 2 }}>
        <CrownMark size={22} color={yellowColor} tilt={-10} />
      </div>

      <div
        style={{
          fontFamily: 'var(--font-handwriting)',
          fontSize: '2rem',
          fontWeight: 700,
          color: textColor,
          lineHeight: 0.95,
          letterSpacing: '-0.01em',
          textShadow: '0 2px 10px rgba(0,0,0,0.5)',
        }}
      >
        Influencer
      </div>

      <div
        style={{
          fontFamily: 'var(--font-handwriting)',
          fontSize: '2.2rem',
          fontWeight: 700,
          color: yellowColor,
          lineHeight: 0.95,
          paddingLeft: '22px',
          fontStyle: 'italic',
        }}
      >
        Weds
      </div>

      <div
        style={{
          position: 'relative',
          display: 'inline-block',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-handwriting)',
            fontSize: '2.3rem',
            fontWeight: 700,
            color: textColor,
            lineHeight: 0.95,
            paddingLeft: '32px',
          }}
        >
          Marketing
        </span>
        <span
          style={{
            fontSize: '0.6rem',
            fontFamily: 'var(--font-sans)',
            color: yellowColor,
            position: 'absolute',
            top: '4px',
            right: '-14px',
            fontWeight: 800,
          }}
        >
          TM
        </span>

        {/* Dynamic yellow brush underline under Marketing */}
        <svg
          width="130"
          height="12"
          viewBox="0 0 130 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: 'absolute',
            bottom: '-6px',
            left: '32px',
            display: 'block',
          }}
        >
          <path
            d="M2 7C30 2 85 2 128 8C95 10 45 11 2 7Z"
            fill={yellowColor}
          />
        </svg>
      </div>
    </div>
  );
};
