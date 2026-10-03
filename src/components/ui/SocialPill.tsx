import React from 'react';
import { Heart, MessageCircle, Send } from 'lucide-react';

interface SocialPillProps {
  likes?: string;
  comments?: string;
  shares?: string;
  className?: string;
  orientation?: 'vertical' | 'horizontal';
}

export const SocialPill: React.FC<SocialPillProps> = ({
  likes = '2.4M',
  comments = '4.2K',
  shares = '8.1K',
  className = '',
  orientation = 'vertical',
}) => {
  return (
    <div
      className={`social-pill ${className}`}
      style={{
        display: 'inline-flex',
        flexDirection: orientation === 'vertical' ? 'column' : 'row',
        gap: orientation === 'vertical' ? '12px' : '16px',
        backgroundColor: 'rgba(23, 23, 23, 0.88)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        padding: orientation === 'vertical' ? '14px 16px' : '10px 18px',
        borderRadius: 'var(--radius-md)',
        boxShadow: '0 12px 32px rgba(0, 0, 0, 0.65)',
        color: '#FFFFFF',
        fontFamily: 'var(--font-sans)',
        fontSize: '0.85rem',
        fontWeight: 700,
        userSelect: 'none',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div
          style={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            backgroundColor: '#FF3B30',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Heart size={13} fill="#FFFFFF" color="#FFFFFF" />
        </div>
        <span>{likes}</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div
          style={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            backgroundColor: '#2A2A2A',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <MessageCircle size={13} color="#D9D9D9" />
        </div>
        <span style={{ color: '#D9D9D9' }}>{comments}</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div
          style={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            backgroundColor: '#2A2A2A',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Send size={13} color="#D9D9D9" />
        </div>
        <span style={{ color: '#D9D9D9' }}>{shares}</span>
      </div>
    </div>
  );
};
