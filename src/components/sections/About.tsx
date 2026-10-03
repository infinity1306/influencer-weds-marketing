import React from 'react';
import { Button } from '../ui/Button';
import { CrownMark } from '../brand/CrownMark';
import { BrandStroke } from '../brand/BrandStroke';
import { StarMark } from '../brand/StarMark';
import { PolaroidCard } from '../brand/PolaroidCard';
import { Users, Target } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      style={{
        padding: '120px 0',
        backgroundColor: '#080808',
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
          className="about-grid"
        >
          {/* LEFT: Creator Collage (Male Creator + Polaroids) */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '540px',
              margin: '0 auto',
            }}
          >
            {/* Background Yellow Accent */}
            <div
              style={{
                position: 'absolute',
                top: '-20px',
                left: '-20px',
                width: '100%',
                height: '100%',
                opacity: 0.25,
                pointerEvents: 'none',
                zIndex: 0,
              }}
            >
              <BrandStroke variant="backdrop" width="100%" height="100%" />
            </div>

            {/* Main Portrait Frame */}
            <div
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                backgroundColor: 'var(--color-charcoal)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: 'var(--shadow-card)',
                zIndex: 1,
              }}
            >
              <img
                src="/assets/images/about-creator.webp"
                alt="Creator-first marketing leadership"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  filter: 'contrast(1.05) brightness(0.96)',
                }}
              />

              {/* Handwritten Badge */}
              <div
                style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  fontFamily: 'var(--font-handwriting)',
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: 'var(--color-yellow)',
                  transform: 'rotate(-6deg)',
                  textShadow: '0 2px 10px rgba(0,0,0,0.9)',
                }}
              >
                Creators. <br />
                Brands. <br />
                Bigger Stories.
              </div>
            </div>

            {/* Floating Left Polaroid */}
            <div
              className="about-polaroid-left"
              style={{
                position: 'absolute',
                top: '20%',
                left: '-48px',
                zIndex: 3,
              }}
            >
              <PolaroidCard
                imageSrc="/assets/images/about-polaroid-1.webp"
                altText="Street photography creator"
                caption="Street Visuals"
                width={150}
                tilt={-8}
              />
            </div>

            {/* Floating Top Right Polaroid */}
            <div
              className="about-polaroid-right"
              style={{
                position: 'absolute',
                bottom: '-25px',
                right: '-36px',
                zIndex: 3,
              }}
            >
              <PolaroidCard
                imageSrc="/assets/images/about-polaroid-3.webp"
                altText="Cinematic camera operator"
                caption="Production Team"
                width={155}
                tilt={6}
              />
            </div>

            {/* Crown Accent */}
            <div style={{ position: 'absolute', top: '-16px', right: '40px', zIndex: 4 }}>
              <CrownMark size={36} color="var(--color-yellow)" tilt={8} />
            </div>

            {/* Star Accent */}
            <div style={{ position: 'absolute', bottom: '40px', left: '-20px', zIndex: 4 }}>
              <StarMark size={28} color="var(--color-yellow)" tilt={-10} />
            </div>
          </div>

          {/* RIGHT: Editorial Content & Pillars */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="eyebrow" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CrownMark size={16} color="var(--color-yellow)" />
              <span>A CREATOR-FIRST APPROACH</span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.2rem, 3.8vw, 3.5rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: 'var(--color-offwhite)',
                marginBottom: '24px',
              }}
            >
              More Than Marketing. <br />
              <span style={{ color: 'var(--color-yellow)' }}>Cultural Momentum.</span>
            </h2>

            <p
              style={{
                fontSize: '1.08rem',
                lineHeight: 1.7,
                color: 'var(--color-gray-300)',
                marginBottom: '20px',
              }}
            >
              Influencer Weds Marketing was built to solve the broken agency model. We don’t treat creators as media
              inventory, and we don’t treat brands as blank checks. We engineer high-trust partnerships that feel native
              to social feeds and unstoppable in the market.
            </p>

            <p
              style={{
                fontSize: '0.98rem',
                lineHeight: 1.7,
                color: 'var(--color-gray-400)',
                marginBottom: '36px',
              }}
            >
              Headquartered in Bhopal and deploying campaigns across tier-1, tier-2, and tier-3 Indian hubs, our hybrid
              creative-and-performance engine ensures every rupee spent moves the needle on real commercial metrics.
            </p>

            {/* 3 Core Differentiators */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '20px',
                marginBottom: '40px',
              }}
            >
              <div
                style={{
                  backgroundColor: 'var(--color-charcoal-card)',
                  border: '1px solid var(--color-charcoal-border)',
                  padding: '20px',
                  borderRadius: 'var(--radius-md)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <Users size={20} color="var(--color-yellow)" />
                  <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#FFF' }}>Pure Authenticity</span>
                </div>
                <p style={{ fontSize: '0.84rem', color: 'var(--color-gray-400)', lineHeight: 1.5 }}>
                  Rigorous audits ensure 100% genuine creator-audience trust and zero engagement pod inflation.
                </p>
              </div>

              <div
                style={{
                  backgroundColor: 'var(--color-charcoal-card)',
                  border: '1px solid var(--color-charcoal-border)',
                  padding: '20px',
                  borderRadius: 'var(--radius-md)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <Target size={20} color="var(--color-yellow)" />
                  <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#FFF' }}>ROAS Precision</span>
                </div>
                <p style={{ fontSize: '0.84rem', color: 'var(--color-gray-400)', lineHeight: 1.5 }}>
                  Whitelisting top UGC into paid ad funnels for exponential return on ad spend.
                </p>
              </div>
            </div>

            <div>
              <Button href="#services" variant="primary" size="md" icon="arrow-right">
                Explore What We Do
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr 1.1fr !important;
          }
        }
        @media (max-width: 768px) {
          .about-polaroid-left, .about-polaroid-right {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};
