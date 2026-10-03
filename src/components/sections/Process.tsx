import React from 'react';
import { processSteps } from '../../data/content';
import { CrownMark } from '../brand/CrownMark';
import { Lightbulb, Users, Megaphone, BarChart3 } from 'lucide-react';

export const Process: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Lightbulb size={24} color="var(--color-yellow)" />;
      case 1:
        return <Users size={24} color="var(--color-yellow)" />;
      case 2:
        return <Megaphone size={24} color="var(--color-yellow)" />;
      case 3:
        return <BarChart3 size={24} color="var(--color-yellow)" />;
      default:
        return <CrownMark size={24} color="var(--color-yellow)" />;
    }
  };

  return (
    <section
      id="process"
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
            maxWidth: '680px',
            margin: '0 auto 64px auto',
          }}
        >
          <div className="eyebrow" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <CrownMark size={16} color="var(--color-yellow)" />
            <span>HOW WE WORK</span>
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
            A Systematic Method. <br />
            <span style={{ color: 'var(--color-yellow)' }}>Repeatable Impact.</span>
          </h2>

          <p style={{ fontSize: '1.05rem', color: 'var(--color-gray-400)', lineHeight: 1.6 }}>
            A disciplined 4-phase execution framework designed to eliminate guesswork, protect brand reputation, and
            maximize campaign efficiency.
          </p>
        </div>

        {/* Steps Container */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
            position: 'relative',
          }}
        >
          {processSteps.map((step, idx) => (
            <div
              key={step.step}
              style={{
                backgroundColor: 'var(--color-charcoal)',
                border: '1px solid var(--color-charcoal-border)',
                borderRadius: 'var(--radius-lg)',
                padding: '32px 24px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                transition: 'transform var(--motion-standard), border-color var(--motion-standard)',
              }}
              className="process-card"
            >
              {/* Step number badge */}
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
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 214, 0, 0.08)',
                    border: '1px solid rgba(255, 214, 0, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {getStepIcon(idx)}
                </div>

                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.6rem',
                    fontWeight: 900,
                    color: 'var(--color-yellow)',
                    letterSpacing: '0.04em',
                  }}
                >
                  {step.step}
                </span>
              </div>

              {/* Title & Highlight */}
              <div
                style={{
                  fontSize: '0.74rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'var(--color-yellow)',
                  marginBottom: '8px',
                }}
              >
                {step.highlight}
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  color: 'var(--color-offwhite)',
                  marginBottom: '14px',
                }}
              >
                {step.title}
              </h3>

              <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-400)', lineHeight: 1.6 }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .process-card:hover {
          border-color: rgba(255, 214, 0, 0.4) !important;
          transform: translateY(-4px);
        }
      `}</style>
    </section>
  );
};
