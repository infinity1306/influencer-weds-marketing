import React, { useState } from 'react';
import { CrownMark } from '../brand/CrownMark';
import { Button } from '../ui/Button';
import { submitLead } from '../../lib/formAdapter';
import type { LeadFormData } from '../../lib/formAdapter';
import { Mail, Phone, MapPin, CheckCircle, AlertCircle, Loader2, Sparkles } from 'lucide-react';
import { brandContent } from '../../data/content';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'Influencer Marketing',
    budget: '₹2 Lakhs - ₹5 Lakhs',
    message: '',
    botCheck: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState<string>('');
  const [submissionId, setSubmissionId] = useState<string>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setFeedbackMessage('');

    try {
      const result = await submitLead(formData);
      setStatus('success');
      setFeedbackMessage(result.message);
      if (result.submissionId) setSubmissionId(result.submissionId);
    } catch (err: unknown) {
      setStatus('error');
      setFeedbackMessage(
        err instanceof Error ? err.message : 'An error occurred while submitting. Please try again.'
      );
    }
  };

  return (
    <section
      id="contact"
      style={{
        padding: '120px 0',
        backgroundColor: '#0A0A0A',
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
          }}
          className="contact-grid"
        >
          {/* LEFT: Contact Information & Direct Channels */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="eyebrow" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CrownMark size={16} color="var(--color-yellow)" />
              <span>LET'S BUILD SOMETHING ICONIC</span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.4rem, 4.2vw, 3.8rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                color: 'var(--color-offwhite)',
                marginBottom: '20px',
              }}
            >
              Get In Touch. <br />
              <span style={{ color: 'var(--color-yellow)' }}>Start A Sprint.</span>
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--color-gray-300)',
                lineHeight: 1.6,
                marginBottom: '40px',
              }}
            >
              Have an upcoming product launch or want to scale your influencer engine? Share your campaign goals and our
              senior strategist will prepare an actionable briefing deck for your team.
            </p>

            {/* Direct Contact Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  backgroundColor: 'var(--color-charcoal)',
                  border: '1px solid var(--color-charcoal-border)',
                  padding: '18px 24px',
                  borderRadius: 'var(--radius-md)',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 214, 0, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Mail size={20} color="var(--color-yellow)" />
                </div>
                <div>
                  <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--color-gray-400)', fontWeight: 700 }}>
                    Direct Email
                  </div>
                  <a href={`mailto:${brandContent.email}`} style={{ fontSize: '0.98rem', fontWeight: 600, color: '#FFF' }}>
                    {brandContent.email}
                  </a>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  backgroundColor: 'var(--color-charcoal)',
                  border: '1px solid var(--color-charcoal-border)',
                  padding: '18px 24px',
                  borderRadius: 'var(--radius-md)',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 214, 0, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Phone size={20} color="var(--color-yellow)" />
                </div>
                <div>
                  <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--color-gray-400)', fontWeight: 700 }}>
                    Campaign Inquiries
                  </div>
                  <a href={`tel:${brandContent.phone.replace(/\s+/g, '')}`} style={{ fontSize: '0.98rem', fontWeight: 600, color: '#FFF' }}>
                    {brandContent.phone}
                  </a>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  backgroundColor: 'var(--color-charcoal)',
                  border: '1px solid var(--color-charcoal-border)',
                  padding: '18px 24px',
                  borderRadius: 'var(--radius-md)',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 214, 0, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <MapPin size={20} color="var(--color-yellow)" />
                </div>
                <div>
                  <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--color-gray-400)', fontWeight: 700 }}>
                    Strategic HQ
                  </div>
                  <div style={{ fontSize: '0.98rem', fontWeight: 600, color: '#FFF' }}>
                    Bhopal, Madhya Pradesh, India
                  </div>
                </div>
              </div>
            </div>

            {/* Handwritten note */}
            <div
              style={{
                fontFamily: 'var(--font-handwriting)',
                fontSize: '1.6rem',
                fontWeight: 700,
                color: 'var(--color-yellow)',
                transform: 'rotate(-2deg)',
              }}
            >
              Let's create something extraordinary.
            </div>
          </div>

          {/* RIGHT: Lead Generation Form */}
          <div
            style={{
              backgroundColor: 'var(--color-charcoal)',
              border: '1px solid var(--color-charcoal-border)',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(28px, 4vw, 48px)',
              boxShadow: 'var(--shadow-card)',
              position: 'relative',
            }}
          >
            {status === 'success' ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '40px 20px',
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 214, 0, 0.15)',
                    border: '2px solid var(--color-yellow)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                  }}
                >
                  <CheckCircle size={32} color="var(--color-yellow)" />
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    marginBottom: '14px',
                  }}
                >
                  Proposal Request Logged
                </h3>

                <p style={{ fontSize: '1rem', color: 'var(--color-gray-300)', lineHeight: 1.6, maxWidth: '420px', marginBottom: '24px' }}>
                  {feedbackMessage}
                </p>

                {submissionId && (
                  <div
                    style={{
                      fontFamily: 'monospace',
                      fontSize: '0.85rem',
                      color: 'var(--color-yellow)',
                      backgroundColor: 'rgba(0, 0, 0, 0.4)',
                      padding: '8px 18px',
                      borderRadius: 'var(--radius-sm)',
                      marginBottom: '32px',
                    }}
                  >
                    REF ID: {submissionId}
                  </div>
                )}

                <Button
                  onClick={() => {
                    setStatus('idle');
                    setFormData({
                      name: '',
                      company: '',
                      email: '',
                      phone: '',
                      service: 'Influencer Marketing',
                      budget: '₹2 Lakhs - ₹5 Lakhs',
                      message: '',
                      botCheck: '',
                    });
                  }}
                  variant="outline"
                  size="md"
                >
                  Submit Another Inquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.7rem',
                      fontWeight: 700,
                      color: '#FFF',
                    }}
                  >
                    Campaign Brief
                  </h3>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-gray-400)', textTransform: 'uppercase' }}>
                    * Required fields
                  </span>
                </div>

                {status === 'error' && (
                  <div
                    style={{
                      backgroundColor: 'rgba(255, 59, 48, 0.12)',
                      border: '1px solid rgba(255, 59, 48, 0.4)',
                      color: '#FF6B6B',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-sm)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontSize: '0.88rem',
                    }}
                  >
                    <AlertCircle size={18} />
                    <span>{feedbackMessage}</span>
                  </div>
                )}

                {/* Honeypot field for invisible spam prevention */}
                <input
                  type="text"
                  name="botCheck"
                  value={formData.botCheck}
                  onChange={handleChange}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* 2 Column Row: Name & Company */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                  <div>
                    <label
                      htmlFor="name"
                      style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-gray-300)', marginBottom: '8px' }}
                    >
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        backgroundColor: '#0D0D0D',
                        border: '1px solid var(--color-charcoal-border)',
                        color: '#FFF',
                        padding: '12px 16px',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.95rem',
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-gray-300)', marginBottom: '8px' }}
                    >
                      Brand / Company
                    </label>
                    <input
                      id="company"
                      type="text"
                      name="company"
                      placeholder="e.g. Acme Lifestyle"
                      value={formData.company}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        backgroundColor: '#0D0D0D',
                        border: '1px solid var(--color-charcoal-border)',
                        color: '#FFF',
                        padding: '12px 16px',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.95rem',
                      }}
                    />
                  </div>
                </div>

                {/* 2 Column Row: Email & Phone */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                  <div>
                    <label
                      htmlFor="email"
                      style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-gray-300)', marginBottom: '8px' }}
                    >
                      Work Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="priya@brand.com"
                      value={formData.email}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        backgroundColor: '#0D0D0D',
                        border: '1px solid var(--color-charcoal-border)',
                        color: '#FFF',
                        padding: '12px 16px',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.95rem',
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-gray-300)', marginBottom: '8px' }}
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        backgroundColor: '#0D0D0D',
                        border: '1px solid var(--color-charcoal-border)',
                        color: '#FFF',
                        padding: '12px 16px',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.95rem',
                      }}
                    />
                  </div>
                </div>

                {/* 2 Column Row: Service & Budget */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                  <div>
                    <label
                      htmlFor="service"
                      style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-gray-300)', marginBottom: '8px' }}
                    >
                      Service Required
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        backgroundColor: '#0D0D0D',
                        border: '1px solid var(--color-charcoal-border)',
                        color: '#FFF',
                        padding: '12px 16px',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.95rem',
                      }}
                    >
                      <option value="Influencer Marketing">01. Influencer Marketing</option>
                      <option value="Digital Marketing & Growth">02. Digital Marketing & Growth</option>
                      <option value="Campaign Management">03. Campaign Management</option>
                      <option value="Content & Creative Studio">04. Content & Creative Studio</option>
                      <option value="Full Comprehensive Suite">05. Full Comprehensive Suite</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-gray-300)', marginBottom: '8px' }}
                    >
                      Campaign Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        backgroundColor: '#0D0D0D',
                        border: '1px solid var(--color-charcoal-border)',
                        color: '#FFF',
                        padding: '12px 16px',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.95rem',
                      }}
                    >
                      <option value="₹1 Lakh - ₹3 Lakhs">₹1 Lakh - ₹3 Lakhs</option>
                      <option value="₹3 Lakhs - ₹7 Lakhs">₹3 Lakhs - ₹7 Lakhs</option>
                      <option value="₹7 Lakhs - ₹15 Lakhs">₹7 Lakhs - ₹15 Lakhs</option>
                      <option value="₹15 Lakhs+">₹15 Lakhs+ (Pan-India Push)</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-gray-300)', marginBottom: '8px' }}
                  >
                    Campaign Goals / Target Audience *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us about your brand, upcoming launches, creator requirements, and desired timeline..."
                    value={formData.message}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      backgroundColor: '#0D0D0D',
                      border: '1px solid var(--color-charcoal-border)',
                      color: '#FFF',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.95rem',
                      resize: 'vertical',
                    }}
                  />
                </div>

                {/* Submit Button */}
                <div style={{ marginTop: '10px' }}>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    style={{
                      width: '100%',
                      padding: '16px 28px',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: 'var(--color-yellow)',
                      color: '#000000',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 800,
                      fontSize: '1rem',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                      cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      boxShadow: 'var(--shadow-yellow)',
                      transition: 'all var(--motion-micro)',
                    }}
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        <span>Logging Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Enquiry</span>
                        <Sparkles size={18} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr 1.2fr !important;
          }
        }
      `}</style>
    </section>
  );
};
