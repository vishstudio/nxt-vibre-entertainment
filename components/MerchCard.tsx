import React from 'react';
import { Phone } from 'lucide-react';
import { MerchItem } from '../types';

interface MerchCardProps {
  item: MerchItem;
}

const MerchCard: React.FC<MerchCardProps> = ({ item }) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[4/5] bg-canvas overflow-hidden mb-6 border border-white/5">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        />
        
        {item.status !== 'Available' && (
          <div className="absolute top-4 left-4 bg-brand text-canvas text-[10px] font-bold px-2 py-1 uppercase tracking-wider">
            {item.status}
          </div>
        )}

        <div className="absolute inset-0 bg-brand/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        
        {/* Order by Call Button */}
        <a 
          href="tel:+1234567890" 
          className="absolute bottom-6 right-6 flex items-center gap-2 bg-paint text-canvas px-4 py-3 rounded-full translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out hover:bg-brand hover:text-canvas shadow-xl"
        >
          <span className="font-mono text-xs font-bold uppercase tracking-wider">Order</span>
          <Phone size={16} />
        </a>
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-start">
          <h3 className="font-display font-bold text-xl text-paint group-hover:text-brand transition-colors w-2/3 leading-none">
            {item.name}
          </h3>
          <span className="font-mono text-paint/70 text-sm">{item.price}</span>
        </div>
      </div>
    </div>
  );
};

export default MerchCard;
