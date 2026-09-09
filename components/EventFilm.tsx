'use client';

const VIDEO_ID = '1w-kgfIJHeY';
const YOUTUBE_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`;
const THUMBNAIL_URL = `https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`;

export default function EventFilm() {
  return (
    <div id="film" className="film-wrap">
      <div
        className="film-video-layer"
        style={{
          backgroundImage: `url(${THUMBNAIL_URL})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="film-scrim" />

      <div className="film-overlay">
        <p className="film-eyebrow">2024, Revisited</p>
        <h2 className="film-headline">The evening, <em>captured</em></h2>
        <p className="film-caption">Moments from the inaugural Illuminate Life Gala &middot; The Beverly Hilton</p>
        <a
          href={YOUTUBE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ marginTop: '28px', display: 'inline-flex' }}
        >
          <span>Watch on YouTube</span>
        </a>
      </div>
    </div>
  );
}