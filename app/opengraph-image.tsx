import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Illuminate Life Gala 2026 — October 15 at The Beverly Hilton';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000000',
          backgroundImage:
            'radial-gradient(circle at 18% 20%, rgba(201,168,76,0.35) 0%, transparent 55%), radial-gradient(circle at 85% 85%, rgba(201,168,76,0.22) 0%, transparent 55%)',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 18,
            marginBottom: 28,
          }}
        >
          <div style={{ width: 60, height: 1, backgroundColor: 'rgba(201,168,76,0.5)', display: 'flex' }} />
          <div style={{ width: 8, height: 8, backgroundColor: '#C9A84C', transform: 'rotate(45deg)', display: 'flex' }} />
          <div style={{ width: 60, height: 1, backgroundColor: 'rgba(201,168,76,0.5)', display: 'flex' }} />
        </div>
        <div
          style={{
            fontSize: 96,
            color: '#F4F1EA',
            letterSpacing: '-0.01em',
            display: 'flex',
            fontFamily: 'serif',
          }}
        >
          Illuminate Life
        </div>
        <div
          style={{
            fontSize: 64,
            color: '#C9A84C',
            fontStyle: 'italic',
            marginTop: -10,
            display: 'flex',
            fontFamily: 'serif',
          }}
        >
          Gala
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 26,
            color: '#F4F1EA',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            display: 'flex',
          }}
        >
          October 15, 2026 · The Beverly Hilton
        </div>
        <div
          style={{
            marginTop: 14,
            fontSize: 18,
            color: '#8A8378',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            display: 'flex',
          }}
        >
          Presented by Concierge Health Care International
        </div>
      </div>
    ),
    { ...size }
  );
}
