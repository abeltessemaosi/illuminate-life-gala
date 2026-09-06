'use client';

import { useState, useEffect, useRef } from 'react';
import { sponsorApi, bookingApi, getErrorMessage } from '../lib/api';

const INTEREST_OPTIONS = [
  { value: 'sponsor_luminary', label: 'Luminary Presenting Sponsor — $50,000+', type: 'sponsor', tier: 'Luminary Presenting — $50,000+' },
  { value: 'sponsor_beacon', label: 'Beacon Gold Sponsor — $25,000', type: 'sponsor', tier: 'Beacon Gold — $25,000' },
  { value: 'sponsor_radiance', label: 'Radiance Silver Sponsor — $10,000', type: 'sponsor', tier: 'Radiance Silver — $10,000' },
  { value: 'sponsor_spark', label: 'Spark Community Sponsor — $5,000', type: 'sponsor', tier: 'Spark Community — $5,000' },
  { value: 'tickets_individual', label: 'Individual Tickets', type: 'general' },
  { value: 'tickets_table', label: 'Table Purchase', type: 'general' },
  { value: 'media_press', label: 'Media & Press', type: 'general' },
  { value: 'volunteer', label: 'Volunteer', type: 'general' },
  { value: 'donation', label: 'Donation', type: 'general' },
  { value: 'honoree_awards', label: 'Honoree / Awards Inquiry', type: 'general' },
  { value: 'general', label: 'General Inquiry', type: 'general' },
];

