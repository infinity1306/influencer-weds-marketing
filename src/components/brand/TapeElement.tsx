import React from 'react';

interface TapeElementProps {
  className?: string;
  width?: number;
  height?: number;
  tilt?: number;
}

export const TapeElement: React.FC<TapeElementProps> = ({
  className = '',
  width = 60,
  height = 20,
  tilt = -4,
}) => {
  return (
    <div
      className={className}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: 'rgba(255, 255, 255, 0.45)',
        backdropFilter: 'blur(2px)',
        transform: `rotate(${tilt}deg)`,
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.25)',
        borderLeft: '1px dashed rgba(200, 200, 200, 0.5)',
        borderRight: '1px dashed rgba(200, 200, 200, 0.5)',
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    />
  );
};
