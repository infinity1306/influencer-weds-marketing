import React, { useState, useEffect } from 'react';
import { Logo } from '../brand/Logo';
import { Button } from '../ui/Button';
import { navItems } from '../../data/content';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 30;
      setScrolled(isScrolled);

      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (height > 0) {
        setScrollProgress((winScroll / height) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Scroll Progress Line */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '3px',
          width: `${scrollProgress}%`,
          backgroundColor: 'var(--color-yellow)',
          zIndex: 1002,
          transition: 'width 0.1s linear',
        }}
      />

      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 'var(--z-sticky)',
          backgroundColor: scrolled ? 'rgba(8, 8, 8, 0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--color-charcoal-border)' : '1px solid transparent',
          transition: 'background-color var(--motion-standard), border-color var(--motion-standard), backdrop-filter var(--motion-standard)',
        }}
      >
        <div
          className="site-container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: scrolled ? '72px' : '88px',
            transition: 'height var(--motion-standard)',
          }}
        >
          {/* Logo */}
          <a href="#" style={{ display: 'inline-flex', alignItems: 'center' }}>
            <Logo variant="horizontal" size="sm" />
          </a>

          {/* Desktop Navigation */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '32px',
            }}
            className="desktop-nav"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                style={{
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  color: 'var(--color-offwhite-muted)',
                  letterSpacing: '0.02em',
                  transition: 'color var(--motion-micro)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-yellow)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-offwhite-muted)')}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div style={{ display: 'none', alignItems: 'center', gap: '16px' }} className="desktop-actions">
            <Button href="#contact" variant="primary" size="sm" icon="arrow-right">
              Let's Talk
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }} className="mobile-toggle">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
              style={{
                width: '42px',
                height: '42px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid var(--color-charcoal-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-offwhite)',
              }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(8, 8, 8, 0.98)',
            backdropFilter: 'blur(20px)',
            zIndex: 'var(--z-drawer)',
            display: 'flex',
            flexDirection: 'column',
            padding: '100px 24px 36px 24px',
            overflowY: 'auto',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: '1.6rem',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  color: 'var(--color-offwhite)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  paddingBottom: '12px',
                }}
              >
                <span>{item.label}</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-yellow)', fontFamily: 'var(--font-sans)' }}>
                  0{index + 1}
                </span>
              </a>
            ))}
          </div>

          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Button
              href="#contact"
              variant="primary"
              size="lg"
              icon="arrow-right"
              onClick={() => setMobileMenuOpen(false)}
              style={{ width: '100%' }}
            >
              Start A Campaign
            </Button>
            <div style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--color-gray-400)', marginTop: '12px' }}>
              📍 Bhopal, Madhya Pradesh, India
            </div>
          </div>
        </div>
      )}

      {/* Responsive styles */}
      <style>{`
        @media (min-width: 992px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-actions {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};
