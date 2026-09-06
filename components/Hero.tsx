'use client';

import Link from 'next/link';
import ParticleCanvas from './ParticleCanvas';

// Background style: 'black' (flat black) or 'gold' (gold + white gradient mesh)
const HERO_BG: 'black' | 'gold' = 'gold';

export default function Hero() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero" aria-label="Hero section for Illuminate Life Gala 2026">
      <div className={`hero-bg hero-bg--${HERO_BG}`} />
      <ParticleCanvas />
      <div className="hero-content">
        <div className="hero-chips">
          <span className="hero-chip">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            The Beverly Hilton, Beverly Hills
          </span>
          <span className="hero-chip">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="5" width="18" height="16" rx="2" />
              <path d="M3 10h18M8 3v4M16 3v4" />
            </svg>
            October 15, 2026
          </span>
        </div>
        <p className="hero-eyebrow">Second Annual Philanthropic Gala</p>
        <h1 className="hero-title">
          Illuminate Life<br />
          <em>Gala</em>
        </h1>
          <p className="hero-presented mt-10">
          Presented by{' '}
          <a href="https://www.conciergehealthcareinternational.com/" target="_blank" rel="noopener noreferrer">
            Concierge Health Care International
          </a>
        </p>
        <div className="hero-divider" aria-hidden="true" />
    
        <div className="hero-meta">
          <p className="hero-date">
            <time dateTime="2026-10-15T18:00:00-07:00">Thursday, October 15, 2026 &nbsp;·&nbsp; 6:00 PM - 11:30 PM</time>
          </p>
          <p className="hero-venue">The Beverly Hilton &nbsp;·&nbsp; Beverly Hills, California</p>
        </div>
        
        <div className="hero-actions">
          <div className="btn-split">
            <Link
              href="#tickets"
              className="btn-split-label"
              onClick={(e) => scrollToSection(e, '#tickets')}
              aria-label="Reserve your seat for the Illuminate Life Gala"
            >
              Reserve Your Seat
            </Link>
            <Link
              href="#tickets"
              className="btn-split-arrow"
              onClick={(e) => scrollToSection(e, '#tickets')}
              aria-label="Jump to ticket options"
            >
              &#8600;
            </Link>
          </div>
          {/* <Link
            href="#about"
            className="btn-ghost"
            onClick={(e) => scrollToSection(e, '#about')}
            aria-label="Learn about our mission"
          >
            Our Mission
          </Link> */}
        </div>
      </div>

      <div className="hero-marquee" aria-hidden="true">
        <div className="hero-marquee-track">
          <span>Illuminate Life <em>&#9670;</em> 2026 <em>&#9670;</em> Beverly Hilton <em>&#9670;</em> </span>
          <span>Illuminate Life <em>&#9670;</em> 2026 <em>&#9670;</em> Beverly Hilton <em>&#9670;</em> </span>
        </div>
      </div>
    </section>
  );
}
