"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Filter, SlidersHorizontal, ArrowRight, BrainCircuit, Check, Star, ShieldCheck, Activity, Users, Sparkles } from "lucide-react";
import TherapistCard from "@/components/TherapistCard";

const MOCK_THERAPISTS = [
  {
    id: "1",
    name: "Dr. Gayathri R",
    title: "Clinical Psychologist",
    qualification: "M.Phil, PhD",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    experience: "8+ Years",
    rating: 4.9,
    reviews: 120,
    expertise: ["Relationships", "Trauma", "Anxiety"],
    languages: ["English", "Malayalam"],
    nextSlot: "Today, 12:15 PM",
    price: 1500,
    audioDuration: "1:13"
  },
  {
    id: "2",
    name: "Dr. Shamneera",
    title: "Senior Psychiatrist",
    qualification: "MD Psychiatry",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&auto=format&fit=crop",
    experience: "12+ Years",
    rating: 5.0,
    reviews: 240,
    expertise: ["Depression", "Bipolar", "Medical"],
    languages: ["English", "Hindi"],
    nextSlot: "Today, 1:30 PM",
    price: 2500,
    audioDuration: "0:58"
  },
  {
    id: "3",
    name: "Aswathy K",
    title: "Therapist",
    qualification: "MSc Psychology",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    experience: "4+ Years",
    rating: 4.7,
    reviews: 85,
    expertise: ["Stress", "Burnout", "Wellness"],
    languages: ["English", "Tamil"],
    nextSlot: "Tomorrow, 10:00 AM",
    price: 1000,
    audioDuration: "1:43"
  },
  {
    id: "4",
    name: "Jils PV",
    title: "Counseling Psychologist",
    qualification: "MSc Counselling",
    image: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=200&auto=format&fit=crop",
    experience: "5+ Years",
    rating: 4.8,
    reviews: 92,
    expertise: ["Anxiety", "Career", "Men's Health"],
    languages: ["English", "Malayalam"],
    nextSlot: "Today, 4:00 PM",
    price: 1200,
    audioDuration: "0:56"
  }
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filteredData = MOCK_THERAPISTS.filter(t => 
    (selectedFilter === "All" || t.expertise.includes(selectedFilter)) &&
    (t.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    t.expertise.some(e => e.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  return (
    <main className="min-h-screen pb-24 bg-[#fcfbf9]">
      
      {/* 1. COMPACT PRIORITY ASSESSMENT SECTION */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mt-6 md:mt-8">
        <div className="bg-brand-900 rounded-[2.5rem] relative overflow-hidden shadow-2xl shadow-brand-900/10">
          
          {/* Subtle Background Art */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
             <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-brand-500/30 rounded-full blur-[80px]"></div>
             <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-700/20 rounded-full blur-[100px]"></div>
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          </div>

          <div className="relative z-10 p-8 md:p-12 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* Left Content */}
            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-brand-200 text-xs font-bold uppercase tracking-widest mb-4">
                <Sparkles size={12} className="text-brand-400" />
                <span>AI Clinical Matching</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight font-display">
                Not sure who to talk to? <br />
                <span className="text-brand-200 opacity-80">Let our AI guide you.</span>
              </h1>
              
              <p className="text-brand-100/70 text-sm md:text-base mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
                Answer a few clinical questions. We analyze 50+ data points to match you with the specialist best suited for your recovery.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Link href="/assessment" className="bg-white text-brand-900 px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-brand-50 transition-all shadow-lg flex items-center gap-2 group">
                  Start Free Assessment <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
                </Link>
                <div className="text-xs font-bold text-brand-400 flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded-full bg-brand-700 border border-brand-800"></div>)}
                  </div>
                  <span>1.2k People matched today</span>
                </div>
              </div>
            </div>

            {/* Right Visual: Compact Dashboard Card */}
            <div className="hidden lg:block w-full max-w-[340px]">
               <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <p className="text-[10px] text-brand-300 font-bold uppercase tracking-wider mb-1">Live Analysis</p>
                      <h3 className="text-white font-bold text-lg">My Health Profile</h3>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400 border border-green-500/20">
                      <Activity size={16} />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-white/5 rounded-xl p-3 flex items-center justify-between border border-white/5">
                      <span className="text-xs text-brand-100 font-medium">Symptom Match</span>
                      <span className="text-xs font-bold text-white bg-green-500/20 px-2 py-0.5 rounded text-green-300">98%</span>
                    </div>
                    <div className="bg-white/5 rounded-xl p-3 flex items-center justify-between border border-white/5">
                      <span className="text-xs text-brand-100 font-medium">Therapist Fit</span>
                      <span className="text-xs font-bold text-white bg-brand-500/20 px-2 py-0.5 rounded text-brand-300">High</span>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-white/10 flex justify-between items-center">
                    <div className="text-[10px] text-brand-400 font-mono">ID: 8824-XJ</div>
                    <div className="flex items-center gap-1 text-[10px] text-brand-200 font-bold">
                      <ShieldCheck size={12} /> Secure
                    </div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </div>

      {/* 2. SEARCH & FILTERS */}
      <section className="max-w-7xl mx-auto px-6 mt-12 relative z-20">
        <div className="bg-white rounded-2xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] border border-brand-100 p-2 pl-4 md:p-3 flex flex-col md:flex-row gap-2 items-center">
            <div className="relative flex-grow w-full">
               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-300" size={20} />
               <input 
                 type="text" 
                 placeholder="Search specialists by name, expertise, or condition..." 
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
                 className="w-full pl-10 pr-4 py-3 bg-transparent text-brand-900 font-medium placeholder-brand-300 focus:outline-none text-sm"
               />
            </div>
            <div className="w-px h-8 bg-brand-100 hidden md:block"></div>
            <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 no-scrollbar">
               {["All", "Anxiety", "Depression", "Trauma", "Relationships"].map((filter) => (
                 <button 
                   key={filter}
                   onClick={() => setSelectedFilter(filter)}
                   className={`px-5 py-2.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                     selectedFilter === filter 
                     ? "bg-brand-900 text-white shadow-md" 
                     : "bg-brand-50 text-brand-600 border border-brand-100 hover:bg-brand-100 hover:border-brand-200"
                   }`}
                 >
                   {filter}
                 </button>
               ))}
               <button className="px-4 py-2.5 rounded-lg bg-white border border-brand-200 text-brand-700 hover:bg-brand-50 transition-colors shadow-sm">
                 <SlidersHorizontal size={16} />
               </button>
            </div>
        </div>
      </section>

      {/* 3. EXPERT GRID */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl font-bold text-brand-900 mb-1 font-display">Specialist Directory</h2>
            <p className="text-brand-500 text-xs font-bold uppercase tracking-wider">Browse our verified clinical experts</p>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-brand-600 cursor-pointer bg-white px-4 py-2 rounded-lg border border-brand-100 shadow-sm hover:text-brand-900 transition-colors">
             Sort by: Recommended <Filter size={12} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map((therapist) => (
            <TherapistCard key={therapist.id} data={therapist} />
          ))}
        </div>

        {filteredData.length === 0 && (
          <div className="text-center py-24 bg-white rounded-3xl border border-dashed border-brand-200">
            <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-300">
              <Search size={24} />
            </div>
            <p className="text-brand-900 font-bold mb-1">No matches found</p>
            <p className="text-brand-400 text-sm mb-6">Try adjusting your filters or search terms</p>
            <button 
              onClick={() => {setSearchQuery(""); setSelectedFilter("All");}}
              className="text-brand-600 font-bold text-xs uppercase tracking-widest border-b border-brand-300 hover:text-brand-900 hover:border-brand-900 transition-all pb-0.5"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </section>

    </main>
  );
}