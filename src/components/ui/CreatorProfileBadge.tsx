import React, { useState } from 'react';
import { Check } from 'lucide-react';

interface CreatorProfileBadgeProps {
  handle?: string;
  location?: string;
  avatarSrc?: string;
  className?: string;
}

export const CreatorProfileBadge: React.FC<CreatorProfileBadgeProps> = ({
  handle = 'influencer.diaries',
  location = 'Bhopal, India',
  avatarSrc = '/assets/images/hero-polaroid-2.webp',
  className = '',
}) => {
  const [following, setFollowing] = useState(false);

  return (
    <div
      className={`creator-profile-badge ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '14px',
        backgroundColor: 'rgba(18, 18, 18, 0.92)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        padding: '10px 14px',
        borderRadius: 'var(--radius-md)',
        boxShadow: '0 12px 28px rgba(0, 0, 0, 0.7)',
        color: '#FFFFFF',
        fontFamily: 'var(--font-sans)',
        minWidth: '220px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div
          style={{
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '2px solid var(--color-yellow)',
            flexShrink: 0,
          }}
        >
          <img
            src={avatarSrc}
            alt={handle}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#FFFFFF' }}>{handle}</span>
            <span
              style={{
                width: '13px',
                height: '13px',
                borderRadius: '50%',
                backgroundColor: '#3897f0',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Check size={8} color="#FFFFFF" strokeWidth={3} />
            </span>
          </div>
          <span style={{ fontSize: '0.7rem', color: '#999999' }}>{location}</span>
        </div>
      </div>

      <button
        onClick={() => setFollowing(!following)}
        style={{
          backgroundColor: following ? '#333333' : 'var(--color-yellow)',
          color: following ? '#FFFFFF' : 'var(--color-black)',
          fontSize: '0.72rem',
          fontWeight: 800,
          padding: '6px 12px',
          borderRadius: 'var(--radius-full)',
          cursor: 'pointer',
          border: 'none',
          transition: 'all 0.2s ease',
        }}
      >
        {following ? 'Following' : 'Follow'}
      </button>
    </div>
  );
};
