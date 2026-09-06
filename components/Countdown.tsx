'use client';

import { useEffect, useRef, useState } from 'react';

function FlipDigit({ value }: { value: string }) {
  const [prev, setPrev] = useState(value);
  const [flipping, setFlipping] = useState(false);
  const lastValue = useRef(value);

  useEffect(() => {
    if (lastValue.current === value) return;
    setPrev(lastValue.current);
    lastValue.current = value;
    setFlipping(true);
    const id = setTimeout(() => setFlipping(false), 860);
    return () => clearTimeout(id);
  }, [value]);

  return (
    <div className="flip-digit">
      <div className="flip-face t">{flipping ? value : value}</div>
      <div className="flip-face b"><span>{flipping ? prev : value}</span></div>
      {flipping && (
        <>
          <div className="flip-anim t" key={`t-${value}`}>{prev}</div>
          <div className="flip-anim b" key={`b-${value}`}><span>{value}</span></div>
        </>
      )}
    </div>
  );
}

function FlipUnit({ value, label }: { value: number; label: string }) {
  const padded = String(value).padStart(2, '0');
  return (
    <div className="cd-cell">
      <div className="cd-flip">
        <FlipDigit value={padded[0]} />
        <FlipDigit value={padded[1]} />
      </div>
      <span className="cd-label">{label}</span>
    </div>
  );
}

export default function Countdown() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      // Target: October 15, 2026 at 6:00 PM PDT (Los Angeles) = 01:00 UTC on Oct 16
      // Hardcoded as UTC so every visitor worldwide sees the exact same countdown
      const diff = new Date('2026-10-16T01:00:00Z').getTime() - new Date().getTime();
      if (diff <= 0) return;

      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000)
      });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown">
      <p className="cd-eyebrow">◆ &nbsp; Counting Down to the Evening &nbsp; ◆</p>
      <div className="cd-units">
        <FlipUnit value={time.days} label="Days" />
        <FlipUnit value={time.hours} label="Hours" />
        <FlipUnit value={time.minutes} label="Minutes" />
        <FlipUnit value={time.seconds} label="Seconds" />
      </div>
    </div>
  );
}
