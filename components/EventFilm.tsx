'use client';

import { useEffect, useRef, useState } from 'react';

const VIDEO_ID = '1w-kgfIJHeY';

export default function EventFilm() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [active, setActive] = useState(false);
  const [paused, setPaused] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(true);
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const togglePause = () => {
    const iframe = iframeRef.current;
    const func = paused ? 'playVideo' : 'pauseVideo';
    iframe?.contentWindow?.postMessage(JSON.stringify({ event: 'command', func, args: [] }), '*');
    setPaused(!paused);
  };

  const toggleMute = () => {
    const iframe = iframeRef.current;
    const func = muted ? 'unMute' : 'mute';
    iframe?.contentWindow?.postMessage(JSON.stringify({ event: 'command', func, args: [] }), '*');
    setMuted(!muted);
  };

  const src = active
    ? `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=0&modestbranding=1&playsinline=1&enablejsapi=1&rel=0`
    : undefined;

  return (
    <div id="film" ref={wrapRef} className="film-wrap">
      <div className="film-video-layer">
        {src && (
          <iframe
            ref={iframeRef}
            src={src}
            title="Illuminate Life Gala — 2024 Recap"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          />
        )}
      </div>
      <div className="film-scrim" />

      {active && (
        <div className="film-controls">
          <button className="film-toggle" onClick={togglePause} aria-label={paused ? 'Play film' : 'Pause film'}>
            {paused ? <span className="film-toggle-play" /> : <span className="film-toggle-pause" />}
          </button>
          <button className="film-toggle" onClick={toggleMute} aria-label={muted ? 'Unmute film' : 'Mute film'}>
            {muted ? (
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor" stroke="none" />
                <line x1="16" y1="9" x2="21" y2="15" />
                <line x1="21" y1="9" x2="16" y2="15" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor" stroke="none" />
                <path d="M16.5 8.5a5 5 0 0 1 0 7" />
                <path d="M19 6a8.5 8.5 0 0 1 0 12" />
              </svg>
            )}
          </button>
        </div>
      )}

      <div className="film-overlay">
        <p className="film-eyebrow">2024, Revisited</p>
        <h2 className="film-headline">The evening, <em>captured</em></h2>
        <p className="film-caption">Moments from the inaugural Illuminate Life Gala &middot; The Beverly Hilton</p>
      </div>
    </div>
  );
}
