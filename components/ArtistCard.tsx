import React from 'react';
import { Play } from 'lucide-react';
import { Artist } from '../types';

interface ArtistCardProps {
  artist: Artist;
  index?: number;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ artist, index = 0 }) => {
  return (
    <div
      className={`group relative h-100 md:h-120 overflow-hidden bg-surface border border-transparent hover:border-brand/40 hover:shadow-[0_0_40px_rgba(255,77,0,0.2)] transition-all duration-500 cursor-pointer ${index % 2 !== 0 ? 'md:-translate-y-5' : ''}`}
    >
      <img
        src={artist.imageUrl}
        alt={artist.name}
        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out grayscale group-hover:grayscale-0"
      />

      <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-canvas via-canvas/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500">
        <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">


          <div className="flex items-center justify-between gap-4 mb-2">
            <h3 className="font-display font-extrabold text-3xl text-white group-hover:text-brand transition-colors duration-500">{artist.name}</h3>

            {/* <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-100 shadow-[0_0_20px_rgba(255,77,0,0.5)]">
              <Play size={16} className="fill-canvas text-canvas ml-1" />
            </div> */}
          </div>

          <span className="inline-block px-3 py-1 border border-brand text-brand group-hover:bg-white group-hover:border-white group-hover:text-canvas transition-colors duration-500 text-[10px] font-bold uppercase mb-4 shadow-[0_0_10px_rgba(255,77,0,0)] group-hover:shadow-[0_0_15px_rgba(255,77,0,0.4)]">
            {artist.genre}
          </span>

          <div className="h-px w-0 group-hover:w-12 bg-brand transition-all duration-500 delay-200 mb-3"></div>

          <p className="text-paint/70 text-xs max-w-[90%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300 leading-relaxed">
            {artist.bio}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;
