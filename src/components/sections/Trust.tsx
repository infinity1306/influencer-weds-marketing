import React from 'react';
import { trustedBrands } from '../../data/content';
import { CrownMark } from '../brand/CrownMark';

export const Trust: React.FC = () => {
  return (
    <section
      style={{
        padding: '36px 0',
        backgroundColor: '#0C0C0C',
        borderTop: '1px solid var(--color-charcoal-border)',
        borderBottom: '1px solid var(--color-charcoal-border)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="site-container">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '24px',
          }}
        >
          <div
            style={{
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--color-gray-400)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <CrownMark size={14} color="var(--color-yellow)" />
            <span>TRUSTED BY AMBITIOUS BRANDS WHO BELIEVE IN REAL INFLUENCE</span>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '36px 54px',
              width: '100%',
            }}
          >
            {trustedBrands.map((brand) => (
              <div
                key={brand}
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--color-gray-500)',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  transition: 'color var(--motion-micro), transform var(--motion-micro)',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-offwhite)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--color-gray-500)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
