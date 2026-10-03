import React from 'react';
import { Logo } from '../brand/Logo';
import { CrownMark } from '../brand/CrownMark';
import { brandContent, navItems, servicesData } from '../../data/content';
import { MapPin, Mail, Phone, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#040404',
        borderTop: '1px solid var(--color-charcoal-border)',
        paddingTop: '80px',
        paddingBottom: '40px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative subtle background crown watermark */}
      <div
        style={{
          position: 'absolute',
          bottom: '-30px',
          right: '5%',
          opacity: 0.03,
          pointerEvents: 'none',
        }}
      >
        <CrownMark size={320} color="#FFD600" tilt={12} />
      </div>

      <div className="site-container">
        {/* Top Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '48px',
            marginBottom: '60px',
          }}
        >
          {/* Brand Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '340px' }}>
            <Logo variant="full" size="md" />
            <p
              style={{
                fontSize: '0.92rem',
                color: 'var(--color-gray-400)',
                lineHeight: 1.6,
                marginTop: '12px',
              }}
            >
              We bridge creators with high-growth brands through authentic collaborations, high-converting digital
              campaigns, and data-driven impact.
            </p>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: '14px', marginTop: '6px' }}>
              {/* Instagram */}
              <a
                href={brandContent.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-charcoal-light)',
                  border: '1px solid var(--color-charcoal-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-offwhite)',
                  transition: 'all 0.2s',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={brandContent.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-charcoal-light)',
                  border: '1px solid var(--color-charcoal-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-offwhite)',
                  transition: 'all 0.2s',
                }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href={brandContent.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-charcoal-light)',
                  border: '1px solid var(--color-charcoal-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-offwhite)',
                  transition: 'all 0.2s',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                  <polygon points="10 15 15 12 10 9 10 15" fill="currentColor"/>
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href={brandContent.social.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-charcoal-light)',
                  border: '1px solid var(--color-charcoal-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-offwhite)',
                  transition: 'all 0.2s',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div
              style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                color: 'var(--color-yellow)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '20px',
              }}
            >
              Quick Links
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--color-gray-400)',
                      transition: 'color 0.2s',
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div
              style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                color: 'var(--color-yellow)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '20px',
              }}
            >
              Services
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {servicesData.map((srv) => (
                <li key={srv.id}>
                  <a
                    href="#services"
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--color-gray-400)',
                      transition: 'color 0.2s',
                    }}
                  >
                    {srv.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Contact */}
          <div>
            <div
              style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                color: 'var(--color-yellow)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '20px',
              }}
            >
              Headquarters
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.9rem', color: 'var(--color-gray-400)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={18} color="var(--color-yellow)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Bhopal, Madhya Pradesh, India (Delivering Pan-India)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={18} color="var(--color-yellow)" style={{ flexShrink: 0 }} />
                <a href={`mailto:${brandContent.email}`} style={{ color: 'inherit' }}>
                  {brandContent.email}
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={18} color="var(--color-yellow)" style={{ flexShrink: 0 }} />
                <a href={`tel:${brandContent.phone.replace(/\s+/g, '')}`} style={{ color: 'inherit' }}>
                  {brandContent.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '28px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontSize: '0.82rem',
            color: 'var(--color-gray-500)',
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} Influencer Weds Marketing. All rights reserved. Built for high-impact brands.
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--color-offwhite-muted)',
              fontSize: '0.82rem',
              fontWeight: 600,
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={15} color="var(--color-yellow)" />
          </button>
        </div>
      </div>
    </footer>
  );
};
