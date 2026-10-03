import React from 'react';
import { TapeElement } from './TapeElement';

interface PolaroidCardProps {
  imageSrc: string;
  altText: string;
  caption?: string;
  tilt?: number;
  width?: number;
  tapeTilt?: number;
  className?: string;
  onClick?: () => void;
}

export const PolaroidCard: React.FC<PolaroidCardProps> = ({
  imageSrc,
  altText,
  caption,
  tilt = 0,
  width = 180,
  tapeTilt = -2,
  className = '',
  onClick,
}) => {
  return (
    <div
      className={`polaroid-container ${className}`}
      onClick={onClick}
      style={{
        width: `${width}px`,
        transform: `rotate(${tilt}deg)`,
        transition: 'transform var(--motion-standard), box-shadow var(--motion-standard)',
        position: 'relative',
        display: 'inline-block',
      }}
    >
      {/* Tape on top edge */}
      <div
        style={{
          position: 'absolute',
          top: '-10px',
          left: '50%',
          transform: `translateX(-50%) rotate(${tapeTilt}deg)`,
          zIndex: 3,
        }}
      >
        <TapeElement width={width * 0.35} height={18} tilt={tapeTilt} />
      </div>

      {/* Polaroid Frame */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          padding: '8px 8px 18px 8px',
          boxShadow: 'var(--shadow-polaroid)',
          borderRadius: '2px',
        }}
      >
        <div
          style={{
            overflow: 'hidden',
            backgroundColor: '#111',
            aspectRatio: '1 / 1.05',
          }}
        >
          <img
            src={imageSrc}
            alt={altText}
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'contrast(1.05)',
              display: 'block',
            }}
          />
        </div>
        {caption && (
          <div
            style={{
              marginTop: '6px',
              textAlign: 'center',
              fontSize: '0.85rem',
              color: '#222222',
              fontFamily: 'var(--font-handwriting)',
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            {caption}
          </div>
        )}
      </div>
    </div>
  );
};
