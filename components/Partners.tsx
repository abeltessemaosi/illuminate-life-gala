'use client';

import Image from 'next/image';

const partners = [
  { name: 'Eromo Ventures', logo: '/EV.png', url: 'https://www.eromoventures.com/' },
  { name: 'Concierge Healthcare Partners', logo: '/CHP.png', url: 'https://www.conciergehealthcarepartnersinc.com/' },
  { name: 'Tori Avey', logo: '/tori-avey.png', url: 'https://toriavey.com/' },
  { name: 'Levy Eromo Media', logo: '/LEM.png', url: 'https://www.levyeromomedia.com/' },
  { name: 'Music Maven', logo: '/MM.png', url: 'https://www.musicmaven.com/about-us' },
  { name: 'Consortium Capital Holdings', logo: '/CCH.png', url: 'https://www.consortiumcapitalholdings.com/' },
  { name: 'Shuki & Tori Levy Foundation', logo: '/STF.png', url: 'https://www.levyfoundation.org/' },
];

export default function Partners() {
  return (
    <div id="partners" className="partners-wrap">
      <div className="partners-inner">
        <div className="partners-header reveal">
          <h2 className="partners-title">Our Partners</h2>
          <div className="partners-rule" />
        </div>

        <div className="partners-presented reveal">
          <p className="partners-presented-label">Presented by</p>
          <a
            href="https://www.conciergehealthcareinternational.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="partners-presented-logo"
          >
            <Image src="/invitelogo-chci.png" alt="Concierge Healthcare International" width={280} height={96} />
          </a>
        </div>

        <div className="partners-grid reveal">
          {/* Row 1 — 3 logos */}
          <div className="partners-row">
            {partners.slice(0, 3).map((p) => (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="partner-logo-wrap" aria-label={p.name}>
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={180}
                  height={90}
                  style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                />
              </a>
            ))}
          </div>

          {/* Row 2 — 3 logos */}
          <div className="partners-row">
            {partners.slice(3, 6).map((p) => (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="partner-logo-wrap" aria-label={p.name}>
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={180}
                  height={90}
                  style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                />
              </a>
            ))}
          </div>

          {/* Row 3 — 1 logo centered */}
          <div className="partners-row partners-row-center">
            {partners.slice(6).map((p) => (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="partner-logo-wrap" aria-label={p.name}>
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={600}
                  height={130}
                  style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom ornament */}
        <div className="partners-ornament reveal">
          <div className="po-line" />
          <div className="po-dia" />
          <div className="po-dia" />
          <div className="po-line" />
        </div>
      </div>
    </div>
  );
}