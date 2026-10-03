import React from 'react';
import { CrownMark } from '../brand/CrownMark';
import { HeartMark } from '../brand/HeartMark';
import { StarMark } from '../brand/StarMark';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export const Community: React.FC = () => {
  const creatorCategories = [
    'Fashion & Style',
    'Beauty & Skincare',
    'Culinary & Dining',
    'Travel & Adventure',
    'Tech & Gaming',
    'Fitness & Health',
    'Culture & Entertainment',
  ];

  return (
    <section
      id="community"
      style={{
        padding: '120px 0',
        backgroundColor: '#0C0C0C',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="site-container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '64px',
            alignItems: 'center',
          }}
          className="community-grid"
        >
          {/* LEFT: Human Story Manifesto */}
          <div>
            <div className="eyebrow" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CrownMark size={16} color="var(--color-yellow)" />
              <span>THE CREATOR ECOSYSTEM</span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.4rem, 4.2vw, 3.8rem)',
                fontWeight: 800,
                lineHeight: 1.05,
                color: 'var(--color-offwhite)',
                marginBottom: '24px',
              }}
            >
              Real People. <br />
              Real Stories. <br />
              <span style={{ color: 'var(--color-yellow)' }}>Real Impact.</span>
            </h2>

            <p style={{ fontSize: '1.08rem', color: 'var(--color-gray-300)', lineHeight: 1.7, marginBottom: '24px' }}>
              The modern audience doesn’t buy corporate ads—they buy recommendations from creators they trust. We nurture
              direct, unmediated relationships with high-caliber storytellers across every vertical in India.
            </p>

            {/* Category Chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '36px' }}>
              {creatorCategories.map((cat) => (
                <Badge key={cat} variant="dark" size="md">
                  {cat}
                </Badge>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <Button href="#contact" variant="primary" size="md" icon="arrow-right">
                Join As Creator / Brand
              </Button>
            </div>
          </div>

          {/* RIGHT: Visual Collage with Annotations */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '540px',
              margin: '0 auto',
            }}
          >
            {/* Collage Container */}
            <div
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                backgroundColor: 'var(--color-charcoal)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <img
                src="/assets/images/community-collage.webp"
                alt="Influencer creator community meetup"
                style={{ width: '100%', height: 'auto', display: 'block', filter: 'contrast(1.04)' }}
              />

              {/* Hand-lettered sticker */}
              <div
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  fontFamily: 'var(--font-handwriting)',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'var(--color-yellow)',
                  transform: 'rotate(6deg)',
                  textShadow: '0 2px 10px rgba(0,0,0,0.9)',
                }}
              >
                People. Stories. <br />
                Brands. Impact.
              </div>
            </div>

            {/* Floating Crown Doodle */}
            <div style={{ position: 'absolute', top: '-18px', left: '20px', zIndex: 3 }}>
              <CrownMark size={36} color="var(--color-yellow)" tilt={-10} />
            </div>

            {/* Floating Heart Doodle */}
            <div style={{ position: 'absolute', bottom: '-20px', right: '40px', zIndex: 3 }}>
              <HeartMark size={38} color="var(--color-yellow)" tilt={12} />
            </div>

            {/* Sparkle */}
            <div style={{ position: 'absolute', top: '40%', left: '-20px', zIndex: 3 }}>
              <StarMark size={28} color="var(--color-yellow)" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .community-grid {
            grid-template-columns: 1.1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
