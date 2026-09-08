'use client';

import { useEffect, useState } from 'react';
import { sponsorApi } from '../lib/api';

const tiers = [
  { name: 'Luminary Presenting', amount: '$50,000+', slots: 2, desc: 'Top-tier visibility across every touchpoint of the evening.' },
  { name: 'Beacon Gold', amount: '$25,000', slots: 3, desc: 'Prime recognition and premium seating for your team.' },
  { name: 'Radiance Silver', amount: '$10,000', slots: 4, desc: 'Meaningful presence with program and digital recognition.' },
  { name: 'Spark Community', amount: '$5,000', slots: 5, desc: 'A welcoming entry point to support the mission.' },
];

interface ActiveSponsor {
  tier: string;
  companyName: string;
  logoUrl?: string;
  websiteUrl?: string;
}

export default function Sponsors() {
  const [activeSponsors, setActiveSponsors] = useState<ActiveSponsor[]>([]);

  useEffect(() => {
    sponsorApi.getActiveSponsors()
      .then((data) => setActiveSponsors(data.sponsors || []))
      .catch(() => {}); // silently fail — tiers just show no logos yet
  }, []);

  // Find ALL active sponsors for a given tier name
  const getSponsorsForTier = (tierName: string) =>
    activeSponsors.filter((s) => s.tier.toLowerCase().includes(tierName.toLowerCase()));

  const handleTierSelect = (tierName: string, amount: string) => {
    const tierValue = `${tierName} — ${amount}`;
    sessionStorage.setItem('selectedSponsorTier', tierValue);
    window.dispatchEvent(
      new CustomEvent('sponsorTierSelected', { detail: { tier: tierValue } })
    );

    const contact = document.getElementById('contact');
    if (contact) contact.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="sponsors" className="sponsors-wrap">
      <div className="sponsors-inner">
        <div className="sp-header">
          <p className="sec-label reveal">Partner With Us</p>
          <h2 className="sec-title reveal">Sponsorship <em>opportunities</em></h2>
          <p className="sp-intro reveal">
            Align your brand with purpose. Join 450 philanthropic leaders, executives, and changemakers for an evening that leaves a lasting legacy.
          </p>
        </div>
        <div className="sp-tiers-grid reveal">
          {tiers.map((tier) => {
            const tierSponsors = getSponsorsForTier(tier.name);
            const filledSlots = tierSponsors.length;
            const isFull = filledSlots >= tier.slots;

            return (
              <button
                key={tier.name}
                className="sp-tier-card"
                onClick={() => handleTierSelect(tier.name, tier.amount)}
                type="button"
              >
                <div className="sp-tier-card-top">
                  <p className="sp-tier-card-name">{tier.name}</p>
                  <p className="sp-tier-card-amount">{tier.amount}</p>
                  <p className="sp-tier-card-desc">{tier.desc}</p>
                </div>

                {tierSponsors.length > 0 && (
                  <div className="sp-tier-card-logos">
                    {tierSponsors.map((sponsor, idx) => (
                      <div key={idx} className="sp-tier-card-logo" title={sponsor.companyName}>
                        {sponsor.logoUrl ? (
                          <img src={sponsor.logoUrl} alt={sponsor.companyName} />
                        ) : (
                          sponsor.companyName
                        )}
                      </div>
                    ))}
                  </div>
                )}

                <div className="sp-tier-card-cta">
                  <span>{isFull ? 'View this tier' : "I'm interested"}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </div>
              </button>
            );
          })}
        </div>
        <div style={{ marginTop: '50px', display: 'flex', gap: '18px', flexWrap: 'wrap' }} className="reveal">
          <button
            className="btn-primary"
            onClick={() => {
              const contact = document.getElementById('contact');
              if (contact) contact.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span>Become a Sponsor</span>
          </button>
          <a
            href="/ILG_Sponsorship_Deck.pdf"
            download
            className="btn-ghost"
          >
            <span>Download Sponsorship Deck</span>
          </a>
        </div>
      </div>
    </div>
  );
}