'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from './Hero';
import EventFilm from './EventFilm';

export default function HeroFilmStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const filmY = useTransform(scrollYProgress, [0, 1], ['100%', '0%']);

  return (
    <div className="stack-outer" ref={containerRef}>
      <div className="stack-sticky">
        <Hero />
      </div>
      <motion.div className="stack-sticky stack-film" style={{ y: filmY }}>
        <EventFilm />
      </motion.div>
    </div>
  );
}
