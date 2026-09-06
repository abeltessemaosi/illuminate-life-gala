import Navigation from '@/components/Navigation';
import HeroFilmStack from '@/components/HeroFilmStack';
import GalleryTeaser from '@/components/GalleryTeaser';
import Countdown from '@/components/Countdown';
import About from '@/components/About';
import Programs from '@/components/Programs';
import Experience from '@/components/Experience';
import Tickets from '@/components/Tickets';
import Sponsors from '@/components/Sponsors';
import Contact from '@/components/Contact';
import Partners from '@/components/Partners';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import TicketModal from '@/components/TicketModal';
import RevealOnScroll from '@/components/RevealOnScroll';
import Script from 'next/script';

export default function Home() {
  // Event Schema - Primary structured data for the gala
  const eventSchema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Illuminate Life Gala 2026',
    alternateName: [
      'Illuminate Life Gala Beverly Hills',
      'Second Annual Illuminate Life Gala',
    ],
    description:
      'The Second Annual Illuminate Life Gala. A philanthropic evening for mental health, recovery, and surgical access for underserved communities, presented by Concierge Health Care International at The Beverly Hilton.',
    startDate: '2026-10-15T18:00:00-07:00',
    endDate: '2026-10-15T23:00:00-07:00',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: 'The Beverly Hilton',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '9876 Wilshire Boulevard',
        addressLocality: 'Beverly Hills',
        addressRegion: 'CA',
        postalCode: '90210',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '34.0676',
        longitude: '-118.4028',
      },
    },
    image: ['/icon.svg'],
    organizer: {
      '@type': 'Organization',
      name: 'Concierge Health Care International',
      url: 'https://www.conciergehealthcareinternational.com/',
      sameAs: [
        'https://twitter.com/illuminatelife',
        'https://facebook.com/illuminatelife',
        'https://linkedin.com/company/illuminatelife',
      ],
    },
    offers: {
      '@type': 'Offer',
      url: 'https://illuminatelifegala.com/#tickets',
      availability: 'https://schema.org/InStock',
      validFrom: '2026-01-01',
      priceCurrency: 'USD',
      category: 'Charity Gala',
    },
    keywords: [
      'mental health gala Beverly Hills',
      'charity gala Beverly Hills 2026',
      'healthcare philanthropy event Los Angeles',
      'medical fundraiser Beverly Hills',
      'philanthropic event California',
      'substance recovery fundraiser',
      'surgical access charity',
    ],
    audience: {
      '@type': 'Audience',
      audienceType: 'Philanthropists, Healthcare Professionals, Community Leaders',
    },
  };

  // FAQ Schema - High ROI for rich search results
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Illuminate Life Gala?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Illuminate Life Gala is an annual philanthropic event dedicated to transforming healthcare access for underserved communities. The Second Annual Gala takes place on October 15, 2026, at The Beverly Hilton in Beverly Hills. This prestigious charity event supports mental health programs, substance recovery initiatives, surgical access, and healthcare education for those who need it most.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where is the Illuminate Life Gala held?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Illuminate Life Gala is held at The Beverly Hilton, located at 9876 Wilshire Boulevard, Beverly Hills, California 90210. This iconic venue in the heart of Beverly Hills provides an elegant setting for our philanthropic evening.',
        },
      },
      {
        '@type': 'Question',
        name: 'When is the Illuminate Life Gala 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Second Annual Illuminate Life Gala takes place on Thursday, October 15, 2026, from 6:00 PM to 11:30 PM Pacific Time at The Beverly Hilton in Beverly Hills.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I buy tickets for the Illuminate Life Gala?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Tickets for the Illuminate Life Gala can be purchased through our website at illuminatelifegala.com. We offer various ticket tiers including individual seats, VIP tables, and sponsorship opportunities. Visit our tickets section or contact our team for more information about pricing and availability.',
        },
      },
      {
        '@type': 'Question',
        name: 'How are Illuminate Life Gala proceeds used?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'All proceeds from the Illuminate Life Gala directly fund four core programs: mental health services for underserved communities, substance abuse recovery programs, surgical access for those without healthcare coverage, and healthcare education initiatives. With a fundraising goal of over $1 million, every contribution makes a tangible difference in transforming lives and providing essential healthcare access.',
        },
      },
      {
        '@type': 'Question',
        name: 'What programs does Illuminate Life Gala support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Illuminate Life Gala supports four critical healthcare programs: Mental Health Services providing counseling and psychiatric care for underserved populations, Substance Recovery Programs offering comprehensive treatment and support, Surgical Access Programs ensuring life-changing procedures for those without insurance, and Healthcare Education Initiatives training the next generation of healthcare providers to serve underserved communities.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is the Illuminate Life Gala a formal event?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, the Illuminate Life Gala is a black-tie formal event held at The Beverly Hilton. Guests are encouraged to dress in formal attire for this elegant philanthropic evening in Beverly Hills.',
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="event-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <CustomCursor />
      <Navigation />
      <HeroFilmStack />
      <Countdown />
      <About />
      <Programs />
      <Experience />
      <Tickets />
      <GalleryTeaser />
      <Sponsors />
      <Contact />
      <Partners />
      <Footer />
      <TicketModal />
      <RevealOnScroll />
    </>
  );
}
