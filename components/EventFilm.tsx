'use client';

const VIDEO_ID = '1w-kgfIJHeY';
const YOUTUBE_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`;

export default function EventFilm() {
  return (
    <div id="film" className="film-simple-wrap">
      <div className="film-simple-inner">
        <p className="sec-label reveal">2024, Revisited</p>
        <h2 className="sec-title reveal">The evening, <em>captured</em></h2>
        <p className="film-simple-caption reveal">
          Moments from the inaugural Illuminate Life Gala &middot; The Beverly Hilton
        </p>

        <a
          href={YOUTUBE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="film-simple-btn reveal"
        >
          <span className="film-simple-play">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span>Watch the Recap on YouTube</span>
        </a>
      </div>
    </div>
  );
}