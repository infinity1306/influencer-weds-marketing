import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import { CrownMark } from '../brand/CrownMark';
import { BrandStroke } from '../brand/BrandStroke';
import { BrandArrow } from '../brand/BrandArrow';
import { StarMark } from '../brand/StarMark';
import { HeartMark } from '../brand/HeartMark';
import { PolaroidCard } from '../brand/PolaroidCard';
import { SocialPill } from '../ui/SocialPill';
import { CreatorProfileBadge } from '../ui/CreatorProfileBadge';
import { heroMetrics } from '../../data/content';

export const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Subtle mouse tracking for desktop parallax
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 12;
      const y = (e.clientY / innerHeight - 0.5) * 12;
      setMousePos({ x, y });
    };

    if (window.innerWidth > 992) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        paddingTop: '130px',
        paddingBottom: '80px',
        backgroundColor: 'var(--color-black)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Subtle Background Glows */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '15%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 214, 0, 0.07) 0%, rgba(8, 8, 8, 0) 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="site-container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '50px',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* LEFT: Editorial Storytelling */}
          <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '620px' }}>
            {/* Eyebrow Label */}
            <div className="eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <CrownMark size={18} color="var(--color-yellow)" tilt={-6} />
              <span>CREATORS × BRANDS × REAL IMPACT</span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.8rem, 5.5vw, 4.8rem)',
                fontWeight: 800,
                lineHeight: 1.04,
                letterSpacing: '-0.02em',
                color: 'var(--color-offwhite)',
                marginBottom: '24px',
              }}
            >
              We Turn <br />
              <span style={{ position: 'relative', display: 'inline-block' }}>
                Influence
                <span
                  style={{
                    position: 'absolute',
                    bottom: '-4px',
                    left: 0,
                    width: '100%',
                    display: 'block',
                    pointerEvents: 'none',
                    zIndex: -1,
                    opacity: 0.9,
                  }}
                >
                  <BrandStroke variant="underline" height={14} />
                </span>
              </span>{' '}
              <br />
              Into <span style={{ color: 'var(--color-yellow)' }}>Impact.</span>
            </h1>

            {/* Supporting Explanation */}
            <p
              style={{
                fontSize: 'clamp(1rem, 1.2vw, 1.18rem)',
                lineHeight: 1.6,
                color: 'var(--color-gray-300)',
                marginBottom: '36px',
                maxWidth: '520px',
              }}
            >
              Influencer marketing and performance digital strategies that connect ambitious brands with the people who
              matter. Delivering authentic collaborations that drive verified commercial growth.
            </p>

            {/* Primary & Secondary CTAs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '48px',
              }}
            >
              <Button href="#contact" variant="primary" size="lg" icon="arrow-right">
                Let's Grow Together
              </Button>
              <Button href="#work" variant="outline" size="lg" icon="arrow-up-right">
                Explore Our Work
              </Button>
            </div>

            {/* Micro Metrics Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
                gap: '20px',
                paddingTop: '28px',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              {heroMetrics.slice(0, 3).map((metric) => (
                <div key={metric.label}>
                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1.8rem',
                      fontWeight: 800,
                      color: 'var(--color-yellow)',
                      lineHeight: 1,
                    }}
                  >
                    {metric.value}
                  </div>
                  <div
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      color: 'var(--color-gray-400)',
                      marginTop: '6px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Creator Collage Composition */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '560px',
              margin: '0 auto',
            }}
          >
            {/* Background Yellow Brush Backdrop */}
            <div
              style={{
                position: 'absolute',
                top: '-30px',
                right: '-20px',
                width: '100%',
                height: '100%',
                opacity: 0.35,
                zIndex: 0,
                pointerEvents: 'none',
                transform: `translate(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px)`,
                transition: 'transform 0.15s ease-out',
              }}
            >
              <BrandStroke variant="backdrop" width="100%" height="100%" />
            </div>

            {/* Master Female Creator Visual Container */}
            <div
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-card)',
                backgroundColor: 'var(--color-charcoal)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                zIndex: 1,
                transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)`,
                transition: 'transform 0.12s ease-out',
              }}
            >
              <img
                src="/assets/images/hero-creator.webp"
                alt="Influencer Weds Marketing Main Creator"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  filter: 'contrast(1.04) brightness(0.98)',
                }}
              />

              {/* Hand-lettered sticker inside creator frame */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '18px',
                  right: '18px',
                  fontFamily: 'var(--font-handwriting)',
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: 'var(--color-yellow)',
                  lineHeight: 1.1,
                  textShadow: '0 2px 8px rgba(0, 0, 0, 0.9)',
                  transform: 'rotate(-4deg)',
                  pointerEvents: 'none',
                }}
              >
                Real Creators. <br />
                Real Impact.
              </div>
            </div>

            {/* Floating Element 1: Top Crown Doodle */}
            <div
              style={{
                position: 'absolute',
                top: '-24px',
                left: '20px',
                zIndex: 3,
                transform: `translate(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px)`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              <CrownMark size={42} color="var(--color-yellow)" tilt={12} />
            </div>

            {/* Floating Element 2: Star / Sparkle */}
            <div
              style={{
                position: 'absolute',
                top: '40px',
                left: '-20px',
                zIndex: 3,
                animation: 'pulseGlow 3s ease-in-out infinite',
              }}
            >
              <StarMark size={32} color="var(--color-yellow)" tilt={15} />
            </div>

            {/* Floating Element 3: Top-Right Polaroid Card */}
            <div
              className="desktop-only"
              style={{
                position: 'absolute',
                top: '-40px',
                right: '-36px',
                zIndex: 4,
                transform: `translate(${mousePos.x * -0.6}px, ${mousePos.y * -0.6}px) rotate(8deg)`,
                transition: 'transform 0.2s ease-out',
              }}
            >
              <PolaroidCard
                imageSrc="/assets/images/hero-polaroid-1.webp"
                altText="Creator photoshoot"
                caption="Behind The Scenes"
                width={160}
                tilt={6}
              />
            </div>

            {/* Floating Element 4: Middle-Right Polaroid Card */}
            <div
              className="desktop-only"
              style={{
                position: 'absolute',
                bottom: '130px',
                right: '-46px',
                zIndex: 4,
                transform: `translate(${mousePos.x * -0.9}px, ${mousePos.y * -0.9}px) rotate(-6deg)`,
                transition: 'transform 0.2s ease-out',
              }}
            >
              <PolaroidCard
                imageSrc="/assets/images/hero-polaroid-2.webp"
                altText="Creator profile"
                caption="Campaign Vibe"
                width={150}
                tilt={-4}
              />
            </div>

            {/* Floating Element 5: Social Engagement Pill */}
            <div
              style={{
                position: 'absolute',
                top: '55%',
                left: '-28px',
                zIndex: 5,
                transform: `translate(${mousePos.x * 0.7}px, ${mousePos.y * 0.7}px)`,
                transition: 'transform 0.15s ease-out',
              }}
              className="animate-float"
            >
              <SocialPill likes="2.4M" comments="4.2K" shares="8.1K" />
            </div>

            {/* Floating Element 6: Creator Profile Badge (Bottom Left) */}
            <div
              style={{
                position: 'absolute',
                bottom: '-24px',
                left: '20px',
                zIndex: 5,
                transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
                transition: 'transform 0.18s ease-out',
              }}
            >
              <CreatorProfileBadge
                handle="influencer.diaries"
                location="Bhopal, India"
                avatarSrc="/assets/images/hero-polaroid-3.webp"
              />
            </div>

            {/* Floating Element 7: Heart Doodle */}
            <div
              style={{
                position: 'absolute',
                top: '12%',
                right: '25%',
                zIndex: 3,
                pointerEvents: 'none',
              }}
            >
              <HeartMark size={34} color="var(--color-yellow)" tilt={-12} />
            </div>

            {/* Floating Element 8: Hand-drawn Arrow */}
            <div
              style={{
                position: 'absolute',
                bottom: '80px',
                left: '-40px',
                zIndex: 3,
                pointerEvents: 'none',
              }}
            >
              <BrandArrow direction="curved-right" size={44} />
            </div>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.15fr 1fr !important;
          }
        }
        @media (max-width: 768px) {
          .desktop-only {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};
