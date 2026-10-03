import React from 'react';

interface StarMarkProps {
  className?: string;
  size?: number;
  color?: string;
  tilt?: number;
}

export const StarMark: React.FC<StarMarkProps> = ({
  className = '',
  size = 24,
  color = 'var(--color-yellow, #FFD600)',
  tilt = 0,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
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
        d="M12 2L13.5 9.5L21 12L13.5 14.5L12 22L10.5 14.5L3 12L10.5 9.5L12 2Z"
        fill={color}
      />
    </svg>
  );
};
