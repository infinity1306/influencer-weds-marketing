import React, { useState } from 'react';
import { testimonialsData } from '../../data/content';
import { CrownMark } from '../brand/CrownMark';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);

  const prevTestimonial = () => {
    setCurrentIdx((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIdx((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="testimonials"
      style={{
        padding: '120px 0',
        backgroundColor: '#080808',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="site-container">
        {/* Top Header & Nav Arrows */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '24px',
            marginBottom: '48px',
          }}
        >
          <div>
            <div className="eyebrow" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CrownMark size={16} color="var(--color-yellow)" />
              <span>CLIENT WORDS</span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                color: 'var(--color-offwhite)',
                marginBottom: '12px',
              }}
            >
              What Brands Say.
            </h2>

            <p style={{ fontSize: '1.05rem', color: 'var(--color-gray-400)' }}>
              Real people. Real collaborations. Real results.
            </p>
          </div>

          {/* Controls */}
          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-charcoal)',
                border: '1px solid var(--color-charcoal-border)',
                color: 'var(--color-offwhite)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-yellow)';
                e.currentTarget.style.color = '#000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-charcoal)';
                e.currentTarget.style.color = 'var(--color-offwhite)';
              }}
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-charcoal)',
                border: '1px solid var(--color-charcoal-border)',
                color: 'var(--color-offwhite)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-yellow)';
                e.currentTarget.style.color = '#000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-charcoal)';
                e.currentTarget.style.color = 'var(--color-offwhite)';
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Testimonials Grid / Display */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
          }}
        >
          {testimonialsData.map((item, idx) => {
            const isFeatured = idx === currentIdx;

            return (
              <div
                key={item.id}
                style={{
                  backgroundColor: isFeatured ? 'var(--color-charcoal-card)' : 'var(--color-charcoal)',
                  border: isFeatured
                    ? '1px solid rgba(255, 214, 0, 0.4)'
                    : '1px solid var(--color-charcoal-border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '36px 30px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: isFeatured ? '0 16px 36px rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 214, 0, 0.1)' : 'none',
                  transition: 'all var(--motion-standard)',
                  position: 'relative',
                }}
              >
                <div>
                  {/* Top Quote Icon & Rating */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '20px',
                    }}
                  >
                    <Quote size={28} color="var(--color-yellow)" style={{ opacity: 0.8 }} />
                    <div style={{ display: 'flex', gap: '3px' }}>
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} size={15} fill="var(--color-yellow)" color="var(--color-yellow)" />
                      ))}
                    </div>
                  </div>

                  <p
                    style={{
                      fontSize: '1rem',
                      lineHeight: 1.65,
                      color: 'var(--color-gray-200)',
                      fontStyle: 'italic',
                      marginBottom: '28px',
                    }}
                  >
                    "{item.quote}"
                  </p>
                </div>

                {/* Author Card Footer */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '20px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#FFFFFF' }}>{item.name}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-gray-400)' }}>
                      {item.role}, {item.company}
                    </div>
                  </div>

                  <span
                    style={{
                      backgroundColor: 'rgba(255, 214, 0, 0.1)',
                      color: 'var(--color-yellow)',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid rgba(255, 214, 0, 0.25)',
                    }}
                  >
                    {item.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
