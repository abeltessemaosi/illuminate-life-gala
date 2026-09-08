import Link from 'next/link';
import Image from 'next/image';

const CALENDAR_URL =
  'https://calendar.google.com/calendar/render?action=TEMPLATE' +
  '&text=' + encodeURIComponent('Illuminate Life Gala 2026') +
  '&dates=20261016T010000Z/20261016T063000Z' +
  '&details=' + encodeURIComponent('Join us for the Illuminate Life Gala, presented by Concierge Health Care International.') +
  '&location=' + encodeURIComponent('The Beverly Hilton, 9876 Wilshire Boulevard, Beverly Hills, CA 90210');

const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent('The Beverly Hilton, 9876 Wilshire Boulevard, Beverly Hills, CA 90210');

export default function Footer() {
  return (
    <footer>
      <div className="footer-card">
        <a
          href="https://www.conciergehealthcareinternational.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-chci-logo"
          aria-label="Concierge Healthcare International"
        >
          <Image src="/invitelogo.avif" alt="Concierge Healthcare International" width={178} height={61} />
        </a>

        <div className="footer-cta">
          <p className="footer-cta-title">Ready to help <em>illuminate a life?</em></p>
          <Link href="/#tickets" className="btn-primary"><span>Reserve Your Seat</span></Link>
        </div>

        <div className="footer-inner">
          <div>
            <p className="footer-brand">Illuminate Life Gala</p>
            <p className="footer-tagline">
              &ldquo;Empowering Change,<br />Inspiring Hope,<br />Building Brighter Futures.&rdquo;
            </p>
          </div>
          <div>
            <p className="footer-col-title">Navigate</p>
            <ul className="footer-links">
              <li><Link href="/#about">Mission</Link></li>
              <li><Link href="/#programs">Programs</Link></li>
              <li><Link href="/#experience">The Evening</Link></li>
              <li><Link href="/#tickets">Tickets</Link></li>
              <li><Link href="/gallery">2024 Gala</Link></li>
            </ul>
          </div>
          <div>
            <p className="footer-col-title">Get Involved</p>
            <ul className="footer-links">
              <li><Link href="/#sponsors">Sponsorships</Link></li>
              <li><Link href="/#contact">Volunteer</Link></li>
              <li><Link href="/#contact">Media &amp; Press</Link></li>
              <li><Link href="/#contact">Donate</Link></li>
            </ul>
          </div>
          <div>
            <p className="footer-col-title">Event Info</p>
            <ul className="footer-links">
              <li><Link href={CALENDAR_URL} target="_blank" rel="noopener noreferrer">October 15, 2026</Link></li>
              <li><Link href={MAPS_URL} target="_blank" rel="noopener noreferrer">The Beverly Hilton</Link></li>
              <li><Link href={MAPS_URL} target="_blank" rel="noopener noreferrer">Beverly Hills, CA</Link></li>
              <li><Link href={CALENDAR_URL} target="_blank" rel="noopener noreferrer">6:00 PM – 11:30 PM</Link></li>
            </ul>
          </div>
        </div>

        <p className="footer-presented">
          Presented by{' '}
          <a href="https://www.conciergehealthcareinternational.com/" target="_blank" rel="noopener noreferrer">
            Concierge Health Care International
          </a>
        </p>

        <div className="footer-bottom">
          <div>
            <p className="footer-copy">© 2026 Concierge Health Care International &nbsp;·&nbsp; Illuminate Life Gala &nbsp;·&nbsp; All Rights Reserved</p>
            <p className="footer-legal">Concierge Health Care International is a 501(c)(3) nonprofit organization. Donations are tax-deductible to the extent allowed by law.</p>
          </div>
          <div className="footer-socials">
            <Link href="https://www.instagram.com/illuminatelifegala2026/" target="_blank" rel="noopener noreferrer">Instagram</Link>
            <Link href="https://www.linkedin.com/in/illuminate-life-gala-385236413/" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
            <Link href="https://www.facebook.com/profile.php?id=61590503279989" target="_blank" rel="noopener noreferrer">Facebook</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
