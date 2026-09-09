'use client';

const VIDEO_ID = '1w-kgfIJHeY';
const YOUTUBE_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`;
// Using a real event photo instead of YouTube's auto-generated thumbnail —
// the video's actual thumbnail frame turned out to be a title-card slide,
// not a usable background image.
const BACKGROUND_IMAGE = '/gallery/band-topshelf-2.jpg';

export default function EventFilm() {
  return (
    <div id="film" className="film-wrap">
      <div
        className="film-video-layer"
        style={{
          backgroundImage: `url(${BACKGROUND_IMAGE})`,
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