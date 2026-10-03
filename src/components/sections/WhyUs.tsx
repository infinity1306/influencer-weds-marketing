import React, { useState } from 'react';
import { whyUsPillars } from '../../data/content';
import { CrownMark } from '../brand/CrownMark';
import { CheckCircle2 } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  return (
    <section
      id="why-us"
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
          className="why-grid"
        >
          {/* LEFT: Image Frame */}
          <div
            style={{
              position: 'relative',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              backgroundColor: 'var(--color-charcoal)',
              border: '1px solid var(--color-charcoal-border)',
              boxShadow: 'var(--shadow-card)',
              maxWidth: '520px',
              margin: '0 auto',
              width: '100%',
            }}
          >
            <img
              src="/assets/images/why-creator.webp"
              alt="Why Choose Influencer Weds Marketing"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                filter: 'contrast(1.05)',
              }}
            />

            {/* Overlay badge with crown */}
            <div
              style={{
                position: 'absolute',
                bottom: '24px',
                left: '24px',
                right: '24px',
                backgroundColor: 'rgba(12, 12, 12, 0.88)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '18px',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
              }}
            >
              <CrownMark size={32} color="var(--color-yellow)" tilt={-6} />
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--color-yellow)' }}>
                  {whyUsPillars[activeIdx].title}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--color-gray-400)' }}>
                  {whyUsPillars[activeIdx].subtitle}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Pillars List */}
          <div>
            <div className="eyebrow" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CrownMark size={16} color="var(--color-yellow)" />
              <span>THE AGENCY ADVANTAGE</span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.2rem, 3.8vw, 3.4rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                color: 'var(--color-offwhite)',
                marginBottom: '16px',
              }}
            >
              Why Choose <br />
              <span
                style={{
                  fontFamily: 'var(--font-handwriting)',
                  color: 'var(--color-yellow)',
                  fontSize: 'clamp(2.6rem, 4.4vw, 4.2rem)',
                  fontStyle: 'italic',
                }}
              >
                Influencer Weds ?
              </span>
            </h2>

            <p style={{ fontSize: '1.05rem', color: 'var(--color-gray-400)', lineHeight: 1.6, marginBottom: '36px' }}>
              We merge creative agency culture with performance marketing rigor to deliver campaigns that generate real
              commercial outcomes.
            </p>

            {/* Accordion / Pillars List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {whyUsPillars.map((pillar, idx) => {
                const isSelected = activeIdx === idx;

                return (
                  <div
                    key={pillar.title}
                    onClick={() => setActiveIdx(idx)}
                    style={{
                      padding: '18px 24px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: isSelected ? 'var(--color-charcoal)' : 'rgba(23, 23, 23, 0.4)',
                      border: isSelected
                        ? '1px solid rgba(255, 214, 0, 0.35)'
                        : '1px solid var(--color-charcoal-border)',
                      cursor: 'pointer',
                      transition: 'all var(--motion-micro)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <CheckCircle2
                          size={18}
                          color={isSelected ? 'var(--color-yellow)' : 'var(--color-gray-600)'}
                        />
                        <span
                          style={{
                            fontSize: '1rem',
                            fontWeight: 700,
                            color: isSelected ? 'var(--color-offwhite)' : 'var(--color-gray-300)',
                          }}
                        >
                          {pillar.title}
                        </span>
                      </div>
                      <span
                        style={{
                          fontSize: '0.74rem',
                          color: isSelected ? 'var(--color-yellow)' : 'var(--color-gray-500)',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em',
                        }}
                      >
                        {pillar.subtitle}
                      </span>
                    </div>

                    {isSelected && (
                      <p
                        style={{
                          marginTop: '10px',
                          fontSize: '0.88rem',
                          color: 'var(--color-gray-400)',
                          lineHeight: 1.5,
                          paddingLeft: '30px',
                        }}
                      >
                        {pillar.description}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .why-grid {
            grid-template-columns: 1fr 1.15fr !important;
          }
        }
      `}</style>
    </section>
  );
};
