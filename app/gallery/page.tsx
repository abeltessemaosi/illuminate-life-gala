'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import { galleryImages } from '@/lib/galleryData';

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'arrivals', label: 'Arrivals' },
  { key: 'reception', label: 'Reception' },
  { key: 'honorees', label: 'Honorees' },
  { key: 'band', label: 'Band' },
] as const;

const SIZE_PATTERN = ['lg', 'sm', 'wide', 'sm', 'sm', 'tall', 'sm', 'wide', 'sm', 'lg', 'sm', 'sm', 'wide', 'sm', 'tall', 'sm'];
const GETTY_URL = 'https://www.gettyimages.com/editorial-images/entertainment/event/illuminate-life-gala-at-the-beverly-hilton/776245227';

export default function GalleryPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]['key']>('all');

  const filtered = filter === 'all' ? galleryImages : galleryImages.filter((img) => img.category === filter);

  return (
    <>
      <CustomCursor />
      <Navigation />
      <div className="gallery-hero">
        <p className="sec-label">2024 Gallery</p>
        <h1 className="sec-title">The evening, in <em>full</em></h1>
        <p className="arc-sub">Arrivals, honorees, and the room that celebrated them — from the inaugural Illuminate Life Gala, December 3, 2024, at The Beverly Hilton.</p>
        <a href={GETTY_URL} target="_blank" rel="noopener noreferrer" className="gallery-getty-link">
          View the full 144-photo collection on Getty Images &rarr;
        </a>
      </div>

      <div className="gallery-filters">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            className={`gallery-filter-btn ${filter === f.key ? 'active' : ''}`}
            onClick={() => setFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filtered.map((img, i) => (
          <div key={img.id} className={`gallery-tile size-${SIZE_PATTERN[i % SIZE_PATTERN.length]}`}>
            <Image src={`https://picsum.photos/seed/${img.seed}/700/880`} alt={img.caption} fill sizes="(max-width: 768px) 50vw, 25vw" />
            <span className="gallery-tile-caption">{img.caption}</span>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}
