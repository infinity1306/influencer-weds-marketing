import React from 'react';

interface BrandArrowProps {
  className?: string;
  size?: number;
  color?: string;
  direction?: 'up-right' | 'down-right' | 'curved-left' | 'curved-right' | 'straight-right';
}

export const BrandArrow: React.FC<BrandArrowProps> = ({
  className = '',
  size = 36,
  color = 'var(--color-yellow, #FFD600)',
  direction = 'up-right',
}) => {
  if (direction === 'curved-right') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        <path
          d="M8 38C14 26 24 16 38 14M38 14L28 12M38 14L34 24"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (direction === 'down-right') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        <path
          d="M12 12C20 22 28 30 38 34M38 34L26 35M38 34L35 24"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // Default: up-right expressive arrow
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M10 30C16 22 22 16 30 10M30 10L18 9M30 10L31 22"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
