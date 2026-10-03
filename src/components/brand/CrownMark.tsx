import React from 'react';

interface CrownMarkProps {
  className?: string;
  size?: number;
  color?: string;
  tilt?: number;
}

export const CrownMark: React.FC<CrownMarkProps> = ({
  className = '',
  size = 28,
  color = 'var(--color-yellow, #FFD600)',
  tilt = 0,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{
        transform: tilt ? `rotate(${tilt}deg)` : undefined,
        display: 'inline-block',
        verticalAlign: 'middle',
      }}
      aria-hidden="true"
    >
      <path
        d="M6 23H26L24.5 11L19.5 16.5L16 8L12.5 16.5L7.5 11L6 23Z"
        fill={color}
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="6" cy="10" r="1.5" fill={color} />
      <circle cx="16" cy="7" r="1.5" fill={color} />
      <circle cx="26" cy="10" r="1.5" fill={color} />
    </svg>
  );
};
