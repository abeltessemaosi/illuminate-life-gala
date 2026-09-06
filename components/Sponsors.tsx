'use client';

import { useEffect, useState } from 'react';
import { sponsorApi } from '../lib/api';

const tiers = [
  { name: 'Luminary Presenting', amount: '$50,000+', slots: 2 },
  { name: 'Beacon Gold', amount: '$25,000', slots: 3 },
  { name: 'Radiance Silver', amount: '$10,000', slots: 4 },
  { name: 'Spark Community', amount: '$5,000', slots: 5 },
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
      .catch(() => {}); // silently fail — slots just show "Available"
  }, []);

  // Find ALL active sponsors for a given tier name
  const getSponsorsForTier = (tierName: string) =>
    activeSponsors.filter((s) => s.tier.toLowerCase().includes(tierName.toLowerCase()));

  const handleSlotClick = (tierName: string, amount: string, isTaken: boolean) => {
    if (isTaken) return;

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
        <div className="sp-tiers reveal">
          {tiers.map((tier) => {
            const tierSponsors = getSponsorsForTier(tier.name);
            const filledSlots = tierSponsors.length;
            const availableSlots = Math.max(0, tier.slots - filledSlots);
            const isFull = availableSlots === 0;
            
            return (
              <div key={tier.name} className="sp-tier">
                <div>
                  <p className="sp-tier-name">{tier.name}</p>
                  <p className="sp-tier-amount">{tier.amount}</p>
                  {isFull && (
                    <p className="sp-tier-status" style={{ 
                      color: '#ef4444', 
                      fontSize: '0.875rem', 
                      fontWeight: '600',
                      marginTop: '0.25rem'
                    }}>
                      SOLD OUT
                    </p>
                  )}
                </div>
                <div className="sp-slots">
                  {/* Show all active sponsors for this tier */}
                  {tierSponsors.map((sponsor, idx) => (
                    <div key={idx} className="sp-slot sp-slot-taken" title={sponsor.companyName}>
                      {sponsor.logoUrl ? (
                        <img
                          src={sponsor.logoUrl}
                          alt={sponsor.companyName}
                          style={{ maxHeight: '60px', maxWidth: '140px', objectFit: 'contain' }}
                        />
                      ) : (
                        sponsor.companyName
                      )}
                    </div>
                  ))}

                  {/* Show remaining available slots (only if not full) */}
                  {availableSlots > 0 && (
                    Array.from({ length: availableSlots }).map((_, i) => (
                      <div
                        key={`available-${i}`}
                        className="sp-slot sp-slot-available"
                        onClick={() => handleSlotClick(tier.name, tier.amount, false)}
                        style={{ cursor: 'pointer' }}
                        title={`Claim this ${tier.name} spot`}
                      >
                        Available
                      </div>
                    ))
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ marginTop: '50px' }} className="reveal">
          <button
            className="btn-primary"
            onClick={() => {
              const contact = document.getElementById('contact');
              if (contact) contact.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span>Become a Sponsor</span>
          </button>
        </div>
      </div>
    </div>
  );
}