export default function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [organization, setOrganization] = useState('');
  const [interest, setInterest] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const selectRef = useRef<HTMLSelectElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Map a stored tier string to an option value
  const tierToOptionValue = (tier: string): string => {
    if (tier.startsWith('Luminary')) return 'sponsor_luminary';
    if (tier.startsWith('Beacon')) return 'sponsor_beacon';
    if (tier.startsWith('Radiance')) return 'sponsor_radiance';
    if (tier.startsWith('Spark')) return 'sponsor_spark';
    return '';
  };

  const applyStoredTier = () => {
    const stored = sessionStorage.getItem('selectedSponsorTier');
    if (stored) {
      const val = tierToOptionValue(stored);
      if (val) {
        setInterest(val);
        sessionStorage.removeItem('selectedSponsorTier');
        setTimeout(() => selectRef.current?.focus(), 100);
      }
    }
  };

  // Listen for the custom event (fires when Contact is already mounted and visible)
  useEffect(() => {
    const handler = (e: Event) => {
      const customEvent = e as CustomEvent;
      const val = tierToOptionValue(customEvent.detail.tier);
      if (val) {
        setInterest(val);
        sessionStorage.removeItem('selectedSponsorTier');
        setTimeout(() => selectRef.current?.focus(), 100);
      }
    };
    window.addEventListener('sponsorTierSelected', handler);
    return () => window.removeEventListener('sponsorTierSelected', handler);
  }, []);

  // IntersectionObserver: pick up sessionStorage value when section scrolls into view
  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          applyStoredTier();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const selectedOption = INTEREST_OPTIONS.find((o) => o.value === interest);

  // Email validation regex
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!firstName.trim() || !lastName.trim() || !email.trim() || !interest) {
      setError('Please fill in all required fields.');
      return;
    }

    // Validate email format
    if (!isValidEmail(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      if (selectedOption?.type === 'sponsor') {
        // Sponsor inquiry
        await sponsorApi.createSponsorInquiry({
          companyName: organization.trim() || `${firstName.trim()} ${lastName.trim()}`,
          contactName: `${firstName.trim()} ${lastName.trim()}`,
          contactEmail: email.trim(),
          contactPhone: phone.trim() || 'N/A',
          sponsorTier: selectedOption.tier!,
          message: message.trim() || undefined,
        });
      }
      // General inquiry — no backend call needed, just show success
      setSubmitted(true);
      // Reset form
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setOrganization('');
      setInterest('');
      setMessage('');
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="contact-wrap" ref={sectionRef}>
      <div className="contact-inner">
        <div className="contact-left">
          <p className="sec-label reveal">Get in Touch</p>
          <h2 className="sec-title reveal">Ready to <em>illuminate</em><br />the future?</h2>
          <div className="ct-details reveal">
            <div>
              <p className="ct-label">Date & Time</p>
              <p className="ct-value">Thursday, October 15, 2026 · 6:00 PM – 11:30 PM</p>
            </div>
            <div>
              <p className="ct-label">Venue</p>
              <p className="ct-value">The Beverly Hilton<br />9876 Wilshire Blvd, Beverly Hills, CA 90210</p>
            </div>
            <div>
              <p className="ct-label">General Inquiries</p>
              <p className="ct-value">gala@illuminatelifegala.com</p>
            </div>
            <div>
              <p className="ct-label">Sponsorships</p>
              <p className="ct-value">sponsors@illuminatelifegala.com</p>
            </div>
            <div>
              <p className="ct-label">Dress Code</p>
              <p className="ct-value">Black Tie</p>
            </div>
          </div>
        </div>

        <div className="contact-form reveal">
          <p className="sec-label">Express Your Interest</p>

          {error && (
            <div style={{
              padding: '12px',
              marginBottom: '16px',
              backgroundColor: '#fee',
              color: '#c33',
              borderRadius: '8px',
              fontSize: '14px',
            }}>
              {error}
            </div>
          )}

          <div className="cf-row">
            <div className="cf-field">
              <label>First Name *</label>
              <input
                type="text"
                placeholder="Alexandra"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                disabled={loading}
              />
            </div>
            <div className="cf-field">
              <label>Last Name *</label>
              <input
                type="text"
                placeholder="Chen"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                disabled={loading}
              />
            </div>
          </div>

          <div className="cf-field">
            <label>Email Address *</label>
            <input
              type="email"
              placeholder="alex@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
          </div>

          <div className="cf-field">
            <label>Phone</label>
            <input
              type="tel"
              placeholder="+1 (310) 000-0000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              disabled={loading}
            />
          </div>

          <div className="cf-field">
            <label>Organization</label>
            <input
              type="text"
              placeholder="Your Organization"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              disabled={loading}
            />
          </div>

          <div className="cf-field">
            <label>I Am Interested In *</label>
            <select
              ref={selectRef}
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              disabled={loading}
            >
              <option value="">Select an option</option>
              <optgroup label="Sponsorship Opportunities">
                <option value="sponsor_luminary">Luminary Presenting Sponsor — $50,000+</option>
                <option value="sponsor_beacon">Beacon Gold Sponsor — $25,000</option>
                <option value="sponsor_radiance">Radiance Silver Sponsor — $10,000</option>
                <option value="sponsor_spark">Spark Community Sponsor — $5,000</option>
              </optgroup>
              <optgroup label="Attendance & Involvement">
                <option value="tickets_individual">Individual Tickets</option>
                <option value="tickets_table">Table Purchase</option>
                <option value="volunteer">Volunteer</option>
                <option value="donation">Donation</option>
                <option value="media_press">Media &amp; Press</option>
                <option value="honoree_awards">Honoree / Awards Inquiry</option>
              </optgroup>
              <option value="general">General Inquiry</option>
            </select>

            {/* Show selected tier confirmation */}
            {selectedOption && selectedOption.type === 'sponsor' && (
              <p style={{
                marginTop: '6px',
                fontSize: '13px',
                color: '#c9a84c',
                fontStyle: 'italic',
              }}>
                ✦ {selectedOption.tier} selected
              </p>
            )}
          </div>

          <div className="cf-field">
            <label>Message (Optional)</label>
            <textarea
              placeholder="Tell us about your interest…"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={loading}
            />
          </div>

          <button
            onClick={handleSubmit}
            className="btn-primary"
            disabled={loading}
            style={{
              display: 'block',
              textAlign: 'center',
              marginTop: '8px',
              width: '100%',
              border: 'none',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.6 : 1,
            }}
          >
            <span>
              {loading
                ? 'Submitting…'
                : submitted
                ? 'Message Sent ✦'
                : 'Send Message'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
