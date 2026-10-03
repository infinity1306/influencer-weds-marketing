import React, { useState } from 'react';
import { workData } from '../../data/content';
import { imageMap } from '../../data/imageMap';
import { CrownMark } from '../brand/CrownMark';
import { ArrowUpRight } from 'lucide-react';

export const Work: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Fashion', 'Beauty', 'Lifestyle', 'Food', 'Travel', 'Tech'];

  const filteredProjects =
    activeCategory === 'All'
      ? workData
      : workData.filter((item) => item.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section
      id="work"
      style={{
        padding: '120px 0',
        backgroundColor: '#080808',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="site-container">
        {/* Header & Filter Controls */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            marginBottom: '48px',
          }}
        >
          <div className="eyebrow" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <CrownMark size={16} color="var(--color-yellow)" />
            <span>FEATURED CAMPAIGNS & CASE STUDIES</span>
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
            Real Campaigns. <br />
            <span style={{ color: 'var(--color-yellow)' }}>Measurable Outgrowth.</span>
          </h2>

          <p style={{ fontSize: '1.05rem', color: 'var(--color-gray-400)', maxWidth: '640px', lineHeight: 1.6 }}>
            Explore how we fuse authentic creator narrative with performance-led distribution to build unstoppable
            market awareness.
          </p>

          {/* Filter Chips */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '10px',
              marginTop: '32px',
            }}
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '8px 20px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.84rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    backgroundColor: isActive ? 'var(--color-yellow)' : 'var(--color-charcoal)',
                    color: isActive ? '#000000' : 'var(--color-gray-300)',
                    border: isActive
                      ? '1px solid var(--color-yellow)'
                      : '1px solid var(--color-charcoal-border)',
                    cursor: 'pointer',
                    transition: 'all var(--motion-micro)',
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '32px',
          }}
        >
          {filteredProjects.map((project) => {
            const asset = imageMap[project.imageKey] || {
              src: '/assets/images/work-fashion.webp',
              alt: project.title,
            };

            return (
              <div
                key={project.id}
                className="project-card"
                style={{
                  backgroundColor: 'var(--color-charcoal)',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  border: '1px solid var(--color-charcoal-border)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all var(--motion-standard)',
                  position: 'relative',
                }}
              >
                {/* Visual Thumbnail Frame */}
                <div
                  style={{
                    position: 'relative',
                    aspectRatio: '16 / 10',
                    overflow: 'hidden',
                    backgroundColor: '#111',
                  }}
                >
                  <img
                    src={asset.src}
                    alt={asset.alt}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                    }}
                    className="project-img"
                  />

                  {/* Category & Badge overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      display: 'flex',
                      gap: '8px',
                      zIndex: 2,
                    }}
                  >
                    <span
                      style={{
                        backgroundColor: 'rgba(8, 8, 8, 0.85)',
                        backdropFilter: 'blur(8px)',
                        color: 'var(--color-yellow)',
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        padding: '4px 12px',
                        borderRadius: 'var(--radius-full)',
                        border: '1px solid rgba(255, 214, 0, 0.3)',
                      }}
                    >
                      {project.category}
                    </span>
                    <span
                      style={{
                        backgroundColor: 'var(--color-yellow)',
                        color: '#000000',
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                        padding: '4px 10px',
                        borderRadius: 'var(--radius-full)',
                      }}
                    >
                      {project.badge}
                    </span>
                  </div>
                </div>

                {/* Card Content & Metrics */}
                <div
                  style={{
                    padding: '28px',
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-gray-400)', fontWeight: 600, marginBottom: '6px' }}>
                      {project.brand}
                    </div>

                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.35rem',
                        fontWeight: 700,
                        color: 'var(--color-offwhite)',
                        marginBottom: '10px',
                        lineHeight: 1.25,
                      }}
                    >
                      {project.title}
                    </h3>

                    <p style={{ fontSize: '0.88rem', color: 'var(--color-gray-400)', lineHeight: 1.5, marginBottom: '24px' }}>
                      {project.description}
                    </p>
                  </div>

                  {/* 3 Metric Pills */}
                  <div>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '10px',
                        backgroundColor: '#111111',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        borderRadius: 'var(--radius-md)',
                        padding: '12px 14px',
                        marginBottom: '20px',
                        textAlign: 'center',
                      }}
                    >
                      <div>
                        <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-yellow)' }}>
                          {project.reach}
                        </div>
                        <div style={{ fontSize: '0.68rem', color: 'var(--color-gray-400)', textTransform: 'uppercase' }}>
                          Reach
                        </div>
                      </div>

                      <div>
                        <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#FFFFFF' }}>
                          {project.engagement}
                        </div>
                        <div style={{ fontSize: '0.68rem', color: 'var(--color-gray-400)', textTransform: 'uppercase' }}>
                          Eng. Rate
                        </div>
                      </div>

                      <div>
                        <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-yellow)' }}>
                          {project.clicks}
                        </div>
                        <div style={{ fontSize: '0.68rem', color: 'var(--color-gray-400)', textTransform: 'uppercase' }}>
                          Clicks
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <a
                        href="#contact"
                        style={{
                          fontSize: '0.84rem',
                          fontWeight: 700,
                          color: 'var(--color-offwhite-muted)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                        }}
                      >
                        <span>Campaign Deep Dive</span>
                      </a>
                      <div
                        style={{
                          width: '38px',
                          height: '38px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--color-yellow)',
                          color: '#000000',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .project-card:hover {
          border-color: rgba(255, 214, 0, 0.4) !important;
          transform: translateY(-4px);
          box-shadow: 0 16px 36px -10px rgba(0, 0, 0, 0.8) !important;
        }
        .project-card:hover .project-img {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};
