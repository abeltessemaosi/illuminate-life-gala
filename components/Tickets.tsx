'use client';

const tickets = [
  {
    tier: 'Individual',
    name: 'Illuminator\nExperience',
    price: '750',
    quantity: 1,
    perks: [
      'Gourmet dinner & wine pairings',
      'Premium open bar access',
      'Live entertainment & dancing',
      'Curated event program',
      'Access to all installations'
    ],
    featured: false
  },
  {
    tier: 'Table of 10',
    name: 'Circle of\nIllumination',
    price: '6,500',
    quantity: 10,
    perks: [
      'Reserved table — front sections',
      'Pre-event VIP reception',
      'Branded table recognition',
      'Sponsor acknowledgement',
      'All Illuminator perks',
      'Personal event concierge'
    ],
    featured: true
  },
  {
    tier: 'VIP Individual',
    name: 'Visionary\nCollection',
    price: '2,500',
    quantity: 1,
    perks: [
      'Private VIP pre-event reception',
      'Meet & greet with honorees',
      'Premium gift collection',
      'Priority reserved seating',
      'Personal concierge',
      'All Illuminator perks'
    ],
    featured: false
  }
];

export default function Tickets() {
  const openModal = (tier: string, tierName: string, price: string, quantity: number) => {
    // Modal logic will be handled by TicketModal component
    const event = new CustomEvent('openTicketModal', {
      detail: {
        tier,
        tierName,
        price,
        quantity
      }
    });
    window.dispatchEvent(event);
  };

  return (
    <div id="tickets" className="tickets-wrap">
      <div className="tickets-inner">
        <div className="tix-header">
          <p className="sec-label reveal">Reserve Your Place</p>
          <h2 className="sec-title reveal">Choose your <em>experience</em></h2>
        </div>
        <div className="tix-list">
          {tickets.map((ticket, i) => (
            <div key={ticket.tier} className={`tix-ticket ${ticket.featured ? 'featured' : ''} reveal ${i === 1 ? 'd1' : i === 2 ? 'd2' : ''}`}>
              {ticket.featured && <span className="tix-badge">Most Popular</span>}
              <p className="tix-tier">{ticket.tier}</p>
              <p className="tix-name">{ticket.name.split('\n').map((line, i) => (
                <span key={i}>{line}<br /></span>
              ))}</p>
              <p className="tix-price"><span className="tix-currency">$</span>{ticket.price}</p>

              <div className="tix-perf" aria-hidden="true">
                <span className="tix-notch l" />
                <span className="tix-notch r" />
              </div>

              <ul className="tix-perks">
                {ticket.perks.map((perk) => (
                  <li key={perk} className="tix-perk">{perk}</li>
                ))}
              </ul>
              <button
                onClick={() => openModal(ticket.tier, ticket.name.replace('\n', ' '), ticket.price, ticket.quantity)}
                className="tix-btn"
              >
                {ticket.featured ? 'Reserve Table' : 'Reserve Seat'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
