"use client";

import { useState, useEffect } from "react";
import { Play, Pause, Eye, Clock, Star, BadgeCheck, Languages, GraduationCap } from "lucide-react";

interface TherapistProps {
  data: {
    id: string;
    name: string;
    title: string;
    qualification: string;
    image: string;
    experience: string;
    rating: number;
    reviews: number;
    expertise: string[];
    languages: string[];
    nextSlot: string;
    price: number;
    audioDuration: string;
  };
}

export default function TherapistCard({ data }: TherapistProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [barHeights, setBarHeights] = useState<number[]>([]);

  useEffect(() => {
    setBarHeights(Array.from({ length: 24 }, () => 20 + Math.random() * 60));
  }, []);

  return (
    <div className="bg-white rounded-2xl border border-brand-100 shadow-[0_2px_10px_-4px_rgba(74,59,42,0.05)] hover:shadow-[0_15px_40px_-10px_rgba(74,59,42,0.1)] hover:border-brand-300 transition-all duration-300 flex flex-col h-full group relative overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full h-1 bg-brand-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

      <div className="p-6 flex flex-col h-full">
        
        
        <div className="flex gap-4 mb-5">
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-inner bg-brand-50">
              <img src={data.image} alt={data.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-sm">
               <BadgeCheck size={16} className="text-brand-600 fill-brand-100" />
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-bold text-brand-900 truncate pr-2">{data.name}</h3>
              <div className="flex items-center gap-1 text-[10px] font-bold bg-brand-50 text-brand-700 px-2 py-0.5 rounded-full border border-brand-100">
                <Star size={10} fill="currentColor" /> {data.rating}
              </div>
            </div>
            <p className="text-xs font-medium text-brand-500 mb-0.5">{data.title}</p>
            <p className="text-[10px] text-gray-400 flex items-center gap-1">
              <GraduationCap size={10} /> {data.qualification}
            </p>
          </div>
        </div>

        
        <div className="grid grid-cols-2 gap-2 mb-5">
          <div className="bg-brand-50/50 rounded-lg p-2 border border-brand-100/50">
            <p className="text-[10px] text-brand-400 uppercase font-bold tracking-wider">Experience</p>
            <p className="text-xs font-bold text-brand-800">{data.experience}</p>
          </div>
          <div className="bg-brand-50/50 rounded-lg p-2 border border-brand-100/50">
            <p className="text-[10px] text-brand-400 uppercase font-bold tracking-wider">Language</p>
            <p className="text-xs font-bold text-brand-800 truncate">{data.languages.join(", ")}</p>
          </div>
        </div>

        
        <div className="mb-6 flex-grow">
          <div className="flex flex-wrap gap-2">
            {data.expertise.slice(0, 3).map((tag, i) => (
              <span key={i} className="px-2.5 py-1 bg-white border border-brand-200 text-brand-700 rounded-md text-[10px] font-bold uppercase tracking-wide">
                {tag}
              </span>
            ))}
            {data.expertise.length > 3 && (
              <span className="px-2 py-1 text-[10px] font-bold text-brand-400">+{data.expertise.length - 3} more</span>
            )}
          </div>
        </div>

        
        <div className="mb-6">
          <div className="flex items-center gap-3 bg-white border border-brand-100 rounded-xl p-2 shadow-sm group-hover:border-brand-300 transition-colors">
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-8 h-8 rounded-lg bg-brand-900 flex items-center justify-center text-white hover:bg-brand-700 transition-all flex-shrink-0"
            >
              {isPlaying ? <Pause size={10} fill="currentColor" /> : <Play size={10} fill="currentColor" className="ml-0.5" />}
            </button>
            
            <div className="flex-1 flex items-center gap-[2px] h-6 overflow-hidden opacity-60">
              {barHeights.map((height, i) => (
                <div 
                  key={i} 
                  className={`w-1 rounded-full bg-brand-800 ${isPlaying ? 'audio-wave-bar' : ''}`}
                  style={{ 
                    height: `${height}%`,
                    animationDelay: `${i * 0.05}s` 
                  }} 
                />
              ))}
            </div>
            <span className="text-[10px] font-bold text-brand-400 min-w-[30px] text-right">{data.audioDuration}</span>
          </div>
        </div>

        
        <div className="pt-4 border-t border-brand-100 flex items-center justify-between mt-auto">
          <div>
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-md w-fit mb-1">
               <Clock size={10} /> {data.nextSlot}
            </div>
            <p className="text-sm font-bold text-brand-900">
              ₹{data.price} <span className="text-[10px] font-medium text-brand-400 font-sans">/ Session</span>
            </p>
          </div>

          <div className="flex gap-2">
            <button className="w-9 h-9 flex items-center justify-center rounded-xl border border-brand-200 text-brand-600 hover:bg-brand-50 transition-colors">
              <Eye size={16} />
            </button>
            <button className="bg-brand-900 text-white px-5 py-2 rounded-xl text-xs font-bold hover:bg-brand-800 transition-all shadow-md active:scale-95">
              Book Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}