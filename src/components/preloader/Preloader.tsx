import React, { useState, useEffect } from 'react';
import { CrownMark } from '../brand/CrownMark';
import { BrandStroke } from '../brand/BrandStroke';
import { HeartMark } from '../brand/HeartMark';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<number>(1);
  const [progress, setProgress] = useState<number>(0);
  const [isExiting, setIsExiting] = useState<boolean>(false);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    // Progress counter animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        const step = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + step, 100);
      });
    }, 80);

    // Frame timeline transitions (total: ~3.2s)
    const timers: ReturnType<typeof setTimeout>[] = [
      setTimeout(() => setPhase(2), 350),   // Keywords
      setTimeout(() => setPhase(3), 750),   // Photos scatter
      setTimeout(() => setPhase(4), 1200),  // Photos gather
      setTimeout(() => setPhase(5), 1600),  // Word 1: Influencer
      setTimeout(() => setPhase(6), 1950),  // Word 2: Weds
      setTimeout(() => setPhase(7), 2300),  // Word 3: Marketing
      setTimeout(() => setPhase(8), 2650),  // Full logo lockup + 100%
      setTimeout(() => setPhase(9), 3000),  // Tagline
      setTimeout(() => {
        setIsExiting(true);
        setTimeout(onComplete, 550);
      }, 3400),
    ];

    return () => {
      clearInterval(progressInterval);
      timers.forEach(clearTimeout);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(onComplete, 200);
  };

  const keywords = ['Influence', 'Creators', 'Brands', 'Content', 'Stories', 'Growth', 'Strategy', 'Community'];

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#080808',
        zIndex: 'var(--z-preloader)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        opacity: isExiting ? 0 : 1,
        transform: isExiting ? 'scale(1.04)' : 'scale(1)',
        transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
        pointerEvents: isExiting ? 'none' : 'auto',
      }}
    >
      {/* Skip Button for maximum user respect */}
      <button
        onClick={handleSkip}
        style={{
          position: 'absolute',
          top: '24px',
          right: '28px',
          zIndex: 10,
          color: 'var(--color-gray-400)',
          fontSize: '0.78rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          padding: '6px 14px',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: 'var(--radius-full)',
          backgroundColor: 'rgba(20, 20, 20, 0.6)',
          backdropFilter: 'blur(8px)',
        }}
      >
        Skip [ESC]
      </button>

      {/* FRAME 01 & ALL: Central Stage */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '800px',
          height: '420px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Animated Crown (Frame 1+) */}
        <div
          style={{
            transform: phase >= 1 ? 'scale(1) translateY(0)' : 'scale(0.5) translateY(20px)',
            opacity: phase >= 1 ? 1 : 0,
            transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
            marginBottom: '16px',
          }}
        >
          <CrownMark size={56} color="#FFD600" tilt={-4} />
        </div>

        {/* FRAME 02: Keywords Cloud */}
        {phase === 2 && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '24px',
              padding: '20px',
              animation: 'fadeIn 0.3s ease',
            }}
          >
            {keywords.map((kw, idx) => (
              <span
                key={kw}
                style={{
                  fontFamily: idx % 2 === 0 ? 'var(--font-handwriting)' : 'var(--font-sans)',
                  fontSize: idx % 2 === 0 ? '1.8rem' : '1.1rem',
                  fontWeight: 700,
                  color: idx === 0 ? 'var(--color-yellow)' : 'rgba(255,255,255,0.7)',
                  transform: `rotate(${(idx - 3) * 5}deg)`,
                  transition: 'opacity 0.3s ease',
                }}
              >
                {kw} {idx === 0 && '★'}
              </span>
            ))}
          </div>
        )}

        {/* FRAME 03 & 04: Photos Scatter & Gather */}
        {(phase === 3 || phase === 4) && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: 'none',
            }}
          >
            {/* Photo 1 */}
            <div
              style={{
                position: 'absolute',
                width: '120px',
                height: '140px',
                padding: '6px',
                backgroundColor: '#FFF',
                boxShadow: '0 10px 30px rgba(0,0,0,0.8)',
                transform:
                  phase === 3
                    ? 'translate(-180px, -90px) rotate(-14deg)'
                    : 'translate(-80px, -20px) rotate(-8deg)',
                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <img
                src="/assets/images/hero-polaroid-1.webp"
                alt="Creator"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Photo 2 (Center Hero) */}
            <div
              style={{
                position: 'absolute',
                width: '140px',
                height: '160px',
                padding: '6px',
                backgroundColor: '#FFF',
                boxShadow: '0 12px 35px rgba(0,0,0,0.9)',
                transform:
                  phase === 3
                    ? 'translate(0px, 110px) rotate(4deg)'
                    : 'translate(10px, 10px) rotate(2deg)',
                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                zIndex: 2,
              }}
            >
              <img
                src="/assets/images/hero-creator.webp"
                alt="Creator"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Photo 3 */}
            <div
              style={{
                position: 'absolute',
                width: '115px',
                height: '135px',
                padding: '6px',
                backgroundColor: '#FFF',
                boxShadow: '0 10px 30px rgba(0,0,0,0.8)',
                transform:
                  phase === 3
                    ? 'translate(170px, -80px) rotate(16deg)'
                    : 'translate(90px, -15px) rotate(10deg)',
                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <img
                src="/assets/images/about-polaroid-1.webp"
                alt="Creator"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        )}

        {/* FRAME 05, 06, 07: Word-by-Word Reveals */}
        {(phase === 5 || phase === 6 || phase === 7) && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
            }}
          >
            {/* Word 1: Influencer */}
            <div
              style={{
                fontFamily: 'var(--font-handwriting)',
                fontSize: '3.6rem',
                fontWeight: 700,
                color: '#FFFFFF',
                opacity: phase >= 5 ? 1 : 0,
                transform: phase >= 5 ? 'translateY(0)' : 'translateY(18px)',
                transition: 'all 0.35s ease-out',
                position: 'relative',
              }}
            >
              Influencer
              {phase === 5 && (
                <div style={{ position: 'absolute', bottom: '-4px', left: 0, width: '100%' }}>
                  <BrandStroke variant="underline" height={16} />
                </div>
              )}
            </div>

            {/* Word 2: Weds */}
            <div
              style={{
                fontFamily: 'var(--font-handwriting)',
                fontSize: '4.2rem',
                fontWeight: 700,
                color: 'var(--color-yellow)',
                fontStyle: 'italic',
                opacity: phase >= 6 ? 1 : 0,
                transform: phase >= 6 ? 'scale(1)' : 'scale(0.8)',
                transition: 'all 0.35s ease-out',
              }}
            >
              Weds
            </div>

            {/* Word 3: Marketing */}
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '2.8rem',
                fontWeight: 900,
                color: '#FFFFFF',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                opacity: phase >= 7 ? 1 : 0,
                transform: phase >= 7 ? 'translateY(0)' : 'translateY(18px)',
                transition: 'all 0.35s ease-out',
              }}
            >
              Marketing
            </div>
          </div>
        )}

        {/* FRAME 08: Full Lockup */}
        {phase === 8 && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              animation: 'scaleIn 0.4s ease-out',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2.8rem',
                fontWeight: 700,
                color: '#FFFFFF',
                lineHeight: 1.1,
              }}
            >
              Influencer <span style={{ color: 'var(--color-yellow)', fontFamily: 'var(--font-handwriting)', fontSize: '3.4rem' }}>Weds</span> Marketing
            </div>
            <div
              style={{
                fontFamily: 'var(--font-handwriting)',
                fontSize: '1.4rem',
                color: 'var(--color-yellow)',
                marginTop: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span>Let's Create Together</span>
              <HeartMark size={22} color="#FFD600" />
            </div>
          </div>
        )}

        {/* FRAME 09: Final Tagline */}
        {phase === 9 && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              animation: 'fadeIn 0.35s ease-out',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1rem',
                fontWeight: 800,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--color-yellow)',
                marginBottom: '12px',
              }}
            >
              ★ Real Creators. Real Impact. ★
            </div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2.4rem',
                fontWeight: 800,
                color: '#FFFFFF',
              }}
            >
              LET'S CREATE BIGGER STORIES.
            </div>
          </div>
        )}
      </div>

      {/* Progress Bar & Counter (Bottom) */}
      <div
        style={{
          width: '100%',
          maxWidth: '360px',
          padding: '0 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          marginTop: '20px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.78rem', color: 'var(--color-gray-400)' }}>
          <span style={{ fontFamily: 'var(--font-sans)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Loading Ecosystem...
          </span>
          <span style={{ fontFamily: 'monospace', fontWeight: 700, color: 'var(--color-yellow)' }}>
            {progress}%
          </span>
        </div>

        {/* Yellow Progress Bar */}
        <div
          style={{
            width: '100%',
            height: '4px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '2px',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: '100%',
              backgroundColor: 'var(--color-yellow)',
              boxShadow: '0 0 10px rgba(255, 214, 0, 0.8)',
              transition: 'width 0.08s linear',
            }}
          />
        </div>
      </div>
    </div>
  );
};
