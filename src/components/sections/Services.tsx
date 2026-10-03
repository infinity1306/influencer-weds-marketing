import React, { useState } from 'react';
import { servicesData } from '../../data/content';
import { CrownMark } from '../brand/CrownMark';
import { BrandStroke } from '../brand/BrandStroke';
import { ArrowUpRight, Check, Sparkles, Megaphone, BarChart3, Video, Layers } from 'lucide-react';

export const Services: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'influencer-marketing':
        return <Megaphone size={26} color="var(--color-yellow)" />;
      case 'digital-marketing':
        return <BarChart3 size={26} color="var(--color-yellow)" />;
      case 'campaign-management':
        return <Layers size={26} color="var(--color-yellow)" />;
      case 'content-creative':
        return <Video size={26} color="var(--color-yellow)" />;
      default:
        return <Sparkles size={26} color="var(--color-yellow)" />;
    }
  };

  return (
    <section
      id="services"
      style={{
        padding: '120px 0',
        backgroundColor: '#0C0C0C',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="site-container">
        {/* Header */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto 64px auto',
          }}
        >
          <div className="eyebrow" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <CrownMark size={16} color="var(--color-yellow)" />
            <span>OUR STRATEGIC CAPABILITIES</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              color: 'var(--color-offwhite)',
              marginBottom: '18px',
            }}
          >
            Engineered For Scale. <br />
            <span style={{ color: 'var(--color-yellow)' }}>Built For Retention.</span>
          </h2>

          <p style={{ fontSize: '1.05rem', color: 'var(--color-gray-400)', lineHeight: 1.6 }}>
            From high-converting organic creator partnerships to full-funnel paid UGC media amplification, we offer
            comprehensive solutions tailored to modern consumer brands.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
          }}
        >
          {servicesData.map((srv) => {
            const isHovered = activeCard === srv.id;

            return (
              <div
                key={srv.id}
                onMouseEnter={() => setActiveCard(srv.id)}
                onMouseLeave={() => setActiveCard(null)}
                style={{
                  backgroundColor: isHovered ? '#181818' : 'var(--color-charcoal)',
                  border: isHovered
                    ? '1px solid rgba(255, 214, 0, 0.4)'
                    : '1px solid var(--color-charcoal-border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '36px 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all var(--motion-standard)',
                  boxShadow: isHovered ? 'var(--shadow-card), 0 0 25px rgba(255, 214, 0, 0.15)' : 'none',
                  transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
                }}
              >
                {/* Yellow accent brush in top corner */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-30px',
                    right: '-30px',
                    width: '120px',
                    height: '120px',
                    opacity: isHovered ? 0.35 : 0.1,
                    transition: 'opacity var(--motion-standard)',
                    pointerEvents: 'none',
                  }}
                >
                  <BrandStroke variant="highlight" width="100%" height="100%" />
                </div>

                <div>
                  {/* Top Bar: Number & Icon */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '28px',
                    }}
                  >
                    <div
                      style={{
                        width: '54px',
                        height: '54px',
                        borderRadius: 'var(--radius-md)',
                        backgroundColor: 'rgba(255, 214, 0, 0.08)',
                        border: '1px solid rgba(255, 214, 0, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'transform var(--motion-standard)',
                        transform: isHovered ? 'scale(1.08)' : 'scale(1)',
                      }}
                    >
                      {getServiceIcon(srv.id)}
                    </div>

                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '1.4rem',
                        fontWeight: 900,
                        color: isHovered ? 'var(--color-yellow)' : 'var(--color-gray-600)',
                        letterSpacing: '0.04em',
                        transition: 'color var(--motion-micro)',
                      }}
                    >
                      {srv.number}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.6rem',
                      fontWeight: 700,
                      color: 'var(--color-offwhite)',
                      marginBottom: '10px',
                    }}
                  >
                    {srv.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      color: 'var(--color-yellow)',
                      marginBottom: '16px',
                    }}
                  >
                    {srv.tagline}
                  </p>

                  <p
                    style={{
                      fontSize: '0.92rem',
                      color: 'var(--color-gray-400)',
                      lineHeight: 1.6,
                      marginBottom: '28px',
                    }}
                  >
                    {srv.description}
                  </p>

                  {/* Feature Bullets */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
                    {srv.features.map((feat) => (
                      <div key={feat} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#D9D9D9' }}>
                        <Check size={14} color="var(--color-yellow)" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Row with Circular Arrow */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '20px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <a
                    href="#contact"
                    style={{
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      color: isHovered ? 'var(--color-yellow)' : 'var(--color-offwhite)',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                      transition: 'color var(--motion-micro)',
                    }}
                  >
                    Request Proposal
                  </a>

                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      backgroundColor: isHovered ? 'var(--color-yellow)' : 'rgba(255, 255, 255, 0.08)',
                      color: isHovered ? '#000000' : 'var(--color-offwhite)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all var(--motion-standard)',
                      transform: isHovered ? 'rotate(45deg) scale(1.08)' : 'rotate(0deg) scale(1)',
                    }}
                  >
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
