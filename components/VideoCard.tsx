import React from 'react';
import { Play } from 'lucide-react';
import { YoutubeVideo } from '../types';

interface VideoCardProps {
  video: YoutubeVideo;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  return (
    <a 
      href={`https://www.youtube.com/watch?v=${video.videoId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block aspect-video overflow-hidden bg-canvas cursor-pointer border border-white/5"
    >
      {/* Thumbnail */}
      <img 
        src={video.thumbnail} 
        alt={video.title}
        className="w-full h-full object-cover transition-all duration-700 ease-in-out grayscale group-hover:grayscale-0 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
        <div className="bg-brand text-canvas p-4 rounded-full scale-90 opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500 shadow-[0_0_30px_rgba(255,77,0,0.4)]">
          <Play size={24} className="ml-1" fill="currentColor" />
        </div>
      </div>

      {/* Info Bar */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <div className="flex justify-between items-end">
          <h3 className="text-white font-display text-xl md:text-2xl leading-tight max-w-[80%]">
            {video.title}
          </h3>
          <span className="bg-black/80 backdrop-blur-sm text-white font-mono text-xs px-2 py-1 rounded border border-white/10">
            {video.duration}
          </span>
        </div>
      </div>
    </a>
  );
};

export default VideoCard;
