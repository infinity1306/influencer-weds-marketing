import React from 'react';

interface BrandStrokeProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  color?: string;
  variant?: 'underline' | 'splatter' | 'backdrop' | 'highlight';
}

export const BrandStroke: React.FC<BrandStrokeProps> = ({
  className = '',
  width = '100%',
  height = 'auto',
  color = 'var(--color-yellow, #FFD600)',
  variant = 'underline',
}) => {
  if (variant === 'highlight') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 240 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M3 28C45 12 110 6 235 14C237 20 220 34 180 36C120 39 35 37 3 28Z"
          fill={color}
          opacity="0.85"
        />
      </svg>
    );
  }

  if (variant === 'backdrop') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 320 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        <path
          d="M15 90C45 40 120 10 240 25C310 35 315 110 260 145C190 185 80 170 30 140C8 128 5 105 15 90Z"
          fill={color}
          opacity="0.9"
        />
        <path
          d="M260 20L280 5M285 35L305 25M25 150L10 165"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // Default: underline stroke
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M2 11C45 5 125 4 198 10C160 14 85 15 4 13Z"
        fill={color}
      />
    </svg>
  );
};
