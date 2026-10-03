import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Trust } from './components/sections/Trust';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Work } from './components/sections/Work';
import { Process } from './components/sections/Process';
import { WhyUs } from './components/sections/WhyUs';
import { Community } from './components/sections/Community';
import { Testimonials } from './components/sections/Testimonials';
import { CTA } from './components/sections/CTA';
import { Contact } from './components/sections/Contact';
import { Preloader } from './components/preloader/Preloader';
import { MessageSquare } from 'lucide-react';

export const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  return (
    <>
      {/* 12-Frame Preloader with strict performance timer & skip */}
      {!isLoaded && <Preloader onComplete={() => setIsLoaded(true)} />}

      {/* Main Website Structure */}
      <div
        className="app-root"
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Subtle noise overlay */}
        <div className="noise-overlay" />

        {/* Global Navigation */}
        <Navbar />

        {/* Continuous Narrative Storytelling Sections */}
        <main>
          <Hero />
          <Trust />
          <About />
          <Services />
          <Work />
          <Process />
          <WhyUs />
          <Community />
          <Testimonials />
          <CTA />
          <Contact />
        </main>

        {/* Editorial Footer */}
        <Footer />

        {/* Floating Mobile Conversion Pill (Only visible on small devices) */}
        <div
          className="mobile-floating-cta"
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 99,
          }}
        >
          <a
            href="#contact"
            style={{
              backgroundColor: 'var(--color-yellow)',
              color: '#000000',
              fontWeight: 800,
              fontSize: '0.88rem',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              padding: '12px 20px',
              borderRadius: 'var(--radius-full)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 8px 24px rgba(255, 214, 0, 0.45)',
            }}
          >
            <MessageSquare size={16} />
            <span>Let's Talk</span>
          </a>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .mobile-floating-cta {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default App;
