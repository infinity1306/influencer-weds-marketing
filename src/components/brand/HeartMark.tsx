import React from 'react';

interface HeartMarkProps {
  className?: string;
  size?: number;
  color?: string;
  tilt?: number;
}

export const HeartMark: React.FC<HeartMarkProps> = ({
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
      }}
      aria-hidden="true"
    >
      <path
        d="M16 28C14 26 5 18 5 11C5 6.5 8.5 4 12 4C14.5 4 15.5 5.5 16 6.5C16.5 5.5 17.5 4 20 4C23.5 4 27 6.5 27 11C27 18 18 26 16 28Z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
