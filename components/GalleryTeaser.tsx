'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { galleryImages } from '@/lib/galleryData';

const teaserImages = galleryImages.slice(0, 9);
const HALF = Math.floor(teaserImages.length / 2);

export default function GalleryTeaser() {
  const [current, setCurrent] = useState(0);
  const prevOffsets = useRef<Record<number, number>>({});

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((i) => (i + 1) % teaserImages.length);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <div id="gallery" className="arc-wrap">
      <div className="arc-header">
        <p className="sec-label reveal">2024 Gallery</p>
        <h2 className="sec-title reveal">Moments worth <em>revisiting</em></h2>
        <p className="arc-sub reveal">A first look from the inaugural Illuminate Life Gala — arrivals, honorees, and the room that celebrated them.</p>
        <div className="arc-header-cta reveal">
          <Link href="/gallery" className="btn-primary"><span>See the Full Gallery</span></Link>
        </div>
      </div>

      <div className="arc-stage">
        {teaserImages.map((img, index) => {
          let offset = index - current;
          if (offset > HALF) offset -= teaserImages.length;
          if (offset < -HALF) offset += teaserImages.length;

          const previous = prevOffsets.current[index];
          const jumping = previous !== undefined && Math.abs(previous - offset) > 1;
          prevOffsets.current[index] = offset;

          const abs = Math.abs(offset);
          const visible = abs <= 3;

          return (
            <div
              key={img.id}
              className="arc-card"
              style={{
                transform: `translateX(${offset * 210}px) translateZ(${abs * 90}px) rotateY(${offset * -20}deg) scale(${1 + abs * 0.12})`,
                opacity: visible ? 1 : 0,
                zIndex: -abs,
                transition: jumping ? 'none' : 'transform .8s cubic-bezier(.2,.8,.2,1), opacity .8s ease',
              }}
            >
              <Image src={`https://picsum.photos/seed/${img.seed}/480/620`} alt={img.caption} width={480} height={620} />
            </div>
          );
        })}
      </div>

      <p className="arc-caption">{teaserImages[current].caption}</p>
    </div>
  );
}
