import React from 'react';
import { Button } from '../ui/Button';
import { CrownMark } from '../brand/CrownMark';
import { BrandStroke } from '../brand/BrandStroke';
import { Sparkles } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section
      style={{
        position: 'relative',
        padding: '130px 0',
        backgroundColor: '#050505',
        overflow: 'hidden',
        borderTop: '1px solid var(--color-charcoal-border)',
      }}
    >
      {/* Background Graphic Asset with Vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.18,
          backgroundImage: 'url(/assets/images/cta-creator.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          filter: 'grayscale(100%) contrast(1.2)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, #050505 40%, rgba(5, 5, 5, 0.7) 100%)',
          pointerEvents: 'none',
        }}
      />

      <div className="site-container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '780px' }}>
          <div className="eyebrow" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <CrownMark size={18} color="var(--color-yellow)" tilt={-8} />
            <span>START A TRANSFORMATIVE CAMPAIGN</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.8rem, 5.5vw, 4.8rem)',
              fontWeight: 800,
              lineHeight: 1.05,
              color: 'var(--color-offwhite)',
              marginBottom: '24px',
            }}
          >
            Let's Create <br />
            <span style={{ position: 'relative', display: 'inline-block' }}>
              <span style={{ color: 'var(--color-offwhite)' }}>Bigger Stories</span>
              <span
                style={{
                  position: 'absolute',
                  bottom: '-14px',
                  left: 0,
                  width: '100%',
                  pointerEvents: 'none',
                  zIndex: 0,
                  opacity: 0.85,
                }}
              >
                <BrandStroke variant="underline" height={18} />
              </span>
            </span>{' '}
            <br />
            <span style={{ color: 'var(--color-yellow)' }}>Together.</span>
          </h2>

          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)',
              color: 'var(--color-gray-300)',
              lineHeight: 1.6,
              marginBottom: '40px',
              maxWidth: '600px',
            }}
          >
            Whether launching a new direct-to-consumer brand, scaling a national omnichannel campaign, or amplifying
            creator UGC, we turn your marketing vision into measurable cultural impact.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center' }}>
            <Button href="#contact" variant="primary" size="lg" icon="arrow-right">
              Let's Talk
            </Button>
            <div style={{ fontSize: '0.88rem', color: 'var(--color-gray-400)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles size={16} color="var(--color-yellow)" />
              <span>Response guaranteed within 24 hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
