import React from 'react';
import { Instagram, ArrowUpRight, Heart } from 'lucide-react';
import { SocialPost } from '../types';

interface SocialCardProps {
  post: SocialPost;
}

const SocialCard: React.FC<SocialCardProps> = ({ post }) => {
  return (
    <a 
      href={post.link} 
      className="group relative block aspect-[4/5] overflow-hidden bg-surface cursor-pointer"
    >
      {/* Image */}
      <img 
        src={post.image} 
        alt={post.caption}
        className="w-full h-full object-cover transition-all duration-700 ease-in-out grayscale group-hover:grayscale-0 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between p-6">
        <div className="flex justify-between items-start translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
          <div className="bg-white/10 backdrop-blur-md p-2 rounded-full text-white">
            <Instagram size={16} />
          </div>
          <ArrowUpRight className="text-white" size={20} />
        </div>

        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
          <p className="text-white font-medium text-sm leading-snug line-clamp-3 mb-4">
            {post.caption}
          </p>
          <div className="flex items-center gap-2 text-white/60 text-xs font-mono uppercase tracking-wider">
            <Heart size={12} className="text-brand fill-brand" />
            <span>{post.likes}</span>
          </div>
        </div>
      </div>

      {/* Decoration Border on Hover */}
      <div className="absolute inset-0 border border-brand/50 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 pointer-events-none"></div>
    </a>
  );
};

export default SocialCard;
